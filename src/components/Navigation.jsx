import React from 'react'
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <div className='sum'>
      <div className='logo' >
        Hello
      </div>
      <nav className='item'>
        <ul className='ul'>
        <li>
          <Link to="/">POCETNA</Link>
        </li>
        <li>
          <Link to="/about-us" >ABOUT US</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT US</Link>
        </li>
        </ul>
     
      </nav>
      
    </div>
  )
}

export default Navigation