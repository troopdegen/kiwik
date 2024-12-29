import React from 'react'
import { Card, CardContent } from "@/components/ui/card"

const personas = [
  {
    icon: "🌱",
    title: "Builders",
    description: "Desarrolladores, diseñadores y creadores que quieren construir soluciones de impacto."
  },
  {
    icon: "🎨",
    title: "Creadores",
    description: "Artistas, escritores y creativos que buscan nuevas formas de expresión y colaboración."
  },
  {
    icon: "🤝",
    title: "Comunidades",
    description: "Grupos y organizaciones que buscan crecer y generar impacto colectivo."
  },
  {
    icon: "🚀",
    title: "Innovadores",
    description: "Emprendedores y visionarios que quieren transformar ideas en realidad."
  }
]

export function WhoIsForSection() {
  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¿Para quién es kiwik?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            kiwik es para builders, creadores y comunidades que quieren colaborar, 
            crecer y regenerar juntos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-200 border-2 hover:border-green-200
                       flex flex-col items-center text-center p-6"
            >
              <div className="w-16 h-16 rounded-full bg-transparent flex items-center justify-center mb-4
                            group-hover:scale-110 transition-transform duration-200">
                <span className="text-3xl">{persona.icon}</span>
              </div>
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {persona.title}
                </h3>
                <p className="text-gray-600">
                  {persona.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Stats */}
        <div className="mt-20 grid sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
            <p className="text-gray-600">Miembros activos</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
            <p className="text-gray-600">Proyectos lanzados</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">3</div>
            <p className="text-gray-600">Comunidades activas</p>
          </div>
        </div>
      </div>
    </section>
  )
} 