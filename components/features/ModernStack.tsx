"use client"
import { motion } from "motion/react"

export const ModernStack = () => {
    const techStack = [
        { icon: "/nextjs-icon.svg", label: "Next.js" },
        { icon: "/docker.svg", label: "Docker" },
        { icon: "/kubernetes.svg", label: "Kubernetes" },
        { icon: "/solana.svg", label: "Solana" },
        { icon: "/aws.svg", label: "AWS" },
        { icon: "/typescript.svg", label: "TypeScript" },
        { icon: "/tailwindcss.svg", label: "TailwindCSS" },
        { icon: "/redux.svg", label: "Redux" },
    ]

    return (
        <div className="grid grid-cols-4 gap-3 w-full max-w-[360px]">
            {techStack.map((tech, idx) => (
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
    )
}
