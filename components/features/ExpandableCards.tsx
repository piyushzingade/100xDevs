"use client"
import { motion } from "motion/react"
import { useState, useEffect } from "react"

export const ExpandableCards = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
    const [isMobile, setIsMobile] = useState(false)

    const allCards = [
        { title: "Curriculum", description: "Comprehensive courses covering Web Dev, DevOps, and Web3 technologies with hands-on projects" },
        { title: "Community", description: "Join 100,000+ developers learning and building together in our active Discord community" },
        { title: "Assignments", description: "Real-world projects and hands-on coding challenges to build your portfolio" },
        { title: "Projects", description: "Build production-ready applications from scratch with industry best practices" },
    ]

    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 768
            setIsMobile(mobile)
            setExpandedIndex(null) // reset when switching
        }

        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    const cards = isMobile ? allCards.slice(0, 2) : allCards

    return (
        // wrapper: allow vertical scroll if content exceeds the card
        <div className="flex flex-col gap-3 md:gap-3.5 w-full min-h-0">
            <div className="flex-1 flex flex-col gap-3 overflow-y-auto max-h-[520px] md:max-h-none">
                {cards.map((card, index) => {
                    const isExpanded = expandedIndex === index

                    return (
                        <motion.div
                            key={index}
                            layout
                            onClick={() => setExpandedIndex(isExpanded ? null : index)}
                            className={
                                `bg-linear-to-br from-blue-500/25 to-blue-600/30
                 rounded-lg md:rounded-xl
                 px-4 py-3 md:px-6 md:py-5
                 cursor-pointer
                 border border-white/8 hover:border-white/25
                 transition-colors overflow-hidden flex flex-col items-start text-start
                 ${isExpanded ? "shadow-lg" : "shadow-sm"}`
                            }
                            transition={{
                                layout: { duration: 0.35, ease: [0.4, 0, 0.2, 1] }
                            }}
                        >
                            <h3 className="text-sm md:text-lg font-semibold text-white leading-snug">
                                {card.title}
                            </h3>

                            {isExpanded && (
                                <motion.p
                                    initial={{ opacity: 0, y: -6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -6 }}
                                    transition={{ duration: 0.22, ease: "easeOut" }}
                                    className="mt-2 text-xs md:text-sm text-blue-200 leading-relaxed"
                                >
                                    {card.description}
                                </motion.p>
                            )}
                        </motion.div>
                    )
                })}
            </div>

            {/* optional: small helper text on mobile telling user there's more */}
            {isMobile && (
                <div className="text-[11px] text-gray-400 mt-1">
                    Tap a card to expand • Showing {cards.length} of {allCards.length}
                </div>
            )}
        </div>
    )
}
