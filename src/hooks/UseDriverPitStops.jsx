import { useState, useEffect } from 'react'

function UseDriverPitStop ({ yearId, roundId, driverId }) {
  const [pit, setPit] = useState([])
  const [loading, setLoading] = useState(null)

  useEffect(() => {
    fetchData({ year: yearId, round: roundId, driver: driverId })
  }, [yearId, roundId, driverId])

  const fetchData = async ({ year, round, driver }) => {
    try {
      setLoading(true)
      const res = await fetch(
        `https://ergast.com/api/f1/${year}/${round}/drivers/${driver}/pitstops.json`
      )
      if (res.ok) {
        const resJson = await res.json()
        const newPits = resJson.MRData.RaceTable.Races[0].PitStops
        setPit(newPits)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return { pit, loading }
}

export default UseDriverPitStop
