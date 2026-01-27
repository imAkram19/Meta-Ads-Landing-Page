import { motion } from 'framer-motion'
import { Gift, FileText, Video, AlertTriangle, Sparkles } from 'lucide-react'

const Deliverables = () => {
    const items = [
        {
            title: "Full Meta ads 2026 guide",
            desc: "2026 Updated PDF Edition",
            icon: FileText,
            iconBg: "bg-blue-600",
            iconColor: "text-white",
            badge: "CORE VALUE",
            badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
        },
        {
            title: "Video walkthrough",
            desc: "Step-by-step guide on how to use it correctly.",
            icon: Video,
            iconBg: "bg-purple-600/20",
            iconColor: "text-purple-400",
            badge: "CORE VALUE",
            badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
        },
        {
            title: "Access to all free bonuses",
            desc: "Unlock all exclusive resources instantly.",
            icon: Gift,
            iconBg: "bg-green-600/20",
            iconColor: "text-green-400",
            badge: "BONUS",
            badgeColor: "bg-green-500/10 text-green-400 border-green-500/20"
        },
        {
            title: "Useful AI prompts pack",
            desc: "Smart prompts to accelerate your ad creation.",
            icon: Sparkles,
            iconBg: "bg-pink-600/20",
            iconColor: "text-pink-400",
            badge: "AI POWER",
            badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/20"
        },
        {
            title: "Common Mistakes: What to do & not to do",
            desc: "Avoid the most common pitfalls in ad campaigns.",
            icon: AlertTriangle,
            iconBg: "bg-yellow-600/20",
            iconColor: "text-yellow-400",
            badge: "ESSENTIAL",
            badgeColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
        }
    ]

    return (
        <section className="pt-8 md:pt-24 pb-8 md:pb-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        What You <span className="text-blue-400">Get</span> Instantly
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400">
                        Everything is delivered to your email immediately after payment.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map((item, idx) => (
                        <div key={idx} className="bg-white/5 backdrop-blur-sm p-6 pb-12 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all hover:scale-[1.02] flex items-start gap-4 group relative overflow-hidden">
                            <div className={`w-14 h-14 ${item.iconBg} rounded-xl flex items-center justify-center shrink-0 shadow-lg`}>
                                <item.icon className={`${item.iconColor} w-7 h-7`} />
                            </div>
                            <div className="flex flex-col h-full">
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.desc}</p>

                                <motion.span
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 + (idx * 0.1) }}
                                    className={`absolute bottom-4 right-4 px-2 py-1 rounded text-[10px] font-bold border uppercase tracking-wider ${item.badgeColor}`}
                                >
                                    {item.badge}
                                </motion.span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Deliverables
