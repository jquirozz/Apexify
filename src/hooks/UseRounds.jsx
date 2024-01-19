import { useEffect, useState } from 'react'

function UseRounds ({ year }) {
  const [rounds, setRounds] = useState([])

  useEffect(() => {
    fetchRound({ year })
  }, [year])

  const fetchRound = async ({ year }) => {
    try {
      const res = await fetch(`https://ergast.com/api/f1/${year}.json`)
      if (res.ok) {
        const resJson = await res.json()
        const path = resJson.MRData.RaceTable.Races
        const raceNames = path.map(i => ({
          round: i.round,
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
