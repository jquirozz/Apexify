import { useParams, NavLink, Outlet } from 'react-router-dom'
import './Standings.scss'

function Standings () {
  const { yearId, roundId } = useParams()

  return (
    <div className='Standings'>
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
      <Outlet />
    </div>
  )
}

export default Standings
