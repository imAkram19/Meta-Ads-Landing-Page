import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Mail, Send, CheckCircle2, Loader2, MessageCircle, ChevronDown } from 'lucide-react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SuccessPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        niche: '',
        experience: '',
        challenge: ''
    })
    const shakeVariants = {
        shake: {
            x: [0, -10, 10, -10, 10, 0],
            transition: { duration: 0.4 }
        }
    }
    const [status, setStatus] = useState('idle') // idle, loading, success, error
    const [fieldErrors, setFieldErrors] = useState([]) // array of field names with errors

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const phoneRegex = /^\+?[0-9]{10,14}$/
        const errors = []

        if (!formData.name.trim()) {
            errors.push('name')
            toast.error("Please enter your name.", { position: "top-center", theme: "dark" })
        }
        else if (!formData.email.includes('@')) {
            errors.push('email')
            toast.error("Email is missing the '@' symbol.", { position: "top-center", theme: "dark" })
        }
        else if (!emailRegex.test(formData.email)) {
            errors.push('email')
            toast.error("Please enter a valid professional email.", { position: "top-center", theme: "dark" })
        }

        if (!formData.whatsapp.trim()) {
            errors.push('whatsapp')
            toast.error("WhatsApp number is required.", { position: "top-center", theme: "dark" })
        }
        else if (!phoneRegex.test(formData.whatsapp.replace(/\s/g, ''))) {
            errors.push('whatsapp')
            toast.error("Invalid WhatsApp number format.", { position: "top-center", theme: "dark" })
        }

        setFieldErrors(errors)
        return errors.length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (status === 'loading') return
        if (!validateForm()) return

        setStatus('loading')

        try {
            const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyyfGJP57celDDTmOjgUYkIRxr5_DHnHTEdcvjDXQua1ik4JHQn_khko25SwaHY_46QSQ/exec'

            // Use URLSearchParams for application/x-www-form-urlencoded
            // This is most reliable for Google Apps Script e.parameter
            const params = new URLSearchParams()
            Object.keys(formData).forEach(key => params.append(key, formData[key]))

            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: params.toString()
            })

            // Successful submission assumed in no-cors
            setTimeout(() => {
                setStatus('success')
            }, 1500)

        } catch (error) {
            console.error('Error submitting form:', error)
            setStatus('error')
        }
    }

    if (status === 'success') {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-black">
                <div className="relative mb-12">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(34,197,94,0.4)]"
                    >
                        <motion.div
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Check size={64} className="text-white stroke-[4px]" />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0.5 }}
                        animate={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="absolute inset-0 border-4 border-green-500 rounded-full"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-6"
                >
                    <h1 className="text-5xl md:text-7xl font-normal text-white uppercase tracking-[0.05em]" style={{ fontFamily: 'Anton, sans-serif' }}>
                        Registration <span className="text-green-500">Confirmed!</span>
                    </h1>

                    <div className="max-w-md mx-auto space-y-4">
                        <p className="text-xl text-gray-200 leading-relaxed">
                            Thank you for your trust, <span className="font-bold text-white">{formData.name}</span>.
                        </p>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                            <div className="flex items-center justify-center gap-3 text-blue-400 mb-3">
                                <Mail size={20} />
                                <span className="font-bold uppercase tracking-widest text-xs">Access Details</span>
                            </div>
                            <p className="text-gray-300 text-base italic">
                                "A professional onboarding email containing your full guide and exclusive bonuses will be delivered to your inbox <span className="text-white font-bold">within the next 3 hours.</span>"
                            </p>
                        </div>
                    </div>

                    <div className="pt-8">
                        <button
                            onClick={() => window.location.href = '/'}
                            className="px-10 py-4 bg-white text-black rounded-full font-black uppercase tracking-widest hover:bg-gray-200 transition-all shadow-xl"
                        >
                            Return to Dashboard
                        </button>
                    </div>
                </motion.div>
            </div>
        )
    }

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 relative overflow-hidden bg-black">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-xl mx-auto relative z-10">
                <div className="text-center mb-10">
                    <h1 className="text-6xl md:text-8xl font-normal mb-4 uppercase tracking-[0.1em] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" style={{ fontFamily: 'Anton, sans-serif' }}>
                        FINAL <span className="text-blue-500">STEP</span>
                    </h1>
                    <p className="text-gray-400 text-lg font-medium">
                        Please provide your details to receive the training material.
                    </p>
                </div>

                <motion.form
                    noValidate
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 border border-white/10 shadow-2xl space-y-8"
                >
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-[0.2em] mb-4">
                                <div className="h-px bg-blue-400/30 flex-1" />
                                Mandatory Information
                                <div className="h-px bg-blue-400/30 flex-1" />
                            </div>

                            <div>
                                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 ml-1">Full Name</label>
                                <motion.input
                                    variants={shakeVariants}
                                    animate={fieldErrors.includes('name') ? "shake" : ""}
                                    type="text"
                                    placeholder="Enter your name"
                                    className={`w-full bg-white/5 border rounded-2xl px-6 py-4 text-white focus:bg-white/10 focus:outline-none transition-all placeholder:text-gray-600 ${fieldErrors.includes('name') ? 'border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]' : 'border-white/10 focus:border-blue-500/50'}`}
                                    value={formData.name}
                                    onChange={(e) => {
                                        setFormData({ ...formData, name: e.target.value })
                                        setFieldErrors(fieldErrors.filter(f => f !== 'name'))
                                    }}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                                    <motion.input
                                        variants={shakeVariants}
                                        animate={fieldErrors.includes('email') ? "shake" : ""}
                                        type="email"
                                        placeholder="your@email.com"
                                        className={`w-full bg-white/5 border rounded-2xl px-6 py-4 text-white focus:bg-white/10 focus:outline-none transition-all placeholder:text-gray-600 ${fieldErrors.includes('email') ? 'border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]' : 'border-white/10 focus:border-blue-500/50'}`}
                                        value={formData.email}
                                        onChange={(e) => {
                                            setFormData({ ...formData, email: e.target.value })
                                            setFieldErrors(fieldErrors.filter(f => f !== 'email'))
                                        }}
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 ml-1">WhatsApp Number</label>
                                    <motion.input
                                        variants={shakeVariants}
                                        animate={fieldErrors.includes('whatsapp') ? "shake" : ""}
                                        type="tel"
                                        placeholder="Phone Number"
                                        className={`w-full bg-white/5 border rounded-2xl px-6 py-4 text-white focus:bg-white/10 focus:outline-none transition-all placeholder:text-gray-600 ${fieldErrors.includes('whatsapp') ? 'border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]' : 'border-white/10 focus:border-blue-500/50'}`}
                                        value={formData.whatsapp}
                                        onChange={(e) => {
                                            setFormData({ ...formData, whatsapp: e.target.value })
                                            setFieldErrors(fieldErrors.filter(f => f !== 'whatsapp'))
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-2 text-xs font-bold text-gray-600 uppercase tracking-[0.2em] mb-4">
                                <div className="h-px bg-white/10 flex-1" />
                                Optional (Helps us help you)
                                <div className="h-px bg-white/10 flex-1" />
                            </div>

                            <div>
                                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 ml-1">Business Type / Niche</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Real Estate, E-com, Coaching"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500/50 focus:bg-white/10 focus:outline-none transition-all placeholder:text-gray-600"
                                    value={formData.niche}
                                    onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                                />
                            </div>

                            <div className="relative">
                                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 ml-1">Meta Ads Experience</label>
                                <div className="relative">
                                    <select
                                        className={`w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500/50 focus:bg-white/10 focus:outline-none transition-all appearance-none cursor-pointer pr-12 ${formData.experience === '' ? 'text-gray-600' : 'text-white'}`}
                                        value={formData.experience}
                                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                    >
                                        <option value="" disabled className="bg-gray-900 text-gray-500">Select Experience Level</option>
                                        <option value="Beginner" className="bg-gray-900 text-white">Absolute Beginner</option>
                                        <option value="Novice" className="bg-gray-900 text-white">Running some ads</option>
                                        <option value="Experienced" className="bg-gray-900 text-white">Agency Owner / Pro</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 ml-1">Biggest Challenge?</label>
                                <textarea
                                    placeholder="Tell us what's the #1 thing holding you back..."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500/50 focus:bg-white/10 focus:outline-none transition-all h-24 resize-none placeholder:text-gray-600"
                                    value={formData.challenge}
                                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white font-black uppercase tracking-widest rounded-2xl shadow-[0_20px_40px_rgba(37,99,235,0.3)] ring-2 ring-white/10 flex items-center justify-center gap-3 group transition-all"
                    >
                        {status === 'loading' ? (
                            <Loader2 className="animate-spin" />
                        ) : (
                            <>
                                Claim My Copy
                                <Check size={20} className="group-hover:scale-125 transition-transform" />
                            </>
                        )}
                    </button>
                    {status === 'error' && (
                        <p className="text-red-400 text-center text-sm font-black uppercase tracking-widest">Network Error! Please try again.</p>
                    )}
                </motion.form>

                <p className="text-center text-gray-600 text-[10px] mt-8 uppercase font-bold tracking-widest">
                    Your data is safe & encrypted. Exclusive to Meta Ads Learners.
                </p>
                <ToastContainer />
            </div>
        </div>
    )
}

export default SuccessPage
