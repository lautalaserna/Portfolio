import { Card } from '@/components'
import React from 'react'
import './Skills.css'
import html from '@/assets/html.png'
import css from '@/assets/css.png'
import js from '@/assets/js.png'
import ts from '@/assets/ts.png'
import react from '@/assets/react.png'
import bootstrap from '@/assets/bootstrap.png'
import python from '@/assets/python.png'
import java from '@/assets/java.png'
import c from '@/assets/c.png'
import node from '@/assets/node.png'
import express from '@/assets/express.png'
import mysql from '@/assets/mysql.png'
import postgre from '@/assets/postgre.png'
import mongo from '@/assets/mongo.png'
import git from '@/assets/git-logo.png'
import github from '@/assets/github.png'
import vscode from '@/assets/vscode.png'

export interface SkillsInterface {}

type SkillType = {
  name: string
  path: string
}

const frontEndSkills: SkillType[] = [
  { name: 'HTML', path: html },
  { name: 'CSS', path: css },
  { name: 'JavaScript', path: js },
  { name: 'TypeScript', path: ts },
  { name: 'React', path: react },
  { name: 'Bootstrap', path: bootstrap }
]

const backEndSkills: SkillType[] = [
  { name: 'Python', path: python },
  { name: 'Java', path: java },
  { name: 'C', path: c },
  { name: 'NodeJS', path: node },
  { name: 'Express', path: express },
]

const toolsSkills: SkillType[] = [
  { name: 'MySQL', path: mysql },
  { name: 'PosrtgrSQL', path: postgre },
  { name: 'MongoDB', path: mongo },
  { name: 'GitHub', path: github },
  { name: 'VS Code', path: vscode }
]

const Skills: React.FC<SkillsInterface> = () => {
  return (
    <section className="Skills" id="skills">
      <h1 className="title">Skills</h1>
      <h4 className="skills-desc">Here are some of my most used stacks</h4>
      <div className="cards-container">
        <Card title="Front End" skillList={frontEndSkills} color='green' />
        <Card title="Back End & Desktop" skillList={backEndSkills} color='pink'/>
        <Card title="Database & Tools" skillList={toolsSkills} color='yellow'/>
      </div>
    </section>
  )
}

export default Skills
