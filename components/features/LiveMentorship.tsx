"use client"
import { motion } from "motion/react"
import { Users } from "lucide-react"

export const LiveMentorship = () => (
    <>
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

                <motion.div
                    className="absolute -top-1 -right-1 bg-linear-to-r from-red-500 to-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-lg"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                    LIVE
                </motion.div>
            </motion.div>
        </motion.div>

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
    </>
)
