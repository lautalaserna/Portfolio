import { About, Projects, Skills, Welcome, Contact, Footer } from './components'
import { Marquee } from '@/components'

import './Home.css'

export interface HomeInterface {}

const Home = () => {
  return (
    <div className="Home">
      <Welcome />
      <Marquee content='About Me' baseVelocity={1.5}/>
      <About />
      <Skills />
      <Marquee content='MY PORTFOLIO' baseVelocity={1.5}/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
