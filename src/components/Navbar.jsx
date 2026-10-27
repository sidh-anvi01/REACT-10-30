import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to='/' >home</Link>
        <Link to='/effect'>effect </Link>
        <Link to='/list'>list</Link>
      </nav>

    </div>
  )
}

export default Navbar
