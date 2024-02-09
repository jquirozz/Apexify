import Card from './components/Card'
import Footer from '../../components/Footer'
import './Home.scss'

const PANEL_ARRAY = [
  {
    title: 'Calendar',
    desc: 'Stay ahead of the curve with our F1 Calendar – your ultimate guide to all the thrilling races of the Formula 1 seasons!',
    imgPath: '/img/1.jpeg'
  },
  {
    title: 'History',
    desc: 'Unearth the rich heritage and iconic moments of Formula 1 with our History section where every race tells a story.',
    imgPath: '/img/2.jpg'
  },
  {
    title: 'Teams',
    desc: "Get under the hood of Formula 1's powerhouse teams, in our Teams section where champions are made.",
    imgPath: '/img/3.jpg'
  }
]

function Home () {
  return (
    <div className='Home'>
      <header>
        <div className='title'>
          <h1>APEXIFY</h1>
          <div className='words'>
            <h3>Calendar</h3>
            <h3>History</h3>
            <h3>Teams</h3>
          </div>
        </div>
      </header>
      <section className='panels'>
        {PANEL_ARRAY.map((p, key) => (
          <Card
            key={key}
            id={key}
            title={p.title}
            desc={p.desc}
            imgPath={p.imgPath}
          />
        ))}
      </section>
      <Footer />
    </div>
  )
}

export default Home
