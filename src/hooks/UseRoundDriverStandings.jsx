import { useState, useEffect } from 'react'

function UseRoundDriverStandings ({ yearId, roundId }) {
  const [drivers, setDrivers] = useState([])
  const [loading, setLoading] = useState(null)

  useEffect(() => {
    let isMounted = true

    const fetchData = async ({ yearId, roundId }) => {
      try {
        setLoading(true)
        const res = await fetch(
          `http://ergast.com/api/f1/${yearId}/${roundId}/driverStandings.json`
        )

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`)
        }

        const resJson = await res.json()
        const newDrivers =
          resJson.MRData.StandingsTable.StandingsLists[0].DriverStandings

        if (isMounted) {
          // Only update state if the component is still mounted
          setDrivers(newDrivers)
          console.log(newDrivers)
        }
      } catch (error) {
        console.error(error)
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    if (yearId && roundId) {
      fetchData({ yearId, roundId })
    }

    // Cleanup function to set isMounted to false when component is unmounted
    return () => {
      isMounted = false
    }
  }, [yearId, roundId])

  return { drivers, loading }
}

export default UseRoundDriverStandings
