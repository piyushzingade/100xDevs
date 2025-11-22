"use client"
import { Users, Briefcase, CheckCircle2, GitBranch, Github, TrendingUp, Award } from "lucide-react"
import type React from "react"

import { motion } from "motion/react"
import { NextJsIcon, DockerIcon, K8sIcon, SolanaIcon, KafkaIcon, CalComLogo } from "@/components/ui/icons"

interface FeatureProps {
    children: React.ReactNode
    className?: string
    title: string
    description: string
    colSpan?: string
    rowSpan?: string
}

/* Contribution graph unchanged except small color tweak */
const ContributionGraph = () => (
    <div className="grid grid-cols-12 gap-1 opacity-80 w-full">
        {Array.from({ length: 60 }).map((_, i) => (
            <motion.div
                key={i}
                className={`w-full pt-[100%] rounded-[1px] ${Math.random() > 0.8
                    ? "bg-[#39d353]"
                    : Math.random() > 0.5
                        ? "bg-[#26a641]"
                        : Math.random() > 0.3
                            ? "bg-[#0e4429]"
                            : "bg-[#161b22]"
                    }`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.005 }}
            />
        ))}
    </div>
)

const SmallContributionPreview = () => (
    <div className="flex items-center justify-center gap-4 w-full h-full p-4">
        <div className="flex-1">
            <motion.div
                className="bg-[#010409] border border-[#30363d] rounded-lg p-3 text-center hover:border-blue-500/50 transition-colors"
                whileHover={{ scale: 1.05 }}
            >
                <div className="text-lg font-bold text-blue-400">cal.com</div>
                <div className="text-xs text-gray-400 mt-1">Scheduling Platform</div>
                <motion.div
                    className="mt-2 inline-block px-2 py-1 bg-white/5 rounded text-[10px] text-gray-300"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                    Open Source
                </motion.div>
            </motion.div>
        </div>
        <motion.div
            className="flex-1 bg-[#161b22] rounded-lg p-2 border border-[#30363d] text-center hover:border-green-500/50 transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
        >
            <div className="flex items-center justify-center gap-1 text-xs text-gray-300">
                <Github className="w-3 h-3" />
                <span>Open Source</span>
            </div>
            <div className="text-sm font-bold text-green-400 mt-1">12k+ Stars</div>
        </motion.div>
    </div>
)

