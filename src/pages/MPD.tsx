import { useEffect, useRef, useState } from "react";
import {
  Stethoscope, CalendarCheck, Heart, Sparkles, ShieldCheck, MessageCircle, TrendingUp,
  Compass, Megaphone, Briefcase, LineChart, Palette, MousePointerClick, BarChart3,
  XCircle, CheckCircle2, Quote,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { AnimatedBackdrop } from "@/components/site/AnimatedBackdrop";
import { CTAButton } from "@/components/site/CTAButton";
import { SEO } from "@/components/site/SEO";
import mpdHero from "@/assets/mpd-hero.jpg";

/* "Pulso" cardíaco no fundo — efeito vivo exclusivo do MPD */
const Pulse = () => (
  <svg
    aria-hidden
    className="pointer-events-none absolute inset-x-0 bottom-10 mx-auto h-20 w-[90%] max-w-3xl opacity-40"
    viewBox="0 0 800 80"
    fill="none"
  >
    <defs>
      <linearGradient id="pulse" x1="0" x2="1">
        <stop offset="0%" stopColor="hsl(var(--primary))" />
        <stop offset="50%" stopColor="hsl(var(--accent))" />
        <stop offset="100%" stopColor="hsl(var(--secondary))" />
      </linearGradient>
    </defs>
    <path
      d="M0 40 H180 L210 40 L225 10 L245 70 L265 25 L285 55 L305 40 H520 L540 40 L555 15 L575 65 L595 30 L615 50 L635 40 H800"
      stroke="url(#pulse)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        strokeDasharray: 1600,
        strokeDashoffset: 1600,
        animation: "pulse-draw 4s linear infinite",
      }}
    />
    <style>{`@keyframes pulse-draw { to { stroke-dashoffset: 0; } }`}</style>
  </svg>
);

/* Tilt 3D nos cards (microinteração leve) */
const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ rx: 0, ry: 0 });
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        setT({ rx: (0.5 - y) * 8, ry: (x - 0.5) * 8 });
      }}
      onMouseLeave={() => setT({ rx: 0, ry: 0 })}
      style={{
        transform: `perspective(900px) rotateX(${t.rx}deg) rotateY(${t.ry}deg)`,
        transition: "transform 0.25s var(--ease-out-soft)",
      }}
      className="h-full"
    >
      {children}
    </div>
  );
};

const METHOD = [
  { Icon: Compass, t: "Planejamento estratégico", d: "Construímos o planejamento do seu consultório com previsibilidade de investimento, retorno e ações que serão desenvolvidas." },
  { Icon: Palette, t: "Criativos", d: "Após o planejamento, desenvolvemos seus criativos em formato de vídeos ou posts estáticos." },
  { Icon: Megaphone, t: "Tráfego pago", d: "Criamos as melhores campanhas no Google Ads e Meta Business para atrair pacientes qualificados." },
  { Icon: Briefcase, t: "Comercial", d: "Estruturamos seus processos comerciais e organizamos os dados em relatórios estratégicos com sua equipe." },
  { Icon: LineChart, t: "Análise de resultados", d: "Analisamos continuamente o planejamento, medimos dados e tomamos decisões para escalar resultados." },
];

const PORTFOLIO = [
  { Icon: Sparkles, t: "Identidade visual profissional", d: "Construção de uma marca forte que transmite confiança e autoridade para seus pacientes." },
  { Icon: MousePointerClick, t: "Landing pages para captação", d: "Páginas estratégicas focadas em transformar visitantes em novos pacientes." },
  { Icon: Megaphone, t: "Campanhas e anúncios", d: "Gestão de campanhas digitais para atrair pacientes qualificados para sua clínica." },
  { Icon: BarChart3, t: "Análise de dados", d: "Acompanhamento e otimização constante para melhorar resultados e aumentar conversões." },
];

const NOT_DOING = [
  { t: "Criativos sem sentido", d: "Nosso objetivo não é vender artes ou criativos milagrosos, mas entregar um processo que gere pacientes qualificados." },
  { t: "Volume de leads sem qualidade", d: "Diferente de muitas agências, não buscamos apenas volume ou o lead mais barato. Foco em pacientes reais." },
  { t: "Campanhas sem estudo de mercado", d: "Nenhuma campanha sai sem estudo e planejamento. Cada consultório exige estratégia personalizada para sua região e público." },
];

