import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { servicesData } from '../data/servicesData'
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import SubServiceDetail from './SubServiceDetail'

const ServiceDetail = () => {
    const { slug } = useParams()
    const service = servicesData.find(s => s.id === slug)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [slug, service])

    if (!service) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">Service Not Found</h2>
                    <p className="text-gray-400 mb-6">Could not find service: {slug}</p>
                    <Link to="/" className="text-purple-400 hover:text-purple-300">Back to Home</Link>
                </div>
            </div>
        )
    }

    // Special Layout for services with rich content (like Creative Design which now has UI/UX content on main page)
    if (service.serviceOfferings || service.introVariant || service.heroVariant) {
        return <SubServiceDetail serviceOverride={service} />
    }

    return (
        <div className="bg-gray-900 min-h-screen pt-20">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover filter brightness-[0.3]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/50 to-gray-900"></div>
                </div>

                <div className="container mx-auto px-4 z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full mb-6 backdrop-blur-sm"
                    >
                        <span className="text-purple-300 font-medium"></span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 font-orbitron"
                    >
                        {service.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        {service.description}
                    </motion.p>
                </div>
            </div>

            {/* Sub-Services Grid (If available) */}
            {service.subServices ? (
                <div className="container mx-auto px-4 py-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-6">Our {service.title} Technologies</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            We use cutting-edge technologies to build robust and scalable applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {service.subServices.map((sub, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{sub.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {sub.description}
                                </p>

                                <div className="mb-8 space-y-2">
                                    {sub.features?.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-center gap-2 text-sm text-gray-500">
                                            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    to={`/services/${service.id}/${sub.id}`}
                                    className="inline-flex items-center gap-2 px-6 py-3 border border-blue-100 text-blue-600 rounded-xl hover:bg-blue-50 transition-colors font-medium hover:gap-3"
                                >
                                    Learn More <FaArrowRight />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ) : (
                /* Standard Content Section for services without sub-services */
                <div className="container mx-auto px-4 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Left Column - Description */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="text-4xl">{service.icon}</span>
                                    Overview
                                </h2>
                                <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-purple-500 pl-6">
                                    {service.longDescription}
                                </p>
                            </div>

                            <div className="bg-gray-800/50 rounded-2xl p-8 border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-6">Why Choose Our {service.title}?</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Industry Expert Team",
                                        "Custom Scalable Solutions",
                                        "24/7 Technical Support",
                                        "Cutting-edge Technology Stack"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-gray-300">
                                            <FaCheckCircle className="text-purple-500 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Column - Sub-services List */}
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-8">Capabilities</h2>
                            <div className="grid gap-4">
                                {service.items.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group p-5 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-purple-500/30 rounded-xl transition-all duration-300 flex items-center justify-between cursor-pointer"
                                    >
                                        <span className="text-lg text-gray-200 group-hover:text-white font-medium">
                                            {item}
                                        </span>
                                        <FaArrowRight className="text-gray-500 group-hover:text-purple-400 transform group-hover:translate-x-1 transition-all" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 py-20 mt-20 border-t border-white/10">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6 font-orbitron">Ready to Get Started?</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Let's discuss how our {service.title.toLowerCase()} services can help transform your business and drive growth.
                    </p>
                    <Link
                        to="/#contact"
                        className="inline-flex items-center gap-2 px-10 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-200 transition-colors shadow-lg shadow-white/10"
                    >
                        Contact Us Today
                        <FaArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetail
