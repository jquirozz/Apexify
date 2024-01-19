// MODULES
import { useRef } from 'react'
import { useParams, NavLink, Outlet } from 'react-router-dom'
import { useDraggable } from 'react-use-draggable-scroll'

// HOOKS
import UseRounds from './../hooks/UseRounds'

function CalRounds () {
  const ref = useRef()
  const { yearId } = useParams()
  const { events } = useDraggable(ref)
  const { rounds } = UseRounds({ year: yearId })

  const mappedRounds = rounds.map(({ round, name }) => (
    <NavLink to={`/calendar/${yearId}/${round}`} key={round}>
      <h3>{name}</h3>
    </NavLink>
  ))

  return (
    <section className='CalRounds'>
      <div className='rounds' {...events} ref={ref}>
        {mappedRounds}
      </div>
      <Outlet />
    </section>
  )
}

export default CalRounds
