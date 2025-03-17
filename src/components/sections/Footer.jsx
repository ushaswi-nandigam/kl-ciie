import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#8A817C] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">KL Innovation Club</h3>
            <p className="text-sm">Empowering students to innovate and create impact through technology and entrepreneurship.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition">Home</a></li>
              <li><a href="#about" className="hover:text-gray-300 transition">About Us</a></li>
              <li><a href="#projects" className="hover:text-gray-300 transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-gray-300 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300 transition">Twitter</a>
              <a href="#" className="hover:text-gray-300 transition">LinkedIn</a>
              <a href="#" className="hover:text-gray-300 transition">Instagram</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} KL Innovation Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer