"use client"
import { motion } from "motion/react"
import { ExpandableCards } from "../ExpandableCards"


export const JoinCardDemo = () => (
    <motion.div
        className="relative overflow-hidden rounded-2xl bg-[#0A0A0A] border border-[#1F1F1F] group hover:border-blue-500/50 transition-all duration-300 flex flex-col md:col-span-2 md:row-span-2"
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

        <div className="grow relative z-10 overflow-hidden flex flex-col bg-linear-to-br from-blue-900/6 via-transparent to-blue-600/6 p-4 md:p-6">
            <motion.div
                className="mb-4 md:mb-6"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <div className="text-base md:text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                    Why Join 100xDevs?
                </div>
                <div className="text-[10px] md:text-xs text-gray-400 group-hover:text-gray-300 transition-colors leading-snug">
                    Transform your career with industry-leading curriculum and real-world experience
                </div>
            </motion.div>

            <ExpandableCards />
        </div>
    </motion.div>
)
