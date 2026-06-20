import React from 'react'
import Container from '../../components/Container'
import {  Layout } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaWordpress ,FaTools } from 'react-icons/fa';
import { skillsData } from '../../data/skillsData';
import { iconMap } from '../../utils/utils';



// تعريف الـ Variants للحركة
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};


const SkillsGrid = () => {

    const { t } = useTranslation(); 
  return (
    <section id='skills' className='py-24'>
        <Container>
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-gradient">{t('tech_stack')}</h2>
            <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} 
            className="grid md:grid-cols-3 gap-4 p-4">
          {skillsData.skills.map((skill) => {
            const IconComponent = iconMap[skill.icon];

            return (
              <div key={skill.id}
              className={`${skill.span} p-8 border bg-white/5 border-white/10 rounded-3xl backdrop-blur-md hover:border-brand hover:shadow-brand-glow transition-all group shadow-lg hover:-translate-y-2 duration-300`}>
                <div className={`w-12 h-12 ${skill.color} flex items-center justify-center rounded-xl mb-6 shadow-lg text-white`}>
                  <IconComponent size={24} />
                </div>

                <h3 className=' text-2xl font-bold mb-2'>{skill.title}</h3>
                <p className='text-sm text-gray-500 dark:text-gray-400 mb-6'>{skill.description}</p>
              <div className='flex flex-wrap gap-2'>

                {skill.items.map((item) =>(
                  <span key={item}
                  className='px-3 py-1 bg-white/30 dark:bg-white/5 border border-white/5 dark:border-white/10 rounded-full text-xs text-gray-500 dark:text-gray-300 group-hover:bg-brand/20 transition-colors duration-300'>
                    {item}
                  </span>
                ))}

              </div>
              
              </div>
            )
          })}
        </motion.div>
        </Container>
    </section>
  )
}

export default SkillsGrid
