import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import AboutModal from './AboutModal'

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0)
    const [isAboutModalOpen, setIsAboutModalOpen] = useState(false)

    const images = [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop", // Office 1
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070&auto=format&fit=crop", // Office 2
        "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop", // Office 3
        "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070&auto=format&fit=crop"  // Office 4 (New)
    ]
    const headlines = [
        { main: "Accelerate Growth", sub: "with Digital Innovation" },
        { main: "Transform Your Business", sub: "with Cutting-Edge Technology" },
        { main: "Innovative IT Solutions", sub: "for Modern Enterprises" },
        { main: "Empower Your Future", sub: "with Smart Technology" }
    ]

    useEffect(() => {
        // Preload all images immediately
        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });

        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        >
            {/* Background Image Carousel */}
            <div className="absolute inset-0 z-0 text-center">
                <AnimatePresence initial={false}>
                    <motion.div
                        key={currentImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "linear" }}
                        className="absolute inset-0"
                    >
                        <img
                            src={images[currentImage]}
                            alt="Background"
                            className="w-full h-full object-cover filter brightness-[0.75]"
                        />
                    </motion.div>
                </AnimatePresence>
                {/* Ultra-Soft Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5"></div>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float opacity-50"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
                    >
                        <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                        <span className="text-sm font-medium tracking-wide">Leading IT Services Provider</span>
                    </motion.div>

                    {/* Main Heading Carousel */}
                    <div className="relative min-h-[200px] sm:min-h-[180px] lg:min-h-[220px] h-auto flex items-center justify-center mb-8">
                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={currentImage}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="text-4xl sm:text-6xl lg:text-7xl font-orbitron font-bold w-full leading-tight"
                            >
                                {headlines[currentImage].main}
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a73e8] to-[#00f2fe]">
                                    {headlines[currentImage].sub}
                                </span>
                            </motion.h1>
                        </AnimatePresence>
                    </div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
                    >
                        We deliver innovative technology solutions to help your business thrive in a digital world.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <button
                            onClick={() => setIsAboutModalOpen(true)}
                            className="px-8 py-4 bg-gradient-to-r from-[#1a73e8] to-[#00f2fe] rounded-xl font-bold text-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(26,115,232,0.3)] flex items-center gap-2"
                        >
                            <span className="text-xl">🚀</span>
                            Get Started
                        </button>
                        <a href="#video-showcase" className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-white hover:bg-white/10 transition-all flex items-center gap-3">
                            <span className="text-xl text-blue-400">▶</span>
                            Watch Demo
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
                    >
                        {[
                            { icon: "💡", title: 'Innovation', desc: 'Creative Solutions, Unified Systems' },
                            { icon: "🛡️", title: 'Secure & Reliable', desc: 'Enterprise-grade security' },
                            { icon: "🕒", title: '24/7 Support', desc: 'Round-the-clock assistance' },
                            { icon: "👥", title: 'Expert Team', desc: 'Industry professionals' },
                        ].map((item, index) => (
                            <div key={index} className="px-6 py-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-[#00f2fe]/50 transition-all group">
                                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                                <div className="text-lg font-bold font-orbitron text-white mb-2">{item.title}</div>
                                <div className="text-xs text-gray-400 leading-relaxed">{item.desc}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
                    <div className="w-1 h-2 bg-[#00f2fe] rounded-full animate-scroll"></div>
                </div>
            </motion.div>

            {/* About Modal */}
            <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
        </section>
    )
}

export default Hero
