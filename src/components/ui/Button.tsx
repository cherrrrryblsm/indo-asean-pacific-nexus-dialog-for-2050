import type { ReactNode } from "react";

type StatusBadgeProps = {
  children: ReactNode;
  variant?: "planned" | "tba" | "default";
};

export function StatusBadge({ children, variant = "default" }: StatusBadgeProps) {
  const styles = {
    default: "border-blue-gray/30 text-blue-gray",
    planned: "border-accent-green/40 text-accent-green",
    tba: "border-blue-gray/30 text-blue-gray",
  };

  return (
    <span
      className={`inline-flex items-center border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.16em] ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

type ButtonProps = {
  children: ReactNode;
  href?: string;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

export function Button({
  children,
  href,
  disabled = false,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex min-h-11 items-center justify-center px-7 text-sm font-medium tracking-wide transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green";

  const variants = {
    primary: disabled
      ? "cursor-not-allowed bg-blue-gray/20 text-blue-gray"
      : "bg-[linear-gradient(115deg,var(--color-accent-green),#3b806a)] text-off-white shadow-[0_12px_30px_rgba(39,115,92,0.16)] hover:brightness-110",
    secondary:
      "border border-navy/15 bg-white/35 text-navy backdrop-blur-sm hover:border-accent-blue/35 hover:bg-white/65",
    ghost: "text-navy underline-offset-4 hover:underline",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
