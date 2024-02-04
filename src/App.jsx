import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

import Calendar from './pages/Calendar'
import CalRounds from './components/calendar/CalRounds'
import CalRace from './components/calendar/CalRace'

import RaceResult from './pages/RaceResult'
import ResTable from './components/result/ResTable'
import ResPitStops from './components/result/ResPitStops'

import Standings from './pages/Standings'
import DriverTable from './components/standing/DriverTable'
import TeamTable from './components/standing/TeamTable'

import './App.scss'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/calendar' element={<Calendar />}>
            <Route path=':yearId' element={<CalRounds />}>
              <Route path=':roundId' element={<CalRace />} />
            </Route>
          </Route>

          <Route path='/result/:yearId/:roundId' element={<RaceResult />}>
            <Route path='table' element={<ResTable />} />
            <Route path='pitstops' element={<ResPitStops />} />

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
