import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
    return ( 
        <header className="absolute top-0 left-0 w-full z-10 py-5 px-6 flex justify-between items-center">
            <ul className="flex items-center gap-4 backdrop-blur-xl px-4 py-2 border border-foreground">
                <li><Link href="/" className="opacity-50 transition-all duration-300 hover:opacity-100">Home</Link></li>
                <li><Link href="/about" className="opacity-50 transition-all duration-300 hover:opacity-100">About</Link></li>
                <li><Link href="/blog" className="opacity-50 transition-all duration-300 hover:opacity-100">Blog</Link></li>
                <li><Link href="/contact" className="opacity-50 transition-all duration-300 hover:opacity-100">Contact</Link></li>
            </ul>
            <ModeToggle />
        </header>
     );
}

export default Header;