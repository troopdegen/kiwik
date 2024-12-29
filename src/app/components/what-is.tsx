import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const features = [
  {
    icon: "🌱",
    title: "Convierte ideas en productos y soluciones",
    description: "Transforma tus ideas innovadoras en soluciones tangibles que generen impacto positivo."
  },
  {
    icon: "🤝",
    title: "Colabora con builders y founders",
    description: "Conecta con una comunidad vibrante de creadores y emprendedores comprometidos."
  },
  {
    icon: "💡",
    title: "Accede a microfinanciamiento",
    description: "Obtén el apoyo financiero necesario para escalar tu impacto y hacer crecer tus proyectos."
  }
]

export function WhatIsSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              ¿Qué es kiwik?
            </h2>
            
            {/* Desktop Features List */}
            <div className="hidden lg:block space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Accordion */}
            <div className="lg:hidden">
              <Accordion type="single" collapsible className="w-full">
                {features.map((feature, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      <span className="flex items-center space-x-3">
                        <span>{feature.icon}</span>
                        <span>{feature.title}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      {feature.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative h-[400px] lg:h-[500px] bg-transparent rounded-2xl">
            {/* Placeholder for illustration */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <span className="text-6xl">🌱</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 