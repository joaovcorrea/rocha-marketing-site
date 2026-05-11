import { Link } from "react-router-dom";
import {
  ArrowRight,
  MessageCircle,
  BarChart3,
  Brain,
  Briefcase,
  Globe2,
  Megaphone,
  Search,
  Sparkles,
  Target,
} from "lucide-react";
import { CTAButton } from "@/components/site/CTAButton";
import { Reveal } from "@/components/site/Reveal";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { TriadScrollSection } from "@/components/site/TriadScrollSection";
import { PortfolioFlipCard } from "@/components/site/PortfolioFlipCard";
import { AnimatedBackdrop } from "@/components/site/AnimatedBackdrop";
import { GoogleReviews } from "@/components/site/GoogleReviews";
import { SEO } from "@/components/site/SEO";
import clientSantosGoncalves from "@/assets/clients/santos-goncalves.png";
import clientLavessi from "@/assets/clients/lavessi.png";
import clientConfraria from "@/assets/clients/confraria-store.png";
import clientDogzen from "@/assets/clients/dogzen.png";
import clientPuroLuxo from "@/assets/clients/puro-luxo.png";
import clientInClip from "@/assets/clients/in-clip.png";
import clientRhayeneOdonto from "@/assets/clients/rhayene-odonto.png";
import { WHATSAPP_LINK } from "@/lib/contact";

const CLIENTS = [
  { src: clientSantosGoncalves, name: "Santos & Gonçalves Advocacia" },
  { src: clientLavessi, name: "Lavessi" },
  { src: clientConfraria, name: "Confraria Store" },
  { src: clientDogzen, name: "DogZen Espaço Pet" },
  { src: clientPuroLuxo, name: "Puro Luxo" },
  { src: clientInClip, name: "InClip" },
  { src: clientRhayeneOdonto, name: "Rhayene Odonto" },
];

const PORTFOLIO = [
  {
    icon: <Globe2 className="h-6 w-6" />,
    title: "Sites & Landing Pages",
    short: "Páginas rápidas, modernas e construídas para conversão.",
    full: "Criação de sites e landing pages otimizados e tecnologicamente avançados, rápidos e estruturados para transformar visitantes em clientes.",
    accent: "from-primary via-primary-glow to-accent",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Criativos",
    short: "Peças que comunicam autoridade e geram cliques.",
    full: "Produção de criativos profissionais para campanhas, redes sociais e sites — atraem atenção e geram resultados.",
    accent: "from-accent via-secondary to-primary",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Tráfego Pago",
    short: "Investimento que vira crescimento previsível.",
    full: "Gestão estratégica de mídia paga para transformar investimento em vendas, atraindo clientes qualificados em escala.",
    accent: "from-secondary via-accent to-primary",
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Identidade Visual",
    short: "Marcas únicas, memoráveis e profissionais.",
    full: "Desenvolvemos marcas com identidade visual que transmite valor, personalidade e posicionamento.",
    accent: "from-primary via-accent to-secondary",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Raio-X Digital",
    short: "Diagnóstico completo da sua presença digital.",
    full: "Diagnóstico profissional da presença digital, identificando erros, oportunidades e caminhos de crescimento.",
    accent: "from-secondary via-primary to-accent",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Agentes de IA",
    short: "Atendimento inteligente que qualifica leads 24/7.",
    full: "Implementamos agentes de IA que qualificam leads automaticamente, otimizando atendimento, vendas e processos.",
    accent: "from-primary-glow via-accent to-secondary",
  },
  {
    icon: <Megaphone className="h-6 w-6" />,
    title: "CRM",
    short: "Relacionamento estruturado, vendas multiplicadas.",
    full: "Estruturamos CRM para fidelizar clientes e organizar processos comerciais mais eficientes.",
    accent: "from-accent via-primary to-secondary",
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: "SEO",
    short: "Mais presença no Google de forma orgânica.",
    full: "Estratégias de SEO para aumentar sua presença no Google, atraindo clientes orgânicos e fortalecendo sua autoridade.",
    accent: "from-secondary via-accent to-primary-glow",
  },
];

const STEPS = [
  { n: "01", title: "Planejamento", text: "Analisamos seu mercado e desenvolvemos um plano estratégico customizado." },
  { n: "02", title: "Campanhas", text: "Criamos campanhas com criativo e mídia alinhados ao objetivo." },
  { n: "03", title: "Execução", text: "Anunciamos seus produtos e serviços nos canais certos." },
  { n: "04", title: "Performance", text: "Medimos tudo com relatórios para guiar a próxima decisão." },
];

