"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="border-t border-slate-800 backdrop-blur-lg">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="py-10 px-6 flex flex-col md:flex-row items-center justify-between"
            >
                {/* Name / Branding */}
                <p className="text-secondary-foreground text-sm">
                    © {new Date().getFullYear()} Htet Ko Oo. All Rights Reserved.
                </p>

                {/* Footer text */}
                <p className="text-secondary-foreground text-sm">
                    Designed and built with Next.js, TailwindCSS, and Framer Motion.
                </p>
            </motion.div>
        </footer>
    );
}
