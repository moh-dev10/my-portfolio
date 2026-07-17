import React from 'react'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <section>
    <header className="flex flex-col items-center pt-40 space-y-4">
      <h1 className="text-3xl font-bold">Services</h1>
      <p>Welcome to the Services page!</p>
    </header>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-8 max-w-5xl mx-auto">
<ServiceCard 
            key={service.id} 
            title={service.title}
            description={service.description}
            features={service.features}
          />    </div>
    </section>
    
  )
}

export default Services
