import React from 'react'

const steps = [
  {
    number: "01",
    icon: "🌐",
    title: "Únete o crea una comunidad",
    description: "Encuentra tu tribu o inicia tu propio jardín de innovación."
  },
  {
    number: "02",
    icon: "⭐",
    title: "Completa retos",
    description: "Gana $1UP y Regen Points participando en desafíos comunitarios."
  },
  {
    number: "03",
    icon: "🎯",
    title: "Colecciona Regenmons",
    description: "Comienza tu aventura entrenando y evolucionando tus Regenmons."
  },
  {
    number: "04",
    icon: "🤝",
    title: "Colabora en proyectos",
    description: "Trabaja con otros para crear productos y soluciones de impacto."
  },
  {
    number: "05",
    icon: "🚀",
    title: "Accede a microfinanciamiento",
    description: "Impulsa tus proyectos con $REGEN y el apoyo de la comunidad."
  }
]

export function HowItWorksSection() {
  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un proceso simple para maximizar tu impacto
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-green-200 hidden md:block" />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row gap-8 items-start group"
              >
                {/* Step Number and Icon */}
                <div className="flex-none w-16 h-16 rounded-full bg-white border-2 border-green-200 
                              flex items-center justify-center group-hover:border-green-400 
                              transition-colors duration-300 relative z-10">
                  <span className="text-2xl">{step.icon}</span>
                </div>

                {/* Content */}
                <div className="flex-1 ml-0 md:ml-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                    <span className="text-sm font-bold text-green-600 tracking-wider">
                      PASO {step.number}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 