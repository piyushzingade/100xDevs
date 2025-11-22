"use client";
import { Users, Briefcase, CheckCircle2, GitBranch, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { NextJsIcon, DockerIcon, K8sIcon, SolanaIcon, KafkaIcon, CalComLogo } from '@/components/ui/icons';

interface FeatureProps {
    children: React.ReactNode;
    className?: string;
    title: string;
    description: string;
    colSpan?: string;
    rowSpan?: string;
}

/* Contribution graph unchanged except small color tweak */
const ContributionGraph = () => (
    <div className="grid grid-cols-12 gap-1 opacity-80 w-full">
        {Array.from({ length: 60 }).map((_, i) => (
            <motion.div
                key={i}
                className={`w-full pt-[100%] rounded-[1px] ${Math.random() > 0.8 ? 'bg-[#39d353]' : Math.random() > 0.5 ? 'bg-[#26a641]' : Math.random() > 0.3 ? 'bg-[#0e4429]' : 'bg-[#161b22]'
                    }`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.005 }}
            />
        ))}
    </div>
);


const MicroservicesDiagram = () => {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-4 min-h-[200px]">
            {/* Nodes */}
            <div className="relative z-10 flex flex-col items-center gap-10 w-full">
                {/* Top: Client */}
                <div className="w-14 h-14 rounded-xl bg-[#0d1117] border border-gray-700 flex items-center justify-center z-20 shadow-2xl">
                    <Users size={24} className="text-blue-400" />
                </div>

                {/* Middle: Kafka/LB */}
                <div className="w-40 h-12 rounded-lg bg-[#161b22] border border-blue-500/30 flex items-center justify-center gap-2 z-20 backdrop-blur-md shadow-[0_0_30px_rgba(96,165,250,0.06)]">
                    <KafkaIcon className="w-4 h-4 text-blue-400" />
                    <span className="text-[10px] text-blue-200 font-mono">Event Bus</span>
                </div>

                {/* Bottom: Services */}
                <div className="flex gap-3 w-full justify-center">
                    <div className="w-20 h-20 rounded-lg bg-[#0d1117] border border-gray-800 flex flex-col items-center justify-center gap-1 z-20 shadow-xl group">
                        <div className="text-[9px] text-gray-400 uppercase tracking-wider">Auth</div>
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                    <div className="w-20 h-20 rounded-lg bg-[#0d1117] border border-gray-800 flex flex-col items-center justify-center gap-1 z-20 shadow-xl group">
                        <div className="text-[9px] text-gray-400 uppercase tracking-wider">Payments</div>
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-75"></div>
                    </div>
                    <div className="w-20 h-20 rounded-lg bg-[#0d1117] border border-gray-800 flex flex-col items-center justify-center gap-1 z-20 shadow-xl group">
                        <div className="text-[9px] text-gray-400 uppercase tracking-wider">Email</div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse delay-150"></div>
                    </div>
                </div>
            </div>

            {/* Connecting Lines & Moving Packets */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                {/* Line: Client -> Bus */}
                <path d="M 50% 18% L 50% 38%" className="stroke-gray-800" strokeWidth="2" strokeDasharray="4 4" />

                {/* Lines: Bus -> Services */}
                <path d="M 50% 55% L 30% 75%" className="stroke-gray-800" strokeWidth="1" />
                <path d="M 50% 55% L 50% 75%" className="stroke-gray-800" strokeWidth="1" />
                <path d="M 50% 55% L 70% 75%" className="stroke-gray-800" strokeWidth="1" />

                {/* Animated Packets */}
                <motion.circle r="3" fill="#60A5FA" opacity="0.8">
                    <animateMotion dur="1.5s" repeatCount="indefinite" path="M 0,-90 L 0,-40" keyPoints="0;1" keyTimes="0;1" calcMode="linear" />
                </motion.circle>
                <motion.circle r="2" fill="#60A5FA" opacity="0.8">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M 0,10 L -60,60" keyPoints="0;1" keyTimes="0;1" calcMode="linear" />
                </motion.circle>
                <motion.circle r="2" fill="#60A5FA" opacity="0.8">
                    <animateMotion dur="2.2s" repeatCount="indefinite" path="M 0,10 L 60,60" keyPoints="0;1" keyTimes="0;1" calcMode="linear" />
                </motion.circle>
            </svg>
        </div>
    )
}

