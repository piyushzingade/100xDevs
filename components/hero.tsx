"use client";
import { ArrowRight, MessageSquare, Code2, Clock, Settings, Plus } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export function Hero() {
    const enter = { opacity: 1, y: 0 };
    const hidden = { opacity: 0, y: 12 };

    return (
        <section className="relative min-h-screen flex flex-col overflow-hidden bg-black">
            {/* Simple Background Pattern */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-size:4rem_4rem" />
                <div className="absolute inset-0 bg-blue-500/5" />
            </div>

            <div className="max-w-7xl w-full mx-auto px-6 lg:px-12 pt-24 lg:pt-32 pb-12 lg:pb-20">
                {/* Top Section: Content */}
                <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900 border border-gray-800 text-xs text-white/70 mb-6"
                    >
                        New Cohort 3.0 — Applications Close May 31
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={hidden}
                        animate={enter}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 max-w-4xl"
                    >
                        Don&apos;t just write code — <span className="text-blue-400">build resilient systems.</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-sm md:text-base text-white/70 leading-relaxed max-w-2xl mb-8"
                    >
                        Learn to design fault-tolerant services, optimize latency, and operate real production systems. Hands-on projects, mentor reviews, and hiring support — a curriculum built for impact.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="button"
                            className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-100 transition-colors"
                        >
                            <span>Apply today for free</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="button"
                            className="px-6 py-3 rounded-lg border border-white/20 text-white/90 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all font-semibold"
                        >
                            View Demo
                        </motion.button>
                    </motion.div>
                </div>

                {/* Bottom Section: Dashboard UI */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative rounded-lg border border-gray-800 bg-black overflow-hidden shadow-2xl"
                >
                    {/* Window Chrome */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-gray-800">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-600"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                    </div>

                    {/* Dashboard Content */}
                    <div className="flex h-[600px]">
                        {/* Left Sidebar */}
                        <div className="w-64 bg-gray-950 border-r border-gray-800 flex flex-col">
                            {/* Logo */}
                            <div className="p-4 border-b border-gray-800">
                                <div className="flex items-center gap-2">
                                    <Code2 className="w-5 h-5 text-blue-400" />
                                    <span className="text-white font-semibold">100xDevs</span>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="p-4 border-b border-gray-800">
                                <button className="w-full flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium">
                                    <Plus className="w-4 h-4" />
                                    New Project
                                </button>
                            </div>

                            {/* Projects */}
                            <div className="flex-1 overflow-y-auto p-4">
                                <p className="text-xs text-white/50 uppercase tracking-wider mb-3">Projects</p>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-900 cursor-pointer group">
                                        <MessageSquare className="w-4 h-4 text-white/40 group-hover:text-blue-400" />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-white font-medium truncate">React Dashboard</p>
                                            <p className="text-xs text-white/50">12 projects • 2 mins ago</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-900 cursor-pointer group">
                                        <MessageSquare className="w-4 h-4 text-white/40 group-hover:text-blue-400" />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-white font-medium truncate">API Service</p>
                                            <p className="text-xs text-white/50">8 projects • 1 hour ago</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-900 cursor-pointer group">
                                        <MessageSquare className="w-4 h-4 text-white/40 group-hover:text-blue-400" />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-white font-medium truncate">Mobile App</p>
                                            <p className="text-xs text-white/50">15 projects • 3 hours ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Recent */}
                            <div className="p-4 border-t border-gray-800">
                                <p className="text-xs text-white/50 uppercase tracking-wider mb-3">Recent</p>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-white/70 hover:text-white cursor-pointer">
                                        <Clock className="w-3.5 h-3.5" />
                                        <span>Build authentication</span>
                                        <span className="ml-auto text-xs text-white/40">2m</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-white/70 hover:text-white cursor-pointer">
                                        <Clock className="w-3.5 h-3.5" />
                                        <span>Debug payment flow</span>
                                        <span className="ml-auto text-xs text-white/40">15m</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-white/70 hover:text-white cursor-pointer">
                                        <Clock className="w-3.5 h-3.5" />
                                        <span>Optimize queries</span>
                                        <span className="ml-auto text-xs text-white/40">1h</span>
                                    </div>
                                </div>
                            </div>

                            {/* Settings */}
                            <div className="p-4 border-t border-gray-800">
                                <button className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                                    <Settings className="w-4 h-4" />
                                    Settings
                                </button>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="flex-1 flex flex-col bg-black">
                            {/* Top Bar */}
                            <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-white/50">100xDevs</p>
                                    <p className="text-lg font-semibold text-white">Course Dashboard</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="p-2 hover:bg-gray-900 rounded-lg transition-colors">
                                        <Settings className="w-4 h-4 text-white/70" />
                                    </button>
                                </div>
                            </div>

                            {/* Central Message Area */}
                            <div className="flex-1 flex items-center justify-center p-8">
                                <div className="text-center max-w-md">
                                    <p className="text-lg text-white/90 mb-2">
                                        Your premium coding course with hands-on projects and real-world systems.
                                    </p>
                                    <p className="text-sm text-white/60">
                                        Select a project above and start building production-ready applications!
                                    </p>
                                </div>
                            </div>

                            {/* Input Area */}
                            <div className="p-4 border-t border-gray-800">
                                <div className="flex items-center gap-3">
                                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg hover:bg-gray-800 transition-colors text-sm text-white/90">
                                        <Code2 className="w-4 h-4" />
                                        Generate Code
                                    </button>
                                    <input
                                        type="text"
                                        placeholder="Describe what you want to build..."
                                        className="flex-1 px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                                    />
                                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium">
                                        <ArrowRight className="w-4 h-4" />
                                        Run Code
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dashboard Image Overlay (if you have an image) */}
                    <div className="absolute inset-0 pointer-events-none opacity-0">
                        <Image
                            src="/dashboard.jpg"
                            alt="100xDevs Course Dashboard"
                            fill
                            className="object-cover"
                            priority
                            sizes="100vw"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
