"use client"

import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Heart, Share2, MapPin } from "lucide-react"

export default function GalleryPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const categories = [
    { id: "all", label: "All Stories" },
    { id: "community", label: "Community" },
    { id: "education", label: "Education" },
    { id: "reconciliation", label: "Reconciliation" },
    { id: "youth", label: "Youth" },
  ]

  const stories = [
    {
      id: 1,
      title: "Building Bridges in Bosnia",
      description:
        "Former enemies now work together to rebuild their community through shared gardens and cultural exchange programs.",
      image: "/community-garden-unity.png",
      location: "Sarajevo, Bosnia",
      category: "reconciliation",
      likes: 234,
      author: "Amira Hadzic",
      date: "March 2024",
    },
    {
      id: 2,
      title: "Youth Peace Ambassadors",
      description:
        "High school students from different backgrounds unite to create anti-bullying programs in their schools.",
      image: "/diverse-teen-peace-work.png",
      location: "Detroit, USA",
      category: "youth",
      likes: 189,
      author: "Marcus Johnson",
      date: "February 2024",
    },
    {
      id: 3,
      title: "Interfaith Harmony Festival",
      description:
        "Religious communities come together annually to celebrate diversity and promote understanding through food, music, and dialogue.",
      image: "/interfaith-celebration.png",
      location: "Mumbai, India",
      category: "community",
      likes: 312,
      author: "Priya Sharma",
      date: "January 2024",
    },
    {
      id: 4,
      title: "Peace Education in Schools",
      description:
        "Teachers integrate conflict resolution and empathy training into daily curriculum, transforming school culture.",
      image: "/placeholder.svg?height=200&width=300",
      location: "Nairobi, Kenya",
      category: "education",
      likes: 156,
      author: "Grace Wanjiku",
      date: "March 2024",
    },
    {
      id: 5,
      title: "Healing Through Art",
      description:
        "Trauma survivors use collaborative art projects to process experiences and build connections with their community.",
      image: "/placeholder.svg?height=200&width=300",
      location: "Medellín, Colombia",
      category: "community",
      likes: 278,
      author: "Carlos Mendez",
      date: "February 2024",
    },
    {
      id: 6,
      title: "Digital Peace Platform",
      description:
        "Young activists create online spaces for cross-cultural dialogue and virtual peace-building workshops.",
      image: "/placeholder.svg?height=200&width=300",
      location: "Seoul, South Korea",
      category: "youth",
      likes: 203,
      author: "Min-jun Kim",
      date: "January 2024",
    },
  ]

  const filteredStories =
    selectedCategory === "all" ? stories : stories.filter((story) => story.category === selectedCategory)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1
            className={`font-montserrat font-black text-4xl md:text-6xl mb-6 glow-text transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Stories of Peace
          </h1>
          <p
            className={`font-open-sans text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Discover inspiring stories from peace advocates around the world. Each story represents real people making
            real change in their communities.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="font-open-sans glow-hover transition-all duration-300"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, index) => (
              <Card
                key={story.id}
                className="hover:shadow-xl transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden"
              >
                <div className="relative">
                  <img src={story.image || "/placeholder.svg"} alt={story.title} className="w-full h-48 object-cover" />
                  <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground">
                    {categories.find((cat) => cat.id === story.category)?.label}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {story.location}
                  </div>
                  <h3 className="font-montserrat font-bold text-lg mb-3 glow-hover">{story.title}</h3>
                  <p className="font-open-sans text-muted-foreground text-sm leading-relaxed mb-4">
                    {story.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                        <Heart className="w-4 h-4" />
                        <span>{story.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                        <Share2 className="w-4 h-4" />
                        <span>Share</span>
                      </button>
                    </div>
                    <div className="text-muted-foreground">
                      <div className="font-medium">{story.author}</div>
                      <div className="text-xs">{story.date}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Story CTA */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-6 glow-text">Share Your Story</h2>
          <p className="font-open-sans text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Have a peace story to share? Your experience could inspire others to take action in their own communities.
          </p>
          <Button
            asChild
            size="lg"
            className="font-montserrat font-bold text-lg px-8 py-4 glow-hover hover:scale-105 transition-all duration-300"
          >
            <Link href="/contact">Submit Your Story</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
