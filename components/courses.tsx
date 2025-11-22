
import { Course } from '@/types';
import { CourseCard } from './ui/course-card';

const courses: Course[] = [
    {
        id: '1',
        title: 'Full Stack Cohort 3.0',
        description:
            'From zero to hundred. The only course you need to crack remote jobs and FAANG. Covers MERN, DevOps, and System Design in extreme depth.',
        tags: ['MERN', 'DevOps', 'System Design'],
        level: 'Beginner',
        image:
            '/image.png',
    },
    {
        id: '2',
        title: 'Web3 & Blockchain',
        description:
            'Understand the primitives. Build your own DEX, Wallet, and NFT marketplace from scratch using Rust and Solana.',
        tags: ['Solana', 'Rust', 'Ethereum'],
        level: 'Advanced',
        image:
            '/image.png',
    },
    {
        id: '3',
        title: 'DevOps Masterclass',
        description:
            'Stop deploying manually. Learn Kubernetes, Docker, CI/CD pipelines, and Terraform to scale applications like a pro.',
        tags: ['AWS', 'K8s', 'Terraform'],
        level: 'Intermediate',
        image:
            '/image.png',
    },
];
export const Courses = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
            <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
                        Courses we <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-blue-600">actually</span>{' '}
                        offer.
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl">
                        No fluff. No "Hello World" tutorials. Real engineering for scalable systems.
                    </p>
                </div>

                <div className="hidden md:flex items-center gap-3 pb-2">
                    <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                    <span className="text-xs font-mono text-gray-400 uppercase">Live batches</span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course: Course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};
