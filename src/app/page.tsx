import IntroSection from "./components/sections/home/intro";
import LandingSectionNew from "./components/sections/home/landing";
import Projects from "./components/sections/home/Projects";

export default function Home() {
  return (
    <div className="relative font-sans">
      <LandingSectionNew />

      <IntroSection />

      <Projects />
    </div>
  );
}
