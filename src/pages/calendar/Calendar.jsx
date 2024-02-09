import { Outlet } from 'react-router-dom'
import Years from './components/Years'
import './Calendar.scss'

function Calendar () {
  return (
    <div className='Calendar'>
      <Years />
      <Outlet />
    </div>
  )
}

export default Calendar
