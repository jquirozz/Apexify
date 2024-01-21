/* eslint-disable react/prop-types */
function CalSessions ({ sessions, date }) {
  return (
    <footer className='CalSessions'>
      {sessions?.map(({ name: sName, date: sDate }) => (
        <div className='line' key={`${date}${sName}`}>
          <h2>{sName}</h2>
          <h3>{sDate && sDate}</h3>
        </div>
      ))}
    </footer>
  )
}

export default CalSessions
