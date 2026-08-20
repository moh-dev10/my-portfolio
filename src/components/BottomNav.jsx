import { Home, LayoutGrid, Briefcase, User, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const NAV_ITEMS = [
  { icon: Home, id: 'home', to: '/' },
  { icon: LayoutGrid, id: 'projects', to: '/projects' },
  { icon: Briefcase, id: 'services', to: '/services' },
  { icon: User, id: 'about', to: '/about' },
  { icon: Send, id: 'contact', to: '/contact' },
];

const BottomNav = () => {
  const { t } = useTranslation();

  return (
    <nav
      aria-label="Mobile navigation"
      className="
        fixed bottom-4 left-1/2 z-50
        -translate-x-1/2
        md:hidden
        rounded-full
        border border-default
        bg-[--bg-card)]/80
        p-1
        shadow-card
        backdrop-blur-xl
      "
    >
      <div className="flex items-center justify-center gap-1 rounded-full px-2 py-1">
        {NAV_ITEMS.map(({ icon: Icon, id, to }) => (
          <NavLink
            key={id}
            to={to}
            end={id === 'home'}
            aria-label={t(id)}
            className={({ isActive }) =>
              `
                group
                flex min-w-12 flex-col
                items-center justify-center
                gap-0.5
                rounded-xl
                px-2 py-1.5
                text-[--text-muted)]
                transition-all duration-300
                active:scale-95
                ${
                  isActive
                    ? 'bg-brand text-white shadow-[--shadow-brand)] '
                    : 'hover:bg-[--bg-subtle)] hover:text-brand'
                }
              `
            }
          >
            <Icon size={17} strokeWidth={2} />

            <span className="text-[9px] font-semibold tracking-tight">
              {t(id)}
            </span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;