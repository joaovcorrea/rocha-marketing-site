import { Reveal } from "@/components/site/Reveal";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { AnimatedBackdrop } from "@/components/site/AnimatedBackdrop";
import { CTAButton } from "@/components/site/CTAButton";
import { SEO } from "@/components/site/SEO";
import { WHATSAPP_LINK, buildMailto, formDataToBody } from "@/lib/contact";
import {
  MessageCircle, Compass, Megaphone, Settings2, LineChart,
  MapPin, Globe2, Database, Sparkles,
} from "lucide-react";
import founderImage from "@/assets/founder-mateus.jpg";

const PROCESS = [
  { Icon: Compass, title: "Análise e posicionamento", text: "Entendimento de mercado e lugar da marca para decidir com clareza." },
  { Icon: Sparkles, title: "Planejamento estratégico", text: "Roteiro de marketing alinhado aos objetivos do negócio — curto e médio prazo." },
  { Icon: Megaphone, title: "Campanhas e mídia", text: "Construção e gestão de campanhas publicitárias com foco em performance." },
  { Icon: Settings2, title: "Execução operacional", text: "Implementação consistente do que foi planejado, sem perder o fio da meada." },
  { Icon: LineChart, title: "Mensuração e otimização", text: "Análise de resultados para ajustar investimento, criativos e canais." },
];

const FACTS = [
  { Icon: MapPin, label: "Sede", value: "Curitiba · PR" },
  { Icon: Globe2, label: "Atendimento", value: "Em todo o Brasil" },
  { Icon: Database, label: "Decisões", value: "Guiadas por dados" },
];

