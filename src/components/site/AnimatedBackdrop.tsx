/** Backdrop com orbs flutuantes — usado em hero das páginas internas. */
export const AnimatedBackdrop = ({
  variant = "default",
}: {
  variant?: "default" | "warm" | "cool";
}) => {
  const palette =
    variant === "warm"
      ? ["hsl(24 95% 58%)", "hsl(12 95% 60%)", "hsl(320 85% 62%)"]
      : variant === "cool"
      ? ["hsl(188 95% 55%)", "hsl(268 80% 62%)", "hsl(220 90% 60%)"]
      : ["hsl(24 95% 58%)", "hsl(320 85% 62%)", "hsl(268 80% 62%)"];

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="hero-orb-drift absolute -top-20 left-[10%] h-72 w-72 rounded-full opacity-50 blur-3xl"
        style={{ background: palette[0] }}
      />
      <div
        className="hero-orb-drift absolute top-[20%] right-[8%] h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{ background: palette[1], animationDelay: "1.5s" }}
      />
      <div
        className="hero-orb-drift absolute bottom-[-10%] left-[35%] h-96 w-96 rounded-full opacity-40 blur-3xl"
        style={{ background: palette[2], animationDelay: "3s" }}
      />
      <div className="hero-vignette-pulse absolute inset-0 bg-gradient-hero opacity-35" />
      {/* Subtle grid */}
      <div
        className="hero-grid-drift absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)/0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)/0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
    </div>
  );
};
