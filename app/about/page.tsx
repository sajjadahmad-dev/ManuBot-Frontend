"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CheckCircle, Users, Lightbulb, Target } from "lucide-react"

export default function AboutPage() {
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
              About{" "}
              <span className="bg-gradient-to-r from-[#FFB366] to-[#FFF] bg-clip-text text-transparent">ManuBot</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Empowering Pakistani SME factories with affordable, voice-activated manufacturing management
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-border bg-card"
            >
              <Lightbulb className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To democratize manufacturing technology by providing affordable, intelligent solutions that empower
                Pakistani SME factories to compete globally.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-border bg-card"
            >
              <Target className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                A future where every factory, regardless of size, has access to world-class digital tools to optimize
                operations and increase profitability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-border bg-card"
            >
              <Users className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-muted-foreground">
                We believe in accessibility, innovation, and customer success. Every decision we make is guided by a
                commitment to our users' growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose ManuBot?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We understand the unique challenges of Pakistani manufacturing. Here's what sets us apart.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Built for Pakistan",
                description:
                  "Bilingual interface in Urdu and English, understanding of local business practices and regulations.",
              },
              {
                title: "Affordable Pricing",
                description:
                  "10x cheaper than international ERPs like SAP. Save up to $830K annually while getting better features.",
              },
              {
                title: "Voice-First Design",
                description:
                  "Revolutionary voice commands in Urdu and English - no typing required on the factory floor.",
              },
              {
                title: "Fast Implementation",
                description:
                  "Go live in days, not months. No expensive consultants needed. Get up and running immediately.",
              },
              {
                title: "Local Support",
                description:
                  "24/7 support in Urdu and English from our Pakistan-based team who understand your business.",
              },
              {
                title: "Cloud-Native",
                description:
                  "No expensive infrastructure needed. Everything is cloud-based, secure, and automatically updated.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl border border-border bg-background hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1A2332] to-[#0F1419] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100+", label: "Factories Using ManuBot" },
              { number: "5000+", label: "Active Users" },
              { number: "$1.8B", label: "Total Factory Market Value" },
              { number: "70%", label: "Trial Conversion Rate" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground">
              Experienced manufacturing professionals and technologists working to revolutionize Pakistani factories.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ahmed Malik",
                role: "CEO & Founder",
                background: "15+ years in manufacturing automation",
              },
              {
                name: "Fatima Khan",
                role: "CTO & Co-founder",
                background: "AI/ML expert, ex-Google engineer",
              },
              {
                name: "Hassan Raza",
                role: "VP Operations",
                background: "Supply chain expert, worked with top factories",
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-border bg-card text-center hover:border-primary transition-all"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.background}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
