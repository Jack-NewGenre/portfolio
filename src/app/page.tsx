import Image from "next/image";
import LiquidBG from "./components/ui/LiquidBG";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 gap-2">
      <div className="absolute inset-0 overflow-hidden">
        <LiquidBG />
      </div>
      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-center">Jack's Portfolio</h1>
        <p className="text-center max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis felis a orci faucibus tempor. Morbi tellus ante, lacinia id arcu ac, accumsan ultricies quam.
        </p>
      </div>
    </div>
  );
}
