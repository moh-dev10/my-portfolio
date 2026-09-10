import { LazyMotion, domAnimation, m } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Container from '../Container';
import heroImg from '/images/profileImg.webp';
import { containerVariants, itemVariants } from '../hero.animations.js';

const MotionLink = m.create(Link);

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="min-h-screen">
      <Container>
        <LazyMotion features={domAnimation}>
          <header
            className="
              grid grid-cols-12 items-center justify-center
              gap-8 pt-30
              text-center md:text-start
            "
          >
            {/* Hero Content */}
            <m.div
              className="
                order-2 col-span-12
                space-y-6 sm:space-y-8
                lg:order-1 lg:col-span-7
              "
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* Availability Badge */}
              <div
                className="
                  flex w-max items-center
                  rounded-full
                  bg-brand/10 px-3 py-1
                  text-sm font-black text-brand
                  dark:bg-brand/40
                "
              >
                <span className="me-2 h-2 w-2 rounded-full bg-brand" />
                {t('hero_badge')}
              </div>

              {/* Heading */}
              <h1
                 className="
                   text-4xl 
                   font-extrabold 
                   leading-[0.95]
                   tracking-[-0.05em]
                   sm:text-5xl
                   md:text-6xl
                   lg:text-7xl
                 "
               >
                 <span className="block text-[--text-main)]">
                   {t('hero_title_line_1')}
                 </span>
               
                 <span className="block bg-gradient-to-r from-brand via-blue-500 to-brand/50 
                 bg-clip-text text-transparent">
                   {t('hero_title_line_2')}
                 </span>
               
                 <span className="block text-[--text-main)]">
                   {t('hero_title_line_3')}
                 </span>
               </h1>

              {/* Description */}
              <p className="mb-8 max-w-xl text-sm sm:text-lg">
                {t('hero_desc')}
              </p>

              {/* CTA Group */}
              <m.div variants={itemVariants}>
                <div
                  className="
                    flex flex-col
                    items-center gap-4
                    md:flex-row md:flex-wrap md:items-start
                  "
                >
                  <MotionLink
                    to="/projects"
                    className="
                      btn-primary bg-brand-gradient-box 
                      flex w-full items-center justify-center gap-3
                      md:w-auto
                    "
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t('viewprojects')}

                    <ArrowRight
                      size={18}
                      className="
                        transition-transform duration-300
                        group-hover:translate-x-2
                      "
                    />
                  </MotionLink>

                  <m.a
                    href="/cv.pdf"
                    download
                    className="
                      btn-secondary
                      flex w-full items-center justify-center gap-3
                      md:w-auto
                    "
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download size={18} />
                    {t('cv_button')}
                  </m.a>
                </div>
              </m.div>
            </m.div>

            {/* Hero Visual */}
            <div
              className="
                order-1 col-span-12
                grid gap-4
                lg:order-2 lg:col-span-5
              "
            >
              <m.figure
                className="
                  relative mx-auto
                  h-64 w-64
                  sm:h-80 sm:w-80
                  md:h-96 md:w-96
                "
                variants={itemVariants}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  ease: 'circOut',
                  delay: 0.3,
                }}
              >
                {/* Glow */}
                <div
                  className="
                    absolute inset-0
                    rounded-full
                    bg-gradient-to-tr
                    from-brand via-blue-500 to-brand/50
                    opacity-30 blur-3xl
                  "
                />

                {/* Profile Image */}
                <m.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    relative h-full w-full
                    overflow-hidden
                    rounded-full
                    border-4 border-white/10
                  "
                >
                  <img
                    src={heroImg}
                    alt="Mohamed - Frontend Developer"
                    width="400"
                    height="400"
                    fetchPriority="high"
                    loading="eager"
                    className="h-full w-full object-cover"
                  />
                </m.div>
              </m.figure>

              {/* Role */}
              <div
                className="
                  mx-auto max-w-fit
                  rounded-full
                  border border-neutral-200
                  bg-white/30 px-2 py-1
                  shadow-xl backdrop-blur-md
                  dark:border-neutral-700
                  dark:bg-slate-800/40
                "
              >
                <span
                  className="
                    bg-gradient-to-r
                    from-brand via-blue-500 to-brand/50
                    bg-clip-text
                    text-sm font-bold uppercase
                    text-transparent
                  "
                >
                  {t('hero_role')}
                </span>
              </div>
            </div>
          </header>
        </LazyMotion>
      </Container>
    </section>
  );
};

export default Hero;