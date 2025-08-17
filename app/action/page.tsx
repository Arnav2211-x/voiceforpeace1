"use client"

import Navigation from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useEffect, useState } from "react"
import {
  Users,
  Heart,
  BookOpen,
  Share2,
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
} from "lucide-react"

export default function ActionPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const actionCategories = [
    {
      title: "Volunteer Locally",
      description: "Join peace initiatives in your community",
      icon: Users,
      color: "bg-blue-100 text-blue-800",
      actions: ["Community dialogue facilitator", "Youth peace mentor", "Event organizer", "Translation services"],
    },
    {
      title: "Share Your Story",
      description: "Inspire others with your peace journey",
      icon: Heart,
      color: "bg-red-100 text-red-800",
      actions: ["Submit peace story", "Record video testimony", "Write blog post", "Social media advocacy"],
    },
    {
      title: "Educate & Learn",
      description: "Expand your peace-building knowledge",
      icon: BookOpen,
      color: "bg-green-100 text-green-800",
      actions: ["Take online courses", "Attend workshops", "Read resources", "Join study groups"],
    },
    {
      title: "Spread Awareness",
      description: "Help amplify the message of peace",
      icon: Share2,
      color: "bg-purple-100 text-purple-800",
      actions: ["Social media sharing", "Organize events", "Create content", "Partner with us"],
    },
  ]

  const upcomingEvents = [
    {
      title: "Global Peace Day Celebration",
      date: "September 15, 2025", // Updated to September alternative date
      time: "2:00 PM - 6:00 PM EST",
      location: "Virtual & Local Chapters",
      type: "Community Event",
      participants: 500,
      description:
        "Join thousands worldwide in celebrating International Day of Peace with activities and discussions.",
    },
    {
      title: "Youth Leadership Workshop",
      date: "December 10, 2025", // Updated to December alternative date
      time: "10:00 AM - 4:00 PM EST",
      location: "New York, NY",
      type: "Workshop",
      participants: 50,
      description: "Intensive training for young peace advocates aged 16-25 on leadership and community organizing.",
    },
    {
      title: "Conflict Resolution Masterclass",
      date: "September 28, 2025", // Updated to September alternative date
      time: "1:00 PM - 5:00 PM EST",
      location: "Online",
      type: "Training",
      participants: 200,
      description: "Advanced techniques for mediating conflicts in personal and professional settings.",
    },
  ]

  const impactStats = [
    { number: "10,000+", label: "Active Volunteers", icon: Users },
    { number: "500+", label: "Communities Reached", icon: Globe },
    { number: "1M+", label: "Lives Impacted", icon: Heart },
    { number: "50+", label: "Countries Involved", icon: MapPin },
  ]

  const volunteerLevels = [
    {
      level: "Peace Ambassador",
      commitment: "2-4 hours/week",
      description: "Lead local initiatives and mentor new volunteers",
      benefits: ["Leadership training", "Exclusive events", "Recognition certificate"],
      requirements: ["6+ months experience", "Completed training program"],
    },
    {
      level: "Community Advocate",
      commitment: "1-2 hours/week",
      description: "Support local events and outreach activities",
      benefits: ["Skill development", "Networking opportunities", "Impact reports"],
      requirements: ["Basic orientation", "Background check"],
    },
    {
      level: "Peace Supporter",
      commitment: "Flexible",
      description: "Contribute when you can through various activities",
      benefits: ["Community access", "Resource library", "Monthly updates"],
      requirements: ["Sign up only"],
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
        <div
          className="absolute bottom-20 right-10 w-14 h-14 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full floating-element"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-60 left-1/2 w-10 h-10 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-full floating-element"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className={`font-montserrat font-black text-4xl md:text-6xl mb-6 text-white glow-text-cyan transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Take Action for Peace
            </h1>
            <p
              className={`font-open-sans text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Ready to make a difference? Discover meaningful ways to contribute to the global peace movement and create
              positive change in your community and beyond.
            </p>
            <Button
              asChild
              size="lg"
              className="font-montserrat font-bold text-lg px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white glow-hover hover:scale-105 transition-all duration-300"
            >
              <Link href="#get-started">Get Started Today</Link>
            </Button>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactStats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <Card
                    key={stat.label}
                    className="hover:shadow-xl transition-all duration-500 hover:scale-105 bg-gray-900/80 backdrop-blur-sm border-gray-700/50 text-center"
                  >
                    <CardContent className="p-6">
                      <Icon className="w-8 h-8 mx-auto mb-4 text-cyan-400 glow-hover" />
                      <div className="text-3xl font-montserrat font-black text-cyan-400 glow-text-cyan mb-2">
                        {stat.number}
                      </div>
                      <p className="font-open-sans text-gray-300">{stat.label}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Action Categories */}
        <section id="get-started" className="py-16 px-4 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-6 text-white glow-text-cyan">
                Ways to Get Involved
              </h2>
              <p className="font-open-sans text-lg text-gray-300 max-w-3xl mx-auto">
                Choose the path that resonates with you and start making a positive impact today
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {actionCategories.map((category, index) => {
                const Icon = category.icon
                const getActionUrl = (title: string) => {
                  const urlMap: { [key: string]: string } = {
                    "Volunteer Locally": "/action/volunteer-locally",
                    "Share Your Story": "/action/share-your-story",
                    "Educate & Learn": "/action/educate-learn",
                    "Spread Awareness": "/action/spread-awareness",
                  }
                  return urlMap[title] || `/action/${title.toLowerCase().replace(/\s+/g, "-")}`
                }

                return (
                  <Card
                    key={category.title}
                    className="hover:shadow-xl transition-all duration-500 hover:scale-105 bg-gray-900/80 backdrop-blur-sm border-gray-700/50"
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg ${category.color}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="font-montserrat font-bold text-xl text-white glow-hover">
                            {category.title}
                          </CardTitle>
                          <p className="font-open-sans text-gray-300">{category.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {category.actions.map((action, actionIndex) => (
                          <li key={actionIndex} className="font-open-sans text-sm text-gray-300 flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2 text-cyan-400" />
                            {action}
                          </li>
                        ))}
                      </ul>
                      <Button
                        asChild
                        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white glow-hover hover:scale-105 transition-all duration-300"
                      >
                        <Link href={getActionUrl(category.title)}>
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Volunteer Levels */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-6 text-white glow-text-cyan">
                Volunteer Opportunities
              </h2>
              <p className="font-open-sans text-lg text-gray-300 max-w-3xl mx-auto">
                Find the volunteer level that fits your schedule and commitment
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {volunteerLevels.map((level, index) => (
                <Card
                  key={level.level}
                  className={`hover:shadow-xl transition-all duration-500 hover:scale-105 bg-gray-900/80 backdrop-blur-sm border-gray-700/50 ${index === 1 ? "ring-2 ring-cyan-400/20" : ""}`}
                >
                  <CardHeader className="text-center">
                    {index === 1 && (
                      <Badge className="w-fit mx-auto mb-2 bg-cyan-400/10 text-cyan-400">Most Popular</Badge>
                    )}
                    <CardTitle className="font-montserrat font-bold text-xl text-white glow-hover">
                      {level.level}
                    </CardTitle>
                    <p className="font-open-sans text-cyan-400 font-medium">{level.commitment}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="font-open-sans text-gray-300 mb-6 leading-relaxed">{level.description}</p>

                    <div className="mb-6">
                      <h4 className="font-montserrat font-bold mb-3 text-white">Benefits:</h4>
                      <ul className="space-y-2">
                        {level.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="font-open-sans text-sm text-gray-300 flex items-center">
                            <Star className="w-4 h-4 mr-2 text-cyan-400" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-montserrat font-bold mb-3 text-white">Requirements:</h4>
                      <ul className="space-y-2">
                        {level.requirements.map((requirement, reqIndex) => (
                          <li key={reqIndex} className="font-open-sans text-sm text-gray-300 flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2 text-cyan-400" />
                            {requirement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      asChild
                      className="w-full glow-hover hover:scale-105 transition-all duration-300"
                      variant={index === 1 ? "default" : "outline"}
                    >
                      <Link
                        href="/contact"
                        className={
                          index === 1
                            ? "bg-cyan-600 hover:bg-cyan-700 text-white"
                            : "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                        }
                      >
                        Apply Now
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 px-4 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-6 text-white glow-text-cyan">
                Upcoming Events
              </h2>
              <p className="font-open-sans text-lg text-gray-300 max-w-3xl mx-auto">
                Join us at these upcoming events and connect with fellow peace advocates
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <Card
                  key={event.title}
                  className="hover:shadow-xl transition-all duration-500 hover:scale-105 bg-gray-900/80 backdrop-blur-sm border-gray-700/50"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-cyan-400/10 text-cyan-400">{event.type}</Badge>
                      <div className="flex items-center text-sm text-gray-300">
                        <Users className="w-4 h-4 mr-1" />
                        {event.participants}
                      </div>
                    </div>
                    <CardTitle className="font-montserrat font-bold text-lg text-white glow-hover">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-gray-300">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                    <p className="font-open-sans text-gray-300 text-sm leading-relaxed mb-4">{event.description}</p>
                    <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white glow-hover hover:scale-105 transition-all duration-300">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700/50 text-center">
              <CardContent className="p-8">
                <h3 className="font-montserrat font-black text-2xl md:text-3xl mb-4 text-white glow-text-cyan">
                  Summer Internship Program 2025
                </h3>
                <p className="font-open-sans text-lg text-gray-300 mb-6 leading-relaxed">
                  Join our intensive 12-week summer internship program and gain hands-on experience in peace advocacy,
                  community organizing, and conflict resolution. Applications due April 30, 2025.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="font-montserrat font-bold text-lg px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white glow-hover hover:scale-105 transition-all duration-300"
                >
                  <Link href="/contact">Apply for Internship</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-6 text-white glow-text-cyan">
              Ready to Begin?
            </h2>
            <p className="font-open-sans text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Every journey toward peace begins with a single step. Take yours today and join a community committed to
              creating positive change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="font-montserrat font-bold text-lg px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white glow-hover hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-montserrat font-bold text-lg px-8 py-4 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black glow-hover hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Link href="/resources">Explore Resources</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
