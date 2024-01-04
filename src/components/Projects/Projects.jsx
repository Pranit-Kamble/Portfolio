import React from 'react'
import './Projects.css'

const Projects = () => {
    const data = [
        {
          name:"Weather-App",
          id:"1",
          img:'https://cdn.jim-nielsen.com/ios/512/weather-2019-02-07.png',
          link:'https://weather-app-pk0134.netlify.app/'
        },
        {
          name:"E-Commerce",
          id:"1",
          img:'https://www.anscommerce.com/blog/wp-content/uploads/2022/04/Social-Commerce-1200x675.png',
          link:'https://e-commerce0134.netlify.app/'
        },
        {
          name:"Blog-App",
          id:"1",
          img:'https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy-vector-isolated-concept-metaphor-illustration_335657-855.jpg',
          link:'https://blog-project123.netlify.app/'
        },
        {
          name:"To-Do-App",
          id:"1",
          img:'https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png',
          link:'https://to-do-app-pk.netlify.app/'
        },
        

    ]
  return (
    <section id='projects' className="project-section section">
        <h2 className='section-title'>Projects</h2>
      <span className="section-subtitle">My works</span>
      <div className='project-con'>
        {data && data.map((project)=>{
            return(
                <a target='_blank' key={project.id} href={project.link}>
                  <div class="card">
                    <img src={project.img} alt="Image"/>
                      <div className='card-name'>{project.name}</div>
                  </div> 
                </a>
            )
        })
        }
      </div>
    </section>
  )
}

export default Projects