import { useState, useEffect } from 'react'
import { format, subDays } from 'date-fns'

import { formatTime } from '../../services/formatTime'

function UseRaceInfo ({ yearId, roundId }) {
  const [loading, setLoading] = useState(null)
  const [race, setRace] = useState({})

  useEffect(() => {
    if (yearId && roundId !== undefined) {
      fetchData({ year: yearId, round: roundId })
    }
  }, [yearId, roundId])

  const fetchData = async ({ year, round }) => {
    try {
      setLoading(true)
      const res = await fetch(`https://ergast.com/api/f1/${year}/${round}.json`)
      if (res.ok) {
        const resJson = await res.json()
        const races = resJson.MRData?.RaceTable?.Races

        const fromToday = date => {
          const current = new Date()
          const newDate = new Date(date)
          return newDate - current
        }

        if (races && races.length > 0) {
          const path = races[0]
          const info = {
            fromToday: fromToday(path.date),
            year: path.season,
            date: format(path.date, 'MM/dd'),
            time: formatTime(path.time),
            round: path.round,

            raceName: path.raceName,
            circuitId: path.Circuit?.circuitId,
            circuitName: path.Circuit?.circuitName,
            locality: path.Circuit?.Location?.locality,
            country: path.Circuit?.Location?.country,

            sessions: [
              {
                name: 'FP1',
                date: path?.FirstPractice?.date
              },
              {
                name: 'FP2',
                date: path?.SecondPractice?.date
              },
              {
                name: 'FP3',
                date: path?.ThirdPractice?.date
              },
              {
                name: 'QUALY',
                date: path?.Qualifying?.date
              },
              { name: 'SPRINT', date: path?.Sprint?.date },
              {
                name: 'RACE',
                date: path.date
              }
            ]
          }

          // Sessions format
          if (year >= 2021) {
            const filteredSessions = info.sessions.filter(
              session => session.date !== undefined
            )
            const hasSprint = filteredSessions.some(
              session => session.name === 'SPRINT'
            )
            const customOrder = filteredSessions.sort((a, b) => {
              // First, sort by date in descending order
              const dateComparison = b.date.localeCompare(a.date)
              if (dateComparison !== 0) {
                return dateComparison
              }

              // If 'SPRINT' is present, prioritize it
              if (hasSprint) {
                if (a.name === 'SPRINT') return -1
                if (b.name === 'SPRINT') return 1
              }

              // If 'QUALY' is present, prioritize it
              if (a.name === 'QUALY') return -1
              if (b.name === 'QUALY') return 1

              // If 'FP1' is present, prioritize it
              if (a.name === 'FP1') return 1
              if (b.name === 'FP1') return -1

              // Default case when names are equal or none of the special cases
              return 0
            })
            const formattedSessions = customOrder.map(session => ({
              name: session.name,
              date: format(session.date, 'MM/dd')
            }))
            info.sessions = formattedSessions
          } else if (year >= 2006 && year <= 2020) {
            const oldSessions = [
              {
                name: 'RACE',
                date: format(new Date(path.date), 'MM/dd')
              },
              {
                name: 'QUALY',
                date: format(subDays(new Date(path.date), 1), 'MM/dd')
              },
              {
                name: 'FP3',
                date: format(subDays(new Date(path.date), 1), 'MM/dd')
              },
              {
                name: 'FP2',
                date: format(subDays(new Date(path.date), 2), 'MM/dd')
              },
              {
                name: 'FP1',
                date: format(subDays(new Date(path.date), 2), 'MM/dd')
              }
            ]
            info.sessions = oldSessions
          } else {
            info.sessions = []
          }

          console.log(info)
          setRace(info)
        }
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return { race, loading }
}

export default UseRaceInfo
