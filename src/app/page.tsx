import IntroSection from "./components/sections/home/intro";
import LandingSectionNew from "./components/sections/home/landing";

export default function Home() {
  return (
    <div className="relative font-sans">
      <LandingSectionNew />

      <IntroSection />
    </div>
  );
}
