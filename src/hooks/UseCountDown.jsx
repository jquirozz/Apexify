import { useEffect, useState } from 'react'
import {
  toDays,
  toHours,
  toMinutes,
  toSeconds
} from '../services/transformFromMilis'

function UseCountDown ({ time }) {
  const [cd, setCd] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      if (time <= 0) {
        // Countdown has reached the target time
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      const days = toDays(time)
      const hours = toHours(time)
      const minutes = toMinutes(time)
      const seconds = toSeconds(time)

      return { days, hours, minutes, seconds }
    }
    setCd(calculateTimeLeft)
  }, [time])

  return {
    days: cd.days,
    hours: cd.hours,
    minutes: cd.minutes,
    seconds: cd.seconds
  }
}

export default UseCountDown
