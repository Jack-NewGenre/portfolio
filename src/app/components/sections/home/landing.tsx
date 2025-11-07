import ImageTrail from "../../ui/ImageTrail";

const LandingSectionNew = () => {
    return ( 
        <div className="relative h-screen flex justify-center items-center bg-background">
            <div className="absolute inset-0 z-1">
                <ImageTrail
                    items={[
                    '/stickers/group-1.png',
                    '/stickers/group-2.png',
                    '/stickers/group-3.png',
                    '/stickers/group-4.png',
                    '/stickers/group-5.png',
                    '/stickers/group-6.png',
                    '/stickers/group-7.png',
                    '/stickers/group-8.png',
                    ]}
                    variant={1}
                />
            </div>
            <div className="text-foreground text-center cursor-default z-2 pointer-events-none">
                <h1 className="text-[13vw] leading-none uppercase font-black">Jack Cox</h1>
                <p className="text-3xl uppercase font-mono">Full-Stack Developer</p>
                <p className="text-sm">( In-training )</p>
            </div>
        </div>
     );
}

export default LandingSectionNew;