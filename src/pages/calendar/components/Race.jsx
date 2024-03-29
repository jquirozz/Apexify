// Modules
import { useParams } from 'react-router-dom'

// Global components
import Loader from '../../../components/Loader'

// Components
import IsPending from './race/IsPending'
import IsCompleted from './race/IsCompleted'

// Hooks
import UseRaceInfo from '../../../hooks/race/UseRaceInfo'
import UseRaceWinner from '../../../hooks/race/UseRaceWinner'

// Style
import './Race.scss'

function CalRace () {
  const { yearId, roundId } = useParams()
  const { race, loading } = UseRaceInfo({ yearId, roundId })
  const { winner, loading: loading1 } = UseRaceWinner({ yearId, roundId })

  if (loading || loading1) return <Loader />

  if (race.fromToday < 0) {
    return <IsCompleted info={race} winner={winner} />
  } else {
    return (
      <IsPending
        year={race.year}
        name={race.raceName}
        fromDate={race.fromToday}
        date={race.date}
      />
    )
  }
}

export default CalRace
