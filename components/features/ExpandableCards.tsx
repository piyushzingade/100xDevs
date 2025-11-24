"use client"
import { motion } from "motion/react"
import { useState } from "react"

export const ExpandableCards = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    const cards = [
        {
            title: "Curriculum",
            description: "Comprehensive courses covering Web Dev, DevOps, and Web3 technologies with hands-on projects",
        },
        {
            title: "Community",
            description: "Join 100,000+ developers learning and building together in our active Discord community",
        },
        {
            title: "Assignments",
            description: "Real-world projects and hands-on coding challenges to build your portfolio",
        },
        {
            title: "Projects",
            description: "Build production-ready applications from scratch with industry best practices",
        },
    ]

    return (
        <div className="flex-1 flex flex-col gap-2 md:gap-2.5">
            {cards.map((card, index) => {
                const isExpanded = expandedIndex === index

                return (
                    <motion.div
                        key={index}
                        layout
                        onClick={() => setExpandedIndex(isExpanded ? null : index)}
                        className="bg-linear-to-br from-blue-500/40 to-blue-600/60 hover:from-blue-500/70 hover:to-blue-600/70 rounded-lg md:rounded-xl p-4 md:p-6 cursor-pointer border border-white/10 hover:border-white/30 transition-colors overflow-hidden flex flex-col items-start justify-center text-start"
                        animate={{
                            flex: isExpanded ? 2 : 1,
                        }}
                        transition={{
                            layout: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                            flex: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
                        }}
                    >
                        <h3 className="text-base md:text-xl font-bold text-white">
                            {card.title}
                        </h3>
                        {isExpanded && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="text-sm md:text-base textblue-200 leading-relaxed mt-2"
                            >
                                {card.description}
                            </motion.p>
                        )}
                    </motion.div>
                )
            })}
        </div>
    )
}
