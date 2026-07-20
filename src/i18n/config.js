import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          // Nav Links
          home: 'Home',
          projects: 'Projects',
          services: 'Services',
          about: 'About',
          contact: 'Contact',

          // Hero Section
          hero_badge: 'Available for projects',
          hero_title: 'HADOU MOHAMED',
          hero_title_accent: 'matter',
          hero_desc: 'I build high-performance, scalable web applications with a focus on modern UI/UX.',
          hero_role: 'Front-End & WordPress Developer',
          cv_button: 'Download CV',
          viewprojects: 'View Projects',
          hireMe: 'Hire Me',

          // About Section
          aboutMe: 'About Me',
          aboutMeDescription:
            "I'm Mohamed, a Front-End Developer & WordPress Specialist. I have extensive experience in building high-performance websites with a focus on modern UI/UX design. I am passionate about turning ideas into digital realities that make a positive impact.",
          tech_stack: 'My Tech Stack',

          // Services Section
          services_title: 'Services',
          services_desc:
            'Professional web development services focused on performance, scalability, and modern design.',

          service_ecommerce_title: 'High-Performance E-commerce',
          service_ecommerce_desc:
            'Tailored online stores built for speed, scalability, and high conversion rates.',
          service_ecommerce_cta: 'Start Your Shop',
          service_ecommerce_feature_1: 'WooCommerce Integration',
          service_ecommerce_feature_2: 'Custom Payment Gateways',
          service_ecommerce_feature_3: 'Advanced Filtering',
          service_ecommerce_feature_4: 'SEO-Optimized',

          service_headless_title: 'Headless WordPress Development',
          service_headless_desc:
            'Modernize your content management by decoupling your backend from a high-performance frontend.',
          service_headless_cta: 'Modernize Your CMS',
          service_headless_feature_1: 'Custom Theme Development',
          service_headless_feature_2: 'REST/GraphQL API',
          service_headless_feature_3: 'Lightning-Fast Load Times',
          service_headless_feature_4: 'Secure Architecture',

          service_optimization_title: 'Web Performance Optimization',
          service_optimization_desc:
            'Audit and improve your existing site’s Core Web Vitals to ensure top-tier user experience.',
          service_optimization_cta: 'Speed Up My Site',
          service_optimization_feature_1: 'LCP/FCP Optimization',
          service_optimization_feature_2: 'Image Compression',
          service_optimization_feature_3: 'Code Splitting',
          service_optimization_feature_4: 'Performance Analytics',

          // Projects Section
          projects_title: 'Selected Projects',
          projects_desc:
            'A collection of recent work focusing on eCommerce solutions, local business sites, and React applications.',

          // Contact Section
          contact_title: "Let's Build Something",
          contact_desc:
            'Junior Front-End & WordPress Developer ready to bring your ideas to life.',
          contact_send_message: 'Send a message',
          contact_name: 'Name',
          contact_email: 'Email',
          contact_project_details: 'Project Details',
          contact_name_placeholder: 'Mohamed Hadou',
          contact_email_placeholder: 'mohdev@example.com',
          contact_message_placeholder: 'Tell me about your project...',
          contact_send_button: 'Send Message',
        },
      },
      fr: {
        translation: {
          // Nav Links
          home: 'Accueil',
          projects: 'Projets',
          services: 'Services',
          about: 'À propos',
          contact: 'Contact',

          // Hero Section
          hero_badge: 'Disponible pour des projets',
          hero_title: 'HADOU MOHAMED',
          hero_title_accent: 'comptent',
          hero_desc:
            "Je crée des applications web performantes et évolutives avec un focus sur l'UI/UX moderne.",
          hero_role: 'Développeur Front-End & WordPress',
          cv_button: 'Télécharger le CV',
          viewprojects: 'Voir les projets',
          hireMe: 'Embauchez-moi',

          // About Section
          aboutMe: 'À propos de moi',
          aboutMeDescription:
            "Je suis Mohamed, développeur Front-End & Expert WordPress. J'ai une vaste expérience dans la création de sites web à haute performance avec un focus sur le design moderne et convivial. Je suis passionné par la transformation des idées en réalités numériques qui ont un impact positif.",
          tech_stack: 'Mon stack technique',

          // Services Section
          services_title: 'Services',
          services_desc:
            'Services de développement web professionnels axés sur la performance, la scalabilité et le design moderne.',

          service_ecommerce_title: 'E-commerce haute performance',
          service_ecommerce_desc:
            'Boutiques en ligne sur mesure, conçues pour la vitesse, la scalabilité et un taux de conversion élevé.',
          service_ecommerce_cta: 'Lancer votre boutique',
          service_ecommerce_feature_1: 'Intégration WooCommerce',
          service_ecommerce_feature_2: 'Passerelles de paiement personnalisées',
          service_ecommerce_feature_3: 'Filtrage avancé',
          service_ecommerce_feature_4: 'Optimisé pour le SEO',

          service_headless_title: 'Développement WordPress headless',
          service_headless_desc:
            'Modernisez votre gestion de contenu en séparant le backend d’un frontend haute performance.',
          service_headless_cta: 'Moderniser votre CMS',
          service_headless_feature_1: 'Développement de thèmes sur mesure',
          service_headless_feature_2: 'API REST/GraphQL',
          service_headless_feature_3: 'Temps de chargement ultra-rapides',
          service_headless_feature_4: 'Architecture sécurisée',

          service_optimization_title: 'Optimisation des performances web',
          service_optimization_desc:
            'Auditez et améliorez les Core Web Vitals de votre site pour une expérience utilisateur optimale.',
          service_optimization_cta: 'Accélérer mon site',
          service_optimization_feature_1: 'Optimisation LCP/FCP',
          service_optimization_feature_2: 'Compression d’images',
          service_optimization_feature_3: 'Code splitting',
          service_optimization_feature_4: 'Analyses de performance',

          // Projects Section
          projects_title: 'Projets sélectionnés',
          projects_desc:
            'Une sélection de travaux récents axés sur l’e-commerce, les sites locaux et les applications React.',

          // Contact Section
          contact_title: 'Construisons quelque chose',
          contact_desc:
            'Développeur Front-End & WordPress junior, prêt à donner vie à vos idées.',
          contact_send_message: 'Envoyer un message',
          contact_name: 'Nom',
          contact_email: 'E-mail',
          contact_project_details: 'Détails du projet',
          contact_name_placeholder: 'Mohamed Hadou',
          contact_email_placeholder: 'mohdev@example.com',
          contact_message_placeholder: 'Parlez-moi de votre projet...',
          contact_send_button: 'Envoyer le message',
        },
      },
    },
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
