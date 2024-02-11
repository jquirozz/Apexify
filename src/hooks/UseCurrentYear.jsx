import { useEffect, useState } from 'react'

function UseCurrentYear () {
  const [currentYear, setCurrentYear] = useState()

  useEffect(() => {
    const newDate = new Date().getFullYear()
    setCurrentYear(newDate)
  }, [])

  return { currentYear }
}

export default UseCurrentYear
