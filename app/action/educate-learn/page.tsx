"use client"

import Navigation from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowLeft, Clock, Users, Star, Play, Download, X, QrCode } from "lucide-react"

export default function EducateLearnPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [selectedWorkshop, setSelectedWorkshop] = useState<any>(null)
  const [paymentForm, setPaymentForm] = useState({
    name: "",
    email: "",
    phone: "",
    upiId: "",
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleStartCourse = (courseTitle: string) => {
    alert(
      `🎓 Starting course: "${courseTitle}"\n\nYou will be redirected to the course platform. Please check your email for login credentials.`,
    )
    window.open(`https://learn.voiceforpeace.org/course/${courseTitle.toLowerCase().replace(/\s+/g, "-")}`, "_blank")
  }

  const handleWorkshopRegistration = (workshopTitle: string, price: string) => {
    if (price === "Free") {
      alert(
        `✅ Successfully registered for: "${workshopTitle}"\n\nConfirmation email sent! Check your inbox for workshop details and joining instructions.`,
      )
    } else {
      setSelectedWorkshop({ title: workshopTitle, price })
      setShowPaymentModal(true)
    }
  }

  const handleUPIPayment = () => {
    if (!paymentForm.name || !paymentForm.email || !paymentForm.phone) {
      alert("Please fill in all required fields")
      return
    }

    const upiUrl = `upi://pay?pa=6265376721@fam&pn=Voice%20For%20Peace&am=300&cu=INR&tn=Workshop%20Registration%20${selectedWorkshop?.title}`

    alert(
      `Payment initiated for ${selectedWorkshop?.title}\n\nAmount: ₹300\nUPI ID: 6265376721@fam\n\nPlease complete the payment and send screenshot to confirm registration.`,
    )

    window.open(upiUrl, "_blank")

    setPaymentForm({ name: "", email: "", phone: "", upiId: "" })
    setShowPaymentModal(false)
  }

  const generateQRCode = () => {
    const qrData = `upi://pay?pa=6265376721@fam&pn=Voice%20For%20Peace&am=300&cu=INR&tn=Workshop%20Registration`
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrData)}`
  }

  const generateResourceContent = (title: string, type: string) => {
    const baseContent = `
VOICE FOR PEACE - ${title.toUpperCase()}
${type}
Generated on: ${new Date().toLocaleDateString()}

========================================

INTRODUCTION
This ${type.toLowerCase()} provides comprehensive guidance on peace-building practices and conflict resolution techniques.

TABLE OF CONTENTS
1. Understanding Peace Building
2. Conflict Analysis Framework
3. Communication Strategies
4. Community Engagement
5. Practical Tools and Techniques
6. Case Studies
7. Resources and References

========================================

CHAPTER 1: UNDERSTANDING PEACE BUILDING

Peace building is a comprehensive approach to addressing the root causes of conflict and creating sustainable peace. It involves:

• Conflict prevention and early warning systems
• Mediation and dialogue facilitation
• Community reconciliation processes
• Institutional capacity building
• Social and economic development

Key Principles:
- Inclusivity: Ensuring all voices are heard
- Sustainability: Building long-term solutions
- Cultural Sensitivity: Respecting local contexts
- Empowerment: Building local capacity

========================================

CHAPTER 2: CONFLICT ANALYSIS FRAMEWORK

Understanding conflict requires systematic analysis:

1. Conflict Mapping
   - Identify key stakeholders
   - Analyze relationships and dynamics
   - Map issues and interests

2. Root Cause Analysis
   - Structural factors
   - Cultural factors
   - Immediate triggers

3. Conflict Dynamics
   - Escalation patterns
   - De-escalation opportunities
   - Entry points for intervention

========================================

PRACTICAL EXERCISES

Exercise 1: Stakeholder Mapping
Create a visual map of all parties involved in a conflict situation.

Exercise 2: Active Listening Practice
Practice reflective listening techniques with a partner.

Exercise 3: Mediation Role-Play
Simulate a mediation session using real-world scenarios.

========================================

RESOURCES AND NEXT STEPS

For more information:
- Visit: www.voiceforpeace.org
- Email: resources@voiceforpeace.org
- Join our community forums
- Attend our workshops and training sessions

Thank you for your commitment to peace building!

© 2025 Voice for Peace. All rights reserved.
    `

    return baseContent.trim()
  }

  const handleResourceDownload = (title: string, type: string) => {
    alert(`Downloading ${title} (${type})`)
    // Logic to handle resource download
  }

  const courses = [
    {
      title: "Foundations of Peace Building",
      duration: "4 weeks",
      level: "Beginner",
      participants: 1200,
      rating: 4.8,
      description: "Learn the fundamental principles of peace building, conflict analysis, and community engagement.",
      modules: ["Understanding Conflict", "Communication Skills", "Mediation Basics", "Community Organizing"],
    },
    {
      title: "Advanced Conflict Resolution",
      duration: "6 weeks",
      level: "Advanced",
      participants: 800,
      rating: 4.9,
      description: "Master advanced techniques for resolving complex conflicts in various settings.",
      modules: [
        "Complex Conflict Analysis",
        "Multi-party Mediation",
        "Trauma-Informed Approaches",
        "Restorative Justice",
      ],
    },
    {
      title: "Youth Peace Leadership",
      duration: "3 weeks",
      level: "Intermediate",
      participants: 600,
      rating: 4.7,
      description: "Specialized training for young peace advocates and youth mentors.",
      modules: ["Youth Development", "Peer Mediation", "Social Media Advocacy", "Event Planning"],
    },
  ]

  const workshops = [
    {
      title: "Nonviolent Communication Workshop",
      date: "November 1, 2025", // Updated to November 1 as requested
      duration: "6 hours",
      format: "In-person & Virtual",
      price: "Free",
    },
    {
      title: "Community Dialogue Facilitation",
      date: "November 13, 2025", // Updated to November 13 as requested
      duration: "8 hours",
      format: "In-person",
      price: "₹300",
    },
    {
      title: "Trauma-Informed Peace Work",
      date: "November 14, 2025", // Updated to November 14 as requested
      duration: "4 hours",
      format: "Virtual",
      price: "Free",
    },
  ]

  const resources = [
    {
      title: "Peace Building Handbook",
      type: "PDF Guide",
      pages: 120,
      downloads: 5000,
    },
    {
      title: "Conflict Resolution Toolkit",
      type: "Interactive Guide",
      pages: 80,
      downloads: 3200,
    },
    {
      title: "Community Organizing Manual",
      type: "PDF Guide",
      pages: 95,
      downloads: 2800,
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

      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg p-6 max-w-md w-full border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Workshop Payment</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowPaymentModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="mb-4">
              <h4 className="text-cyan-400 font-semibold">{selectedWorkshop?.title}</h4>
              <p className="text-2xl font-bold text-white">₹300</p>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <Label htmlFor="name" className="text-white">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  value={paymentForm.name}
                  onChange={(e) => setPaymentForm({ ...paymentForm, name: e.target.value })}
                  className="bg-gray-800 border-gray-600 text-white"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-white">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={paymentForm.email}
                  onChange={(e) => setPaymentForm({ ...paymentForm, email: e.target.value })}
                  className="bg-gray-800 border-gray-600 text-white"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-white">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  value={paymentForm.phone}
                  onChange={(e) => setPaymentForm({ ...paymentForm, phone: e.target.value })}
                  className="bg-gray-800 border-gray-600 text-white"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <Label htmlFor="upiId" className="text-white">
                  Your UPI ID (Optional)
                </Label>
                <Input
                  id="upiId"
                  value={paymentForm.upiId}
                  onChange={(e) => setPaymentForm({ ...paymentForm, upiId: e.target.value })}
                  className="bg-gray-800 border-gray-600 text-white"
                  placeholder="yourname@upi"
                />
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-4 mb-6">
              <h5 className="text-white font-semibold mb-2 flex items-center">
                <QrCode className="w-4 h-4 mr-2" />
                Payment Details
              </h5>
              <div className="text-center">
                <img src={generateQRCode() || "/placeholder.svg"} alt="UPI QR Code" className="mx-auto mb-2 rounded" />
                <p className="text-cyan-400 font-mono text-sm">6265376721@fam</p>
                <p className="text-gray-300 text-xs">Scan QR or use UPI ID above</p>
              </div>
            </div>

            <Button onClick={handleUPIPayment} className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
              Pay ₹300 via UPI
            </Button>

            <p className="text-xs text-gray-400 mt-2 text-center">
              After payment, please send screenshot for confirmation
            </p>
          </div>
        </div>
      )}

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
              Educate & Learn
            </h1>
            <p
              className={`font-open-sans text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-12 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Expand your peace-building knowledge through our comprehensive courses, workshops, and resources designed
              for advocates at every level.
            </p>

            {/* Online Courses */}
            <div className="mb-16">
              <h2 className="font-montserrat font-black text-3xl mb-8 text-white glow-text-cyan">Online Courses</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {courses.map((course, index) => (
                  <Card
                    key={course.title}
                    className="hover:shadow-xl transition-all duration-500 hover:scale-105 bg-gray-900/80 backdrop-blur-sm border-gray-700/50"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-green-400/10 text-green-400">{course.level}</Badge>
                        <div className="flex items-center text-sm text-gray-300">
                          <Star className="w-4 h-4 mr-1 text-yellow-400" />
                          {course.rating}
                        </div>
                      </div>
                      <CardTitle className="font-montserrat font-bold text-lg text-white glow-hover">
                        {course.title}
                      </CardTitle>
                      <div className="flex items-center justify-between text-sm text-gray-300">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {course.participants}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="font-open-sans text-gray-300 mb-4 text-sm leading-relaxed">{course.description}</p>
                      <div className="mb-4">
                        <h5 className="font-montserrat font-bold text-white mb-2 text-sm">Course Modules:</h5>
                        <ul className="space-y-1">
                          {course.modules.map((module, moduleIndex) => (
                            <li key={moduleIndex} className="font-open-sans text-xs text-gray-300">
                              • {module}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button
                        onClick={() => handleStartCourse(course.title)}
                        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white glow-hover hover:scale-105 transition-all duration-300"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Start Course
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Workshops */}
            <div className="mb-16">
              <h2 className="font-montserrat font-black text-3xl mb-8 text-white glow-text-cyan">Upcoming Workshops</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {workshops.map((workshop, index) => (
                  <Card
                    key={workshop.title}
                    className="hover:shadow-xl transition-all duration-500 hover:scale-105 bg-gray-900/80 backdrop-blur-sm border-gray-700/50"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-purple-400/10 text-purple-400">Workshop</Badge>
                        <span className="text-cyan-400 font-bold">{workshop.price}</span>
                      </div>
                      <CardTitle className="font-montserrat font-bold text-lg text-white glow-hover">
                        {workshop.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4 text-sm text-gray-300">
                        <div>📅 {workshop.date}</div>
                        <div>⏱️ {workshop.duration}</div>
                        <div>🌐 {workshop.format}</div>
                      </div>
                      <Button
                        onClick={() => handleWorkshopRegistration(workshop.title, workshop.price)}
                        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white glow-hover hover:scale-105 transition-all duration-300"
                      >
                        Register Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h2 className="font-montserrat font-black text-3xl mb-8 text-white glow-text-cyan">Free Resources</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {resources.map((resource, index) => (
                  <Card
                    key={resource.title}
                    className="hover:shadow-xl transition-all duration-500 hover:scale-105 bg-gray-900/80 backdrop-blur-sm border-gray-700/50"
                  >
                    <CardHeader>
                      <Badge className="w-fit bg-cyan-400/10 text-cyan-400 mb-2">{resource.type}</Badge>
                      <CardTitle className="font-montserrat font-bold text-lg text-white glow-hover">
                        {resource.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
                        <span>{resource.pages} pages</span>
                        <span>{resource.downloads} downloads</span>
                      </div>
                      <Button
                        onClick={() => handleResourceDownload(resource.title, resource.type)}
                        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white glow-hover hover:scale-105 transition-all duration-300"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Free
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
