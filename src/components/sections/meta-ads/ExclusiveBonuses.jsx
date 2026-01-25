import React from 'react'
import { motion } from 'framer-motion'
import { Gift, CheckCircle2, ArrowRight } from 'lucide-react'

const AnimatedPrice = ({ worth }) => {
    return (
        <div className="flex items-center justify-end min-h-[40px] py-1 px-1 overflow-hidden">
            <div className="relative inline-flex items-center">
                <motion.div
                    initial={{ x: 50, opacity: 1 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.8, duration: 0.6, ease: "anticipate" }}
                    className="relative"
                >
                    <motion.span
                        initial={{ color: "#ffffff" }}
                        whileInView={{ color: "#9ca3af" }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        className="text-sm font-medium relative z-0"
                    >
                        {worth}
                    </motion.span>
                    {/* Thin Strike-through line */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "115%" }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                        className="absolute top-[55%] left-[-7.5%] h-[1.5px] bg-red-500 rounded-full z-20"
                    />
                </motion.div>
                <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="text-lg font-bold text-green-400 ml-3"
                >
                    FREE
                </motion.span>
            </div>
        </div>
    );
};

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
        <section className="pt-12 md:pt-24 pb-8 md:pb-16 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        animate={{
                            scale: [1, 1.05, 1],
                            borderColor: ["rgba(59, 130, 246, 0.3)", "rgba(59, 130, 246, 0.6)", "rgba(59, 130, 246, 0.3)"]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 font-medium text-sm shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                    >
                        🎁 Exclusive Bonuses (Limited Time)
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        What You <span className="text-blue-400">Get</span> For <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">FREE</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {bonuses.map((bonus, index) => (
                        <div
                            key={index}
                            className={`relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all group overflow-hidden ${index === 4 ? 'md:col-span-2' : ''}`}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                                className="absolute top-0 right-0 px-4 py-1 bg-yellow-500/20 text-yellow-300 text-xs font-bold uppercase tracking-wider rounded-bl-xl border-l border-b border-yellow-500/20"
                            >
                                {bonus.title}
                            </motion.div>

                            <div className="flex flex-col h-full justify-between gap-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2 pr-24">{bonus.name}</h3>
                                    <p className="text-gray-400 text-sm mb-4">{bonus.description}</p>
                                </div>
                                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.4 }}
                                            className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center"
                                        >
                                            <bonus.icon className="w-4 h-4 text-blue-400" />
                                        </motion.div>
                                        <span className="text-sm text-gray-400">Instant Access</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs text-gray-500 uppercase tracking-wider block">Worth</span>
                                        <AnimatedPrice worth={bonus.worth} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ExclusiveBonuses
