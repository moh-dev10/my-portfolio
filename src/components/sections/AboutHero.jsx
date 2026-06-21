import React from 'react'
import Container from '../Container';
import { useTranslation } from 'react-i18next';
import { m,LazyMotion,domAnimation } from 'framer-motion';
import heroImg from '/images/profileImg.webp';
import SkillsGrid from './SkillsGrid';

import { MySkills } from '../../data/myskills';
import { div } from 'framer-motion/client';

import { iconMap } from '../../data/myskills';

const AboutHero = () => {
    const { t } = useTranslation();
  return (
    <section id='about' className=' min-h-screen py-40 '>
      <Container>
        <div className="grid md:grid-cols-12  gap-16 items-center justify-content text-center ">
            <div className="md:col-span-5 flex items-center justify-center relative group">
                <div className=" bg-linear-to-l from-brand-dark/45 via-55%  to-brand/30 dark:bg-brand/40 rounded-3xl rotate-3 p-2 group-hover:rotate-6 transition-transform duration-300">
                <img src={heroImg}
                 alt="mohamed" 
                 width="200"
                 height="200"
                 fetchPriority='high'
                 loading='eager'
                 className="rounded-2xl shadow-lg  md:max-w-sm mx-auto h-auto " />
                </div>
                <div className='flex items-center gap-2 absolute -bottom-3 right-18 px-3 py-2 rounded-3xl bg-white '>
                  <span className='flex items-center w-3 h-3 rounded-full bg-green-500 animate-pulse'></span>
                  <p className='dark:text-gray-800'>Open to work</p>
                </div>
                    {/* تأثير التوهج الناعم */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-t from-brand to-transparent rounded-full blur-2xl -z-10 "></div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-t from-brand to-transparent rounded-full blur-2xl -z-10 "></div>
            </div>
            <LazyMotion features={domAnimation}>
              <m.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{once:true}}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="md:col-span-7 space-y-8 text-start">
                  
                      <h1 className="text-4xl font-extrabold mb-8 ">{t('aboutMe')}</h1>
                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">{t('aboutMeDescription')}</p>
              
              {/* مهارات سريعة (Badges) */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {MySkills.skills.map((skill) => {
                 
                 const IconComponent = iconMap[skill.icon];
              return (
                <m.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                key={skill.id}
                className={`flex items-center justify-center text-gray-600 dark:text-gray-300 bg-white/70 dark:bg-white/10
                 border border-black/10 dark:border-white/20 gap-3 px-5 py-1 rounded-full hover:${skill.color} shadow-sm
                  transition-all duration-300`}>
                  {IconComponent  && ( <IconComponent style={{color: skill.color}} size={18}/>)}
                  <span className='text-sm font-medium'>{skill.name}</span>
                </m.div>
              )
            })}
          </div>
  
              {/* أزرار تفاعلية (CTA) */}
              <div className="flex gap-4">
                <m.button className="bg-brand text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg shadow-brand/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                {t('hireMe')}
                </m.button>
              </div>
              </m.div>
            </LazyMotion>
        </div>
      </Container>
    </section>

  )
}

export default AboutHero
