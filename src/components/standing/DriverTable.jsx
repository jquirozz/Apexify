import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import UseRoundDriverStandings from './../../hooks/UseRoundDriverStandings'
import TableRow from './TableRow'

function DriverTable () {
  const { yearId, roundId } = useParams()
  const { drivers } = UseRoundDriverStandings({ yearId, roundId })

  useEffect(() => {
    console.log(roundId)
  }, [roundId])

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
