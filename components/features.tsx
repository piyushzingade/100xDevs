"use client"
import { Users, CheckCircle2, GitBranch, Github, Award } from "lucide-react"
import type React from "react"
import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

interface FeatureProps {
    children: React.ReactNode
    className?: string
    title: string
    description: string
    colSpan?: string
    rowSpan?: string
}

const ExpandableCards = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    const cards = [
        {
            title: "Curriculum",
            description: "Comprehensive courses covering Web Dev, DevOps, and Web3 technologies with hands-on projects",
        },
        {
            title: "Community",
            description: "Join 100,000+ developers learning and building together in our active Discord community",
        },
        {
            title: "Assignments",
            description: "Real-world projects and hands-on coding challenges to build your portfolio",
        },
        {
            title: "Projects",
            description: "Build production-ready applications from scratch with industry best practices",
        },
    ]

    return (
        <div className="flex-1 flex flex-col gap-2.5">
            {cards.map((card, index) => {
                const isExpanded = expandedIndex === index

                return (
                    <motion.div
                        key={index}
                        layout
                        onClick={() => setExpandedIndex(isExpanded ? null : index)}
                        className="bg-linear-to-br from-gray-700 to-gray-800 rounded-xl p-6 cursor-pointer border border-white/10 hover:border-white/30 transition-colors overflow-hidden"
                        animate={{
                            flex: isExpanded ? 2 : 1,
                        }}
                        transition={{
                            layout: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                            flex: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
                        }}
                    >
                        <h3 className="text-xl font-bold text-white">
                            {card.title}
                        </h3>
                        {isExpanded && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="text-base text-gray-200 leading-relaxed mt-2"
                            >
                                {card.description}
                            </motion.p>
                        )}
                    </motion.div>
                )
            })}
        </div>
    )
}

/* Contribution graph unchanged except small color tweak */
const ContributionGraph = () => (
    <div className="grid grid-cols-7 gap-[3px] opacity-90 w-full max-w-[200px]">
        {Array.from({ length: 35 }).map((_, i) => (
            <div
                key={i}
                className={`w-full aspect-square rounded-[2px] ${Math.random() > 0.7
                    ? "bg-[#39d353]"
                    : Math.random() > 0.4
                        ? "bg-[#26a641]"
                        : Math.random() > 0.2
                            ? "bg-[#0e4429]"
                            : "bg-[#161b22]"
                    }`}
            />
        ))}
    </div>
)

const SmallContributionPreview = () => (
    <div className="flex flex-col gap-4 w-full h-full">
        {/* Main Project Card */}
        <motion.div
            className="relative w-full bg-linear-to-br from-[#0d1117] via-[#010409] to-[#0d1117] border border-[#30363d] rounded-xl p-3.5 overflow-hidden group/card"
            transition={{ duration: 0.3 }}
        >
            {/* Gradient glow effect */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

            {/* Animated border glow */}
            <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
                style={{
                    background: "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)",
                    filter: "blur(8px)"
                }}
                animate={{
                    x: ["-100%", "200%"]
                }}
                transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear"
                }}
            />

            <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    {/* Cal.com Logo */}
                    {/* <motion.div
                        className="w-9 h-9 rounded-lg bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30"
                        transition={{ duration: 0.6 }}
                    >
                       
                    </motion.div> */}

                    <div className="text-left">
                        <div className="text-sm font-bold text-white group-hover/card:text-blue-300 transition-colors">
                            100xDevs
                        </div>

                    </div>
                </div>

                {/* Open Source Badge */}
                <motion.div
                    className="px-2 py-0.5  bg-linear-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 rounded-full backdrop-blur-sm"
                >
                    <span className="text-[8px] font-semibold text-emerald-300 uppercase tracking-wider">
                        Open Source
                    </span>
                </motion.div>
            </div>
        </motion.div>

        {/* Stats Cards Row */}
        <div className="flex gap-2 w-full">
            {/* GitHub Stars Card */}
            <motion.div
                className="flex-1 relative bg-linear-to-br from-[#161b22] to-[#0d1117] rounded-lg p-2.5 border border-[#30363d] overflow-hidden group/stat"
                transition={{ duration: 0.2 }}
            >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-green-500/10 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col items-center gap-0.5">
                    <div className="flex items-center gap-1">
                        <motion.div>
                            <Github className="w-3 h-3 text-gray-400 group-hover/stat:text-white transition-colors" />
                        </motion.div>
                        <span className="text-[8px] text-gray-500 uppercase tracking-wide">Stars</span>
                    </div>
                    <div className="text-base font-black text-green-400 group-hover/stat:text-green-300 transition-colors">
                        12k+
                    </div>
                </div>
            </motion.div>

            {/* Contributions Card */}
            <motion.div
                className="flex-1 relative bg-linear-to-br from-[#161b22] to-[#0d1117] rounded-lg p-2.5 border border-[#30363d] overflow-hidden group/contrib"
                transition={{ duration: 0.2 }}
            >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-transparent opacity-0 group-hover/contrib:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col items-center gap-0.5">
                    <div className="flex items-center gap-1">
                        <motion.div>
                            <GitBranch className="w-3 h-3 text-gray-400 group-hover/contrib:text-white transition-colors" />
                        </motion.div>
                        <span className="text-[8px] text-gray-500 uppercase tracking-wide">PRs</span>
                    </div>
                    <div className="text-base font-black text-blue-400 group-hover/contrib:text-blue-300 transition-colors">
                        25+
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
)

