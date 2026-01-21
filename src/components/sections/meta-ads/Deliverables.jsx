import React from 'react'
import { Gift, FileText, Video, AlertTriangle } from 'lucide-react'

const Deliverables = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-black to-blue-950/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        📦 What You Get Instantly
                    </h2>
                    <p className="text-xl text-gray-400">
                        Everything is delivered to your email immediately after payment.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Main Guide */}
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 shadow-lg hover:shadow-blue-500/20 transition-all hover:-translate-y-2 group">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-inner">
                            <FileText className="text-white w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Meta Ads Starter Guide</h3>
                        <p className="text-sm text-gray-400 mb-4">2026 Updated PDF Edition</p>
                        <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20">
                            CORE VALUE
                        </div>
                    </div>

                    {/* Video */}
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all hover:-translate-y-2">
                        <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center mb-6">
                            <Video className="text-purple-400 w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Video Walkthrough</h3>
                        <p className="text-sm text-gray-400">Explanation on how to use the guide correctly.</p>
                    </div>

                    {/* Bonus 1 */}
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all hover:-translate-y-2">
                        <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center mb-6">
                            <Gift className="text-green-400 w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Beginner Checklist</h3>
                        <p className="text-sm text-gray-400">Tick off items as you set up your first ad.</p>
                        <span className="text-green-500 text-xs font-bold mt-2 block">(BONUS)</span>
                    </div>

                    {/* Bonus 2 */}
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all hover:-translate-y-2">
                        <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center mb-6">
                            <AlertTriangle className="text-yellow-400 w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Common Mistakes PDF</h3>
                        <p className="text-sm text-gray-400">List of things that waste your budget.</p>
                        <span className="text-green-500 text-xs font-bold mt-2 block">(BONUS)</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Deliverables
