import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaDownload,
    FaCheckCircle,
    FaTimesCircle,
} from "react-icons/fa";

import profile from "../data/profile";
import socials from "../data/socials";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const [status, setStatus] = useState({
        type: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const showStatus = (type, message) => {
        setStatus({
            type,
            message,
        });

        setTimeout(() => {
            setStatus({
                type: "",
                message: "",
            });
        }, 4000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !formData.name.trim() ||
            !formData.email.trim() ||
            !formData.subject.trim() ||
            !formData.message.trim()
        ) {
            showStatus("error", "Please fill in all fields.");
            return;
        }

        setLoading(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            showStatus(
                "success",
                "Your message has been sent successfully."
            );

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

        } catch (error) {
            console.error(error);

            showStatus(
                "error",
                "Failed to send message. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className="bg-slate-950 px-6 py-28 scroll-mt-24"
        >
            <div className="mx-auto max-w-7xl">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="font-semibold uppercase tracking-[4px] text-blue-400">
                        Get In Touch
                    </p>

                    <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
                        Contact
                        <span className="text-blue-500"> Me</span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-slate-400">
                        I'm currently available for full-time opportunities,
                        freelance projects, AI collaborations and exciting software
                        development opportunities.
                    </p>

                </motion.div>

                {/* Main Grid */}

                <div className="mt-16 grid gap-10 lg:grid-cols-2">

                    {/* Left Card */}

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-slate-700 bg-gradient-to-b from-slate-900 to-slate-800 p-8 shadow-xl"
                    >

                        <h3 className="text-3xl font-bold text-white">
                            Let's Work Together
                        </h3>

                        <p className="mt-5 leading-8 text-slate-400">
                            Whether you have an AI project,
                            internship opportunity,
                            freelance work,
                            or simply want to connect,
                            I'm always happy to discuss new ideas and opportunities.
                        </p>

                        {/* Contact Cards */}

                        <div className="mt-10 space-y-5">

                            {/* Email */}

                            <div className="group flex items-center gap-5 rounded-2xl border border-slate-700 bg-slate-800/60 p-5 transition-all duration-300 hover:border-blue-500 hover:bg-slate-800">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/30">

                                    <FaEnvelope className="text-xl text-white" />

                                </div>

                                <div>

                                    <p className="text-sm text-slate-400">
                                        Email
                                    </p>

                                    <a
                                        href={`mailto:${profile.email}`}
                                        className="font-medium text-white transition hover:text-blue-400"
                                    >
                                        {profile.email}
                                    </a>

                                </div>

                            </div>

                            {/* Phone */}

                            <div className="group flex items-center gap-5 rounded-2xl border border-slate-700 bg-slate-800/60 p-5 transition-all duration-300 hover:border-blue-500 hover:bg-slate-800">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/30">

                                    <FaPhoneAlt className="text-xl text-white" />

                                </div>

                                <div>

                                    <p className="text-sm text-slate-400">
                                        Phone
                                    </p>

                                    <a
                                        href={`tel:${profile.phone}`}
                                        className="font-medium text-white transition hover:text-blue-400"
                                    >
                                        {profile.phone}
                                    </a>

                                </div>

                            </div>

                            {/* Location */}

                            <div className="group flex items-center gap-5 rounded-2xl border border-slate-700 bg-slate-800/60 p-5 transition-all duration-300 hover:border-blue-500 hover:bg-slate-800">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/30">

                                    <FaMapMarkerAlt className="text-xl text-white" />

                                </div>

                                <div>

                                    <p className="text-sm text-slate-400">
                                        Location
                                    </p>

                                    <p className="font-medium text-white">
                                        {profile.location}
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Social Icons */}

                        <div className="mt-10 flex flex-wrap gap-4">

                            {socials.map((item) => {

                                const Icon = item.icon;

                                return (

                                    <a
                                        key={item.id}
                                        href={item.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={item.label}
                                        className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
                                    >

                                        <Icon size={18} />

                                    </a>

                                );

                            })}

                        </div>

                    </motion.div>

                    {/* Right Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-slate-700 bg-gradient-to-b from-slate-900 to-slate-800 p-8 shadow-xl"
                    >

                        {/* Status Message */}

                        {status.message && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className={`mb-6 flex items-center gap-3 rounded-xl border px-4 py-3 ${status.type === "success"
                                    ? "border-green-500 bg-green-500/10 text-green-400"
                                    : "border-red-500 bg-red-500/10 text-red-400"
                                    }`}
                            >
                                {status.type === "success" ? (
                                    <FaCheckCircle className="text-xl" />
                                ) : (
                                    <FaTimesCircle className="text-xl" />
                                )}

                                <span>{status.message}</span>
                            </motion.div>
                        )}

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                            />

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                            />

                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                required
                                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                            />

                            <textarea
                                rows={6}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                required
                                className="w-full resize-none rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                            />

                            <div className="flex flex-col gap-4 pt-2 sm:flex-row">

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/40 disabled:cursor-not-allowed disabled:opacity-70"
                                >

                                    {loading ? (
                                        <>
                                            <svg
                                                className="h-5 w-5 animate-spin"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                    opacity="0.25"
                                                />

                                                <path
                                                    fill="currentColor"
                                                    d="M22 12a10 10 0 00-10-10v4a6 6 0 016 6h4z"
                                                />
                                            </svg>

                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane />
                                            Send Message
                                        </>
                                    )}

                                </button>

                                <a
                                    href={profile.resume}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-slate-700"
                                >
                                    <FaDownload />

                                    Download Resume
                                </a>

                            </div>

                        </form>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}

export default Contact;