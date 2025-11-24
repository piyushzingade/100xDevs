"use client"
import { motion } from "motion/react"
import { CheckCircle2 } from "lucide-react"

export const CertificateVisual = () => (
    <div className="relative w-full h-full flex items-center justify-center p-2 md:p-4 group-hover:scale-105 transition-transform duration-500">
        <motion.div
            className="relative w-40 h-28 md:w-56 md:h-40 bg-[#F5F5F5] rounded-sm shadow-2xl flex flex-col p-3 md:p-5 transform -rotate-3 hover:rotate-0 transition-all duration-500 border border-gray-200"
            initial={{ y: 10 }}
            whileInView={{ y: 0 }}
            whileHover={{ scale: 1.05 }}
        >
            <div className="flex justify-between items-start mb-2 md:mb-3">
                <div className="flex gap-1">
                    <motion.div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-300 rounded-full" whileHover={{ scale: 1.2 }} />
                    <motion.div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-300 rounded-full" whileHover={{ scale: 1.2 }} />
                </div>
                <div className="text-[6px] md:text-[8px] font-serif text-gray-400 uppercase tracking-widest">Official Document</div>
            </div>

            <div className="space-y-1 md:space-y-2 grow">
                <div className="text-[8px] md:text-[10px] font-bold text-gray-800 font-serif">Certificate of Excellence</div>
                <div className="w-full h-px bg-gray-200 my-0.5 md:my-1"></div>
                <motion.div className="w-3/4 h-0.5 md:h-1 bg-gray-200 rounded-full" whileHover={{ width: "100%" }} />
                <div className="w-full h-0.5 md:h-1 bg-gray-200 rounded-full"></div>
                <div className="w-1/2 h-0.5 md:h-1 bg-gray-200 rounded-full"></div>
            </div>

            <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4">
                <div className="relative w-7 h-7 md:w-10 md:h-10">
                    <div className="absolute inset-0 bg-blue-600 rounded-full opacity-20 animate-ping"></div>
                    <motion.div
                        className="absolute inset-0 bg-blue-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white"
                        whileHover={{ scale: 1.1 }}
                    >
                        <CheckCircle2 className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    </div>
)
