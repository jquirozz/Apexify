import { getCode } from 'country-list'
import Flag from 'react-world-flags'

function CountryFlag ({ country }) {
  if (country === 'UK') {
    return <Flag code='GB_NIR' />
  }

  if (country === 'UAE') {
    return <Flag code='AE' />
  }

  if (country === 'United States') {
    return <Flag code='USA' />
  }

  const newCode = getCode(country) || country.substring(3, -1)
  return <Flag code={newCode} fallback={<div className='unknown' />} />
}

export default CountryFlag
