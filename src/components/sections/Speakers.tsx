"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading, SectionLabel } from "@/components/ui/Section";
import { useLanguage, useT } from "@/components/providers/LanguageProvider";
import { sectionLabels, speakersContent } from "@/data/content";
import { siteConfig } from "@/data/site";
import { t as translate } from "@/lib/i18n";

export function Speakers() {
  const t = useT();
  const { locale } = useLanguage();
  const speakers = siteConfig.speakers;

  return (
    <Section id="speakers" dark>
      <Reveal>
        <SectionLabel>{sectionLabels.speakers}</SectionLabel>
        <SectionHeading className="text-off-white">{speakersContent.headline}</SectionHeading>
      </Reveal>

      {speakers.length === 0 ? (
        <Reveal delay={80}>
          <div className="surface-card mt-16 px-8 py-16 text-center md:px-16">
            <p className="font-display text-2xl text-navy/80 md:text-3xl">
              {t(speakersContent.tba)}
            </p>
            <p className="mx-auto mt-4 max-w-md text-sm text-blue-gray">
              {t(speakersContent.note)}
            </p>
          </div>
        </Reveal>
      ) : (
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker, index) => (
            <Reveal key={speaker.id} delay={index * 60}>
              <article className="border-t border-navy/10 pt-6">
                <h3 className="font-display text-xl text-navy">
                  {translate(speaker.name, locale)}
                </h3>
                <p className="mt-2 text-sm text-blue-gray">
                  {translate(speaker.title, locale)}
                </p>
                <p className="mt-1 text-sm text-navy/60">
                  {translate(speaker.organization, locale)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
