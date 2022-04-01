import React from 'react'
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
    var  types ={
        robotics : {
            name:"Robotics",
            eventList : [
                "Need for Speed (Dual Race)",
                "Road Rash (Single Race)", 
                "Final Kick (Soccer)" ,
                "Street Fighter (Lightweight war 5 kg)",
               " Mortal Kombat (Heavyweight War 15 kg)",
                "The Legend of Zelda (Pick a Place)",
                "Pac-Man (Line Follower)",
            ],
            img : robotics
        },
        gaming : {
            name:"Gaming",
            eventList : [
                "BGMI- Mobile Gaming",
                "PES 2021 OR 2020- Mobile Gaming",
                "Valorant- Pc Gaming",
            ],
            img : gaming
        },
        flagship : {
            name:"Flagship",
            eventList : [
                "Mind’s Eye (Entrepreneurship)",
                "Extempore",
                "Drop the MIc (Standup Comedy)",
                "Coding",
            ],
            img : flagship
        },
        automata : {
            name:"Automata",
            eventList : [
                "Web and App Development",
                "Competitive Programming",
                "Machine Learning",
                "Bug Finder",
                "Hackathon"
            ],
            img : automata
        },
        outofthebox : {
            name:"Out Of The Box",
            eventList : [
                "Rubik's Cube (Puzzle Solving)",
                "Treasure Hunt",
                "One Shot",
                "Antakshari"
            ],
            img : outofthebox
        },
        geeks : {
            name:"Geek",
            eventList : [
               " Techie's 'Halo' (Domain Quiz)",
               " Word's Worth (Verbose)",
                " Matrix (Mathematics)",
                "Spell Bee",
                "SUDOKU",
               " Fandom Quiz"
            ],
            img : geeks
        },
        artfacts : {
            name:"Art Facts",
            eventList : [
                "T-shirt Painting",
                "Da Vinci's Code (Portrait Portrayal)",
                "Poster Design",
                "Thousand Faces (Face Painting)",
                "Behind the lens (Photography)",
                
            ],
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
                    <img src={types[eventCategory].img} className="lightinganim" />
                </div>
                <div className='event-desc-right'>
                    <div className='event-list-right'>
                        <p>{types[eventCategory].name}</p>
                    </div>
                    <ul>
                        {
                            types[eventCategory].eventList.map((eventName)=>{
                                return (<Link to ={`/eventsDetails/${convertToSlug(eventName)}`} ><li>{eventName}</li></Link>)
                            })
                        }
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default EventDesc