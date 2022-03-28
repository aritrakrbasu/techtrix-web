import React from 'react';
import './App.css';
import Home from './components/Home';
import { Routes, Route, Link } from "react-router-dom";
import Events from './components/Events';
import About from './components/About';
import EventsList from './components/EventsList';
import EventDesc from './components/EventDesc';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="events" element={<EventsList />} />
        <Route exact path="events/:eventCategory" element={<EventDesc />} />
      </Routes>
    </>
  );
}

export default App;
