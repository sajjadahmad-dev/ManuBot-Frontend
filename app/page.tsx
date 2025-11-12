"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Mic,
  TrendingUp,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Play,
  Sparkles,
  Zap,
  Globe,
  Shield,
  Headphones,
  Factory,
  Menu,
  X,
} from "lucide-react";
import clsx from "clsx";
import Image from "next/image";

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const isMobile = windowDimensions.width < 768;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  useEffect(() => {
    const updateDimensions = () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const floatingIcons = [Mic, Zap, Globe, Shield, Headphones, Factory];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white overflow-x-hidden">
        {/* Reduced Motion Gradient Orb (Desktop Only) */}
        {!isMobile && (
          <motion.div
            className="pointer-events-none fixed inset-0 z-0"
            animate={{
              background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 197, 94, 0.1), transparent 80%)`,
            }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
          />
        )}

        {/* Navbar */}
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/10">
          <nav className="px-4 py-3 sm:px-6 sm:py-4 flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <Image
                src="/manubot logo.png"
                alt="ManuBot Logo"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text text-transparent">
                ManuBot
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {["Features", "Pricing", "Demo", "Contact"].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 text-sm bg-gradient-to-r from-emerald-500 to-orange-500 rounded-full font-semibold shadow-lg shadow-emerald-500/30"
              >
                Start Free Trial
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur-xl"
              >
                <div className="px-4 py-6 space-y-4">
                  {["Features", "Pricing", "Demo", "Contact"].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-lg text-gray-300 hover:text-white transition"
                    >
                      {item}
                    </a>
                  ))}
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full py-3 mt-4 bg-gradient-to-r from-emerald-500 to-orange-500 rounded-full font-semibold shadow-lg"
                  >
                    Start Free Trial
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 text-center overflow-hidden">
          {/* Floating Icons (Reduced on Mobile) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            {floatingIcons.map((Icon, i) => (
              <motion.div
                key={i}
                className="absolute text-emerald-400/20 hidden sm:block"
                initial={{ x: `${10 + i * 15}%`, y: `${20 + i * 10}%` }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                }}
                style={{ fontSize: "2.5rem" }}
              >
                <Icon />
              </motion.div>
            ))}
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                <span className="block bg-gradient-to-r from-emerald-400 via-lime-400 to-orange-400 bg-clip-text text-transparent">
                  Voice-Powered
                </span>
                <span className="block text-white mt-1">Factory OS</span>
              </h1>

              <p className="text-xl sm:text-2xl font-medium text-gray-300 mt-3">
                بولو اور فیکٹری چلاؤ
              </p>

              <p className="text-base sm:text-lg text-gray-400 mt-4 max-w-xl mx-auto">
                Run manufacturing in Urdu & English using voice. 10× cheaper than SAP. Trusted by 100+ factories.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <motion.button
                  whileHover={{ scale: isMobile ? 1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-orange-500 text-white font-bold rounded-full shadow-xl flex items-center justify-center gap-2 text-lg"
                >
                  Start Free Trial <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: isMobile ? 1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white/30 backdrop-blur-lg text-white font-bold rounded-full flex items-center justify-center gap-2 text-lg"
                >
                  <Play className="w-5 h-5" /> Watch Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text text-transparent">
                Everything You Need
              </h2>
              <p className="text-lg text-gray-400">Voice-first operations for modern factories</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Mic,
                  title: "Voice Commands",
                  urdu: "آوازی احکامات",
                  desc: "Control machines, log production, and update inventory with voice in Urdu & English",
                  gradient: "from-emerald-500 to-teal-600",
                },
                {
                  icon: TrendingUp,
                  title: "Real-Time Dashboards",
                  urdu: "ریئل ٹائم ڈیش بورڈز",
                  desc: "Live production, inventory, and OEE tracking on any device",
                  gradient: "from-lime-500 to-emerald-600",
                },
                {
                  icon: DollarSign,
                  title: "10× Cost Savings",
                  urdu: "لاگت میں 90% بچت",
                  desc: "Replace expensive ERP systems. Save $830K/year per factory",
                  gradient: "from-orange-500 to-red-600",
                },
              ].map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="group"
                >
                  <div className="relative p-6 rounded-2xl border backdrop-blur-xl bg-slate-900/60 border-white/10 hover:border-emerald-500/50 transition-all">
                    <div
                      className={clsx(
                        "w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg",
                        `bg-gradient-to-br ${f.gradient}`
                      )}
                    >
                      <f.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{f.title}</h3>
                    <p className="text-emerald-400 font-medium text-sm mb-2">{f.urdu}</p>
                    <p className="text-gray-400 text-sm">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text text-transparent">
                Our Team
              </h2>
              <p className="text-lg text-gray-400">Meet the people behind ManuBot</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Muhammad Anique",
                  role: "Team Leader",
                  linkedin: "https://www.linkedin.com/in/muhammad-anique-300828266/",
                  gmail: "mailto:muhammadanique81@gmail.com",
                },
                {
                  name: "Sajjad Ahmad",
                  role: "Team Member",
                  linkedin: "https://www.linkedin.com/in/sajjadahmad-dev/",
                  gmail: "mailto:sajjadahmad.code@gmail.com",
                },
                {
                  name: "Tayyaba Mustafa",
                  role: "Team Member",
                  linkedin: "https://www.linkedin.com/in/tayyaba-mustafa-97ba1731b/",
                  gmail: "mailto:tayyaba.mustafa@gmail.com",
                },
                {
                  name: "Izzah Khursheed",
                  role: "Team Member",
                  linkedin: "https://www.linkedin.com/in/izzah-khursheed/",
                  gmail: "mailto:izzah.khursheed@gmail.com",
                },
              ].map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="group"
                >
                  <div className="relative p-6 rounded-2xl border backdrop-blur-xl bg-slate-900/60 border-white/10 hover:border-emerald-500/50 transition-all text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-orange-500 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-emerald-400 font-medium text-sm mb-4">{member.role}</p>
                    <div className="flex justify-center gap-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-emerald-400 transition-colors"
                      >
                        LinkedIn
                      </a>
                      <a
                        href={member.gmail}
                        className="text-gray-400 hover:text-emerald-400 transition-colors"
                      >
                        Gmail
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                { num: "30,000+", label: "SME Factories", icon: <Factory className="w-8 h-8 mx-auto mb-2 text-emerald-400" /> },
                { num: "$1.8B", label: "Market Size", icon: <DollarSign className="w-8 h-8 mx-auto mb-2 text-orange-400" /> },
                { num: "70%", label: "Conversion", icon: <TrendingUp className="w-8 h-8 mx-auto mb-2 text-lime-400" /> },
                { num: "2sec", label: "Voice Response", icon: <Zap className="w-8 h-8 mx-auto mb-2 text-yellow-400" /> },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {s.icon}
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text text-transparent">
                    {s.num}
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Starter", price: "$199", users: "50", popular: false },
                { name: "Growth", price: "$499", users: "200", popular: true },
                { name: "Enterprise", price: "$1,499", users: "Unlimited", popular: false },
              ].map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={clsx(
                    "relative p-6 rounded-2xl border-2 transition-all",
                    p.popular
                      ? "border-emerald-500 bg-gradient-to-br from-emerald-500/10 to-orange-500/10 shadow-xl"
                      : "border-white/10 bg-slate-900/60 backdrop-blur-xl"
                  )}
                >
                  {p.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-emerald-500 to-orange-500 text-white rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-3">{p.name}</h3>
                  <div className="mb-5">
                    <span className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text text-transparent">
                      {p.price}
                    </span>
                    <span className="text-gray-500 text-sm">/month</span>
                  </div>
                  <ul className="space-y-2 mb-6 text-sm">
                    {["Voice Control", "Real-Time Dashboard", p.users + " Users", "Email Support"].map((feat, fi) => (
                      <li key={fi} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                        <span className="text-gray-300">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={clsx(
                      "w-full py-3 rounded-full font-bold text-sm transition-all",
                      p.popular
                        ? "bg-gradient-to-r from-emerald-500 to-orange-500 text-white"
                        : "border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white"
                    )}
                  >
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-lime-500 to-orange-600 opacity-90" />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl font-bold mb-4"
            >
              Ready to Go Voice-First?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg mb-6 text-white/90"
            >
              Join 100+ factories transforming operations with ManuBot
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="px-5 py-3 rounded-full bg-white/20 backdrop-blur-lg border border-white/40 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-all flex-1"
              />
              <button className="px-6 py-3 bg-white text-black font-bold rounded-full shadow-xl text-sm sm:text-base">
                Get Started Free
              </button>
            </motion.div>
            <p className="mt-4 text-white/80 text-xs sm:text-sm">
              No credit card • 14-day free trial • Cancel anytime
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/50 backdrop-blur-xl border-t border-white/10 py-8 px-4">
          <div className="max-w-6xl mx-auto text-center sm:text-left">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Image
                  src="/manubot logo.png"
                  alt="ManuBot Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text text-transparent">
                  ManuBot
                </span>
              </div>
              <p className="text-gray-500 text-xs">© 2025 ManuBot. All rights reserved.</p>
              <div className="flex gap-4 text-xs text-gray-400">
                <a href="#" className="hover:text-white">Privacy</a>
                <a href="#" className="hover:text-white">Terms</a>
                <a href="#" className="hover:text-white">Support</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}