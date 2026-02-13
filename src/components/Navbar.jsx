import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { servicesData } from '../data/servicesData'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '')
            const element = document.getElementById(id)
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' })
                }, 100)
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'instant' })
        }
    }, [location])

    // Map servicesData to the format expected by Navbar, enabling links
    const services = servicesData.map(service => ({
        category: service.title,
        items: service.items,
        id: service.id
    }))

    const technologiesData = [
        {
            category: "UI Design",
            items: [
                "HTML/HTML5", "CSS3", "AngularJS/JS", "AJAX/JSON",
                "jQuery/jQuery UI", "Drupal", "Joomla", "WordPress",
                "React Development", "AR/VR Development"
            ]
        },
        {
            category: "Server Side Scripting",
            items: [
                "PHP", "J2EE/J2SE/Swing/Servlet", "Spring/Struts/Hibernate",
                "JSP/JSF/ApacheCXF", "JUnit/TestNG/Mockito",
                "Microsoft Visio/Enterprise Architect", "Shell", "Perl",
                "Python", "NodeJS Development"
            ]
        },
        {
            category: "Cloud Computing",
            items: [
                "AWS Development", "Google Cloud", "Go Daddy",
                "Data Mining and Analytics"
            ]
        },
        {
            category: "Database",
            items: [
                "Database Design: Oracle", "SQL Database", "Redis", "Cassandra",
                "Database Development: MongoDB", "Database Consulting: SQL Server",
                "IoT Solutions", "Blockchain Development"
            ]
        },
        {
            category: "Web Server Technology",
            items: [
                "JBoss", "Apache", "Tomcat", "IIS"
            ]
        },
        {
            category: "Testing & Process",
            items: [
                "Software Testing", "Unit Testing", "Integration Testing",
                "System Testing", "Deployment Automation Support", "Software Process", "SDLC"
            ]
        }
    ]

    const industriesData = [
        {
            category: "Key Industries",
            items: [
                "Healthcare",
                "Finance",
                "Education",
                "E-commerce",
                "Manufacturing",
                "Retail",
                "Gaming",
                "Real Estate",
                "Automotive"
            ]
        }
    ]

    const navLinks = [
        { name: 'Home', href: '/', hasDropdown: false },
        { name: 'About Us', href: '/#about', hasDropdown: false },
        { name: 'Services', href: '/#services', hasDropdown: true, data: services },
        { name: 'Technologies', href: '/#technologies', hasDropdown: true, data: technologiesData },
        { name: 'Industries', href: '/#industries', hasDropdown: true, data: industriesData },
        { name: 'Portfolio', href: '/#portfolio', hasDropdown: false },
        { name: 'Careers', href: '/careers', hasDropdown: false },
        { name: 'Contact Us', href: '/#contact', hasDropdown: false },
    ]

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-6">
                            <span className="text-white font-orbitron font-bold text-xl">I</span>
                        </div>
                        <span className="text-2xl font-orbitron font-bold gradient-text">
                            Infocera
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6 xl:space-x-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <Link
                                    to={link.href}
                                    className="text-gray-300 hover:text-white transition-colors duration-300 font-medium flex items-center gap-1 py-6 text-sm lg:text-base whitespace-nowrap"
                                >
                                    {link.name}
                                    {link.hasDropdown && (
                                        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </Link>

                                {/* Desktop Mega Menu */}
                                {link.hasDropdown && link.data && (
                                    <div className={`absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 ${link.name === 'Industries' ? 'w-[300px]' : 'w-[800px]'} -ml-[100px] lg:-ml-[200px]`}>
                                        <div className={`bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl overflow-y-auto custom-scrollbar ${link.name === 'Industries' ? 'max-h-[60vh]' : 'grid grid-cols-3 gap-6 max-h-[80vh]'}`}>
                                            {link.data.map((category, idx) => (
                                                <div key={idx} className="space-y-3">
                                                    <Link to={link.name === 'Services' ? `/services/${category.id}` : '#'} className="block">
                                                        <h3 className="text-white font-bold text-sm uppercase tracking-wider border-b border-white/10 pb-2 hover:text-purple-400 transition-colors">
                                                            {category.category}
                                                        </h3>
                                                    </Link>
                                                    <ul className="space-y-2">
                                                        {category.items.map((item, i) => (
                                                            <li key={i}>
                                                                <Link
                                                                    to={link.name === 'Services' ? `/services/${category.id}` : '#'}
                                                                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors block hover:translate-x-1 duration-200"
                                                                >
                                                                    {item}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <Link
                            to="/login"
                            className="btn-primary text-sm"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 space-y-3 bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 px-4 max-h-[80vh] overflow-y-auto">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                {link.hasDropdown ? (
                                    <div>
                                        <button
                                            onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === link.name ? null : link.name)}
                                            className="w-full flex items-center justify-between text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2"
                                        >
                                            {link.name}
                                            <svg
                                                className={`w-4 h-4 transition-transform ${activeMobileSubmenu === link.name ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {/* Mobile Submenu */}
                                        {activeMobileSubmenu === link.name && link.data && (
                                            <div className="pl-4 space-y-4 py-2 border-l border-white/10 ml-2">
                                                {link.data.map((category, idx) => (
                                                    <div key={idx} className="space-y-2">
                                                        <h4 className="text-white text-xs font-bold uppercase tracking-wider opacity-70">
                                                            {category.category}
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {category.items.map((item, i) => (
                                                                <li key={i}>
                                                                    <a
                                                                        href="#"
                                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                                        className="block text-gray-400 hover:text-white text-sm"
                                                                    >
                                                                        {item}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        to={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2"
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <Link
                            to="/login"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block btn-primary text-center text-sm w-full mt-4"
                        >
                            Get Started
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
