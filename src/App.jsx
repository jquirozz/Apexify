import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useParams,
  NavLink
} from 'react-router-dom'
import NavBar from './components/NavBar'
import { useEffect, useState } from 'react'

function Calendar () {
  return (
    <div>
      <h1>Calendar</h1>
      <h2>Years</h2>
      <NavLink to='/calendar/2023'>2023</NavLink>
      <NavLink to='/calendar/2024'>2024</NavLink>
      <Outlet />
    </div>
  )
}

function Rounds () {
  const { yearId } = useParams()

  useEffect(() => {
    console.log('YEAR', yearId)
  }, [yearId])

  return (
    <div>
      <h2>Rounds</h2>
      <NavLink to={`/calendar/${yearId}/1`}>Round 1</NavLink>
      <NavLink to={`/calendar/${yearId}/2`}>Round 2</NavLink>
      <Outlet />
    </div>
  )
}

function Info () {
  const { yearId, roundId } = useParams()
  const [param, setParam] = useState({ year: yearId, round: roundId })
  const { year, round } = param

  useEffect(() => {
    setParam({ year: yearId, round: roundId })
  }, [yearId, roundId, setParam])

  return (
    <div>
      <h2>
        Info: {year} / Round {round}
      </h2>
    </div>
  )
}

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/calendar' element={<Calendar />}>
            <Route path=':yearId' element={<Rounds />}>
              <Route path=':roundId' element={<Info />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
