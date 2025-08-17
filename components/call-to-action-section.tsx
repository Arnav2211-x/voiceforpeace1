"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function CallToActionSection() {
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

    const element = document.getElementById("cta-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="cta-section" className="py-20 px-4 bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className={`font-montserrat font-black text-3xl md:text-5xl mb-6 glow-text transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Your Voice Matters
        </h2>

        <p
          className={`font-open-sans text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Every action, no matter how small, contributes to building a more peaceful world. Join thousands of others who
          are already making a difference.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Button
            asChild
            size="lg"
            className="font-montserrat font-bold text-lg px-8 py-4 glow-hover hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Link href="/action">Start Your Journey</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="font-montserrat font-bold text-lg px-8 py-4 glow-hover bg-transparent hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Link href="/gallery">View Impact Stories</Link>
          </Button>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 text-center transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="p-4">
            <div className="text-3xl font-montserrat font-black text-primary glow-text mb-2">10,000+</div>
            <p className="font-open-sans text-muted-foreground">Peace Advocates</p>
          </div>
          <div className="p-4">
            <div className="text-3xl font-montserrat font-black text-primary glow-text mb-2">50+</div>
            <p className="font-open-sans text-muted-foreground">Countries Reached</p>
          </div>
          <div className="p-4">
            <div className="text-3xl font-montserrat font-black text-primary glow-text mb-2">1M+</div>
            <p className="font-open-sans text-muted-foreground">Lives Touched</p>
          </div>
        </div>
      </div>
    </section>
  )
}
