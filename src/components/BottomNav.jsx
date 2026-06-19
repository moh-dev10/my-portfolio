import React from 'react';
import { Home, LayoutGrid, MessageSquare, User, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom'
const BottomNav = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const navItems = [
    { icon: <Home size={15} />, label: 'Home', id: 'home' },
    { icon: <LayoutGrid size={15} />, label: 'Projects', id: 'projects' },
    { icon: <User size={15} />, label: 'About', id: 'about' },
  ];

  const [activeNav, setActiveNav] = React.useState('home');

  const handleNavigation = (id) => {
    setActiveNav(id);
    navigate(`/${id === 'home'? '' : id}`);
  }

  return (
    <div className=" md:hidden glass-nav ">
      {/* Container الزجاجي */}
      <nav className="flex items-center gap-2 px-2 py rounded-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/20 dark:border-slate-800 shadow-2xl">
        
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigation(item.id)}
            className={`p-4 rounded-full text-[--text-main] hover:bg-brand/20 hover:text-brand cursor-pointer
              ${activeNav === item.id ? 'bg-brand text-white' : ''} transition-all active:scale-90 group relative`}
          >
            {item.icon}
            {/* Tooltip خفيف يظهر فوق الأيقونة */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-brand text-white text-[10px] px-2 py-1 rounded-md">
              {item.label}
            </span>
          </button>
        ))}

        {/* فاصل صغير */}
        <div className="w-px h-6 bg-white/20 mx-2" />

        {/* زر الـ Contact المميز (بلمسة بنفسجية) */}
        <Link to="/contact" className="flex items-center gap-2 bg-brand px-5 py-3 rounded-full text-white font-bold shadow-lg shadow-brand/30 hover:shadow-brand/50 hover:scale-105 active:scale-95 transition-all">
          <Send size={15} />
          <span className="hidden md:inline text-sm">Let's Talk</span>
        </Link>
      </nav>
    </div>
  );
};

export default BottomNav;