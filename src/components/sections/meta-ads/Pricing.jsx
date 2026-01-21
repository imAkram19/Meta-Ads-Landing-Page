import React from 'react'

const Pricing = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-blue-900/10 to-black relative overflow-hidden" id="pricing">
            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                <div className="bg-gradient-to-br from-gray-900 to-black border border-blue-500/30 p-8 md:p-12 rounded-3xl shadow-2xl relative">
                    {/* Floating Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.6)]" />

                    <h2 className="text-3xl font-bold text-white mb-8">Start Learning Today</h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
                        <div className="text-gray-500 line-through text-2xl font-medium">
                            Real Value: ₹2,999
                        </div>
                        <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                            ₹399
                        </div>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-10 max-w-lg mx-auto">
                        <p className="text-blue-200 font-medium">
                            Why affordable? <br />
                            <span className="text-gray-400 text-sm font-normal">Because beginners should learn without risk.</span>
                        </p>
                    </div>

                    <button className="w-full md:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-xl shadow-blue-600/20 animate-pulse">
                        Get Instant Access Now
                    </button>

                    <p className="text-xs text-gray-500 mt-6">
                        🔒 Secure Payment via UPI/Card • Instant Email Delivery
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Pricing
