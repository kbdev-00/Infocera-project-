import React, { useEffect, useRef } from 'react'
import { FiUsers, FiAward, FiTrendingUp, FiGlobe } from 'react-icons/fi'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

const Counter = ({ value, suffix = "" }) => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-50px" }) // Reduced margin to ensure trigger

    // Initialize spring with 0
    const springValue = useSpring(0, { duration: 2000, bounce: 0 })

    // Transform value to integer + suffix
    const displayValue = useTransform(springValue, (latest) => Math.floor(latest) + suffix)

    useEffect(() => {
        if (inView) {
            springValue.set(value)
        }
    }, [inView, value, springValue])

    return <motion.span ref={ref} className="font-orbitron">{displayValue}</motion.span>
}

const Stats = () => {
    const stats = [
        {
            id: 1,
            icon: <FiUsers className="w-8 h-8" />,
            count: 100,
            suffix: "+",
            label: "Happy Clients"
        },
        {
            id: 2,
            icon: <FiAward className="w-8 h-8" />,
            count: 250,
            suffix: "+",
            label: "Projects Completed"
        },
        {
            id: 3,
            icon: <FiTrendingUp className="w-8 h-8" />,
            count: 98,
            suffix: "%",
            label: "Success Rate"
        },
        {
            id: 4,
            icon: <FiGlobe className="w-8 h-8" />,
            count: 20,
            suffix: "+",
            label: "Countries Served"
        }
    ]

    return (
        <section className="relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-90"></div>

            {/* Overlay Circles for texture matching image */}
            <div className="absolute top-0 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat) => (
                        <div key={stat.id} className="flex flex-col items-center text-center group">
                            {/* Icon Circle */}
                            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20 transition-transform group-hover:scale-110">
                                <div className="text-white">
                                    {stat.icon}
                                </div>
                            </div>

                            {/* Counter */}
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-orbitron tracking-wide">
                                <Counter value={stat.count} suffix={stat.suffix} />
                            </div>

                            {/* Label */}
                            <div className="text-sm md:text-base text-blue-100 font-medium tracking-wider uppercase">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stats
