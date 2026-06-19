import React from 'react'
import Container from '../Container';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import heroImg from '/images/profileImg.webp';
import SkillsGrid from './SkillsGrid';

const AboutHero = () => {
    const { t } = useTranslation();
  return (
    <section id='about' className=' min-h-screen py-24 '>
      <Container>
        <div className="grid md:grid-cols-12  gap-16 items-center justify-content text-center ">
            <div className="md:col-span-5 flex items-center justify-center relative group">
                <div className=" bg-linear-to-l from-brand-dark/45 via-55%  to-brand/30 dark:bg-brand/40 rounded-3xl rotate-3 p-2 group-hover:rotate-6 transition-transform duration-300">
                <img src={heroImg}
                 alt="mohamed" 
                 width="200"
                 height="200"
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
            <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="md:col-span-7 space-y-8 text-start">
                
                    <h1 className="text-4xl font-extrabold mb-8">{t('aboutMe')}</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">{t('aboutMeDescription')}</p>
            
            {/* مهارات سريعة (Badges) */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          {['React', 'WordPress', 'TypeScript', 'Tailwind'].map((skill) => (
            <span key={skill} className="px-4 py-1.5 bg-brand/10 text-brand dark:bg-brand/20 rounded-full font-medium text-sm">
              {skill}
            </span>
          ))}
        </div>

            {/* أزرار تفاعلية (CTA) */}
            <div className="flex gap-4">
              <motion.button className="bg-brand text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg shadow-brand/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              >
              {t('hireMe')}
              </motion.button>
            </div>
            </motion.div>
        </div>
      </Container>
    </section>

  )
}

export default AboutHero
