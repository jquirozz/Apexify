import { useParams } from 'react-router-dom'
import UseRaceResult from '../../../hooks/race/UseRaceResult'
import Loader from '../../../components/Loader'
import PitStops from './pitstops/PitStops'
import './PitDriver.scss'

function PitDriver () {
  const { yearId, roundId } = useParams()
  const { result, loading } = UseRaceResult({ yearId, roundId })

  if (loading) return <Loader />

  return (
    <div className='PitDriver'>
      {result.map(i => (
        <div className='wrap' key={`${yearId}_${roundId}_${i.position}`}>
          <div className='driver'>
            <section className='pos'>
              <h3>{i.position}</h3>
              <div className='gained'>{i.gained}</div>
            </section>
            <section className='name'>
              <h3>{i.givenName}</h3>
              <h2>{i.familyName}</h2>
            </section>
            <h4>{i.teamName}</h4>
          </div>
          <PitStops yearId={yearId} roundId={roundId} driverId={i.driverId} />
        </div>
      ))}
    </div>
  )
}

export default PitDriver
