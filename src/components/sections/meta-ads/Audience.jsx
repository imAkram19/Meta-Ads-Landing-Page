import React from 'react'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const Audience = () => {
    return (
        <section className="pt-4 md:pt-16 pb-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                    {/* For You */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-green-500/5 border border-green-500/20 rounded-3xl p-10"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                <Check className="text-green-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">
                                This Is <span className="relative inline-block px-1">
                                    Perfect
                                    <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 100 20" preserveAspectRatio="none">
                                        <motion.path
                                            d="M 0 10 Q 50 20 100 10"
                                            fill="transparent"
                                            stroke="#22c55e"
                                            strokeWidth="6"
                                            strokeLinecap="round"
                                            initial={{ pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                                        />
                                    </svg>
                                </span> For:
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {[
                                "Complete beginners",
                                "Students & freshers",
                                "Business owners starting ads",
                                "People scared of Ads Manager"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    className="flex items-center gap-3"
                                >
                                    <Check size={20} className="text-green-500 flex-shrink-0" />
                                    <span className="text-gray-200 text-lg">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* NOT For You */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-red-500/5 border border-red-500/20 rounded-3xl p-10 opacity-75"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                                <X className="text-red-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">
                                This Is <span className="relative inline-block px-1">
                                    NOT
                                    <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 100 20" preserveAspectRatio="none">
                                        <motion.path
                                            d="M 0 10 Q 50 20 100 10"
                                            fill="transparent"
                                            stroke="#ef4444"
                                            strokeWidth="6"
                                            strokeLinecap="round"
                                            initial={{ pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                                        />
                                    </svg>
                                </span> For:
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {[
                                "Advanced media buyers",
                                "Agency owners",
                                "People looking for 'copy-paste money'"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    className="flex items-center gap-3"
                                >
                                    <X size={20} className="text-red-500 flex-shrink-0" />
                                    <span className="text-gray-400 text-lg">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Audience
