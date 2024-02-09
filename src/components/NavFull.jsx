import { NavLink } from 'react-router-dom'

import './NavFull.scss'

function NavFull ({ items }) {
  return (
    <div className='NavFull'>
      <NavLink to='/' className='goHome'>
        <h2>APEXIFY</h2>
      </NavLink>
      <div className='links'>
        {items.map(({ svg, text, url, key }) => (
          <NavLink to={url} key={key}>
            {svg} {text}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default NavFull
