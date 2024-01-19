import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { formatDate } from '../services/formatDate'

import './style/CalRace.scss'

function CalRace () {
  const { yearId: year, roundId: round } = useParams()

  // To show it on screen
  const [param, setParam] = useState({ yearText: year, roundText: round })
  const { yearText, roundText } = param
  useEffect(() => {
    setParam({ yearText: year, roundText: round })
  }, [year, round, setParam])

  useEffect(() => {
    fetchData({ year, round })
  }, [year, round])

  const [race, setRace] = useState({})
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
            time: path.time,

            circuitId: path.Circuit?.circuitId,
            circuitName: path.Circuit?.circuitName,
            locality: path.Circuit?.Location?.locality,
            country: path.Circuit?.Location?.country,

            sessions: [
              { name: 'FP1', date: formatDate(path?.FirstPractice?.date) },
              { name: 'FP2', date: formatDate(path?.SecondPractice?.date) },
              { name: 'FP3', date: formatDate(path?.ThirdPractice?.date) },
              { name: 'SPRINT', date: formatDate(path?.Sprint?.date) },
              { name: 'QUALY', date: formatDate(path?.Qualifying?.date) }
            ]
          }
          setRace(info)
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    console.log(race)
  }, [race])

  return (
    <section className='CalRace'>
      <h2>
        Info test: {yearText} / Round {roundText}
      </h2>
    </section>
  )
}

export default CalRace
