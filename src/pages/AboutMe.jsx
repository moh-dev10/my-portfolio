import React from 'react'
import Container from '../components/Container';
import { useTranslation } from 'react-i18next';
import AboutHero from '../components/sections/AboutHero';

const AboutMe = () => {
    const { t } = useTranslation();

  return (
        <>
        <AboutHero />
        </>
  )
}

export default AboutMe
