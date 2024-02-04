import { useState, useEffect } from 'react'

function UseRoundDriverStandings ({ yearId, roundId }) {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(null)

  useEffect(() => {
    let isMounted = true

    const fetchData = async ({ url }) => {
      try {
        setLoading(true)
        const res = await fetch(url)

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`)
        }

        const resJson = await res.json()
        const newTeams =
          resJson.MRData.StandingsTable.StandingsLists[0].ConstructorStandings

        if (isMounted) {
          // Only update state if the component is still mounted
          setTeams(newTeams)
          console.log(newTeams)
        }
      } catch (error) {
        console.error(error)
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    if (yearId && roundId !== undefined) {
      if (roundId === 'full') {
        const url = `http://ergast.com/api/f1/${yearId}/constructorStandings.json`
        fetchData({ url })
      } else {
        const url = `http://ergast.com/api/f1/${yearId}/${roundId}/constructorStandings.json`
        fetchData({ url })
      }
    }

    // Cleanup function to set isMounted to false when component is unmounted
    return () => {
      isMounted = false
    }
  }, [yearId, roundId])

  return { teams, loading }
}

export default UseRoundDriverStandings
