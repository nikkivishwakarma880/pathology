import React from 'react'
import Hero from '../component/home/Hero'
import AboutUs from '../component/home/AboutUs'
import ContactCTA from '../component/home/ContentCTA'
import Gallery from '../component/home/Gallry'
import OurExpert from '../component/home/OurExpert'
import Testimonials from '../component/home/Testimonials'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <ContactCTA />
      <Gallery />
      <OurExpert />
      <Testimonials />
      
    </div>
  )
}

export default Home
