"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading, SectionLabel } from "@/components/ui/Section";
import { useT } from "@/components/providers/LanguageProvider";
import { sectionLabels, whyNexusContent } from "@/data/content";

export function WhyNexus() {
  const t = useT();

  return (
    <Section id="why-nexus" dark>
      <Reveal>
        <SectionLabel>{sectionLabels.whyNexus}</SectionLabel>
        <SectionHeading className="max-w-2xl text-off-white">
          {whyNexusContent.headline}
        </SectionHeading>
        <div className="mt-10 max-w-5xl">
          <p className="font-display text-3xl font-semibold tracking-[-0.01em] text-off-white sm:text-4xl lg:text-5xl">
            {t(whyNexusContent.focalPoint)}
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-off-white/65">
            {t(whyNexusContent.intro)}
          </p>
          <p className="mt-9 max-w-4xl font-display text-[clamp(1.35rem,2.5vw,2rem)] leading-[1.45] tracking-[-0.01em] text-off-white/90">
            {t(whyNexusContent.question)}
          </p>
          <div className="mt-9 max-w-5xl space-y-5 text-base leading-relaxed text-off-white/65">
            {whyNexusContent.paragraphs.slice(0, -1).map((paragraph, index) => (
              <p className="max-w-4xl" key={`${paragraph.en}-${index}`}>
                {t(paragraph)}
              </p>
            ))}
            <p className="max-w-5xl pt-2 font-display text-xl leading-[1.5] tracking-[-0.01em] text-off-white/90 sm:text-2xl">
              {t(whyNexusContent.paragraphs.at(-1)!)}
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
