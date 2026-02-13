import React from 'react'

const About = () => {
    const features = [
        {
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ), // Lightbulb/Spark for Innovation
            title: 'Innovation',
            description: 'Creative Solutions, Unified Systems',
            color: 'from-blue-500/20 to-cyan-500/20',
            iconColor: 'text-blue-400'
        },
        {
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ), // Shield for Secure & Reliable
            title: 'Secure & Reliable',
            description: 'Enterprise-grade security',
            color: 'from-purple-500/20 to-indigo-500/20',
            iconColor: 'text-purple-400'
        },
        {
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ), // Clock for 24/7 Support
            title: '24/7 Support',
            description: 'Round-the-clock assistance',
            color: 'from-green-500/20 to-emerald-500/20',
            iconColor: 'text-green-400'
        },
        {
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ), // People for Expert Team
            title: 'Expert Team',
            description: 'Industry professionals',
            color: 'from-pink-500/20 to-rose-500/20',
            iconColor: 'text-pink-400'
        },
    ]

    return (
        <section id="about" className="py-10 sm:py-16 relative bg-gray-900/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4">
                        <span className="text-sm font-medium text-blue-300">About Us</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-orbitron font-bold mb-6">
                        Transforming Ideas Into{' '}
                        <span className="gradient-text">Digital Reality</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        At Infocera, we are passionate about leveraging technology to solve complex business challenges. With over a decade of experience, we've helped hundreds of companies achieve their digital transformation goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-2xl bg-gradient-to-br ${feature.color} border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300 group`}
                        >
                            <div className={`${feature.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About
