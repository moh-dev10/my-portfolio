import React from 'react';
import Container from '../components/Container';
import heroImg from '/images/profileImg.webp';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const accounts = [
  { title: 'Github', icon: <FaGithub /> },
  { title: 'LinkedIn', icon: <FaLinkedin /> },
  { title: 'Instagram', icon: <FaInstagram /> },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen py-30">
      <Container>
        <header className='flex flex-col md:flex-row md:justify-center gap-4 items-center'>
          <motion.figure
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            whileHover={{ scale: 1.05 }}
            className="relative w-24 h-24 sm:w-34 sm:h-34 md:w-46 md:h-46 shadow-2xl rounded-full"
          >
            <img
              src={heroImg}
              alt="Mohamed Hadou"
              className="w-full h-full rounded-full object-cover border-4 border-white dark:border-slate-800"
            />
            <span className="absolute inset-0 bg-linear-to-tr from-brand/40 to-transparent rounded-full pointer-events-none"></span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute bottom-1 right-1.25 md:bottom-2 md:right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-slate-900"
            />
          </motion.figure>
          <div className='flex flex-col text-center gap-4'>
            <h2 className='text-2xl font-bold'>{t('contact_title')}</h2>
            <p className='max-w-xs dark:text-gray-400 leading-relaxed'>{t('contact_desc')}</p>
          </div>
        </header>

        <div className='grid grid-cols-3 max-w-md mx-auto gap-6 my-10'>
          {accounts.map((account, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="flex flex-col items-center p-6 border border-neutral-300 dark:border-neutral-700 rounded-2xl bg-white dark:bg-slate-900 shadow-lg"
            >
              <span className="text-2xl mb-2">{account.icon}</span>
              <span className="text-xs text-gray-600 dark:text-gray-100">{account.title}</span>
            </motion.div>
          ))}
        </div>

        <div className='grid md:grid-cols-2'>
          <motion.form
            action=""
            className='flex flex-col p-8 bg-white dark:bg-slate-900 border border-neutral-300 dark:border-neutral-700 rounded-2xl gap-1 bg-card shadow-lg'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <header className='flex items-center gap-3 mb-4'>
              <Send size={24} className='bg-brand/40 rounded-full p-1' />
              <h3 className='font-semibold'>{t('contact_send_message')}</h3>
            </header>
            <label htmlFor="name">{t('contact_name')}</label>
            <input id="name" type="text" placeholder={t('contact_name_placeholder')} className='input' />
            <label htmlFor="email">{t('contact_email')}</label>
            <input id="email" type="email" placeholder={t('contact_email_placeholder')} className='input' />
            <label htmlFor="message">{t('contact_project_details')}</label>
            <textarea id="message" rows="4" placeholder={t('contact_message_placeholder')} className='input' />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-brand text-white p-3 rounded-lg font-bold hover:opacity-90 transition-opacity cursor-pointer"
            >
              {t('contact_send_button')}
            </motion.button>
          </motion.form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
