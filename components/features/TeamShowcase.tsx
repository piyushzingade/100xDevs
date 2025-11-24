export const TeamShowcase = () => {
    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            <div className="flex flex-col items-center gap-6 w-full max-w-sm">
                <div className="shrink-0">
                    <img
                        src="/image.png"
                        alt="Harkirat Singh"
                        className="w-56 h-56 object-cover rounded-2xl border-2 border-blue-500/30 shadow-xl"
                    />
                </div>

                <div className="w-full space-y-4 text-center">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                            Harkirat Singh
                        </h3>
                        <p className="text-sm text-blue-400 font-medium">
                            Founder & Lead Instructor
                        </p>
                    </div>

                    <p className="text-sm text-gray-400 leading-relaxed px-2">
                        Ex-Amazon engineer teaching modern web development and system design.
                    </p>

                    <div className="flex flex-wrap gap-2 justify-center px-2">
                        {['Full-Stack', 'DevOps'].map((tag) => (
                            <span
                                key={tag}
                                className="text-[10px] font-mono font-semibold uppercase px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
