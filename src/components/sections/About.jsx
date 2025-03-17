import React from 'react'

const About = () => {
  return (
    <div id='about' className="py-16 px-4 bg-[#F4F3EE]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Our Club</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-lg">The Innovation Club at KL University is a dynamic community of creative minds, entrepreneurs, and innovators. We provide a platform for students to explore their ideas, develop solutions, and transform concepts into reality.</p>
            <p className="text-lg">Our mission is to cultivate an innovation ecosystem that empowers students to tackle real-world challenges through technology and entrepreneurship.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">What We Offer</h3>
            <ul className="space-y-3">
              <li className="flex items-center"><span className="mr-2">🚀</span> Mentorship Programs</li>
              <li className="flex items-center"><span className="mr-2">💡</span> Innovation Workshops</li>
              <li className="flex items-center"><span className="mr-2">🤝</span> Networking Opportunities</li>
              <li className="flex items-center"><span className="mr-2">🏆</span> Hackathons & Competitions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About