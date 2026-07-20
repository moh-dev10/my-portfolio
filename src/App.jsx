import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import { ThemeProvider } from './context/ThemeContext'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
const AboutMe = lazy(() => import('./pages/AboutMe'));
import Projects from './pages/Projects';
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));
// import BackgroundAnimation from './components/BackgroundAnimation';
import { useLocation } from 'react-router-dom';
import {  AnimatePresence } from 'framer-motion';
import { PageTransition } from './components/PageTransition';
import { lazy ,Suspense } from 'react';

const App = () => {

// داخل الـ Component App
// const { i18n } = useTranslation();

const location = useLocation();

// useEffect(() => {
//   // إذا كانت اللغة عربية، نديرو 'rtl'، وإلا 'ltr'
//   const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';
//   document.documentElement.dir = direction;
//   document.documentElement.lang = i18n.language;
// }, [i18n.language]);


  return (
    <>

      <ThemeProvider>

        <main>

          {/* <BackgroundAnimation/> */}

         <Header />
         
<AnimatePresence mode='wait'>
       <Suspense fallback={<div className="loading-spinner">Loading...</div>}>

           <Routes location={location} key={location.pathname}>{/* هنا نحدد الصفحات */}
              <Route path="/" element={<Home/>} />
  
              <Route path="/home" element={<PageTransition><Home /></PageTransition>} />
  
              <Route path="/about" element={<PageTransition><AboutMe /></PageTransition>} />

              <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
  
              <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
  
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
           </Routes>
           
       </Suspense>
</AnimatePresence>
         
        </main>

        <BottomNav />
      </ThemeProvider>

    </>
  )
}

export default App
