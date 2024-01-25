import { useState, useEffect } from 'react'

function UseTextParams ({ yearId, roundId }) {
  const [param, setParam] = useState({ yearText: yearId, roundText: roundId })
  const { yearText, roundText } = param

  useEffect(() => {
    setParam({ yearText: yearId, roundText: roundId })
  }, [yearId, roundId])

  return { yearText, roundText }
}

export default UseTextParams
