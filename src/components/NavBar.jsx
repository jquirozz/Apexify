import NavFull from './NavFull'
import NavMobile from './NavMobile'
import UseScreenWidth from '../hooks/UseScreenWidth.jsx'

import './style/NavBar.scss'
import { FaCalendarAlt } from 'react-icons/fa'
import { IoPeople } from 'react-icons/io5'

const ITEMS = [
  {
    text: 'Calendar',
    url: '/calendar',
    svg: <FaCalendarAlt />
  },
  {
    text: 'Teams',
    url: '/',
    svg: <IoPeople />
  }
]

function NavBar () {
  const { width } = UseScreenWidth()

  return (
    <div className='NavBar'>
      {width > 700 ? <NavFull items={ITEMS} /> : <NavMobile items={ITEMS} />}
    </div>
  )
}

export default NavBar
