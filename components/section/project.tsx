"use client";

import { projects } from "@/data";
import { Badge } from "../ui/badge";
import { ThreeDCard } from "../ThreeDCard";
import { motion } from "framer-motion";

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
                    const delay = 0.2 + group * 0.5;       // delay increases per group

                    return (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: delay }}
                            viewport={{ once: true }}
                            className="flex h-full"
                        >
                            <ThreeDCard project={project} />
                        </motion.div>
                    );
                })}
            </div>



        </section>

    );
}