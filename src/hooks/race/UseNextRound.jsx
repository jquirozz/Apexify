import { useState, useEffect } from 'react'

function UseNextRound () {
  const [year, setYear] = useState(null)
  const [round, setRound] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const res = await fetch('https://ergast.com/api/f1/current/next.json')
      if (res.ok) {
        const resJson = await res.json()
        const newRound = resJson.MRData?.RaceTable?.round
        const newYear = resJson.MRData?.RaceTable?.season
        setRound(newRound)
        setYear(newYear)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return { year, round }
}

export default UseNextRound
