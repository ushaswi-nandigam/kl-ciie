import React from 'react'

const Projects = () => {
  return (
    <div id="projects" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-[#8A817C]"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Smart Campus Initiative</h3>
              <p className="text-gray-600">IoT-based solution for campus resource management</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-[#BCB8B1]"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">EcoTech Solutions</h3>
              <p className="text-gray-600">Sustainable technology solutions for environmental challenges</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-[#F4F3EE]"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">AI Education Platform</h3>
              <p className="text-gray-600">Personalized learning experience using artificial intelligence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects