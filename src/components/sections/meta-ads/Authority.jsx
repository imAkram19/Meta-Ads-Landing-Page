import React from 'react'
import { Star, ShieldCheck } from 'lucide-react'

const Authority = () => {
    const testimonials = [
        { name: "Mohammed Shoaib", role: "Small Business Owner", text: "I was wasting money on 'Boost Post'. This guide showed me how to use Ads Manager properly. Finally getting qualified leads.", rating: 5 },
        { name: "Rajesh Reddy", role: "Freelancer", text: "Simple, direct, and no nonsense. The campaign structure part alone is worth more than updated ₹399.", rating: 5 },
        { name: "Ayesha Siddiqui", role: "Student", text: "I was scared of the interface. This guide made it look so easy. Perfect for beginners who have zero knowledge.", rating: 5 },
        { name: "Karthik Rao", role: "Real Estate Agent", text: "Wasted 5k on Facebook ads before finding this. Now I know exactly what budget to set and who to target.", rating: 5 },
        { name: "Sameer Khan", role: "Clothing Brand Owner", text: "Better than expensive courses. Shawaiz explains concepts very clearly in the video.", rating: 5 },
        { name: "Anjali Mehta", role: "Digital Marketer", text: "Needed a quick refresher for 2026 updates. This was perfect. Short and actionable.", rating: 4 },
        { name: "Syed Ibrahim", role: "Restaurant Owner", text: "Trustworthy guide. No fake promises of 'get rich quick'. Just pure technical learning.", rating: 5 }
    ]

    return (
        <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Author / Trust Section */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <span className="inline-block p-3 rounded-full bg-blue-500/10 text-blue-400 mb-6">
                        <ShieldCheck size={32} />
                    </span>
                    <h2 className="text-4xl font-bold text-white mb-8">👨‍💻 Why Learn From Me?</h2>

                    <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <p className="text-gray-300">✅ I work with Meta Ads professionally every day.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <p className="text-gray-300">✅ I understand beginner problems clearly.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <p className="text-gray-300">✅ I’ve seen what works and what fails.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <p className="text-gray-300">✅ This guide is built from real experience.</p>
                        </div>
                    </div>

                    <p className="text-xl text-gray-400 mt-10 italic">
                        "This is the guide I wish I had when I started."
                    </p>
                </div>

                {/* Testimonials */}
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold text-white mb-2">What Others Are Saying</h3>
                    <div className="flex justify-center gap-1 text-yellow-400 mb-2">
                        <Star fill="currentColor" size={20} />
                        <Star fill="currentColor" size={20} />
                        <Star fill="currentColor" size={20} />
                        <Star fill="currentColor" size={20} />
                        <Star fill="currentColor" size={20} />
                    </div>
                    <p className="text-gray-500">Based on recent feedback from Hyderabad & India</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="flex gap-1 text-yellow-500 mb-4">
                                {Array(t.rating).fill(0).map((_, k) => (
                                    <Star key={k} fill="currentColor" size={16} />
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6 text-sm leading-relaxed">"{t.text}"</p>
                            <div className="flex items-center gap-3 mt-auto">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 flex items-center justify-center text-xs font-bold text-white">
                                    {t.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="text-left">
                                    <p className="text-white font-semibold text-sm">{t.name}</p>
                                    <p className="text-gray-500 text-xs">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Authority
