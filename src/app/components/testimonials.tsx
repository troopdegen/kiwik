import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const testimonials = [
  {
    quote: "kiwik nos ayudó a lanzar dos proyectos increíbles en nuestra comunidad. La colaboración y el apoyo son extraordinarios.",
    author: "María González",
    role: "Líder Comunitaria",
    avatar: "/avatars/maria.jpg",
    community: "EcoInnova"
  },
  {
    quote: "La combinación de gamificación y herramientas de IA hace que construir soluciones sea divertido y efectivo.",
    author: "Carlos Ruiz",
    role: "Developer",
    avatar: "/avatars/carlos.jpg",
    community: "Tech4Good"
  },
  {
    quote: "Encontré una comunidad que comparte mi visión de regeneración y desarrollo sostenible.",
    author: "Ana Martínez",
    role: "Diseñadora",
    avatar: "/avatars/ana.jpg",
    community: "DesignDAO"
  }
]

export function TestimonialsSection() {
  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Voces de la comunidad
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre cómo kiwik está impactando a builders y comunidades
          </p>
        </div>

        <ScrollArea className="w-full whitespace-nowrap rounded-lg">
          <div className="flex w-max space-x-4 p-4">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="w-[350px] shrink-0 border-2 hover:border-green-200 transition-colors duration-200"
              >
                <CardContent className="p-6">
                  <blockquote className="text-gray-700 italic mb-6 whitespace-normal">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div className="flex items-center space-x-4 pt-4 border-t">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="whitespace-normal">
                      <div className="font-semibold text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role} · {testimonial.community}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  )
} 