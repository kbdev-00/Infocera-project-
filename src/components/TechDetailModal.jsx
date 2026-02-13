
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const TechDetailModal = ({ tech, onClose }) => {
    const navigate = useNavigate();

    // Lock body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const handleContactClick = () => {
        onClose();
        navigate('/contact');
    };

    if (!tech) return null;

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
                        <div className="relative h-[400px] flex items-center justify-center text-center text-white">
                            <div className="absolute inset-0">
                                <img
                                    src={tech.heroImage || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"}
                                    alt={tech.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90 mix-blend-multiply"></div>
                            </div>
                            <div className="relative z-10 px-6 max-w-4xl mx-auto">
                                <h2 className="text-4xl md:text-6xl font-bold mb-4 font-orbitron">{tech.title}</h2>
                                <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">{tech.subtitle}</p>
                                <button
                                    onClick={handleContactClick}
                                    className="px-8 py-3 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg transform hover:scale-105 duration-200"
                                >
                                    Start Your Web Project
                                </button>
                            </div>
                        </div>

                        {/* Features Grid */}
                        {tech.features && (
                            <section className="py-16 px-6 md:px-12 bg-gray-50">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                                    {tech.features.map((feature, index) => (
                                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                                            <div className="text-4xl mb-4 bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600">
                                                {/* Simple icon mapping or usage */}
                                                <span>{feature.icon === 'code' ? '</>' : feature.icon}</span>
                                            </div>
                                            <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Why Choose Section */}
                        {tech.whyChoose && (
                            <section className="py-16 px-6 md:px-12 bg-white">
                                <div className="max-w-7xl mx-auto text-center">
                                    <h3 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 font-orbitron">
                                        {tech.whyChoose.title}
                                    </h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        {tech.whyChoose.items.map((item, index) => (
                                            <div key={index} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-pink-200 hover:bg-pink-50 transition-colors duration-300 group">
                                                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                                    {item.icon}
                                                </div>
                                                <h4 className="font-semibold text-gray-800">{item.title}</h4>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Industries Section */}
                        {tech.industries && (
                            <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white">
                                <div className="max-w-7xl mx-auto text-center">
                                    <h3 className="text-3xl font-bold mb-10 text-gray-900 font-orbitron">Industries & Use Cases</h3>
                                    <div className="flex flex-wrap justify-center gap-4">
                                        {tech.industries.map((industry, index) => (
                                            <span key={index} className="px-6 py-2 bg-pink-100 text-pink-700 rounded-full font-medium text-sm hover:bg-pink-200 transition-colors cursor-default">
                                                {industry}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Process Section */}
                        {tech.process && (
                            <section className="py-16 px-6 md:px-12 bg-blue-50">
                                <div className="max-w-5xl mx-auto">
                                    <h3 className="text-3xl font-bold mb-12 text-center text-gray-900 font-orbitron">Our Web Design Process</h3>
                                    <div className="space-y-4">
                                        {tech.process.map((step, index) => (
                                            <div key={index} className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                                                <span className="flex-shrink-0 w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                                                    {index + 1}.
                                                </span>
                                                <span className="text-lg font-medium text-gray-800">{step}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* FAQ Section */}
                        {tech.faq && (
                            <section className="py-16 px-6 md:px-12 bg-white">
                                <div className="max-w-4xl mx-auto">
                                    <h3 className="text-3xl font-bold mb-10 text-center text-gray-900 font-orbitron">Frequently Asked Questions</h3>
                                    <div className="space-y-4">
                                        {tech.faq.map((item, index) => (
                                            <FAQItem key={index} question={item.question} answer={item.answer} />
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Bottom CTA */}
                        <section className="py-20 px-6 bg-gradient-to-r from-pink-600 to-purple-600 text-center text-white">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">{tech.cta?.title || "Ready to get started?"}</h3>
                            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">{tech.cta?.description}</p>
                            <button
                                onClick={handleContactClick}
                                className="px-10 py-4 bg-white text-purple-700 rounded-full font-bold text-lg shadow-xl hover:bg-gray-100 transition-transform transform hover:scale-105 duration-200"
                            >
                                {tech.cta?.buttonText || "Contact Us"}
                            </button>
                        </section>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 bg-white text-left focus:outline-none"
            >
                <span className="font-semibold text-gray-800 text-lg">{question}</span>
                {isOpen ? <FaChevronUp className="text-blue-500" /> : <FaChevronDown className="text-gray-400" />}
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-5 pt-0 text-gray-600 bg-white border-t border-gray-100">
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default TechDetailModal;
