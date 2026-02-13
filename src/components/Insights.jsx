import React from 'react'

const insights = [
    {
        category: 'Technology',
        date: '17-06-2025',
        title: 'Logistics For Leaders: Smart Strategies For Vehicle Relocation',
        description: 'For business leaders and fleet managers, vehicle relocation is a recurring challenge that requires business intelligence and strategic planning...',
        author: 'Sarah Johnson',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
        tags: ['Logistics', 'Vehicle']
    },
    {
        category: 'Software Training',
        date: '12-06-2025',
        title: 'Discover Key Insights About The Automation Software Testing Course',
        description: 'Key Things To Know About Automation Software Testing Course. There has been a huge demand for automation testing professionals in recent years...',
        author: 'Michael Chen',
        readTime: '8 min read',
        image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop',
        tags: ['Testing', 'Automation']
    },
    {
        category: 'Artificial Intelligence',
        date: '08-06-2025',
        title: 'The Future of AI in Enterprise Solutions',
        description: 'Exploring how artificial intelligence is revolutionizing enterprise software development and creating new opportunities for businesses...',
        author: 'John Smith',
        readTime: '7 min read',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
        tags: ['AI', 'Enterprise']
    }
]

const Insights = () => {
    return (
        <section className="py-10 bg-gray-900 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="text-left mb-6 md:mb-0">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4">
                            <span className="text-xs font-medium text-blue-300">Blog & News</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-orbitron font-bold text-white">
                            Our <span className="text-blue-400">Insights</span>
                        </h2>
                        <div className="h-1 w-24 bg-blue-400 mt-4 rounded-full"></div>
                    </div>

                    <a href="/insights" className="inline-flex items-center px-6 py-3 border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white rounded-full transition-all duration-300 group">
                        View All Articles
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {insights.map((item, index) => (
                        <div key={index} className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 group shadow-lg hover:shadow-blue-500/10 border border-gray-700 hover:border-blue-500/30">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-blue-600/90 text-white text-xs font-bold rounded-full uppercase tracking-wider backdrop-blur-sm">
                                        {item.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center text-gray-400 text-sm mb-3">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {item.date}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {item.description}
                                </p>

                                <div className="flex items-center justify-between border-t border-gray-700 pt-4 mt-auto">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-xs text-white font-bold mr-3">
                                            {item.author.charAt(0)}
                                        </div>
                                        <div className="text-xs">
                                            <p className="text-white font-medium">{item.author}</p>
                                            <p className="text-gray-500">{item.readTime}</p>
                                        </div>
                                    </div>

                                    <a href="#" className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform">
                                        Read More
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Insights
