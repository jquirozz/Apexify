import { useParams, Link } from 'react-router-dom'
import UseTextParams from '../hooks/UseTextParams'
import UseRaceResult from '../hooks/UseRaceResult'
import Loader from '../components/Loader'

import './style/RaceResult.scss'
import ResTable from '../components/result/ResTable'

function RaceResult () {
  const { yearId, roundId } = useParams()
  const { yearText, roundText } = UseTextParams({ yearId, roundId })
  const { info, result, loading } = UseRaceResult({ yearId, roundId })

  if (loading) return <Loader />

  return (
    <div className='RaceResult'>
      <section className='menu'>
        <h1>
          {yearText} {roundText}
        </h1>
        <Link to='/'>Home</Link>
        <Link to='/calendar'>Calendar</Link>
      </section>
      <ResTable result={result} yearText={yearText} roundText={roundText} />
    </div>
  )
}

export default RaceResult
