"use client";

import { ParticipantsMap } from "@/components/map/ParticipantsMap";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading, SectionLabel } from "@/components/ui/Section";
import { useT } from "@/components/providers/LanguageProvider";
import { participantsContent, sectionLabels } from "@/data/content";

export function Participants() {
  const t = useT();

  return (
    <Section id="participants">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionLabel>{sectionLabels.participants}</SectionLabel>
          <SectionHeading>{participantsContent.headline}</SectionHeading>
          <p className="mt-6 text-sm leading-relaxed text-blue-gray">
            {t(participantsContent.subheadline)}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ParticipantsMap />
        </Reveal>
      </div>
    </Section>
  );
}
