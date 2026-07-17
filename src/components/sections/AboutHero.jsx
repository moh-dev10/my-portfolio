import React from 'react'
import Container from '../Container';
import { useTranslation } from 'react-i18next';
import { m,LazyMotion,domAnimation } from 'framer-motion';
import heroImg from '/images/profileImg.webp';
import SkillsGrid from './SkillsGrid';
import { Rocket } from 'lucide-react';

import { MySkills } from '../../data/myskills';
import { div } from 'framer-motion/client';

import { iconMap } from '../../data/myskills';

const AboutHero = () => {
    const { t } = useTranslation();
  return (
    <section id='about' className=' min-h-screen pt-40 mb-20 '>
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
               className="md:col-span-7 space-y-8 text-center md:text-start">
                      <div className='flex items-center '>
                        
                        <div className="h-px flex-1 bg-neutral-300 dark:bg-neutral-600"></div>
                        <h3 className="text-xl font-extrabold mx-2">{t('aboutMe')}</h3>
                        <div className="h-px flex-1 bg-neutral-300 dark:bg-neutral-600"></div>
                      </div>
                      <div className="text-lg bg-white dark:bg-slate-900 backdrop-blur-xl border  border-neutral-300 dark:border-neutral-600  shadow-md rounded-2xl p-6 text-start text-gray-600 dark:text-gray-300 leading-relaxed
                       ">{t('aboutMeDescription')}</div>
              
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
                 border border-neutral-300 dark:border-neutral-700 gap-3 px-5 py-1 rounded-full hover:${skill.color} shadow-sm
                  transition-all duration-300`}>
                  {IconComponent  && ( <IconComponent style={{color: skill.color}} size={18}/>)}
                  <span className='text-sm font-medium'>{skill.name}</span>
                </m.div>
              )
            })}
          </div>
  
              {/* أزرار تفاعلية (CTA) */}
              <div className="flex items-center gap-4 bg-brand max-w-fit px-6 py-3 rounded-2xl hover:scale-105 hover:shadow-brand-glow transition-transform duration-300 cursor-pointer group">
                <Rocket size={18} className='text-white animate-bounce' />
                <m.button className="  border-white/3 text-white  text-xl transition-transform"
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
