import React from 'react'
import { Plus, Minus } from 'lucide-react'

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-blue-400' : 'text-gray-200 group-hover:text-white'}`}>
                    {question}
                </span>
                <div className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                    <Plus className={`${isOpen ? 'text-blue-400' : 'text-gray-500'}`} />
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-gray-400 leading-relaxed pr-8">
                    {answer}
                </p>
            </div>
        </div>
    )
}

const FAQ = () => {
    const faqs = [
        { q: "Is this beginner-friendly?", a: "Yes. Made strictly for beginners with zero prior knowledge." },
        { q: "Is this a course or guide?", a: "This is a structured PDF guide + a video explanation walkaround." },
        { q: "Will I get access instantly?", a: "Yes. Right after payment you will receive an email with the access link." },
        { q: "Will this guarantee profits?", a: "No. This guide teaches correct execution and technical setup, not false promises of money." },
        { q: "Can I use this in 2026?", a: "Yes. It is updated for the current Meta Ads interface and system." }
    ]

    return (
        <section className="py-24">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
                <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} question={faq.q} answer={faq.a} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
