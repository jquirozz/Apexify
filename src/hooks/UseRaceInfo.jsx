import { useState, useEffect } from 'react'
import { format, subDays } from 'date-fns'

import { formatDate } from '../services/formatDate'
import { formatTime } from '../services/formatTime'

function UseRaceInfo ({ year, round }) {
  const [race, setRace] = useState({})

  useEffect(() => {
    fetchData({ year, round })
  }, [year, round])

  const fetchData = async ({ year, round }) => {
    try {
      const res = await fetch(`https://ergast.com/api/f1/${year}/${round}.json`)
      if (res.ok) {
        const resJson = await res.json()
        const races = resJson.MRData?.RaceTable?.Races

        if (races && races.length > 0) {
          const path = races[0]
          const info = {
            date: formatDate(path.date),
            time: formatTime(path.time),

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
              { name: 'SPRINT', date: path?.Sprint?.date }
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
              date: formatDate(session.date)
            }))
            info.sessions = formattedSessions
          } else {
            const oldSessions = [
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
          }

          console.log(info)
          setRace(info)
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  return { race }
}

export default UseRaceInfo
