import React from 'react'
import Navbar from './Navbar'
import automata from '../assets/automata.png'
import geeks from '../assets/geeks.png'
import flagship from '../assets/flagship.png'
import gaming from '../assets/gaming.png'
import artfact from '../assets/art fact.png'
import outofthebox from '../assets/out of the box.png'
import robotics from '../assets/robotics.png'
import { Link } from 'react-router-dom'

function EventsList() {
  return (
    <div className='bg-solid'>
    <Navbar />
    <center>
        <h2 className='event-section-header'>Events</h2>
    </center>
    <Link to="/events/robotics"><div className='event-list-container'>
        <div className='event-list-left'>
            <img src={robotics} className="fadeanim" />
        </div>
        <div className='event-list-right ml-drag'>
            Robotics
        </div>
    </div></Link>
    <Link to="/events/geeks"><div className='event-list-container'>
        <div className='event-list-right mr-drag'>
            <p>Geeks</p>
        </div>
        <div className='event-list-left'>
            <img src={geeks} className="fadeanim" />
        </div>
       
    </div></Link>
    <Link to="/events/flagship"><div className='event-list-container'>
        <div className='event-list-left'>
            <img src={flagship} className="fadeanim" />
        </div>
        <div className='event-list-right ml-drag'>
            Flagship
        </div>
    </div></Link>
    <Link to="/events/automata"><div className='event-list-container'>
    <div className='event-list-right mr-drag'>
            <p>Automata</p>
        </div>
        <div className='event-list-left'>
            <img src={automata} className="fadeanim" />
        </div>
       
    </div></Link>
    <Link to="/events/gaming"><div className='event-list-container'>
        <div className='event-list-left'>
            <img src={gaming} className="fadeanim" />
        </div>
        <div className='event-list-right ml-drag'>
            Gaming
        </div>
    </div></Link>
    <Link to="/events/artfacts"><div className='event-list-container'>
    <div className='event-list-right mr-drag'>
          <p>Art Facts</p> 
        </div>
        <div className='event-list-left'>
            <img src={artfact} className="fadeanim" />
        </div>
       
    </div></Link>
    <Link to="/events/outofthebox"><div className='event-list-container'>
        <div className='event-list-left'>
            <img src={outofthebox} className="fadeanim" />
        </div>
        <div className='event-list-right ml-drag'>
            Out Of The Box
        </div>
    </div></Link>
    </div>
  )
}

export default EventsList