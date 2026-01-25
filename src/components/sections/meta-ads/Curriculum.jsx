import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const Curriculum = () => {
    const learnings = [
        "How Meta Ads actually work (simple language)",
        "How to set up your first campaign",
        "Campaign, Ad Set & Ad explained clearly",
        "Budget basics how much is enough?",
        "Targeting basics for beginners",
        "Common beginner mistakes to avoid",
        "How to know if your ad is working or not"
    ]

    return (
        <section className="pt-4 md:pt-16 pb-8 md:pb-24 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        What You’ll <span className="text-blue-500">Learn</span> <br className="md:hidden" /> Inside the Guide
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        No heavy theory. No advanced jargon. Only practical beginner steps.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden group"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                        {learnings.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + (i * 0.05) }}
                                className="flex items-start gap-3"
                            >
                                <div className="mt-1 flex-shrink-0">
                                    <CheckCircle2 size={20} className="text-blue-400" />
                                </div>
                                <p className="text-gray-200 text-base md:text-lg leading-snug">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Curriculum
