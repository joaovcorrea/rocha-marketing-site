import { Reveal } from "@/components/site/Reveal";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { AnimatedBackdrop } from "@/components/site/AnimatedBackdrop";
import { PortfolioFlipCard } from "@/components/site/PortfolioFlipCard";
import { SEO } from "@/components/site/SEO";
import { BarChart3, Brain, Briefcase, Globe2, Megaphone, Search, Sparkles, Target } from "lucide-react";

const ITEMS = [
  { icon: <Globe2 className="h-6 w-6" />, title: "Sites & Landing Pages", short: "Páginas rápidas, modernas e construídas para conversão.", full: "Sites e landing pages otimizados, rápidos e estruturados para transformar visitantes em clientes.", accent: "from-primary via-primary-glow to-accent" },
  { icon: <Sparkles className="h-6 w-6" />, title: "Criativos", short: "Peças que comunicam autoridade e geram cliques.", full: "Criativos profissionais para campanhas, redes sociais e sites — atenção, autoridade e resultados.", accent: "from-accent via-secondary to-primary" },
  { icon: <Target className="h-6 w-6" />, title: "Tráfego Pago", short: "Investimento que vira crescimento previsível.", full: "Gestão estratégica de mídia paga para transformar investimento em vendas qualificadas.", accent: "from-secondary via-accent to-primary" },
  { icon: <Briefcase className="h-6 w-6" />, title: "Identidade Visual", short: "Marcas únicas, memoráveis e profissionais.", full: "Marcas com identidade visual que transmite valor, personalidade e posicionamento.", accent: "from-primary via-accent to-secondary" },
  { icon: <BarChart3 className="h-6 w-6" />, title: "Raio-X Digital", short: "Diagnóstico completo da sua presença digital.", full: "Diagnóstico profissional da presença digital, com erros, oportunidades e caminhos de crescimento.", accent: "from-secondary via-primary to-accent" },
  { icon: <Brain className="h-6 w-6" />, title: "Agentes de IA", short: "Atendimento inteligente que qualifica leads 24/7.", full: "Agentes de IA que qualificam leads automaticamente e otimizam atendimento, vendas e processos.", accent: "from-primary-glow via-accent to-secondary" },
  { icon: <Megaphone className="h-6 w-6" />, title: "CRM", short: "Relacionamento estruturado, vendas multiplicadas.", full: "CRM para fidelizar clientes, organizar relacionamento e ampliar vendas.", accent: "from-accent via-primary to-secondary" },
  { icon: <Search className="h-6 w-6" />, title: "SEO", short: "Mais presença no Google de forma orgânica.", full: "Estratégias de SEO que ampliam sua presença e autoridade no Google.", accent: "from-secondary via-accent to-primary-glow" },
];

const Portfolio = () => (
  <>
    <SEO
      title="Portfolio | Rocha Marketing"
      description="Veja as principais frentes da Rocha Marketing: sites, criativos, trafego pago, identidade visual, CRM, SEO e automacoes com IA."
      path="/portfolio"
      keywords="portfolio marketing, criativos, landing pages, trafego pago, SEO"
    />
    <section className="relative overflow-hidden">
      <AnimatedBackdrop />
      <div className="container relative py-16 text-center md:py-32">
        <Reveal><SectionEyebrow items={["Presença", "Tráfego", "Tecnologia"]} /></Reveal>
        <Reveal delay={120}>
          <h1 className="mt-8 font-display text-3xl font-extrabold leading-[1.05] sm:text-4xl md:text-7xl">
            Do Primeiro Clique Ao{" "}
            <span className="text-gradient">Relacionamento Com Cliente</span>
          </h1>
        </Reveal>
        <Reveal delay={220}><div className="mx-auto mt-6 h-[2px] w-40 divider-gradient" /></Reveal>
        <Reveal delay={300}>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
            Somos uma assessoria de marketing orientada a resultados. Abaixo estão as principais frentes em que atuamos para estruturar presença, demanda e conversão. Na home, os cards interativos do portfólio resumem cada frente — passe o mouse para explorar.
          </p>
        </Reveal>
        <Reveal delay={380}>
          <div className="mx-auto mt-8 grid max-w-3xl gap-3 text-left sm:grid-cols-2">
            <div className="glass rounded-xl px-4 py-3">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Escopo</p>
              <p className="mt-1 font-display text-base font-semibold">Ponta a Ponta</p>
            </div>
            <div className="glass rounded-xl px-4 py-3">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Decisões</p>
              <p className="mt-1 font-display text-base font-semibold">Dados & Performance</p>
            </div>
            <div className="glass rounded-xl px-4 py-3 sm:col-span-2">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Base</p>
              <p className="mt-1 font-display text-base font-semibold">Curitiba · Brasil</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="container py-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((p, i) => (
          <Reveal key={p.title} delay={i * 70}>
            <PortfolioFlipCard icon={p.icon} title={p.title} shortText={p.short} fullText={p.full} accent={p.accent} />
          </Reveal>
        ))}
      </div>
    </section>
  </>
);

export default Portfolio;
