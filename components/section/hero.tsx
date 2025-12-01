import Link from "next/link";
import { Spotlight } from "../ui/spotlight";
import { Badge } from "../ui/badge";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { GridBackground } from "../ui/grid-background";
import MagicButton from "../MagicButton";
import { navItems } from "@/config/site";
import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
    return (
        <section id="home" className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-10 gap-10 pt-20" >
            {/* 🔥 Animated Background Layer */}

            <div className="absolute inset-0 pointer-events-none">
                <Spotlight
                    className="-top-48 -left-48 md:-top-56 md:-left-72 lg:-top-60 lg:-left-80 h-[80vh] w-[80vw]"
                    fill="violet"
                />
                <Spotlight
                    className="bottom-[-40%] right-[-30%] md:bottom-[-30%] md:right-[-20%] lg:bottom-[-20%] lg:right-[-15%] h-[80vh] w-[80vw]"
                    fill="blue"
                />
                <Spotlight
                    className="top-[20%] left-[30%] md:top-[25%] md:left-[35%] h-[50vh] w-[50vw]"
                    fill="white"
                />
            </div>
            <GridBackground />
            {/* 🧾 Content Layer */}
            <div className="relative z-10 flex flex-col items-center gap-4 text-center max-w-3xl">
                <Badge className="px-6 py-2" variant="secondary">FullStack Developer</Badge>
                <TextGenerateEffect
                    words="Build beautiful, responsive and high-performance websites."
                    className="text-center text-[40px] md:text-6xl "
                />
                <div>
                    I focus on React, Next.js, and Laravel 🚀.
                </div>
            </div>


            {/* Button */}
            <Link href={navItems[3].link}>
                <MagicButton
                        title="Showcase"
                        icon={<FaArrowDown className="w-5 h-5" />}
                        position="left"
                />
                </Link>

            {/* Mouse Scroll Indicator */}
            <div className="relative z-10 flex flex-col items-center">
                <div className="w-[26px] h-[42px] rounded-full border-2 border-foreground/40 flex items-start justify-center p-2 animate-bounce">
                    <div className="w-1 h-3 rounded-full bg-foreground"></div>
                </div>
                <span className="text-xs text-foreground/70 mt-2">Scroll to see more</span>
            </div>
        </section >
    );
}


