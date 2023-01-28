import { About, Skills, Welcome } from './components'
import divider from '@/assets/divider.png'
import './Home.css'

export interface HomeInterface {}

const Home = () => {
  return (
    <div className="Home">
      <Welcome />
      <img className='divider' src={divider}/>
      <About />
      <Skills/>
    </div>
  )
}

export default Home
