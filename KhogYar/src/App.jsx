import React from 'react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footera from './components/footer/Footera'
import ScrollToTop from './components/scrollToTop/ScrollToTop'
import Recipe from './components/recipe/Recipe'
import Contact from './components/contact/Contact'
import Home from './components/home/Home'
import BRJournal from './components/brJournal/BRJournal'
import WhatsappBtn from './components/whatsappbtn/WhatsappBtn'

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />
    
      <Navbar />
      {/* <Contact/> */}
      {/* <Recipe /> */}
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Recipe />} />
        <Route path="/journnels" element={<BRJournal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <WhatsappBtn />
      <Footera />
    </BrowserRouter>
  )
}

export default App
