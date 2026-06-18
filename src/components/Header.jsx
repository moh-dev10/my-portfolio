import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Languages } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const { i18n , t } = useTranslation();

  const toggleLanguage = () => {
    const langs = ['en', 'ar', 'fr'];
    // i18n.language ممكن ترجع 'en-US'، لهذا أحسن نديرو startsWith أو نجيبو أول حرفين
    const currentLang = (i18n.language || 'en').split('-')[0]; 
    const currentIndex = langs.indexOf(currentLang);
    const nextIndex = (currentIndex + 1) % langs.length;
    i18n.changeLanguage(langs[nextIndex]);
  };

  

  const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Projects', to: '/projects' },
  { name: 'About', to: '/about' },
];

  return (
    <header className="fixed top-0 left-0 w-full p-6  bg-white/20 dark:bg-brand/20 backdrop-blur-2xl    flex justify-between items-center z-50">
      {/* Logo */}
      <div className="text-2xl font-black tracking-tighter text-brand">
        Moh<span className="text-[--text-main]">Dev.10</span>
      </div>

      {/* Desktop Navigation - تظهر فقط من md وفوق */}
      <nav className="hidden md:flex items-center gap-1 p-1 bg-brand/5 dark:bg-slate-900/40 backdrop-blur-md rounded-2xl border border-white/10">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            className="px-6 py-2 rounded-xl text-sm font-bold transition-all hover:bg-white/10 hover:text-brand"
          >
            {t(link.name.toLowerCase())} {/* تأكد من إضافة الترجمة في config.js */}
          </Link>
        ))}
      </nav>
      
      <div className="flex gap-3">
        {/* Dark Mode Toggle */}
        <button 
          onClick={toggleTheme} 
          className="w-8 h-8 flex items-center justify-center rounded-2xl bg-white/10 dark:bg-slate-800/50 backdrop-blur-md border border-white/20 shadow-sm text-[var(--text-main)] cursor-pointer"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Language Switcher */}
        <button 
          onClick={toggleLanguage}
          className="uppercase h-8 px-4 flex items-center gap-2 rounded-2xl bg-white/10 dark:bg-slate-800/50 backdrop-blur-md border border-white/20 shadow-sm font-bold text-sm text-[--text-main] uppercase cursor-pointer"
        >
          <Languages size={18} />
          {(i18n.language || 'en').split('-')[0]}
        </button>
      </div>
    </header>
  );
};

export default Header;