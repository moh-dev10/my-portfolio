import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const ServiceCard = ({ service }) => {
  const { t } = useTranslation()

  return (
    <article className="flex flex-col h-full rounded-3xl p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
      <header className="flex items-start justify-between gap-3">
        <h2 className="text-xl font-bold hover:text-brand transition-colors duration-300">
          {t(service.titleKey)}
        </h2>
        <ArrowUpRight size={18} className="text-brand shrink-0" />
      </header>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
        {t(service.descriptionKey)}
      </p>

      <ul className="list-disc list-inside mt-4 space-y-1 flex-grow">
        {service.featureKeys.map((featureKey) => (
          <li key={featureKey} className="text-sm text-gray-600 dark:text-gray-300">
            {t(featureKey)}
          </li>
        ))}
      </ul>

      <footer className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:gap-3 transition-all"
        >
          {t(service.ctaKey)}
          <ArrowUpRight size={16} />
        </Link>
      </footer>
    </article>
  )
}

export default ServiceCard
