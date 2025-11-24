"use client"
import { motion } from "motion/react"
import { BackendArchitectureDiagram } from "../BackendArchitecture"
import { LiveMentorship } from "../LiveMentorship"
import { ModernStack } from "../ModernStack"
import { SmallContributionPreview } from "../ContributionPreview"

export const BackendBento = () => (
    <motion.div
        className="relative overflow-hidden rounded-2xl bg-[#0A0A0A] border border-[#1F1F1F] group hover:border-blue-500/50 transition-all duration-300 flex flex-col md:col-span-1 md:row-span-1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
    >
        <div
            className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
            style={{ background: "linear-gradient(180deg, rgba(59,130,246,0.1), rgba(59,130,246,0.05))" }}
        />

        <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
            style={{ background: "radial-gradient(circle at top right, rgba(59,130,246,0.15), transparent 50%)" }}
        />

        <div className="grow relative z-10 overflow-hidden flex flex-col bg-linear-to-br from-blue-900/6 via-transparent to-blue-600/6 p-4">
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

            <div className="flex-1 relative">
                <BackendArchitectureDiagram />
            </div>
        </div>
    </motion.div>
)

export const MentorshipBento = () => (
    <motion.div
        className="relative overflow-hidden rounded-2xl bg-[#0A0A0A] border border-[#1F1F1F] group hover:border-blue-500/50 transition-all duration-300 flex flex-col md:col-span-1 md:row-span-1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
    >
        <div
            className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
            style={{ background: "linear-gradient(180deg, rgba(59,130,246,0.1), rgba(59,130,246,0.05))" }}
        />

        <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
            style={{ background: "radial-gradient(circle at top right, rgba(59,130,246,0.15), transparent 50%)" }}
        />

        <div className="grow relative z-10 overflow-hidden flex flex-col bg-linear-to-br from-blue-900/6 via-transparent to-blue-600/6 p-5">
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

            <div className="flex-1 flex flex-col items-center justify-center gap-4">
                <LiveMentorship />
            </div>
        </div>
    </motion.div>
)

export const ModernStackBento = () => (
    <motion.div
        className="relative overflow-hidden rounded-2xl bg-[#0A0A0A] border border-[#1F1F1F] group hover:border-blue-500/50 transition-all duration-300 flex flex-col md:col-span-1 md:row-span-1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
    >
        <div
            className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
            style={{ background: "linear-gradient(180deg, rgba(59,130,246,0.1), rgba(59,130,246,0.05))" }}
        />

        <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
            style={{ background: "radial-gradient(circle at top right, rgba(59,130,246,0.15), transparent 50%)" }}
        />

        <div className="grow relative z-10 overflow-hidden flex flex-col bg-linear-to-br from-blue-900/6 via-transparent to-blue-600/6 p-6">
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

            <div className="flex-1 flex items-center justify-center">
                <ModernStack />
            </div>
        </div>
    </motion.div>
)

export const ContributionBento = () => (
    <motion.div
        className="relative overflow-hidden rounded-2xl bg-[#0A0A0A] border border-[#1F1F1F] group hover:border-blue-500/50 transition-all duration-300 flex flex-col md:col-span-1 md:row-span-1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
    >
        <div
            className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
            style={{ background: "linear-gradient(180deg, rgba(59,130,246,0.1), rgba(59,130,246,0.05))" }}
        />

        <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
            style={{ background: "radial-gradient(circle at top right, rgba(59,130,246,0.15), transparent 50%)" }}
        />

        <div className="grow relative z-10 overflow-hidden flex flex-col bg-linear-to-br from-blue-900/6 via-transparent to-blue-600/6 p-5">
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

            <div className="flex-1 flex items-center">
                <SmallContributionPreview />
            </div>
        </div>
    </motion.div>
)
