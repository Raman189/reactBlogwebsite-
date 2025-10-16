import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Write from './Pages/Write.jsx'
import Services from './Pages/Services.jsx'
import About from './Pages/About.jsx'
import { Router } from 'lucide-react'
import Footer from './components/Footer.jsx'
import LandingPage from './Pages/LandingPage.jsx'



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/write" element={<Write />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<LandingPage />} />

      </Routes>
      <Footer />
</div>

  )
  
}

export default App

