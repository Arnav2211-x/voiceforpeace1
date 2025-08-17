"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"

export default function FeaturesSection() {
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

    const element = document.getElementById("features-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      title: "Peace Stories",
      description: "Share and discover inspiring stories of peace from around the world",
      icon: "📖",
    },
    {
      title: "Community Action",
      description: "Join local and global initiatives working towards peaceful solutions",
      icon: "🤝",
    },
    {
      title: "Educational Resources",
      description: "Access tools and materials to learn about conflict resolution and peace-building",
      icon: "🎓",
    },
    {
      title: "Global Network",
      description: "Connect with peace advocates and organizations worldwide",
      icon: "🌐",
    },
  ]

  return (
    <section id="features-section" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`font-montserrat font-black text-3xl md:text-5xl mb-6 glow-text transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Building Peace Together
          </h2>
          <p
            className={`font-open-sans text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Discover the tools and community you need to make a meaningful impact in the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className={`hover:shadow-xl transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/50 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 150 + 500}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 glow-text hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-montserrat font-bold text-lg mb-3 glow-hover">{feature.title}</h3>
                <p className="font-open-sans text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
