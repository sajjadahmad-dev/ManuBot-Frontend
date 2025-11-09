"use client"

import type React from "react"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import {
  Mic,
  TrendingUp,
  DollarSign,
  Zap,
  BarChart3,
  Users,
  Shield,
  Smartphone,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

interface Feature {
  icon: React.ReactNode
  title: string
  titleUrdu: string
  description: string
  longDescription: string
  benefits: string[]
}

const features: Feature[] = [
  {
    icon: <Mic className="w-8 h-8" />,
    title: "Voice Commands",
    titleUrdu: "آوازی احکامات",
    description: "Speak in Urdu or English, hands-free control",
    longDescription:
      "Revolutionize your factory operations with natural language voice commands. No need for typing or clicking - just speak your orders in Urdu or English and watch ManuBot execute them instantly. Perfect for busy factory floors where hands are occupied.",
    benefits: [
      "Real-time command execution",
      "Bilingual support (Urdu & English)",
      "99.2% accuracy rate",
      "Offline mode available",
    ],
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Real-Time Tracking",
    titleUrdu: "لمحہ بہ لمحہ ٹریکنگ",
    description: "Monitor inventory and production instantly",
    longDescription:
      "Get complete visibility into your factory operations with real-time dashboards. Track inventory levels, production progress, equipment status, and worker efficiency all from one unified interface.",
    benefits: [
      "Live inventory updates",
      "Production metrics dashboard",
      "Equipment health monitoring",
      "Custom reports & alerts",
    ],
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Cost Savings",
    titleUrdu: "لاگت میں بچت",
    description: "10x more affordable than SAP",
    longDescription:
      "Eliminate expensive ERP implementations. ManuBot delivers enterprise-grade manufacturing management at a fraction of the cost, saving you up to $830K annually while maintaining the same functionality.",
    benefits: [
      "$830K annual savings per factory",
      "No expensive infrastructure needed",
      "Instant deployment",
      "Pay-as-you-grow pricing",
    ],
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    titleUrdu: "بہت تیز رفتار",
    description: "2-second response time guaranteed",
    longDescription:
      "Experience unprecedented speed with our optimized architecture. Every command executes in under 2 seconds, ensuring your operations never lag and your team stays productive.",
    benefits: ["<2s response time", "99.99% uptime", "Auto-scaling", "CDN-powered delivery"],
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Multi-User Support",
    titleUrdu: "کثیر صارف معاونت",
    description: "Unlimited concurrent users",
    longDescription:
      "Scale from a single supervisor to hundreds of workers on the factory floor. Our system supports unlimited concurrent users with role-based access control to keep your data secure.",
    benefits: ["Role-based access", "Team collaboration", "Activity logging", "Permission management"],
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enterprise Security",
    titleUrdu: "اعلیٰ سطحی سیکیورٹی",
    description: "Bank-level encryption & compliance",
    longDescription:
      "Your data is protected with military-grade encryption. We comply with international standards and conduct regular security audits to ensure your manufacturing data stays confidential and secure.",
    benefits: ["AES-256 encryption", "ISO 27001 certified", "GDPR compliant", "Regular penetration testing"],
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Advanced Analytics",
    titleUrdu: "جدید تجزیات",
    description: "Data-driven insights and predictions",
    longDescription:
      "Harness the power of AI-driven analytics to identify trends, optimize production schedules, and predict equipment failures before they happen. Make informed decisions backed by real data.",
    benefits: ["Predictive maintenance", "Production optimization", "Custom metrics", "AI insights"],
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile App",
    titleUrdu: "موبائل ایپلیکیشن",
    description: "Manage factory on the go",
    longDescription:
      "Stay connected to your factory from anywhere with our native mobile apps for iOS and Android. Approve orders, monitor production, and respond to alerts in real-time.",
    benefits: ["iOS & Android apps", "Offline capabilities", "Real-time notifications", "Touch-optimized UI"],
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-gradient-to-br from-[#00D084] via-[#7ED957] to-[#FF8C42] pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
              Powerful Features for{" "}
              <span className="bg-gradient-to-r from-[#FFB366] to-[#FFF] bg-clip-text text-transparent">
                Modern Factories
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Everything you need to run your factory efficiently, from voice commands to advanced analytics
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-8 rounded-2xl border border-border bg-card hover:border-primary transition-all hover:shadow-xl hover:shadow-primary/10">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 text-white group-hover:shadow-lg group-hover:shadow-primary/50 transition-all"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-base font-medium text-muted-foreground mb-4">{feature.titleUrdu}</p>
                  <p className="text-foreground/70 mb-6">{feature.longDescription}</p>

                  <div className="space-y-2">
                    {feature.benefits.map((benefit, bi) => (
                      <div key={bi} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#00D084] to-[#FF8C42]">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-balance"
          >
            Ready to Transform Your Factory?
          </motion.h2>
          <motion.button
            className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:shadow-2xl transition-all inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Free Trial <ArrowRight size={20} />
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
