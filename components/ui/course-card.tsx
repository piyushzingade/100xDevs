'use client';
import Image from 'next/image';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Course } from '@/types';

type Props = {
    course: Course;
};

const levelStyles = {
    Beginner: 'bg-green-500/10 text-green-300 border-green-500/20',
    Intermediate: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
    Advanced: 'bg-red-500/10 text-red-300 border-red-500/20',
} as const;

export const CourseCard = ({ course }: Props) => {
    return (
        <article
            className="group relative h-[560px] rounded-2xl overflow-hidden bg-[#070708] border border-white/5 shadow-lg transition-transform duration-500 hover:scale-[1.01]"
            aria-labelledby={`course-${course.id}-title`}
        >
            {/* ---------------------------
          Image layer (always visible)
          - explicit stacking: z-0 for image.
          - subtle gradient on top to keep text readable.
          - image scales on hover, but is visible before hover.
          --------------------------- */}
            <div className="absolute inset-0 z-0">
                {/* The image fills the layer */}
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(min-width: 1024px) 520px, (min-width: 768px) 420px, 100vw"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />

                {/* Subtle gradient overlay above the image to keep bottom text legible */}
                <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-transparent to-black/60" />
            </div>

            {/* Accent layer (subtle decorative gradient) */}
            <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                style={{
                    clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0 100%)',
                    background:
                        'linear-gradient(90deg, rgba(96,165,250,0.10), rgba(139,92,246,0.08))',
                }}
            />

            {/* Content sits above image and overlays */}
            <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                {/* Top Row */}
                <div className="flex justify-between items-start gap-4">
                    <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide border ${levelStyles[course.level]}`}
                        title={course.level}
                    >
                        <Sparkles size={12} />
                        {course.level}
                    </span>

                    <button
                        aria-label={`Open ${course.title}`}
                        className="w-10 h-10 inline-grid place-items-center rounded-full bg-white text-black shadow-md transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
                        type="button"
                    >
                        <ArrowUpRight size={16} strokeWidth={2.2} />
                    </button>
                </div>

                {/* Bottom Content */}
                <div>
                    <h3
                        id={`course-${course.id}-title`}
                        className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight mb-2 transform transition-transform duration-500 group-hover:-translate-y-3"
                    >
                        {course.title}
                    </h3>

                    {/* Description Reveal */}
                    <div className="overflow-hidden max-h-0 group-hover:max-h-[150px] transition-[max-height] duration-700 ease-[cubic-bezier(.2,.9,.2,1)]">
                        <p className="text-sm text-gray-300 leading-relaxed mt-2 mb-4 border-t border-white/10 pt-4">
                            {course.description}
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        {course.tags.map((t) => (
                            <span
                                key={t}
                                className="text-[11px] font-mono font-semibold uppercase px-3 py-1 rounded-md bg-white/10 border border-white/10 text-white/90"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
};