const BackendArchitectureDiagram = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* SVG for dashed lines and animated beams */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 300">
                <defs>
                    {/* Dashed line style - WHITE */}
                    <style>{`
            .dashed-line {
              stroke-dasharray: 5, 5;
              stroke: rgba(255, 255, 255, 0.2);
              fill: none;
            }
          `}</style>

                    {/* Animated beam gradient - White */}
                    <linearGradient id="beam-gradient-circuit" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
                        <stop offset="50%" stopColor="rgba(255, 255, 255, 0.8)" />
                        <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                    </linearGradient>
                </defs>

                {/* Single continuous dashed line connecting all nodes in a circuit */}
                <path
                    d="M 100 80 L 200 80 L 300 80 L 300 150 L 300 220 L 200 220 L 100 220 L 100 150 L 100 80"
                    className="dashed-line"
                    strokeWidth="1.5"
                />

                {/* Single animated beam traveling around the circuit */}
                <motion.circle
                    r="4"
                    fill="rgba(255, 255, 255, 0.9)"
                    filter="blur(2px)"
                >
                    <animateMotion
                        dur="8s"
                        repeatCount="indefinite"
                        path="M 100 80 L 200 80 L 300 80 L 300 150 L 300 220 L 200 220 L 100 220 L 100 150 L 100 80"
                    />
                </motion.circle>

                {/* Glow effect for the beam */}
                <motion.circle
                    r="6"
                    fill="rgba(255, 255, 255, 0.3)"
                    filter="blur(4px)"
                >
                    <animateMotion
                        dur="8s"
                        repeatCount="indefinite"
                        path="M 100 80 L 200 80 L 300 80 L 300 150 L 300 220 L 200 220 L 100 220 L 100 150 L 100 80"
                    />
                </motion.circle>
            </svg>

            {/* Nodes */}
            <div className="absolute inset-0 flex flex-col items-center justify-between p-4 pointer-events-auto">
                {/* Top nodes */}
                <div className="flex justify-around w-full px-6 mt-2 gap-2">
                    <motion.div
                        className="w-14 h-11 rounded-lg bg-blue-500/10 border border-blue-400/40 flex items-center justify-center shadow-lg hover:shadow-blue-400/30 hover:border-blue-400 transition-all"

                    >
                        <div className="text-[10px] text-blue-300 font-mono font-bold">API</div>
                    </motion.div>
                    <motion.div
                        className="w-14 h-11 rounded-lg bg-purple-500/10 border border-purple-400/40 flex items-center justify-center shadow-lg hover:shadow-purple-400/30 hover:border-purple-400 transition-all"
                    >
                        <div className="text-[10px] text-purple-300 font-mono font-bold">AUTH</div>
                    </motion.div>

                    <motion.div
                        className="w-14 h-11 rounded-lg bg-yellow-500/10 border border-yellow-400/40 flex items-center justify-center shadow-lg hover:shadow-yellow-400/30 hover:border-yellow-400 transition-all"
                    >
                        <div className="text-[10px] text-yellow-300 font-mono font-bold">DATA</div>
                    </motion.div>
                </div>

                {/* Middle: Message Queue */}
                <motion.div
                    className="w-18 h-11 rounded-lg bg-yellow-500/10 border border-yellow-400/40 flex items-center justify-center shadow-xl hover:shadow-yellow-400/40 hover:border-yellow-400 transition-all px-3"
                >
                    <div className="text-[10px] text-yellow-300 font-mono font-bold">QUEUE</div>
                </motion.div>

                {/* Bottom nodes */}
                <div className="flex justify-around w-full px-6 mb-2">
                    <motion.div
                        className="w-14 h-11 rounded-lg bg-green-500/10 border border-green-400/40 flex items-center justify-center shadow-lg hover:shadow-green-400/30 hover:border-green-400 transition-all"
                    >
                        <div className="text-[10px] text-green-300 font-mono font-bold">CACHE</div>
                    </motion.div>
                    <motion.div
                        className="w-14 h-11 rounded-lg bg-pink-500/10 border border-pink-400/40 flex items-center justify-center shadow-lg hover:shadow-pink-400/30 hover:border-pink-400 transition-all"
                    >
                        <div className="text-[10px] text-pink-300 font-mono font-bold">DB</div>
                    </motion.div>
                    <motion.div
                        className="w-14 h-11 rounded-lg bg-orange-500/10 border border-orange-400/40 flex items-center justify-center shadow-lg hover:shadow-orange-400/30 hover:border-orange-400 transition-all"
                    >
                        <div className="text-[10px] text-orange-300 font-mono font-bold">WORKER</div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

