import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/useTheme';
import { Sun, Moon, Languages } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'home', to: '/' },
  { label: 'projects', to: '/projects' },
  { label: 'services', to: '/services' },
  { label: 'about', to: '/about' },
];

const LANGUAGES = ['en', 'fr'];

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const { i18n, t } = useTranslation();

  const currentLanguage = (i18n.language || 'en').split('-')[0];

  const toggleLanguage = () => {
    const currentIndex = LANGUAGES.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % LANGUAGES.length;

    i18n.changeLanguage(LANGUAGES[nextIndex]);
  };

  return (
    <header
      className="
        fixed inset-x-0 top-0 z-50
        border-b
        border-default
        bg-[color-mix(in_srgb,var(--bg-main),transparent_20%)]
        backdrop-blur-xl
      "
    >
      <div className="container-page flex h-20 items-center justify-between">
        
        {/* Logo */}
        <NavLink
          to="/"
          aria-label="MohDev10 home"
          className="
            text-2xl font-black tracking-tighter
            text-brand
            transition-opacity duration-300
            hover:opacity-80
          "
        >
          Moh<span className="text-[var(--text-main)]">Dev10</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="
            hidden items-center gap-1
            rounded-xl border
            border-default
            bg-[var(--bg-card)]
            p-1
            md:flex
          "
        >
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
                to={to}
                className={({ isActive }) =>
                  `
                    rounded-lg
                    px-5 py-2
                    text-sm font-bold
                    transition-all duration-300
                    ${
                      isActive
                        ? 'bg-[var(--bg-subtle)] text-brand'
                        : 'text-muted hover:bg-[var(--bg-subtle)] hover:text-brand'
                    }
                  `
                }
            >
              {t(label)}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={isDark}           
             className="
              flex h-10 w-10
              items-center justify-center
              rounded-lg
              border border-default
              bg-[--bg-card)]
              text-[--text-main)]
              transition-all duration-300
              hover:border-[--border-hover)]
              hover:text-brand
              active:scale-95
              cursor-pointer
            "
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Language Switcher */}
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={`Switch language. Current language: ${currentLanguage}`}
            className="
              flex h-10 items-center gap-2
              rounded-lg
              border border-default
              bg-[var(--bg-card)]
              px-3
              text-sm font-bold uppercase
              text-[var(--text-main)]
              transition-all duration-300
              hover:border-[var(--border-hover)]
              hover:text-brand
              active:scale-95
              cursor-pointer
            "
          >
            <Languages size={17} />
            <span>{currentLanguage}</span>
          </button>

        </div>
      </div>
    </header>
  );
};

export default Header;