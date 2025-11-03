import LiquidBG from "./components/ui/LiquidBG";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans relative h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <LiquidBG />
      </div>
      <div className="relative flex flex-col justify-between h-screen w-full z-2 p-6 pt-22 overflow-hidden">
        <div className="flex justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="w-11 h-11 bg-foreground"></span>
            <div>
              <p className="font-bold uppercase tracking-wider">Jack Cox</p>
              <p className="font-mono font-sm">Based in London, UK</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <p className="font-mono font-sm uppercase text-right">Portfolio</p>
              <p className="font-mono font-sm uppercase text-right">2025/26</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-end">
            <div className="flex gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 15 15"><path fill="none" stroke="var(--chart-4)" strokeLinecap="square" strokeLinejoin="round" d="M6.52 11.435c.24.107.719.497.981.497c.263 0 .741-.39.982-.497m-3.926-4.97l1.472 1.49m4.417-1.49l-1.472 1.49M7.5.5C3.94.5 1.967 2.45 1.612 4.974c-.358 2.33.136 4.53 1.472 6.461c.643.953 1.486 1.876 2.454 2.486c1.271.772 2.654.772 3.925 0c.967-.61 1.81-1.533 2.454-2.486c1.33-1.934 1.824-4.13 1.472-6.461C13.034 2.449 11.062.5 7.501.5Z"/></svg>
              <p className="font-mono text-4xl uppercase">Full Stack</p>
            </div>
            <div className="flex flex-col gap-4">
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
          </div>
          <div>
            <p className="text-[11.3vw] leading-none uppercase font-bold">Web Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
