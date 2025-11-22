"use client";

import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { motion } from "motion/react";

export const Cta = () => {
    return (
        <section className="relative  mx-auto px-4 py-24 overflow-hidden ">
            {/* Background noise */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

            {/* Enhanced gradient background layers */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-600/30 via-blue-500/20 to-transparent"></div>
            <div className="absolute inset-0 bg-linear-to-tl from-blue-400/20 via-transparent to-white/5"></div>
            <div className="absolute inset-0 bg-linear-to-t from-transparent via-blue-500/10 to-transparent"></div>
            <div className="absolute inset-0 bg-radial-gradient from-white/5 via-transparent to-transparent"></div>

            {/* Animated gradient orbs - larger and more prominent */}
            <motion.div
                className="absolute -top-20 left-1/4 w-[600px] h-[600px] bg-blue-500/40 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.6, 0.4],
                    x: [0, 50, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute -bottom-20 right-1/4 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-3xl"
                animate={{
                    scale: [1.3, 1, 1.3],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, -50, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            />
            {/* White accent orb */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-sm font-semibold text-blue-300">Limited Spots Available</span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight"
                    >
                        Ready to{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-blue-500 to-blue-600">
                            10x your career?
                        </span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Join thousands of developers who've transformed their careers.
                        Start building production-grade systems today.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 rounded-xl font-bold text-lg text-white overflow-hidden shadow-2xl"
                        >
                            {/* Gradient background */}
                            <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-blue-500 to-blue-600 bg-size-200 animate-gradient-x"></div>

                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

                            {/* Shine effect */}
                            <motion.div
                                className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                                animate={{
                                    x: ["-100%", "200%"],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "linear",
                                }}
                            />

                            {/* Button content */}
                            <span className="relative flex items-center gap-2">
                                <Zap className="w-5 h-5" />
                                Start Learning Now
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </span>
                        </motion.button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span><strong className="text-white">5,000+</strong> Students</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            <span><strong className="text-white">4.9/5</strong> Rating</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                            <span><strong className="text-white">100%</strong> Job Support</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};