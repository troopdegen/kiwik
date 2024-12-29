import React from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const features = [
  {
    icon: "🌱",
    title: "Jardínes Infinitos",
    description: "Cultiva y nutre tu red de talento. Conecta con personas que comparten tus valores y visión."
  },
  {
    icon: "🎮",
    title: "Regen Gym",
    description: "Entrena Regen Monsters y compite en batallas de equipo. Desarrolla tus habilidades mientras te diviertes."
  },
  {
    icon: "🛠",
    title: "Aceleramos el Impacto con IA",
    description: "Aprovecha el poder de los agentes y herramientas de IA para dar vida a tus ideas rápidamente y de manera efectiva."
  },
  {
    icon: "💡",
    title: "Launchpad de Ideas",
    description: "Transforma ideas en soluciones financiadas. Impulsa proyectos que generen impacto real."
  }
]

export function FeaturesSection() {
  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Características principales
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Herramientas y espacios diseñados para potenciar tu creatividad y colaboración
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-200 border-2 hover:border-green-200"
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-200">
                    {feature.icon}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 