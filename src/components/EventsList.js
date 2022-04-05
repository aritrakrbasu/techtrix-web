import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function EventsList() {
    const [categories,setCategories] = useState([])

    useEffect(()=>{
        fetch("https://techtrix22.herokuapp.com/categories/").then(res=>{
                return res.json()
        }).then(data=>{setCategories(data)})
    },[])
    
  return (
    <div className='bg-solid'>
    <Navbar />
    <center>
        <h2 className='event-section-header'>Categories</h2>
    </center>
    {
        categories && categories.length > 0 && categories.map((category,index)=>{

            if(index%2 === 0)
            return (
                <Link to={"/events/"+category._id.toLowerCase()} key={index}><div className='event-list-container'>
                        <div className='event-list-left'>
                            <img src={'./assets/' + category._id.toLowerCase()+'-min.png'} className="fadeanim" />
                        </div>
                        <div className='event-list-right ml-drag'>
                            {category._id}
                        </div>
                    </div></Link>
            )
            else
            return(
                <Link to={"/events/"+category._id.toLowerCase()} key={index}><div className='event-list-container'>
                    <div className='event-list-right mr-drag'>
                        <p>{category._id}</p> 
                        </div>
                        <div className='event-list-left'>
                            <img src={'./assets/' + category._id.toLowerCase()+'-min.png'} className="fadeanim" />
                        </div>
                    
                    </div></Link>
            )
        }) 
    }
    
   
    </div>
  )
}

export default EventsList