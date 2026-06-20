
import React from 'react'
import { useTranslation } from 'react-i18next';
import { ArrowRight, Contact, Download  } from 'lucide-react';
import Container from '../Container';
import { delay, motion, scale } from 'framer-motion';
import heroImg from '/images/profileImg.webp';
import { Link } from 'react-router-dom'

const Hero = () => {
  const { t } = useTranslation();

  // إعدادات الحركة
  const containerVariants = {
    hidden: { opacity: 0},
    visible: { opacity: 1, 
      transition: 
      { staggerChildren: 0.4 } }
  };

  const itemVariants = {
    hidden: { opacity: 0 , y: 20 },
    visible: { opacity: 1 , y: 0,
      transition :{
         duration: 0.8,
         ease: [0.22, 1, 0.36, 1]}
    },
  };
  
  return (
    <section id='hero' className=' min-h-screen '>
      <Container>
        {/* content side */}
        <header className='grid grid-cols-12  items-center justify-center text-center md:text-start  gap-8 pt-30'>

        
        <motion.div className='col-span-12 order-2 lg:order-1 lg:col-span-7 space-y-4'
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        >
          {/* badge */}
          <motion.div className='flex  items-center  text-brand text-sm bg-brand/10 dark:bg-brand/40 w-max px-3 py-1 rounded-full 
          font-black animate-pulse'
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          >
            <span className=' flex items-center w-2 h-2 bg-brand rounded-full me-2'></span>
            {t('hero_badge')}
          </motion.div>
          {/* title */}
          <motion.h1 className='text-4xl sm:text-6xl md:text-7xl  
          bg-clip-text text-transparent bg-gradient-to-r from-brand via-blue-500 to-purple-500 
           font-extrabold tracking-tighter leading-tight '
          variants={itemVariants}>
            {t('hero_title')}
          </motion.h1>
          {/* description */}
          <motion.p className='text-sm sm:text-lg max-w-xl mb-8 '
          variants={itemVariants}>
            {t('hero_desc')}
          </motion.p>

          {/* buttons */}
          <motion.div className=' space-y-4'
          variants={itemVariants}>
            <div className='flex flex-col  items-center md:items-start md:flex-row md:flex-wrap gap-4'
            >
              <motion.button to="/projects"
               className='w-full md:max-w-fit flex items-center justify-center gap-3  btn-primary transition-all duration-300 md:hover:scale-110 hover:shadow-lg cursor-pointer group'
              whileHover={{scale: 1.05}}
              whileTap={{scale:0.95}}>
                <Link to="/projects">{t('projects')}</Link>
                <ArrowRight size={18} className='group-hover:translate-x-2 transition-transform duration-300'/>
              </motion.button>
              <motion.button 
              whileHover={{scale: 1.05}}
              whileTap={{scale:0.95}}
              className='group btn-secondary w-full md:max-w-fit  flex items-center justify-center sm:justify-start gap-2 transition-all duration-300 cursor-pointer'
            >
                <Download size={18} className='inline mr-2 group-hover:translate-y-1 transition-transform duration-300' />
                {t('cv_button')}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* image side */}
        <div className='grid col-span-12 lg:col-span-5 order-1 lg:order-2 gap-4'>
          
        <motion.figure 
  className='relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto'
  variants={itemVariants}
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, ease: "circOut", delay: 0.3 }}
>
  {/* تأثير التوهج الخلفي (Glow Effect) */}
  <div className="absolute inset-0 bg-gradient-to-tr from-brand via-blue-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

  {/* حاوية الصورة الأساسية */}
  <motion.div 
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
    />
  </motion.div>
</motion.figure>
          <div className='bg-white/30 dark:bg-slate-800/40 
                backdrop-blur-md 
                border border-white/20 dark:border-slate-400/50 
                rounded-full p-2 shadow-xl  max-w-fit mx-auto px-2 py-1'>

           <span className='text-sm font-bold md:text-sm font-bold 
           bg-clip-text text-transparent bg-gradient-to-r from-brand via-blue-500 to-purple-500 dark:text-brand-dark uppercase'>
            Front-End & WordPress Developer
            </span>
        
          </div>
        </div>
        </header>
      
    </Container>
    </section>
  )
}

export default Hero
