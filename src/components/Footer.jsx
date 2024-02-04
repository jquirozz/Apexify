import { Link } from 'react-router-dom'
import './style/Footer.scss'

function Footer () {
  return (
    <footer className='Footer'>
      <Link to='https://www.formula1.com/'>
        <img src='/logos/f1_logo.svg' alt='F1 logo' />
      </Link>
    </footer>
  )
}

export default Footer
