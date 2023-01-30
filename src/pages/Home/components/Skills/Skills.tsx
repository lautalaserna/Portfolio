import { Button } from '@/components'
import React from 'react'
import './Skills.css'

export interface SkillsInterface {}

const Skills: React.FC<SkillsInterface> = () => {
  return (
    <section className="Skills" id="skills">
      <h1 className="title">Professional Skills</h1>
      <h4 className='skills-desc'>Here are some of my most used stacks</h4>
      <div className="cards-container">
        <div className="Card">
          <h1 className="card-title">Front End</h1>
          <div className="skills-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat maiores voluptates velit eius libero
              aliquid dicta minima praesentium pariatur, aperiam aliquam provident consequuntur id sunt repellendus
              laborum veritatis ut exercitationem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam enim
              nostrum, quidem doloremque similique fuga libero quas adipisci repellat cum fugit et nihil sed, cumque
              minima eveniet expedita laudantium? Incidunt.
            </p>
          </div>
        </div>
        <div className="Card">
          <h1 className="card-title">Back End</h1>
          <div className="skills-container">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, voluptate. Amet molestiae labore
              inventore doloribus sunt, eligendi fugiat sint, consequuntur iusto voluptas praesentium est distinctio ex
              nesciunt animi. Qui, odio. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos adipisci
              natus excepturi ipsa totam! Alias, velit inventore dicta quaerat adipisci quibusdam perferendis, itaque,
              similique labore saepe error ullam beatae in.
            </p>
          </div>
        </div>
        <div className="Card">
          <h1 className="card-title">Tools</h1>
          <div className="skills-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae, accusantium dolor incidunt, eveniet
              voluptates minima assumenda aspernatur, ab fuga nihil sequi unde atque deserunt quisquam sint quos quasi.
              Accusamus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat vel optio reiciendis, libero
              ullam aut temporibus cupiditate numquam molestiae tempore totam iure rerum commodi repellat nesciunt
              debitis! Enim, consequuntur deserunt.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
