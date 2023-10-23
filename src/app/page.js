import Navbar from '@/components/navbar/Navbar'
import About from '@/components/about/About'
import Testimonial from '@/components/testimonial/Testimonial'
import NewsLetter from '@/components/newsletter/NewsLetter'
import Footer from '@/components/footer/Footer'


import React from 'react'

const page = () => {
  return (
    <div>

      <Navbar />
      <About />
      <Testimonial/>
      <NewsLetter />
      <Footer />


    </div>
  )
}

export default page