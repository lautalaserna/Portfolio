import auth from '@/assets/dev-icons/auth.png'
import bootstrap from '@/assets/dev-icons/bootstrap.png'
import express from '@/assets/dev-icons/express.png'
import js from '@/assets/dev-icons/js.png'
import mysql from '@/assets/dev-icons/mysql.png'
import node from '@/assets/dev-icons/node.png'
import react from '@/assets/dev-icons/react.png'
import spring from '@/assets/dev-icons/springboot.png'
import ts from '@/assets/dev-icons/ts.png'
import React, { useState, useEffect } from 'react'
import projectOne from './assets/project-one.png'
import projectThree from './assets/project-three.png'
import projectTwo from './assets/project-two.png'
import { GitButton, ProjectCard } from './components'
import './Projects.css'

export interface ProjectsInterface {}

const Projects: React.FC<ProjectsInterface> = () => {
  const [selected, setSelected] = useState(1)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  const handleResize = () => {
    if (window.innerWidth < 1200) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }

  return (
    <section className={'Projects'} id="projects">
      <div className="main-container">
        <div className="project-cards">
          <ProjectCard
            title="UNMDP Software Department"
            desc="A fully fuctional web page for the Software Engineering Department of the National University of Mar del Plata."
            img={projectOne}
            skillsList={[bootstrap, js, spring, mysql]}
            action={() => setSelected(1)}
            selected={(selected == 1) || mobile}
          />
          <ProjectCard
            title="Branches and Shifts"
            desc="Developed mainly in NodeJS. Implements communication between microservices through HTTP requests. It also provides access crontrol with Auth0."
            img={projectOne}
            skillsList={[js, node, express, auth]}
            action={() => setSelected(2)}
            selected={(selected == 2) || mobile}
          />
          <ProjectCard
            title="Hangman"
            desc="The classic Hangman game. A personal project made as an introduction to ReactJS, React Hooks and Typescript."
            img={projectOne}
            skillsList={[react, js, ts]}
            action={() => setSelected(3)}
            selected={(selected == 3) || mobile}
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
