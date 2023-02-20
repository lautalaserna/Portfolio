import React, { useState, useEffect } from 'react'
import { animate, motion, useAnimation } from 'framer-motion'
import { Button } from '@/components'
import './ProjectCard.css'

export interface ProjectCardInterface {
  selected: boolean
  img: string
  title: string
  desc: string
  skillsList: string[]
  action: () => void
}

const ProjectCard: React.FC<ProjectCardInterface> = ({ selected, img, title, desc, skillsList, action }) => {
  const titleMotion = useAnimation()
  const contentMotion = useAnimation()

  useEffect(() => {
    if (selected) {
      titleMotion.start({ display: 'none' })
      contentMotion.start({ display: 'flex', y: 0, transition: { delay: 0.2 } })
    } else {
      titleMotion.start({ display: 'block' })
      contentMotion.start({ display: 'none', y: 400 })
    }
  }, [selected])

  return (
    <motion.div className={`card ${selected ? 'selected' : ''}`} onClick={action}>
      <motion.div className="card-title" initial={{ x: 0, rotate: -90 }} animate={titleMotion}>
        {title}
      </motion.div>
      <motion.div className="card-open" animate={contentMotion}>
        <img className="card-img" src={img} alt="" />
        <div className="card-content">
          <h1 className="content-title">{title}</h1>
          <h4 className="content-desc">{desc}</h4>
          <h1 className="content-tools">Tools</h1>
          <div className="content-skills">
            {skillsList.map(path => (
              <motion.div className="skill-container">
                <img className="skill-icon" src={path} alt="" />
              </motion.div>
            ))}
          </div>
          <div className="content-btns">
            <Button content="Preview" onClick={() => {}} style="project" />
            <Button content="Repositorie" onClick={() => {}} style="project" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectCard
