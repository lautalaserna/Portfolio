import React from 'react'
import guy from '@/assets/lautarito.png'
import './About.css'

export interface AboutInterface {}

const About: React.FC<AboutInterface> = () => {
  return (
    <section className="About" id="about">
      <h1 className="title">About me</h1>
      <div className="container-info">
        <img className="image" src={guy} alt="" />
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta impedit, suscipit repudiandae at id magni
          magnam optio harum delectus nulla aut et ut ea neque veniam quas doloribus maxime ipsum? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Accusamus minus non, voluptates modi distinctio sed omnis et eaque eos
          tempora necessitatibus sit. Voluptate sint dolorem perspiciatis quod cumque, quam veniam. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Dolore optio amet exercitationem minus corporis illum quisquam
          laboriosam blanditiis labore? Laboriosam sequi itaque numquam quisquam non a illo. At, perspiciatis unde.
        </h4>
      </div>
    </section>
  )
}

export default About
