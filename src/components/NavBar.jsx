import { Link, NavLink } from 'react-router-dom'

import './style/NavBar.scss'
import { IoCalendarClear } from 'react-icons/io5'

function NavBar () {
  return (
    <div className='NavBar'>
      <Link to='/' className='logo'>
        <h2>HOME</h2>
      </Link>
      <section className='links'>
        <NavLink to='/calendar'>
          <IoCalendarClear />
          <h2>Calendar</h2>
        </NavLink>
      </section>
    </div>
  )
}

export default NavBar
