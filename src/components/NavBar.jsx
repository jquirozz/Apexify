import { NavLink } from 'react-router-dom'
import './style/NavBar.scss'

function NavBar () {
  return (
    <div className='NavBar'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/calendar'>Calendar</NavLink>
    </div>
  )
}

export default NavBar
