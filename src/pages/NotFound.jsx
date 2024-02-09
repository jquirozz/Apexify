import './NotFound.scss'
import { MdDangerous } from 'react-icons/md'

function NotFound () {
  return (
    <div className='NotFound'>
      <MdDangerous />
      <div className='text'>
        <h1>BOX BOX!</h1>
        <h2>PAGE NOT FOUND</h2>
      </div>
    </div>
  )
}

export default NotFound
