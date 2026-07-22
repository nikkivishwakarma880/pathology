import React from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Footer from './component/Footer'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App
