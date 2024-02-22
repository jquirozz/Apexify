// MODULES
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'

// PAGES
// Calendar
import Calendar from './pages/calendar/Calendar'
import Rounds from './pages/calendar/components/Rounds'
import Race from './pages/calendar/components/Race'

// Result: Table, PitStops & After-race standings
import Result from './pages/result/Result'
import Table from './pages/result/components/Table'
import PitDriver from './pages/result/components/PitDriver'

import Standings from './pages/standings/Standings'
import DriverTable from './pages/standings/components/DriverTable'
import TeamTable from './pages/standings/components/TeamTable'

import UseNextRound from './hooks/race/UseNextRound'
import NotFound from './pages/NotFound'

import './App.scss'

function App () {
  const { year, round } = UseNextRound()

  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path='/'
            element={
              year && round ? (
                <Navigate to={`/calendar/${year}/${round}`} />
              ) : null
            }
          />
          <Route path='*' element={<NotFound />} />

          <Route path='standing/:yearId' element={<Standings />}>
            <Route path='driver' element={<DriverTable />} />
            <Route path='team' element={<TeamTable />} />
          </Route>

          <Route path='/calendar' element={<Calendar />}>
            <Route path=':yearId' element={<Rounds />}>
              <Route path=':roundId' element={<Race />} />
            </Route>
          </Route>
          <Route path='/result/:yearId/:roundId' element={<Result />}>
            <Route path='table' element={<Table />} />
            <Route path='pitstops' element={<PitDriver />} />

            <Route path='standing' element={<Standings />}>
              <Route path='driver' element={<DriverTable />} />
              <Route path='team' element={<TeamTable />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
