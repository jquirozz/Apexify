import { useState, useEffect } from 'react'

function UseTextParams ({ year, round }) {
  const [param, setParam] = useState({ yearText: year, roundText: round })
  const { yearText, roundText } = param

  useEffect(() => {
    setParam({ yearText: year, roundText: round })
  }, [year, round])

  return { yearText, roundText }
}

export default UseTextParams
