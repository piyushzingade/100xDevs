"use client"
import { motion } from "motion/react"
import { Github, GitBranch } from "lucide-react"

export const SmallContributionPreview = () => (
    <div className="flex flex-col gap-4 w-full h-full">
        <motion.div
            className="relative w-full bg-linear-to-br from-[#0d1117] via-[#010409] to-[#0d1117] border border-[#30363d] rounded-xl p-3.5 overflow-hidden group/card"
            transition={{ duration: 0.3 }}
        >
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

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
                    <div className="text-left">
                        <div className="text-sm font-bold text-white group-hover/card:text-blue-300 transition-colors">
                            100xDevs
                        </div>
                    </div>
                </div>

                <motion.div className="px-2 py-0.5  bg-linear-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 rounded-full backdrop-blur-sm">
                    <span className="text-[8px] font-semibold text-emerald-300 uppercase tracking-wider">
                        Open Source
                    </span>
                </motion.div>
            </div>
        </motion.div>

        <div className="flex gap-2 w-full">
            <motion.div
                className="flex-1 relative bg-linear-to-br from-[#161b22] to-[#0d1117] rounded-lg p-2.5 border border-[#30363d] overflow-hidden group/stat"
                transition={{ duration: 0.2 }}
            >
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

            <motion.div
                className="flex-1 relative bg-linear-to-br from-[#161b22] to-[#0d1117] rounded-lg p-2.5 border border-[#30363d] overflow-hidden group/contrib"
                transition={{ duration: 0.2 }}
            >
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