const CertificateVisual = () => (
    <div className="relative w-full h-full flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-500">
        <motion.div
            className="relative w-56 h-40 bg-[#F5F5F5] rounded-sm shadow-2xl flex flex-col p-5 transform -rotate-3 hover:rotate-0 transition-all duration-500 border border-gray-200"
            initial={{ y: 10 }}
            whileInView={{ y: 0 }}
        >
            {/* Header */}
            <div className="flex justify-between items-start mb-3">
                <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
                <div className="text-[8px] font-serif text-gray-400 uppercase tracking-widest">Official Document</div>
            </div>

            {/* Content */}
            <div className="space-y-2 grow">
                <div className="text-[10px] font-bold text-gray-800 font-serif">Certificate of Excellence</div>
                <div className="w-full h-px bg-gray-200 my-1"></div>
                <div className="w-3/4 h-1 bg-gray-200 rounded-full"></div>
                <div className="w-full h-1 bg-gray-200 rounded-full"></div>
                <div className="w-1/2 h-1 bg-gray-200 rounded-full"></div>
            </div>

            {/* Seal */}
            <div className="absolute bottom-4 right-4">
                <div className="relative w-10 h-10">
                    <div className="absolute inset-0 bg-blue-600 rounded-full opacity-20 animate-ping"></div>
                    <div className="absolute inset-0 bg-blue-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
);

