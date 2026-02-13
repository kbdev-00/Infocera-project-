import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Industries from './components/Industries'
import Clients from './components/Clients'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Stats from './components/Stats'
import Insights from './components/Insights'
import Blog from './components/Blog'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import VideoShowcase from './components/VideoShowcase'
import Careers from './components/Careers'
import Footer from './components/Footer'
import Login from './components/Login'
import ServiceDetail from './components/ServiceDetail'
import SubServiceDetail from './components/SubServiceDetail'
import AllServices from './components/AllServices'
import ChatBot from './components/ChatBot'

const MainLayout = () => (
  <>
    <Hero />
    <Services />
    <TechStack />
    <About />
    <Industries />
    <Clients />
    <Portfolio />
    <Stats />
    <Testimonials />
    <Insights />
    <Contact />
    <VideoShowcase />
  </>
)

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white font-sans selection:bg-purple-500/30 selection:text-purple-200">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/insights" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/services/:slug/:subSlug" element={<SubServiceDetail />} />
        </Routes>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  )
}

export default App