const Index = () => {
  return (
    <>
      <SEO
        title="Rocha Marketing | Assessoria de Marketing de Alta Performance"
        description="Assessoria estratégica de marketing orientada por dados, tecnologia e performance para atrair clientes qualificados e escalar resultados."
        path="/"
        keywords="assessoria de marketing, marketing digital, trafego pago, SEO, CRM, Curitiba"
      />
      {/* ============== HERO ============== */}
      <section className="relative overflow-hidden">
        <AnimatedBackdrop />
        <div className="container relative flex min-h-[88vh] flex-col items-center justify-center py-16 text-center md:py-24">
          <Reveal>
            <SectionEyebrow items={["Assessoria", "Dados", "Performance"]} />
          </Reveal>

          <Reveal delay={120}>
             <h1 className="mt-8 max-w-5xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl md:text-7xl">
              Marketing de{" "}
              <span className="text-gradient">alta performance</span>{" "}
              impulsionado por tecnologia e dados.
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <div className="mx-auto mt-6 h-[2px] w-40 divider-gradient" />
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
              Combinamos estratégia, execução e análise orientada a dados para
              atrair clientes qualificados, fortalecer sua marca e tornar o
              crescimento previsível.
            </p>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <CTAButton
                as="a"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
              >
                <MessageCircle className="h-5 w-5" /> Entre em contato
              </CTAButton>
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition hover:text-foreground"
              >
                Ver o que fazemos
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">
            Role para descobrir ↓
          </div>
        </div>
      </section>

      {/* ============== QUEM SOMOS ============== */}
      <section className="container py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Não somos uma agência tradicional.
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
              Somos uma{" "}
              <span className="text-gradient">assessoria estratégica</span> de
              marketing.
            </h2>
            <div className="mt-4 h-[2px] w-32 divider-gradient" />
          </Reveal>
          <Reveal delay={150}>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Estruturamos toda a estratégia de crescimento da sua empresa
                com base em dados, tecnologia e análise de performance —
                garantindo que cada ação tenha um único objetivo: gerar
                resultados reais.
              </p>
              <p>
                Estratégia, direção e execução com foco em performance:
                medição, aprendizado e evolução contínua.
              </p>
              <Link
                to="/quem-somos"
                className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-primary hover:text-accent"
              >
                Conheça nosso método <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============== PORTFÓLIO (FLIP CARDS) ============== */}
      <section className="container py-20">
        <Reveal className="text-center">
          <SectionEyebrow items={["Portfólio", "Frentes", "Resultados"]} />
          <h2 className="mt-6 font-display text-3xl font-bold sm:text-4xl md:text-6xl">
            Tudo o que fazemos para a sua{" "}
            <span className="text-gradient">marca crescer.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Toque ou passe o mouse nos cards para ver o que entregamos em cada
            frente.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PORTFOLIO.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <PortfolioFlipCard
                icon={p.icon}
                title={p.title}
                shortText={p.short}
                fullText={p.full}
                accent={p.accent}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============== TRÍADE (SCROLL-PIN) ============== */}
      <TriadScrollSection />

      {/* ============== NOVA ERA ============== */}
      <section className="container py-24">
        <Reveal className="text-center">
          <SectionEyebrow items={["Tecnologia", "Estratégia", "Resultado"]} />
          <h2 className="mt-6 font-display text-3xl font-bold sm:text-4xl md:text-6xl">
            2026 marca uma <span className="text-gradient">nova era.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            Deixamos de nos posicionar como agência e passamos a atuar como uma
            assessoria orientada por estratégia, dados e resultados.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Visão Estratégica",
              text: "Antes de qualquer execução, estruturamos um planejamento estratégico completo, garantindo clareza, direção e previsibilidade.",
            },
            {
              title: "Customização",
              text: "Cada cliente recebe uma estratégia única, pensada para sua operação. Não trabalhamos com volume — trabalhamos com resultado individual.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="hover-lift glass relative overflow-hidden rounded-2xl p-8 shadow-card">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
                <h3 className="font-display text-2xl font-semibold">
                  {c.title}
                </h3>
                <p className="mt-3 text-muted-foreground">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============== COMO FAZEMOS ============== */}
      <section className="container py-20">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-6xl">
            Como vamos transformar{" "}
            <span className="text-gradient">sua empresa.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Do diagnóstico ao relatório: um fluxo claro para o seu crescimento.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="hover-lift relative h-full rounded-2xl border border-border/70 bg-card/60 p-6 backdrop-blur">
                <span className="font-display text-5xl font-extrabold text-gradient-static opacity-80">
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============== CLIENTES (MARQUEE) ============== */}
      <section className="border-y border-border/60 bg-background-soft/40 py-14">
        <Reveal className="container text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Empresas em todo o Brasil já confiam em nossa estratégia
          </p>
        </Reveal>
        <div className="mt-8 overflow-hidden">
          <div className="marquee-track flex w-max items-center px-8">
            <div className="flex items-center gap-16 pr-16">
              {CLIENTS.map((c) => (
                <img
                  key={c.name}
                  src={c.src}
                  alt={c.name}
                  loading="lazy"
                  className="h-16 w-auto shrink-0 object-contain opacity-80 brightness-0 invert transition hover:opacity-100 md:h-20"
                />
              ))}
            </div>
            <div className="flex items-center gap-16 pr-16" aria-hidden>
              {CLIENTS.map((c) => (
                <img
                  key={`dup-${c.name}`}
                  src={c.src}
                  alt=""
                  loading="lazy"
                  className="h-16 w-auto shrink-0 object-contain opacity-80 brightness-0 invert transition hover:opacity-100 md:h-20"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============== DEPOIMENTOS (GOOGLE REVIEWS) ============== */}
      <GoogleReviews />

      {/* ============== CTA FINAL ============== */}
      <section className="container pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/60 p-10 text-center shadow-card md:p-16">
            <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-60" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Dar o próximo passo leva menos de um minuto
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold sm:text-4xl md:text-6xl">
              Receba um <span className="text-gradient">diagnóstico estratégico</span> do seu negócio.
            </h2>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButton
                as="a"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
              >
                <MessageCircle className="h-5 w-5" /> Falar com especialista
              </CTAButton>
              <Link
                to="/contato"
                className="text-sm font-semibold text-muted-foreground hover:text-foreground"
              >
                Preferir, preencha o formulário →
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default Index;
