import React from 'react'
import logo from '../assets/logo.png'
import sideLines from '../assets/sideLines.svg'
import robot from '../assets/robot.svg'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Events() {
  return (
<div className='bg-solid'>
    <Navbar />
    <center>
        <h2 className='event-section-header'>Events</h2>
    </center>
    <div className='automata-container'>
        <div className='automata-container-left'>
            Automata
        </div>
        <div className='automata-container-right'>
            <ul>
                <li className='glitch' data-text="Web and App Development">Web and App Development</li>
                <li className='glitch' data-text="Bug Finder">Bug Finder</li>
                <li className='glitch' data-text="Pseudo Code/ Pattern Printing">Pseudo Code/ Pattern Printing</li>
                <li className='glitch' data-text="Competitive Programming">Competitive Programming</li>
                <li className='glitch' data-text="Hackathon">Hackathon</li>
                <li className='glitch' data-text="Machine Learning">Machine Learning</li>
            </ul>
        </div>
    </div>
    <div className='flying-saucer'>
        <div className='flying-saucer-heading'>
            Out of the Box
        </div>
        <div className='flying-saucer-menu-container'>
        <ul>
            <li className='glitch' data-text="Rubik's Cube">Rubik's Cube</li>
            <li className='glitch' data-text="Treasure Hunt">Treasure Hunt</li>
        </ul>
        <ul>
            <li className='glitch' data-text="One Shot">One Shot</li>
            <li className='glitch' data-text="Antakshari">Antakshari</li>
        </ul>
        </div>
    </div>
    <div className='artfacts-container'>
        <div className='artifacts-left-container'>
            <img src={sideLines} />
        </div>
        <div className='artifacts-right-container'>
            <div className='artifacts-heading'>
            Art Facts
            </div>
            <ul>
                <li className='glitch' data-text="T-shirt Painting">T-shirt Painting</li>
                <li className='glitch' data-text="Da Vinci's Code">Da Vinci's Code </li>
                <li className='glitch' data-text="Poster Design">Poster Design</li>
                <li className='glitch' data-text="Thousand Faces">Thousand Faces</li>
            </ul>
        </div>
    </div>
    <div className='scifi-container'>
        <div className='scifi-left-container'>
            <div className='artifacts-heading'>
                Geeks
            </div>
            <ul>
                <li className='glitch' data-text="Word's Worth">Word's Worth </li>
                <li className='glitch' data-text="Techie's 'Halo'">	Techie's 'Halo' </li>
                <li className='glitch' data-text="Fandom Quiz">	Fandom Quiz</li>
                <li className='glitch' data-text="Matrix">	Matrix </li>
                <li className='glitch' data-text="Spell Bee">	Spell Bee</li>
                <li className='glitch' data-text="SUDOKU">	SUDOKU</li>
            </ul>
        </div>
        <div className='scifi-right-container'>
            <div className='artifacts-heading'>
                Flagship
            </div>
            <ul>
                <li className='glitch' data-text="Mind’s Eye">Mind’s Eye</li>
                <li className='glitch' data-text="Extempore">Extempore</li>
                <li className='glitch' data-text="Drop the MIC">Drop the MIC</li>
            </ul>
        </div>
    </div>
    <div className='robotics-container'>
        <div className='robotics-left-container'>
            <img src ={robot} />
        </div>
        <div className='robotics-right-container'>
            <div className='artifacts-heading'>
                Robotics 
            </div>
            <ul>
                <li className='glitch' data-text="Road Rash">Road Rash</li>
                <li className='glitch' data-text="Need for Speed">Need for Speed </li>
                <li className='glitch' data-text="Final Kick">Final Kick</li>
                <li className='glitch' data-text="Street Fighter">Street Fighter</li>
                <li className='glitch' data-text="Mortal Kombat">Mortal Kombat</li>
                <li className='glitch' data-text="The Legend of Zelda">The Legend of Zelda</li>
                <li className='glitch' data-text="pac-man">Pac-Man</li>
                <li className='glitch' data-text="Maze Follower">Maze Follower </li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default Events