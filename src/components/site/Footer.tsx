import { Link } from "react-router-dom";
import { Instagram, Linkedin, Facebook, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";

export const Footer = () => (
  <footer className="relative mt-32 border-t border-border/60">
    <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
    <div className="container grid gap-12 py-16 md:grid-cols-4">
      <div className="md:col-span-2 space-y-4">
        <Logo />
        <p className="max-w-sm text-sm text-muted-foreground">
          Assessoria estratégica de marketing orientada por dados, tecnologia
          e performance. Crescimento previsível para sua empresa.
        </p>
        <div className="flex gap-3 pt-2">
          {[
            { Icon: MessageCircle, href: "https://api.whatsapp.com/send?phone=554196796939", label: "WhatsApp" },
            { Icon: Instagram, href: "#", label: "Instagram" },
            { Icon: Facebook, href: "#", label: "Facebook" },
            { Icon: Linkedin, href: "#", label: "LinkedIn" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/60 text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Navegar
        </h4>
        <ul className="space-y-2 text-sm">
          {[
            { to: "/", label: "Home" },
            { to: "/quem-somos", label: "Quem Somos" },
            { to: "/roketing", label: "Roketing" },
            { to: "/mpd", label: "MPD" },
            { to: "/portfolio", label: "Portfólio" },
            { to: "/contato", label: "Contato" },
            { to: "https://forms.gle/38m4N3Kn1qRajmKb8", label: "Banco de Talentos", external: true },
          ].map(({ to, label, external }) => (
            <li key={label}>
              {external ? (
                <a
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition hover:text-foreground"
                >
                  {label}
                </a>
              ) : (
                <Link to={to} className="text-muted-foreground transition hover:text-foreground">
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Contato
        </h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>Rua Vicente Machado, nº 15 — Curitiba/PR</li>
          <li>
            <a href="mailto:comercial@rochamarketing.com.br" className="hover:text-foreground">
              comercial@rochamarketing.com.br
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=554196796939"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              (41) 9679-6939
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border/60">
      <div className="container flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Rocha Marketing. Todos os direitos reservados.</p>
        <p>Assessoria · Dados · Performance</p>
      </div>
    </div>
  </footer>
);
