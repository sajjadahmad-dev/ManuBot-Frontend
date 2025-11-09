"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

type DemoTab = "voice" | "dashboard" | "mobile"

interface DemoFeature {
  title: string
  description: string
  commands: string[]
  icon: string
}

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState<DemoTab>("voice")
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight)
    }
  }, [])

  const demoFeatures: Record<DemoTab, DemoFeature> = {
    voice: {
      title: "Voice Commands in Action",
      description: "Experience hands-free control in Urdu and English",
      commands: [
        "آج کا پروڈکشن کتنا ہے؟ (What is today's production?)",
        "Show me inventory status",
        "اسٹاک میں کون سی چیزیں کم ہیں؟ (What stock items are low?)",
        "Complete order PO-1234",
        "الرٹ بھیجو فیکٹری مینیجر کو (Send alert to factory manager)",
      ],
      icon: "🎤",
    },
    dashboard: {
      title: "Smart Dashboard",
      description: "Real-time insights and analytics at a glance",
      commands: [
        "Production metrics - Real-time tracking",
        "Inventory levels - Color-coded alerts",
        "Equipment status - Predictive maintenance",
        "Worker efficiency - Performance graphs",
        "Financial summary - Cost breakdowns",
      ],
      icon: "📊",
    },
    mobile: {
      title: "Mobile Management",
      description: "Control your factory from anywhere",
      commands: [
        "Approve/reject orders on mobile",
        "Receive real-time notifications",
        "Check production status from home",
        "Quick voice commands via app",
        "Offline mode for connectivity issues",
      ],
      icon: "📱",
    },
  }

  const demo = demoFeatures[activeTab]

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-gradient-to-br from-[#00D084] via-[#7ED957] to-[#FF8C42] pt-32 pb-20 px-4">
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              animate={{
                y: [0, -windowHeight || 0, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
              See ManuBot in{" "}
              <span className="bg-gradient-to-r from-[#FFB366] to-[#FFF] bg-clip-text text-transparent">Action</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Watch how ManuBot transforms factory operations with voice commands and real-time insights
            </p>
          </motion.div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Demo Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-4 mb-12 justify-center"
          >
            {(Object.keys(demoFeatures) as DemoTab[]).map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 rounded-full font-semibold transition-all ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/50"
                    : "border-2 border-border text-foreground hover:border-primary"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {demoFeatures[tab].icon} {demoFeatures[tab].title.split(" ")[0]}
              </motion.button>
            ))}
          </motion.div>

          {/* Demo Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-12 rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10"
            >
              {/* Video Placeholder */}
              <div className="mb-8 relative">
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#1A2332] to-[#0F1419] border border-primary/30 flex items-center justify-center overflow-hidden group cursor-pointer relative">
                  {/* Placeholder content */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20"
                    animate={{
                      x: [-1000, 1000],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />

                  <div className="relative z-10 text-center">
                    <motion.div
                      className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto mb-4 group-hover:shadow-2xl group-hover:shadow-primary/50 transition-all"
                      whileHover={{ scale: 1.1 }}
                    >
                      {isPlaying ? (
                        <Pause className="w-10 h-10 text-white" />
                      ) : (
                        <Play className="w-10 h-10 text-white ml-1" />
                      )}
                    </motion.div>
                    <p className="text-white font-semibold">{isPlaying ? "Playing Demo" : "Watch Demo"}</p>
                  </div>

                  {/* Play/Pause Button */}
                  <motion.button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="absolute inset-0 w-full h-full"
                    whileHover={{ opacity: 0.8 }}
                  />
                </div>

                {/* Controls */}
                <div className="flex items-center gap-4 mt-4">
                  <motion.button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-3 rounded-full bg-primary text-white hover:shadow-lg hover:shadow-primary/50 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  </motion.button>

                  <motion.button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </motion.button>

                  <div className="flex-1 h-1 bg-border rounded-full">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      animate={{ width: isPlaying ? "100%" : "0%" }}
                      transition={{ duration: 30, ease: "linear" }}
                    />
                  </div>
                </div>
              </div>

              {/* Demo Description */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-3">{demo.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">{demo.description}</p>
              </div>

              {/* Commands List */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold mb-4">Example {activeTab === "voice" ? "Voice" : ""} Commands:</h3>
                {demo.commands.map((command, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="p-4 rounded-lg bg-background border border-border hover:border-primary transition-all group cursor-pointer hover:shadow-lg hover:shadow-primary/10"
                  >
                    <p className="text-foreground group-hover:text-primary transition-colors font-medium">{command}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">Ready to see the full potential?</p>
            <motion.button
              className="px-10 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full hover:shadow-2xl hover:shadow-primary/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Personal Demo
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Why Factories Love ManuBot</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how ManuBot delivers tangible results for manufacturing operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "70%",
                label: "Faster Order Processing",
                description: "Voice commands eliminate typing delays and reduce manual errors",
              },
              {
                number: "85%",
                label: "Improved Visibility",
                description: "Real-time tracking gives complete clarity into operations",
              },
              {
                number: "$830K",
                label: "Annual Savings",
                description: "Eliminate expensive ERP infrastructure and licensing costs",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-border bg-background hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                  {stat.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{stat.label}</h3>
                <p className="text-muted-foreground">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
