import React from 'react'
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <div className='sum'>
      <div className='logo' >
      Edúcate
      </div>
      <nav className='item'>
        <ul className='ul'>
        <li>
          <a href='/'>POCETNA</a>
        </li>
        <li>
          <Link to="/about-us" >O NAMA</Link>
        </li>
        <li>
          <Link to="/contact">KONTAKT</Link>
        </li>
        </ul>
     
      </nav>
      
    </div>
  )
}

export default Navigation