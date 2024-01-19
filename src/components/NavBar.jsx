import { Link, NavLink } from 'react-router-dom'
import './style/NavBar.scss'

function NavBar () {
  return (
    <div className='NavBar'>
      <Link to='/' className='logo'>
        <img src='/logos/white.png' alt='logo' />
      </Link>
      <section className='links'>
        <NavLink to='/calendar'>Calendar</NavLink>
      </section>
    </div>
  )
}

export default NavBar
