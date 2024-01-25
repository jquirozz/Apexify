/* eslint-disable react/prop-types */

function ResTable ({ result, yearText, roundText }) {
  const setDataBefore = (element, data) => {
    if (element && data) {
      element.setAttribute('data-before', data)
    }
  }

  return (
    <section className='RaceTable'>
      <div className='content'>
        {result.map(i => (
          <div
            className='driver'
            key={`${yearText}_${roundText}_${i.position}`}
          >
            <section
              className='pos'
              ref={element => setDataBefore(element, `From: ${i.start}`)}
            >
              <h3>{i.position}</h3>
              <div className='gained'>{i.gained}</div>
            </section>
            <section className='name'>
              <h3>{i.givenName}</h3>
              <h2>{i.familyName}</h2>
            </section>
            <h4>{i.teamName}</h4>
            <h5 ref={element => setDataBefore(element, i.status)}>
              {i.finish}
            </h5>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ResTable
