import React from 'react'
import { Link } from 'react-router-dom'
import { servicesData } from '../data/servicesData'

const Services = ({ showButton = true }) => {
    return (
        <section id="services" className="py-12 sm:py-20 relative bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4">
                        <span className="text-sm font-medium text-purple-300">Our Services</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-orbitron font-bold mb-6">
                        Comprehensive IT{' '}
                        <span className="gradient-text">Solutions</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        We offer a full spectrum of technology services to help your business thrive in the digital age.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
                        >
                            {/* Card Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-75"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-4 left-4 p-2 bg-purple-600/80 backdrop-blur-sm rounded-lg text-white shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform">
                                    <span className="text-2xl">{service.icon}</span>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow relative z-10">
                                <h3 className="text-xl font-bold mb-3 text-white font-orbitron group-hover:text-purple-400 transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {service.description}
                                </p>

                                <Link
                                    to={`/services/${service.id}`}
                                    className="inline-flex items-center justify-center px-4 py-2 bg-purple-600/10 border border-purple-500/20 hover:bg-purple-600 text-purple-300 hover:text-white rounded-xl text-sm font-medium transition-all duration-300 w-full group-hover:shadow-lg group-hover:shadow-purple-500/25"
                                >
                                    Learn More
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Services Button */}
                {showButton && (
                    <div className="text-center mt-12">
                        <Link to="/services">
                            <button className="px-8 py-3 bg-transparent border border-gray-600 hover:border-[#00f2fe] text-gray-300 hover:text-[#00f2fe] rounded-full font-medium transition-all duration-300 transform hover:scale-105 font-orbitron uppercase tracking-widest text-xs">
                                View All Services
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Services
