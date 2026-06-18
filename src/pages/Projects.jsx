import React from 'react'
import Container from '../components/Container'
import { projectsData } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <section className='py-30'>
      <Container>
         <div className='space-y-4 md:text-center'>
            <h1 className='text-4xl font-bold'>Slected Projects</h1>
            <p className='text-gray-600 dark:text-gray-200 leading-relaxed'>A collection of recent work focusing on eCommerce solutions,
                local business sites, and React applications.</p>
         </div>
         <div className='md:grid grid-cols-2 gap-6 space-y-6 py-12'>
             {projectsData.map((project) =>(
                      <ProjectCard key={project.id} project={project}/>
             ))}
         </div>
      </Container>
    </section>
  )
}

export default Projects
