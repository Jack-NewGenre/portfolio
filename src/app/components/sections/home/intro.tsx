import ScrollReveal from "../../ui/TextReveal";

const IntroSection = () => {
    return ( 
        <section className="relative px-8 py-32 bg-background">
            <div className="flex gap-8">
                <div className="w-2/5">
                    <p className="text-lg sticky top-20 uppercase font-mono">About Me</p>
                </div>
                <div className="w-3/5">
                    <ScrollReveal baseOpacity={0.1} enableBlur={true} baseRotation={0} blurStrength={0} wordAnimationEnd="center center">
                        Hey! I’m Jack, front-end developer focused on creating clean, engaging digital experiences. I love turning ideas into polished interfaces that feel intuitive and visually refined.
                    </ScrollReveal>

                    <ScrollReveal baseOpacity={0.1} enableBlur={true} baseRotation={0} blurStrength={0} wordAnimationEnd="center center">
                        I currently work a lot in Framer and am expanding into full-stack development with Next.js. My goal is to build products that are not only beautiful, but fast, functional, and meaningful for users.
                    </ScrollReveal>
                </div>
            </div>
        </section>
     );
}

export default IntroSection;
