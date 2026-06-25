import { Mail, Link as LinkIcon, Share2 } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#0A0A0F] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <div className="text-[#00AADF] font-bold text-lg">BC</div>
            <span className="font-bold">better CASTINGS</span>
          </div>
          <p className="text-[#A0AEC0] text-sm">
            Precision sealing solutions — manufactured in-house, exported worldwide.
          </p>
        </div>

        {/* Four Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-[#A0AEC0] text-sm">
              <li><a href="/" className="hover:text-[#00AADF]">Home</a></li>
              <li><a href="#" className="hover:text-[#00AADF]">About</a></li>
              <li><a href="#" className="hover:text-[#00AADF]">Gaskets</a></li>
              <li><a href="#" className="hover:text-[#00AADF]">Studs</a></li>
              <li><a href="#" className="hover:text-[#00AADF]">Products</a></li>
              <li><a href="#" className="hover:text-[#00AADF]">Services</a></li>
              <li><a href="#" className="hover:text-[#00AADF]">News</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-white mb-4">Products</h3>
            <ul className="flex flex-col gap-2 text-[#A0AEC0] text-sm">
              <li><a href="#" className="hover:text-[#00AADF]">Ring Gaskets</a></li>
              <li><a href="#" className="hover:text-[#00AADF]">Spiral Wound Gaskets</a></li>
              <li><a href="#" className="hover:text-[#00AADF]">BX Gaskets</a></li>
              <li><a href="#" className="hover:text-[#00AADF]">B7 Studs</a></li>
              <li><a href="#" className="hover:text-[#00AADF]">L7 Studs</a></li>
              <li><a href="#" className="hover:text-[#00AADF]">Hammer Unions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <div className="flex flex-col gap-4 text-[#A0AEC0] text-sm">
              <p>JRD Tata Industrial Estate,<br />193/3, Kanuru - Autonagar Rd,<br />Vijayawada, Andhra Pradesh 520007</p>
              <a href="mailto:customer@bettercastings.com" className="hover:text-[#00AADF]">
                customer@bettercastings.com
              </a>
              <a href="tel:+918662546266" className="hover:text-[#00AADF]">
                +91 (866) 2546266
              </a>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-bold text-white mb-4">Certifications</h3>
            <ul className="flex flex-col gap-2 text-[#A0AEC0] text-sm">
              <li className="flex items-center gap-2">
                <span className="text-[#00AADF]">✓</span>
                ISO 9001:2015
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00AADF]">✓</span>
                API 6A Monogram
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00AADF]">✓</span>
                ASME B16.20
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00AADF]">✓</span>
                ASTM A193
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#A0AEC0] text-sm">
            © 2026 Better Castings. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#00AADF] hover:text-white transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="#" className="text-[#00AADF] hover:text-white transition-colors" aria-label="LinkedIn">
              <LinkIcon size={20} />
            </a>
            <a href="#" className="text-[#00AADF] hover:text-white transition-colors" aria-label="Share">
              <Share2 size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
