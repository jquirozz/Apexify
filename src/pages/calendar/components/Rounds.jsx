import { useParams, NavLink, Outlet } from 'react-router-dom'
import Dragable from '../../../components/Dragable'
import UseRounds from '../../../hooks/UseRounds'
import CountryFlag from '../../../components/miscelaneous/CountryFlag'

function CalRounds () {
  const { yearId } = useParams()
  const { rounds } = UseRounds({ yearId })

  // Array of buttons of every round from an specific year
  const mappedRounds = rounds.map(({ round, name, country }) => (
    <NavLink to={`/calendar/${yearId}/${round}`} key={round}>
      <CountryFlag country={country} />
      <h3>{name}</h3>
    </NavLink>
  ))

  return (
    <section className='RoundSection'>
      <Dragable classParam='Rounds'>{mappedRounds}</Dragable>
      <Outlet />
    </section>
  )
}

export default CalRounds