/* BentoItem: removed the footer area and instead render title/description as an overlay
   Also swapped purple -> blue accents in the content background.
*/
const BentoItem = ({ children, className, title, description, colSpan = "", rowSpan = "" }: FeatureProps) => (
    <motion.div
        className={`relative overflow-hidden rounded-2xl bg-[#0A0A0A] border border-[#1F1F1F] group hover:border-gray-700 transition-all duration-300 flex flex-col ${colSpan} ${rowSpan} ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
    >
        {/* Hover linear (subtle blue) */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(59,130,246,0.04), rgba(59,130,246,0.06))' }} />

        {/* Content Area (visual space) */}
        <div className="grow relative z-10 overflow-hidden flex items-center justify-center bg-linear-to-br from-blue-900/6 via-transparent to-blue-600/6 p-4">
            {/* children should contain the visual block */}
            {children}

            {/* Title + description overlay — placed bottom-left inside the visual area */}
            <div className="absolute left-6 bottom-6 bg-black/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/6 max-w-[70%]">
                <div className="text-lg font-bold text-white mb-1">{title}</div>
                <div className="text-xs text-gray-400 leading-snug">{description}</div>
            </div>
        </div>

        {/* removed the separate Text Area/footer to keep grid compact per request */}
    </motion.div>
);

export const Features = () => {
    return (
        <section className="py-32 px-4 bg-brand-black relative border-b border-[#111]" id="syllabus">
            <div className="max-w-7xl mx-auto mb-16 px-2 md:px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                        Why <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-blue-600">100xDevs?</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl font-light border-l-2 border-blue-500 pl-6">
                        Most bootcamps teach you syntax. We teach you engineering. <br />
                        Prepare for a career, not just a job interview.
                    </p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[280px] gap-4 px-2 md:px-4">

                {/* 1. Open Source (2x2) */}
                <BentoItem
                    colSpan="md:col-span-2"
                    rowSpan="md:row-span-2"
                    title="Open Source Architect"
                    description="Contribute to real projects. We've merged PRs into top repositories."
                >
                    <div className="relative w-full h-full flex flex-col p-6 justify-between">
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex flex-wrap gap-3">
                                {/* CalComLogo fix: ensure visible by giving color & size */}
                                <div className="bg-white/5 px-3 py-1.5 rounded border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                                    <CalComLogo className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className="flex gap-2 text-gray-500">
                                <Github className="w-6 h-6 hover:text-white transition-colors" />
                                <GitBranch className="w-6 h-6 hover:text-[#F05032] transition-colors" />
                            </div>
                        </div>

                        <div className="bg-[#010409] border border-[#30363d] rounded-xl p-4 shadow-2xl w-full group-hover:scale-[1.02] transition-transform duration-500">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                </div>
                                <span className="text-[10px] font-mono text-gray-400">contributions</span>
                            </div>
                            <ContributionGraph />
                        </div>
                    </div>
                </BentoItem>

                {/* 2. System Design (1x2) */}
                <BentoItem
                    colSpan="md:col-span-1"
                    rowSpan="md:row-span-2"
                    title="System Design"
                    description="Architect scalable systems. Decoded."
                >
                    <MicroservicesDiagram />
                </BentoItem>

                {/* 3. Mentorship (1x1) - Top Right */}
                <BentoItem
                    colSpan="md:col-span-1"
                    rowSpan="md:row-span-1"
                    title="Live Mentorship"
                    description="Weekly live Q&As with Harkirat."
                >
                    <div className="relative flex items-center justify-center w-full h-full">
                        <div className="w-24 h-24 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center group-hover:bg-[#222] transition-colors relative">
                            <Users className="w-10 h-10 text-gray-400 group-hover:text-white transition-colors" />
                            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-bounce">
                                LIVE
                            </div>
                        </div>
                    </div>
                </BentoItem>

                {/* 4. Modern Stack (1x1) - Below Mentorship */}
                <BentoItem
                    colSpan="md:col-span-1"
                    rowSpan="md:row-span-1"
                    title="Modern Stack"
                    description="NextJS, Docker, K8s, Solana."
                >
                    <div className="grid grid-cols-2 gap-4 w-full h-full content-center justify-items-center p-6 opacity-60 group-hover:opacity-100 transition-opacity">
                        <NextJsIcon className="w-10 h-10 hover:scale-110 transition-transform" />
                        <DockerIcon className="w-10 h-10 hover:scale-110 transition-transform" />
                        <K8sIcon className="w-10 h-10 hover:scale-110 transition-transform" />
                        <SolanaIcon className="w-10 h-10 hover:scale-110 transition-transform" />
                    </div>
                </BentoItem>

                {/* 5. Certification (2x1) - Bottom Left */}
                <BentoItem
                    colSpan="md:col-span-2"
                    rowSpan="md:row-span-1"
                    title="Certification"
                    description="Proof of work that holds value. Verified on-chain."
                >
                    <div className="w-full h-full flex items-center justify-around px-10">
                        <div className="text-left">
                            <div className="text-2xl font-black text-white mb-1">Verified.</div>
                            <div className="text-sm text-gray-500">Shareable on LinkedIn & Twitter.</div>
                        </div>
                        <div className="w-48 h-32">
                            <CertificateVisual />
                        </div>
                    </div>
                </BentoItem>

                {/* 6. Career (2x1) - Bottom Right */}
                <BentoItem
                    colSpan="md:col-span-2"
                    rowSpan="md:row-span-1"
                    title="Career Prep"
                    description="Resume reviews, mock interviews, and referrals."
                >
                    <div className="w-full h-full flex items-center justify-center gap-8 opacity-50 group-hover:opacity-100 transition-opacity">
                        <div className="flex flex-col items-center gap-2">
                            <Briefcase className="w-8 h-8 text-blue-500" />
                            <span className="text-xs font-mono text-gray-300">Jobs</span>
                        </div>
                        <div className="h-12 w-px bg-gray-700"></div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="text-xl font-bold text-white">$100k+</div>
                            <span className="text-xs font-mono text-gray-300">Avg Salary</span>
                        </div>
                        <div className="h-12 w-px bg-gray-700"></div>
                        <div className="flex flex-col items-center gap-2">
                            <CheckCircle2 className="w-8 h-8 text-green-500" />
                            <span className="text-xs font-mono text-gray-300">Hired</span>
                        </div>
                    </div>
                </BentoItem>

            </div>
        </section>
    );
};
