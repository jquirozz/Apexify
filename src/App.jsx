import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

import Calendar from './pages/Calendar'
import CalRounds from './components/calendar/CalRounds'
import CalRace from './components/calendar/CalRace'

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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
