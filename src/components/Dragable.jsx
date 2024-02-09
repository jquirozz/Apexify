import { useRef } from 'react'
import { useDraggable } from 'react-use-draggable-scroll'
import './style/Dragable.scss'

// eslint-disable-next-line react/prop-types
function Dragable ({ children, classParam }) {
  const ref = useRef()
  const { events } = useDraggable(ref)

  return (
    <div className={`Dragable ${classParam}`} {...events} ref={ref}>
      {children}
    </div>
  )
}

export default Dragable
