import { About, Welcome } from './components'
import './Home.css'

export interface HomeInterface {}

const Home = () => {
  return (
    <div className="Home">
      <Welcome />
      <About />
    </div>
  )
}

export default Home
