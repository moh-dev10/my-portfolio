import React from 'react'
import Container from '../components/Container'
import { projectsData } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import { useTranslation } from 'react-i18next'
import { m, LazyMotion, domAnimation } from 'framer-motion'

const Projects = () => {
  const { t } = useTranslation()

  return (
    <section className='py-30'>
      <Container>
         <LazyMotion features={domAnimation}>
           <m.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{once: true}}
               transition={{ duration: 0.6, delay: 0.2 }}
               className='space-y-4 md:text-center'>
              <h1 className='text-4xl font-bold'>{t('projects_title')}</h1>
              <p className='text-gray-600 dark:text-gray-200 leading-relaxed'>{t('projects_desc')}</p>
           </m.div>
           <div className='md:grid grid-cols-2 gap-6 space-y-6 py-12'>
               {projectsData.map((project) =>(
                        <m.div
                         key={project.id}
                         initial={{ opacity: 0, y: 30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.5 }}
                        >
                        <ProjectCard project={project} />
                       </m.div>
               ))}
           </div>
         </LazyMotion>
      </Container>
    </section>
  )
}

export default Projects
