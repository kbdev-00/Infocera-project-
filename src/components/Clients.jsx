import React, { useState, useEffect } from 'react'

const Clients = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    // 32 Clients (30 provided + 2 placeholders)
    const clients = [
        // Slide 1 (16 clients)
        "Gifty", "Faceworks", "Accenture", "Telolight",
        "Flevartap", "Keka", "Boch", "Fily",
        "PixelSoft", "Codewave", "ClearDekho", "Park Plush",
        "Preeltrell", "Tivisa Technology", "Prompt Softech", "Truemats",

        // Slide 2 (16 clients)
        "ChargeB", "Octal IT Solution", "Techuz", "Capgemini",
        "Khatabook", "AasaanJobs", "Sifrocket", "Happay",
        "AgroStar", "Iriksan", "MindInventory", "Tech Mahindra",
        "Veloto", "Nowflots", "Flipkart", "Zomato"
    ]

    // Chunk clients into slides of 16
    const chunkSize = 16
    const slides = []
    for (let i = 0; i < clients.length; i += chunkSize) {
        slides.push(clients.slice(i, i + chunkSize))
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000) // Auto scroll every 5 seconds
        return () => clearInterval(interval)
    }, [slides.length])

    return (
        <section className="py-10 bg-gradient-to-b from-purple-900 to-indigo-950 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-orbitron font-bold mb-6 text-white">
                        Our <span className="text-purple-400">Clients</span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-6 rounded-full"></div>
                    <p className="text-lg text-purple-100 max-w-2xl mx-auto">
                        Trusted by industry leaders and innovative companies worldwide
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative max-w-7xl mx-auto">
                    <div className="overflow-hidden">
                        <div
                            className="transition-transform duration-700 ease-in-out flex"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {slides.map((slideClients, slideIndex) => (
                                <div key={slideIndex} className="w-full flex-shrink-0 px-4">
                                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 sm:gap-6">
                                        {slideClients.map((client, index) => (
                                            <div
                                                key={index}
                                                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-full h-12 flex items-center justify-center px-4 hover:bg-white/20 transition-all duration-300 group"
                                            >
                                                <span className="text-sm sm:text-base font-medium text-white/90 group-hover:text-white truncate w-full text-center">
                                                    {client}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center mt-12 gap-3">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-purple-400 w-8' : 'bg-gray-600 hover:bg-gray-500'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clients
