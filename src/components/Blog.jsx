import React, { useState } from 'react'

const allInsights = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
        category: 'Artificial Intelligence',
        date: '08-06-2025',
        title: 'The Future of AI in Enterprise Solutions',
        description: 'Exploring how artificial intelligence is revolutionizing enterprise software development and creating new opportunities for businesses...',
        author: 'John Smith',
        readTime: '7 min read',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
        tags: ['AI', 'Enterprise']
    },
    {
        id: 4,
        category: 'Cloud Computing',
        date: '05-06-2025',
        title: 'Cloud Security Best Practices for Modern Businesses',
        description: 'Essential security measures and best practices for protecting your data and applications in cloud environments...',
        author: 'Emily Davis',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
        tags: ['Cloud', 'Security']
    },
    {
        id: 5,
        category: 'Web Development',
        date: '01-06-2025',
        title: 'React Development Best Practices in 2025',
        description: 'Latest trends and best practices for React development, including performance optimization and modern patterns...',
        author: 'Alex Rodriguez',
        readTime: '9 min read',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
        tags: ['React', 'JavaScript']
    },
    {
        id: 6,
        category: 'Mobile Development',
        date: '28-05-2025',
        title: 'Mobile App Development Trends to Watch',
        description: 'Discover the latest mobile app development trends that are shaping the future of mobile technology...',
        author: 'Lisa Wang',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
        tags: ['Mobile', 'Apps']
    }
]

const Blog = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')

    const categories = ['All', 'Technology', 'Software Training', 'Artificial Intelligence', 'Cloud Computing', 'Web Development', 'Mobile Development']

    const filteredInsights = allInsights.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    return (
        <div className="pt-24 pb-20 bg-gray-900 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-orbitron font-bold text-white mb-6">
                        Our <span className="text-blue-400">Insights</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                        Stay updated with the latest insights, trends, and innovations in technology and software development.
                    </p>

                    {/* Search & Filter */}
                    <div className="max-w-4xl mx-auto space-y-6">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-full text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all pl-12"
                            />
                            <svg className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        <div className="flex flex-wrap justify-center gap-3 pb-4">
                            {categories.map((cat, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${selectedCategory === cat
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700'
                                        }`}
                                >
                                    {cat.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredInsights.map((item) => (
                        <div key={item.id} className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 group shadow-lg hover:shadow-blue-500/10 border border-gray-700 hover:border-blue-500/30 flex flex-col h-full">
                            <div className="relative h-56 overflow-hidden">
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

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center text-gray-400 text-sm mb-3">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {item.date}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-6 flex-1">
                                    {item.description}
                                </p>

                                <div className="flex items-center justify-between border-t border-gray-700 pt-4 mt-auto">
                                    <div className="flex items-center">
                                        <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center text-sm text-white font-bold mr-3 border border-gray-600">
                                            {item.author.charAt(0)}
                                        </div>
                                        <div className="text-xs">
                                            <p className="text-white font-medium">{item.author}</p>
                                            <p className="text-gray-500">{item.readTime}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        {item.tags.map((tag, i) => (
                                            <span key={i} className="px-2 py-1 bg-gray-900 rounded text-xs text-gray-400">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform">
                                        Read More
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog
