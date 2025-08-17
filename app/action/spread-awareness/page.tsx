"use client"

import Navigation from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Share2, ArrowLeft, Users, Calendar, Megaphone, Heart, CheckCircle, ExternalLink } from "lucide-react"

export default function SpreadAwarenessPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const awarenessActions = [
    {
      title: "Social Media Advocacy",
      icon: Share2,
      description: "Amplify peace messages across social platforms",
      actions: [
        "Share daily peace quotes and stories",
        "Use #VoiceForPeace hashtag",
        "Create peace-themed content",
        "Engage with peace communities",
      ],
      impact: "Reach 1000+ people monthly",
      difficulty: "Easy",
    },
    {
      title: "Community Events",
      icon: Calendar,
      description: "Organize local peace-building events",
      actions: [
        "Host peace circles in your neighborhood",
        "Organize interfaith dialogue sessions",
        "Plan community service projects",
        "Coordinate peace walks",
      ],
      impact: "Engage 50-200 local residents",
      difficulty: "Moderate",
    },
    {
      title: "Content Creation",
      icon: Megaphone,
      description: "Create original peace-focused content",
      actions: [
        "Write blog posts about peace",
        "Create educational videos",
        "Design infographics",
        "Start a peace podcast",
      ],
      impact: "Educate hundreds of people",
      difficulty: "Moderate",
    },
    {
      title: "Partnership Building",
      icon: Users,
      description: "Connect with organizations and influencers",
      actions: [
        "Reach out to local organizations",
        "Collaborate with schools",
        "Partner with faith communities",
        "Connect with peace influencers",
      ],
      impact: "Multiply your reach 10x",
      difficulty: "Advanced",
    },
  ]

  const socialMediaKit = [
    {
      type: "Graphics Pack",
      items: "20 peace-themed graphics",
      format: "PNG, JPG",
    },
    {
      type: "Video Templates",
      items: "5 customizable video templates",
      format: "MP4",
    },
    {
      type: "Caption Library",
      items: "50+ ready-to-use captions",
      format: "Text file",
    },
    {
      type: "Hashtag Guide",
      items: "Curated hashtag collections",
      format: "PDF",
    },
  ]

  const partnershipOpportunities = [
    {
      organization: "Local Schools",
      opportunity: "Peace education programs",
      commitment: "2-4 hours/month",
      impact: "Reach 100-500 students",
    },
    {
      organization: "Faith Communities",
      opportunity: "Interfaith dialogue events",
      commitment: "4-6 hours/month",
      impact: "Bridge community divides",
    },
    {
      organization: "Community Centers",
      opportunity: "Conflict resolution workshops",
      commitment: "6-8 hours/month",
      impact: "Train 20-50 community members",
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
          <div className="max-w-6xl mx-auto">
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
              Spread Awareness
            </h1>
            <p
              className={`font-open-sans text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-12 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Help amplify the message of peace by spreading awareness through social media, community events, content
              creation, and strategic partnerships.
            </p>

            {/* Awareness Actions */}
            <div className="mb-16">
              <h2 className="font-montserrat font-black text-3xl mb-8 text-white glow-text-cyan">
                Ways to Spread Awareness
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {awarenessActions.map((action, index) => {
                  const Icon = action.icon
                  return (
                    <Card
                      key={action.title}
                      className="hover:shadow-xl transition-all duration-500 hover:scale-105 bg-gray-900/80 backdrop-blur-sm border-gray-700/50"
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 rounded-lg bg-purple-400/10">
                              <Icon className="w-5 h-5 text-purple-400" />
                            </div>
                            <Badge className="bg-purple-400/10 text-purple-400">{action.difficulty}</Badge>
                          </div>
                        </div>
                        <CardTitle className="font-montserrat font-bold text-xl text-white glow-hover">
                          {action.title}
                        </CardTitle>
                        <p className="font-open-sans text-gray-300">{action.description}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <h5 className="font-montserrat font-bold text-white mb-3">Action Items:</h5>
                          <ul className="space-y-2">
                            {action.actions.map((item, itemIndex) => (
                              <li key={itemIndex} className="font-open-sans text-sm text-gray-300 flex items-center">
                                <CheckCircle className="w-4 h-4 mr-2 text-cyan-400" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mb-4 p-3 bg-cyan-400/10 rounded-lg">
                          <div className="flex items-center mb-1">
                            <Heart className="w-4 h-4 mr-2 text-cyan-400" />
                            <span className="font-montserrat font-bold text-cyan-400 text-sm">Expected Impact:</span>
                          </div>
                          <p className="font-open-sans text-gray-300 text-sm">{action.impact}</p>
                        </div>
                        <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white glow-hover hover:scale-105 transition-all duration-300">
                          Get Started
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Social Media Kit */}
            <div className="mb-16">
              <h2 className="font-montserrat font-black text-3xl mb-8 text-white glow-text-cyan">
                Free Social Media Kit
              </h2>
              <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700/50">
                <CardHeader>
                  <CardTitle className="font-montserrat font-bold text-2xl text-white glow-hover text-center">
                    Download Our Complete Social Media Toolkit
                  </CardTitle>
                  <p className="font-open-sans text-gray-300 text-center">
                    Everything you need to start spreading peace awareness on social media
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {socialMediaKit.map((item, index) => (
                      <div key={item.type} className="text-center p-4 bg-gray-800/50 rounded-lg">
                        <h4 className="font-montserrat font-bold text-white mb-2">{item.type}</h4>
                        <p className="font-open-sans text-sm text-gray-300 mb-1">{item.items}</p>
                        <Badge className="bg-cyan-400/10 text-cyan-400 text-xs">{item.format}</Badge>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white glow-hover hover:scale-105 transition-all duration-300 font-montserrat font-bold">
                    Download Social Media Kit
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Partnership Opportunities */}
            <div>
              <h2 className="font-montserrat font-black text-3xl mb-8 text-white glow-text-cyan">
                Partnership Opportunities
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {partnershipOpportunities.map((partnership, index) => (
                  <Card
                    key={partnership.organization}
                    className="hover:shadow-xl transition-all duration-500 hover:scale-105 bg-gray-900/80 backdrop-blur-sm border-gray-700/50"
                  >
                    <CardHeader>
                      <Badge className="w-fit bg-green-400/10 text-green-400 mb-2">Partnership</Badge>
                      <CardTitle className="font-montserrat font-bold text-lg text-white glow-hover">
                        {partnership.organization}
                      </CardTitle>
                      <p className="font-open-sans text-gray-300">{partnership.opportunity}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4 text-sm text-gray-300">
                        <div>⏱️ Commitment: {partnership.commitment}</div>
                        <div>🎯 Impact: {partnership.impact}</div>
                      </div>
                      <Button
                        asChild
                        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white glow-hover hover:scale-105 transition-all duration-300"
                      >
                        <Link href="/contact">Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
