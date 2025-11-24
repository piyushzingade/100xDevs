"use client"
import { motion } from "motion/react"
import { CheckCircle2 } from "lucide-react"

export const CertificateVisual = () => (
    <div className="relative w-full h-full flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-500">
        <motion.div
            className="relative w-56 h-40 bg-[#F5F5F5] rounded-sm shadow-2xl flex flex-col p-5 transform -rotate-3 hover:rotate-0 transition-all duration-500 border border-gray-200"
            initial={{ y: 10 }}
            whileInView={{ y: 0 }}
            whileHover={{ scale: 1.05 }}
        >
            <div className="flex justify-between items-start mb-3">
                <div className="flex gap-1">
                    <motion.div className="w-2 h-2 bg-gray-300 rounded-full" whileHover={{ scale: 1.2 }} />
                    <motion.div className="w-2 h-2 bg-gray-300 rounded-full" whileHover={{ scale: 1.2 }} />
                </div>
                <div className="text-[8px] font-serif text-gray-400 uppercase tracking-widest">Official Document</div>
            </div>

            <div className="space-y-2 grow">
                <div className="text-[10px] font-bold text-gray-800 font-serif">Certificate of Excellence</div>
                <div className="w-full h-px bg-gray-200 my-1"></div>
                <motion.div className="w-3/4 h-1 bg-gray-200 rounded-full" whileHover={{ width: "100%" }} />
                <div className="w-full h-1 bg-gray-200 rounded-full"></div>
                <div className="w-1/2 h-1 bg-gray-200 rounded-full"></div>
            </div>

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