const MPD = () => (
  <>
    <SEO
      title="MPD | Marketing para Dentistas"
      description="Assessoria de marketing para dentistas com foco em captacao de pacientes particulares, performance e previsibilidade."
      path="/mpd"
      keywords="marketing para dentistas, odontologia, captacao de pacientes, trafego pago odontologico"
    />
    {/* HERO */}
    <section className="relative overflow-hidden">
      <AnimatedBackdrop variant="cool" />
      <Pulse />
      <div className="container relative grid items-center gap-12 py-24 md:grid-cols-2 md:py-32">
        <div className="order-1 text-center md:text-left">
          <Reveal><SectionEyebrow items={["Odontologia", "Marketing", "Resultados"]} /></Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 font-display text-5xl font-extrabold leading-[1.05] md:text-7xl">
              Marketing profissional para <span className="text-gradient">dentistas</span>.
            </h1>
          </Reveal>
          <Reveal delay={220}><div className="mx-auto mt-6 h-[2px] w-40 divider-gradient md:mx-0" /></Reveal>
          <Reveal delay={300}>
            <p className="mt-6 max-w-xl text-muted-foreground md:text-lg">
              Estratégia, posicionamento e estruturação comercial: conheça nossa assessoria de marketing especializada em odontologia.
            </p>
          </Reveal>
          <Reveal delay={420}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
              <CTAButton as="a" href="https://api.whatsapp.com/send?phone=554196796939&text=Quero%20entrar%20em%20contato" target="_blank" rel="noopener noreferrer" variant="whatsapp" size="lg">
                <MessageCircle className="h-5 w-5" /> Entre em contato
              </CTAButton>
              <CTAButton as="a" href="#mpd-form" variant="primary" size="lg">
                <Sparkles className="h-5 w-5" /> Análise gratuita
              </CTAButton>
            </div>
          </Reveal>
          <Reveal delay={520}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground md:justify-start">
              {["100% de satisfação", "4,5x de retorno médio sobre investimento", "Atendimento em todo o Brasil"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1.5 backdrop-blur">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={200} className="order-2">
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-brand opacity-25 blur-3xl" />
            <div className="group relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/40 shadow-card backdrop-blur">
              <div className="absolute inset-0 z-10 bg-gradient-to-tr from-secondary/20 via-transparent to-primary/10 mix-blend-overlay" />
              <img
                src={mpdHero}
                alt="Profissional dentista sorrindo em clínica odontológica moderna"
                loading="eager"
                className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/90 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-2xl border border-border/70 bg-card/80 px-4 py-3 shadow-glow backdrop-blur">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Confiança</p>
              <p className="font-display text-sm font-bold text-gradient">Pacientes Particulares</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* MÉTODO */}
    <section className="container py-20">
      <Reveal className="text-center">
        <SectionEyebrow items={["Conheça", "Nosso", "Método"]} />
        <h2 className="mt-6 font-display text-4xl font-bold md:text-6xl">
          Conheça nosso <span className="text-gradient">método</span>.
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {METHOD.map((p, i) => (
          <Reveal key={p.t} delay={i * 80}>
            <TiltCard>
              <div className="hover-lift group relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-6 backdrop-blur transition hover:border-primary/40">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-50" />
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand-soft text-primary">
                    <p.Icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-3xl font-extrabold text-gradient opacity-60">0{i + 1}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>

    {/* PORTFÓLIO ODONTOLÓGICO */}
    <section className="container py-20">
      <Reveal className="text-center">
        <SectionEyebrow items={["Portfólio", "Odontológico"]} />
        <h2 className="mt-6 font-display text-4xl font-bold md:text-6xl">
          Como podemos <span className="text-gradient">transformar</span> os resultados do seu consultório.
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {PORTFOLIO.map((p, i) => (
          <Reveal key={p.t} delay={i * 90}>
            <div className="hover-lift group relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-6 backdrop-blur transition hover:border-primary/40">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-50" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand-soft text-primary">
                <p.Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-base font-semibold">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* O QUE NÃO FAZEMOS */}
    <section className="container py-20">
      <Reveal className="text-center">
        <SectionEyebrow items={["O que", "Não", "Fazemos"]} />
        <h2 className="mt-6 font-display text-4xl font-bold md:text-6xl">
          Honestidade antes de <span className="text-gradient">qualquer venda</span>.
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {NOT_DOING.map((n, i) => (
          <Reveal key={n.t} delay={i * 90}>
            <div className="hover-lift group relative h-full overflow-hidden rounded-2xl border border-destructive/20 bg-card/60 p-6 backdrop-blur transition hover:border-destructive/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <XCircle className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{n.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{n.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={300}>
        <div className="relative mt-10 overflow-hidden rounded-3xl border border-border/70 bg-card/60 p-10 text-center shadow-card md:p-12">
          <Quote className="mx-auto h-8 w-8 text-primary" />
          <p className="mx-auto mt-4 max-w-3xl font-display text-2xl font-bold leading-tight md:text-4xl">
            Não te entregamos artes bonitas. Entregamos <span className="text-gradient">planejamento de marketing com previsibilidade e resultados</span>.
          </p>
        </div>
      </Reveal>
    </section>

    {/* CASE DE SUCESSO */}
    <section className="container py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-hero p-10 shadow-card md:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <SectionEyebrow items={["Case", "de", "Sucesso"]} />
              <h2 className="mt-6 font-display text-4xl font-bold md:text-5xl">
                Em 30 dias, cada R$ 1 investido retornou <span className="text-gradient">R$ 8,98</span>.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Nem mesmo os investimentos mais seguros do Brasil conseguem proporcionar um retorno de <strong className="text-foreground">798% em apenas 30 dias</strong>.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/70 bg-card/80 p-6 backdrop-blur">
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Investimento</p>
                <p className="mt-2 font-display text-3xl font-extrabold">R$ 2.402,37</p>
              </div>
              <div className="rounded-2xl border border-primary/40 bg-card/80 p-6 backdrop-blur shadow-glow">
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Retorno</p>
                <p className="mt-2 font-display text-3xl font-extrabold text-gradient">R$ 21.570,00</p>
              </div>
              <div className="rounded-2xl border border-border/70 bg-card/80 p-6 backdrop-blur sm:col-span-2">
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Multiplicador</p>
                <p className="mt-2 font-display text-3xl font-extrabold text-gradient">8,98x · 798%</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>

    {/* CTA FINAL com formulário */}
    <section id="mpd-form" className="container py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/60 p-8 shadow-card md:p-12">
          <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-60" />
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <SectionEyebrow items={["CTA", "Final"]} />
              <h2 className="mt-6 font-display text-4xl font-bold md:text-6xl">
                Eleve o nível do <span className="text-gradient">seu consultório</span>.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Preencha o formulário ao lado e receba uma <strong className="text-foreground">análise gratuita</strong>.
              </p>
              <p className="mt-2 text-xs text-muted-foreground/70">Sem compromisso.</p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-card/80 p-6 backdrop-blur md:p-8">
              <form
                className="space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.open("https://api.whatsapp.com/send?phone=554196796939&text=Quero%20uma%20an%C3%A1lise%20gratuita", "_blank");
                }}
              >
                <input required type="text" name="nome" placeholder="Nome" className="w-full rounded-lg border border-border bg-background-soft/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30" />
                <input required type="tel" name="telefone" placeholder="Telefone" className="w-full rounded-lg border border-border bg-background-soft/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30" />
                <input required type="email" name="email" placeholder="E-mail" className="w-full rounded-lg border border-border bg-background-soft/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30" />
                <textarea name="mensagem" rows={3} placeholder="Mensagem (opcional)" className="w-full rounded-lg border border-border bg-background-soft/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30" />
                <CTAButton type="submit" variant="primary" size="lg" className="w-full">
                  <MessageCircle className="h-5 w-5" /> Receber análise gratuita
                </CTAButton>
              </form>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  </>
);

export default MPD;
