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
      "inline-flex items-center justify-center gap-4 rounded-full border border-border/80 bg-card/60 px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.24em] backdrop-blur",
      "max-w-full whitespace-nowrap overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
      className
    )}
  >
    {items.map((it, i) => (
      <span key={it} className="flex items-center gap-4">
        <span className="text-gradient">{it}</span>
        {i < items.length - 1 && (
          <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/55" />
        )}
      </span>
    ))}
  </div>
);
