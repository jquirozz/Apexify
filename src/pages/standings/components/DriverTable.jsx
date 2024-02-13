import { useParams } from 'react-router-dom'
import UseDriverStandings from '../../../hooks/standings/UseDriverStandings'
import TableRow from './TableRow'
import Loader from '../../../components/Loader'

function DriverTable () {
  const { yearId, roundId } = useParams()
  const { drivers, loading } = UseDriverStandings({ yearId, roundId })

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
