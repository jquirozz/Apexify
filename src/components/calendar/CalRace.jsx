/* eslint-disable multiline-ternary */
import { useParams, Link } from 'react-router-dom'

import Loader from '../Loader.jsx'
import CalSesions from './CalSessions.jsx'
import CountDown from './CountDown.jsx'

import UseRaceInfo from '../../hooks/UseRaceInfo.jsx'
import UseTextParams from '../../hooks/UseTextParams.jsx'

import './CalRace.scss'

function CalRace () {
  const { yearId: year, roundId: round } = useParams()
  const { yearText, roundText } = UseTextParams({ year, round })
  const { race, loading } = UseRaceInfo({ year, round })
  const { date, time, locality, country, circuitName, sessions, fromToday } =
    race

  if (loading) return <Loader />

  const isDone = () => {
    if (fromToday < 0) {
      return (
        <Link to={`/result/${yearText}/${roundText}`} className='results'>
          <h2>FULL RESULTS</h2>
        </Link>
      )
    }
    return (
      <div className='results'>
        <h2>NO RESULTS YET</h2>
      </div>
    )
  }

  const timeText = time !== 'Invalid Date' ? <h2>{time}</h2> : <h2>NO TIME</h2>
  const results = isDone()

  return (
    <section className='CalRace'>
      <header className='date'>
        <h1>{date}</h1>
        {timeText}
      </header>
      <section className='info'>
        <header className='round'>
          <section>
            <h3>ROUND {roundText}</h3>
            <h5>{circuitName}</h5>
            <h4>
              {locality}, {country}
            </h4>
          </section>
          {results}
        </header>
        {sessions?.length > 0 ? (
          <CalSesions sessions={sessions} date={date} />
        ) : fromToday > 0 ? (
          <CountDown time={fromToday} />
        ) : (
          <h2 className='nodata'>No sessions data available</h2>
        )}
      </section>
    </section>
  )
}

export default CalRace
