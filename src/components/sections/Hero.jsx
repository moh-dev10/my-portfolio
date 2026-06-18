
import React from 'react'
import { useTranslation } from 'react-i18next';
import { ArrowRight, Contact, Download  } from 'lucide-react';
import Container from '../Container';
import { delay, motion } from 'framer-motion';
import heroImg from '/images/profileImg.webp';

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
        <div className='grid grid-cols-12  items-center justify-center text-center md:text-start  gap-8 pt-20'>

        
        <motion.div className='col-span-12 lg:col-span-7 space-y-6'
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        >
          {/* badge */}
          <motion.div className='flex items-center text-brand text-sm bg-brand/10 w-max px-3 py-1 rounded-full 
          font-black animate-pulse'
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          >
            <span className=' flex items-center w-2 h-2 bg-brand rounded-full me-2'></span>
            {t('hero_badge')}
          </motion.div>
          {/* title */}
          <motion.h1 className='text-4xl sm:text-5xl md:text-6xl  font-black tracking-tight leading-[1.2em]'
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
          variants={containerVariants}>
            <div className='flex flex-col  items-center md:items-start md:flex-row md:flex-wrap gap-4'
            >
              <motion.button className=' flex items-center justify-center gap-3 max-w-fit btn-primary transition-all duration-300 md:hover:scale-110 hover:shadow-lg cursor-pointer group'
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
                {t('projects')}
                <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform'/>
              </motion.button>
              <motion.button className=' flex items-center justify-center gap-3 max-w-fit btn-secondary transition-all duration-300 md:hover:scale-110 hover:shadow-lg cursor-pointer group'
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              >
                {t('hire')}
                <Contact size={18}/>
              </motion.button>
              <motion.button className='md:w-full flex items-center justify-center sm:justify-start gap-2 transition-all duration-300 cursor-pointer hover:underline'
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
                <Download size={18} className='inline mr-2' />
                {t('cv_button')}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* image side */}
        <motion.div className='col-span-12 lg:col-span-5 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border-brand-light border-2  overflow-hidden mx-auto'
        variants={itemVariants}
        initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 ,ease: "circOut",  delay: 0.3}}
          whileHover={{ scale: 1.05 ,rotate: 2}}
          whileTap={{ scale: 0.95 ,rotate: -2}}>
          <img src={heroImg}
           alt="Mohamed - Frontend Developer" 
          className='w-full h-auto object-cover'
          />
        </motion.div>
        </div>
      
    </Container>
    </section>
  )
}

export default Hero
