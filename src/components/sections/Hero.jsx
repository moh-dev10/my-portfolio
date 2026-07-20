
import React from 'react'
import { useTranslation } from 'react-i18next';
import { ArrowRight, Contact, Download  } from 'lucide-react';
import Container from '../Container';
import { delay,  scale ,LazyMotion, domAnimation, m} from 'framer-motion';
import heroImg from '/images/profileImg.webp';
import { Link } from 'react-router-dom'
import { containerVariants, itemVariants } from '../hero.animations.js';
const MotionLink = m.create(Link);
const Hero = () => {
  const { t } = useTranslation();


  
  return (
    <section id='hero' className=' min-h-screen '>
      <Container>
        {/* content side */}
        <LazyMotion features={domAnimation}>
          <header className='grid grid-cols-12  items-center justify-center text-center md:text-start  gap-8 pt-30'>
  
          
          <m.div className='col-span-12 order-2 lg:order-1 lg:col-span-7 space-y-4'
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          >
            {/* badge */}
            <m.div className='flex  items-center  text-brand text-sm bg-brand/10 dark:bg-brand/40 w-max px-3 py-1 rounded-full 
            font-black animate-pulse'
            >
              <span className=' flex items-center w-2 h-2 bg-brand rounded-full me-2'></span>
              {t('hero_badge')}
            </m.div>
            {/* title */}
            <h1 className='text-4xl sm:text-6xl md:text-7xl  
            bg-clip-text text-transparent bg-gradient-to-r from-brand via-blue-500 to-purple-500 
             font-extrabold tracking-tighter leading-tight '
            >
              {t('hero_title')}
            </h1>
            {/* description */}
            <p className='text-sm sm:text-lg max-w-xl mb-8 '
            >
              {t('hero_desc')}
            </p>
  
            {/* buttons */}
            <m.div className='space-y-4'
            variants={itemVariants}>
              <div className='flex flex-col  items-center md:items-start md:flex-row md:flex-wrap gap-4'
              >
                <MotionLink
                 to="/projects"
                 className='w-full md:max-w-fit flex items-center justify-center gap-3  btn-primary transition-all duration-300 md:hover:scale-110 hover:shadow-lg cursor-pointer group'
                whileHover={{scale: 1.05}}
                whileTap={{scale:0.95}}>
                  <Link to="/projects">{t('viewprojects')}</Link>
                  <ArrowRight size={18} className='group-hover:translate-x-2 transition-transform duration-300'/>
                </MotionLink>
                <m.a
                  href="/cv.pdf"
                  download
                  className="group btn-secondary w-full md:max-w-fit flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={18} />
                  {t('cv_button')}
                </m.a>
              </div>
            </m.div>
          </m.div>
  
          {/* image side */}
          <div className='grid col-span-12 lg:col-span-5 order-1 lg:order-2 gap-4'>
            
          <m.figure 
    className='relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto'
    variants={itemVariants}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: "circOut", delay: 0.3 }}
  >
    {/* تأثير التوهج الخلفي (Glow Effect) */}
    <div className="absolute inset-0 bg-gradient-to-tr from-brand via-blue-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
  
    {/* حاوية الصورة الأساسية */}
    <m.div 
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 0.95, rotate: -2 }}
      className='relative w-full h-full rounded-full border-4 border-white/10 overflow-hidden'
    >
      <img 
        src={heroImg}
        alt="Mohamed - Frontend Developer" 
        width="400"
        height="400"
        className='w-full h-full object-cover'
        fetchPriority='high'
        loading='eager'
      />
    </m.div>
  </m.figure>
            <div className='bg-white/30 dark:bg-slate-800/40 
                  backdrop-blur-md 
                  border border-neutral-200 dark:border-neutral-700 
                  rounded-full p-2 shadow-xl  max-w-fit mx-auto px-2 py-1'>
  
             <span className='text-sm font-bold md:text-sm 
             bg-clip-text text-transparent bg-linear-to-r from-brand via-blue-500 to-purple-500 dark:text-brand-dark uppercase'>
              {t('hero_role')}
              </span>
          
            </div>
          </div>
          </header>
        </LazyMotion>
      
    </Container>
    </section>
  )
}

export default Hero
