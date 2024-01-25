import { useState, useEffect } from 'react'

import { IoCaretUpOutline, IoCaretDownOutline } from 'react-icons/io5'
import { TiEquals } from 'react-icons/ti'

function UseRaceResult ({ yearId, roundId }) {
  const [result, setResult] = useState([])
  const [fastestLap, setFastestLap] = useState({})
  const [loading, setLoading] = useState(null)

  useEffect(() => {
    fetchData({ year: yearId, round: roundId })
  }, [yearId, roundId])

  const fetchData = async ({ year, round }) => {
    try {
      setLoading(true)
      const res = await fetch(
        `https://ergast.com/api/f1/${year}/${round}/results.json`
      )
      if (res.ok) {
        const resJson = await res.json()
        const races = resJson.MRData?.RaceTable?.Races

        if (races && races.length > 0) {
          const path = races[0]

          // RESULTS
          const finishValue = (pos, laps, points, status) => {
            if (pos === 'W') return 'WDR'
            if (pos === 'F') return 'FTQ'
            if (pos === 'N') return 'DNC'
            if (pos === 'E') return 'EXC'
            if (pos === 'D') return 'DIS'
            if (pos === 'R' && laps === '0') return 'DNS'
            if (pos === 'R' && parseInt(laps) > 0) return 'DNF'

            if (status !== 'Finished') {
              return status
            }
            return `${points} ${points === '1' ? 'pt' : 'pts'}`
          }
          const evaluateGained = (finish, start) => {
            // grid === '0' -> Starting from pits
            if (start === '0') return <IoCaretUpOutline color='#0b0' /> // Starting from pits
            const value = start - finish

            if (value > 0) return <IoCaretUpOutline color='#0b0' />
            if (value < 0) return <IoCaretDownOutline color='#b00' />
            return <TiEquals color='#15c' />
          }

          const resPath = path?.Results
          const newResult = resPath?.map(r => ({
            // Status
            position: r.position,
            gained: evaluateGained(r.position, r.grid),
            start: r.grid === '0' ? 'Pits' : r.grid,
            finish: finishValue(r.positionText, r.laps, r.points, r.status),
            status: r.status,

            // Driver
            driverId: r.Driver?.driverId,
            givenName: r.Driver?.givenName,
            familyName: r.Driver?.familyName,

            // Team
            teamId: r.Constructor.constructorId,
            teamName: r.Constructor.name,
            teamNationality: r.Constructor.nationality
          }))

          if (parseInt(year) >= 2004) {
            const newFastestLap = resPath
              ?.filter(r => {
                return r.FastestLap?.rank === '1'
              })
              ?.map(r => {
                return {
                  time: r.FastestLap?.Time?.time,
                  lap: r.FastestLap?.lap,
                  driverId: r.Driver?.driverId
                }
              })
            setFastestLap(newFastestLap[0])
            console.log(newFastestLap[0])
          }

          setResult(newResult)
        }
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return { result, fastestLap, loading }
}

export default UseRaceResult
