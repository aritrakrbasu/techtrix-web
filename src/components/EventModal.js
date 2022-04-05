import React,{ useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar'
import automata from '../assets/automata.png'
import geeks from '../assets/geeks.png'
import flagship from '../assets/flagship.png'
import gaming from '../assets/gaming.png'
import artfact from '../assets/art fact.png'
import outofthebox from '../assets/out of the box.png'
import robotics from '../assets/robotics.png'

function EventModal() {
    let { eventName } = useParams();

    const [eventDetails,setEventDetails] = useState()

    useEffect(()=>{
        console.log(eventName)
        fetch(`https://techtrix22.herokuapp.com/events/find_by_id/${encodeURIComponent(eventName)}/`).then(res=>{
            return res.json()
        }).then((data)=>setEventDetails(data))
    },[])
  return (
    <div className='bg-solid h-100'>
            <Navbar />
            <div className='event-desc-container'>
                {
                    eventDetails ? (
                        <>
                        <div className='event-desc-left'>
                            <img src={'/assets/'+eventDetails.category+'.png'} className="lightinganim" />
                        </div>
                        <div className='event-desc-right-col'>
                            <div className='event-details-name'>
                                <p>{eventDetails.name}</p>
                            </div>
                            <div className='event-details-container'>
                                <h3>About Event:</h3>
                                <p className='event-details' dangerouslySetInnerHTML={{__html: eventDetails.desc}}/>
                            </div>
                            <div className="event-details-container">
                                <h3>Rules:</h3>
                                <p className='event-details' dangerouslySetInnerHTML={{__html: eventDetails.rules}}/>
                            </div>
                            <div className="event-details-container">
                                <h3>Coordinators:</h3>
                                <p className='event-details' dangerouslySetInnerHTML={{__html: eventDetails.contact}}/>
                            </div>
                        </div>
                        </>


                    ):(
                        null
                    )
                }
            </div>
    </div>
  )
}

export default EventModal