"use client"
import { motion } from "motion/react"

export const BackendArchitectureDiagram = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center p-2 md:p-4">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 300" preserveAspectRatio="none">
                <defs>
                    <style>{`
                        .dashed-line {
                            stroke-dasharray: 5, 5;
                            stroke: rgba(255, 255, 255, 0.2);
                            fill: none;
                        }
                    `}</style>

                    <linearGradient id="beam-gradient-circuit" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
                        <stop offset="50%" stopColor="rgba(255, 255, 255, 0.8)" />
                        <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                    </linearGradient>
                </defs>

                <path
                    d="M 90 80 L 200 80 L 310 80 L 310 150 L 310 220 L 200 220 L 90 220 L 90 150 L 90 80"
                    className="dashed-line"
                    strokeWidth="1.5"
                />

                <motion.circle r="4" fill="rgba(255, 255, 255, 0.9)" filter="blur(2px)">
                    <animateMotion
                        dur="8s"
                        repeatCount="indefinite"
                        path="M 90 80 L 200 80 L 310 80 L 310 150 L 310 220 L 200 220 L 90 220 L 90 150 L 90 80"
                    />
                </motion.circle>

                <motion.circle r="6" fill="rgba(255, 255, 255, 0.3)" filter="blur(4px)">
                    <animateMotion
                        dur="8s"
                        repeatCount="indefinite"
                        path="M 90 80 L 200 80 L 310 80 L 310 150 L 310 220 L 200 220 L 90 220 L 90 150 L 90 80"
                    />
                </motion.circle>
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 md:gap-10 p-2 md:p-4 pointer-events-auto">
                <div className="flex justify-around w-full px-8 md:px-12 gap-0.5 md:gap-1">
                    <motion.div className="w-10 h-9 md:w-14 md:h-11 rounded-lg bg-blue-500/10 border border-blue-400/40 flex items-center justify-center shadow-lg hover:shadow-blue-400/30 hover:border-blue-400 transition-all">
                        <div className="text-[8px] md:text-[10px] text-blue-300 font-mono font-bold">API</div>
                    </motion.div>
                    <motion.div className="w-10 h-9 md:w-14 md:h-11 rounded-lg bg-purple-500/10 border border-purple-400/40 flex items-center justify-center shadow-lg hover:shadow-purple-400/30 hover:border-purple-400 transition-all">
                        <div className="text-[8px] md:text-[10px] text-purple-300 font-mono font-bold">AUTH</div>
                    </motion.div>
                    <motion.div className="w-10 h-9 md:w-14 md:h-11 rounded-lg bg-yellow-500/10 border border-yellow-400/40 flex items-center justify-center shadow-lg hover:shadow-yellow-400/30 hover:border-yellow-400 transition-all">
                        <div className="text-[8px] md:text-[10px] text-yellow-300 font-mono font-bold">DATA</div>
                    </motion.div>
                </div>

                <motion.div className="w-14 h-9 md:w-18 md:h-11 rounded-lg bg-yellow-500/10 border border-yellow-400/40 flex items-center justify-center shadow-xl hover:shadow-yellow-400/40 hover:border-yellow-400 transition-all px-2 md:px-3">
                    <div className="text-[8px] md:text-[10px] text-yellow-300 font-mono font-bold">QUEUE</div>
                </motion.div>

                <div className="flex justify-around w-full px-8 md:px-12 gap-0.5 md:gap-1">
                    <motion.div className="w-10 h-9 md:w-14 md:h-11 rounded-lg bg-green-500/10 border border-green-400/40 flex items-center justify-center shadow-lg hover:shadow-green-400/30 hover:border-green-400 transition-all">
                        <div className="text-[8px] md:text-[10px] text-green-300 font-mono font-bold">CACHE</div>
                    </motion.div>
                    <motion.div className="w-10 h-9 md:w-14 md:h-11 rounded-lg bg-pink-500/10 border border-pink-400/40 flex items-center justify-center shadow-lg hover:shadow-pink-400/30 hover:border-pink-400 transition-all">
                        <div className="text-[8px] md:text-[10px] text-pink-300 font-mono font-bold">DB</div>
                    </motion.div>
                    <motion.div className="w-10 h-9 md:w-14 md:h-11 rounded-lg bg-orange-500/10 border border-orange-400/40 flex items-center justify-center shadow-lg hover:shadow-orange-400/30 hover:border-orange-400 transition-all">
                        <div className="text-[8px] md:text-[10px] text-orange-300 font-mono font-bold">WORKER</div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
