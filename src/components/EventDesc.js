import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar'
import automata from '../assets/automata.png'
import geeks from '../assets/geeks.png'
import flagship from '../assets/flagship.png'
import gaming from '../assets/gaming.png'
import artfact from '../assets/art fact.png'
import outofthebox from '../assets/out of the box.png'
import robotics from '../assets/robotics.png'

function EventDesc() {
    let { eventCategory } = useParams();

    const [eventList,setEventList] = useState([])

    useEffect(()=>{
        console.log(eventCategory)
        fetch(`https://techtrix22.herokuapp.com/search/search_category/${encodeURIComponent(eventCategory)}/`).then(res=>{
            return res.json()
        }).then((data)=>setEventList(data))
    },[])

    var  types ={
        robotics : {
            name:"Robotics",
            img : robotics
        },
        gaming : {
            name:"Gaming",
            img : gaming
        },
        flagship : {
            name:"Flagship",
            img : flagship
        },
        automata : {
            name:"Automata",
            img : automata
        },
        outofthebox : {
            name:"Out Of The Box",
            img : outofthebox
        },
        geeks : {
            name:"Geek",
            img : geeks
        },
        artfacts : {
            name:"Art Facts",
            img : artfact
        },
    }

    function convertToSlug(Text) {
  return Text.toLowerCase()
             .replace(/ /g, '-')
             .replace(/[^\w-]+/g, '');
}
  return (
    <div className='bg-solid h-100'>
            <Navbar />
            <div className='event-desc-container'>
                <div className='event-desc-left'>
                    {
                        <img src={'/assets/'+eventCategory+'.png'} className="lightinganim" />
                    }
                    
                </div>
                <div className='event-desc-right'>
                    <div className='event-list-right'>
                        <p>{eventList && eventList.length > 0 && eventList[0].category}</p>
                    </div>
                    <ul>
                        {eventList && eventList.length > 0 && eventList.map(event =>{
                            return (<Link to ={`/eventsDetails/${event._id}`} ><li>{event.name}</li></Link>)
                        })}
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default EventDesc