import { useEffect, useState } from 'react'

function UseScreenWidth () {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleWith () {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWith)
    return () => {
      window.removeEventListener('resize', handleWith)
    }
  }, [])

  return { width }
}

export default UseScreenWidth
