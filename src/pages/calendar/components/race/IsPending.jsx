import CountDown from './../../../../components/CountDown'
import './IsPending.scss'

function IsPending ({ year, name, date }) {
  return (
    <div className='Race IsPending'>
      <header>
        <h2>{year}</h2>
        <h1>{name}</h1>
      </header>
      <CountDown time={date} />
    </div>
  )
}

export default IsPending
