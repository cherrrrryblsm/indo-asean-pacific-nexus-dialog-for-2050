"use client";

import { useT } from "@/components/providers/LanguageProvider";
import type { LocalizedString } from "@/lib/i18n";

type SectionLabelProps = {
  children: LocalizedString | string;
};

export function SectionLabel({ children }: SectionLabelProps) {
  const t = useT();
  const text = typeof children === "string" ? children : t(children);

  return (
    <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-accent-green">
      {text}
    </p>
  );
}

type SectionHeadingProps = {
  children: LocalizedString | string;
  className?: string;
  as?: "h2" | "h3";
};

export function SectionHeading({
  children,
  className = "",
  as: Tag = "h2",
}: SectionHeadingProps) {
  const t = useT();
  const text = typeof children === "string" ? children : t(children);

  return (
    <Tag
      className={`font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] tracking-[-0.02em] text-navy ${className}`}
    >
      {text}
    </Tag>
  );
}

type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
};

export function Section({ id, children, className = "", dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`site-section section-padding scroll-mt-18 ${dark ? "site-section-dark text-off-white" : "site-section-light text-navy"} ${className}`}
    >
      <div className="site-container">{children}</div>
    </section>
  );
}
