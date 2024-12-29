import React from 'react'
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden">

          <div className="relative px-6 py-24 sm:px-12 lg:px-16 flex flex-col items-center text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Únete a kiwik hoy
            </h2>
            
            <p className="text-xl text-gray-600 max-w-2xl mb-12">
              Comienza tu viaje regenerativo y forma parte de una comunidad que está 
              transformando ideas en impacto real.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="text-lg px-8"
              >
                🌱 Explorar Comunidades
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="text-lg px-8"
              >
                🛠️ Empezar a Construir
              </Button>
            </div>

            {/* Additional Info */}
            <div className="mt-12 pt-12 border-t border-gray-200 grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Comunidad Vibrante
                </h3>
                <p className="text-gray-600">
                  Conecta con builders y creadores
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Recursos y Herramientas
                </h3>
                <p className="text-gray-600">
                  Todo lo que necesitas para crear
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Soporte 24/7
                </h3>
                <p className="text-gray-600">
                  Estamos aquí para ayudarte
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 