"use client"
import { motion } from "motion/react"
import { Award, CheckCircle2 } from "lucide-react"
import { CertificateVisual } from "../CertificateVisual"

export const CertificationBento = () => (
    <motion.div
        className="relative overflow-hidden rounded-2xl bg-[#0A0A0A] border border-[#1F1F1F] group hover:border-blue-500/50 transition-all duration-300 flex flex-col md:col-span-2 md:row-span-1"
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

        <div className="grow relative z-10 overflow-hidden flex items-center justify-between bg-linear-to-br from-blue-900/6 via-transparent to-blue-600/6 px-4 md:px-8 lg:px-12 py-6 md:py-8">
            <div className="flex flex-col justify-center space-y-3 md:space-y-6 z-20 max-w-md">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-sm md:text-lg font-bold text-blue-400 mb-2 md:mb-3 uppercase tracking-wider">
                        Certification
                    </div>
                    <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white group-hover:text-blue-300 transition-colors mb-2 md:mb-3">
                        Verified.
                    </div>
                    <div className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors mb-1 md:mb-2">
                        Proof of work that holds value. Verified on-chain.
                    </div>
                    <div className="text-xs md:text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
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

            <motion.div
                className="shrink-0 z-20 hidden lg:block"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <CertificateVisual />
            </motion.div>
        </div>
    </motion.div>
)
