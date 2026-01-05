"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import MagicButton from "../MagicButton";
import Link from "next/link";
import { links } from "@/config/site";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { FaGithub } from "react-icons/fa";
import { getAge } from "@/lib/getAge";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-20"
    >
      <div className="max-w-4xl w-full flex flex-col lg:flex-row gap-6 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex w-full lg:w-1/4 justify-center"
        >
          <Image
            src="/profile-photo.png"
            alt="Profile Photo"
            width={300}
            height={300}
            className="rounded-2xl shadow-lg object-cover w-60 h-60 lg:w-66 lg:h-70"
          />
        </motion.div>

        {/* Right: Text Content */}
        <div className="flex flex-col w-full md:w-3/4 gap-4">
          <div className="text-center lg:text-left">
            <Badge variant="secondary">About Me</Badge>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <TextGenerateEffect
              words="React, Next.js & Laravel Enthusiast"
              className="text-center lg:text-left text-2xl md:text-3xl font-semibold"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-justify text-muted-foreground leading-relaxed text-base md:text-md"
          >
            My name is{" "}
            <span className="text-primary font-medium">Htet Ko Oo</span> and{" "}
            {getAge("2000-03-25")} years old. I&apos;m a passionate{" "}
            <span className="text-primary font-medium">
              Full Stack Developer
            </span>{" "}
            specializing in building modern, responsive, and scalable web
            applications using
            <span className="text-primary font-medium">
              {" "}
              React, Next.js, and Laravel
            </span>
            . Currently, I&apos;m studying{" "}
            <span className="text-primary font-medium">
              {" "}
              Digital Technology Innovation
            </span>{" "}
            at Kasem Bundit University, Bangkok.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-justify text-muted-foreground leading-relaxed text-base md:text-md"
          >
            I can transform into elegant, functional, and user-friendly
            products. My focus is on writing clean code, and continuously
            learning modern technologies to improve my skill. My contributions
            include developing features for a{" "}
            <span className="text-primary font-medium">
              Utility Management System
            </span>{" "}
            as part of the{" "}
            <span className="text-primary font-medium">
              One Project One Month
            </span>{" "}
            program, where I helped build the admin dashboard. I have hands-on
            experience developing{" "}
            <span className="text-primary font-medium">
              E-commerce, Payment, and Movie web applications
            </span>
            .
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className="text-justify text-muted-foreground leading-relaxed text-base md:text-md"
          >
            I have also worked with Python/Django for backend and currently
            learning Vue.js to improve my frontend skills.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
            viewport={{ once: true }}
            className="flex mt-4 items-center md:justify-between lg:justify-start gap-3"
          >
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
                title="View GitHub"
                icon={<FaGithub size={20} />}
                position="left"
                otherClasses="bg-gray-500 dark:bg-gray-700 text-white"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
