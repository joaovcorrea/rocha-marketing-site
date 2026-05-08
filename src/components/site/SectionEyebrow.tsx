import { cn } from "@/lib/utils";

export const SectionEyebrow = ({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) => (
  <div
    className={cn(
      "inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-2xl border border-border/80 bg-card/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] backdrop-blur sm:rounded-full sm:gap-4 sm:px-7 sm:py-3 sm:text-[13px] sm:tracking-[0.24em] md:flex-nowrap md:whitespace-nowrap",
      className
    )}
  >
    {items.map((it, i) => (
      <span key={it} className="flex items-center gap-2 sm:gap-4">
        <span className="text-gradient">{it}</span>
        {i < items.length - 1 && (
          <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/55" />
        )}
      </span>
    ))}
  </div>
);
