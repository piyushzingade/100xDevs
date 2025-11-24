"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export const Footer = () => {
    return (
        <section className="">
            <div className="w-full">
                {/* Reduced mobile min-height, keep larger on md+ */}
                <div className="relative w-full border-t border-blue-900/20 overflow-hidden p-8 md:p-12 lg:p-16 min-h-[420px] md:min-h-[500px] flex flex-col justify-between group">

                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-blue-700/20 via-transparent to-transparent opacity-50" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-start gap-6 md:gap-8 max-w-7xl mx-auto w-full pb-16 md:pb-0">
                        {/* Logo & Tagline */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="text-3xl md:text-4xl font-black text-white tracking-tighter">
                                    100xDevs
                                </span>
                            </div>
                            <p className="text-gray-400 text-lg md:text-xl font-medium max-w-md">
                                The Most Comprehensive Web Development Course
                            </p>
                        </div>

                        {/* Main Footer Content - Horizontal Layout */}
                        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                            {/* CTA Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-colors shadow-lg shadow-blue-900/20 flex items-center gap-2"
                            >
                                Join the Cohort
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>

                            {/* Links & Social - Vertical Stack */}
                            <div className="flex flex-col gap-4 items-start md:items-end">
                                {/* Footer Links */}
                                <div className="flex items-center gap-6 text-sm">
                                    <Link href="/support" className="text-gray-400 hover:text-white transition-colors">
                                        Support
                                    </Link>
                                    <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                                        Contact
                                    </Link>
                                </div>

                                {/* Social Media Links */}
                                <div className="flex items-center gap-4">
                                    <a
                                        href="https://youtube.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        aria-label="YouTube"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://x.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        aria-label="X (Twitter)"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        aria-label="Instagram"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Huge Text */}
                    <div className="absolute -bottom-[5%] sm:-bottom-[15%] left-0 w-full leading-none select-none pointer-events-none">
                        <h1 className="text-[20vw] sm:text-[18vw] md:text-[16vw] lg:text-[15vw] font-black text-white/5 tracking-tighter text-center whitespace-nowrap">
                            100xDEVS
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
};
