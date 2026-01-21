import React from 'react'
import { Check, X } from 'lucide-react'

const Audience = () => {
    return (
        <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                    {/* For You */}
                    <div className="bg-green-500/5 border border-green-500/20 rounded-3xl p-10">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                <Check className="text-green-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">This Is Perfect For:</h3>
                        </div>
                        <div className="space-y-4">
                            {[
                                "Complete beginners",
                                "Students & freshers",
                                "Business owners starting ads",
                                "People scared of Ads Manager"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <Check size={20} className="text-green-500 flex-shrink-0" />
                                    <span className="text-gray-200 text-lg">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* NOT For You */}
                    <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-10 opacity-75">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                                <X className="text-red-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">This Is <span className="underline decoration-red-500">NOT</span> For:</h3>
                        </div>
                        <div className="space-y-4">
                            {[
                                "Advanced media buyers",
                                "Agency owners",
                                "People looking for 'copy-paste money'"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <X size={20} className="text-red-500 flex-shrink-0" />
                                    <span className="text-gray-400 text-lg">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Audience
