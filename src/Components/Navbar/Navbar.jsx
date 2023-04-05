import React from 'react'
import './Navbar.css'
import logo from './logo.svg'



const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="right">
        <ul>
          <li>Home</li>
          <li>Tools</li>
          <li>Game</li>
          <li>Notification</li>
          <li>User</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar