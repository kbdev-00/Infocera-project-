import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { servicesData } from '../data/servicesData'

const AllServices = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const gradients = {
        'software-products': 'bg-gradient-to-br from-[#0ea5e9] to-[#2563eb]', // Cyan to Blue
        'web-design-development': 'bg-gradient-to-br from-[#d946ef] to-[#db2777]', // Fuchsia to Pink
        'mobile-applications': 'bg-gradient-to-br from-[#10b981] to-[#0d9488]', // Emerald to Teal
        'online-marketing': 'bg-gradient-to-br from-[#f97316] to-[#ef4444]', // Orange to Red
        'creative-design': 'bg-gradient-to-br from-[#ec4899] to-[#f43f5e]', // Pink to Rose
        'consulting-services': 'bg-gradient-to-br from-[#6366f1] to-[#8b5cf6]', // Indigo to Violet
        'data-science': 'bg-gradient-to-br from-[#14b8a6] to-[#059669]', // Teal to Emerald
        'testing-qa': 'bg-gradient-to-br from-[#a855f7] to-[#7c3aed]', // Purple to Violet
    }

    return (
        <div className="bg-gray-900 min-h-screen pb-20">
            {/* Hero Section */}
            <div className="relative h-[500px] w-full flex items-center justify-center overflow-hidden mb-16">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                        alt="Services Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gray-900/80"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
                    {/* Premium Solutions Pill */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6 mx-auto">
                        <span className="text-yellow-400">✨</span>
                        <span className="text-sm font-medium text-blue-200">Premium Solutions</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 font-orbitron">
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                            Our Services
                        </span>
                    </h1>

                    <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                        We offer <span className="text-blue-300">comprehensive IT solutions</span> tailored to meet your business needs and drive <span className="text-purple-300">digital transformation</span> across all industries.
                    </p>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-300">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                            Web Development
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                            Mobile Apps
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                            AI & ML
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {servicesData.map((service) => (
                        <div
                            key={service.id}
                            className={`rounded-3xl p-8 ${gradients[service.id] || 'bg-gray-800'} text-white relative overflow-hidden group hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col`}
                        >
                            {/* Icon Box */}
                            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl mb-6">
                                {service.icon}
                            </div>

                            <h2 className="text-2xl font-bold mb-6 font-orbitron">{service.title}</h2>

                            <ul className="space-y-3 mb-10 flex-grow">
                                {service.items?.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="mt-2 w-1.5 h-1.5 bg-white rounded-full shrink-0" />
                                        <span className="text-white/90 font-medium text-sm sm:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to={`/services/${service.id}`}
                                className="inline-flex items-center text-white font-semibold hover:translate-x-2 transition-transform mt-auto"
                            >
                                Learn More
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Let's discuss how our services can help transform your business and drive growth.</p>
                    <Link to="/#contact" className="inline-block px-8 py-3 bg-transparent border-2 border-purple-500 hover:bg-purple-600 text-white font-bold rounded-full transition-all duration-300 uppercase tracking-widest text-sm">
                        Contact Us Today
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AllServices
