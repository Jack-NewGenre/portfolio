import ScrollReveal from "@/components/molecules/TextReveal";


const IntroSection = () => {
    return ( 
        <section className="relative px-4 md:px-8 py-32 bg-background overflow-hidden">
            <div className="flex flex-col gap-8 md:flex-row">
                <div className="w-full md:w-2/5">
                    <p className="text-lg sticky top-20 uppercase font-mono">About Me</p>
                </div>
                <div className="w-full flex flex-col gap-10 md:w-3/5">
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
