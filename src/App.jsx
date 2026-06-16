import React from 'react'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import { ThemeProvider } from './context/ThemeContext'
import Hero from './features/Hero'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import TechSkills from './features/TechSkills';

const App = () => {

// داخل الـ Component App
const { i18n } = useTranslation();

useEffect(() => {
  // إذا كانت اللغة عربية، نديرو 'rtl'، وإلا 'ltr'
  const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.dir = direction;
  document.documentElement.lang = i18n.language;
}, [i18n.language]);


  return (
    <>
      <ThemeProvider>

        <main>

         <Header />

         <Hero />

         <TechSkills />

        </main>

        <BottomNav />
      </ThemeProvider>
    </>
  )
}

export default App
