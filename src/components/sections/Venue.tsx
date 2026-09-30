"use client";

import { Reveal } from "@/components/ui/Reveal";
import { StatusBadge } from "@/components/ui/Button";
import { Section, SectionHeading, SectionLabel } from "@/components/ui/Section";
import { useLanguage, useT } from "@/components/providers/LanguageProvider";
import { overviewContent, sectionLabels, venueContent } from "@/data/content";
import { siteConfig } from "@/data/site";
import { t as translate } from "@/lib/i18n";

export function Venue() {
  const t = useT();
  const { locale } = useLanguage();

  return (
    <Section id="venue" dark>
      <Reveal>
        <SectionLabel>{sectionLabels.venue}</SectionLabel>
        <SectionHeading className="text-off-white">{venueContent.headline}</SectionHeading>
        <p className="mt-4 text-sm text-off-white/50">{t(venueContent.plannedNote)}</p>
      </Reveal>

      <Reveal delay={80}>
        <div className="surface-card-dark mt-12 p-8 md:p-12">
          <div className="flex flex-wrap items-start gap-4">
            <h3 className="font-display text-2xl text-off-white md:text-3xl">
              {translate(siteConfig.venue.name, locale)}
            </h3>
            <StatusBadge variant="planned">{t(overviewContent.plannedLabel)}</StatusBadge>
          </div>
          <p className="mt-6 text-off-white/60">
            {translate(siteConfig.location.city, locale)}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
