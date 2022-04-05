import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar'

function EventDesc() {
    let { eventCategory } = useParams();

    const [eventList,setEventList] = useState([])

    useEffect(()=>{
        console.log(eventCategory)
        fetch(`https://techtrix22.herokuapp.com/search/search_category/${encodeURIComponent(eventCategory)}/`).then(res=>{
            return res.json()
        }).then((data)=>setEventList(data))
    },[])
  return (
    <div className='bg-solid h-100'>
            <Navbar />
            <div className='event-desc-container'>
                <div className='event-desc-left'>
                    {
                        <img src={'/assets/'+eventCategory+'-min.png'} className="lightinganim" />
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