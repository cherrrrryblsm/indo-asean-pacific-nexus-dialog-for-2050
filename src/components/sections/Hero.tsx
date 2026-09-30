"use client";

import { HeroMap } from "@/components/map/HeroMap";
import { useT } from "@/components/providers/LanguageProvider";
import { heroContent, interfaceLabels } from "@/data/content";
import { siteConfig } from "@/data/site";

export function Hero() {
  const t = useT();

  return (
    <section
      id="hero"
      className="hero-shell relative flex min-h-[100svh] items-end overflow-hidden text-off-white md:items-center"
    >
      <HeroMap />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,16,35,0.08)_0%,rgba(5,19,39,0.05)_45%,rgba(5,18,37,0.88)_100%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[72%] bg-[linear-gradient(90deg,rgba(5,18,38,0.55),transparent)] md:w-[58%]" />

      <div className="site-container relative z-10 w-full pb-14 pt-32 md:pb-8 md:pt-28">
        <div className="max-w-[46rem] md:w-[62%] lg:w-[58%]">
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.28em] text-off-white/50">
            {t(siteConfig.tagline)}
          </p>

          <h1 className="font-display">
            <span className="block text-[clamp(1.65rem,3.4vw,2.75rem)] font-normal leading-[1.15] tracking-[-0.01em] text-off-white/90">
              {t(heroContent.line1)}
            </span>
            <span className="mt-2 block text-[clamp(2.35rem,4.9vw,4.3rem)] leading-[1.03] tracking-[-0.025em]">
              {t(heroContent.line2)}
            </span>
          </h1>

          <div className="mt-10 flex flex-col gap-6 border-t border-pale-blue/18 pt-7 sm:flex-row sm:items-end sm:gap-16">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-off-white/40">
                {t(interfaceLabels.date)}
              </p>
              <p className="mt-2 font-display text-xl tracking-wide md:text-2xl">
                {t(siteConfig.dates.heroDisplay)}
              </p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-off-white/40">
                {t(interfaceLabels.location)}
              </p>
              <p className="mt-2 font-display text-xl tracking-wide md:text-2xl">
                {t(siteConfig.location.city)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
