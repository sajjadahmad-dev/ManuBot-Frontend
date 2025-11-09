"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CheckCircle, Calculator, TrendingUp } from "lucide-react"

export default function PricingPage() {
  const [roiMonths, setRoiMonths] = useState(12)

  const plans = [
    {
      name: "Starter",
      price: "$199",
      billingCycle: "/month",
      description: "Perfect for small factories",
      features: [
        "1 location",
        "50 users",
        "Voice commands (basic)",
        "Real-time tracking",
        "Email support",
        "Basic reports",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Growth",
      price: "$499",
      billingCycle: "/month",
      description: "For expanding operations",
      features: [
        "3 locations",
        "200 users",
        "Full voice commands",
        "Advanced analytics",
        "Priority support",
        "Custom dashboards",
        "Mobile app",
        "API access",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      billingCycle: "/ Quote",
      description: "For large-scale operations",
      features: [
        "Unlimited locations",
        "Unlimited users",
        "Full feature set",
        "AI optimization",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantee",
        "White-label options",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  // ROI Calculator
  const monthlyMESSaving = 199 // minimum SAP cost
  const annualSavingsMax = 830000
  const monthlyPotentialSavings = annualSavingsMax / 12

  const calculateROI = () => {
    const factoryCount = 1
    const baseCost = 499 // Growth plan
    const monthlyManuBotCost = baseCost * factoryCount
    const monthlySAPEstimate = monthlyMESSaving * factoryCount * 10 // Estimate SAP at 10x cost

    const totalSavings = (monthlySAPEstimate - monthlyManuBotCost) * roiMonths
    const totalInvestment = monthlyManuBotCost * roiMonths

    return {
      monthlyComparison: monthlySAPEstimate - monthlyManuBotCost,
      totalSavings: Math.max(totalSavings, 0),
      breakEvenMonths: Math.max(1, Math.ceil(totalInvestment / (monthlySAPEstimate - monthlyManuBotCost))),
    }
  }

  const roi = calculateROI()

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
              Simple, Transparent{" "}
              <span className="bg-gradient-to-r from-[#FFB366] to-[#FFF] bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Choose the perfect plan for your factory. No hidden fees. 10x cheaper than SAP.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`relative p-8 rounded-2xl border-2 transition-all ${
                  plan.popular
                    ? "border-primary bg-gradient-to-br from-primary/10 to-accent/10 shadow-lg shadow-primary/20"
                    : "border-border bg-card hover:border-primary"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-primary to-accent text-white text-sm font-bold rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                <div className="mb-8">
                  <span className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">{plan.billingCycle}</span>
                </div>

                <motion.button
                  className={`w-full py-3 rounded-full font-bold transition-all mb-8 ${
                    plan.popular
                      ? "bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/50"
                      : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {plan.cta}
                </motion.button>

                <div className="space-y-3">
                  {plan.features.map((feature, fi) => (
                    <div key={fi} className="flex items-center gap-2">
                      <CheckCircle size={20} className="text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ROI Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/30 p-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <Calculator className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">ROI Calculator</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium mb-3">Months until ROI:</label>
                <input
                  type="range"
                  min="1"
                  max="24"
                  value={roiMonths}
                  onChange={(e) => setRoiMonths(Number.parseInt(e.target.value))}
                  className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>1 month</span>
                  <span className="font-bold text-primary text-lg">{roiMonths} months</span>
                  <span>24 months</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-background rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Monthly Savings</p>
                  <p className="text-2xl font-bold text-primary">${roi.monthlyComparison.toLocaleString()}</p>
                </div>
                <div className="p-4 bg-background rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Total Savings ({roiMonths} months)</p>
                  <p className="text-2xl font-bold text-accent">${roi.totalSavings.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-background rounded-lg border border-primary/30">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <p className="font-semibold">Break-even point: {roi.breakEvenMonths} months</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Compared to traditional ERP at estimated $1,990/month. Actual savings may vary.
              </p>
            </div>
          </motion.div>
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
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Have questions? We've got answers.</p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "Can I change plans anytime?",
                a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
              },
              {
                q: "Is there a long-term contract?",
                a: "No contracts required. All plans are month-to-month with no cancellation fees.",
              },
              {
                q: "Do you offer volume discounts?",
                a: "Yes! For Enterprise plans with multiple locations, we offer significant volume discounts. Contact our sales team.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, bank transfers, and can arrange custom payment terms for Enterprise customers.",
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
