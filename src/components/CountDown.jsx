/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'

function CountDown ({ time }) {
  const [cd, setCd] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      const calculateTimeLeft = () => {
        if (time <= 0) {
          // Countdown has reached or passed the target time
          return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        }

        const days = Math.floor(time / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
          (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((time % (1000 * 60)) / 1000)

        return { days, hours, minutes, seconds }
      }
      setCd(calculateTimeLeft)
    }, 1000)

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval)
  }, [time])

  return (
    <section className='CountDown'>
      <div className='line'>
        <h2>DAYS</h2>
        <h3>{cd.days}</h3>
      </div>
      <div className='line'>
        <h2>HOURS</h2>
        <h3>{cd.hours}</h3>
      </div>
      <div className='line'>
        <h2>MINUTES</h2>
        <h3>{cd.minutes}</h3>
      </div>
      <div className='line'>
        <h2>SECONDS</h2>
        <h3>{cd.seconds}</h3>
      </div>
    </section>
  )
}

export default CountDown
