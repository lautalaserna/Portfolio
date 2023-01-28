import { About, Skills, Welcome } from './components'
import './Home.css'

export interface HomeInterface {}

const Home = () => {
  return (
    <div className="Home">
      <Welcome />
      <About />
      <Skills/>
    </div>
  )
}

export default Home
