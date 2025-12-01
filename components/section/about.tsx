"use client"

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
                <div className="flex w-full lg:w-1/3 justify-center">
                    <Image
                        src="/profile-photo.png"
                        alt="Profile Photo"
                        width={300}
                        height={300}
                        className="rounded-2xl shadow-lg object-cover w-60 h-60 md:w-72 md:h-72 lg:h-84"
                    />
                </div>

                {/* Right: Text Content */}
                <div className="flex flex-col w-full md:w-2/3 gap-4">
                    <div className="text-center lg:text-left"><Badge variant="secondary">About Me</Badge></div>
                    
                    <TextGenerateEffect
                        words="React, Next.js & Laravel Enthusiast"
                        className="text-center lg:text-left text-3xl md:text-4xl font-semibold"
                    />
                    <p className="text-default-600 leading-relaxed text-base md:text-lg">
                        I’m a passionate <span className="text-primary font-medium">Full Stack Developer</span> specializing in
                        building modern, responsive, and scalable web applications using
                        <span className="text-primary font-medium"> React, Next.js, and Laravel</span>.
                    </p>
                    <p className="text-default-600 leading-relaxed text-base md:text-lg">
                        I love transforming ideas into elegant, functional, and user-friendly products.
                        My focus is on writing clean code, crafting engaging UI/UX, and continuously
                        learning new technologies to improve my craft.My professional contributions include successfully working on projects such as a Utility Management System, a comprehensive Project Management System, and portfolio websites.
                    </p>
                    <p className="text-default-600 leading-relaxed text-base md:text-lg">
                        I possess a broad and adaptive technical skillet beyond my core stack, having explored and gained exposure to Python/Django for backend development, as well as cross-platform mobile development with React Native and Flutter. I am dedicated to continuous improvement and am presently focused on acquiring proficiency in Vue.js to further diversify my frontend capabilities.
                    </p>
                    <div className="flex mt-4 items-center md:justify-between lg:justify-start gap-3">
                        {/* Action: download */}
                        <MagicButton
                            title="Download Resume"
                            icon={<Download size={20} />}
                            position="left"
                        />

                        {/* Navigation: external link */}
                        <Link href={links.github} target="_blank" rel="noopener noreferrer">
                            <MagicButton
                                title="GitHub"
                                icon={<FaGithub size={20} />}
                                position="left"
                                otherClasses="bg-gray-500 dark:bg-gray-700 text-white"
                            />
                        </Link>
                    </div>

                </div>
            </div>
        </section>

    );
}
