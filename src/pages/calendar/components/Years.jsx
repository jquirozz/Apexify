import { NavLink } from 'react-router-dom'
import Dragable from '../../../components/Dragable'

function Years () {
  // Array of buttons from 2024 to 1950
  const yearButtons = []
  for (let year = 2024; year >= 1950; year--) {
    yearButtons.push(
      <NavLink to={`/calendar/${year}`} key={year}>
        <h3>{year}</h3>
      </NavLink>
    )
  }

  return <Dragable classParam='Years'>{yearButtons}</Dragable>
}

export default Years
