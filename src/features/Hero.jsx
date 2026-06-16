
import React from 'react'
import { useTranslation } from 'react-i18next';
import { ArrowRight, Contact, Download  } from 'lucide-react';
import Container from '../components/Container';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id='hero' className=' min-h-screen '>
      <Container>
        {/* content side */}
        <div className='grid grid-cols-12  items-center justify-center text-center md:text-start  gap-8 pt-20'>

        
        <div className='col-span-12 lg:col-span-7 space-y-6'>
          {/* badge */}
          <div className='flex items-center text-brand text-sm bg-brand/10 w-max px-3 py-1 rounded-full 
          font-black animate-pulse'>
            <span className=' flex items-center w-2 h-2 bg-brand rounded-full me-2'></span>
            {t('hero_badge')}
          </div>
          {/* title */}
          <h1 className='text-4xl sm:text-5xl md:text-6xl  font-black tracking-tight leading-[1.2em]'>
            {t('hero_title')}
          </h1>
          {/* description */}
          <p className='text-sm sm:text-lg max-w-xl mb-8 '>
            {t('hero_desc')}
          </p>

          {/* buttons */}
          <div className=' space-y-4'>
            <div className='flex flex-col  items-center md:items-start md:flex-row md:flex-wrap gap-4'>
              <button className=' flex items-center justify-center gap-3 max-w-fit btn-primary'>
                {t('projects')}
                <ArrowRight size={18}/>
              </button>
              <button className=' flex items-center justify-center gap-3 max-w-fit btn-secondary'>
                {t('hire')}
                <Contact size={18}/>
              </button>
          <button className='md:w-full flex items-center justify-center sm:justify-start gap-2  cursor-pointer hover:underline'>
            <Download size={18} className='inline mr-2' />
            {t('cv_button')}
          </button>
            </div>
          </div>
        </div>

        {/* image side */}
        <div className='col-span-12 lg:col-span-5 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border-brand-light border-2  overflow-hidden mx-auto'>
          <img src="images/profileImg.webp"
           alt="Mohamed - Frontend Developer" 
          className='w-full h-auto object-cover ' />
        </div>
        </div>
      
    </Container>
    </section>
  )
}

export default Hero
