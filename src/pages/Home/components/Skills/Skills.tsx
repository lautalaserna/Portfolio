import css from '@/assets/dev-icons/css.png'
import express from '@/assets/dev-icons/express.png'
import git from '@/assets/dev-icons/git.png'
import java from '@/assets/dev-icons/java.png'
import js from '@/assets/dev-icons/js.png'
import mongo from '@/assets/dev-icons/mongo.png'
import mysql from '@/assets/dev-icons/mysql.png'
import node from '@/assets/dev-icons/node.png'
import postgre from '@/assets/dev-icons/postgre.png'
import python from '@/assets/dev-icons/python.png'
import react from '@/assets/dev-icons/react.png'
import ts from '@/assets/dev-icons/ts.png'
import { motion } from 'framer-motion'
import React from 'react'
import coffee from './assets/coffee.png'
import database from './assets/database.png'
import json from './assets/json.png'
import tags from './assets/tags.png'
import { Card } from './components'
import './Skills.css'

export interface SkillsInterface {}

const Skills: React.FC<SkillsInterface> = () => {
  return (
    <section className={`Skills`} id="skills">
      <div className="skills-container">
        <motion.h1
          className="title"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          What am I good at.
        </motion.h1>
        <div className="cards-container">
          <Card
            icon={coffee}
            title="Desktop Apps"
            desc="I have a strong base in object oriented programming, desing patterns and good practices using Java as my main lenguaje."
            skillsList={[java, git]}
          />
          <Card
            icon={tags}
            title="Web Design"
            desc="Currently I have the most fun building responsive websites using React, specially with Typescript, and styling with CSS."
            skillsList={[react, js, ts, css]}
          />

          <Card
            icon={json}
            title="REST Services"
            desc="API consuming as well as creating my own ones. My prefered leanguajes are Python with FastAPI or NodeJS with Axios/Express."
            skillsList={[node, express, python]}
          />
          <Card
            icon={database}
            title="Databases"
            desc="Wide experience in relational database designing and DML lenguajes. Also I have experience with NoSQL databases."
            skillsList={[mongo, mysql, postgre]}
          />
        </div>
      </div>
    </section>
  )
}

export default Skills
