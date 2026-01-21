import React from 'react'
import { Check } from 'lucide-react'

const Curriculum = () => {
    const learnings = [
        "How Meta Ads actually work (simple language)",
        "How to set up your first campaign",
        "Campaign, Ad Set & Ad explained clearly",
        "Budget basics (how much is enough?)",
        "Targeting basics for beginners",
        "Common beginner mistakes to avoid",
        "How to know if your ad is working or not"
    ]

    return (
        <section className="py-24 bg-black relative">
            {/* Decor */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-6">
                            📘 What You’ll <span className="text-blue-500">Learn</span> Inside the Guide
                        </h2>
                        <p className="text-xl text-gray-400 mb-8">
                            No heavy theory. No advanced jargon. Only practical beginner steps.
                        </p>

                        <div className="space-y-4">
                            {learnings.map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                        <Check size={14} className="text-blue-400" />
                                    </div>
                                    <p className="text-gray-200 text-lg">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual representation of the guide content */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-3xl rotate-6 opacity-30 blur-lg transform scale-95" />
                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-2xl p-8 relative shadow-2xl">
                            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <span className="text-xs text-gray-500 font-mono ml-4">guide_preview.pdf</span>
                            </div>

                            {/* Mock Content */}
                            <div className="space-y-4 animate-pulse">
                                <div className="h-4 bg-white/10 rounded w-3/4" />
                                <div className="h-4 bg-white/10 rounded w-full" />
                                <div className="h-4 bg-white/10 rounded w-5/6" />
                                <div className="h-32 bg-blue-900/10 rounded-xl border border-blue-500/10 mt-6 flex items-center justify-center">
                                    <span className="text-blue-500/30 text-sm">Campaign Structure Diagram</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Curriculum
