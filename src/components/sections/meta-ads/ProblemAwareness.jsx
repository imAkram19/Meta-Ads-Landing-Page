import React from 'react'
import { X } from 'lucide-react'

const ProblemAwareness = () => {
    const problems = [
        {
            title: "Ads Manager looks confusing",
            description: "Too many buttons, settings, and options that make no sense to a beginner."
        },
        {
            title: "No clear steps to follow",
            description: "You're just guessing and clicking random things hoping for sales."
        },
        {
            title: "Don't know budget",
            description: "Scared to spend money because you don't know how much is 'enough'."
        },
        {
            title: "Copying random videos",
            description: "Trying strategies from 5 different YouTubers that contradict each other."
        },
        {
            title: "Unknown failures",
            description: "Ads fail and you have absolutely no idea what went wrong."
        }
    ]

    return (
        <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Why Most Beginners <span className="text-red-500">Fail</span> at Meta Ads
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Result: Money wasted, no confidence, no results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {problems.map((problem, idx) => (
                        <div key={idx} className="bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-white/10 transition-all hover:scale-[1.02] group flex items-start gap-4">
                            <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-red-500/20 transition-colors">
                                <X className="text-red-500 w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{problem.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {problem.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProblemAwareness
