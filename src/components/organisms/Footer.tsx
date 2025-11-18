import Link from "next/link";
import CircularText from "../atoms/CircleText";

const Footer = () => {
    return (
        <footer className="w-full min-h-screen bg-background p-8 flex flex-col gap-20 justify-between overflow-hidden">
            <div className="flex justify-end">
                <CircularText
                    text="JACK*NEW*GENRE*"
                    onHover="speedUp"
                    spinDuration={20}
                    className=""
                />
            </div>
            <div className="flex flex-col gap-12">
                <p className="text-8xl">Say hello,<br />
                    <Link href="mailto:coxy@newgenre.studio" className="hover:line-through">coxy@newgenre.studio</Link>
                </p>
                <p className="text-xl text-foreground flex gap-3 items-center"><span className="bg-green-500 w-2 h-2 rounded-full relative"><span className="absolute inset-0 animate-ping bg-green-500 rounded-full"></span></span>Available for work</p>
            </div>
            <div className="flex justify-between items-center">
                <ul className="flex gap-4 text-base uppercase text-foreground">
                    <li>Socials:</li>
                    <li><Link href="https://www.instagram.com" target="_blank" className="hover:line-through">IG</Link></li>
                    <li><Link href="https://www.linkedin.com" target="_blank" className="hover:line-through">LI</Link></li>
                     <li><Link href="https://www.twitter.com" target="_blank" className="hover:line-through">X</Link></li>
                </ul>
                <p className="text-base text-foreground uppercase">© 2025 Jack Cox.</p>
            </div>
        </footer>
    );
}

export default Footer;
