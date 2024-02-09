import UseCountDown from './../hooks/UseCountDown'
import './style/CountDown.scss'

function CountDown ({ time }) {
  const { days, hours, minutes } = UseCountDown({ time })

  return (
    <div className='CountDown'>
      <section>
        <h2>{days}</h2>
        <h3>DAYS</h3>
      </section>
      <section>
        <h2>{hours}</h2>
        <h3>HOUR</h3>
      </section>
      <section>
        <h2>{minutes}</h2>
        <h3>MINS</h3>
      </section>
    </div>
  )
}

export default CountDown
