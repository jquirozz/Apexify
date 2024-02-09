import { useState, useEffect } from 'react'

function UseRaceWinner ({ yearId, roundId }) {
  const [loading, setLoading] = useState(null)
  const [winner, setWinner] = useState({})

  useEffect(() => {
    if (yearId && roundId) {
      fetchData({ year: yearId, round: roundId })
    }
  }, [yearId, roundId])

  const fetchData = async ({ year, round }) => {
    try {
      setLoading(true)
      const res = await fetch(
        `https://ergast.com/api/f1/${year}/${round}/results/1.json`
      )
      if (res.ok) {
        const resJson = await res.json()
        const races = resJson.MRData?.RaceTable?.Races
        const path = races[0].Results[0]
        const newWinner = {
          id: path.Driver.driverId,
          givenName: path.Driver.givenName,
          familyName: path.Driver.familyName,
          code: path.Driver.code,
          team: path.Constructor.name,
          teamId: path.Constructor.constructorId
        }
        setWinner(newWinner)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return { winner, loading }
}

export default UseRaceWinner
