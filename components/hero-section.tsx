"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1
          className={`font-glegoo text-4xl md:text-6xl lg:text-7xl mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-white drop-shadow-[0_0_25px_rgba(34,197,94,1)] [text-shadow:0_0_30px_rgba(34,197,94,0.9),0_0_60px_rgba(34,197,94,0.7),0_0_90px_rgba(34,197,94,0.5)]">
            Voice
          </span>{" "}
          <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(6,182,212,1)] [text-shadow:0_0_30px_rgba(6,182,212,0.9),0_0_60px_rgba(6,182,212,0.7),0_0_90px_rgba(6,182,212,0.5)]">
            for
          </span>{" "}
          <span className="text-white drop-shadow-[0_0_25px_rgba(34,197,94,1)] [text-shadow:0_0_30px_rgba(34,197,94,0.9),0_0_60px_rgba(34,197,94,0.7),0_0_90px_rgba(34,197,94,0.5)]">
            Peace
          </span>
        </h1>

        <p
          className={`font-open-sans text-lg md:text-xl lg:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Join the global movement for peace. Share your voice, connect with others, and help build a more peaceful
          world through unity, understanding, and action.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Button
            asChild
            size="lg"
            className="font-montserrat font-bold text-lg px-8 py-4 glow-hover hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Link href="/action">Take Action Now</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="font-montserrat font-bold text-lg px-8 py-4 glow-hover bg-transparent hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Link href="/about">Learn More</Link>
          </Button>
        </div>

        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="text-4xl mb-4 glow-text hover:scale-110 transition-transform duration-300">🕊️</div>
            <h3 className="font-montserrat font-bold text-lg mb-2 glow-hover">Unite</h3>
            <p className="font-open-sans text-muted-foreground">Bring people together across all boundaries</p>
          </div>

          <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="text-4xl mb-4 glow-text hover:scale-110 transition-transform duration-300">🌍</div>
            <h3 className="font-montserrat font-bold text-lg mb-2 glow-hover">Global Impact</h3>
            <p className="font-open-sans text-muted-foreground">Create positive change worldwide</p>
          </div>

          <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="text-4xl mb-4 glow-text hover:scale-110 transition-transform duration-300">💚</div>
            <h3 className="font-montserrat font-bold text-lg mb-2 glow-hover">Hope</h3>
            <p className="font-open-sans text-muted-foreground">Inspire hope for a better tomorrow</p>
          </div>
        </div>
      </div>
    </section>
  )
}
