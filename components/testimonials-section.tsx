"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("testimonials-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      name: "Maria Rodriguez",
      location: "Mexico City, Mexico",
      quote:
        "Voice for Peace helped me connect with others who share my passion for creating positive change. Together, we've organized community peace events that have brought our neighborhood closer.",
      image: "/peaceful-woman-smiling.png",
    },
    {
      name: "David Chen",
      location: "Singapore",
      quote:
        "The resources and community here have been invaluable in my journey as a peace educator. I've learned so much about conflict resolution and have been able to help others in my community.",
      image: "/asian-man-peaceful.png",
    },
    {
      name: "Amara Okafor",
      location: "Lagos, Nigeria",
      quote:
        "This platform gave me the courage to start my own peace initiative. The support from the global community has been overwhelming and inspiring.",
      image: "/peaceful-african-woman.png",
    },
  ]

  return (
    <section id="testimonials-section" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`font-montserrat font-black text-3xl md:text-5xl mb-6 glow-text transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Voices of Change
          </h2>
          <p
            className={`font-open-sans text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Hear from peace advocates around the world who are making a difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className={`hover:shadow-xl transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/50 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 200 + 500}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 glow-hover"
                  />
                  <div>
                    <h4 className="font-montserrat font-bold glow-hover">{testimonial.name}</h4>
                    <p className="font-open-sans text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <p className="font-open-sans text-muted-foreground leading-relaxed italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
