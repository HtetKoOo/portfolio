"use client";

import { motion } from "framer-motion";
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
        <section
            id="home"
            className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-10 gap-10 pt-5"
        >
            {/* Background Animations */}
            <div className="absolute inset-0 pointer-events-none">
                <Spotlight className="-top-48 -left-48 md:-top-56 md:-left-72 lg:-top-60 lg:-left-80 h-[80vh] w-[80vw]" fill="violet" />
                <Spotlight className="bottom-[-40%] right-[-30%] md:bottom-[-30%] md:right-[-20%] lg:bottom-[-20%] lg:right-[-15%] h-[80vh] w-[80vw]" fill="blue" />
                <Spotlight className="top-[20%] left-[30%] md:top-[25%] md:left-[35%] h-[50vh] w-[50vw]" fill="white" />
            </div>
            <GridBackground />

            {/* ✨ Animated Content Wrapper */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.25 }}
                className="relative z-10 flex flex-col items-center gap-4 text-center max-w-3xl"
            >
                {/* Badge */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
                    }}
                >
                    <Badge className="px-6 py-2" variant="secondary">FullStack Developer</Badge>
                </motion.div>

                {/* Heading – using TextGenerateEffect */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}
                >
                    <TextGenerateEffect
                        words="Build beautiful, responsive and high-performance websites."
                        className="text-center text-[40px] md:text-6xl"
                    />
                </motion.div>

                {/* Sub Text */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                >
                    I focus on React, Next.js, and Laravel 🚀.
                </motion.div>

                {/* Button */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, scale: 0.9 },
                        visible: {
                            opacity: 1,
                            scale: 1,
                            transition: { type: "spring", stiffness: 120, damping: 8 },
                        },
                    }}
                >
                    <Link href={navItems[3].link}>
                        <MagicButton
                            title="Showcase"
                            icon={<FaArrowDown className="w-5 h-5" />}
                            position="left"
                        />
                    </Link>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}
                    className="relative z-10 flex flex-col items-center"
                >
                    <div className="w-[26px] h-[42px] rounded-full border-2 border-foreground/40 flex items-start justify-center p-2 animate-bounce mt-5">
                        <div className="w-1 h-3 rounded-full bg-foreground"></div>
                    </div>
                    <span className="text-xs text-foreground/70 mt-2">Scroll to see more</span>
                </motion.div>
            </motion.div>
        </section>
    );
}
