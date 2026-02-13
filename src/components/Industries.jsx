import React from 'react'

const Industries = () => {
    const industries = [
        "Automotive",
        "Ecommerce",
        "Education",
        "Finance",
        "Gaming",
        "Healthcare",
        "Manufacturing",
        "Real Estate",
        "Retail",
        "Logistics"
    ]

    return (
        <section className="py-10 bg-gradient-to-b from-blue-900 to-slate-900 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-orbitron font-bold mb-6 text-white">
                        Industries <span className="text-blue-400">We Serve</span>
                    </h2>
                    <div className="h-1 w-24 bg-blue-400 mx-auto mb-6 rounded-full"></div>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                        We deliver tailored solutions for a wide range of industries, helping businesses innovate and grow.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="group relative p-6 bg-blue-800/20 border border-blue-400/30 rounded-xl hover:bg-blue-600/30 hover:border-blue-400 transition-all duration-300 flex items-center justify-center h-24 sm:h-32 text-center cursor-default hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
                        >
                            <span className="text-lg sm:text-xl font-medium text-blue-100 group-hover:text-white transition-colors">
                                {industry}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Industries
