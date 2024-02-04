import './style/InfoCard.scss'

function InfoCard ({ id, title, desc, imgPath }) {
  return (
    <div className={`InfoCard ${id % 2 === 0 && 'ReverseCard'}`}>
      <div className='imgWrap'>
        <img src={imgPath} />
      </div>
      <div className='info'>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default InfoCard
