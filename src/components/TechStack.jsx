import React, { useState, useEffect } from 'react'
import { FaServer, FaCode, FaMobileAlt, FaCloud, FaDatabase, FaLaptopCode, FaCogs, FaJava, FaReact, FaNodeJs, FaHtml5, FaCss3, FaPhp, FaPython, FaDocker, FaAws, FaGoogle, FaMicrosoft, FaLinux, FaJenkins, FaWordpress, FaAngular } from 'react-icons/fa'
import { SiApache, SiNginx, SiKubernetes, SiHeroku, SiMysql, SiPostgresql, SiMongodb, SiRedis, SiElasticsearch, SiSelenium, SiJest, SiMocha, SiTravisci, SiGit, SiSpring, SiPerl, SiJquery } from 'react-icons/si'
import { techDetails } from '../data/techDetails'
import TechDetailModal from './TechDetailModal'

// Helper component for Tech Card
const TechCard = ({ icon, name, description, color, onLearnMore }) => (
    <div className={`p-5 rounded-2xl bg-gradient-to-br ${color} border border-white/10 flex flex-col items-start justify-between text-left group hover:scale-[1.02] transition-all duration-300 h-44 relative overflow-hidden shadow-xl`}>
        {/* Background Decorative Icon (Watermark) */}
        <div className="absolute -bottom-4 -right-4 text-7xl text-white/10 group-hover:text-white/20 transition-all duration-500 transform group-hover:scale-110 -rotate-12">
            {icon}
        </div>

        <div className="relative z-10 w-full">
            <div className="text-3xl text-white mb-3 group-hover:scale-110 transition-transform origin-left">{icon}</div>
            <div className="text-white font-bold text-lg mb-1 font-orbitron">{name}</div>
            <p className="text-white/70 text-xs leading-relaxed line-clamp-2 mb-4 group-hover:text-white/90 transition-colors">
                {description}
            </p>
        </div>

        <button
            onClick={() => onLearnMore(name)}
            className="relative z-10 text-[10px] font-bold uppercase tracking-widest bg-white/20 hover:bg-white text-white hover:text-gray-900 px-4 py-2 rounded-lg transition-all duration-300"
        >
            Learn More
        </button>
    </div>
)

