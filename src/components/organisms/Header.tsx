"use client";

import Link from "next/link";
import { ModeToggle } from "../atoms/ModeToggle";
import { useState } from "react";
import { Clock } from "../atoms/Clock";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <header className="fixed top-0 left-0 w-full z-10 py-5 px-4 md:px-8 flex justify-between items-center gap-4">
            <div className="text-base font-bold uppercase flex-auto text-foreground">
                <Link href="/">Jack© <span className="text-foreground/40 font-normal">Full-Stack Developer</span></Link>
            </div>

            <div className="flex items-center flex-auto hidden sm:flex">
                <Clock />
            </div>
            
            <div className="flex items-center justify-end flex-auto gap-6 w-20">
                <ModeToggle />

                <button className="menu-btn text-3xl relative z-10 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <div className={`relative w-4 h-4 transition-all duration-500 ${isOpen ? "rotate-45" : "rotate-0"}`}>
                        <span className="absolute top-0 left-0 w-1 h-1 bg-foreground rounded-full"></span>
                        <span className="absolute top-0 right-0 w-1 h-1 bg-foreground rounded-full"></span>
                        <span className="absolute bottom-0 left-0 w-1 h-1 bg-foreground rounded-full"></span>
                        <span className="absolute bottom-0 right-0 w-1 h-1 bg-foreground rounded-full"></span>
                    </div>
                </button>
            </div>

            <div className={`fixed inset-0 bg-background p-8 flex flex-col items-start justify-end transition-all duration-500
                ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}>
                    <ul className="text-6xl uppercase text-foreground flex flex-col md:text-9xl">
                        <li><Link href="/" className="hover:line-through" onClick={() => setIsOpen(false)}>Home</Link></li>
                        <li><Link href="/about" className="hover:line-through" onClick={() => setIsOpen(false)}>About</Link></li>
                        <li><Link href="/blog" className="hover:line-through" onClick={() => setIsOpen(false)}>Blog</Link></li>
                        <li><Link href="/contact" className="hover:line-through" onClick={() => setIsOpen(false)}>Contact</Link></li>
                    </ul>
            </div>
        </header>
    );
}

export default Header;
