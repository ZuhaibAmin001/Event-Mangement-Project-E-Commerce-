import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
    <div className='Container'>
        <div className='logo'>
            <h2> </h2>
        </div>
        <div className='nav-items'>
        <div className='home'>
            <Link to=''> Home</Link>
            <Link to='/contact' className='H'>Contact</Link>
            <Link to='/about'>About us</Link>
            
        </div>
    </div>
    </div>
    
    
   </div>
  )
}

export default Navbar
