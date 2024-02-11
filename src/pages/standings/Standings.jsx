import { useParams, NavLink, Outlet } from 'react-router-dom'
import './Standings.scss'

function Standings () {
  const { roundId } = useParams()

  return (
    <div className='Standings'>
      {roundId !== undefined ? <RoundNav /> : <YearNav />}
      <Outlet />
    </div>
  )
}

const RoundNav = () => {
  const { yearId, roundId } = useParams()

  return (
    <header>
      <NavLink to={`/result/${yearId}/${roundId}/standing/driver`}>
        <h3>Drivers Standing</h3>
      </NavLink>
      {parseInt(yearId) > 1957 && (
        <NavLink to={`/result/${yearId}/${roundId}/standing/team`}>
          <h3>Teams Standing</h3>
        </NavLink>
      )}
    </header>
  )
}

const YearNav = () => {
  const { yearId } = useParams()

  return (
    <header>
      <NavLink to={`/standing/${yearId}/driver`}>
        <h3>Drivers Standing</h3>
      </NavLink>
      {(parseInt(yearId) > 1957 || yearId === 'current') && (
        <NavLink to={`/standing/${yearId}/team`}>
          <h3>Teams Standing</h3>
        </NavLink>
      )}
    </header>
  )
}

export default Standings
