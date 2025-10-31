import LiquidBG from "@/app/components/ui/LiquidBG";

const ContactPage = () => {
    return ( 
        <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 gap-2">
            <div className="absolute inset-0 overflow-hidden">
                <LiquidBG />
            </div>
            <div className="relative z-10">
                <h1 className="text-4xl font-bold text-center">Contact Me</h1>
                <p className="text-center max-w-md">
                    Feel free to reach out to me via email at <br /><a href="mailto:jack.cox@newgenre.studio" className="text-blue-500">jack.cox@newgenre.studio</a>
                </p>
            </div>
        </div>
    );
}

export default ContactPage;