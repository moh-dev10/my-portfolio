
import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { projectsData } from '../data/projects'





const ProjectCard = ({ project }) => {
  return (
    <article className='overflow-hidden rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm h-full flex flex-col'>
        <figure className='group relative overflow-hidden'>
            <img
             src={project.image}
             alt={project.title}
             loading='lazy'
             decoding='async'
             className=' w-full aspect-5/3 object-cover  transition-all duration-500 group-hover:scale-110'/>
             
             {/* {overlay} */}
             <div className='absolute inset-0 bg-linear-to-t from-brand/80 to-transparent pointer-events-none'></div>
            
            {/* {skills} */}
             <div className='flex gap-2 absolute bottom-4 left-2 flex-wrap z-10'>
               {project.skills?.map((skill ,index) => (
                <span key={index} className='uppercase px-3 py-1 text-xs bg-white/20 backdrop-blur-md rounded-full text-white border border-white/10'
                >
                    {skill}
                </span>
               ))}
             </div>
        </figure>

      
        <div className=' flex flex-col gap-4 p-6 grow '>
          <header className='flex items-center justify-between'>
             <h3 className='font-bold  hover:text-brand transition-colors duration-300'>
                {project.title}
                </h3>
             <ArrowUpRight size={18} className='text-brand cursor-pointer hover:rotate-45 transition-transform duration-300'/>
          </header>
             <p className='text-muted dark:text-gray-300 text-sm tracking-normal line-clamp-2'>
                {project.desc}
                </p>
             <div className='mt-auto pt-4'>
                 <hr className='border-gray-200 dark:border-gray-700 mb-4' />
                 <footer className='flex justify-between items-center'>
                 <span className='text-xs text-green-500 bg-green-700/20 px-3 py-1 rounded-2xl border'>
                 LIVE
                 </span>
                 <time className='text-gray-500 dark:text-gray-400'>{project.date}</time>
                </footer>
             </div>   
        </div>
      
    </article>
  )
}

export default ProjectCard
