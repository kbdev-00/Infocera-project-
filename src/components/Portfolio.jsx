import React from 'react'

const Portfolio = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            category: 'Web Development',
            description: 'A modern e-commerce solution with real-time inventory management and payment integration.',
            image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop',
            tags: ['React', 'Node.js', 'MongoDB'],
        },
        {
            title: 'Healthcare Mobile App',
            category: 'Mobile Development',
            description: 'Patient management system with appointment scheduling and telemedicine features.',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
            tags: ['React Native', 'Firebase', 'AI'],
        },
        {
            title: 'Cloud Migration',
            category: 'Cloud Solutions',
            description: 'Enterprise-level cloud migration from on-premise to AWS with zero downtime.',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
            tags: ['AWS', 'Docker', 'Kubernetes'],
        },
        {
            title: 'AI Analytics Dashboard',
            category: 'AI & ML',
            description: 'Real-time analytics platform powered by machine learning algorithms.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
            tags: ['Python', 'TensorFlow', 'React'],
        },
        {
            title: 'Security Audit System',
            category: 'Cybersecurity',
            description: 'Comprehensive security assessment and monitoring platform for enterprises.',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
            tags: ['Security', 'Monitoring', 'Compliance'],
        },
        {
            title: 'Business Intelligence Tool',
            category: 'Data Analytics',
            description: 'Custom BI solution for data visualization and predictive analytics.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
            tags: ['Power BI', 'SQL', 'Python'],
        },
    ]

    const [showAll, setShowAll] = React.useState(false)
    const displayedProjects = showAll ? projects : projects.slice(0, 3)

    return (
        <section id="portfolio" className="py-10 sm:py-16 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full mb-4">
                        <span className="text-sm font-medium text-pink-300">Our Work</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-orbitron font-bold mb-6">
                        Featured{' '}
                        <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Explore our portfolio of successful projects that showcase our expertise and commitment to excellence.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedProjects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 bg-purple-500/90 backdrop-blur-sm rounded-full text-xs font-medium">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4 text-sm">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* View Project Link */}
                                <button className="inline-flex items-center gap-2 text-purple-400 font-medium text-sm group-hover:text-purple-300 transition-colors">
                                    View Project
                                    <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="inline-flex items-center px-8 py-3 btn-secondary rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                        {showAll ? 'Show Less Projects' : 'View All Projects'}
                        <svg className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
