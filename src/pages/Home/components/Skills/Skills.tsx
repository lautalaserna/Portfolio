import { ThemeContext } from '@/App'
import coffee from '@/assets/coffee.png'
import css from '@/assets/css.png'
import database from '@/assets/database.png'
import eclipse from '@/assets/eclipse.png'
import express from '@/assets/express.png'
import java from '@/assets/java.png'
import js from '@/assets/js.png'
import json from '@/assets/json.png'
import mongo from '@/assets/mongo.png'
import mysql from '@/assets/mysql.png'
import node from '@/assets/node.png'
import postgre from '@/assets/postgre.png'
import python from '@/assets/python.png'
import react from '@/assets/react.png'
import tags from '@/assets/tags.png'
import ts from '@/assets/ts.png'

import { Card } from '@/components'
import React, { useContext } from 'react'
import './Skills.css'

export interface SkillsInterface {}

const Skills: React.FC<SkillsInterface> = () => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <section className={`Skills ${darkMode ? 'darkmode' : ''}`} id="skills">
      <div className="skills-text">
        <h1 className="title">What am I good at?</h1>
        <h4 className="desc">Here are some of my most used stacks.</h4>
      </div>
      <div className="cards-container">
        <Card
          icon={coffee}
          title="Desktop Apps"
          desc="I have a strong base in object oriented programming, desing patterns and good practices using Java as my main lenguaje."
          skillsList={[java, eclipse]}
          darkMode={darkMode}
        />
        <Card
          icon={tags}
          title="Web Design"
          desc="Currently I have the most fun building responsive websites using React, specially with Typescript, and styling with CSS."
          skillsList={[react, js, ts, css]}
          darkMode={darkMode}
        />
        <Card
          icon={json}
          title="REST Services"
          desc="API consuming as well as creating my own ones. My prefered leanguajes are Python with FastAPI or NodeJS with Axios/Express."
          skillsList={[python, node, express]}
          darkMode={darkMode}
        />
        <Card
          icon={database}
          title="Databases"
          desc="Wide experience in relational database designing and DML lenguajes. Also I have experience with NoSQL databases."
          skillsList={[postgre, mongo, mysql]}
          darkMode={darkMode}
        />
      </div>
    </section>
  )
}

export default Skills
