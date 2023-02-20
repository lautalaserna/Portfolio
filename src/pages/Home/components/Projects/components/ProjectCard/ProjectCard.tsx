import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components'
import './ProjectCard.css'

export interface ProjectCardInterface {
  active?: boolean
  img: string
  title: string
  desc: string
  skillsList: string[]
}

const ProjectCard: React.FC<ProjectCardInterface> = ({ active = false, img, title, desc, skillsList }) => {
  const cardTitle = {
    rest: {
      rotate: -90,
      color: 'black',
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1,
      },
    },
    hover: {
      color: 'black',
      x: -1000,
    },
  }

  const cardOpen = {
    rest: {
      y: 300,
      opacity: 0,
    },
    hover: {
      display: 'flex',
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
      },
    },
  }

  return (
    <motion.div className={'card'} initial="rest" whileHover="hover">
      <motion.div className="card-title" variants={cardTitle}>
        {title}
      </motion.div>
      <motion.div className="card-open" variants={cardOpen}>
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
