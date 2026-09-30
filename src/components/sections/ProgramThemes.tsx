"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading, SectionLabel } from "@/components/ui/Section";
import { useT } from "@/components/providers/LanguageProvider";
import { programContent, sectionLabels } from "@/data/content";
import { programFormat, programThemes } from "@/data/program";

export function ProgramThemes() {
  const t = useT();

  return (
    <Section id="program">
      <Reveal>
        <SectionLabel>{sectionLabels.program}</SectionLabel>
        <SectionHeading>{programContent.headline}</SectionHeading>
      </Reveal>

      <div className="mt-16 space-y-0">
        {programThemes.map((theme, index) => (
          <Reveal key={theme.id} delay={index * 80}>
            <article className="grid gap-6 border-t border-navy/10 py-12 md:grid-cols-[120px_1fr_1.2fr] md:gap-12 md:py-16">
              <p className="font-display text-4xl text-navy/15 md:text-5xl">
                {theme.number}
              </p>
              <div>
                <h3 className="font-display text-2xl text-navy md:text-3xl">
                  {t(theme.title)}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-blue-gray">
                  {t(theme.description)}
                </p>
              </div>
              <ul className="space-y-3">
                {theme.focus.en.map((item, i) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-navy/75"
                  >
                    <span
                      className="mt-2 h-px w-4 shrink-0 bg-accent-green/50"
                      aria-hidden="true"
                    />
                    {t({ en: theme.focus.en[i], ja: theme.focus.ja[i] })}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100}>
        <div className="mt-8 border-t border-navy/10 pt-12">
          <h3 className="font-display text-xl text-navy">
            {t(programContent.formatHeadline)}
          </h3>
          <p className="mt-3 text-sm text-blue-gray">{t(programContent.formatNote)}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {programFormat.en.map((item, i) => (
              <li key={item} className="text-sm text-navy/75">
                — {t({ en: programFormat.en[i], ja: programFormat.ja[i] })}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
