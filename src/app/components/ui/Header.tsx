import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
    return ( 
        <header className="absolute top-2 left-1/2 -translate-x-1/2 z-10 py-2 px-4 rounded-full backdrop-blur-xl border border-foreground/10 bg-foreground/5 inline-flex justify-between items-center">
            <ul className="flex items-center gap-4">
                <li><Link href="/" className="opacity-50 transition-all duration-300 hover:opacity-100">Home</Link></li>
                <li><Link href="/about" className="opacity-50 transition-all duration-300 hover:opacity-100">About</Link></li>
                <li><Link href="/blog" className="opacity-50 transition-all duration-300 hover:opacity-100">Blog</Link></li>
                <li><Link href="/contact" className="opacity-50 transition-all duration-300 hover:opacity-100">Contact</Link></li>
                <li><ModeToggle /></li>
            </ul>
        </header>
     );
}

export default Header;