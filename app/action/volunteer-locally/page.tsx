"use client"

import Navigation from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useEffect, useState } from "react"
import { MapPin, Clock, ArrowLeft, CheckCircle, Star } from "lucide-react"

export default function VolunteerLocallyPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const localOpportunities = [
    {
      title: "Community Dialogue Facilitator",
      location: "Various Locations",
      commitment: "4-6 hours/month",
      description:
        "Lead structured conversations between diverse community groups to build understanding and resolve conflicts.",
      requirements: ["Completed facilitation training", "Strong communication skills", "Neutral perspective"],
      impact: "Help resolve 15+ community conflicts per year",
    },
    {
      title: "Youth Peace Mentor",
      location: "Schools & Community Centers",
      commitment: "2-3 hours/week",
      description: "Guide young people in conflict resolution skills and peaceful communication techniques.",
      requirements: ["Background check", "Youth mentoring experience preferred", "Patience and empathy"],
      impact: "Mentor 10-15 youth annually",
    },
    {
      title: "Event Organizer",
      location: "Community Venues",
      commitment: "8-10 hours/month",
      description: "Plan and coordinate peace-building events, workshops, and community gatherings.",
      requirements: ["Event planning experience", "Strong organizational skills", "Local connections"],
      impact: "Organize 6-8 events per year reaching 500+ people",
    },
  ]

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full floating-element"></div>
        <div
          className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-green-400/20 to-teal-500/20 rounded-full floating-element"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full floating-element"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10">
        <Navigation />

        <section className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Button
              asChild
              variant="outline"
              className="mb-6 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
            >
              <Link href="/action">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Take Action
              </Link>
            </Button>

            <h1
              className={`font-montserrat font-black text-4xl md:text-6xl mb-6 text-white glow-text-cyan transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Volunteer Locally
            </h1>
            <p
              className={`font-open-sans text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-12 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Make a direct impact in your community by joining local peace initiatives. Connect with neighbors, build
              bridges, and create lasting change right where you live.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
              {localOpportunities.map((opportunity, index) => (
                <Card
                  key={opportunity.title}
                  className="hover:shadow-xl transition-all duration-500 hover:scale-105 bg-gray-900/80 backdrop-blur-sm border-gray-700/50"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-blue-400/10 text-blue-400">Local Volunteer</Badge>
                      <div className="flex items-center text-sm text-gray-300">
                        <Clock className="w-4 h-4 mr-1" />
                        {opportunity.commitment}
                      </div>
                    </div>
                    <CardTitle className="font-montserrat font-bold text-xl text-white glow-hover">
                      {opportunity.title}
                    </CardTitle>
                    <div className="flex items-center text-sm text-gray-300">
                      <MapPin className="w-4 h-4 mr-2" />
                      {opportunity.location}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-open-sans text-gray-300 mb-6 leading-relaxed">{opportunity.description}</p>

                    <div className="mb-6">
                      <h4 className="font-montserrat font-bold mb-3 text-white">Requirements:</h4>
                      <ul className="space-y-2">
                        {opportunity.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="font-open-sans text-sm text-gray-300 flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2 text-cyan-400" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6 p-4 bg-cyan-400/10 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Star className="w-4 h-4 mr-2 text-cyan-400" />
                        <span className="font-montserrat font-bold text-cyan-400">Expected Impact:</span>
                      </div>
                      <p className="font-open-sans text-gray-300 text-sm">{opportunity.impact}</p>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-cyan-600 hover:bg-cyan-700 text-white glow-hover hover:scale-105 transition-all duration-300"
                    >
                      <Link href="/contact">Apply for This Role</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
