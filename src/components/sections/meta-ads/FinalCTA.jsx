import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const FinalCTA = () => {
    return (
        <section className="py-32 relative overflow-hidden flex flex-col items-center text-center">



            <div className="relative z-10 max-w-4xl px-4">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                    Ready to Learn <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                        Meta Ads Properly?
                    </span>
                </h2>

                <div className="flex flex-col gap-2 text-xl text-gray-400 mb-12">
                    <p>Stop guessing.</p>
                    <p>Stop wasting money.</p>
                    <p className="text-white font-medium">Start learning Meta Ads step by step.</p>
                </div>

                <Link to="/welcome">
                    <button className="group relative px-10 py-5 bg-white text-black hover:bg-gray-100 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-2xl shadow-blue-900/40">
                        <span className="relative z-10 flex items-center gap-2">
                            Get Meta Ads Starter Guide – 2026
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default FinalCTA
