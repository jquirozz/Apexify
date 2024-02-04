/* eslint-disable react/prop-types */

function TableRow ({ key, pos, gName, fName, wins, points }) {
  return (
    <div className='TableRow' key={key}>
      <h3 className='pos'>{pos}</h3>
      <div className='name'>
        {gName && <h3>{gName}</h3>}
        <h2>{fName}</h2>
      </div>
      <h4>wins: {wins}</h4>
      <h5>{points} pts</h5>
    </div>
  )
}

export default TableRow
