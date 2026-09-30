"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading, SectionLabel } from "@/components/ui/Section";
import { useT } from "@/components/providers/LanguageProvider";
import { faqContent, sectionLabels } from "@/data/content";
import { faqItems } from "@/data/faq";

export function FAQ() {
  const t = useT();
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  return (
    <Section id="faq">
      <Reveal>
        <SectionLabel>{sectionLabels.faq}</SectionLabel>
        <SectionHeading>{faqContent.headline}</SectionHeading>
      </Reveal>

      <div className="mt-14 divide-y divide-navy/10 border-y border-navy/10">
        {faqItems.map((item, index) => {
          const isOpen = openId === item.id;
          return (
            <Reveal key={item.id} delay={index * 40}>
              <div className="py-2">
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  <span className="font-display text-lg text-navy md:text-xl">
                    {t(item.question)}
                  </span>
                  <span
                    className="mt-1 shrink-0 text-xl leading-none text-navy/30"
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  id={`faq-answer-${item.id}`}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm leading-relaxed text-blue-gray">
                      {t(item.answer)}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
