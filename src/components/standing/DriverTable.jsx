import { useParams } from 'react-router-dom'
import UseRoundDriverStandings from './../../hooks/UseRoundDriverStandings'
import TableRow from './TableRow'
import Loader from '../Loader'

function DriverTable () {
  const { yearId, roundId } = useParams()
  const { drivers, loading } = UseRoundDriverStandings({ yearId, roundId })

  if (loading) return <Loader />

  return (
    <div className='StandingTable'>
      {drivers.map((d, key) => (
        <TableRow
          key={`${key}_${yearId}_${roundId}`}
          pos={d.position}
          gName={d.Driver.givenName}
          fName={d.Driver.familyName}
          wins={d.wins}
          points={d.points}
        />
      ))}
    </div>
  )
}

export default DriverTable
