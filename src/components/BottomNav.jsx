import React from 'react';
import { Home, LayoutGrid, Briefcase, User, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {useNavigate} from 'react-router-dom';
const BottomNav = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const navItems = [
    { icon: <Home size={15} />, id: 'home' },
    { icon: <LayoutGrid size={15} />, id: 'projects' },
    { icon: <Briefcase size={15} />, id: 'services' },
    { icon: <User size={15} />, id: 'about' },
    { icon: <Send size={15} />, id: 'contact' },
  ];

  const [activeNav, setActiveNav] = React.useState('home');

  const handleNavigation = (id) => {
    setActiveNav(id);
    navigate(`/${id === 'home'? '' : id}`);
  }

  return (
    <div className=" md:hidden fixed bottom-4 left-1/2 -translate-x-1/2  rounded-full border border-neutral-300 dark:border-neutral-600 backdrop-blur-3xl 
    z-50 px-1 py-1 mt-20">
      {/* Container الزجاجي */}
      <nav className="flex items-center justify-center gap-2 px-3 py rounded-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/20 dark:border-slate-800 shadow-2xl">
        
        {navItems.map((item) => (
          
            <div key={item.id} className='flex flex-col items-center'>
              <button
                onClick={() => handleNavigation(item.id)}
                className={`p-2 rounded-full text-[--text-main] hover:bg-brand/20 hover:text-brand cursor-pointer
                  ${activeNav === item.id ? 'bg-brand text-white' : ''} transition-all active:scale-90 group relative`}
              >
                {item.icon}
                {/* Tooltip خفيف يظهر فوق الأيقونة */}
              </button>
                <span className='text-[8px] tracking-tighter'>{t(item.id)}</span>
            </div>
          
        ))}


       
      </nav>
    </div>
  );
};

export default BottomNav;