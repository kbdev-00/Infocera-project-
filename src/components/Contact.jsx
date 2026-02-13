import React, { useState } from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        subCategory: '',
        message: ''
    })

    const servicesList = [
        "Software Products",
        "Web Design & Development",
        "Mobile Applications",
        "Online Marketing",
        "Creative Design",
        "Consulting Services",
        "Data Science",
        "Testing Services"
    ]

    const techList = [
        "Apache", "Tomcat", "Nginx", "IIS", "Caddy", "Lighttpd", // Web Server
        "Jest", "Selenium", "Git", "Jenkins", "Travis CI", "Mocha", // Testing
        "AWS", "Google Cloud", "Docker", "Azure", "Kubernetes", "Heroku", // Cloud
        "Oracle", "MongoDB", "Redis", "MySQL", "PostgreSQL", "Elasticsearch", // Database
        "HTML5", "CSS3", "AngularJS", "JavaScript", "jQuery", "WordPress", // UI
        "PHP", "Java", "Spring", "Python", "Shell", "Perl" // Server Side
    ]

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <section id="contact" className="py-20 relative bg-gray-900 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Left Column - Form (Now on Left) */}
                    <div className="bg-black/80 backdrop-blur-sm p-8 sm:p-10 rounded-3xl border border-gray-800 shadow-2xl">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-3 bg-cyan-500/10 rounded-xl">
                                <FaPaperPlane className="text-cyan-400 text-xl" />
                            </div>
                            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 font-orbitron">
                                Send us a message
                            </h3>
                        </div>
                        <p className="text-gray-400 text-sm mb-8 pl-16 -mt-4">We'd love to hear from you</p>

                        <form className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-medium text-gray-300 mb-1.5 ml-1">First Name *</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                                        placeholder=""
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-300 mb-1.5 ml-1">Last Name *</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                                        placeholder=""
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-300 mb-1.5 ml-1">Email Address *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                                    placeholder=""
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-300 mb-1.5 ml-1">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                                    placeholder=""
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-medium text-gray-300 mb-1.5 ml-1">Subject *</label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value, subCategory: '' })}
                                        className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="Services">Services</option>
                                        <option value="Technologies">Technologies</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-300 mb-1.5 ml-1">Sub Category *</label>
                                    <select
                                        name="subCategory"
                                        value={formData.subCategory}
                                        onChange={handleChange}
                                        className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all appearance-none cursor-pointer"
                                        disabled={!formData.subject}
                                    >
                                        <option value="">Select subject first</option>
                                        {formData.subject === 'Services' && servicesList.map((item, index) => (
                                            <option key={index} value={item}>{item}</option>
                                        ))}
                                        {formData.subject === 'Technologies' && techList.sort().map((item, index) => (
                                            <option key={index} value={item}>{item}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-300 mb-1.5 ml-1">Message *</label>
                                <textarea
                                    name="message"
                                    rows="3"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all resize-none"
                                    placeholder="Tell us about your project, requirements, and how we can help you..."
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/20 transform hover:-translate-y-1 transition-all duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right Column - Contact Info */}
                    <div className="space-y-8 lg:pt-10">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-500/30">
                                    <FaPhoneAlt className="text-purple-400 text-xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-white font-orbitron">Contact Information</h3>
                            </div>
                            <p className="text-gray-400 pl-16 -mt-6 mb-8">Get in touch with our team</p>
                        </div>

                        <div className="space-y-6">
                            {/* Phone */}
                            <div className="flex items-start gap-5 p-6 rounded-2xl bg-white/5 border border-gray-700/50 hover:border-cyan-500/30 transition-all group hover:bg-white/10">
                                <div className="p-3.5 bg-blue-600 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform">
                                    <FaPhoneAlt className="text-lg" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1 text-lg">Phone</h4>
                                    <p className="text-gray-300 font-mono tracking-wide">+91 8882824948</p>
                                    <p className="text-gray-500 text-xs mt-1">Reach us during business hours for prompt assistance.</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-5 p-6 rounded-2xl bg-white/5 border border-gray-700/50 hover:border-cyan-500/30 transition-all group hover:bg-white/10">
                                <div className="p-3.5 bg-purple-600 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform">
                                    <FaEnvelope className="text-lg" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1 text-lg">Email</h4>
                                    <p className="text-gray-300 font-mono tracking-wide">info@infocera.in</p>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-5 p-6 rounded-2xl bg-white/5 border border-gray-700/50 hover:border-cyan-500/30 transition-all group hover:bg-white/10">
                                <div className="p-3.5 bg-emerald-600 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform">
                                    <FaMapMarkerAlt className="text-lg" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1 text-lg">Address</h4>
                                    <p className="text-gray-300 leading-relaxed">
                                        First Floor, L29-L34, Block L<br />
                                        Connaught Place, New Delhi <br />
                                        Delhi - 110001
                                    </p>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="flex items-start gap-5 p-6 rounded-2xl bg-white/5 border border-gray-700/50 hover:border-cyan-500/30 transition-all group hover:bg-white/10">
                                <div className="p-3.5 bg-orange-600 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform">
                                    <FaClock className="text-lg" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1 text-lg">Business Hours</h4>
                                    <p className="text-cyan-400 font-medium text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                    <p className="text-cyan-200 font-medium text-sm mt-1">Sat: 10:00 AM - 2:00 PM</p>
                                    <p className="text-gray-500 text-xs mt-1">Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact
