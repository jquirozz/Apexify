/* eslint-disable react/prop-types */
import UseDriverPitStop from '../../hooks/UseDriverPitStops'
import './ResPits.scss'

function ResPits ({ yearId, roundId, driverId }) {
  const { pit } = UseDriverPitStop({ yearId, roundId, driverId })

  return (
    <div className='ResPits'>
      {pit.map(p => (
        <div
          className='pit'
          key={`${yearId}_${roundId}_${driverId}_p${p.stop}`}
        >
          <h2>{p.stop}</h2>
          <h3>Lap {p.lap}</h3>
          <h4>{p.duration}s</h4>
        </div>
      ))}
    </div>
  )
}

export default ResPits
