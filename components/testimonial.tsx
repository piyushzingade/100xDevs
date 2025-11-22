
import { Testimonial } from '../types';
import { TweetCard } from './ui/tweet-card';


const testimonials: Testimonial[] = [
    { id: '1', name: 'Aditya R.', role: 'SDE-1', company: 'Google', content: 'I thought I knew React. Then I took this course.\n\nThe depth is insane. We built a custom reconciler in week 3. 🤯 #100xDevs' },
    { id: '2', name: 'Sarah K.', role: 'Frontend Lead', company: 'Cred', content: 'Harkirat breaks down complex distributed systems concepts like no one else.\n\nFinally understand Kafka and gRPC properly. 🚀' },
    { id: '3', name: 'Rahul M.', role: 'Full Stack', company: 'Paytm', content: 'Got my first remote job paying $40k/yr after Cohort 1. Best investment ever. \n\nROI is literally 100x. 💸' },
    { id: '4', name: 'John D.', role: 'Backend Dev', company: 'Amazon', content: 'The open source cohort changed my career trajectory completely. \n\nMerged my first PR to Cal.com today! 🔥' },
    { id: '5', name: 'Priya S.', role: 'Student', company: 'IIT Bombay', content: 'College taught me theory. 100xDevs taught me engineering.\n\nIf you are on the fence, just join. You won\'t regret it.' },
    { id: '6', name: 'Mike T.', role: 'DevOps', company: 'Netflix', content: 'Finally understand K8s and Docker in depth. \n\nDeployed my own cluster on bare metal yesterday. Feels like a superpower.' },
    { id: '7', name: 'Alex B.', role: 'Founder', company: 'Stealth Startup', content: 'Built my MVP in 2 weeks using the stack taught here. \n\nVCs are impressed with the architecture. Thanks @harkirat!' },
    { id: '8', name: 'Neha G.', role: 'SDE-2', company: 'Uber', content: 'The system design lectures are gold dust. Better than any YouTube channel.\n\nCracked L4 at Uber thanks to this. 🚗' },
    { id: '9', name: 'Vikram S.', role: 'Engineer', company: 'Zomato', content: 'From a service-based company to a product-based unicorn.\n\nThank you Harkirat! The Docker week was a game changer.' },
];

const MarqueeColumn = ({ items, direction = 'up', speed = '40s', className }: { items: Testimonial[]; direction?: 'up' | 'down'; speed?: string; className?: string }) => (
    <div className={`relative h-[800px] overflow-hidden w-full group ${className}`}>
        <div
            className={`absolute w-full ${direction === 'up' ? 'animate-scroll-up' : 'animate-scroll-down'}`}
            style={{ animationDuration: speed }}
        >
            {/* Triple the items to ensure smooth infinite scroll without gaps */}
            {[...items, ...items, ...items].map((t, i) => (
                <TweetCard key={`${t.id}-${i}`} tweet={t} />
            ))}
        </div>
        {/* Gradients to fade in/out */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-linear-to-b from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
    </div>
);

export const Testimonials = () => {
    const col1 = testimonials.slice(0, 3);
    const col2 = testimonials.slice(3, 6);
    const col3 = testimonials.slice(6, 9);

    return (
        <section className="py-32 w-full bg-black overflow-hidden relative">
            {/* Background noise */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        Don't trust <span className="text-gray-600 line-through decoration-red-500">us</span>.
                    </h2>
                    <p className="text-xl text-gray-400">
                        Trust the GitHub commits. Trust the Offer Letters. Trust the Community.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    <MarqueeColumn items={col1} direction="up" speed="50s" />
                    <MarqueeColumn items={col2} direction="down" speed="60s" className="hidden md:block" />
                    <MarqueeColumn items={col3} direction="up" speed="55s" className="hidden lg:block" />
                </div>
            </div>
        </section>
    );
};