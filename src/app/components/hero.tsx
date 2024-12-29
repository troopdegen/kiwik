import React from 'react'
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-transparent">
      
      <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          juega 🎮 <br/>cultiva 🍄<br/> impacta 💥 
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          talento colectivo que transforma ideas en impacto, a través de juegos y comunidades
        </p>
        <div className="flex justify-center mt-8">
          <Button variant="secondary" size="lg" className="text-lg w-1/2">
            🍄 para iniciar
          </Button>
        </div>
        <h3>descubre el jardín infinito de la regeneración</h3>
      </div>
      
      {/* Placeholder for illustration */}
      <div className="absolute bottom-0 right-0 w-full lg:w-1/2 h-1/2 opacity-20 pointer-events-none">
        {/* We'll add the illustration here */}
      </div>
    </section>
  )
} 