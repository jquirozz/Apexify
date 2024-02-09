import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import './NavMobile.scss'
import { IoMdMenu } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'

function NavMobile ({ items }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    console.log(show)
  }, [show])

  return (
    <div className='NavMobile'>
      <NavLink to='/' className='goHome'>
        <h2>APEXIFY</h2>
      </NavLink>

      {show && <IoClose fontSize={32} onClick={() => setShow(!show)} />}
      {!show && <IoMdMenu fontSize={32} onClick={() => setShow(!show)} />}

      <div className={`links ${show && 'show'}`}>
        {items.map(({ svg, text, url, key }) => (
          <NavLink to={url} key={key}>
            {svg} {text}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default NavMobile
