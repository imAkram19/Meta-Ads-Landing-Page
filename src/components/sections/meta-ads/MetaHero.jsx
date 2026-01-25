import React from 'react'
import { motion } from 'framer-motion'
import { Zap, CheckCircle2 } from 'lucide-react'
import heroPerson from '../../../assets/hero-person.png'

const MetaHero = () => {
    return (
        <section className="min-h-screen relative flex flex-col items-center pt-8 md:pt-4 lg:pt-20 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 inset-x-0 h-[50vh] bg-gradient-to-b from-blue-900/20 to-transparent opacity-40" />
                <div className="absolute bottom-0 inset-x-0 h-[50vh] bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>

            {/* Immersive Hero Visual Container */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto h-auto md:h-[85vh] flex flex-col items-center justify-start md:justify-center pb-0 md:-mt-32 lg:mt-0">

                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative lg:absolute lg:top-4 lg:left-1/2 lg:-translate-x-1/2 z-30 mb-4 lg:mb-0 w-max"
                >
                    <div className="inline-block px-6 py-2 border border-blue-400/30 rounded-full bg-blue-900/20 backdrop-blur-md">
                        <span className="text-blue-200 text-xs md:text-sm font-bold tracking-[0.3em] uppercase">2026 Full Guide</span>
                    </div>
                </motion.div>

                {/* Main Text Layer - Behind Head */}
                <div className="relative z-10 flex flex-col items-center leading-[0.85] select-none pointer-events-none mb-10 md:mb-0 gap-4 md:gap-8 lg:-mt-16">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-[23vw] md:text-[12rem] lg:text-[18rem] font-sans text-[#E0E0E0] tracking-tight scale-y-110 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                        style={{ fontFamily: 'Anton, sans-serif' }}
                    >
                        META ADS
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-[23vw] md:text-[12rem] lg:text-[18rem] font-sans text-[#E0E0E0] tracking-tight scale-y-110 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                        style={{ fontFamily: 'Anton, sans-serif' }}
                    >
                        WITH AI
                    </motion.span>
                </div>

                {/* Person Image */}
                <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="relative md:absolute md:bottom-0 left-0 md:left-1/2 md:-translate-x-1/2 w-[60%] md:w-auto h-auto md:h-[75%] lg:h-[80%] z-20 flex items-end justify-center pointer-events-none mt-[-30%] md:mt-0 mx-auto"
                >
                    <img src={heroPerson} alt="Meta Ads Expert" className="w-full md:w-auto h-auto md:h-full object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]" />
                </motion.div>

                {/* Side Badges - Desktop Only / Tablet */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, x: -50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.2 }}
                    className="hidden md:block absolute md:top-[60%] lg:top-[60%] left-8 lg:left-16 z-30 -rotate-2"
                >
                    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm lg:text-base font-bold px-6 py-3 rounded-xl shadow-lg border border-white/10 uppercase tracking-wide hover:scale-105 transition-transform cursor-default">
                        No Experience Needed
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.3 }}
                    className="hidden md:block absolute md:top-[55%] lg:top-[55%] right-8 lg:right-16 z-30 rotate-2"
                >
                    <div className="bg-gradient-to-l from-blue-600 to-indigo-700 text-white text-sm lg:text-base font-bold px-6 py-3 rounded-xl shadow-lg border border-white/10 uppercase tracking-wide hover:scale-105 transition-transform cursor-default">
                        Updated for 2026
                    </div>
                </motion.div>

                {/* Mobile Side Badges (Stacked or adjusted) */}
                <div className="md:hidden absolute top-[55%] w-full flex justify-between px-8 z-40">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, x: -30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.2 }}
                        className="bg-gradient-to-r from-cyan-600/90 to-blue-600/90 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-lg border border-white/10 uppercase tracking-wide -rotate-2"
                    >
                        No Experience
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, x: 30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.3 }}
                        className="bg-gradient-to-l from-blue-600/90 to-indigo-700/90 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-lg border border-white/10 uppercase tracking-wide rotate-2"
                    >
                        2026 Updated
                    </motion.div>
                </div>

                {/* Bottom Info Bar */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    className="relative md:absolute bottom-auto md:bottom-4 lg:-bottom-8 left-auto md:left-1/2 md:-translate-x-1/2 z-30 w-[90%] max-w-2xl -mt-8 md:mt-0"
                >
                    <div className="bg-[#0a0f1c]/80 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-4 md:p-6 text-center shadow-2xl">
                        <p className="text-gray-100 text-sm md:text-xl font-medium leading-tight">
                            Run Facebook & Instagram Ads <br className="hidden md:block" />
                            <span className="text-blue-300 font-bold block mt-1">Without Confusion, Without Wasting Money</span>
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Pain Points Section (Moved below logic) */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-4 mt-8 md:mt-12 mb-4 md:mb-20">
                {/* This content can remain as "Below the fold" info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto mb-16 relative overflow-hidden"
                >
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 text-center">
                        <span>If You’re Stuck With Meta Ads Because…</span>
                    </h3>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all flex flex-col gap-4 text-left"
                    >
                        {[
                            "You open Ads Manager and don’t know what to click first",
                            "You don’t know How To Create campaign",
                            "You boost posts and feel like money just disappears",
                            "You’re confused about audience, budget & targeting",
                            "You tried watching YouTube videos but nothing connects",
                            "You’re scared to run ads because you might waste money"
                        ].map((text, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * i + 0.4 }}
                                className="flex items-start gap-3 text-gray-200"
                            >
                                <div className="min-w-[20px] mt-1">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                                </div>
                                <span className="text-base md:text-lg leading-snug">{text}</span>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.2 }}
                            className="mt-2 pt-4 border-t border-white/10 flex items-center justify-center font-medium text-lg md:text-xl"
                        >
                            <p className="text-xl text-blue-200 font-medium italic">
                                "This guide is made exactly for you."
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Video Placeholder */}
                <div className="w-full max-w-2xl mx-auto aspect-video bg-black/80 rounded-xl border border-white/10 mb-0 md:mb-12 flex flex-col items-center justify-center relative shadow-2xl overflow-hidden group">
                    {/* Play Button Visual */}
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                    </div>
                    <p className="text-white/40 mt-4 font-medium">Video Explanation Placeholder</p>
                </div>
            </div>
        </section>
    )
}

export default MetaHero
