"use client"

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import MagicButton from "../MagicButton";
import Link from "next/link";
import { links } from "@/config/site";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { FaGithub } from "react-icons/fa";


export default function About() {
    return (
        <section
            id="about"
            className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-20"
        >
            <div className="max-w-5xl w-full flex flex-col lg:flex-row gap-6 items-center">
                {/* Left: Image */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex w-full lg:w-1/3 justify-center">
                    <Image
                        src="/profile-photo.png"
                        alt="Profile Photo"
                        width={300}
                        height={300}
                        className="rounded-2xl shadow-lg object-cover w-60 h-60 md:w-72 md:h-72 lg:h-84"
                    />
                </motion.div>

                {/* Right: Text Content */}
                <div className="flex flex-col w-full md:w-2/3 gap-4">
                    <div className="text-center lg:text-left"><Badge variant="secondary">About Me</Badge></div>

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <TextGenerateEffect
                            words="React, Next.js & Laravel Enthusiast"
                            className="text-center lg:text-left text-3xl md:text-4xl font-semibold"
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="text-default-600 leading-relaxed text-base md:text-lg"
                    >
                        I’m a passionate <span className="text-primary font-medium">Full Stack Developer</span> specializing in
                        building modern, responsive, and scalable web applications using
                        <span className="text-primary font-medium"> React, Next.js, and Laravel</span>.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="text-default-600 leading-relaxed text-base md:text-lg"
                    >
                        I love transforming ideas into elegant, functional, and user-friendly products.
                        My focus is on writing clean code, crafting engaging UI/UX, and continuously
                        learning new technologies to improve my craft. My professional contributions include working on projects like a Utility Management System, a comprehensive Project Management System, and portfolio websites.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        viewport={{ once: true }}
                        className="text-default-600 leading-relaxed text-base md:text-lg"
                    >
                        I possess a broad and adaptive technical skillset beyond my core stack, having explored Python/Django for backend development, and React Native & Flutter for mobile. I&apos;m currently expanding into Vue.js to further enhance my frontend capabilities.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 1 }}
                        viewport={{ once: true }}
                        className="flex mt-4 items-center md:justify-between lg:justify-start gap-3">
                        {/* Action: download */}
                        <MagicButton
                            title="Download Resume"
                            icon={<Download size={20} />}
                            position="left"
                            handleClick={() => {
                                window.open("/Htet_Ko_Oo_Resume.pdf", "_blank");
                            }}
                        />
                        {/* Navigation: github link */}
                        <Link href={links.github} target="_blank" rel="noopener noreferrer">
                            <MagicButton
                                title="GitHub"
                                icon={<FaGithub size={20} />}
                                position="left"
                                otherClasses="bg-gray-500 dark:bg-gray-700 text-white"
                            />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section >

    );
}
