import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header>
        <div className='container p-3'>
        <NavLink to="/" className="text-decoration-none text-dark fw-bold ps-5">Home</NavLink>
        <NavLink to="/login" className="text-decoration-none text-dark fw-bold ps-5">Login</NavLink>
        <NavLink to="/signup" className="text-decoration-none text-dark fw-bold ps-5">Signup</NavLink>
    </div>
    </header>
  )
}

export default Navbar