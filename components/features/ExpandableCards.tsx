"use client"
import { motion } from "motion/react"
import { useState } from "react"

export const ExpandableCards = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    const cards = [
        { title: "Curriculum", description: "Comprehensive courses covering Web Dev, DevOps, and Web3 technologies with hands-on projects" },
        { title: "Community", description: "Join 100,000+ developers learning and building together in our active Discord community" },
        { title: "Assignments", description: "Real-world projects and hands-on coding challenges to build your portfolio" },
        { title: "Projects", description: "Build production-ready applications from scratch with industry best practices" },
    ]

    return (
        <div className="flex flex-col gap-3 w-full min-h-0 h-full">
            <div className="flex-1 flex flex-col gap-2 md:gap-2.5 overflow-y-auto">
                {cards.map((card, index) => {
                    const isExpanded = expandedIndex === index
                    const visibilityClass = index >= 2 ? "hidden md:flex" : "flex"

                    return (
                        <motion.div
                            key={index}
                            layout
                            onClick={() => setExpandedIndex(isExpanded ? null : index)}
                            className={
                                `bg-linear-to-br from-blue-500/40 to-blue-600/40 hover:from-blue-500/70 hover:to-blue-600/70
                                 rounded-lg md:rounded-xl
                                 px-4 py-3 md:px-5 md:py-4
                                 cursor-pointer
                                 border border-white/10 hover:border-white/25
                                 transition-colors overflow-hidden flex-col items-start text-center justify-center
                                 shrink-0
                                 ${isExpanded ? "shadow-lg" : "shadow-sm"}
                                 ${visibilityClass}`
                            }
                            initial={false}
                            animate={{
                                flex: isExpanded ? 2 : 1,
                                minHeight: isExpanded ? "auto" : "auto"
                            }}
                            transition={{
                                layout: { duration: 0.3, ease: "easeOut" },
                                flex: { duration: 0.3, ease: "easeOut" }
                            }}
                        >
                            <h3 className="text-sm md:text-base font-semibold text-white leading-snug">
                                {card.title}
                            </h3>

                            {isExpanded && (
                                <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="mt-2 text-xs text-blue-200 leading-relaxed"
                                >
                                    {card.description}
                                </motion.p>
                            )}
                        </motion.div>
                    )
                })}
            </div>

            {/* Mobile indicator that there are more cards (optional, but helpful since we hide them) */}
            <div className="md:hidden text-[10px] text-gray-500 text-center pt-1">
                + more features inside
            </div>
        </div>
    )
}
