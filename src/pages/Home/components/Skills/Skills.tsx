import { Button } from '@/components'
import React from 'react'
import './Skills.css'

export interface SkillsInterface {}

const Skills: React.FC<SkillsInterface> = () => {
  return (
    <section className="Skills" id="skills">
      <div>
        <h1>Skills</h1>
        <div>
          <Button content=''/>
          <Button content=''/>
          <Button content=''/>
          <Button content=''/>
        </div>
      </div>
    </section>
  )
}

export default Skills
