import React, { useRef, useState } from 'react'

const VideoShowcase = () => {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <section id="video-showcase" className="py-10 bg-gray-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 text-left animate-fade-in-left">
                        <h2 className="text-4xl sm:text-5xl font-orbitron font-bold mb-6 text-white">
                            Inside <span className="gradient-text">INFOCERA</span>
                        </h2>
                        <h3 className="text-xl sm:text-2xl text-gray-300 mb-6 font-medium">
                            A Glimpse into Our Vision, Values, and Innovation
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Step into our world through this short video that captures what INFOCERA stands for — our journey, mission, and the passionate minds behind our solutions. Discover how we craft intelligent, human-centered technologies that empower businesses and shape the future.
                        </p>
                        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                    </div>

                    {/* Video Player */}
                    <div className="w-full lg:w-1/2 animate-fade-in-right">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700 bg-gray-800 group">
                            <video
                                ref={videoRef}
                                className="w-full h-auto object-cover"
                                poster="/video-poster.jpg" // Optional: Add a poster if available, or remove
                                controls
                            >
                                <source src="/demovideo.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoShowcase
