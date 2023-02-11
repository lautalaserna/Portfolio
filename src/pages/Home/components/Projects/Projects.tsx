import { ThemeContext } from '@/context'
import React, { useContext } from 'react'
import './Projects.css'

export interface ProjectsInterface {}

const Projects: React.FC<ProjectsInterface> = () => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <section className={`Projects ${darkMode ? 'darkmode' : ''}`} id="projects">
      <div className="content"></div>
      <h1>Check out my Projects</h1>
      <p className="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente optio consequatur tenetur culpa, doloremque
        similique asperiores nam blanditiis. Iste magnam delectus placeat dicta et id labore at, cupiditate excepturi
        nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequatur iste dolore blanditiis, autem
        vel, nulla voluptatem asperiores optio tempora deleniti in eum, eos delectus doloribus hic adipisci fugiat
        inventore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, quo temporibus assumenda voluptate
        tempore accusantium! Hic ut iure totam vel natus dignissimos eius odio voluptatum? Reprehenderit recusandae
        quaerat ex tempore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem qui voluptatibus ipsa omnis?
        Sit explicabo adipisci alias tenetur culpa! Provident beatae illo alias incidunt totam, est nobis corrupti earum
        facere!
      </p>
    </section>
  )
}

export default Projects
