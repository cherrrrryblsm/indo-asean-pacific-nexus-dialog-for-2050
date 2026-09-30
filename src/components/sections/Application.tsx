"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading, SectionLabel } from "@/components/ui/Section";
import { useT } from "@/components/providers/LanguageProvider";
import { applicationContent, sectionLabels } from "@/data/content";
import { siteConfig } from "@/data/site";

export function Application() {
  const t = useT();
  const hasUrl = Boolean(siteConfig.applicationUrl);

  return (
    <Section id="apply" dark>
      <Reveal>
        <SectionLabel>{sectionLabels.application}</SectionLabel>
        <SectionHeading className="max-w-2xl text-off-white">
          {applicationContent.headline}
        </SectionHeading>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <dl className="space-y-8">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-off-white/40">
                {t(applicationContent.method)}
              </dt>
              <dd className="mt-2 text-lg text-off-white">
                <a
                  href={siteConfig.applicationUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-accent-green/60 pb-0.5 transition-colors hover:text-accent-lime"
                >
                  {t(applicationContent.methodValue)}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-off-white/40">
                {t(applicationContent.documents)}
              </dt>
              <dd className="mt-3 space-y-2">
                {applicationContent.documentLinks.map((document) => (
                  <p key={document.href}>
                    <a
                      href={document.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-off-white/70 transition-colors hover:text-accent-lime"
                    >
                      {t(document.label)}
                    </a>
                  </p>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-off-white/40">
                {t(applicationContent.schedule)}
              </dt>
              <dd className="mt-3 space-y-4">
                {applicationContent.rounds.map((round) => (
                  <div key={round.name.en}>
                    <p className="text-sm font-medium text-off-white">{t(round.name)}</p>
                    <p className="mt-1 text-xs leading-relaxed text-off-white/60">{t(round.open)}</p>
                    <p className="text-xs leading-relaxed text-off-white/60">{t(round.deadline)}</p>
                  </div>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-off-white/40">
                {t(applicationContent.process)}
              </dt>
              <dd className="mt-3 space-y-2">
                {applicationContent.steps.map((step, i) => (
                  <p key={step.en} className="text-sm text-off-white/70">
                    {i + 1}. {t(step)}
                  </p>
                ))}
              </dd>
            </div>
          </dl>

          <div className="lg:self-center">
            <p className="mb-10 text-right font-display text-[clamp(2.75rem,5vw,4.75rem)] leading-[0.88] tracking-[-0.02em] text-off-white">
              <span className="block [text-align-last:justify]">FIRST ROUND</span>
              <span className="block">NOW OPEN!!</span>
            </p>
            <Button
              href={hasUrl ? siteConfig.applicationUrl! : undefined}
              disabled={!hasUrl}
              variant="primary"
              className="min-w-[240px]"
              external={hasUrl}
            >
              {t(applicationContent.ctaOpen)}
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
