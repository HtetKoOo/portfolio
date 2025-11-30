"use client";

import { links } from "@/config/site"

import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "../ui/badge";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FloatingDock } from "../ui/floating-dock";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        alert("Thank you! I'll get back to you soon.");
    };

    return (
        <section
            id="contact"
            className="flex flex-col items-center justify-center max-w-7xl sm:w-3/4 lg:w-full mx-auto px-6 pt-20 sm:px-10"
        >
            <Badge>Contact</Badge>
            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-white my-10 text-center"
            >
                Get In <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">Touch</span>
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
                {/* Form */}
                <motion.form
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="w-full"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* Name */}
                        <div>
                            <label className="block font-semibold mb-2">Full Name *</label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-background border border-slate-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500"
                                placeholder="Your Full Name"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block font-semibold mb-2">Email Address *</label>
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                type="email"
                                className="w-full px-4 py-2 bg-background border border-slate-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500"
                                placeholder="you@example.com"
                            />
                        </div>
                    </div>

                    {/* Subject */}
                    <div className="mt-4">
                        <label className="block font-semibold mb-2">Subject *</label>
                        <input
                            name="subject"
                            className="w-full px-4 py-2 bg-background border border-slate-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500"
                            placeholder="Subject"
                        />
                    </div>

                    {/* Message */}
                    <div className="mt-4">
                        <label className="block font-semibold mb-2">Message *</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={3}
                            className="w-full px-4 py-3 bg-background border border-slate-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 resize-none"
                            placeholder="Write your message..."
                        />
                    </div>

                    {/* Submit */}
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="mt-8 w-full md:w-auto px-8 py-3 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-lg shadow-lg hover:opacity-90 transition-all"
                    >
                        Send Message
                    </motion.button>
                </motion.form>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
                    {/* Email Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mt-10 lg:mt-0 flex items-center"
                    >
                        <div className="flex items-start space-x-3">
                            <Mail />
                            <div className="w-full">
                                <h3 className="text-lg font-semibold mb-2">Email</h3>
                                <p className="text-secondary-foreground">
                                    For business inquiries, collaborations, or project discussions, feel free to reach out.
                                </p>
                                <p className="mt-1">htetkooo2532@gmail.com</p>
                            </div>
                        </div>

                    </motion.div>

                    {/* Phone Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="mt-10 lg:mt-0 flex items-center"
                    >
                        <div className="flex items-start space-x-3">
                            <Phone />
                            <div className="w-full">
                                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                                <p className="text-secondary-foreground">
                                    Available for urgent calls, client meetings, or quick follow-ups during business hours.
                                </p>
                                <p className="mt-1">+66 92 8548 602</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Location Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="mt-8 lg:mt-0 flex items-center"
                    >
                        <div className="flex items-start space-x-3">
                            <MapPin />
                            <div className="w-full">
                                <h3 className="text-lg font-semibold mb-2">Location</h3>
                                <p className="text-secondary-foreground">
                                    Currently based in Bangkok, Thailand. Open to remote work and project collaborations.
                                </p>
                                <p className="mt-1">Bangkok, Thailand</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Social Links */}
                <FloatingDock desktopClassName="mt-20 mb-6" items={[
                { title: "Github", icon: <FaGithub className="h-5 w-5" />, href: links.github },
                { title: "Twitter", icon: <FaTwitter className="h-5 w-5" />, href: links.twitter },
                { title: "Discord", icon: <FaDiscord className="h-5 w-5" />, href: links.discord },
                { title: "Linkedin", icon: <FaLinkedin className="h-5 w-5" />, href: links.linkedin },
                { title: "Email", icon: <Mail className="h-5 w-5" />, href: links.email },
                ]} />
        </section>
    );
}
