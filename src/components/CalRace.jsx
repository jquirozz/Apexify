import { useParams, Link } from 'react-router-dom'

import UseRaceInfo from '../hooks/UseRaceInfo'
import UseTextParams from '../hooks/UseTextParams'

import './style/CalRace.scss'

function CalRace () {
  const { yearId: year, roundId: round } = useParams()
  const { yearText, roundText } = UseTextParams({ year, round })
  const { race } = UseRaceInfo({ year, round })
  const { date, time, locality, country, circuitName, sessions } = race

  return (
    <section className='CalRace'>
      <header className='date'>
        <h1>{date}</h1>
        {time !== 'Invalid Date' && <h2>{time}</h2>}
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
          <Link to={`/result/${yearText}/${roundText}`}>
            <h2>FULL RESULTS</h2>
          </Link>
        </header>
        <footer className='sessions'>
          {sessions?.map(({ name: sName, date: sDate }) => (
            <div className='session' key={`${date}${sName}`}>
              <h2>{sName}</h2>
              <h3>{sDate && sDate}</h3>
            </div>
          ))}
        </footer>
      </section>
    </section>
  )
}

export default CalRace
