import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, MessageCircle, Instagram, Linkedin, Facebook } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/portfolio", label: "Portfólio" },
  { to: "/roketing", label: "Roketing" },
  { to: "/mpd", label: "MPD" },
  { to: "/contato", label: "Contato" },
];

const SOCIALS = [
  { href: "https://www.instagram.com", label: "Instagram", icon: Instagram },
  { href: "https://www.linkedin.com", label: "LinkedIn", icon: Linkedin },
  { href: "https://www.facebook.com", label: "Facebook", icon: Facebook },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "nav-underline-animated px-3 py-2 text-sm font-medium transition-colors",
                  item.to === "/"
                    ? "isolate rounded-md before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-foreground/[0.06]"
                    : "",
                  isActive
                    ? "text-foreground after:scale-x-100"
                    : "text-muted-foreground hover:text-foreground hover:after:scale-x-100"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {SOCIALS.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-card/60 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
          <a
            href="https://api.whatsapp.com/send?phone=554196796939"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer btn-cta-animated hidden h-10 items-center gap-2 rounded-full px-5 text-sm font-semibold text-white shadow-cta transition-transform hover:scale-[1.03] md:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-foreground md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl transition-[max-height] duration-500",
          open ? "max-h-[480px]" : "max-h-0"
        )}
      >
        <div className="container flex flex-col gap-1 py-4">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  "rounded-lg px-4 py-3 text-base font-medium transition",
                  item.to === "/" ? "bg-foreground/[0.05]" : "",
                  isActive
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted/60"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="https://api.whatsapp.com/send?phone=554196796939"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-animated mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-full text-sm font-semibold text-white shadow-cta"
          >
            <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
          </a>
          <div className="mt-3 flex items-center justify-center gap-2">
            {SOCIALS.map(({ href, label, icon: Icon }) => (
              <a
                key={`mobile-${label}`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-card/60 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
