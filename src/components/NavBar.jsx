import { Link, NavLink } from 'react-router-dom'

import './style/NavBar.scss'
import { MdCalendarToday } from 'react-icons/md'

function NavBar () {
  return (
    <div className='NavBar'>
      {/* <NavLink to='/calendar' className='navLink'>
        <MdCalendarToday />
        <h2>Calendar</h2>
      </NavLink> */}
      <Link to='/' className='logo'>
        <h2>APEXIFY</h2>
      </Link>
      <NavLink to='/calendar' className='navLink'>
        <MdCalendarToday />
        <h2>Calendar</h2>
      </NavLink>
    </div>
  )
}

export default NavBar
