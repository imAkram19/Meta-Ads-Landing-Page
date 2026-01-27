import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Check, Mail } from 'lucide-react'
import { ToastContainer } from 'react-toastify'
import { useNavigate, useLocation } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

const SuccessPage = () => {
    const navigate = useNavigate()
    const location = useLocation()

    // Protection Logic
    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const paymentId = params.get('razorpay_payment_id') || params.get('payment_id')

        // Allow access if payment ID exists OR if on localhost (for testing)
        // Otherwise, redirect to home
        if (!paymentId && window.location.hostname !== 'localhost') {
            navigate('/')
        }
    }, [navigate, location])

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
                    Payment <span className="text-green-500">Successful!</span>
                </h1>

                <div className="max-w-md mx-auto space-y-4">
                    <p className="text-xl text-gray-200 leading-relaxed">
                        Thank you for your trust.
                    </p>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                        <div className="flex items-center justify-center gap-3 text-blue-400 mb-3">
                            <Mail size={20} />
                            <span className="font-bold uppercase tracking-widest text-xs">Access Details</span>
                        </div>
                        <p className="text-gray-300 text-base italic">
                            "A professional onboarding email containing your full guide and exclusive bonuses will be delivered to your inbox <span className="text-white font-bold">within the next few hours.</span>"
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
            <ToastContainer />
        </div>
    )
}

export default SuccessPage
