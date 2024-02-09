import './Sessions.scss'

function CalSessions ({ sessions, date }) {
  return (
    <footer className='Sessions'>
      {sessions?.map(({ name: sName, date: sDate }) => (
        <div className='session' key={`${date}${sName}`}>
          <h2>{sName}</h2>
          <h3>{sDate && sDate}</h3>
        </div>
      ))}
    </footer>
  )
}

export default CalSessions
