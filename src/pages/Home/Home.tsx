import { About, Projects, Skills, Welcome, Contact} from './components'
import { Marquee } from '@/components'

import './Home.css'

export interface HomeInterface {}

const Home = () => {
  return (
    <div className="Home">
      <Welcome />
      <Marquee content='About me'/>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
