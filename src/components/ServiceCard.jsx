import React from 'react'
import { SERVICES } from '../data/services';

const ServiceCard = ({ title, description, features }) => {
  return (
    <div className='max-w-5xl'>
      {SERVICES.map((service) => (
        <div key={service.id} className=' flex flex-col rounded-2xl p-4 border border-white/10 shadow-lg mb-4'>
            <h2 className='text-xl font-bold'>{service.title}</h2>
            <p className='text-sm text-gray-400'>{service.description}</p>
            <ul className='list-disc list-inside mt-2'>
                {service.features.map((feature, index) => (
                    <li key={index} className='text-sm text-gray-300'>
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
      ))}
    </div>
  )
}

export default ServiceCard
