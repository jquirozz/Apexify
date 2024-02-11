import NavFull from './navBar/NavFull'
import NavMobile from './navBar/NavMobile'
import UseScreenWidth from '../hooks/UseScreenWidth'
import UseCurrentYear from '../hooks/UseCurrentYear.jsx'

import './style/NavBar.scss'

function NavBar () {
  const { width } = UseScreenWidth()
  const { currentYear } = UseCurrentYear()

  const ITEMS = [
    {
      text: 'Calendar',
      url: `/calendar/${currentYear}`
    },
    {
      text: 'Standings',
      url: '/standing/current/driver'
    }
  ]

  return (
    <div className='NavBar'>
      {width > 700 ? <NavFull items={ITEMS} /> : <NavMobile items={ITEMS} />}
    </div>
  )
}

export default NavBar
