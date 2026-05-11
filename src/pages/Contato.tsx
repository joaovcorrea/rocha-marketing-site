import { useState } from "react";
import { MessageCircle, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/site/Reveal";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { AnimatedBackdrop } from "@/components/site/AnimatedBackdrop";
import { CTAButton } from "@/components/site/CTAButton";
import { SEO } from "@/components/site/SEO";
import { AGENCY_EMAIL, WHATSAPP_LINK, buildMailto, formDataToBody } from "@/lib/contact";

const Contato = () => {
  const [sending, setSending] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    const body = formDataToBody(fd, "Origem: /contato");
    window.location.href = buildMailto({
      subject: "Contato — Diagnóstico | Rocha Marketing",
      body,
    });
    setTimeout(() => setSending(false), 300);
    toast.success("Abrimos seu e-mail para enviar a mensagem.");
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <>
      <SEO
        title="Contato | Rocha Marketing"
        description="Fale com a Rocha Marketing e receba um diagnostico estrategico para acelerar crescimento, demanda e conversao da sua empresa."
        path="/contato"
        keywords="contato rocha marketing, diagnostico estrategico, consultoria marketing"
      />
      <section className="relative overflow-hidden">
        <AnimatedBackdrop />
        <div className="container relative py-16 text-center md:py-28">
          <Reveal><SectionEyebrow items={["Contato", "Diagnóstico", "Estratégia"]} /></Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 font-display text-4xl font-extrabold leading-[1.05] sm:text-4xl md:text-7xl">
              Receba um <span className="text-gradient">diagnóstico estratégico</span> do seu negócio.
            </h1>
          </Reveal>
          <Reveal delay={220}><div className="mx-auto mt-6 h-[2px] w-40 divider-gradient" /></Reveal>
        </div>
      </section>

      <section className="container pb-24">
        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="space-y-6">
              <div className="rounded-2xl border border-border/70 bg-card/60 p-6 backdrop-blur">
                <div className="flex items-center gap-3"><MessageCircle className="h-5 w-5 text-primary" /><span className="font-semibold">WhatsApp</span></div>
                <p className="mt-2 text-sm text-muted-foreground">Atendimento direto com um especialista.</p>
                <CTAButton as="a" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" variant="whatsapp" className="mt-4">
                  <MessageCircle className="h-4 w-4" /> Falar agora
                </CTAButton>
              </div>
              <div className="rounded-2xl border border-border/70 bg-card/60 p-6 backdrop-blur">
                <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary" /><span className="font-semibold">E-mail</span></div>
                <p className="mt-2 text-sm text-muted-foreground">{AGENCY_EMAIL}</p>
              </div>
              <div className="rounded-2xl border border-border/70 bg-card/60 p-6 backdrop-blur">
                <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" /><span className="font-semibold">Curitiba · Brasil</span></div>
                <p className="mt-2 text-sm text-muted-foreground">Atendemos clientes em todo o país.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <form onSubmit={onSubmit} className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-border/70 bg-card/60 p-8 shadow-card backdrop-blur md:max-w-none md:p-10">
              <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-30" />
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Nome" name="nome" required />
                <Field label="E-mail" name="email" type="email" required />
                <Field label="Telefone" name="telefone" required />
                <Field label="Empresa" name="empresa" />
                <SelectField label="Faturamento mensal" name="faturamento" options={["MEI", "Microempresa", "Pequena Empresa", "Média Empresa", "Grande Empresa", "Multinacional"]} />
                <SelectField label="Segmento" name="segmento" options={["Indústria", "Comércio / Varejo", "Serviços", "Saúde", "Educação", "Tecnologia", "Outros"]} />
              </div>
              <div className="mt-5">
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Conte sobre seu negócio</label>
                <textarea name="msg" rows={4} className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20" />
              </div>
              <div className="mt-6 flex justify-center md:justify-end">
                <CTAButton type="submit" variant="primary" size="lg" disabled={sending}>
                  <Send className="h-4 w-4" /> {sending ? "Enviando..." : "Receber diagnóstico"}
                </CTAButton>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
};

const Field = ({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) => (
  <label className="block">
    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}{required && " *"}</span>
    <input name={name} type={type} required={required} className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20" />
  </label>
);

const SelectField = ({ label, name, options }: { label: string; name: string; options: string[] }) => (
  <label className="block">
    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
    <select name={name} className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20">
      <option value="">Selecione</option>
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  </label>
);

export default Contato;
