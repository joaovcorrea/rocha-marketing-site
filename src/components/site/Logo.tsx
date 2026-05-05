import { Link } from "react-router-dom";

export const Logo = ({ className = "" }: { className?: string }) => (
  <Link
    to="/"
    aria-label="Rocha Marketing — Home"
    className={`group inline-flex items-center ${className}`}
  >
    <img
      src="/img-1848.PNG"
      alt="Rocha Marketing"
      className="h-8 w-auto shrink-0 object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:h-9 md:h-10"
      loading="eager"
      decoding="async"
    />
  </Link>
);
