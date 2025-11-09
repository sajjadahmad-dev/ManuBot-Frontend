"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", company: "", subject: "", message: "" })
    }, 3000)
  }

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
              Get in{" "}
              <span className="bg-gradient-to-r from-[#FFB366] to-[#FFF] bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Have questions? Our team is here to help. Reach out and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:hello@manubot.ai"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hello@manubot.ai
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a href="tel:+923001234567" className="text-muted-foreground hover:text-primary transition-colors">
                    +92 300 123 4567
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Monday - Friday, 9 AM - 6 PM PKT</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-muted-foreground">123 Factory Road</p>
                  <p className="text-muted-foreground">Faisalabad, Pakistan</p>
                  <p className="text-sm text-muted-foreground mt-1">Visit us for a demo</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 p-8 rounded-2xl border border-border bg-card"
            >
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-4">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors"
                      placeholder="ABC Factory"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="">Select a subject</option>
                      <option value="demo">Request a Demo</option>
                      <option value="pricing">Pricing Question</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all inline-flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message <Send size={18} />
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Common Questions</h2>
            <p className="text-muted-foreground">Quick answers to questions we hear most often.</p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "How long does implementation take?",
                a: "Most factories go live within 1-2 weeks. Our team handles everything - setup, data migration, and training.",
              },
              {
                q: "Do you offer training?",
                a: "Yes! We provide comprehensive training for all users, available in both Urdu and English.",
              },
              {
                q: "Is there a free trial?",
                a: "You get 14 days free access to test all features with zero credit card required.",
              },
              {
                q: "Can you integrate with our existing systems?",
                a: "Yes, we have APIs and pre-built integrations for common accounting and ERPs software.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg border border-border bg-background hover:border-primary transition-colors"
              >
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