const TeamShowcase = () => {
    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            <div className="flex flex-col items-center gap-6 w-full max-w-sm">
                {/* Image */}
                <div className="shrink-0">
                    <img
                        src="/image.png"
                        alt="Harkirat Singh"
                        className="w-56 h-56 object-cover rounded-2xl border-2 border-blue-500/30 shadow-xl"
                    />
                </div>

                {/* Content */}
                <div className="w-full space-y-4 text-center">
                    {/* Name */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                            Harkirat Singh
                        </h3>
                        <p className="text-sm text-blue-400 font-medium">
                            Founder & Lead Instructor
                        </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed px-2">
                        Ex-Amazon engineer teaching modern web development and system design.
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 justify-center px-2">
                        {['Full-Stack', 'DevOps'].map((tag) => (
                            <span
                                key={tag}
                                className="text-[10px] font-mono font-semibold uppercase px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
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



export const Features = () => {
    return (
        <section className="py-32 px-4 bg-black relative border-b border-[#111]" id="syllabus">
            {/* Background noise */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

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
                <motion.div
                    className="relative overflow-hidden rounded-2xl bg-[#0A0A0A] border border-[#1F1F1F] group hover:border-blue-500/50 transition-all duration-300 flex flex-col md:col-span-2 md:row-span-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Enhanced hover gradient */}
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
                    <div className="grow relative z-10 overflow-hidden flex flex-col bg-linear-to-br from-blue-900/6 via-transparent to-blue-600/6 p-6">
                        {/* Title Section */}
                        <motion.div
                            className="mb-6"
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                                Open Source Architect
                            </div>
                            <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors leading-snug">
                                Contribute to real projects. We've merged PRs into top repositories.
                            </div>
                        </motion.div>

                        {/* Content */}
                        <ExpandableCards />
                    </div>
                </motion.div>

                {/* 2. Team & Instructors (1x2) */}
                <motion.div
                    className="relative overflow-hidden rounded-2xl bg-[#0A0A0A] border border-[#1F1F1F] group hover:border-blue-500/50 transition-all duration-300 flex flex-col md:col-span-1 md:row-span-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Enhanced hover gradient */}
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
                    <div className="grow relative z-10 overflow-hidden flex flex-col bg-linear-to-br from-blue-900/6 via-transparent to-blue-600/6 p-6">
                        {/* Title Section */}
                        <motion.div
                            className="mb-6"
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                                Meet Your Instructors
                            </div>
                            <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors leading-snug">
                                Learn from industry experts with real-world experience.
                            </div>
                        </motion.div>

                        {/* Team Cards */}
                        <div className="flex-1 flex items-center">
                            <TeamShowcase />
                        </div>
                    </div>
                </motion.div>

                {/* Backend Architecture */}
                <motion.div
                    className="relative overflow-hidden rounded-2xl bg-[#0A0A0A] border border-[#1F1F1F] group hover:border-blue-500/50 transition-all duration-300 flex flex-col md:col-span-1 md:row-span-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Enhanced hover gradient */}
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
                    <div className="grow relative z-10 overflow-hidden flex flex-col bg-linear-to-br from-blue-900/6 via-transparent to-blue-600/6 p-4">
                        {/* Title Section */}
                        <motion.div
                            className="mb-3"
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="text-base font-bold text-white mb-0.5 group-hover:text-blue-300 transition-colors">
                                Backend Architecture
                            </div>
                            <div className="text-[10px] text-gray-400 group-hover:text-gray-300 transition-colors leading-snug">
                                Distributed systems with async patterns.
                            </div>
                        </motion.div>

                        {/* Diagram */}
                        <div className="flex-1 relative">
                            <BackendArchitectureDiagram />
                        </div>
                    </div>
                </motion.div>

                {/* 4. Mentorship - Top Right */}
                <motion.div
                    className="relative overflow-hidden rounded-2xl bg-[#0A0A0A] border border-[#1F1F1F] group hover:border-blue-500/50 transition-all duration-300 flex flex-col md:col-span-1 md:row-span-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Enhanced hover gradient */}
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
                    <div className="grow relative z-10 overflow-hidden flex flex-col bg-linear-to-br from-blue-900/6 via-transparent to-blue-600/6 p-5">
                        {/* Title Section */}
                        <motion.div
                            className="mb-4"
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                                Live Mentorship
                            </div>
                            <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors leading-snug">
                                Weekly live Q&As with Harkirat.
                            </div>
                        </motion.div>

                        {/* Content - Vertical Stack */}
                        <div className="flex-1 flex flex-col items-center justify-center gap-4">
                            {/* User Icon with LIVE Badge */}
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <motion.div
                                    className="w-20 h-20 rounded-full bg-linear-to-br from-[#1a1a1a] to-brand-black border-2 border-[#333] flex items-center justify-center group-hover:border-blue-500/50 transition-all shadow-xl relative"
                                    transition={{ duration: 0.3 }}
                                >
                                    <Users className="w-9 h-9 text-gray-400 group-hover:text-blue-400 transition-colors" />

                                    {/* LIVE Badge */}
                                    <motion.div
                                        className="absolute -top-1 -right-1 bg-linear-to-r from-red-500 to-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-lg"
                                        animate={{ scale: [1, 1.15, 1] }}
                                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                                    >
                                        LIVE
                                    </motion.div>
                                </motion.div>
                            </motion.div>

                            {/* Frequency Info */}
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <div className="text-3xl font-black text-blue-400 group-hover:text-blue-300 transition-colors mb-1">
                                    2x
                                </div>
                                <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors uppercase tracking-wider">
                                    per week
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* 5. Modern Stack- Below Mentorship */}
                <motion.div
                    className="relative overflow-hidden rounded-2xl bg-[#0A0A0A] border border-[#1F1F1F] group hover:border-blue-500/50 transition-all duration-300 flex flex-col md:col-span-1 md:row-span-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Enhanced hover gradient */}
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
                    <div className="grow relative z-10 overflow-hidden flex flex-col bg-linear-to-br from-blue-900/6 via-transparent to-blue-600/6 p-6">
                        {/* Title Section */}
                        <motion.div
                            className="mb-6"
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                                Modern Stack
                            </div>
                            <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors leading-snug">
                                NextJS, Docker, Kafka, Solana.
                            </div>
                        </motion.div>

                        {/* Tech Stack Grid */}
                        <div className="flex-1 flex items-center justify-center">
                            <div className="grid grid-cols-4 gap-3 w-full max-w-[360px]">
                                {[
                                    { icon: "/nextjs-icon.svg", label: "Next.js" },
                                    { icon: "/docker.svg", label: "Docker" },
                                    { icon: "/kubernetes.svg", label: "Kubernetes" },
                                    { icon: "/solana.svg", label: "Solana" },
                                    { icon: "/aws.svg", label: "AWS" },
                                    { icon: "/typescript.svg", label: "TypeScript" },
                                    { icon: "/tailwindcss.svg", label: "TailwindCSS" },
                                    { icon: "/redux.svg", label: "Redux" },
                                ].map((tech, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="flex flex-col items-center gap-1.5 cursor-pointer group/tech"
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 + idx * 0.05, duration: 0.3 }}
                                    >
                                        <div className="w-14 h-14 relative flex items-center justify-center bg-white/5 rounded-lg border border-white/10 group-hover/tech:border-blue-400/50 group-hover/tech:bg-white/10 transition-all duration-300">
                                            <img
                                                src={tech.icon}
                                                alt={tech.label}
                                                className="w-8 h-8 object-contain group-hover/tech:brightness-125 group-hover/tech:scale-110 transition-all duration-300"
                                            />
                                        </div>
                                        <span className="text-[8px] font-medium text-gray-500 group-hover/tech:text-gray-300 transition-colors text-center">
                                            {tech.label}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 6. Contribution - Bottom Right */}
                <motion.div
                    className="relative overflow-hidden rounded-2xl bg-[#0A0A0A] border border-[#1F1F1F] group hover:border-blue-500/50 transition-all duration-300 flex flex-col md:col-span-1 md:row-span-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Enhanced hover gradient */}
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
                    <div className="grow relative z-10 overflow-hidden flex flex-col bg-linear-to-br from-blue-900/6 via-transparent to-blue-600/6 p-5">
                        {/* Title Section */}
                        <motion.div
                            className="mb-4"
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                                Contribution
                            </div>
                            <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors leading-snug">
                                Merge code into production.
                            </div>
                        </motion.div>

                        {/* Contribution Preview */}
                        <div className="flex-1 flex items-center">
                            <SmallContributionPreview />
                        </div>
                    </div>
                </motion.div>

                {/* 7. Certification - Bottom Left */}
                <motion.div
                    className="relative overflow-hidden rounded-2xl bg-[#0A0A0A] border border-[#1F1F1F] group hover:border-blue-500/50 transition-all duration-300 flex flex-col md:col-span-2 md:row-span-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
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
                    <div className="grow relative z-10 overflow-hidden flex items-center justify-between bg-linear-to-br from-blue-900/6 via-transparent to-blue-600/6 px-8 md:px-12 py-8">
                        {/* Left side content */}
                        <div className="flex flex-col justify-center space-y-6 z-20 max-w-md">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="text-lg font-bold text-blue-400 mb-3 uppercase tracking-wider">
                                    Certification
                                </div>
                                <div className="text-3xl md:text-4xl font-black text-white group-hover:text-blue-300 transition-colors mb-3">
                                    Verified.
                                </div>
                                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors mb-2">
                                    Proof of work that holds value. Verified on-chain.
                                </div>
                                <div className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                                    Shareable on LinkedIn & Twitter.
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex flex-wrap gap-2"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                <div className="flex items-center gap-1.5 text-xs bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full hover:bg-blue-500/20 transition-colors">
                                    <Award className="w-3.5 h-3.5 text-blue-400" />
                                    <span className="text-blue-300 font-medium">NFT Badge</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-xs bg-green-500/10 border border-green-500/20 px-3 py-1.5 rounded-full hover:bg-green-500/20 transition-colors">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                                    <span className="text-green-300 font-medium">Verified</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right side - Certificate */}
                        <motion.div
                            className="shrink-0 z-20 hidden md:block"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <CertificateVisual />
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
