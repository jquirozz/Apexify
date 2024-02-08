import './style/NotFound.scss'
import { AiOutlineStop } from 'react-icons/ai'

function NotFound () {
  return (
    <div className='NotFound'>
      <AiOutlineStop />
      <div className='text'>
        <h1>BOX BOX!</h1>
        <h2>PAGE NOT FOUND</h2>
      </div>
    </div>
  )
}

export default NotFound
