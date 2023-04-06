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
import projectOne from './assets/project-one2.png'
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
            title="Software Department"
            desc="A fully fuctional web page created for the Software Engineering Department of the UNMdP. In this project I designed and implemented the frontend and database layers with Bootstrap and MySQL. I also helped developing the backend using Springboot."
            img={projectOne}
            skillsList={[bootstrap, js, spring, mysql]}
            repoURL="https://github.com/lautalaserna/Web_Depto_Informatica"
            action={() => setSelected(1)}
            selected={(selected == 1) || mobile}
          />
          <ProjectCard
            title="Microservices"
            desc="In this project I developed most of the backend layer using NodeJS and Express. The main focus of this project was to communicate microservices through an API Gateway using HTTP requests. It also provides access crontrol with Auth0."
            img={projectTwo}
            skillsList={[js, node, express, auth]}
            repoURL="https://github.com/lautalaserna/API-Gateway-and-Microservices"
            action={() => setSelected(2)}
            selected={(selected == 2) || mobile}
          />
          <ProjectCard
            title="Hangman"
            desc="The classic Hangman game. A personal project made as an introduction to ReactJS, React Hooks and Typescript."
            img={projectThree}
            skillsList={[react, js, ts]}
            repoURL="https://github.com/lautalaserna/Hangman"
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
