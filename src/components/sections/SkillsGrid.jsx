import React from 'react'
import Container from '../../components/Container'
import { Code2, Database, Layout, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const skills = [
    { title: "Front-End", icon: <Layout />, techs: ["React", "TypeScript", "Tailwind"] },
    { title: "WordPress", icon: <Code2 />, techs: ["Custom Themes", "Elementor", "Plugins"] },
    { title: "Tools", icon: <Smartphone />, techs: ["Git", "Vite", "Framer Motion"] },
];


// تعريف الـ Variants للحركة
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};


const SkillsGrid = () => {

    const { t } = useTranslation(); 
  return (
    <section id='skills' className='py-24'>
        <Container>
            <h2 className="text-4xl font-bold mb-8 text-center">{t('tech_stack')}</h2>
            <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} 
            className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
             variants={cardVariants}
             key={index}
             className="p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="text-brand mb-4">{skill.icon}</div>
              <h3 className="text-xl  font-bold mb-4">{skill.title}</h3>
              <ul className="space-y-2">
                {skill.techs.map((t) => (
                  <li key={t} className="text-gray-600 dark:text-gray-400 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand mr-2"></span>
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        </Container>
    </section>
  )
}

export default SkillsGrid
