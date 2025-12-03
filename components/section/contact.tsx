"use client";

import { links } from "@/config/site"
import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "../ui/badge";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaDiscord, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FloatingDock } from "../ui/floating-dock";
import { toast } from "sonner";

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed to send");

            toast.success("Message sent successfully!");

            // Reset the form after success
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            toast.error("Failed to send message. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className="flex flex-col items-center justify-center max-w-7xl sm:w-3/4 lg:w-full mx-auto px-4 pt-20 sm:px-10"
        >
            <Badge variant="secondary">Contact</Badge>
            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-4xl font-bold my-10 text-center"
            >
                Get In <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">Touch</span>
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
                {/* Form */}
                <form onSubmit={handleSubmit} className="w-full"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* Name */}
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}>
                            <label className="block font-semibold mb-2">Full Name *</label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-background border border-slate-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500"
                                placeholder="Your Full Name"
                            />
                        </motion.div>

                        {/* Email */}
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}>
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
                        </motion.div>
                    </div>

                    {/* Subject */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mt-4">
                        <label className="block font-semibold mb-2">Subject *</label>
                        <input
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-background border border-slate-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500"
                            placeholder="Subject"
                        />
                    </motion.div>

                    {/* Message */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-4">
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
                    </motion.div>

                    {/* Submit */}
                    <motion.button
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        viewport={{ once: true }}
                        type="submit"
                        disabled={loading}
                        className={`
                            mt-4 w-full md:w-auto px-8 py-3 rounded-lg text-white
                            bg-linear-to-r from-purple-600 to-pink-600
                            ${loading ? "opacity-60 cursor-not-allowed" : "hover:scale-105"}
                        `}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </motion.button>

                </form>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 items-start">
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
                        transition={{ duration: 0.8, delay: 0.5 }}
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
                        transition={{ duration: 0.9, delay: 0.7 }}
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
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                viewport={{ once: true }}
            >
                <FloatingDock desktopClassName="mt-20 mb-6" mobileClassName="mt-10 mb-2" items={[
                    { title: "Github", icon: <FaGithub className="h-5 w-5" />, href: links.github },
                    { title: "Facebook", icon: <FaFacebook className="h-5 w-5" />, href: links.facebook },
                    { title: "Twitter", icon: <FaTwitter className="h-5 w-5" />, href: links.twitter },
                    { title: "Discord", icon: <FaDiscord className="h-5 w-5" />, href: links.discord },
                    { title: "Linkedin", icon: <FaLinkedin className="h-5 w-5" />, href: links.linkedin },
                    { title: "Email", icon: <Mail className="h-5 w-5" />, href: links.email },
                ]} />
            </motion.div>
        </section>
    );
}
