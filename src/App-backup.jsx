import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#0f3460] bg-grid-pattern">
            <Navbar />
            <Hero />
            <Services />
            <About />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
