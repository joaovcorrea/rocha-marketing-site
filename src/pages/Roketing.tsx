import { useEffect, useState } from "react";
import {
  Rocket, ShoppingBag, Zap, BarChart3, Sparkles, Target, MessageCircle,
  TrendingUp, Wrench, Store, Globe2, FileCheck2, Server, CheckCircle2, ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { AnimatedBackdrop } from "@/components/site/AnimatedBackdrop";
import { CTAButton } from "@/components/site/CTAButton";
import { SEO } from "@/components/site/SEO";
import roketingHero from "@/assets/roketing-hero.jpg";

/* Foguete que segue o scroll (efeito "vivo" exclusivo do Roketing) */
const ScrollRocket = () => {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = Math.min(Math.max(window.scrollY / max, 0), 1);
      setY(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed right-6 z-30 hidden md:block transition-transform duration-100"
      style={{ top: `${10 + y * 70}vh`, transform: `rotate(${-15 + y * 30}deg)` }}
    >
      <div className="relative">
        <div className="absolute inset-0 -z-10 h-16 w-16 rounded-full bg-gradient-brand opacity-40 blur-2xl animate-pulse-glow" />
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow">
          <Rocket className="h-7 w-7" />
        </div>
      </div>
    </div>
  );
};

const OFFERS = [
  { Icon: ShoppingBag, t: "Implantação no Mercado Livre", d: "Criamos e estruturamos sua loja para vender com autoridade no marketplace." },
  { Icon: Target, t: "Estratégias para destacar produtos", d: "Posicionamento, anúncios e inteligência comercial para aumentar competitividade." },
  { Icon: TrendingUp, t: "Crescimento em vendas", d: "Foco em performance, escala e aumento de faturamento." },
  { Icon: Wrench, t: "Melhoria contínua", d: "Análise constante da operação para evoluir resultados mês após mês." },
];

const REQUIREMENTS = [
  { Icon: Store, t: "Possuir loja física ou e-commerce" },
  { Icon: Globe2, t: "Desejar expandir vendas online" },
  { Icon: Sparkles, t: "Disposto a profissionalizar a operação" },
  { Icon: FileCheck2, t: "Possuir certificado digital ativo" },
  { Icon: Server, t: "Utilizar sistema ERP ou gestão integrada" },
];

const Roketing = () => (
  <>
    <SEO
      title="Roketing | Rocha Marketing"
      description="Estruture sua operacao no Mercado Livre com estrategia, integracao e performance para escalar vendas com previsibilidade."
      path="/roketing"
      keywords="mercado livre, consultoria marketplace, vendas online, gestao de anuncios"
    />
    <ScrollRocket />

    {/* HERO */}
    <section className="relative overflow-hidden">
      <AnimatedBackdrop variant="warm" />
      <div className="container relative grid items-center gap-12 py-24 md:grid-cols-2 md:py-32">
        <div className="text-center md:text-left">
          <Reveal><SectionEyebrow items={["Mercado Livre", "Integração", "Performance"]} /></Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 font-display text-5xl font-extrabold leading-[1.05] md:text-7xl">
              Venda mais no <span className="text-gradient">marketplace líder</span> do Brasil.
            </h1>
          </Reveal>
          <Reveal delay={220}><div className="mx-auto mt-6 h-[2px] w-40 divider-gradient md:mx-0" /></Reveal>
          <Reveal delay={300}>
            <p className="mt-6 max-w-xl text-muted-foreground md:text-lg">
              Se você deseja construir uma operação sólida no Mercado Livre e aumentar o faturamento da sua empresa, conheça a <strong className="text-foreground">Roketing</strong>: solução estratégica para negócios que querem crescer de forma profissional dentro do maior marketplace do país.
            </p>
            <p className="mt-4 max-w-xl text-muted-foreground md:text-lg">
              Transformamos sua operação em um canal real de vendas — com estrutura, estratégia e foco em resultado.
            </p>
          </Reveal>
          <Reveal delay={420}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
              <CTAButton as="a" href="#roketing-form" variant="primary" size="lg">
                <Zap className="h-5 w-5" /> Quero falar com um especialista
              </CTAButton>
              <CTAButton as="a" href="https://api.whatsapp.com/send?phone=554196796939" target="_blank" rel="noopener noreferrer" variant="whatsapp" size="lg">
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </CTAButton>
            </div>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-brand opacity-30 blur-3xl" />
            <div className="group relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/40 shadow-card backdrop-blur">
              <div className="absolute inset-0 z-10 bg-gradient-to-tr from-primary/20 via-transparent to-accent/10 mix-blend-overlay" />
              <img
                src={roketingHero}
                alt="Operador de logística movimentando caixa em centro de distribuição"
                loading="eager"
                className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/90 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border/70 bg-card/80 px-4 py-3 shadow-glow backdrop-blur">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Operação</p>
              <p className="font-display text-sm font-bold text-gradient">Logística & Vendas</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* O QUE OFERECEMOS */}
    <section className="container py-20">
      <Reveal className="text-center">
        <SectionEyebrow items={["O Que", "Oferecemos"]} />
        <h2 className="mt-6 font-display text-4xl font-bold md:text-6xl">
          Estrutura completa para <span className="text-gradient">vender mais</span>.
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {OFFERS.map((s, i) => (
          <Reveal key={s.t} delay={i * 100}>
            <div className="hover-lift group relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-6 backdrop-blur transition hover:border-primary/40">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-50" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand-soft text-primary">
                <s.Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* REQUISITOS */}
    <section className="container py-20">
      <Reveal className="text-center">
        <SectionEyebrow items={["Requisitos", "Para", "Participar"]} />
        <h2 className="mt-6 font-display text-4xl font-bold md:text-6xl">
          Sua operação está <span className="text-gradient">pronta para escalar</span>?
        </h2>
      </Reveal>
      <div className="mx-auto mt-14 grid max-w-4xl gap-4 md:grid-cols-2">
        {REQUIREMENTS.map((r, i) => (
          <Reveal key={r.t} delay={i * 70}>
            <div className="flex items-center gap-4 rounded-2xl border border-border/70 bg-card/60 p-5 backdrop-blur transition hover:border-primary/40">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand-soft text-primary">
                <r.Icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium text-foreground/90">{r.t}</p>
              <CheckCircle2 className="ml-auto h-5 w-5 shrink-0 text-primary" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* POR QUE COM ESTRATÉGIA */}
    <section className="container py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/60 p-10 shadow-card md:p-16">
          <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-50" />
          <SectionEyebrow items={["Por Que", "Com", "Estratégia"]} />
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-bold md:text-5xl">
            Por que entrar no Mercado Livre <span className="text-gradient">com estratégia</span>?
          </h2>
          <p className="mt-4 max-w-3xl text-muted-foreground md:text-lg">
            Muitas empresas entram no marketplace sem estrutura e acabam competindo apenas por preço. Com a <strong className="text-foreground">Roketing</strong>, sua operação nasce preparada para vender melhor, crescer com consistência e gerar lucro.
          </p>
        </div>
      </Reveal>
    </section>

    {/* INVESTIMENTO */}
    <section className="container py-20">
      <Reveal className="text-center">
        <SectionEyebrow items={["Investimento"]} />
        <h2 className="mt-6 font-display text-4xl font-bold md:text-6xl">
          Estrutura completa para <span className="text-gradient">crescer com performance</span>.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Especialistas em estratégia, design e gestão de anúncios focados em crescimento, performance e escala da sua operação.
        </p>
      </Reveal>
      <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
        <Reveal>
          <div className="hover-lift relative h-full overflow-hidden rounded-3xl border border-primary/40 bg-card/80 p-8 shadow-glow backdrop-blur">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Mensalidade</p>
            <p className="mt-3 font-display text-sm text-muted-foreground">A partir de</p>
            <p className="font-display text-5xl font-extrabold text-gradient">R$ 549</p>
            <p className="text-sm text-muted-foreground">/mês</p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="hover-lift relative h-full overflow-hidden rounded-3xl border border-border/70 bg-card/60 p-8 backdrop-blur">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Onboarding</p>
            <p className="mt-3 font-display text-sm text-muted-foreground">Em até</p>
            <p className="font-display text-5xl font-extrabold">12x R$ 53,07</p>
            <p className="text-sm text-muted-foreground">Pago somente 1x</p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* CTA FINAL com formulário */}
    <section id="roketing-form" className="container py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/60 p-8 shadow-card md:p-12">
          <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-60" />
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <SectionEyebrow items={["Quero", "Vender", "no ML"]} />
              <h2 className="mt-6 font-display text-4xl font-bold md:text-6xl">
                Quero vender no <span className="text-gradient">Mercado Livre</span>.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Preencha o formulário ao lado para analisarmos sua operação e entendermos se sua empresa está pronta para escalar no marketplace.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <CTAButton as="a" href="https://api.whatsapp.com/send?phone=554196796939&text=Quero%20vender%20no%20Mercado%20Livre" target="_blank" rel="noopener noreferrer" variant="whatsapp" size="lg">
                  <MessageCircle className="h-5 w-5" /> WhatsApp
                </CTAButton>
              </div>
            </div>
            <div className="rounded-2xl border border-border/70 bg-card/80 p-6 backdrop-blur md:p-8">
              <form
                className="space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.open("https://api.whatsapp.com/send?phone=554196796939&text=Quero%20vender%20no%20Mercado%20Livre", "_blank");
                }}
              >
                <input required type="text" name="nome" placeholder="Nome" className="w-full rounded-lg border border-border bg-background-soft/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30" />
                <input required type="tel" name="telefone" placeholder="Telefone" className="w-full rounded-lg border border-border bg-background-soft/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30" />
                <input required type="email" name="email" placeholder="E-mail" className="w-full rounded-lg border border-border bg-background-soft/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30" />
                <input type="text" name="empresa" placeholder="Empresa" className="w-full rounded-lg border border-border bg-background-soft/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30" />
                <textarea name="mensagem" rows={3} placeholder="Conte-nos sobre sua operação atual" className="w-full rounded-lg border border-border bg-background-soft/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30" />
                <CTAButton type="submit" variant="primary" size="lg" className="w-full">
                  <ArrowRight className="h-5 w-5" /> Enviar análise
                </CTAButton>
              </form>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  </>
);

export default Roketing;