const QuemSomos = () => (
  <>
    <SEO
      title="Quem Somos | Rocha Marketing"
      description="Conheca a Rocha Marketing: assessoria estrategica orientada por dados, com metodo, execucao e foco em crescimento previsivel."
      path="/quem-somos"
      keywords="quem somos rocha marketing, assessoria estrategica, marketing com dados"
    />
    {/* HERO */}
    <section className="relative overflow-hidden">
      <AnimatedBackdrop variant="warm" />
      <div className="container relative py-24 text-center md:py-32">
        <Reveal><SectionEyebrow items={["Assessoria", "Estratégia", "Dados"]} /></Reveal>
        <Reveal delay={120}>
          <h1 className="mt-8 mx-auto max-w-4xl font-display text-5xl font-extrabold leading-[1.05] md:text-7xl">
            Compromisso no sobrenome.{" "}
            <span className="text-gradient">Resultados com método.</span>
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <div className="mx-auto mt-6 h-[2px] w-40 divider-gradient" />
        </Reveal>
        <Reveal delay={300}>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
            A Rocha foi fundada por <strong className="text-foreground">Mateus Correa Rocha</strong>, que colocou o próprio nome na marca como sinal de responsabilidade e visão de longo prazo. Nascemos para ajudar empresas a crescer, se posicionar e expandir resultados com estratégia — conectando negócios a oportunidades reais.
          </p>
        </Reveal>
        <Reveal delay={420}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton as="a" href="#quem-somos-contato" variant="primary" size="lg">
              <Sparkles className="h-5 w-5" /> Falar com a equipe
            </CTAButton>
            <CTAButton as="a" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" variant="whatsapp" size="lg">
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </CTAButton>
          </div>
        </Reveal>

        {/* facts */}
        <Reveal delay={540}>
          <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
            {FACTS.map(({ Icon, label, value }) => (
              <div key={label} className="hover-lift rounded-2xl border border-border/70 bg-card/60 p-5 text-left backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand-soft text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</p>
                    <p className="font-display text-sm font-semibold">{value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    {/* FUNDADOR */}
    <section className="container py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <Reveal>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-brand opacity-30 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border/70 shadow-card">
              <img
                src={founderImage}
                alt="Mateus Correa Rocha — fundador da Rocha Marketing"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent p-5">
                <p className="font-display text-lg font-semibold">Mateus Correa Rocha</p>
                <p className="text-xs text-muted-foreground">Fundador · Rocha Marketing</p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div>
            <SectionEyebrow items={["Compromisso", "Visão", "Legado"]} />
            <h2 className="mt-6 font-display text-4xl font-bold md:text-5xl">
              Compromisso <span className="text-gradient">no sobrenome</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Mateus colocou o próprio nome na marca como um sinal claro de responsabilidade e visão de longo prazo. Cada projeto carrega esse compromisso pessoal com o resultado do cliente.
            </p>
            <p className="mt-3 text-muted-foreground">
              Sob sua liderança, a Rocha cresceu como assessoria estratégica que conecta negócios a oportunidades reais — com método, dados e execução consistente.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* NOSSA HISTÓRIA */}
    <section className="container py-20">
      <Reveal className="text-center">
        <SectionEyebrow items={["História", "Evolução", "Propósito"]} />
        <h2 className="mt-6 font-display text-4xl font-bold md:text-6xl">
          Construímos <span className="text-gradient">relações com propósito</span>.
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="hover-lift glass relative h-full overflow-hidden rounded-2xl p-8 shadow-card">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Origem da marca</p>
            <h3 className="mt-3 font-display text-2xl font-semibold">Mais do que marketing.</h3>
            <p className="mt-4 text-muted-foreground">
              Mais do que uma empresa de marketing, construímos relações com propósito: crescimento sustentável e posicionamento claro no mercado.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="hover-lift glass relative h-full overflow-hidden rounded-2xl p-8 shadow-card">
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Evolução em 2026</p>
            <h3 className="mt-3 font-display text-2xl font-semibold">
              De agência a <span className="text-gradient">assessoria estratégica</span>.
            </h3>
            <p className="mt-4 text-muted-foreground">
              Deixamos o rótulo de "só agência" para atuar como assessoria estratégica de crescimento — alinhada a como realmente entregamos valor.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* COMO TRABALHAMOS */}
    <section className="container py-20">
      <Reveal className="text-center">
        <SectionEyebrow items={["Método", "Estratégia", "Performance"]} />
        <h2 className="mt-6 font-display text-4xl font-bold md:text-6xl">
          Não entregamos <span className="text-gradient">serviços isolados</span>.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Conduzimos um processo completo, personalizado para cada negócio — do diagnóstico à otimização contínua.
        </p>
      </Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROCESS.map(({ Icon, title, text }, i) => (
          <Reveal key={title} delay={i * 80}>
            <div className="hover-lift group relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-6 backdrop-blur transition hover:border-primary/40">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-50" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand-soft text-primary transition group-hover:scale-110">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* MANIFESTO */}
    <section className="container py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/60 p-10 text-center shadow-card md:p-16">
          <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-60" />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Nosso propósito</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold md:text-6xl">
            Acreditamos que empresas crescem quando{" "}
            <span className="text-gradient">marketing, estratégia e dados</span>{" "}
            trabalham juntos.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Nosso propósito é conectar você ao seu cliente — com criatividade e inteligência baseada em dados.
          </p>
        </div>
      </Reveal>
    </section>

    {/* PRÓXIMO PASSO */}
    <section id="quem-somos-contato" className="container pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/60 p-8 shadow-card md:p-12">
          <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-50" />
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            {/* Coluna esquerda: copy */}
            <div>
              <SectionEyebrow items={["Conexão", "Estratégia", "Crescimento"]} />
              <h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">
                Quer entender como a Rocha pode <span className="text-gradient">apoiar o seu crescimento</span>?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Envie uma mensagem — retornamos com <strong className="text-foreground">orientação objetiva</strong> e, se fizer sentido, seguimos para proposta sob medida.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Canal direto com a equipe da assessoria;",
                  "Alinhamento de expectativas sobre marketing e resultados;",
                  "Sem pressão: primeiro conversamos, depois planejamos.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-xl border border-border/60 bg-background-soft/40 p-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-brand" />
                    <span className="text-sm text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-muted-foreground">
                Preencha com calma — usamos os dados só para retornar o contato.
              </p>
            </div>

            {/* Coluna direita: formulário */}
            <div className="rounded-2xl border border-border/70 bg-card/80 p-6 backdrop-blur md:p-8">
              <h3 className="font-display text-xl font-bold md:text-2xl">Fale com a assessoria</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Formulário para falar diretamente com a equipe da Rocha.
              </p>
              <form
                className="mt-5 space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  window.location.href = buildMailto({
                    subject: "Contato — Quem Somos | Rocha Marketing",
                    body: formDataToBody(fd, "Origem: /quem-somos"),
                  });
                  e.currentTarget.reset();
                }}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <input required type="text" name="nome" placeholder="Nome" className="w-full rounded-lg border border-border bg-background-soft/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30" />
                  <input required type="tel" name="telefone" placeholder="Telefone" className="w-full rounded-lg border border-border bg-background-soft/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30" />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <input required type="email" name="email" placeholder="E-mail" className="w-full rounded-lg border border-border bg-background-soft/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30" />
                  <input type="text" name="empresa" placeholder="Empresa" className="w-full rounded-lg border border-border bg-background-soft/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30" />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <select name="porte" defaultValue="" className="w-full rounded-lg border border-border bg-background-soft/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30">
                    <option value="" disabled>Porte da empresa</option>
                    <option value="mei">MEI</option>
                    <option value="micro">Microempresa</option>
                    <option value="pequena">Pequena Empresa</option>
                    <option value="media">Média Empresa</option>
                    <option value="grande">Grande Empresa</option>
                    <option value="multinacional">Multinacional</option>
                  </select>
                  <select name="segmento" defaultValue="" className="w-full rounded-lg border border-border bg-background-soft/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30">
                    <option value="" disabled>Segmento</option>
                    <option value="industria">Indústria</option>
                    <option value="comercio">Comércio / Varejo</option>
                    <option value="servicos">Serviços</option>
                    <option value="saude">Saúde</option>
                    <option value="educacao">Educação</option>
                    <option value="tecnologia">Tecnologia</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
                <textarea required name="mensagem" rows={4} placeholder="Conte-nos um pouco sobre o seu momento e o que você busca com marketing." className="w-full rounded-lg border border-border bg-background-soft/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30" />
                <CTAButton type="submit" variant="primary" size="lg" className="w-full">
                  <MessageCircle className="h-5 w-5" /> Enviar mensagem
                </CTAButton>
              </form>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  </>
);

export default QuemSomos;
