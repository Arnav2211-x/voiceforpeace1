"use client"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import CallToActionSection from "@/components/call-to-action-section"
import TestimonialsSection from "@/components/testimonials-section"

function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element text-6xl text-cyan-400 opacity-20" style={{ top: "20%", left: "10%" }}>
          ☮
        </div>
        <div className="floating-element text-4xl text-green-400 opacity-30" style={{ top: "60%", right: "15%" }}>
          🕊
        </div>
        <div className="floating-element text-5xl text-blue-400 opacity-25" style={{ bottom: "30%", left: "20%" }}>
          🌍
        </div>
      </div>
    </div>
  )
}

function MediaGallery() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 glow-text">Peace in Action</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-cyan-400/20">
            <img src="/peace-circle.png" alt="Community peace gathering" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">Community Healing</h3>
              <p className="text-gray-300">Local communities coming together for peace dialogues</p>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-cyan-400/20">
            <img src="/peace-project-youth.png" alt="Youth peace education" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">Youth Leadership</h3>
              <p className="text-gray-300">Empowering young voices for peaceful change</p>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-cyan-400/20">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ObxMt4d3T5MDA2Ca7JyHf5lCNuxMZN.png"
              alt="Global peace initiative"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">Global Impact</h3>
              <p className="text-gray-300">Worldwide initiatives creating lasting peace</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-cyan-400/20">
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/0wrsZog8qXg"
              title="The Power of Peace Education"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">Peace Education Documentary</h3>
              <p className="text-gray-300">Understanding how education can transform conflicts into opportunities</p>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-cyan-400/20">
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/jPZEJHJPwIo"
              title="Building Peace Through Community Action"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">Community Peace Building</h3>
              <p className="text-gray-300">How communities can work together to create lasting peace</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-cyan-400/20">
            <img
              src="/diverse-children-playing.png"
              alt="Children playing together"
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h4 className="text-lg font-semibold text-white mb-1">Building Bridges</h4>
              <p className="text-gray-300 text-sm">Teaching children the value of diversity and friendship</p>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-cyan-400/20">
            <img
              src="/peaceful-meditation-session.png"
              alt="Mindfulness for peace"
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h4 className="text-lg font-semibold text-white mb-1">Inner Peace</h4>
              <p className="text-gray-300 text-sm">Mindfulness practices for personal and community healing</p>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-cyan-400/20">
            <img src="/hands-planting-tree.png" alt="Community action" className="w-full h-32 object-cover" />
            <div className="p-3">
              <h4 className="text-lg font-semibold text-white mb-1">Taking Action</h4>
              <p className="text-gray-300 text-sm">Environmental and social projects that unite communities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <main className="min-h-screen relative">
      <Background />
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <MediaGallery />
      <CallToActionSection />
      <TestimonialsSection />
    </main>
  )
}
