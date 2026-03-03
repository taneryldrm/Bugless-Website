import { Hero } from "@/components/sections/Hero";
import { AboutSummary } from "@/components/sections/AboutSummary";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { TrustedBy } from "@/components/sections/TrustedBy";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <AboutSummary />
      <ServicesOverview />
    </>
  );
}
