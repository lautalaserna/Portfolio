import { ThemeContext } from '@/App'
import bootstrap from '@/assets/bootstrap.png'
import c from '@/assets/c.png'
import eclipse from '@/assets/eclipse.png'
import express from '@/assets/express.png'
import github from '@/assets/github.png'
import java from '@/assets/java.png'
import js from '@/assets/js.png'
import mongo from '@/assets/mongo.png'
import mysql from '@/assets/mysql.png'
import node from '@/assets/node.png'
import postgre from '@/assets/postgre.png'
import python from '@/assets/python.png'
import react from '@/assets/react.png'
import tailwind from '@/assets/tailwind.png'
import ts from '@/assets/ts.png'
import { Card } from '@/components'
import React, { useContext } from 'react'
import './Skills.css'

export interface SkillsInterface {}

type SkillType = {
  name: string
  path: string
}

const frontEndSkills: SkillType[] = [
  /*   { name: 'HTML', path: html },
  { name: 'CSS', path: css }, */
  { name: 'React', path: react },
  { name: 'JavaScript', path: js },
  { name: 'TypeScript', path: ts },
  { name: 'Bootstrap', path: bootstrap },
  { name: 'Tailwind', path: tailwind },
]

const backEndSkills: SkillType[] = [
  { name: 'Java', path: java },
  { name: 'Python', path: python },
  { name: 'C', path: c },
  { name: 'NodeJS', path: node },
  { name: 'Express', path: express },
]

const toolsSkills: SkillType[] = [
  { name: 'PosrtgrSQL', path: postgre },
  { name: 'MySQL', path: mysql },
  { name: 'MongoDB', path: mongo },
  { name: 'GitHub', path: github },
  /*   { name: 'VS Code', path: vscode }, */
  { name: 'Eclipse', path: eclipse },
]

const Skills: React.FC<SkillsInterface> = () => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <section className={`Skills ${darkMode ? 'darkmode' : ''}`} id="skills">
      <div className="skills-text">
        <h1 className="title">Professional Skills</h1>
        <h4 className="skills-desc">Here are some of my most used stacks</h4>
      </div>
      <div className="cards-container">
        <Card title="Front End" skillList={frontEndSkills} darkMode={darkMode} />
        <Card title="Back End & Desktop" skillList={backEndSkills} darkMode={darkMode}/>
        <Card title="Database & Tools" skillList={toolsSkills} darkMode={darkMode}/>
      </div>
    </section>
  )
}

export default Skills
