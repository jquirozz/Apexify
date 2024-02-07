import Footer from '../components/Footer'
import InfoCard from '../components/InfoCard'
import './style/Home.scss'

function Home () {
  return (
    <div className='Home'>
      <header>
        <div className='title'>
          <h1>APEXIFY</h1>
          <div className='words'>
            <h3>Drivers</h3>
            <h3>Teams</h3>
            <h3>History</h3>
          </div>
        </div>
      </header>
      <section className='information'>
        <InfoCard
          id={1}
          title='Calendar'
          desc='Full seasons calendar available now from 2024 to 1950!'
          imgPath='/img/1.jpeg'
        />
        <InfoCard
          id={2}
          title='History'
          desc='From Max Verstappen and its glorious 2023!'
          imgPath='/img/2.jpg'
        />
        <InfoCard
          id={3}
          title='Teams'
          desc='Every team in history of the sport in one site!'
          imgPath='/img/3.jpg'
        />
      </section>
      <Footer />
    </div>
  )
}

export default Home
