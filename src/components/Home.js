import React from 'react'
import logo from '../assets/logo.png'
import techtrix2020 from '../assets/logo (1).png'
import Navbar from './Navbar'
function Home() {
  return (
<>
    <Navbar />
    <div className='intro-section'>
        <img src={logo} className="intro-logo" />
        <img src={techtrix2020}  className="intro-event-name"/>
        <div className='map-container'>
                <a href='https://goo.gl/maps/ffPvC7NbVnGHHh3QA' target='_blank'>
                    <div className='map-container-conver'>
                        <h4>Visit Now</h4>
                    </div>
                </a>
        </div>
    </div>
</>
  )
}

export default Home