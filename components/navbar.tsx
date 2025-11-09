"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [language, setLanguage] = useState<"en" | "ur">("en")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-lg bg-background/80 border-b border-border" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold text-xl"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              M
            </motion.div>
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ManuBot
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Right Side Items */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === "en" ? "ur" : "en")}
              className="px-3 py-1 rounded-full border border-border hover:border-primary transition-colors text-sm font-medium"
            >
              {language === "en" ? "اردو" : "EN"}
            </button>

            {/* CTA Button */}
            <motion.button
              className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Trial
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 pb-4 border-t border-border">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors font-medium px-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  onClick={() => setLanguage(language === "en" ? "ur" : "en")}
                  className="px-4 py-2 text-left rounded-lg border border-border hover:border-primary transition-colors text-sm font-medium"
                >
                  {language === "en" ? "اردو" : "EN"}
                </button>
                <motion.button
                  className="mx-4 px-6 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setIsOpen(false)}
                >
                  Start Free Trial
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
