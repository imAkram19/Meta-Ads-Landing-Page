import React from 'react'
import { motion } from 'framer-motion'
import { Zap, CheckCircle2 } from 'lucide-react'

const MetaHero = () => {
    return (
        <section className="min-h-screen relative flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full mix-blend-screen" />
            </div>

            <div className="relative z-10 text-center max-w-5xl mx-auto px-4 w-full">
                {/* Banner Placeholder (1920x1080 Aspect Ratio) */}
                <div className="w-full max-w-4xl mx-auto aspect-video bg-gradient-to-br from-indigo-900/40 to-slate-900/40 backdrop-blur-sm rounded-xl border border-white/10 mb-12 flex flex-col items-center justify-center relative overflow-hidden group shadow-2xl shadow-blue-900/20">
                    {/* Gloss Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50" />

                    <div className="text-center z-10 p-8">
                        <div className="text-6xl mb-4">🖼️</div>
                        <p className="text-blue-200/50 text-xl font-medium tracking-wide">1920 x 1080 Banner Area</p>
                        <p className="text-blue-200/30 text-sm mt-2">Place your main visual/banner here</p>
                    </div>

                    {/* Border Glow */}
                    <div className="absolute inset-0 border border-white/5 rounded-xl group-hover:border-blue-500/30 transition-colors duration-500" />
                </div>

                {/* Headline */}
                <div className="space-y-6 mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-gray-300 text-sm font-medium">Updated for 2026</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight">
                        Meta Ads <br className="block md:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Starter Guide - 2026</span>
                    </h1>

                    <div className="flex flex-col items-center justify-center gap-2">
                        <p className="text-base sm:text-xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 max-w-2xl mx-auto leading-relaxed">
                            Learn How to Run Facebook & Instagram Ads.
                        </p>
                    </div>
                </div>

                {/* Subhead / Pain Points */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 mb-16 text-center md:text-left shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full pointer-events-none" />

                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-8 flex items-center justify-center md:justify-start gap-3">
                        <Zap className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                        <span>If You Currently</span>
                    </h3>

                    <div className="flex flex-col gap-4">
                        {[
                            { text: "Don't understand Ads Manager", color: "from-red-500/20" },
                            { text: "Waste money boosting posts", color: "from-orange-500/20" },
                            { text: "Feel Meta Ads is 'too complicated'", color: "from-purple-500/20" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 + 0.3 }}
                                className="flex items-center justify-center md:justify-start gap-4 text-gray-200 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/20 transition-all hover:bg-white/10"
                            >
                                <div className="min-w-[24px]">
                                    <CheckCircle2 className="w-6 h-6 text-blue-400" />
                                </div>
                                <span className="text-base md:text-lg">{item.text}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 text-center">
                        <p className="text-xl md:text-2xl text-blue-200 font-bold flex flex-col md:flex-row items-center justify-center gap-2">
                            <span>👉</span>
                            <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">This guide is made for you.</span>
                        </p>
                    </div>
                </motion.div>

                {/* Video Placeholder */}
                <div className="w-full max-w-2xl mx-auto aspect-video bg-black/80 rounded-xl border border-white/10 mb-12 flex flex-col items-center justify-center relative shadow-2xl overflow-hidden group">
                    {/* Play Button Visual */}
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                    </div>
                    <p className="text-white/40 mt-4 font-medium">Video Explanation Placeholder</p>
                </div>

                {/* CTA */}
                <div className="flex flex-col items-center gap-4">
                    <button className="group relative px-8 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-xl shadow-blue-900/40 w-full md:w-auto min-w-[300px]">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Get Instant Access @ ₹399
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                        <div className="absolute inset-0 rounded-full bg-white/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                    <p className="text-sm text-gray-500">(₹399 – Limited Time Offer)</p>
                </div>
            </div>
        </section>
    )
}

export default MetaHero
