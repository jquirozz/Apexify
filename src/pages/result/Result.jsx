import { useParams, Outlet } from 'react-router-dom'

import Loader from '../../components/Loader'
import NavButton from '../../components/buttons/NavButton'
import CountryBanner from '../../components/miscelaneous/CountryBanner'

import UseRaceInfo from '../../hooks/UseRaceInfo'

import './Result.scss'
import { HiMiniTrophy } from 'react-icons/hi2'
import { GiCarWheel } from 'react-icons/gi'
import { IoIosPodium } from 'react-icons/io'
import { IoCalendarClear } from 'react-icons/io5'

function Result () {
  const { yearId, roundId } = useParams()
  const { race, loading } = UseRaceInfo({ yearId, roundId })

  const MENU_BUTTONS = [
    {
      subText: 'Race',
      text: 'Result',
      url: `/result/${yearId}/${roundId}/table`,
      svg: HiMiniTrophy,
      condition: true
    },
    {
      subText: 'Fastest',
      text: 'PitStops',
      url: `/result/${yearId}/${roundId}/pitstops`,
      svg: GiCarWheel,
      condition: parseInt(race.year) >= 2010
    },
    {
      subText: 'After race',
      text: 'Standings',
      url: `/result/${yearId}/${roundId}/standing/driver`,
      svg: IoIosPodium,
      condition: true
    },
    {
      subText: `${yearId} Season`,
      text: ' Calendar',
      url: `/calendar/${yearId}`,
      svg: IoCalendarClear,
      condition: true
    }
  ]
  const filteredButtons = MENU_BUTTONS.filter(button => button.condition)

  if (loading) return <Loader />

  return (
    <div className='Result'>
      <section className='menu'>
        <div className='buttons'>
          {filteredButtons.map(({ subText, text, url, svg: SvgIcon }) => (
            <NavButton url={url} key={url}>
              <SvgIcon />
              <div className='text'>
                <h3>{subText}</h3>
                <h2>{text}</h2>
              </div>
            </NavButton>
          ))}
        </div>
      </section>
      <section className='table'>
        <CountryBanner year={race.year} country={race.country} />
        <Outlet />
      </section>
    </div>
  )
}

export default Result
