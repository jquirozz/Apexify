import './Card.scss'

function Card ({ id, title, desc, imgPath }) {
  return (
    <div className={`Card ${id % 2 !== 0 && 'Reverse'}`}>
      <picture className='imgWrap'>
        <img src={imgPath} />
      </picture>
      <div className='info'>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default Card
