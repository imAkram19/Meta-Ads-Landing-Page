import React from 'react'
import { motion } from 'framer-motion'
import { Gift, CheckCircle2, ArrowRight } from 'lucide-react'

const ExclusiveBonuses = () => {
    const bonuses = [
        {
            title: "Bonus #1",
            name: "AI Targeting Prompt Pack-2026",
            description: "Used to generate audiences for ANY business",
            worth: "₹1,999",
            icon: Gift
        },
        {
            title: "Bonus #2",
            name: "Meta Ads Budget Planner (Beginner Friendly)",
            description: "Know exactly how much to spend & when to scale.",
            worth: "₹1,499",
            icon: Gift
        },
        {
            title: "Bonus #3",
            name: "High-Converting Ad Copy Examples (AI + Manual)",
            description: "Ready-to-use examples for: Leads, Sales, Traffic",
            worth: "₹2,499",
            icon: Gift
        },
        {
            title: "Bonus #4",
            name: "Beginner Mistakes Checklist (Money Saver)",
            description: "Avoid mistakes that burn ₹5,000–₹10,000.",
            worth: "₹999",
            icon: Gift
        },
        {
            title: "Bonus #5",
            name: "Private Updates & Future Workshop Access",
            description: "Get lifetime updates on algorithm changes and priority access to future live sessions.",
            worth: "₹2,999",
            icon: Gift
        }
    ]

    return (
        <section className="py-24 relative bg-slate-950/50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 font-medium text-sm"
                    >
                        🎁 Exclusive Bonuses (Limited Time)
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        What You Get For <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">FREE</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {bonuses.map((bonus, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all group overflow-hidden ${index === 4 ? 'md:col-span-2' : ''}`}
                        >
                            <div className="absolute top-0 right-0 px-4 py-1 bg-yellow-500/20 text-yellow-300 text-xs font-bold uppercase tracking-wider rounded-bl-xl border-l border-b border-yellow-500/20">
                                {bonus.title}
                            </div>

                            <div className="flex flex-col h-full justify-between gap-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2 pr-24">{bonus.name}</h3>
                                    <p className="text-gray-400 text-sm mb-4">{bonus.description}</p>
                                </div>
                                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                                            <bonus.icon className="w-4 h-4 text-blue-400" />
                                        </div>
                                        <span className="text-sm text-gray-400">Instant Access</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs text-gray-500 uppercase tracking-wider block">Worth</span>
                                        <div className="flex items-center gap-2 justify-end">
                                            <span className="text-sm text-gray-500 line-through">{bonus.worth}</span>
                                            <span className="text-lg font-bold text-green-400">FREE</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    )
}

export default ExclusiveBonuses
