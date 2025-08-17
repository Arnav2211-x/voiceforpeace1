"use client"

import type React from "react"
import Script from "next/script"

import Navigation from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useEffect, useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, BookOpen } from "lucide-react"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    type: "",
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement

    // First Email
    ;(window as any).emailjs
      .sendForm("service_es6nhj8", "template_6ryz0xt", form)
      .then(
        () => {
          alert("📨 Form submitted! Check your email.")
        },
        (err: any) => {
          alert("❌ Failed: " + err.text)
        },
      )

    // Admin Notification
    ;(window as any).emailjs.sendForm("service_ol4hoea", "template_dydlwjq", form).then(
      () => {
        alert("📨 Message sent successfully. You will receive confirmation soon.")
        form.reset()
        setFormData({ name: "", email: "", subject: "", message: "", type: "" })
      },
      (err: any) => {
        alert("❌ Failed to notify admin:\n" + err.text)
      },
    )
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "siddesh.jain@gmail.com",
      description: "Send us a message anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 6265376721",
      description: "Mon-Fri, 9AM-5PM IST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Neelbad, Bhopal, Billabong",
      description: "Open for appointments",
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 hours",
      description: "We respond quickly",
    },
  ]

  const contactTypes = [
    { value: "general", label: "General Inquiry", icon: MessageSquare },
    { value: "story", label: "Submit a Story", icon: BookOpen },
    { value: "volunteer", label: "Volunteer Opportunity", icon: Users },
    { value: "partnership", label: "Partnership", icon: Users },
    { value: "media", label: "Media Inquiry", icon: MessageSquare },
  ]

  return (
    <>
      <Script
        src="https://cdn.emailjs.com/sdk/2.3.2/email.min.js"
        onLoad={() => {
          ;(window as any).emailjs.init("31QbCqc3Pwl5WklLF")
        }}
      />

      <main className="min-h-screen bg-black relative overflow-hidden">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full animate-pulse floating-element"></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-green-400/20 to-teal-500/20 rounded-full animate-bounce floating-element"></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full animate-pulse floating-element"></div>
          <div className="absolute bottom-20 right-10 w-14 h-14 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full animate-bounce floating-element"></div>
          <div className="absolute top-60 left-1/2 w-10 h-10 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-full animate-pulse floating-element"></div>

          {/* Peace symbol floating elements */}
          <div className="absolute top-32 right-32 text-4xl text-cyan-400/30 floating-element">☮</div>
          <div className="absolute bottom-32 left-32 text-3xl text-green-400/30 floating-element">🕊</div>
          <div className="absolute top-1/2 left-16 text-5xl text-blue-400/25 floating-element">🌍</div>
        </div>

        <div className="relative z-10">
          <Navigation />

          {/* Hero Section */}
          <section className="pt-24 pb-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1
                className={`font-montserrat font-black text-4xl md:text-6xl mb-6 text-white glow-text-cyan transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                Get in Touch
              </h1>
              <p
                className={`font-open-sans text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                We'd love to hear from you. Whether you have a question, want to share your story, or are interested in
                getting involved, we're here to connect.
              </p>
            </div>
          </section>

          {/* Contact Info Cards */}
          <section className="pb-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <Card
                      key={info.title}
                      className="hover:shadow-xl transition-all duration-500 hover:scale-105 bg-gray-900/80 backdrop-blur-sm border-gray-700/50 text-center"
                    >
                      <CardContent className="p-6">
                        <Icon className="w-8 h-8 mx-auto mb-4 text-cyan-400 glow-hover" />
                        <h3 className="font-montserrat font-bold text-lg mb-2 text-white glow-hover">{info.title}</h3>
                        <p className="font-open-sans font-medium text-white mb-1">{info.details}</p>
                        <p className="font-open-sans text-sm text-gray-400">{info.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="pb-16 px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700/50 shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="font-montserrat font-black text-2xl md:text-3xl text-white glow-text-cyan">
                    Send Us a Message
                  </CardTitle>
                  <p className="font-open-sans text-gray-300">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-open-sans font-medium text-white">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Enter your full name"
                          required
                          className="glow-hover focus:ring-2 focus:ring-cyan-400/20 bg-gray-800 border-gray-600 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-open-sans font-medium text-white">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="Enter your email address"
                          required
                          className="glow-hover focus:ring-2 focus:ring-cyan-400/20 bg-gray-800 border-gray-600 text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="type" className="font-open-sans font-medium text-white">
                        Inquiry Type *
                      </Label>
                      <Select
                        value={formData.type}
                        onValueChange={(value) => handleInputChange("type", value)}
                        required
                      >
                        <SelectTrigger className="glow-hover focus:ring-2 focus:ring-cyan-400/20 bg-gray-800 border-gray-600 text-white">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600">
                          {contactTypes.map((type) => {
                            const Icon = type.icon
                            return (
                              <SelectItem key={type.value} value={type.value} className="text-white hover:bg-gray-700">
                                <div className="flex items-center">
                                  <Icon className="w-4 h-4 mr-2" />
                                  {type.label}
                                </div>
                              </SelectItem>
                            )
                          })}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="font-open-sans font-medium text-white">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder="Brief subject line"
                        required
                        className="glow-hover focus:ring-2 focus:ring-cyan-400/20 bg-gray-800 border-gray-600 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-open-sans font-medium text-white">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        required
                        className="glow-hover focus:ring-2 focus:ring-cyan-400/20 resize-none bg-gray-800 border-gray-600 text-white"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full font-montserrat font-bold text-lg py-4 bg-cyan-600 hover:bg-cyan-700 text-white glow-hover hover:scale-105 transition-all duration-300"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-4 bg-gray-900/30">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-6 text-white glow-text-cyan">
                  Frequently Asked Questions
                </h2>
                <p className="font-open-sans text-lg text-gray-300">
                  Quick answers to common questions about Voice for Peace
                </p>
              </div>

              <div className="space-y-6">
                <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700/50">
                  <CardContent className="p-6">
                    <h3 className="font-montserrat font-bold text-lg mb-3 text-white glow-hover">
                      How can I get involved with Voice for Peace?
                    </h3>
                    <p className="font-open-sans text-gray-300 leading-relaxed">
                      There are many ways to get involved! You can volunteer for local initiatives, share your peace
                      story, participate in our educational programs, or help spread awareness through social media.
                      Visit our Take Action page to explore all opportunities.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700/50">
                  <CardContent className="p-6">
                    <h3 className="font-montserrat font-bold text-lg mb-3 text-white glow-hover">
                      Can I submit my peace story to be featured?
                    </h3>
                    <p className="font-open-sans text-gray-300 leading-relaxed">
                      We love sharing inspiring stories from our community. Use the contact form above with "Submit a
                      Story" as your inquiry type, or email us directly with your story, photos, and any relevant
                      details.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700/50">
                  <CardContent className="p-6">
                    <h3 className="font-montserrat font-bold text-lg mb-3 text-white glow-hover">
                      Do you offer training programs for organizations?
                    </h3>
                    <p className="font-open-sans text-gray-300 leading-relaxed">
                      Yes! We provide customized peace education and conflict resolution training for schools,
                      businesses, and community organizations. Contact us to discuss your specific needs and we'll
                      create a program that fits your goals.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
