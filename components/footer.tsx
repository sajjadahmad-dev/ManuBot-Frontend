"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1A2332] to-[#0F1419] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold">
                M
              </div>
              <span className="font-bold text-xl">ManuBot</span>
            </div>
            <p className="text-gray-400 text-sm">آپ کی فیکٹری کو آواز کے ذریعے کنٹرول کریں</p>
            <div className="flex gap-4 mt-6">
              {[
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Facebook, href: "#" },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  className="p-2 rounded-full bg-white/10 hover:bg-primary transition-colors"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Product</h4>
            <div className="space-y-3">
              {["Features", "Pricing", "Demo", "Roadmap"].map((item) => (
                <Link key={item} href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <div className="space-y-3">
              {["Documentation", "API Reference", "Support", "Blog"].map((item) => (
                <Link key={item} href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400 text-sm hover:text-primary transition-colors cursor-pointer">
                <Mail size={16} />
                <span>hello@manubot.ai</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm hover:text-primary transition-colors cursor-pointer">
                <Phone size={16} />
                <span>+92 300 XXXX XXX</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm hover:text-primary transition-colors cursor-pointer">
                <MapPin size={16} />
                <span>Faisalabad, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 ManuBot. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
              Privacy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
              Terms
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
