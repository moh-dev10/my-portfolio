import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import { ThemeProvider } from './context/ThemeContext'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home'
import AboutMe from './pages/AboutMe';

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
    <HashRouter>

      <ThemeProvider>

        <main>

         <Header />

         <Routes>{/* هنا نحدد الصفحات */}
            <Route path="/" element={<Home/>} />

            <Route path="/home" element={<Home/>} />
            {/* <Route path="/about" element={<AboutMe/>} /> */}
            <Route path="/about" element={<AboutMe/>} />
         </Routes>
         
        </main>

        <BottomNav />
      </ThemeProvider>

    </HashRouter>
    </>
  )
}

export default App
