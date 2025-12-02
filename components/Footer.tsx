"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5}}
            viewport={{ once: true }}
            className="border-t border-slate-800 backdrop-blur-lg">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.7}}
                className="py-10 px-6 flex flex-col md:flex-row items-center justify-between"
            >
                {/* Name / Branding */}
                <p className="text-secondary-foreground text-sm">
                    © {new Date().getFullYear()} Htet Ko Oo. All Rights Reserved.
                </p>

                {/* Footer text */}
                <p className="text-secondary-foreground text-sm text-center">
                    Designed and built with Next.js, TailwindCSS, and Framer Motion.
                </p>
            </motion.div>
        </motion.footer>
    );
}
