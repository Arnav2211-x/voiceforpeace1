"use client"

import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function MissionPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const goals = [
    {
      title: "Foster Global Understanding",
      description:
        "Break down barriers between communities by promoting dialogue, cultural exchange, and mutual respect across all boundaries.",
      icon: "🌍",
      metrics: "50+ countries engaged",
    },
    {
      title: "Empower Local Action",
      description:
        "Support grassroots peace initiatives by providing resources, training, and connections to local changemakers worldwide.",
      icon: "🚀",
      metrics: "1,000+ local initiatives supported",
    },
    {
      title: "Educate for Peace",
      description:
        "Develop and distribute educational materials that teach conflict resolution, empathy, and peaceful communication skills.",
      icon: "📚",
      metrics: "100,000+ people educated",
    },
    {
      title: "Amplify Peace Voices",
      description:
        "Create platforms and opportunities for peace advocates to share their stories and inspire others to take action.",
      icon: "📢",
      metrics: "10,000+ stories shared",
    },
  ]

  const approaches = [
    {
      title: "Community Building",
      description: "Creating safe spaces for dialogue and connection",
      details: [
        "Online forums for global discussions",
        "Local meetup coordination",
        "Mentorship programs",
        "Peer support networks",
      ],
    },
    {
      title: "Education & Training",
      description: "Providing tools and knowledge for effective peacebuilding",
      details: [
        "Conflict resolution workshops",
        "Cultural competency training",
        "Leadership development programs",
        "Youth peace education",
      ],
    },
    {
      title: "Advocacy & Awareness",
      description: "Raising awareness about peace issues and solutions",
      details: ["Social media campaigns", "Policy advocacy", "Media partnerships", "Public speaking opportunities"],
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
            Our Mission
          </h1>
          <p
            className={`font-open-sans text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            To create a world where peace is not just an ideal, but a lived reality for all people, achieved through
            collective action, understanding, and unwavering commitment to human dignity.
          </p>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-8 glow-text">Our Vision</h2>
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-border/50">
            <p className="font-open-sans text-lg md:text-xl text-foreground leading-relaxed italic">
              "We envision a world where conflicts are resolved through dialogue rather than violence, where diversity
              is celebrated as strength, and where every person has the opportunity to live with dignity, security, and
              hope for the future."
            </p>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-6 glow-text">Our Strategic Goals</h2>
            <p className="font-open-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              Four key areas where we focus our efforts to create lasting positive change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {goals.map((goal, index) => (
              <Card
                key={goal.title}
                className="hover:shadow-xl transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl glow-text hover:scale-110 transition-transform duration-300">
                      {goal.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-montserrat font-bold text-lg mb-2 glow-hover">{goal.title}</h3>
                      <p className="font-open-sans text-muted-foreground mb-3 leading-relaxed">{goal.description}</p>
                      <div className="text-sm font-medium text-primary glow-hover">{goal.metrics}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-6 glow-text">Our Approach</h2>
            <p className="font-open-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              How we work to achieve our mission through proven methodologies and innovative strategies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
              <Card
                key={approach.title}
                className="hover:shadow-xl transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/50"
              >
                <CardContent className="p-6">
                  <h3 className="font-montserrat font-bold text-xl mb-3 glow-hover">{approach.title}</h3>
                  <p className="font-open-sans text-muted-foreground mb-4 leading-relaxed">{approach.description}</p>
                  <ul className="space-y-2">
                    {approach.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="font-open-sans text-sm text-muted-foreground flex items-center">
                        <span className="text-primary mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-6 glow-text">Our Impact</h2>
            <p className="font-open-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              Measuring success through meaningful change in communities worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-card/50 rounded-lg hover:bg-card/80 transition-all duration-300">
              <div className="text-4xl font-montserrat font-black text-primary glow-text mb-2">2M+</div>
              <p className="font-open-sans text-muted-foreground">People Reached</p>
            </div>
            <div className="text-center p-6 bg-card/50 rounded-lg hover:bg-card/80 transition-all duration-300">
              <div className="text-4xl font-montserrat font-black text-primary glow-text mb-2">500+</div>
              <p className="font-open-sans text-muted-foreground">Peace Projects</p>
            </div>
            <div className="text-center p-6 bg-card/50 rounded-lg hover:bg-card/80 transition-all duration-300">
              <div className="text-4xl font-montserrat font-black text-primary glow-text mb-2">75</div>
              <p className="font-open-sans text-muted-foreground">Partner Organizations</p>
            </div>
            <div className="text-center p-6 bg-card/50 rounded-lg hover:bg-card/80 transition-all duration-300">
              <div className="text-4xl font-montserrat font-black text-primary glow-text mb-2">25</div>
              <p className="font-open-sans text-muted-foreground">Awards Received</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-6 glow-text">Be Part of the Solution</h2>
          <p className="font-open-sans text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Our mission is ambitious, but with your help, we can create the peaceful world we all envision. Every action
            matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="font-montserrat font-bold text-lg px-8 py-4 glow-hover hover:scale-105 transition-all duration-300"
            >
              <Link href="/action">Join the Movement</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-montserrat font-bold text-lg px-8 py-4 glow-hover hover:scale-105 transition-all duration-300 bg-transparent"
            >
              <Link href="/resources">Explore Resources</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
