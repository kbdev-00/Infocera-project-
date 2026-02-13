import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaUsers, FaProjectDiagram, FaClock, FaGlobe, FaRocket, FaBolt, FaCheckCircle, FaHandshake, FaChevronLeft, FaChevronRight, FaDownload, FaHeart, FaLightbulb, FaGraduationCap, FaTrophy, FaShareAlt, FaEye, FaPlay } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AboutModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const [activeYear, setActiveYear] = useState(0);
    const [activeCulture, setActiveCulture] = useState(0);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const stats = [
        { icon: <FaUsers />, value: "150+", label: "Team Members", color: "from-blue-500 to-blue-600" },
        { icon: <FaProjectDiagram />, value: "250+", label: "Projects Completed", color: "from-purple-500 to-purple-600" },
        { icon: <FaClock />, value: "10+", label: "Years in Business", color: "from-cyan-500 to-cyan-600" },
        { icon: <FaGlobe />, value: "20+", label: "Countries Served", color: "from-green-500 to-green-600" }
    ];

    const timeline = [
        { year: 2015, icon: <FaRocket />, title: "Foundation", description: "Infocera is founded by a small team of passionate technologists with a vision to drive business growth through technology.", color: "bg-blue-500" },
        { year: 2017, icon: <FaUsers />, title: "Team Expansion", description: "Grew to 50+ professionals and expanded our service offerings to include cloud solutions and mobile development.", color: "bg-purple-500" },
        { year: 2019, icon: <FaGlobe />, title: "Global Reach", description: "Established international presence, serving clients across 10+ countries with innovative digital solutions.", color: "bg-cyan-500" },
        { year: 2021, icon: <FaBolt />, title: "Innovation Hub", description: "Launched our innovation lab, focusing on AI/ML, IoT, and cutting-edge technology solutions for enterprises.", color: "bg-pink-500" },
        { year: 2023, icon: <FaCheckCircle />, title: "Industry Recognition", description: "Recognized as a leading IT services provider with 200+ successful projects and industry awards.", color: "bg-green-500" },
        { year: 2025, icon: <FaHandshake />, title: "Strategic Partnerships", description: "Formed key partnerships with global tech leaders, expanding our capabilities in cloud, AI, and enterprise solutions.", color: "bg-indigo-500" }
    ];

    const differentiators = [
        {
            icon: <FaUsers />,
            title: "Client-First Approach",
            description: "We put our clients at the center of everything we do, ensuring their success is our priority.",
            gradient: "from-blue-500 to-blue-600"
        },
        {
            icon: <FaBolt />,
            title: "Innovation at Heart",
            description: "Innovation drives our solutions and services, keeping us ahead of the curve.",
            gradient: "from-purple-500 to-purple-600"
        },
        {
            icon: <FaCheckCircle />,
            title: "Proven Expertise",
            description: "Our team brings years of experience and technical know-how to every project.",
            gradient: "from-cyan-500 to-cyan-600"
        },
        {
            icon: <FaHandshake />,
            title: "Long-term Partnerships",
            description: "We build lasting relationships with our clients based on trust and mutual success.",
            gradient: "from-green-500 to-green-600"
        }
    ];

    const cultureValues = [
        {
            icon: <FaHeart />,
            title: "Care",
            description: "At Infocera, care is the foundation of a strong, unified team and exceptional outcomes. We believe true care begins with meaningful communication — from acknowledging presence in team channels to responding promptly and showing empathy. By staying present and supportive, we cultivate a culture of trust and connection that drives us forward together.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <FaGraduationCap />,
            title: "Learn",
            description: "We are committed to continuous learning, as it is essential to achieving our goals. We encourage our employees to cultivate a growth mindset, believing that we can always learn and improve. As limiting beliefs can prevent us from reaching our full potential, we overcome them by taking risks, trying new things, and focusing on growth and development.",
            color: "from-yellow-500 to-orange-500"
        },
        {
            icon: <FaTrophy />,
            title: "Achieve",
            description: "Having clear goals is crucial to achieving success. At Infocera, we don't tolerate problems that stand in the way of our goals. We diagnose the root causes of these problems, design plans to overcome them, and take action to bring these plans to completion. Action leads to clarity, motivation, ideas, inspiration, and increased faith in our goals, shaping who we are.",
            color: "from-orange-500 to-red-500"
        },
        {
            icon: <FaShareAlt />,
            title: "Share",
            description: "In this context, everyone's an expert in their own life experiences. At Infocera, we recognize the power of understanding, knowledge and expertise to achieve success. Our team members are encouraged to share their ideas, skills, and knowledge with colleagues and clients alike. We foster an environment of collaboration, where everyone's input is valued, and teamwork is key.",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: <FaEye />,
            title: "Transparency",
            description: "We believe in open communication and sharing information freely. Transparency builds trust, strengthens collaboration, and ensures everyone is aligned and empowered to do their best work.",
            color: "from-cyan-500 to-blue-500"
        },
        {
            icon: <FaGlobe />,
            title: "Social Responsibility",
            description: "At Infocera, we take social responsibility seriously. Being a responsible corporate citizen means giving back to the community and positively impacting society. We strive to integrate social responsibility into every aspect of our business and work to support charitable causes, and promote sustainability.",
            color: "from-green-500 to-emerald-500"
        }
    ];

    const handleNext = () => {
        setActiveYear((prev) => (prev + 1) % timeline.length);
    };

    const handlePrev = () => {
        setActiveYear((prev) => (prev - 1 + timeline.length) % timeline.length);
    };

    const handleCultureNext = () => {
        setActiveCulture((prev) => (prev + 1) % cultureValues.length);
    };

    const handleCulturePrev = () => {
        setActiveCulture((prev) => (prev - 1 + cultureValues.length) % cultureValues.length);
    };

    const handleContactClick = () => {
        onClose();
        navigate('/contact');
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                ></div>

                {/* Modal Content */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors"
                    >
                        <FaTimes size={24} />
                    </button>

                    <div className="overflow-y-auto custom-scrollbar">
                        {/* Hero Section */}
                        <div className="relative h-[300px] flex items-center justify-center text-center text-white">
                            <div className="absolute inset-0">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                    alt="About Infocera"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
                            </div>
                            <div className="relative z-10 px-6 max-w-4xl mx-auto">
                                <h2 className="text-4xl md:text-6xl font-bold mb-4 font-orbitron">About Infocera</h2>
                                <p className="text-xl md:text-2xl text-gray-200 font-light">
                                    We are a passionate team dedicated to delivering innovative technology solutions.
                                </p>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center border border-white/20 hover:bg-white/20 transition-all group"
                                    >
                                        <div className={`text-5xl mb-4 mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform`}>
                                            {stat.icon}
                                        </div>
                                        <div className="text-4xl font-bold text-white mb-2 font-orbitron">{stat.value}</div>
                                        <div className="text-sm text-white/90">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Our Story */}
                        <section className="py-16 px-6 md:px-12 bg-gray-900">
                            <div className="max-w-5xl mx-auto">
                                <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white font-orbitron text-center">Our Story</h3>
                                <div className="bg-gray-800/50 backdrop-blur-md p-8 rounded-3xl border border-gray-700">
                                    <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                                        At INFOCERA, our journey began with a simple yet powerful mission: to deliver intelligent technology solutions that make a real difference. Driven by a passionate team of engineers, developers, and domain experts, we've grown into a trusted partner for startups, small businesses, government agencies, and large enterprises alike. From custom mobile apps and web development to data visualization, IoT, and full-scale IT consulting, we craft solutions that are innovative, impactful, and people-centered.
                                    </p>
                                    <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                                        Our story is built on core values of dedication, integrity, and collaboration. We don't just solve problems — we listen, understand, and align our work with your vision. Every project we take on is an opportunity to create lasting value and build long-term partnerships. By staying ahead of the curve and delivering consistent excellence, we've earned a reputation for overcoming even the most complex challenges with empathy and expertise. At INFOCERA, we're not just building technology — we're building the future, together.
                                    </p>
                                    <p className="text-gray-300 leading-relaxed text-lg">
                                        With every new challenge, we evolve — exploring emerging technologies and embracing continuous learning. Our cross-functional teams work seamlessly to transform ideas into robust, scalable solutions. We take pride in designing experiences that are not only functional but also intuitive and engaging. Client success is our true benchmark, and we measure ours by the impact we help create. As we move forward, our story continues to grow — fueled by innovation, guided by purpose, and grounded in trust.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Timeline */}
                        <section className="py-16 px-6 md:px-12 bg-gray-800 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-5">
                                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
                            </div>

                            <div className="max-w-6xl mx-auto relative z-10">
                                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white font-orbitron text-center">Iconic Moments in Our History</h3>
                                <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                                    From a humble beginning to a global tech partner, Infocera transformed vision into reality. Empowering startups and enterprises alike, we've shaped digital journeys with innovation at every step.
                                </p>

                                {/* Timeline Years */}
                                <div className="mb-12 relative">
                                    <div className="flex justify-between items-center max-w-4xl mx-auto relative">
                                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 -translate-y-1/2"></div>
                                        {timeline.map((item, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setActiveYear(index)}
                                                className={`relative z-10 transition-all ${activeYear === index ? 'scale-125' : 'scale-100 opacity-60'
                                                    }`}
                                            >
                                                <div className={`w-4 h-4 rounded-full ${activeYear === index ? item.color : 'bg-gray-400'} shadow-lg`}></div>
                                                <div className={`mt-3 text-sm font-bold ${activeYear === index ? 'text-white' : 'text-gray-400'}`}>
                                                    {item.year}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Timeline Content */}
                                <div className="bg-white rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeYear}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex items-start gap-6"
                                        >
                                            <div className={`flex-shrink-0 w-20 h-20 rounded-2xl ${timeline[activeYear].color} flex items-center justify-center text-white text-3xl shadow-lg`}>
                                                {timeline[activeYear].icon}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-3xl font-bold text-gray-900 mb-2 font-orbitron">{timeline[activeYear].year}</h4>
                                                <h5 className="text-xl font-semibold text-gray-700 mb-3">{timeline[activeYear].title}</h5>
                                                <p className="text-gray-600 leading-relaxed">{timeline[activeYear].description}</p>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Navigation Arrows */}
                                    <div className="flex justify-between mt-8">
                                        <button
                                            onClick={handlePrev}
                                            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
                                        >
                                            <FaChevronLeft /> Previous
                                        </button>
                                        <button
                                            onClick={handleNext}
                                            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
                                        >
                                            Next <FaChevronRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* What Makes Us Different */}
                        <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600">
                            <div className="max-w-7xl mx-auto">
                                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white font-orbitron text-center">What Makes Us Different</h3>
                                <p className="text-white/90 text-center mb-12 max-w-2xl mx-auto">
                                    We focus on client-first approach, innovation, and long-term partnerships that drive success.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {differentiators.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="bg-gray-800/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-gray-800/60 transition-all group"
                                        >
                                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white text-2xl mb-4 transform group-hover:scale-110 transition-transform`}>
                                                {item.icon}
                                            </div>
                                            <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                                            <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Download Brochure Button */}
                                <div className="text-center mt-12">
                                    <button className="px-8 py-4 bg-white text-purple-700 rounded-full font-bold text-lg shadow-xl hover:bg-gray-100 transition-transform transform hover:scale-105 duration-200 inline-flex items-center gap-3">
                                        <FaDownload />
                                        Download Brochure
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Connecting Businesses */}
                        <section className="py-16 px-6 md:px-12 bg-gray-900 relative overflow-hidden">
                            <div className="max-w-7xl mx-auto">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    {/* Left Content */}
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white font-orbitron">Connecting Businesses</h3>
                                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                            We empower businesses by expertly matching them with the perfect technology solutions. This strategic alignment ensures you leverage innovation to achieve your goals and thrive in today's digital landscape.
                                        </p>

                                        {/* Global Stats */}
                                        <div className="grid grid-cols-1 gap-6">
                                            <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-colors">
                                                <div className="text-5xl font-bold text-cyan-400 mb-2 font-orbitron">20+</div>
                                                <div className="text-gray-300">Countries where we are providing the services</div>
                                            </div>
                                            <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-colors">
                                                <div className="text-5xl font-bold text-blue-400 mb-2 font-orbitron">100+</div>
                                                <div className="text-gray-300">Service clients across the globe</div>
                                            </div>
                                            <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl border border-gray-700 hover:border-purple-500 transition-colors">
                                                <div className="text-5xl font-bold text-purple-400 mb-2 font-orbitron">30+</div>
                                                <div className="text-gray-300">Specialized IT service categories</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right - World Map */}
                                    <div className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2000&auto=format&fit=crop"
                                            alt="World Map"
                                            className="w-full h-auto rounded-3xl shadow-2xl opacity-80 hover:opacity-100 transition-opacity"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-3xl"></div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Our Culture */}
                        <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                    alt="Team Background"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="max-w-6xl mx-auto relative z-10">
                                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white font-orbitron text-center">Our Culture</h3>
                                <p className="text-gray-300 text-center mb-12">
                                    Class, Care, Learn, Achieve, Share, Social Responsibility and Transparency - The pillars that define who we are.
                                </p>

                                {/* Culture Carousel */}
                                <div className="bg-gray-800/40 backdrop-blur-md rounded-3xl p-8 max-w-4xl mx-auto border border-gray-700 shadow-2xl">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeCulture}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="text-center"
                                        >
                                            <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${cultureValues[activeCulture].color} flex items-center justify-center text-white text-3xl shadow-lg`}>
                                                {cultureValues[activeCulture].icon}
                                            </div>
                                            <h4 className="text-3xl font-bold text-white mb-6 font-orbitron">{cultureValues[activeCulture].title}</h4>
                                            <p className="text-gray-300 leading-relaxed text-lg">{cultureValues[activeCulture].description}</p>
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Navigation Arrows */}
                                    <div className="flex justify-between mt-10">
                                        <button
                                            onClick={handleCulturePrev}
                                            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
                                        >
                                            <FaChevronLeft /> Previous
                                        </button>
                                        <button
                                            onClick={handleCultureNext}
                                            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
                                        >
                                            Next <FaChevronRight />
                                        </button>
                                    </div>

                                    {/* Dots Indicator */}
                                    <div className="flex justify-center gap-2 mt-6">
                                        {cultureValues.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setActiveCulture(index)}
                                                className={`w-2 h-2 rounded-full transition-all ${activeCulture === index ? 'bg-blue-400 w-8' : 'bg-gray-600'}`}
                                            ></button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Inside INFOCERA - Video Section */}
                        <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-blue-900 via-gray-900 to-black relative overflow-hidden">
                            <div className="absolute inset-0">
                                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                            </div>

                            <div className="max-w-6xl mx-auto relative z-10">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    {/* Left Content */}
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white font-orbitron">Inside INFOCERA</h3>
                                        <p className="text-xl text-cyan-300 mb-4">A Glimpse into Our Vision, Values, and Innovation</p>
                                        <p className="text-gray-300 leading-relaxed">
                                            Step into our world through this short video that captures what INFOCERA stands for — our journey, mission, and the passionate minds behind our solutions. Discover how we craft intelligent, human-centered technologies that empower businesses and shape the future.
                                        </p>
                                    </div>

                                    {/* Right - Video Player */}
                                    <div className="relative">
                                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black border-2 border-cyan-500/30">
                                            <video
                                                controls
                                                className="w-full h-auto"
                                                poster="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop"
                                            >
                                                <source src="/demovideo.mp4" type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                            {/* Play button overlay (if video is not started) */}
                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                <div className="w-20 h-20 rounded-full bg-cyan-500/80 flex items-center justify-center text-white text-3xl">
                                                    <FaPlay className="ml-1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Bottom CTA */}
                        <section className="py-20 px-6 bg-gradient-to-r from-pink-600 to-purple-600 text-center text-white">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h3>
                            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                                Let's discuss how Infocera can help transform your business with innovative technology solutions.
                            </p>
                            <button
                                onClick={handleContactClick}
                                className="px-10 py-4 bg-white text-purple-700 rounded-full font-bold text-lg shadow-xl hover:bg-gray-100 transition-transform transform hover:scale-105 duration-200"
                            >
                                Contact Us Today
                            </button>
                        </section>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default AboutModal;
