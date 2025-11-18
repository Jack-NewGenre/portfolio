import IntroSection from "@/components/organisms/home-intro";
import Projects from "@/components/organisms/home-projects";
import LandingSectionNew from "@/components/organisms/home-landing";

export default function Home() {
  return (
    <div className="relative font-sans">
      <LandingSectionNew />

      <IntroSection />

      <Projects />
    </div>
  );
}
