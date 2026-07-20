import React from 'react'
import Container from '../components/Container'
import ServiceCard from '../components/ServiceCard'
import { SERVICES } from '../data/services'
import { useTranslation } from 'react-i18next'
import { m, LazyMotion, domAnimation } from 'framer-motion'

const Services = () => {
  const { t } = useTranslation()

  return (
    <section className="py-30">
      <Container>
        <LazyMotion features={domAnimation}>
          <m.header
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 md:text-center"
          >
            <h1 className="text-4xl font-bold">{t('services_title')}</h1>
            <p className="text-gray-600 dark:text-gray-200 leading-relaxed max-w-2xl mx-auto">
              {t('services_desc')}
            </p>
          </m.header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
            {SERVICES.map((service, index) => (
              <m.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard service={service} />
              </m.div>
            ))}
          </div>
        </LazyMotion>
      </Container>
    </section>
  )
}

export default Services
