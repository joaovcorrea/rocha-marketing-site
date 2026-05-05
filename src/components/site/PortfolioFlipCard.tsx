import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FlipCardProps {
  icon: ReactNode;
  title: string;
  shortText: string;
  fullText: string;
  accent?: string; // tailwind gradient classes for back face
}

export const PortfolioFlipCard = ({
  icon,
  title,
  shortText,
  fullText,
  accent = "from-primary via-accent to-secondary",
}: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((v) => !v)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      className="perspective group block h-72 w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-2xl"
      aria-label={`${title} — clique para virar o card`}
    >
      <div
        className={cn(
          "preserve-3d relative h-full w-full transition-transform duration-700",
          flipped && "rotate-y-180"
        )}
      >
        {/* FRONT */}
        <div className="backface-hidden absolute inset-0 flex flex-col justify-between rounded-2xl border border-border/70 bg-card/70 p-6 shadow-card backdrop-blur transition group-hover:border-primary/40">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand-soft text-primary">
            {icon}
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
              {shortText}
            </p>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-widest text-primary">
              Passe o mouse →
            </p>
          </div>
        </div>

        {/* BACK */}
        <div
          className={cn(
            "backface-hidden rotate-y-180 absolute inset-0 flex flex-col justify-between rounded-2xl bg-gradient-to-br p-6 text-white shadow-glow",
            accent
          )}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur">
            {icon}
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-white/90">{fullText}</p>
          </div>
        </div>
      </div>
    </button>
  );
};
