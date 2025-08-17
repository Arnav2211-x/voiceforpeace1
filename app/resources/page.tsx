"use client"

import Navigation from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Download, ExternalLink, BookOpen, Video, FileText, Users } from "lucide-react"

export default function ResourcesPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const categories = [
    { id: "all", label: "All Resources", icon: BookOpen },
    { id: "guides", label: "Guides", icon: FileText },
    { id: "workshops", label: "Workshops", icon: Users },
    { id: "videos", label: "Videos", icon: Video },
    { id: "tools", label: "Tools", icon: Download },
  ]

  const resources = [
    {
      id: 1,
      title: "Conflict Resolution Handbook",
      description:
        "A comprehensive guide to understanding and resolving conflicts in personal and professional settings.",
      category: "guides",
      type: "PDF Guide",
      duration: "45 min read",
      level: "Beginner",
      downloads: 2340,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Building Empathy Workshop",
      description: "Interactive workshop materials for developing empathy skills in groups and communities.",
      category: "workshops",
      type: "Workshop Kit",
      duration: "2 hours",
      level: "Intermediate",
      downloads: 1567,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Peace Communication Techniques",
      description: "Video series teaching non-violent communication and active listening skills.",
      category: "videos",
      type: "Video Series",
      duration: "3.5 hours",
      level: "All Levels",
      downloads: 3421,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Community Dialogue Toolkit",
      description: "Practical tools and templates for organizing community dialogue sessions and peace circles.",
      category: "tools",
      type: "Toolkit",
      duration: "Self-paced",
      level: "Advanced",
      downloads: 987,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "Youth Peace Education Curriculum",
      description: "Complete curriculum for teaching peace education to young people aged 12-18.",
      category: "guides",
      type: "Curriculum",
      duration: "12 weeks",
      level: "Educator",
      downloads: 1876,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "Trauma-Informed Peace Building",
      description: "Workshop on understanding trauma's impact on communities and healing-centered approaches.",
      category: "workshops",
      type: "Workshop",
      duration: "4 hours",
      level: "Advanced",
      downloads: 1234,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const filteredResources =
    selectedCategory === "all" ? resources : resources.filter((resource) => resource.category === selectedCategory)

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-red-100 text-red-800"
      case "Educator":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleDownload = (resource: any) => {
    // Create downloadable content based on resource type
    let content = ""
    let filename = ""
    let mimeType = ""

    switch (resource.type) {
      case "PDF Guide":
        content = generatePDFContent(resource)
        filename = `${resource.title.replace(/\s+/g, "_")}.pdf`
        mimeType = "application/pdf"
        break
      case "Workshop Kit":
        content = generateWorkshopContent(resource)
        filename = `${resource.title.replace(/\s+/g, "_")}_Kit.zip`
        mimeType = "application/zip"
        break
      case "Video Series":
        // For videos, provide a playlist file
        content = generatePlaylistContent(resource)
        filename = `${resource.title.replace(/\s+/g, "_")}_Playlist.m3u`
        mimeType = "audio/x-mpegurl"
        break
      case "Toolkit":
        content = generateToolkitContent(resource)
        filename = `${resource.title.replace(/\s+/g, "_")}_Toolkit.zip`
        mimeType = "application/zip"
        break
      case "Curriculum":
        content = generateCurriculumContent(resource)
        filename = `${resource.title.replace(/\s+/g, "_")}_Curriculum.pdf`
        mimeType = "application/pdf"
        break
      default:
        content = generateGenericContent(resource)
        filename = `${resource.title.replace(/\s+/g, "_")}.txt`
        mimeType = "text/plain"
    }

    // Create and trigger download
    const blob = new Blob([content], { type: mimeType })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    alert(`📥 Downloaded: ${resource.title}`)
  }

  const handlePreview = (resource: any) => {
    // Create preview modal content
    const previewContent = generatePreviewContent(resource)

    // Create modal overlay
    const modal = document.createElement("div")
    modal.className = "fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
    modal.innerHTML = `
      <div class="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-auto p-6 relative">
        <button class="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl" onclick="this.closest('.fixed').remove()">×</button>
        <h2 class="text-2xl font-bold mb-4 text-gray-900">${resource.title}</h2>
        <div class="prose max-w-none text-gray-800">
          ${previewContent}
        </div>
        <div class="mt-6 flex gap-4">
          <button onclick="this.closest('.fixed').remove()" class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Close</button>
          <button onclick="document.querySelector('[data-resource-id=&quot;${resource.id}&quot;] .download-btn').click(); this.closest('.fixed').remove()" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Download Full Resource</button>
        </div>
      </div>
    `

    document.body.appendChild(modal)
  }

  const handleDownloadKit = (kitName: string) => {
    let content = ""
    let filename = ""

    if (kitName === "Educator's Peace Kit") {
      content = generateEducatorKitContent()
      filename = "Educators_Peace_Kit.zip"
    } else if (kitName === "Community Leader's Toolkit") {
      content = generateCommunityLeaderKitContent()
      filename = "Community_Leaders_Toolkit.zip"
    }

    const blob = new Blob([content], { type: "application/zip" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    alert(`📥 Downloaded: ${kitName}`)
  }

  // Helper functions to generate content
  const generatePDFContent = (resource: any) => {
    return `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
/Font <<
/F1 5 0 R
>>
>>
>>
endobj

4 0 obj
<<
/Length 200
>>
stream
BT
/F1 12 Tf
50 750 Td
(${resource.title.replace(/[()]/g, "")}) Tj
0 -20 Td
(${resource.description.replace(/[()]/g, "")}) Tj
0 -40 Td
(This comprehensive guide covers:) Tj
0 -20 Td
(• Understanding conflict dynamics) Tj
0 -20 Td
(• Communication strategies) Tj
0 -20 Td
(• Resolution techniques) Tj
0 -20 Td
(• Practical exercises) Tj
ET
endstream
endobj

5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj

xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000053 00000 n 
0000000110 00000 n 
0000000251 00000 n 
0000000504 00000 n 
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
565
%%EOF`
  }

  const generateWorkshopContent = (resource: any) => {
    return `WORKSHOP KIT: ${resource.title}

CONTENTS:
=========
1. Facilitator Guide
2. Participant Handouts
3. Activity Templates
4. Assessment Tools
5. Resource Links

FACILITATOR GUIDE:
==================
Duration: ${resource.duration}
Level: ${resource.level}

Objectives:
- Build empathy and understanding
- Develop active listening skills
- Practice conflict resolution
- Create safe dialogue spaces

Activities:
1. Icebreaker: Circle of Stories (15 min)
2. Main Activity: Perspective Taking (45 min)
3. Group Discussion: Shared Experiences (30 min)
4. Reflection: Personal Action Plans (20 min)

Materials Needed:
- Flip chart paper
- Markers
- Sticky notes
- Timer
- Handout copies

PARTICIPANT HANDOUTS:
====================
[Detailed handouts would be included here]

For full workshop materials, visit: voiceforpeace.org/workshops`
  }

  const generatePlaylistContent = (resource: any) => {
    return `#EXTM3U
#PLAYLIST:${resource.title}

#EXTINF:1800,Introduction to Peace Communication
https://example.com/video1.mp4

#EXTINF:2100,Active Listening Techniques
https://example.com/video2.mp4

#EXTINF:1950,Non-Violent Communication
https://example.com/video3.mp4

#EXTINF:2250,Conflict De-escalation
https://example.com/video4.mp4

#EXTINF:1650,Building Bridges
https://example.com/video5.mp4`
  }

  const generateToolkitContent = (resource: any) => {
    return `COMMUNITY DIALOGUE TOOLKIT
==========================

${resource.description}

INCLUDED TOOLS:
1. Planning Templates
2. Facilitation Scripts
3. Ground Rules Posters
4. Evaluation Forms
5. Follow-up Guides

PLANNING TEMPLATE:
==================
Event: ________________
Date: _________________
Participants: __________
Objectives:
1. ____________________
2. ____________________
3. ____________________

Agenda:
- Welcome & Introductions (15 min)
- Ground Rules (10 min)
- Main Discussion (60 min)
- Action Planning (20 min)
- Closing Circle (15 min)

FACILITATION TIPS:
==================
- Create safe space
- Encourage all voices
- Manage time effectively
- Stay neutral
- Document key points

For complete toolkit, visit: voiceforpeace.org/tools`
  }

  const generateCurriculumContent = (resource: any) => {
    return `YOUTH PEACE EDUCATION CURRICULUM
================================

${resource.description}

CURRICULUM OVERVIEW:
===================
Duration: ${resource.duration}
Age Group: 12-18 years
Level: ${resource.level}

LEARNING OBJECTIVES:
===================
Students will be able to:
1. Define peace and conflict
2. Identify causes of conflict
3. Practice peaceful communication
4. Develop empathy skills
5. Create action plans for peace

WEEKLY BREAKDOWN:
================
Week 1: What is Peace?
Week 2: Understanding Conflict
Week 3: Communication Skills
Week 4: Empathy Building
Week 5: Cultural Awareness
Week 6: Problem Solving
Week 7: Leadership Skills
Week 8: Community Action
Week 9: Media Literacy
Week 10: Global Perspectives
Week 11: Project Planning
Week 12: Presentations & Reflection

ASSESSMENT METHODS:
==================
- Participation rubrics
- Reflection journals
- Group projects
- Peer evaluations
- Final presentations

For complete curriculum materials, visit: voiceforpeace.org/education`
  }

  const generateGenericContent = (resource: any) => {
    return `${resource.title}
${"=".repeat(resource.title.length)}

${resource.description}

Type: ${resource.type}
Duration: ${resource.duration}
Level: ${resource.level}
Downloads: ${resource.downloads.toLocaleString()}

This resource provides comprehensive guidance and practical tools for peace-building initiatives.

For more resources, visit: voiceforpeace.org/resources`
  }

  const generatePreviewContent = (resource: any) => {
    return `
      <div class="mb-4">
        <span class="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">${resource.type}</span>
        <span class="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm ml-2">${resource.level}</span>
      </div>
      <p class="mb-4"><strong>Duration:</strong> ${resource.duration}</p>
      <p class="mb-6">${resource.description}</p>
      
      <h3 class="text-lg font-semibold mb-3">What's Included:</h3>
      <ul class="list-disc pl-6 mb-6">
        <li>Comprehensive guide materials</li>
        <li>Practical exercises and activities</li>
        <li>Assessment tools and rubrics</li>
        <li>Additional resource links</li>
        <li>Implementation templates</li>
      </ul>
      
      <h3 class="text-lg font-semibold mb-3">Learning Outcomes:</h3>
      <ul class="list-disc pl-6 mb-6">
        <li>Enhanced understanding of peace-building concepts</li>
        <li>Practical skills for conflict resolution</li>
        <li>Tools for community engagement</li>
        <li>Strategies for sustainable peace initiatives</li>
      </ul>
      
      <div class="bg-gray-50 p-4 rounded">
        <p class="text-sm text-gray-600">
          <strong>Downloads:</strong> ${resource.downloads.toLocaleString()} people have found this resource helpful
        </p>
      </div>
    `
  }

  const generateEducatorKitContent = () => {
    return `EDUCATOR'S PEACE KIT - COMPLETE COLLECTION
==========================================

This comprehensive kit includes 12 carefully curated resources:

1. Peace Education Lesson Plans (Grades K-12)
2. Interactive Activity Guide
3. Assessment Rubrics and Tools
4. Student Workbook Templates
5. Parent/Guardian Information Sheets
6. Classroom Poster Set
7. Conflict Resolution Scripts
8. Peer Mediation Training Guide
9. Cultural Sensitivity Guidelines
10. Technology Integration Ideas
11. Community Partnership Templates
12. Professional Development Resources

BONUS MATERIALS:
- Video tutorial links
- Online resource portal access
- Monthly newsletter subscription
- Educator community forum access

Total Value: $299 - FREE for educators!

For support and updates, visit: voiceforpeace.org/educators`
  }

  const generateCommunityLeaderKitContent = () => {
    return `COMMUNITY LEADER'S TOOLKIT - COMPLETE COLLECTION
===============================================

This essential toolkit includes 8 comprehensive resources:

1. Community Assessment Templates
2. Stakeholder Mapping Tools
3. Event Planning Checklists
4. Facilitation Training Materials
5. Conflict Mediation Protocols
6. Partnership Agreement Templates
7. Impact Measurement Tools
8. Sustainability Planning Guide

BONUS MATERIALS:
- Leadership development webinars
- Peer network access
- Monthly strategy calls
- Grant writing templates

Total Value: $199 - FREE for community leaders!

For ongoing support, visit: voiceforpeace.org/leaders`
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1
            className={`font-montserrat font-black text-4xl md:text-6xl mb-6 glow-text transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Peace Resources
          </h1>
          <p
            className={`font-open-sans text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Access our comprehensive library of tools, guides, and educational materials designed to help you build
            peace in your community and beyond.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="font-open-sans glow-hover transition-all duration-300"
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {category.label}
                </Button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <Card
                key={resource.id}
                data-resource-id={resource.id}
                className="hover:shadow-xl transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className={`absolute top-3 right-3 ${getLevelColor(resource.level)}`}>{resource.level}</Badge>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {resource.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{resource.duration}</span>
                  </div>
                  <CardTitle className="font-montserrat font-bold text-lg glow-hover">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="font-open-sans text-muted-foreground text-sm leading-relaxed mb-4">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button
                        size="sm"
                        className="font-open-sans glow-hover hover:scale-105 transition-all duration-300 download-btn"
                        onClick={() => handleDownload(resource)}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="font-open-sans glow-hover hover:scale-105 transition-all duration-300 bg-transparent"
                        onClick={() => handlePreview(resource)}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-muted-foreground">
                    {resource.downloads.toLocaleString()} downloads
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-6 glow-text">Featured Collections</h2>
            <p className="font-open-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              Curated resource collections for specific peace-building scenarios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="font-montserrat font-bold text-xl mb-3 glow-hover">Educator's Peace Kit</h3>
                <p className="font-open-sans text-muted-foreground mb-4 leading-relaxed">
                  Complete collection of lesson plans, activities, and assessment tools for teaching peace education in
                  schools and community centers.
                </p>
                <div className="flex items-center justify-between">
                  <Badge className="bg-primary/10 text-primary">12 Resources</Badge>
                  <Button
                    className="glow-hover hover:scale-105 transition-all duration-300"
                    onClick={() => handleDownloadKit("Educator's Peace Kit")}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Kit
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="font-montserrat font-bold text-xl mb-3 glow-hover">Community Leader's Toolkit</h3>
                <p className="font-open-sans text-muted-foreground mb-4 leading-relaxed">
                  Essential resources for community leaders organizing peace initiatives, including planning templates
                  and facilitation guides.
                </p>
                <div className="flex items-center justify-between">
                  <Badge className="bg-primary/10 text-primary">8 Resources</Badge>
                  <Button
                    className="glow-hover hover:scale-105 transition-all duration-300"
                    onClick={() => handleDownloadKit("Community Leader's Toolkit")}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Kit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contribute CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-6 glow-text">Contribute Resources</h2>
          <p className="font-open-sans text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Have valuable peace-building resources to share? Help grow our library and support peace advocates
            worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="font-montserrat font-bold text-lg px-8 py-4 glow-hover hover:scale-105 transition-all duration-300"
            >
              <Link href="/contact">Submit Resource</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-montserrat font-bold text-lg px-8 py-4 glow-hover hover:scale-105 transition-all duration-300 bg-transparent"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
