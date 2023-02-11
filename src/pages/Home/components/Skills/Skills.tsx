import { ThemeContext } from '@/context'
import React, { useContext } from 'react'
import coffee from './assets/coffee.png'
import database from './assets/database.png'
import css from './assets/dev-icons/css.png'
import express from './assets/dev-icons/express.png'
import java from './assets/dev-icons/java.png'
import js from './assets/dev-icons/js.png'
import mongo from './assets/dev-icons/mongo.png'
import mysql from './assets/dev-icons/mysql.png'
import node from './assets/dev-icons/node.png'
import postgre from './assets/dev-icons/postgre.png'
import python from './assets/dev-icons/python.png'
import react from './assets/dev-icons/react.png'
import ts from './assets/dev-icons/ts.png'
import json from './assets/json.png'
import tags from './assets/tags.png'
import { Card } from './components'
import './Skills.css'

export interface SkillsInterface {}

const Skills: React.FC<SkillsInterface> = () => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <section className={`Skills ${darkMode ? 'darkmode' : ''}`} id="skills">
      <div className="skills-text">
        <h1 className="title">What am I good at?</h1>
      </div>
      <div className="cards-container">
        <div className="card-pair">
          <Card
            icon={coffee}
            title="Desktop Apps"
            desc="I have a strong base in object oriented programming, desing patterns and good practices using Java as my main lenguaje."
            skillsList={[java]}
            darkMode={darkMode}
          />
          <Card
            icon={tags}
            title="Web Design"
            desc="Currently I have the most fun building responsive websites using React, specially with Typescript, and styling with CSS."
            skillsList={[react, css, ts]}
            darkMode={darkMode}
          />
        </div>
        <div className="card-pair">
          <Card
            icon={json}
            title="REST Services"
            desc="API consuming as well as creating my own ones. My prefered leanguajes are Python with FastAPI or NodeJS with Axios/Express."
            skillsList={[node, express, python]}
            darkMode={darkMode}
          />
          <Card
            icon={database}
            title="Databases"
            desc="Wide experience in relational database designing and DML lenguajes. Also I have experience with NoSQL databases."
            skillsList={[mongo, mysql, postgre]}
            darkMode={darkMode}
          />
        </div>
      </div>
    </section>
  )
}

export default Skills
