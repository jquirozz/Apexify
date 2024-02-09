import { useEffect, useState } from 'react'

function UseRounds ({ yearId }) {
  const [rounds, setRounds] = useState([])

  useEffect(() => {
    fetchRound({ yearId })
  }, [yearId])

  const fetchRound = async ({ yearId }) => {
    try {
      const res = await fetch(`https://ergast.com/api/f1/${yearId}.json`)
      if (res.ok) {
        const resJson = await res.json()
        const path = resJson.MRData.RaceTable.Races
        const raceNames = path.map(i => ({
          round: i.round,
          country: i.Circuit.Location.country,
          name: i.raceName.replace('Grand Prix', '')
        }))
        setRounds(raceNames)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return { rounds }
}

export default UseRounds
