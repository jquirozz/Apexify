import CountDown from './../../../../components/CountDown'
import './IsPending.scss'

function IsPending ({ year, name, fromDate, date }) {
  return (
    <div className='Race IsPending'>
      <header>
        <h2>{year}</h2>
        <h1>{name}</h1>
      </header>
      <CountDown time={fromDate} />
      <footer>
        <h3>{date}</h3>
      </footer>
    </div>
  )
}

export default IsPending
