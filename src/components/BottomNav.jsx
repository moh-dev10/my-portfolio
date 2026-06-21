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
    { icon: <Send size={15} />, label: 'Contact', id: 'contact' },
  ];

  const [activeNav, setActiveNav] = React.useState('home');

  const handleNavigation = (id) => {
    setActiveNav(id);
    navigate(`/${id === 'home'? '' : id}`);
  }

  return (
    <div className=" md:hidden glass-nav ">
      {/* Container الزجاجي */}
      <nav className="flex items-center justify-center gap-4 px-4 py rounded-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/20 dark:border-slate-800 shadow-2xl">
        
        {navItems.map((item) => (
          
            <div className='flex flex-col items-center'>
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`p-2 rounded-full text-[--text-main] hover:bg-brand/20 hover:text-brand cursor-pointer
                  ${activeNav === item.id ? 'bg-brand text-white' : ''} transition-all active:scale-90 group relative`}
              >
                {item.icon}
                {/* Tooltip خفيف يظهر فوق الأيقونة */}
              </button>
                <span className='text-[8px] tracking-tighter'>{item.label}</span>
            </div>
          
        ))}


       
      </nav>
    </div>
  );
};

export default BottomNav;