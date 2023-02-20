import React, { useState } from 'react'
import projectOne from './assets/project-one.png'
import projectTwo from './assets/project-two.png'
import projectThree from './assets/project-three.png'
import { GitButton, ProjectCard } from './components'
import './Projects.css'

import css from '@/assets/dev-icons/css.png'
import java from '@/assets/dev-icons/java.png'
import js from '@/assets/dev-icons/js.png'
import mysql from '@/assets/dev-icons/mysql.png'
import react from '@/assets/dev-icons/react.png'
import ts from '@/assets/dev-icons/ts.png'
import spring from '@/assets/dev-icons/springboot.png'

export interface ProjectsInterface {}

const Projects: React.FC<ProjectsInterface> = () => {
  const [selected, setSelected] = useState(1)

  return (
    <section className={'Projects'} id="projects">
      <div className="main-container">
        <div className="project-cards">
          <ProjectCard
            title="Software Department UNMDP"
            desc="A fully fuctional web page (front-end, back-end, API and database) for the Software Engineering Department of the National University of Mar del Plata. Developed as a project for the university."
            img={projectOne}
            skillsList={[java, mysql, js, css]}
            action={() => setSelected(1)}
            selected={selected == 1}
          />
          <ProjectCard
            title="Branches and Shifts"
            desc="A group project for the university developed mainly in NodeJS. The main objective is the communication between microservices through HTTP requests. It provides access crontrol with Auth0."
            img={projectTwo}
            skillsList={[js, css, spring,java, mysql, ]}
            action={() => setSelected(2)}
            selected={selected == 2}
          />
          <ProjectCard
            title="Hangman"
            desc="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
            img={projectThree}
            skillsList={[react, ts, css]}
            action={() => setSelected(3)}
            selected={selected == 3}
          />
        </div>
        <div className="footer-container">
          <h1 className="content" onClick={() => {}}>
            Check out more of my projects on my Github
          </h1>
          <GitButton />
        </div>
      </div>
    </section>
  )
}

export default Projects
