import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <Link to = '/'>Spacer</Link>
            <Link to = '/about'>About Page</Link>
        </div>
    )
}

export default Navbar
