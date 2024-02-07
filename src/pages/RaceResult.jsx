import { useParams, Outlet, NavLink } from 'react-router-dom'

import Loader from '../components/Loader'

import UseTextParams from '../hooks/UseTextParams'
import UseRaceInfo from '../hooks/UseRaceInfo'

import './style/RaceResult.scss'
import { HiMiniTrophy } from 'react-icons/hi2'
import { GiCarWheel } from 'react-icons/gi'
import { IoIosPodium } from 'react-icons/io'
import { IoCalendarClear } from 'react-icons/io5'

function RaceResult () {
  const { yearId, roundId } = useParams()
  const { yearText } = UseTextParams({ yearId, roundId })
  const { race, loading } = UseRaceInfo({ yearId, roundId })

  const buttons = [
    {
      subText: 'Race',
      text: 'Result',
      url: `/result/${yearId}/${roundId === 'full' ? 1 : roundId}/table`,
      svg: <HiMiniTrophy />
    },
    {
      subText: 'Fastest',
      text: 'PitStops',
      url: `/result/${yearId}/${roundId === 'full' ? 1 : roundId}/pitstops`,
      svg: <GiCarWheel />
    },
    {
      subText: 'After race',
      text: 'Standings',
      url: `/result/${yearId}/${
        roundId === 'full' ? 1 : roundId
      }/standing/driver`,
      svg: <IoIosPodium />
    },
    {
      subText: 'Season',
      text: 'Calendar',
      url: `/calendar/${yearId}`,
      svg: <IoCalendarClear />
    }
  ]
  const newButtons = buttons.filter(
    b => !(b.text === 'PitStops' && parseInt(yearText) < 2010)
  )

  if (loading) return <Loader />

  return (
    <div className='RaceResult'>
      <div className='menu'>
        <section className='buttons'>
          {newButtons.map(b => (
            <NavLink to={b.url} key={b.url}>
              {b.svg}
              <div className='text'>
                <h3>{b.subText}</h3>
                <h2>{b.text}</h2>
              </div>
            </NavLink>
          ))}
        </section>
      </div>
      <div className='table'>
        <header className='race'>
          <h1>{yearText}</h1>
          <h2>{race.raceName?.replace('Grand Prix', 'GP')}</h2>
        </header>
        <Outlet />
      </div>
    </div>
  )
}

export default RaceResult
