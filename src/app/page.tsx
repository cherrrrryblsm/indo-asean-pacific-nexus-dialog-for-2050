import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Application } from "@/components/sections/Application";
import { Crowdfunding } from "@/components/sections/Crowdfunding";
import { Eligibility } from "@/components/sections/Eligibility";
import { EventOverview } from "@/components/sections/EventOverview";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { Organizer } from "@/components/sections/Organizer";
import { Participants } from "@/components/sections/Participants";
import { Partners } from "@/components/sections/Partners";
import { ProgramThemes } from "@/components/sections/ProgramThemes";
import { Schedule } from "@/components/sections/Schedule";
import { Speakers } from "@/components/sections/Speakers";
import { Venue } from "@/components/sections/Venue";
import { WhyNexus } from "@/components/sections/WhyNexus";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhyNexus />
        <EventOverview />
        <ProgramThemes />
        <Schedule />
        <Participants />
        <Venue />
        <Eligibility />
        <Application />
        <Crowdfunding />
        <Speakers />
        <Partners />
        <Organizer />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
