import React from 'react'

const NavBar = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-gray-200/80 via-gray-100/60 to-white/40 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/media/ciie-logo.png"
              alt="CIIE Logo"
              className="h-10 w-auto"
            />
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-800 hover:text-[#8A817C] font-semibold text-lg transition-colors duration-200 relative group"
              onClick={(e) => scrollToSection(e, 'home')}
            >
              <span className="relative z-10">Home</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8A817C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </a>

            <a
              href="#about"
              className="text-gray-800 hover:text-[#8A817C] font-semibold text-lg transition-colors duration-200 relative group"
              onClick={(e) => scrollToSection(e, 'about')}
            >
              <span className="relative z-10">About Us</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8A817C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </a>

            <a
              href="#contact"
              className="text-gray-800 hover:text-[#8A817C] font-semibold text-lg transition-colors duration-200 relative group"
              onClick={(e) => scrollToSection(e, 'contact')}
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8A817C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </a>
          </div>
          {/* Mobile menu button */}
          <button className="md:hidden text-gray-800 hover:text-[#8A817C] focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar