"use client";

import { projects } from "@/data";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Project() {
    return (
        <section
            id="project"
            className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 py-20 sm:px-10 min-h-screen"
        >
            <Badge variant="secondary">Projects</Badge>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-10">
                {projects.map((project, index) => {
                    const isEven = index % 2 === 0;
                    const group = Math.floor(index / 2);   // every two items share same group
                    const delay = 0.2 + group * 0.2;       // delay increases per group
                    const duration = 0.8 + index * 0.1;      // duration increases per group

                    return (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: duration, delay: delay }}
                            viewport={{ once: true }}
                            className="flex h-full w-full"
                        >
                            <div className="flex flex-col justify-between bg-transparent relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10 dark:border-white/20 border-black/10 w-full h-full rounded-xl p-5 border">
                                <motion.div
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="text-xl font-bold">
                                        {project.title}
                                    </div>
                                    <p className="text-sm mt-3">
                                        {project.des}
                                    </p>
                                    <p className="text-sm mt-3">
                                        <span className="font-semibold">Tech Stack :</span> {project.tech_stack}
                                    </p>
                                </motion.div>
                                <div className="w-full mt-5">
                                    <Image
                                        src={project.img}
                                        height={1000}
                                        width={1000}
                                        className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl transition-shadow"
                                        alt="thumbnail"
                                    />
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    viewport={{ once: true }}
                                    className="flex justify-between items-center mt-5">
                                    <a
                                        href={project.github_link}
                                        target="_blank"
                                        className="px-4 py-2 rounded-xl text-xs font-normal hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                                    >
                                        Source Code →
                                    </a>
                                    <a
                                        href={project.live_link}
                                        target="_blank"
                                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:bg-black/80 dark:hover:bg-white/80 transition-colors"
                                    >
                                        Live Demo →
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>



        </section>

    );
}