import { useEffect, useRef, useState } from "react";

const PILLARS = [
  {
    n: "01",
    label: "Atrair",
    title: "Atrair Clientes Qualificados",
    text:
      "Para aumentar as vendas do seu negócio, é fundamental atrair leads qualificados — pessoas com real interesse no seu produto ou serviço e potencial para se tornarem clientes.",
  },
  {
    n: "02",
    label: "Valor",
    title: "Construir Percepção De Valor",
    text:
      "Não basta atrair leads. Sua empresa precisa transmitir confiança, autoridade e valor de mercado, para que o cliente perceba que está fazendo a escolha certa ao comprar de você.",
  },
  {
    n: "03",
    label: "Converter",
    title: "Converter Em Vendas",
    text:
      "A tríade se completa quando existe um processo comercial eficiente, capaz de transformar leads qualificados e interessados em clientes reais.",
  },
];

/**
 * Tríade animada por scroll — versão simples e robusta.
 * Sem pinned/sticky. A seção tem altura natural; calculamos um progresso 0→1
 * baseado em quão centralizada a seção está na viewport.
 * - p=0 → esferas espalhadas (entrada)
 * - p=1 → tríade formada
 * - p>=0.55 → texto aparece (a tríade está praticamente formada).
 */
export const TriadScrollSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Começa quando o topo entra (rect.top = vh) e termina quando passa metade.
      const start = vh;
      const end = -rect.height + vh * 0.5;
      const range = start - end;
      const p = Math.min(Math.max((start - rect.top) / range, 0), 1);
      setProgress(p);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const ease = (x: number) => 1 - Math.pow(1 - x, 3);
  // Formação completa aos 65% do progresso da seção.
  const t = ease(Math.min(progress / 0.65, 1));
  const textVisible = progress >= 0.45;
  const activePillar = Math.min(2, Math.floor(progress * 3));
  const triadTilt = (progress - 0.5) * 8;
  const triadLift = (0.5 - progress) * 14;

  // Vértices do triângulo (em % do container)
  const vertices = [
    { x: 0, y: -36 },    // topo
    { x: -34, y: 22 },   // esquerda inferior
    { x: 34, y: 22 },    // direita inferior
  ];

  const colors = [
    "hsl(24 95% 58%)", // laranja
    "hsl(320 85% 62%)", // magenta
    "hsl(268 80% 62%)", // roxo
  ];
  // Offsets dos labels em cada ponta (composição mais estável e legível)
  const labelOffsets = [
    { x: 0, y: -52 }, // topo
    { x: -16, y: 36 }, // esquerda inferior
    { x: 16, y: 36 }, // direita inferior
  ];

  // Perímetro total do triângulo, para desenhar o traço progressivamente
  const dist = (a: { x: number; y: number }, b: { x: number; y: number }) =>
    Math.hypot(a.x - b.x, a.y - b.y);
  const sideA = dist(vertices[0], vertices[1]);
  const sideB = dist(vertices[1], vertices[2]);
  const sideC = dist(vertices[2], vertices[0]);
  const perimeter = sideA + sideB + sideC;
  const travel = (progress * perimeter) % perimeter;

  const lerpPoint = (
    a: { x: number; y: number },
    b: { x: number; y: number },
    ratio: number,
  ) => ({
    x: a.x + (b.x - a.x) * ratio,
    y: a.y + (b.y - a.y) * ratio,
  });

  let orbitPoint = vertices[0];
  if (travel <= sideA) {
    orbitPoint = lerpPoint(vertices[0], vertices[1], travel / sideA);
  } else if (travel <= sideA + sideB) {
    orbitPoint = lerpPoint(vertices[1], vertices[2], (travel - sideA) / sideB);
  } else {
    orbitPoint = lerpPoint(vertices[2], vertices[0], (travel - sideA - sideB) / sideC);
  }

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 md:py-32"
      aria-label="Tríade de Sucesso"
    >
      {/* Glow ambiente */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-hero opacity-40" />

      <div className="container grid items-center gap-12 lg:grid-cols-2">
        {/* Tríade visual */}
        <div
          className="relative mx-auto aspect-square w-[min(500px,84vw)]"
          style={{
            transform: `translateY(${triadLift}px) rotate(${triadTilt}deg)`,
            transition: "transform 0.28s var(--ease-out-soft)",
          }}
        >
          <div className="triad-ring pointer-events-none absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" />
          <div className="triad-ring-rev pointer-events-none absolute left-1/2 top-1/2 h-[56%] w-[56%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-brand-soft opacity-30 blur-3xl" />
          {/* Triângulo desenhado conforme o scroll */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="-50 -50 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="triad-line" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="hsl(24 95% 58%)" />
                <stop offset="50%" stopColor="hsl(320 85% 62%)" />
                <stop offset="100%" stopColor="hsl(268 80% 62%)" />
              </linearGradient>
              <radialGradient id="triad-inner-glow" cx="50%" cy="55%" r="58%">
                <stop offset="0%" stopColor="hsl(320 85% 62% / 0.2)" />
                <stop offset="52%" stopColor="hsl(268 80% 62% / 0.08)" />
                <stop offset="100%" stopColor="hsl(24 95% 58% / 0.01)" />
              </radialGradient>
            </defs>
            <polygon
              points={`${vertices[0].x},${vertices[0].y} ${vertices[1].x},${vertices[1].y} ${vertices[2].x},${vertices[2].y}`}
              fill="url(#triad-inner-glow)"
              opacity={t * 0.8}
            />
            {/* Glow de fundo do traço */}
            <polygon
              points={`${vertices[0].x},${vertices[0].y} ${vertices[1].x},${vertices[1].y} ${vertices[2].x},${vertices[2].y}`}
              fill="none"
              stroke="url(#triad-line)"
              strokeWidth="2.1"
              strokeLinejoin="round"
              strokeLinecap="round"
              opacity={t * 0.14}
              style={{ filter: "blur(1.6px)" }}
            />
            {/* Traço progressivo */}
            <polygon
              points={`${vertices[0].x},${vertices[0].y} ${vertices[1].x},${vertices[1].y} ${vertices[2].x},${vertices[2].y}`}
              fill="none"
              stroke="url(#triad-line)"
              strokeWidth="0.9"
              strokeLinejoin="round"
              strokeLinecap="round"
              pathLength={perimeter}
              strokeDasharray={perimeter}
              strokeDashoffset={perimeter * (1 - t)}
              className="triad-dash"
              style={{ transition: "stroke-dashoffset 0.2s linear" }}
            />
            {/* Pontos nos vértices */}
            {vertices.map((v, i) => (
              <g key={i}>
                <circle
                  cx={v.x}
                  cy={v.y}
                  r={4.4}
                  fill={colors[i]}
                  opacity={t * 0.12}
                  className="triad-pulse"
                  style={{ animationDelay: `${i * 0.45}s` }}
                />
                <circle cx={v.x} cy={v.y} r={3.1} fill={colors[i]} opacity={t * 0.2} />
                <circle cx={v.x} cy={v.y} r={1.55} fill={colors[i]} opacity={t} />
              </g>
            ))}
            {/* Ponto de energia que percorre a tríade conforme o scroll */}
            <circle
              cx={orbitPoint.x}
              cy={orbitPoint.y}
              r={2.2}
              fill="hsl(250 30% 96%)"
              opacity={t}
              style={{ filter: "drop-shadow(0 0 8px hsl(320 85% 62% / 0.8))" }}
            />
          </svg>

          {/* Labels fixos por vértice com destaque progressivo */}
          {PILLARS.map((p, i) => {
            const v = vertices[i];
            const lo = labelOffsets[i];
            const x = v.x + lo.x;
            const y = v.y + lo.y;
            const isActive = i === activePillar;
            return (
              <div
                key={`label-${i}`}
                className="pointer-events-none absolute left-1/2 top-1/2 whitespace-nowrap"
                style={{
                  transform: `translate(calc(-50% + ${x}%), calc(-50% + ${y}%))`,
                  opacity: t,
                  transition: "opacity 0.6s ease",
                }}
              >
                <span
                  className="rounded-full border bg-background/65 px-3.5 py-1.5 font-display text-xs font-semibold backdrop-blur md:text-sm"
                  style={{
                    color: isActive ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))",
                    borderColor: isActive ? `${colors[i]}` : "hsl(var(--border) / 0.6)",
                    boxShadow: isActive
                      ? `0 0 28px ${colors[i]}55, 0 0 0 1px ${colors[i]}33 inset`
                      : "0 8px 30px hsl(252 60% 5% / 0.35)",
                  }}
                >
                  {p.label}
                </span>
              </div>
            );
          })}
          {/* Glow central sutil */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-brand opacity-20 blur-3xl"
            style={{ opacity: t * 0.25 }}
          />
        </div>

        {/* Texto */}
        <div
          className="space-y-6 transition-all duration-700"
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gradient">
            A Tríade do Sucesso
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
            Três pilares essenciais para o{" "}
            <span className="text-gradient">crescimento real</span> da sua empresa.
          </h2>
          <ul className="space-y-5">
            {PILLARS.map((p, i) => (
              <li
                key={p.n}
                className="flex gap-4 transition-all duration-700"
                style={{
                  transitionDelay: `${i * 120}ms`,
                  opacity: textVisible ? 1 : 0,
                  transform: textVisible ? "translateY(0)" : "translateY(16px)",
                }}
              >
                <span
                  className="triad-number-chip grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-bold text-white"
                  style={{ animationDelay: `${i * 0.8}s` }}
                  aria-hidden
                >
                  {p.n}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
