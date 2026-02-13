import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { servicesData } from '../data/servicesData'
import { motion } from 'framer-motion'
import { FaArrowRight, FaCode, FaBolt, FaMobileAlt, FaLayerGroup } from 'react-icons/fa'

const SubServiceDetail = ({ serviceOverride }) => {
    const { slug, subSlug } = useParams()

    // Find the parent service first
    const parentService = servicesData.find(s => s.id === slug)
    // Then find the sub-service OR use override
    const subService = serviceOverride || parentService?.subServices?.find(s => s.id === subSlug)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [subSlug, serviceOverride])

    if (!subService) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">Technology Not Found</h2>
                    <Link to={`/services/${slug}`} className="text-purple-400 hover:text-purple-300">Back to {parentService?.title || 'Service'}</Link>
                </div>
            </div>
        )
    }


    const icons = [FaCode, FaBolt, FaMobileAlt, FaLayerGroup]

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            {subService.heroVariant === 'centered' ? (
                // Special Centered Hero for UI/UX / Creative Design (Text over Image)
                <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        {subService.image && (
                            <img
                                src={subService.heroImage || subService.image}
                                alt={subService.title}
                                className="w-full h-full object-cover"
                            />
                        )}
                        {/* Strong Dark Overlay */}
                        <div className={`absolute inset-0 ${subService.heroOverlay === 'dark' ? 'bg-gray-900/80' : 'bg-gray-900/40'}`}></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 container mx-auto px-4 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold mb-6 font-orbitron text-white tracking-wide"
                        >
                            {subService.heroTitle}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
                        >
                            {subService.description}
                        </motion.p>
                    </div>
                </div>
            ) : subService.heroVariant === 'solid-blue' ? (
                // Solid Blue Hero (For Software Products)
                <div className="bg-blue-600 py-20 lg:py-28 relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="md:w-3/5 text-white">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl lg:text-5xl font-bold mb-6 font-orbitron"
                            >
                                {subService.heroTitle}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl"
                            >
                                {subService.heroDescription}
                            </motion.p>
                            {subService.ctaText && (
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
                                >
                                    {subService.ctaText}
                                </motion.button>
                            )}
                        </div>
                        <div className="md:w-2/5 flex justify-center">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-white/20"
                            >
                                <span className="text-8xl">{subService.icon}</span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            ) : subService.heroVariant === 'mobile-gradient' ? (
                // Mobile Gradient Hero (Purple/Pink for Mobile Apps)
                <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-pink-700 py-20 lg:py-28 relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="md:w-3/5 text-white">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl lg:text-5xl font-bold mb-6 font-orbitron"
                            >
                                {subService.heroTitle}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-xl text-purple-100 mb-8 leading-relaxed max-w-2xl"
                            >
                                {subService.heroDescription}
                            </motion.p>
                            {subService.ctaText && (
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-white text-purple-700 font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
                                >
                                    {subService.ctaText}
                                </motion.button>
                            )}
                        </div>
                        <div className="md:w-2/5 flex justify-center">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-white/20"
                            >
                                <span className="text-8xl">{subService.icon}</span>
                            </motion.div>
                        </div>
                    </div>
                </div>


            ) : (
                // Standard Hero for other Sub-services
                <div className={`${subService.gradient || 'bg-gradient-to-br from-blue-700 to-indigo-900'} py-20 lg:py-28 relative overflow-hidden`}>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className={`lg:w-${subService.image ? '1/2' : 'full text-center'} text-white`}>
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-4xl lg:text-6xl font-bold mb-6 font-orbitron"
                                >
                                    {subService.heroTitle}
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className={`text-xl text-blue-100 mb-8 leading-relaxed ${!subService.image && 'max-w-3xl mx-auto'}`}
                                >
                                    {subService.heroDescription}
                                </motion.p>
                                <Link to="/#contact">
                                    <motion.button
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className={`bg-white text-gray-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2`}
                                    >
                                        {subService.ctaText || `Start Your ${subService.title} Project`} <FaArrowRight />
                                    </motion.button>
                                </Link>
                            </div>
                            {subService.image && (
                                <div className="lg:w-1/2">
                                    <motion.img
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                        src={subService.image}
                                        alt={subService.title}
                                        className="rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 border-8 border-white/10"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    </div>
                </div>
            )}

            {/* Service Offerings / Intro Section */}
            {subService.introVariant === 'split' && (
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            {/* Left Content */}
                            <div className="lg:w-1/2">
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">{subService.introTitle || "Overview"}</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    {subService.introText}
                                </p>
                                {subService.introList && (
                                    <ul className="space-y-4">
                                        {subService.introList.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-1 flex-shrink-0">✓</div>
                                                <span className="text-gray-700 font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            {/* Right Content (Cards) */}
                            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                                {subService.introCards?.map((card, idx) => (
                                    <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-300">
                                        <div className="w-16 h-16 mx-auto mb-6 bg-blue-50 rounded-full flex items-center justify-center text-3xl text-blue-500">
                                            {card.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                                        <div className="text-sm text-gray-500 space-y-1">
                                            {card.items?.map((item, i) => (
                                                <div key={i}>{item}</div>
                                            ))}
                                        </div>
                                        <p className="text-sm text-gray-500 mt-2">{card.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )} {subService.serviceOfferings && (!['solid-blue', 'mobile-gradient'].includes(subService.heroVariant) || ['consulting-services', 'ui-ux-design'].includes(subService.id)) && subService.id !== 'online-marketing' && (
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">{subService.serviceOfferingsTitle || "Our Services"}</h2>
                            {subService.serviceOfferingsDescription && (
                                <h3 className="text-xl text-pink-600 font-medium mb-4">{subService.serviceOfferingsDescription}</h3>
                            )}
                            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                {subService.introText || "We, at Infocera, understand that great design is not just about aesthetics but about creating meaningful user experiences that drive business growth. Our UI/UX design team studies your users, business goals, and market requirements to create designs that are both beautiful and functional."}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {subService.serviceOfferings.map((offering, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`${offering.bgColor || 'bg-gray-50'} p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow ${!offering.bgColor && 'hover:bg-pink-50/30'}`}
                                >
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{offering.title}</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed mb-6">{offering.description}</p>
                                    {offering.features && (
                                        <ul className="space-y-3 mb-6">
                                            {offering.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-center gap-3 text-gray-700 text-sm font-medium">
                                                    <span className={`w-2 h-2 rounded-full ${offering.dotColor || 'bg-pink-500'}`}></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {offering.cta && (
                                        <button className="bg-white text-blue-900 font-bold py-2 px-6 rounded-lg text-sm shadow-sm hover:shadow-md transition-all">
                                            {offering.cta}
                                        </button>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Stats Section (New) */}
            {subService.stats && (
                <section className="py-16 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-4">
                        {subService.whySection && (
                            <div className="text-center mb-12 max-w-4xl mx-auto">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">{subService.whySection.title}</h2>
                                <p className="text-gray-600 leading-relaxed">{subService.whySection.description}</p>
                            </div>
                        )}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {subService.stats.map((stat, idx) => (
                                <div key={idx} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                                    <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                                    <div className="text-gray-600 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Technologies Section (New) */}
            {subService.technologies && (
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Technologies</h2>
                        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">We use cutting-edge testing tools and technologies to deliver exceptional results</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {subService.technologies.map((tech, idx) => (
                                <span key={idx} className="px-8 py-3 bg-pink-500 text-white rounded-full text-sm font-bold shadow-md hover:bg-pink-600 transition-colors cursor-default">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Why Choose Section (Pink Background for UI/UX) */}
            {(!['solid-blue', 'mobile-gradient'].includes(subService.heroVariant) || ['consulting-services', 'ui-ux-design'].includes(subService.id)) && subService.id !== 'online-marketing' && (
                <section className="py-20 bg-pink-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{subService.whyChooseTitle || `WHY CHOOSE TECH SYNAPSE FOR ${subService.title.toUpperCase()}`}</h2>
                            <h3 className="text-xl text-pink-600 font-medium">{subService.whyChooseSubtitle || "Excellence in Everything We Do"}</h3>
                            <p className="text-gray-600 max-w-3xl mx-auto mt-4">{subService.whyChooseDescription || `Leading enterprises, startups, and agencies rely on our ${subService.title.toLowerCase()} services to drive business growth and innovation.`}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {subService.details?.whyChoose?.map((item, idx) => {
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                        className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all h-full"
                                    >
                                        <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 text-2xl mx-auto mb-6">
                                            ✓
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* Development Process (Full Width for UI/UX) */}
            {subService.details?.process && (
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR DESIGN PROCESS</h2>
                            <h3 className="text-xl text-pink-600 font-medium mb-4">Systematic Approach to Design Excellence</h3>
                            <p className="text-gray-600 max-w-2xl mx-auto">Infocera follows a proven design process that ensures we deliver exceptional UI/UX designs that meet your business objectives and user needs.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {subService.details.process.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-pink-50 p-8 rounded-2xl border border-pink-100 relative group hover:bg-white hover:shadow-xl transition-all"
                                >
                                    <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform">
                                        {idx + 1}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Solutions Grid (For UI/UX Design Solutions) */}
            {subService.solutions && (
                <section className="py-20 bg-pink-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">{subService.solutionsTitle || "Solutions"}</h2>
                            <h3 className="text-xl text-pink-600 font-medium">{subService.solutionsDescription}</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {subService.solutions.map((solution, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100"
                                >
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide text-pink-600">{solution.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{solution.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Benefits of Professional Design */}
            {!['solid-blue', 'mobile-gradient'].includes(subService.heroVariant) && subService.id !== 'online-marketing' && (
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold mb-8">Benefits of Professional {subService.title}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
                                    {[
                                        "Improved user engagement and satisfaction",
                                        "Higher conversion rates and business growth",
                                        "Reduced development costs and time",
                                        "Enhanced brand perception and credibility",
                                        "Better accessibility and user inclusivity",
                                        "Competitive advantage in the market"
                                    ].map((benefit, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 flex-shrink-0">✓</div>
                                            <span className="text-gray-300 font-medium">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Decor */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </section>
            )}

            {/* Technical Capabilities (Only if present and not UI/UX which uses bespoke layout) */}
            {subService.details?.technicalCapabilities && subService.id !== 'ui-ux-design' && !['solid-blue', 'mobile-gradient', 'social-gradient'].includes(subService.heroVariant) && (
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Capabilities</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {subService.details.technicalCapabilities.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Software Products Layout (Two Column: Why Choose + Features) */}
            {subService.heroVariant === 'solid-blue' && subService.id === 'software-products' && (
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            {/* Left Column: Why Choose */}
                            <div>
                                <h2 className="text-2xl font-bold text-blue-700 mb-8 flex items-center gap-2">
                                    <span className="bg-blue-600 text-white px-2 py-1 transform -rotate-2 inline-block">Why Choose Infocera?</span>
                                </h2>
                                <ul className="space-y-6">
                                    {subService.details?.whyChoose?.map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="mt-1.5 w-2 h-2 rounded-full bg-gray-400 flex-shrink-0" />
                                            <span className="text-gray-700 text-lg">{item.title}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* Right Column: Key Features & Benefits (Product List) */}
                            <div>
                                <h2 className="text-2xl font-bold text-blue-700 mb-8">Key Features & Benefits</h2>
                                <ul className="space-y-4">
                                    {subService.items?.map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-gray-500 flex-shrink-0" />
                                            <span className="text-gray-700">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Web Development Arsenal (Grid of Sub-Services) */}
            {subService.id === 'web-design-development' && subService.subServices && (
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">{subService.subServicesTitle || "Our Capabilities"}</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto text-lg">{subService.subServicesDescription}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {subService.subServices.map((sub, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start"
                                >
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{sub.title}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {sub.description}
                                    </p>

                                    {sub.features && (
                                        <ul className="space-y-3 mb-8 flex-grow">
                                            {sub.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-center gap-3 text-gray-600">
                                                    <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    <Link
                                        to={`/services/${subService.id}/${sub.id}`}
                                        className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all mt-auto"
                                    >
                                        Explore Technology <FaArrowRight />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Social Media Strategy Grid (Social Media Only) */}
            {subService.id === 'online-marketing' && subService.subServices && (
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">{subService.subServicesTitle || "Social Media Strategy"}</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto text-lg">{subService.subServicesDescription}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {subService.subServices.map((sub, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start"
                                >
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{sub.title}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {sub.description}
                                    </p>

                                    {sub.features && (
                                        <ul className="space-y-3 mb-8 flex-grow">
                                            {sub.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-center gap-3 text-gray-600">
                                                    <div className="w-2 h-2 rounded-full bg-pink-500 flex-shrink-0"></div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Why Choose for Social Media (Specific variant if needed, or reuse generic but check data) */}
            {(subService.id === 'social-media-marketing' || subService.id === 'online-marketing') && subService.details?.whyChoose && (
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Social Media Marketing?</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">Strategic approach to social media that delivers measurable results</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {subService.details.whyChoose.map((item, idx) => (
                                <div key={idx} className="p-6 bg-white rounded-xl text-center hover:shadow-lg transition-all">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-pink-500 text-4xl mx-auto mb-6 border-2 border-pink-100">
                                        {idx === 0 ? <FaLayerGroup /> : idx === 1 ? <FaMobileAlt /> : idx === 2 ? <FaBolt /> : <FaCode />}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Mobile Technologies Grid (Mobile Apps Only) */}
            {subService.id === 'mobile-applications' && subService.subServices && (
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">{subService.subServicesTitle || "Our Mobile Technologies"}</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto text-lg">{subService.subServicesDescription}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {subService.subServices.map((sub, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start"
                                >
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{sub.title}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {sub.description}
                                    </p>

                                    {sub.features && (
                                        <ul className="space-y-3 mb-8 flex-grow">
                                            {sub.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-center gap-3 text-gray-600">
                                                    <div className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all mt-auto bg-blue-50 px-6 py-2 rounded-lg hover:bg-blue-100">
                                        Learn More <FaArrowRight />
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

        </div>
    )
}

export default SubServiceDetail
