import React from 'react';
import { Heart, MessageCircle, Repeat, Share } from 'lucide-react';
import { Testimonial } from '../../types';

interface TweetCardProps {
    tweet: Testimonial;
}

export const TweetCard = ({ tweet }: TweetCardProps) => {
    // Generate consistent fake metrics based on name length to avoid hydration mismatches, or just static for demo
    const likes = Math.floor(Math.random() * 500) + 100;
    const retweets = Math.floor(likes * 0.15);

    return (
        <div className="bg-black border border-[#2F3336] rounded-xl p-4 mb-4 hover:bg-[#080808] transition-colors max-w-md w-full mx-auto break-inside-avoid">
            {/* Header */}
            <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-tr from-slate-700 to-slate-600 flex items-center justify-center text-sm font-bold text-white overflow-hidden">
                        {tweet.avatarUrl ? (
                            <img src={tweet.avatarUrl} alt={tweet.name} className="w-full h-full object-cover" />
                        ) : (
                            tweet.name[0]
                        )}
                    </div>
                    <div className="flex flex-col leading-tight">
                        <div className="flex items-center gap-1">
                            <span className="font-bold text-[#E7E9EA] text-[15px]">{tweet.name}</span>
                            <svg viewBox="0 0 22 22" aria-label="Verified Account" role="img" className="w-4 h-4 text-[#1D9BF0] fill-current">
                                <g>
                                    <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.687.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.215 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
                                </g>
                            </svg>
                        </div>
                        <span className="text-[#71767B] text-[14px]">@{tweet.name.replace(' ', '').toLowerCase()}{Math.floor(Math.random() * 99)}</span>
                    </div>
                </div>
                <div className="text-[#71767B]">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                </div>
            </div>

            {/* Content */}
            <div className="mb-3">
                <p className="text-[#E7E9EA] text-[15px] leading-normal whitespace-pre-wrap">
                    {tweet.content}
                </p>
            </div>

            {/* Date */}
            <div className="text-[#71767B] text-[14px] mb-3 hover:underline cursor-pointer">
                {new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })} · {new Date().toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' })} · <span className="text-white font-bold">12.4K</span> Views
            </div>

            <div className="h-px bg-[#2F3336] w-full mb-3"></div>

            {/* Metrics */}
            <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2 cursor-pointer">
                    <div className="p-2 bg-[#1D9BF0]/10 text-[#1D9BF0] rounded-full transition-colors">
                        <MessageCircle size={18} />
                    </div>
                    <span className="text-[#1D9BF0]">{Math.floor(likes / 10)}</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <div className="p-2 bg-[#00BA7C]/10 text-[#00BA7C] rounded-full transition-colors">
                        <Repeat size={18} />
                    </div>
                    <span className="text-[#00BA7C]">{retweets}</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <div className="p-2 bg-[#F91880]/10 text-[#F91880] rounded-full transition-colors">
                        <Heart size={18} />
                    </div>
                    <span className="text-[#F91880]">{likes}</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <div className="p-2 bg-[#1D9BF0]/10 text-[#1D9BF0] rounded-full transition-colors">
                        <Share size={18} />
                    </div>
                </div>
            </div>
        </div>
    );
};