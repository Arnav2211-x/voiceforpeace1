"use client"

import type React from "react"

import Navigation from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import VideoSubmissionForm from "@/components/video-submission-form"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowLeft, Upload, Video, PenTool, Share2, CheckCircle } from "lucide-react"

export default function ShareYourStoryPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedFormType, setSelectedFormType] = useState<"general" | "video">("general")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const storyTypes = [
    {
      type: "Written Story",
      icon: PenTool,
      description: "Share your peace journey through a written narrative",
      format: "500-1500 words",
      examples: ["Personal transformation", "Community healing", "Conflict resolution success"],
    },
    {
      type: "Video Testimony",
      icon: Video,
      description: "Record a video sharing your experience",
      format: "2-5 minutes",
      examples: ["Before/after peace journey", "Community impact story", "Inspirational message"],
    },
    {
      type: "Photo Story",
      icon: Upload,
      description: "Tell your story through images with captions",
      format: "3-10 photos with descriptions",
      examples: ["Community project photos", "Peace event documentation", "Personal journey visuals"],
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for sharing your story! We'll review it and get back to you within 48 hours.")
  }

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
              Share Your Story
            </h1>
            <p
              className={`font-open-sans text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-12 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Your peace journey can inspire others. Share your story of transformation, community healing, or conflict
              resolution to help build a more peaceful world.
            </p>

            <div className="flex justify-center gap-4 mb-8">
              <Button
                onClick={() => setSelectedFormType("general")}
                variant={selectedFormType === "general" ? "default" : "outline"}
                className={`${
                  selectedFormType === "general"
                    ? "bg-cyan-600 hover:bg-cyan-700 text-white"
                    : "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
                }`}
              >
                <PenTool className="w-4 h-4 mr-2" />
                Written/Photo Story
              </Button>
              <Button
                onClick={() => setSelectedFormType("video")}
                variant={selectedFormType === "video" ? "default" : "outline"}
                className={`${
                  selectedFormType === "video"
                    ? "bg-cyan-600 hover:bg-cyan-700 text-white"
                    : "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
                }`}
              >
                <Video className="w-4 h-4 mr-2" />
                Video Story
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {storyTypes.map((story, index) => {
                const Icon = story.icon
                return (
                  <Card
                    key={story.type}
                    className="hover:shadow-xl transition-all duration-500 hover:scale-105 bg-gray-900/80 backdrop-blur-sm border-gray-700/50"
                  >
                    <CardHeader className="text-center">
                      <Icon className="w-8 h-8 mx-auto mb-4 text-red-400" />
                      <CardTitle className="font-montserrat font-bold text-lg text-white glow-hover">
                        {story.type}
                      </CardTitle>
                      <Badge className="w-fit mx-auto bg-red-400/10 text-red-400">{story.format}</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="font-open-sans text-gray-300 mb-4 text-sm leading-relaxed">{story.description}</p>
                      <div>
                        <h5 className="font-montserrat font-bold text-white mb-2 text-sm">Examples:</h5>
                        <ul className="space-y-1">
                          {story.examples.map((example, exIndex) => (
                            <li key={exIndex} className="font-open-sans text-xs text-gray-300 flex items-center">
                              <CheckCircle className="w-3 h-3 mr-2 text-cyan-400" />
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {selectedFormType === "video" ? (
              <VideoSubmissionForm />
            ) : (
              <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700/50">
                <CardHeader>
                  <CardTitle className="font-montserrat font-bold text-2xl text-white glow-text-cyan text-center">
                    Submit Your Peace Story
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-white font-montserrat font-medium">
                          Your Name
                        </Label>
                        <Input id="name" required className="bg-gray-800 border-gray-600 text-white" />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-white font-montserrat font-medium">
                          Email Address
                        </Label>
                        <Input id="email" type="email" required className="bg-gray-800 border-gray-600 text-white" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="story-type" className="text-white font-montserrat font-medium">
                        Story Type
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                          <SelectValue placeholder="Select story type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="written">Written Story</SelectItem>
                          <SelectItem value="video">Video Testimony</SelectItem>
                          <SelectItem value="photo">Photo Story</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="title" className="text-white font-montserrat font-medium">
                        Story Title
                      </Label>
                      <Input
                        id="title"
                        required
                        className="bg-gray-800 border-gray-600 text-white"
                        placeholder="Give your story a compelling title"
                      />
                    </div>

                    <div>
                      <Label htmlFor="story" className="text-white font-montserrat font-medium">
                        Your Story
                      </Label>
                      <Textarea
                        id="story"
                        required
                        className="bg-gray-800 border-gray-600 text-white min-h-[200px]"
                        placeholder="Share your peace journey, transformation, or community impact story..."
                      />
                    </div>

                    <div>
                      <Label htmlFor="location" className="text-white font-montserrat font-medium">
                        Location (Optional)
                      </Label>
                      <Input
                        id="location"
                        className="bg-gray-800 border-gray-600 text-white"
                        placeholder="City, Country"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="consent" required className="rounded" />
                      <Label htmlFor="consent" className="text-gray-300 text-sm">
                        I consent to sharing my story on the Voice for Peace website and social media channels
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-cyan-600 hover:bg-cyan-700 text-white glow-hover hover:scale-105 transition-all duration-300 font-montserrat font-bold"
                    >
                      Submit Your Story
                      <Share2 className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}
