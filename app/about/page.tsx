"use client"

import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & Peace Advocate",
      bio: "Former UN mediator with 20+ years experience in conflict resolution",
      image: "/team-sarah.png",
    },
    {
      name: "Marcus Williams",
      role: "Community Outreach Director",
      bio: "Grassroots organizer focused on building local peace initiatives",
      image: "/team-marcus.png",
    },
    {
      name: "Priya Patel",
      role: "Education Program Manager",
      bio: "Curriculum developer specializing in peace education and youth programs",
      image: "/team-priya.png",
    },
  ]

  const values = [
    {
      title: "Unity",
      description: "We believe in the power of bringing people together across all divides",
      icon: "🤝",
    },
    {
      title: "Compassion",
      description: "Every action we take is rooted in empathy and understanding",
      icon: "💝",
    },
    {
      title: "Action",
      description: "We turn peaceful intentions into meaningful, measurable change",
      icon: "⚡",
    },
    {
      title: "Hope",
      description: "We maintain optimism even in the face of the greatest challenges",
      icon: "🌟",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={`font-montserrat font-black text-4xl md:text-6xl mb-6 glow-text transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            About Our Movement
          </h1>
          <p
            className={`font-open-sans text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Voice for Peace was born from the belief that every individual has the power to contribute to a more
            peaceful world. We are a global community of advocates, educators, and changemakers united by our shared
            vision of harmony.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-6 glow-text">Our Story</h2>
              <div className="space-y-4 font-open-sans text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2020 during a time of global uncertainty, Voice for Peace emerged as a beacon of hope for
                  those seeking positive change. What started as a small group of peace advocates has grown into a
                  worldwide movement spanning over 50 countries.
                </p>
                <p>
                  Our journey began with a simple question: "How can we amplify the voices of peace in a world that
                  often seems divided?" The answer led us to create this platform where stories of reconciliation, acts
                  of kindness, and initiatives for peace could be shared and celebrated.
                </p>
                <p>
                  Today, we continue to grow our community, support local peace initiatives, and provide resources for
                  anyone who wants to make a positive impact in their community and beyond.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/unity-celebration.png"
                alt="People from different cultures coming together in peace"
                className="rounded-lg shadow-xl w-full h-auto glow-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-6 glow-text">Our Core Values</h2>
            <p className="font-open-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and shape our approach to building a more peaceful world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="hover:shadow-xl transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/50"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 glow-text hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="font-montserrat font-bold text-lg mb-3 glow-hover">{value.title}</h3>
                  <p className="font-open-sans text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-6 glow-text">Meet Our Team</h2>
            <p className="font-open-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              Dedicated individuals working tirelessly to create positive change in the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className="hover:shadow-xl transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/50"
              >
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 glow-hover"
                  />
                  <h3 className="font-montserrat font-bold text-lg mb-2 glow-hover">{member.name}</h3>
                  <p className="font-open-sans text-primary font-medium mb-3">{member.role}</p>
                  <p className="font-open-sans text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-6 glow-text">Join Our Mission</h2>
          <p className="font-open-sans text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Ready to be part of something bigger? Discover how you can contribute to our global peace movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="font-montserrat font-bold text-lg px-8 py-4 glow-hover hover:scale-105 transition-all duration-300"
            >
              <Link href="/action">Get Involved</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-montserrat font-bold text-lg px-8 py-4 glow-hover hover:scale-105 transition-all duration-300 bg-transparent"
            >
              <Link href="/mission">Read Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
