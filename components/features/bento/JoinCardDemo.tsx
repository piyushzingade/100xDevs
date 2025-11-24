"use client"
import { motion } from "motion/react"
import { ExpandableCards } from "../ExpandableCards"

export const JoinCardDemo = () => (
    <motion.div
        className="relative overflow-hidden rounded-2xl bg-[#0A0A0A] border border-[#1F1F1F] group hover:border-blue-500/50 transition-all duration-300 flex flex-col md:col-span-2 md:row-span-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
    >
        {/* overlays */}
        <div
            className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none rounded-2xl"
            style={{ background: "linear-gradient(180deg, rgba(59,130,246,0.06), rgba(59,130,246,0.03))" }}
        />
        <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
            style={{ background: "radial-gradient(circle at top right, rgba(59,130,246,0.12), transparent 50%)" }}
        />

        {/* content wrapper — use h-full so it fills grid cell but allow child to size naturally */}
        <div className="relative z-10 flex flex-col p-5 md:p-8 h-full min-h-0">
            <motion.div
                className="mb-3 md:mb-5"
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
            >
                <div className="text-base md:text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                    Why Join 100xDevs?
                </div>
                <div className="text-[11px] md:text-xs text-gray-400 group-hover:text-gray-300 transition-colors leading-snug">
                    Transform your career with industry-leading curriculum and real-world experience
                </div>
            </motion.div>

            {/* let ExpandableCards size itself; use flex-1 so it takes remaining space but not force each card huge */}
            <div className="flex-1 min-h-0">
                <ExpandableCards />
            </div>
        </div>
    </motion.div>
)
