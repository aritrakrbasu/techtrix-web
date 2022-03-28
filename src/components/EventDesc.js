import React from 'react'
import { useParams } from 'react-router-dom';
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
            eventList : [
                "Road Rash (Single Race)", 
                "Need for Speed (Dual Race)",
                "Final Kick (Soccer)" ,
                "Street Fighter (Lightweight war 5 kg)",
               " Mortal Kombat (Heavyweight War 15 kg)",
                "The Legend of Zelda (Pick a Place)",
                "Pac-Man (Line Follower)",
            ],
            img : robotics
        },
        gaming : {
            eventList : [
                "BGMI- Mobile Gaming",
                "PES 2021 OR 2020- Mobile Gaming",
                "Valorant- Pc Gaming",
            ],
            img : gaming
        },
        flagship : {
            eventList : [
                "Mind’s Eye (Entrepreneurship)",
                "Extempore",
                "Drop the MIc (Standup Comedy)",
                "Coding",
            ],
            img : flagship
        },
        automata : {
            eventList : [
                "Web and App Developmen",
                "Competitive Programming",
                "Machine Learning",
                "Bug Finder",
                "Hackathon"
            ],
            img : automata
        },
        outofthebox : {
            eventList : [
                "Rubik's Cube (Puzzle Solving)",
                "Treasure Hunt",
                "One Shot",
                "Antakshari"
            ],
            img : outofthebox
        },
        geeks : {
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
        artfact : {
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
  return (
    <div className='bg-solid h-100'>
            <Navbar />
            <div className='event-desc-container'>
                <div className='event-desc-left'>
                    <img src={types[eventCategory].img} className="lightinganim" />
                </div>
                <div className='event-desc-right'>
                    <ul>
                        {
                            types[eventCategory].eventList.map((eventName)=>{
                                return (<li>{eventName}</li>)
                            })
                        }
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default EventDesc