import { useParams } from 'react-router-dom'
import UseRoundTeamStandings from './../../hooks/UseRoundTeamStandings'
import TableRow from './TableRow'
import Loader from '../Loader'

function DriverTable () {
  const { yearId, roundId } = useParams()
  const { teams, loading } = UseRoundTeamStandings({ yearId, roundId })

  if (loading) return <Loader />

  return (
    <div className='StandingTable'>
      {teams.map((t, key) => (
        <TableRow
          key={`${key}_${yearId}_${roundId}`}
          pos={t.position}
          fName={t.Constructor.name}
          wins={t.wins}
          points={t.points}
        />
      ))}
    </div>
  )
}

export default DriverTable
