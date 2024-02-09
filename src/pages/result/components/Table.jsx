import { useParams } from 'react-router-dom'

import Loader from '../../../components/Loader'

import UseRaceResult from '../../../hooks/UseRaceResult'

import './Table.scss'
import { MdTimer } from 'react-icons/md'

function ResTable () {
  const { yearId, roundId } = useParams()
  const { result, fastestLap, loading } = UseRaceResult({ yearId, roundId })

  const setDataBefore = (element, data) => {
    if (element && data) {
      element.setAttribute('data-before', data)
    }
  }

  if (loading) return <Loader />

  return (
    <section className='ResTable'>
      {result.map(i => (
        <div className='driver' key={`${yearId}_${roundId}_${i.position}`}>
          <section
            className='pos'
            ref={element => setDataBefore(element, `From: ${i.start}`)}
          >
            <h3>{i.position}</h3>
            <div className='gained'>{i.gained}</div>
          </section>
          <section className='name'>
            <h3>{i.givenName}</h3>
            <h2>{i.familyName}</h2>
            {i.driverId === fastestLap.driverId && <MdTimer color='#80a' />}
          </section>
          <h4>{i.teamName}</h4>
          <h5 ref={element => setDataBefore(element, i.status)}>{i.finish}</h5>
        </div>
      ))}
    </section>
  )
}

export default ResTable
