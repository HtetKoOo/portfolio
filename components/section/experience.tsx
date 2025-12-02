"use client";

import { motion } from "framer-motion";
import { workExperience } from "@/data";
import { Button } from "../ui/moving-border";
import { Badge } from "../ui/badge";
import Image from "next/image";

export default function Experience() {
    return (
        <section id="experience" className="flex flex-col items-center justify-center max-w-6xl mx-auto px-4 py-20 sm:px-10 min-h-screen">
            <Badge variant="secondary">Experience</Badge>
            <div className="md:w-3/4 lg:w-full mt-10 grid lg:grid-cols-2 grid-cols-1 gap-4 lg:gap-10">
                {workExperience.map((card, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: index * 0.3 }}
                        viewport={{ once: true }}
                        key={card.id}
                        className="flex h-full">
                        <Button
                            //   random duration will be fun , I think , may be not
                            duration={Math.floor(Math.random() * 10000) + 10000}
                            borderRadius="1.75rem"
                            style={{
                                //   add these two
                                //   you can generate the color from here https://cssgradient.io/
                                background: "rgb(4,7,29)",
                                backgroundColor:
                                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                                // add this border radius to make it more rounded so that the moving border is more realistic
                                borderRadius: `calc(1.75rem* 0.96)`,
                            }}
                            // remove bg-white dark:bg-slate-900
                            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            <div className="flex flex-col lg:flex-row w-full lg:items-center p-3 py-6 md:p-5 lg:p-8 gap-6">

                                {/* Image wrapper - must have relative + fixed size */}
                                <motion.div
                                    initial={{ opacity: 0, x: -60 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, delay: index * 0.5 }}
                                    viewport={{ once: true }}
                                    className="relative w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 shrink-0">
                                    <Image
                                        src={card.thumbnail}
                                        alt={card.title}
                                        fill
                                        className="object-cover rounded-lg"
                                    />
                                </motion.div>

                                {/* Text section */}
                                <div className="flex flex-col w-full text-white">
                                    <motion.h1
                                        initial={{ opacity: 0, y: -60 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, delay: index * 0.5 }}
                                        viewport={{ once: true }}
                                        className="text-start text-xl md:text-2xl font-bold">
                                        {card.title}
                                    </motion.h1>
                                    <motion.p
                                        initial={{ opacity: 0, y: 60 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, delay: index * 0.7 }}
                                        viewport={{ once: true }}
                                        className="text-start mt-3 font-semibold">
                                        {card.desc}
                                    </motion.p>
                                </div>
                            </div>
                        </Button>
                    </motion.div>
                ))}
            </div>
        </section>

    );
}
