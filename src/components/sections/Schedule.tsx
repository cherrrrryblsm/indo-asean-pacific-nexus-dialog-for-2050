"use client";

import { Reveal } from "@/components/ui/Reveal";
import { StatusBadge } from "@/components/ui/Button";
import { Section, SectionHeading, SectionLabel } from "@/components/ui/Section";
import { useT } from "@/components/providers/LanguageProvider";
import { scheduleContent, sectionLabels, statusLabels } from "@/data/content";
import { scheduleItems } from "@/data/program";

export function Schedule() {
  const t = useT();

  return (
    <Section id="schedule" dark>
      <Reveal>
        <SectionLabel>{sectionLabels.schedule}</SectionLabel>
        <SectionHeading className="text-off-white">{scheduleContent.headline}</SectionHeading>
        <p className="mt-6 max-w-xl text-sm text-off-white/55">{t(scheduleContent.note)}</p>
      </Reveal>

      <div className="mt-14 space-y-0">
        {scheduleItems.map((item, index) => (
          <Reveal key={item.id} delay={index * 60}>
            <article className="grid gap-4 border-t border-off-white/10 py-8 md:grid-cols-[180px_1fr] md:gap-12 md:py-10">
              <div>
                <p className="font-display text-xl text-off-white">{t(item.day)}</p>
                <p className="mt-1 text-sm text-off-white/45">{t(item.date)}</p>
                <span className="mt-3 inline-block">
                  <StatusBadge variant="planned">{t(statusLabels.planned)}</StatusBadge>
                </span>
              </div>
              <ul className="space-y-2">
                {item.items.en.map((entry, i) => (
                  <li key={entry} className="text-sm leading-relaxed text-off-white/70">
                    {t({ en: item.items.en[i], ja: item.items.ja[i] })}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
