"use client";

import { Reveal } from "@/components/ui/Reveal";
import { StatusBadge } from "@/components/ui/Button";
import { Section, SectionHeading, SectionLabel } from "@/components/ui/Section";
import { useLanguage, useT } from "@/components/providers/LanguageProvider";
import { overviewContent, sectionLabels } from "@/data/content";
import { siteConfig } from "@/data/site";
import { t as translate } from "@/lib/i18n";

export function EventOverview() {
  const t = useT();
  const { locale } = useLanguage();

  const rows = [
    { label: overviewContent.fields.event, value: siteConfig.name },
    {
      label: overviewContent.fields.dates,
      value: translate(siteConfig.dates.display, locale),
    },
    {
      label: overviewContent.fields.location,
      value: translate(siteConfig.location.city, locale),
    },
    {
      label: overviewContent.fields.venue,
      value: translate(siteConfig.venue.name, locale),
      badge: overviewContent.plannedLabel,
    },
    {
      label: overviewContent.fields.organizer,
      value:
        locale === "ja" ? siteConfig.organizer.nameJa : siteConfig.organizer.nameEn,
    },
    {
      label: overviewContent.fields.participants,
      value: t(overviewContent.participantNote),
    },
  ];

  return (
    <Section id="overview">
      <Reveal>
        <SectionLabel>{sectionLabels.overview}</SectionLabel>
        <SectionHeading>{overviewContent.headline}</SectionHeading>
      </Reveal>

      <Reveal delay={80}>
        <dl className="mt-14 divide-y divide-navy/10 border-y border-navy/10">
          {rows.map((row) => (
            <div
              key={row.label.en}
              className="grid gap-3 py-6 md:grid-cols-[220px_1fr] md:gap-8 md:py-8"
            >
              <dt className="text-[12px] font-medium uppercase tracking-[0.16em] text-blue-gray">
                {t(row.label)}
              </dt>
              <dd className="text-base leading-relaxed text-navy">
                {row.value}
                {row.badge && (
                  <span className="ml-3 inline-block align-middle">
                    <StatusBadge variant="planned">{t(row.badge)}</StatusBadge>
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
