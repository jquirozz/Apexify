// MODULES
import { useRef } from 'react'
import { useDraggable } from 'react-use-draggable-scroll'
import { NavLink, Outlet } from 'react-router-dom'

// STYLES
import './style/Calendar.scss'

function Calendar () {
  const ref = useRef()
  const { events } = useDraggable(ref)

  const yearButtons = []
  for (let year = 2024; year >= 1950; year--) {
    yearButtons.push(
      <NavLink to={`/calendar/${year}`} key={year}>
        <h3>{year}</h3>
      </NavLink>
    )
  }

  return (
    <div className='Calendar'>
      <section className='years' {...events} ref={ref}>
        {yearButtons}
      </section>
      <Outlet />
    </div>
  )
}

export default Calendar
