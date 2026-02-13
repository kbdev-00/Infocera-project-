import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0a0f1c] relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full max-w-md mx-4"
            >
                <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden group">

                    {/* Glow Effect on Border */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/20 rounded-3xl transition-colors duration-500 pointer-events-none"></div>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-white mb-4 font-orbitron">Sign In</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Sign in to your account to access your profile, history, and any private pages you've been granted access to.
                        </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-5">
                        <div className="space-y-1">
                            {/* Email Input */}
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="w-full bg-white text-gray-900 placeholder-gray-400 px-5 py-3.5 rounded-xl border-none outline-none focus:ring-2 focus:ring-purple-500/50 transition-all font-medium"
                                required
                            />
                        </div>

                        <div className="space-y-1 relative">
                            {/* Password Input */}
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                className="w-full bg-white text-gray-900 placeholder-gray-400 px-5 py-3.5 rounded-xl border-none outline-none focus:ring-2 focus:ring-purple-500/50 transition-all font-medium pr-12"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>

                        {/* Sign In Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full py-3.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 mt-2"
                        >
                            Sign In
                        </motion.button>

                        <div className="text-center pt-2">
                            <Link to="/forgot-password" className="text-[#3b82f6] hover:text-blue-400 text-sm transition-colors">
                                Forgot password?
                            </Link>
                        </div>

                        <div className="relative flex py-2 items-center">
                            <div className="flex-grow border-t border-gray-800"></div>
                            <span className="flex-shrink-0 mx-4 text-gray-500 text-sm">Don't have an account?</span>
                            <div className="flex-grow border-t border-gray-800"></div>
                        </div>

                        {/* Create Account Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="button"
                            className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                        >
                            Create Account
                        </motion.button>
                    </form>
                </div>

                {/* Back to Home Link */}
                <div className="text-center mt-8">
                    <Link to="/" className="text-gray-500 hover:text-white transition-colors text-sm flex items-center justify-center gap-2 group">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Home
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}

export default Login
