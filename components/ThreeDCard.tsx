"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export function ThreeDCard({project}: any) {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-transparent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-3 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold"
                >
                    {project.title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-sm max-w-sm mt-2"
                >
                    {project.des}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src={project.img}
                        height={1000}
                        width={1000}
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-4">
                    <CardItem
                        translateZ={20}
                        as="a"
                        href={project.github_link}
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal"
                    >
                        Source Code →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="a"
                        href={project.live_link}
                        target="__blank"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        Live Demo →
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