const TechStack = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [selectedTech, setSelectedTech] = useState(null)

    const handleLearnMore = (techName) => {
        const details = techDetails[techName];
        if (details) {
            setSelectedTech(details);
        } else {
            console.log(`No details found for ${techName}`);
            // Optionally show a generic "Coming Soon" modal or alert
        }
    }

    const slides = [
        {
            title1: "Web Server Technology",
            items1: [
                { name: "Apache", icon: <SiApache />, description: "Widely-used open-source web server software.", color: "from-orange-500/80 to-red-600/80" },
                { name: "Tomcat", icon: <SiApache />, description: "Java servlet container and web server.", color: "from-yellow-500/80 to-orange-600/80" },
                { name: "Nginx", icon: <SiNginx />, description: "High-performance HTTP and reverse proxy server.", color: "from-green-500/80 to-emerald-600/80" },
                { name: "IIS", icon: <FaMicrosoft />, description: "Microsoft's flexible, secure web server.", color: "from-blue-500/80 to-indigo-600/80" },
                { name: "Caddy", icon: <FaServer />, description: "Automatic HTTPS web server with ease of use.", color: "from-teal-500/80 to-green-600/80" },
                { name: "Lighttpd", icon: <FaServer />, description: "Fast, secure, and flexible web server.", color: "from-gray-500/80 to-slate-600/80" },
            ],
            title2: "Testing & Process",
            items2: [
                { name: "Jest", icon: <SiJest />, description: "Delightful JavaScript Testing Framework.", color: "from-red-500/80 to-pink-600/80" },
                { name: "Selenium", icon: <SiSelenium />, description: "Automated browser testing and orchestration.", color: "from-green-500/80 to-teal-600/80" },
                { name: "Git", icon: <SiGit />, description: "Distributed version control system.", color: "from-orange-500/80 to-red-600/80" },
                { name: "Jenkins", icon: <FaJenkins />, description: "Leading open source automation server.", color: "from-gray-600/80 to-gray-800/80" },
                { name: "Travis CI", icon: <SiTravisci />, description: "Standard for continuous integration services.", color: "from-red-500/80 to-red-700/80" },
                { name: "Mocha", icon: <SiMocha />, description: "Feature-rich JavaScript test framework.", color: "from-amber-600/80 to-yellow-800/80" },
            ]
        },
        {
            title1: "Cloud Computing",
            items1: [
                { name: "AWS", icon: <FaAws />, description: "Leading global cloud computing platform.", color: "from-yellow-500/80 to-orange-600/80" },
                { name: "Google Cloud", icon: <FaGoogle />, description: "Scalable infrastructure and AI tools.", color: "from-blue-500/80 to-red-500/80" },
                { name: "Docker", icon: <FaDocker />, description: "The standard for containerization technology.", color: "from-blue-500/80 to-cyan-600/80" },
                { name: "Azure", icon: <FaMicrosoft />, description: "Comprehensive enterprise cloud services.", color: "from-blue-600/80 to-indigo-700/80" },
                { name: "Kubernetes", icon: <SiKubernetes />, description: "Orchestration for automated container deployment.", color: "from-blue-500/80 to-blue-800/80" },
                { name: "Heroku", icon: <SiHeroku />, description: "Platform as a service (PaaS) for developers.", color: "from-purple-500/80 to-indigo-700/80" },
            ],
            title2: "Database & Analytics",
            items2: [
                { name: "Oracle", icon: <FaDatabase />, description: "Multi-model database management system.", color: "from-red-600/80 to-red-900/80" },
                { name: "MongoDB", icon: <SiMongodb />, description: "NoSQL database for modern applications.", color: "from-green-500/80 to-emerald-700/80" },
                { name: "Redis", icon: <SiRedis />, description: "In-memory data structure store/cache.", color: "from-red-500/80 to-red-800/80" },
                { name: "MySQL", icon: <SiMysql />, description: "The world's most popular open source database.", color: "from-blue-500/80 to-blue-800/80" },
                { name: "PostgreSQL", icon: <SiPostgresql />, description: "Advanced, enterprise-class RDBMS.", color: "from-blue-600/80 to-indigo-800/80" },
                { name: "Elasticsearch", icon: <SiElasticsearch />, description: "Distributed search and analytics engine.", color: "from-yellow-500/80 to-yellow-700/80" },
            ]
        },
        {
            title1: "UI Design",
            items1: [
                { name: "HTML5", icon: <FaHtml5 />, description: "The standard markup language for web.", color: "from-orange-500/80 to-red-600/80" },
                { name: "CSS3", icon: <FaCss3 />, description: "Modern styling for responsive web design.", color: "from-blue-500/80 to-indigo-600/80" },
                { name: "AngularJS", icon: <FaAngular />, description: "Powerful framework for dynamic web apps.", color: "from-red-500/80 to-pink-600/80" },
                { name: "JavaScript", icon: <FaCode />, description: "High-level, interpreted programming language.", color: "from-yellow-400/80 to-yellow-700/80" },
                { name: "jQuery", icon: <SiJquery />, description: "Fast, small, feature-rich JS library.", color: "from-blue-500/80 to-blue-800/80" },
                { name: "WordPress", icon: <FaWordpress />, description: "The most popular CMS on the web.", color: "from-blue-600/80 to-indigo-700/80" },
            ],
            title2: "Server Side Scripting",
            items2: [
                { name: "PHP", icon: <FaPhp />, description: "Versatile server-side scripting language.", color: "from-indigo-500/80 to-purple-600/80" },
                { name: "Java", icon: <FaJava />, description: "Reliable language for enterprise backend.", color: "from-red-500/80 to-orange-600/80" },
                { name: "Spring", icon: <SiSpring />, description: "Application framework for the Java platform.", color: "from-green-500/80 to-emerald-600/80" },
                { name: "Python", icon: <FaPython />, description: "Interpreted language for rapid development.", color: "from-blue-500/80 to-yellow-600/80" },
                { name: "Shell", icon: <FaCode />, description: "Command-line interpreter for automation.", color: "from-gray-500/80 to-slate-700/80" },
                { name: "Perl", icon: <SiPerl />, description: "High-level, general-purpose language.", color: "from-indigo-400/80 to-purple-500/80" },
            ]
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="py-10 bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-900 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-orbitron font-bold mb-4 text-white">
                        TECHNOLOGY <span className="text-cyan-400">STACK</span>
                    </h2>
                    <div className="h-1 w-24 bg-cyan-400 mx-auto mb-6"></div>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        We leverage cutting-edge technologies to build robust, scalable, and efficient solutions across all domains.
                    </p>
                </div>

                <div className="relative">
                    {/* Carousel Content */}
                    <div className="overflow-hidden">
                        <div
                            className="transition-transform duration-700 ease-in-out flex"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {slides.map((slide, index) => (
                                <div key={index} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                                    {/* Left Group */}
                                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                                        <div className="inline-block px-4 py-1 border border-purple-400/50 rounded-full text-purple-200 mb-6 bg-purple-900/40 text-sm font-orbitron tracking-wider">
                                            {slide.title1}
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {slide.items1.map((item, i) => (
                                                <TechCard key={i} {...item} onLearnMore={handleLearnMore} />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right Group */}
                                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                                        <div className="inline-block px-4 py-1 border border-purple-400/50 rounded-full text-purple-200 mb-6 bg-purple-900/40 text-sm font-orbitron tracking-wider">
                                            {slide.title2}
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {slide.items2.map((item, i) => (
                                                <TechCard key={i} {...item} onLearnMore={handleLearnMore} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center mt-8 gap-3">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-cyan-400 w-8' : 'bg-gray-600 hover:bg-gray-500'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Tech Detail Modal */}
            <TechDetailModal
                tech={selectedTech}
                onClose={() => setSelectedTech(null)}
            />
        </section>
    )
}

export default TechStack
