"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { motion } from "framer-motion";

export function ThreeDCard({ project }: any) {
    return (
        <CardContainer className="inter-var h-full">
            <CardBody className="flex flex-col justify-between bg-transparent relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10 dark:border-white/20 border-black/10 w-full md:w-3/4 lg:w-auto h-full rounded-xl p-5 border">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <CardItem
                        translateZ="50"
                        className="text-xl font-bold"
                    >
                        {project.title}
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-sm mt-3"
                    >
                        {project.des}
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-sm mt-3"
                    >
                        <span className="font-semibold">Tech Stack :</span> {project.tech_stack}
                    </CardItem>
                </motion.div>
                <CardItem translateZ="100" className="w-full mt-5">
                    <Image
                        src={project.img}
                        height={1000}
                        width={1000}
                        className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center mt-5">
                    <CardItem
                        translateZ={20}
                        as="a"
                        href={project.github_link}
                        target="_blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal"
                    >
                        Source Code →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="a"
                        href={project.live_link}
                        target="_blank"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        Live Demo →
                    </CardItem>
                </motion.div>
            </CardBody>
        </CardContainer>
    );
}
