import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Target, Sparkles } from 'lucide-react'

const Solution = () => {
    return (
        <section className="pt-4 md:pt-24 pb-12 md:pb-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[5.5vw] sm:text-2xl md:text-5xl font-bold text-white mb-6 flex items-center justify-center gap-1.5 md:gap-3 whitespace-nowrap"
                    >
                        <Target className="text-blue-400 w-5 h-5 md:w-12 md:h-12 shrink-0" />
                        <span>This is <span className="text-blue-400">NOT</span> a random course</span>
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 max-w-4xl mx-auto shadow-2xl relative"
                >
                    {/* Top Highlight Border */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "What to do", desc: "Step-by-step actions" },
                            { title: "Why to do it", desc: "Understand the logic" },
                            { title: "How to do it", desc: "Click-by-click demos" }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white/5 rounded-xl p-6 border border-white/5 text-center hover:bg-white/10 transition-colors"
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 * i + 0.3 }}
                                    className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-green-400"
                                >
                                    <CheckCircle2 size={24} />
                                </motion.div>
                                <h3 className="text-white font-bold text-xl mb-1">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="mt-10 text-center border-t border-white/10 pt-8"
                    >
                        <p className="text-xl text-blue-200 font-medium italic">
                            "In the exact order beginners need."
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Solution
