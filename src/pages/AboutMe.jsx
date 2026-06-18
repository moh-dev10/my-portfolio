import React from 'react'
import Container from '../components/Container';
import { useTranslation } from 'react-i18next';
import AboutHero from '../components/sections/AboutHero';
import SkillsGrid from '../components/sections/SkillsGrid';

const AboutMe = () => {
    const { t } = useTranslation();

  return (
        <>
        <AboutHero />
        <SkillsGrid/>
        </>
  )
}

export default AboutMe
