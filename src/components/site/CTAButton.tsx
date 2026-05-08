import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "whatsapp";

const styles: Record<Variant, string> = {
  primary:
    "btn-gradient-animated text-white shadow-glow hover:shadow-[0_0_80px_-10px_hsl(var(--accent)/0.7)]",
  whatsapp:
    "btn-cta-animated text-white shadow-cta",
  ghost:
    "border border-border bg-card/60 text-foreground hover:bg-card",
};

interface BaseProps {
  variant?: Variant;
  size?: "md" | "lg";
}

type AsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };
type AsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };

export const CTAButton = forwardRef<HTMLElement, AsButton | AsLink>(
  ({ variant = "primary", size = "md", className, children, ...rest }, ref) => {
    const cls = cn(
      "btn-shimmer group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]",
      size === "lg" ? "h-14 px-8 text-base" : "h-12 px-6 text-sm",
      styles[variant],
      className
    );
    if ((rest as AsLink).href !== undefined) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={cls}
          {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={cls}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);
CTAButton.displayName = "CTAButton";
