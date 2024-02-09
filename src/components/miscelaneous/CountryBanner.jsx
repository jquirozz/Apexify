import CountryFlag from './CountryFlag'
import './CountryBanner.scss'

function CountryBanner ({ year, country }) {
  return (
    <header className='CountryBanner'>
      <div className='text'>
        <h1>{year}</h1>
        <h2>{country}</h2>
      </div>
      {country && <CountryFlag country={country} />}
    </header>
  )
}

export default CountryBanner
