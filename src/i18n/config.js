import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    // ركز هنا: resources لازم تكون مباشرة تحتها اللغات
    resources: {
      en: {
        translation: {
          // Nav Links
          home: "Home",
          projects: "Projects",
          about: "About", 

          // Hero Section

          hero_badge: "Available for projects",
          hero_title: "Hi, I'm Mohamed, a Front-End & WordPress Developer.",
          hero_title_accent: "matter",
          hero_desc: "Front-End Developer & WordPress Specialist based in Algeria. I build high-performance websites with a focus on modern UI/UX.",
          cv_button: "Download CV",
          projects: "View Projects",
          hire: "Hire Me" // لا تنسى إضافة المفاتيح الناقصة
        }
      },
      ar: {
        translation: {
          // Nav Links
          home: "الرئيسية",
          projects: "المشاريع",
          about: "عنّي",

          // Hero Section

          hero_badge: "متاح للمشاريع",
          hero_title: "مرحبًا، أنا محمد، مطور واجهات أمامية ومتخصص في ووردبريس.",
          hero_title_accent: "تصنع الأثر",
          hero_desc: "مطور واجهات أمامية ومتخصص في ووردبريس مقيم في الجزائر. أبني مواقع عالية الأداء مع التركيز على تصميم حديث وسهل الاستخدام.",
          cv_button: "تحميل السيرة الذاتية",
          projects: "عرض المشاريع",
          hire: "وظفني"
        }
      },
      fr: {
        translation: {
          // Nav Links
          home: "Accueil",
          projects: "Projets",
          about: "À propos", 
          // Hero Section
          hero_badge: "Disponible pour des projets",
          hero_title: "Salut, je suis Mohamed, développeur Front-End & WordPress.",
          hero_title_accent: "comptent",
          hero_desc: "Développeur Frontend & Expert WordPress basé en Algérie. Je crée des sites web à haute performance avec un focus sur l'UI/UX moderne.",
          cv_button: "Télécharger le CV",
          projects: "Voir les projets",
          hire: "Embauchez-moi"
        }
      }
    },
    // هادي اختيارية لتسهيل الـ Debugging في البداية
    debug: true, 
    interpolation: {
      escapeValue: false, // React ديجا تدير escape للـ XSS
    }
  });

export default i18n;