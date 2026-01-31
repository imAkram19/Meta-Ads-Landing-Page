import React from 'react'
import { motion } from 'framer-motion'
import { Star, ShieldCheck, Target, CheckCircle2 } from 'lucide-react'
import WhyLearnFromMeImg from '../../../assets/Why Learn From Me.png'

const Authority = () => {

    const testimonials = [
        { name: "Mohammed Shoaib", role: "Small Business Owner", text: "I was wasting money on 'Boost Post'. This guide showed me how to use Ads Manager properly. Finally getting qualified leads.", rating: 5 },
        { name: "Rajesh Reddy", role: "Freelancer", text: "Simple, direct, and no nonsense. The campaign structure part alone is worth more than updated ₹149.", rating: 5 },
        { name: "Ayesha Siddiqui", role: "Student", text: "I was scared of the interface. This guide made it look so easy. Perfect for beginners who have zero knowledge.", rating: 5 },
        { name: "Karthik Rao", role: "Real Estate Agent", text: "Wasted 5k on Facebook ads before finding this. Now I know exactly what budget to set and who to target.", rating: 5 },
        { name: "Sameer Khan", role: "Clothing Brand Owner", text: "Better than expensive courses. Shawaiz explains concepts very clearly in the video.", rating: 5 },
        { name: "Anjali Mehta", role: "Digital Marketer", text: "Needed a quick refresher for 2026 updates. This was perfect. Short and actionable.", rating: 4 },
        { name: "Syed Ibrahim", role: "Restaurant Owner", text: "Trustworthy guide. No fake promises of 'get rich quick'. Just pure technical learning.", rating: 5 }
    ]

    return (
        <section className="pt-4 md:pt-16 pb-12 md:pb-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Author / Trust Section */}
                <div className="max-w-4xl mx-auto -mb-6 md:mb-8 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-3 mb-0 md:mb-8 text-center"
                    >
                        <div className="p-2 rounded-full bg-blue-500/10 text-blue-400 shrink-0">
                            <ShieldCheck size={28} className="md:w-10 md:h-10" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white whitespace-nowrap">Why Learn From Me?</h2>
                    </motion.div>
                </div>
            </div>

            {/* Full Width Image Section */}
            <div className="w-full -mb-6 md:mb-16 relative">
                <img
                    src={WhyLearnFromMeImg}
                    alt="Why Learn From Me"
                    className="w-full h-auto object-cover shadow-2xl"
                    loading="eager"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Testimonials */}
                <div className="text-center mb-6 md:mb-12">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 md:mb-4 whitespace-nowrap mt-8 md:mt-0"
                    >
                        What people say about this
                    </motion.h3>
                    <div className="flex justify-center gap-1 text-yellow-400 mb-2">
                        {[1, 2, 3, 4, 5].map((_, k) => (
                            <motion.div
                                key={k}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (k * 0.1), type: "spring", stiffness: 260, damping: 20 }}
                            >
                                <Star fill="currentColor" size={20} />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <div className="flex gap-1 text-yellow-500 mb-4">
                                {Array(t.rating).fill(0).map((_, k) => (
                                    <motion.div
                                        key={k}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: (i * 0.05) + (k * 0.1), type: "spring", stiffness: 260, damping: 20 }}
                                    >
                                        <Star fill="currentColor" size={16} />
                                    </motion.div>
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6 text-sm leading-relaxed">"{t.text}"</p>
                            <div className="flex flex-row-reverse items-center gap-3 mt-auto text-right">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 flex items-center justify-center text-xs font-bold text-white shrink-0">
                                    {t.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm">{t.name}</p>
                                    <p className="text-gray-500 text-xs">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div >
        </section >
    )
}

export default Authority
