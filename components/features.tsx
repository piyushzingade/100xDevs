"use client"
import { motion } from "motion/react"
import { TeamBento } from "./features/bento/TeamBento"
import { BackendBento, MentorshipBento, ModernStackBento, ContributionBento } from "./features/bento/SmallBentos"
import { CertificationBento } from "./features/bento/CertificationBento"
import { JoinCardDemo } from "./features/bento/JoinCardDemo"

export const Features = () => {
    return (
        <section className="py-16 px-4 bg-black relative border-b border-[#111]" id="syllabus">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto mb-10 px-2 md:px-4">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                        Why{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-blue-600">100xDevs?</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl font-light border-l-2 border-blue-500 pl-6">
                        Most bootcamps teach you syntax. We teach you engineering. <br />
                        Prepare for a career, not just a job interview.
                    </p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[280px] gap-4 px-2 md:px-4">
                <JoinCardDemo />
                <TeamBento />
                <BackendBento />
                <MentorshipBento />
                <ModernStackBento />
                <ContributionBento />
                <CertificationBento />
            </div>
        </section>
    )
}
