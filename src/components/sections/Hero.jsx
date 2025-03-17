import React from 'react'

const Hero = () => {
  return (
    <div id="home" className="relative h-screen bg-gradient-to-r from-[#8A817C] to-[#BCB8B1]">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 pt-16">
        <h1 className="text-5xl font-bold mb-4">Innovation Club</h1>
        <p className="text-xl text-center max-w-2xl">Fostering creativity, innovation, and entrepreneurship among students</p>
      </div>
    </div>
  )
}

export default Hero