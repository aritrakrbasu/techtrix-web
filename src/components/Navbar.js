import React from 'react'
import rccLogo from '../assets/rcclogo.png'
import sideLines from '../assets/sideLines.svg'
import robot from '../assets/robot.svg'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav-container'>
        <div className='nav-logo-container'>
            <img src={rccLogo} />
        </div>
        <div className='nav-logo-menu-container'>
            <ul>
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/events">Events</Link></li>
                <li><Link to ="/about">About</Link></li>
                {/* <li>Sponsors</li> */}
            </ul>
        </div>
    </div>
  )
}

export default Navbar