import React from 'react'
import Navbar from './Navbar/Navbar'
import Welcome from './Welcome/Welcome'
import Footer from './Footer/Footer'

const Homepage = () => {
  return (
    <div className='homepage'>
        <Navbar/>
        <Welcome/>
        <Footer/>
    </div>
  )
}

export default Homepage