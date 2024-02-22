import { Link } from 'react-router-dom'
import CountryBanner from '../../../../components/miscelaneous/CountryBanner'

import Sessions from './Sessions'

import './IsCompleted.scss'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { HiMiniTrophy } from 'react-icons/hi2'
import { BsArrowReturnLeft } from 'react-icons/bs'

function IsCompleted ({ info, winner }) {
  const { locality, country, year, date, round, circuitName, sessions } = info
  const { givenName, familyName, team } = winner

  return (
    <div className='Race IsCompleted'>
      <CountryBanner year={year} country={country} />
      <footer className='displayInfo'>
        <header>
          <section className='raceInfo'>
            <h2>{circuitName}</h2>
            <div className='locality'>
              <FaMapMarkerAlt />
              <h3>
                {locality}, {country}
              </h3>
            </div>
          </section>
          <section className='raceWinner'>
            <header>
              <h2>WINNER</h2>
              <HiMiniTrophy />
            </header>
            <div className='who'>
              <h3>
                {givenName} {familyName}
              </h3>
              <h4>{team}</h4>
            </div>
            <Link to={`/result/${year}/${round}/table`}>
              <h2>FULL RESULTS</h2>
              <BsArrowReturnLeft />
            </Link>
          </section>
        </header>
        <Sessions sessions={sessions} date={date} />
      </footer>
    </div>
  )
}

export default IsCompleted
