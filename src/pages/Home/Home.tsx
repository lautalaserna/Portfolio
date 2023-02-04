import { About, Projects, Skills, Welcome, Contact } from './components'

import './Home.css'

export interface HomeInterface {}

const Home = () => {
  return (
    <div className="Home">
      <Welcome />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
