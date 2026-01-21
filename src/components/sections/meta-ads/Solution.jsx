import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const Solution = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-green-500 font-bold tracking-wider text-sm uppercase mb-2 block">The Solution</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        ✅ This Guide Solves That
                    </h2>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 max-w-4xl mx-auto shadow-2xl">
                    <div className="text-center mb-10">
                        <p className="text-2xl text-white font-medium mb-4">
                            This is <span className="text-red-400 font-bold">NOT</span> a random course.
                        </p>
                        <p className="text-gray-300 text-lg">
                            This is a simple beginner guide that shows you exactly:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "What to do", desc: "Step-by-step actions" },
                            { title: "Why to do it", desc: "Understand the logic" },
                            { title: "How to do it", desc: "Click-by-click demos" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/5 text-center hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-green-400">
                                    <CheckCircle2 size={24} />
                                </div>
                                <h3 className="text-white font-bold text-xl mb-1">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center border-t border-white/10 pt-8">
                        <p className="text-xl text-blue-200 font-medium italic">
                            "In the exact order beginners need."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Solution
