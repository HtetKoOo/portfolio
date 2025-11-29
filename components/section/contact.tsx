"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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
            className="flex flex-col items-center justify-center max-w-4xl mx-auto px-4 py-20 sm:px-6 min-h-screen"
        >
            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-white mb-8 text-center"
            >
                Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Me</span>
            </motion.h2>

            {/* Form */}
            <motion.form
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl p-8 backdrop-blur-lg shadow-lg"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Name */}
                    <div>
                        <label className="block text-sm text-gray-300 mb-2">Name</label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-slate-800/60 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Your Name"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm text-gray-300 mb-2">Email</label>
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            type="email"
                            className="w-full px-4 py-2 bg-slate-800/60 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="you@example.com"
                        />
                    </div>
                </div>

                {/* Message */}
                <div className="mt-6">
                    <label className="block text-sm text-gray-300 mb-2">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                        placeholder="Write your message..."
                    />
                </div>

                {/* Submit */}
                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="mt-8 w-full md:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg shadow-lg hover:opacity-90 transition-all"
                >
                    Send Message
                </motion.button>
            </motion.form>
        </section>
    );
}
