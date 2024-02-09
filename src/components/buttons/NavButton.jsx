import { NavLink } from 'react-router-dom'
import './NavButton.scss'

function NavButton ({ url, children }) {
  return <NavLink className='NavButton' to={url}>{children}</NavLink>
}

export default NavButton
