import { ThemeContext } from '@/context'
import React, { useContext } from 'react'
import { Button } from '@/components'
import { motion } from 'framer-motion'
import { ProjectCard, GitButton } from './components'
import './Projects.css'
import imageOne from './assets/TEST.png'
import imageTwo from './assets/main-project.jpg'
import imageThree from './assets/TEST3.png'

import css from '@/assets/dev-icons/css.png'
import express from '@/assets/dev-icons/express.png'
import git from '@/assets/dev-icons/git.png'
import java from '@/assets/dev-icons/java.png'
import js from '@/assets/dev-icons/js.png'
import mysql from '@/assets/dev-icons/mysql.png'
import node from '@/assets/dev-icons/node.png'
import react from '@/assets/dev-icons/react.png'
import ts from '@/assets/dev-icons/ts.png'

export interface ProjectsInterface {}

const Projects: React.FC<ProjectsInterface> = () => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <section className={`Projects ${darkMode ? 'darkmode' : ''}`} id="projects">
      <div className="main-container">
{/*         <div className="title-container">
          <h1 className="title">Check out my Projects</h1>
        </div> */}
        <div className="project-cards">
          <ProjectCard
            title="Software Department UNMDP"
            desc="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
            img={imageOne}
            skillsList={[java, mysql, js, css]}
          />
          <ProjectCard
            title="Branches and Shifts"
            desc="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
            img={imageTwo}
            skillsList={[java, mysql, js, css]}
          />
          <ProjectCard
            title="Hangman"
            desc="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
            img={imageThree}
            skillsList={[react, ts, css]}
          />
        </div>
        <div className="footer-container">
          <h1 className="content">Check out more of my projects on my Github</h1>
          <GitButton/>
        </div>
      </div>
    </section>
  )
}

export default Projects
