import React from 'react'
import Container from '../components/Container'
import { projectsData } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <section className='py-30'>
      <Container>
         <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{once: true}}
             transition={{ duration: 0.6, delay: 0.2 }}
             className='space-y-4 md:text-center'>
            <h1 className='text-4xl font-bold'>Slected Projects</h1>
            <p className='text-gray-600 dark:text-gray-200 leading-relaxed'>A collection of recent work focusing on eCommerce solutions,
                local business sites, and React applications.</p>
         </motion.div>
         <div className='md:grid grid-cols-2 gap-6 space-y-6 py-12'>
             {projectsData.map((project) =>(
                      <motion.div
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.5 }}
                      >
                      <ProjectCard id={project.id} project={project} />
                     </motion.div>
             ))}
         </div>
      </Container>
    </section>
  )
}

export default Projects