const BackendArchitectureDiagram = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center p-6">
            {/* SVG for dashed lines and animated beams */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 300">
                <defs>
                    {/* Dashed line style */}
                    <style>{`
            .dashed-line {
              stroke-dasharray: 5, 5;
              stroke: rgba(100, 150, 255, 0.4);
            }
          `}</style>

                    {/* Animated beam gradient */}
                    <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(96, 165, 250, 0)" />
                        <stop offset="50%" stopColor="rgba(96, 165, 250, 0.8)" />
                        <stop offset="100%" stopColor="rgba(96, 165, 250, 0)" />
                    </linearGradient>
                </defs>

                {/* Horizontal dashed line - top */}
                <path d="M 50 80 L 350 80" className="dashed-line" strokeWidth="1.5" />

                {/* Vertical dashed lines */}
                <path d="M 100 80 L 100 150" className="dashed-line" strokeWidth="1.5" />
                <path d="M 200 80 L 200 150" className="dashed-line" strokeWidth="1.5" />
                <path d="M 300 80 L 300 150" className="dashed-line" strokeWidth="1.5" />

                {/* Horizontal dashed line - middle */}
                <path d="M 50 150 L 350 150" className="dashed-line" strokeWidth="1.5" />

                {/* Vertical dashed lines going down */}
                <path d="M 100 150 L 100 220" className="dashed-line" strokeWidth="1.5" />
                <path d="M 200 150 L 200 220" className="dashed-line" strokeWidth="1.5" />
                <path d="M 300 150 L 300 220" className="dashed-line" strokeWidth="1.5" />

                {/* Animated beam 1: horizontal top-to-bottom left */}
                <motion.rect
                    x="50"
                    y="75"
                    width="250"
                    height="3"
                    fill="url(#beam-gradient)"
                    initial={{ x: 50 }}
                    animate={{ x: [50, 300, 50] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />

                {/* Animated beam 2: vertical left-to-right */}
                <motion.rect
                    x="95"
                    y="80"
                    width="3"
                    height="140"
                    fill="url(#beam-gradient)"
                    initial={{ y: 80 }}
                    animate={{ y: [80, 220, 80] }}
                    transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                />

                {/* Animated beam 3: horizontal middle */}
                <motion.rect
                    x="50"
                    y="147"
                    width="250"
                    height="3"
                    fill="url(#beam-gradient)"
                    initial={{ x: 300 }}
                    animate={{ x: [300, 50, 300] }}
                    transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, delay: 0.8 }}
                />

                {/* Animated beam 4: vertical right */}
                <motion.rect
                    x="297"
                    y="80"
                    width="3"
                    height="140"
                    fill="url(#beam-gradient)"
                    initial={{ y: 220 }}
                    animate={{ y: [220, 80, 220] }}
                    transition={{ duration: 3.8, repeat: Number.POSITIVE_INFINITY, delay: 1.2 }}
                />
            </svg>

            {/* Nodes */}
            <div className="absolute inset-0 flex flex-col items-center justify-between p-6 pointer-events-auto">
                {/* Top nodes */}
                <div className="flex justify-around w-full px-8 mt-4">
                    <motion.div
                        className="w-12 h-12 rounded-lg bg-blue-600/20 border border-blue-500 flex items-center justify-center shadow-lg hover:shadow-blue-500/30 transition-shadow"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="text-[10px] text-blue-300 font-mono">API</div>
                    </motion.div>
                    <motion.div
                        className="w-12 h-12 rounded-lg bg-purple-600/20 border border-purple-500 flex items-center justify-center shadow-lg hover:shadow-purple-500/30 transition-shadow"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="text-[10px] text-purple-300 font-mono">AUTH</div>
                    </motion.div>
                    <motion.div
                        className="w-12 h-12 rounded-lg bg-cyan-600/20 border border-cyan-500 flex items-center justify-center shadow-lg hover:shadow-cyan-500/30 transition-shadow"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="text-[10px] text-cyan-300 font-mono">DATA</div>
                    </motion.div>
                </div>

                {/* Middle: Message Queue */}
                <motion.div
                    className="w-16 h-10 rounded-lg bg-yellow-600/20 border border-yellow-500 flex items-center justify-center shadow-xl hover:shadow-yellow-500/40 transition-all"
                    whileHover={{ scale: 1.12, boxShadow: "0 0 20px rgba(234, 179, 8, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="text-[9px] text-yellow-300 font-mono font-bold">QUEUE</div>
                </motion.div>

                {/* Bottom nodes */}
                <div className="flex justify-around w-full px-8 mb-4">
                    <motion.div
                        className="w-12 h-12 rounded-lg bg-green-600/20 border border-green-500 flex items-center justify-center shadow-lg hover:shadow-green-500/30 transition-shadow"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="text-[10px] text-green-300 font-mono">CACHE</div>
                    </motion.div>
                    <motion.div
                        className="w-12 h-12 rounded-lg bg-pink-600/20 border border-pink-500 flex items-center justify-center shadow-lg hover:shadow-pink-500/30 transition-shadow"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="text-[10px] text-pink-300 font-mono">DB</div>
                    </motion.div>
                    <motion.div
                        className="w-12 h-12 rounded-lg bg-orange-600/20 border border-orange-500 flex items-center justify-center shadow-lg hover:shadow-orange-500/30 transition-shadow"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="text-[10px] text-orange-300 font-mono">WORKER</div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

const MicroservicesDiagram = () => {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-4 min-h-[200px]">
            {/* Nodes */}
            <div className="relative z-10 flex flex-col items-center gap-10 w-full">
                {/* Top: Client */}
                <motion.div
                    className="w-14 h-14 rounded-xl bg-[#0d1117] border border-gray-700 flex items-center justify-center z-20 shadow-2xl hover:shadow-blue-500/20 hover:border-blue-400 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                >
                    <Users size={24} className="text-blue-400" />
                </motion.div>

                {/* Middle: Kafka/LB */}
                <motion.div
                    className="w-40 h-12 rounded-lg bg-[#161b22] border border-blue-500/30 flex items-center justify-center gap-2 z-20 backdrop-blur-md shadow-[0_0_30px_rgba(96,165,250,0.06)] hover:border-blue-400 hover:shadow-[0_0_40px_rgba(96,165,250,0.15)] transition-all"
                    whileHover={{ scale: 1.05 }}
                >
                    <KafkaIcon className="w-4 h-4 text-blue-400" />
                    <span className="text-[10px] text-blue-200 font-mono">Event Bus</span>
                </motion.div>

                {/* Bottom: Services */}
                <div className="flex gap-3 w-full justify-center">
                    {[
                        { label: "Auth", color: "green" },
                        { label: "Payments", color: "blue" },
                        { label: "Email", color: "yellow" },
                    ].map((service, idx) => (
                        <motion.div
                            key={idx}
                            className={`w-20 h-20 rounded-lg bg-[#0d1117] border border-gray-800 flex flex-col items-center justify-center gap-1 z-20 shadow-xl hover:shadow-${service.color}-500/30 hover:border-${service.color}-400 transition-all`}
                            whileHover={{ scale: 1.08, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="text-[9px] text-gray-400 uppercase tracking-wider">{service.label}</div>
                            <motion.div
                                className={`w-2 h-2 rounded-full bg-${service.color}-500`}
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Connecting Lines & Moving Packets */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                {/* Line: Client -> Bus */}
                <path d="M 50% 18% L 50% 38%" className="stroke-gray-800" strokeWidth="2" strokeDasharray="4 4" />

                {/* Lines: Bus -> Services */}
                <path d="M 50% 55% L 30% 75%" className="stroke-gray-800" strokeWidth="1" />
                <path d="M 50% 55% L 50% 75%" className="stroke-gray-800" strokeWidth="1" />
                <path d="M 50% 55% L 70% 75%" className="stroke-gray-800" strokeWidth="1" />

                {/* Animated Packets */}
                <motion.circle r="3" fill="#60A5FA" opacity="0.8">
                    <animateMotion
                        dur="1.5s"
                        repeatCount="indefinite"
                        path="M 0,-90 L 0,-40"
                        keyPoints="0;1"
                        keyTimes="0;1"
                        calcMode="linear"
                    />
                </motion.circle>
                <motion.circle r="2" fill="#60A5FA" opacity="0.8">
                    <animateMotion
                        dur="2s"
                        repeatCount="indefinite"
                        path="M 0,10 L -60,60"
                        keyPoints="0;1"
                        keyTimes="0;1"
                        calcMode="linear"
                    />
                </motion.circle>
                <motion.circle r="2" fill="#60A5FA" opacity="0.8">
                    <animateMotion
                        dur="2.2s"
                        repeatCount="indefinite"
                        path="M 0,10 L 60,60"
                        keyPoints="0;1"
                        keyTimes="0;1"
                        calcMode="linear"
                    />
                </motion.circle>
            </svg>
        </div>
    )
}

const CertificateVisual = () => (
    <div className="relative w-full h-full flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-500">
        <motion.div
            className="relative w-56 h-40 bg-[#F5F5F5] rounded-sm shadow-2xl flex flex-col p-5 transform -rotate-3 hover:rotate-0 transition-all duration-500 border border-gray-200"
            initial={{ y: 10 }}
            whileInView={{ y: 0 }}
            whileHover={{ scale: 1.05 }}
        >
            {/* Header */}
            <div className="flex justify-between items-start mb-3">
                <div className="flex gap-1">
                    <motion.div className="w-2 h-2 bg-gray-300 rounded-full" whileHover={{ scale: 1.2 }} />
                    <motion.div className="w-2 h-2 bg-gray-300 rounded-full" whileHover={{ scale: 1.2 }} />
                </div>
                <div className="text-[8px] font-serif text-gray-400 uppercase tracking-widest">Official Document</div>
            </div>

            {/* Content */}
            <div className="space-y-2 grow">
                <div className="text-[10px] font-bold text-gray-800 font-serif">Certificate of Excellence</div>
                <div className="w-full h-px bg-gray-200 my-1"></div>
                <motion.div className="w-3/4 h-1 bg-gray-200 rounded-full" whileHover={{ width: "100%" }} />
                <div className="w-full h-1 bg-gray-200 rounded-full"></div>
                <div className="w-1/2 h-1 bg-gray-200 rounded-full"></div>
            </div>

            {/* Seal */}
            <div className="absolute bottom-4 right-4">
                <div className="relative w-10 h-10">
                    <div className="absolute inset-0 bg-blue-600 rounded-full opacity-20 animate-ping"></div>
                    <motion.div
                        className="absolute inset-0 bg-blue-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white"
                        whileHover={{ scale: 1.1 }}
                    >
                        <CheckCircle2 className="w-5 h-5 text-white" />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    </div>
)

const BentoItem = ({ children, className, title, description, colSpan = "", rowSpan = "" }: FeatureProps) => (
    <motion.div
        className={`relative overflow-hidden rounded-2xl bg-[#0A0A0A] border border-[#1F1F1F] group hover:border-blue-500/50 transition-all duration-300 flex flex-col ${colSpan} ${rowSpan} ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -4 }}
    >
        {/* Enhanced hover gradient with more prominent blue */}
        <div
            className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
            style={{ background: "linear-gradient(180deg, rgba(59,130,246,0.1), rgba(59,130,246,0.05))" }}
        />

        {/* Animated border glow on hover */}
        <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
            style={{ background: "radial-gradient(circle at top right, rgba(59,130,246,0.15), transparent 50%)" }}
        />

        {/* Content Area */}
        <div className="grow relative z-10 overflow-hidden flex items-center justify-center bg-linear-to-br from-blue-900/6 via-transparent to-blue-600/6 p-4">
            {children}

            {/* Title + description overlay with enhanced positioning */}
            <motion.div
                className="absolute left-6 bottom-6 bg-black/60 backdrop-blur-md px-4 py-3 rounded-lg border border-white/10 max-w-[70%] group-hover:bg-black/80 transition-colors duration-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <div className="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">{title}</div>
                <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors leading-snug">
                    {description}
                </div>
            </motion.div>
        </div>
    </motion.div>
)

const StatCounter = ({ value, label, icon: Icon }: { value: string; label: string; icon?: any }) => (
    <motion.div
        className="flex flex-col items-center gap-2 group cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
    >
        {Icon && (
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                <Icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
            </motion.div>
        )}
        <motion.div className="text-2xl font-black text-white group-hover:text-blue-300 transition-colors">
            {value}
        </motion.div>
        <span className="text-xs font-mono text-gray-400 group-hover:text-gray-300">{label}</span>
    </motion.div>
)

export const Features = () => {
    return (
        <section className="py-32 px-4 bg-brand-black relative border-b border-[#111]" id="syllabus">
            <div className="max-w-7xl mx-auto mb-16 px-2 md:px-4">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                        Why{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-blue-600">100xDevs?</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl font-light border-l-2 border-blue-500 pl-6">
                        Most bootcamps teach you syntax. We teach you engineering. <br />
                        Prepare for a career, not just a job interview.
                    </p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[280px] gap-4 px-2 md:px-4">
                {/* 1. Open Source (2x2) */}
                <BentoItem
                    colSpan="md:col-span-2"
                    rowSpan="md:row-span-2"
                    title="Open Source Architect"
                    description="Contribute to real projects. We've merged PRs into top repositories."
                >
                    <div className="relative w-full h-full flex flex-col p-6 justify-between">
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex flex-wrap gap-3">
                                <motion.div
                                    className="bg-white/5 px-3 py-1.5 rounded border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                                    whileHover={{ scale: 1.05, borderColor: "#60a5fa" }}
                                >
                                    <CalComLogo className="w-6 h-6 text-white" />
                                </motion.div>
                            </div>
                            <motion.div className="flex gap-2 text-gray-500" whileHover={{ scale: 1.1 }}>
                                <motion.div whileHover={{ scale: 1.2, color: "#ffffff" }}>
                                    <Github className="w-6 h-6 transition-colors cursor-pointer" />
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.2, color: "#F05032" }}>
                                    <GitBranch className="w-6 h-6 transition-colors cursor-pointer" />
                                </motion.div>
                            </motion.div>
                        </div>

                        <div className="space-y-3 mb-4">
                            <div className="grid grid-cols-2 gap-3">
                                <motion.div
                                    className="bg-[#010409] border border-[#30363d] rounded-lg p-3 text-center hover:border-blue-500/50 transition-colors"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                >
                                    <div className="text-xl font-bold text-blue-400">150+</div>
                                    <div className="text-xs text-gray-400">PRs Merged</div>
                                </motion.div>
                                <motion.div
                                    className="bg-[#010409] border border-[#30363d] rounded-lg p-3 text-center hover:border-green-500/50 transition-colors"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                >
                                    <div className="text-xl font-bold text-green-400">50+</div>
                                    <div className="text-xs text-gray-400">Repos</div>
                                </motion.div>
                            </div>
                        </div>

                        <div className="bg-[#010409] border border-[#30363d] rounded-xl p-4 shadow-2xl group-hover:shadow-blue-500/20 transition-shadow duration-300 group-hover:scale-[1.02]">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <motion.div
                                        className="w-2 h-2 rounded-full bg-red-500"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                                    />
                                    <motion.div
                                        className="w-2 h-2 rounded-full bg-yellow-500"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                                    />
                                    <motion.div
                                        className="w-2 h-2 rounded-full bg-green-500"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                                    />
                                </div>
                                <span className="text-[10px] font-mono text-gray-400">contributions</span>
                            </div>
                            <ContributionGraph />
                        </div>
                    </div>
                </BentoItem>

                {/* 2. System Design (1x2) */}
                <BentoItem
                    colSpan="md:col-span-1"
                    rowSpan="md:row-span-2"
                    title="System Design"
                    description="Architect scalable systems. Decoded."
                >
                    <MicroservicesDiagram />
                </BentoItem>

                <BentoItem
                    colSpan="md:col-span-1"
                    rowSpan="md:row-span-1"
                    title="Backend Architecture"
                    description="Distributed systems with async patterns."
                >
                    <BackendArchitectureDiagram />
                </BentoItem>

                {/* 4. Mentorship (1x1) - Top Right */}
                <BentoItem
                    colSpan="md:col-span-1"
                    rowSpan="md:row-span-1"
                    title="Live Mentorship"
                    description="Weekly live Q&As with Harkirat."
                >
                    <div className="relative flex items-center justify-center w-full h-full gap-4">
                        <motion.div
                            className="w-24 h-24 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center group-hover:bg-[#222] transition-colors relative"
                            whileHover={{ scale: 1.1 }}
                        >
                            <Users className="w-10 h-10 text-gray-400 group-hover:text-white transition-colors" />
                            <motion.div
                                className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                            >
                                LIVE
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="text-2xl font-bold text-blue-400">2x</div>
                            <div className="text-xs text-gray-400">per week</div>
                        </motion.div>
                    </div>
                </BentoItem>

                {/* 5. Modern Stack (1x1) - Below Mentorship */}
                <BentoItem
                    colSpan="md:col-span-1"
                    rowSpan="md:row-span-1"
                    title="Modern Stack"
                    description="NextJS, Docker, K8s, Solana."
                >
                    <div className="grid grid-cols-2 gap-4 w-full h-full content-center justify-items-center p-6">
                        {[
                            { Icon: NextJsIcon, label: "Next.js" },
                            { Icon: DockerIcon, label: "Docker" },
                            { Icon: K8sIcon, label: "K8s" },
                            { Icon: SolanaIcon, label: "Solana" },
                        ].map((tech, idx) => (
                            <motion.div
                                key={idx}
                                className="flex flex-col items-center gap-1 cursor-pointer"
                                whileHover={{ scale: 1.15, y: -4 }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0.6 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <tech.Icon className="w-10 h-10 group-hover:text-blue-400 transition-colors" />
                                <span className="text-[8px] text-gray-500 group-hover:text-gray-300">{tech.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </BentoItem>

                <BentoItem
                    colSpan="md:col-span-1"
                    rowSpan="md:row-span-1"
                    title="Contribution"
                    description="Merge code into production."
                >
                    <SmallContributionPreview />
                </BentoItem>

                {/* 7. Certification (2x1) - Bottom Left */}
                <BentoItem
                    colSpan="md:col-span-2"
                    rowSpan="md:row-span-1"
                    title="Certification"
                    description="Proof of work that holds value. Verified on-chain."
                >
                    <div className="w-full h-full flex items-center justify-around px-10">
                        <div className="text-left space-y-3">
                            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
                                <div className="text-2xl font-black text-white group-hover:text-blue-300 transition-colors">
                                    Verified.
                                </div>
                                <div className="text-sm text-gray-500 group-hover:text-gray-400">Shareable on LinkedIn & Twitter.</div>
                            </motion.div>

                            <motion.div
                                className="flex gap-2 pt-2"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="flex items-center gap-1 text-xs bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded-full">
                                    <Award className="w-3 h-3 text-blue-400" />
                                    <span className="text-blue-300">NFT Badge</span>
                                </div>
                                <div className="flex items-center gap-1 text-xs bg-green-500/10 border border-green-500/20 px-2 py-1 rounded-full">
                                    <CheckCircle2 className="w-3 h-3 text-green-400" />
                                    <span className="text-green-300">Verified</span>
                                </div>
                            </motion.div>
                        </div>
                        <div className="w-48 h-32">
                            <CertificateVisual />
                        </div>
                    </div>
                </BentoItem>

            </div>
        </section>
    )
}
