'use client'

import React from 'react'
import { experiences } from '../lib/data'

const Experience = () => {
  return (
    <section id="experience" className="section bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <h2 className="heading text-center mb-16 animate-fade-in">
          Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-blue-600"></div>
            
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`mb-12 flex flex-col md:flex-row items-center animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Left Side (for even indices) */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:order-2 md:pl-8'}`}>
                  <div className="card">
                    <h3 className="text-2xl font-bold text-gray-100 mb-2">{exp.title}</h3>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">{exp.company}</h4>
                    <p className="text-sm text-gray-500 mb-4">{exp.duration}</p>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-xs px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Center Circle */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-4 border-gray-900 shadow-lg shadow-cyan-500/50 z-10"></div>
                </div>
                
                {/* Right Side (for odd indices) */}
                <div className={`w-full md:w-5/12 ${index % 2 === 1 ? '' : 'md:order-2'}`}>
                  {/* Empty space for alternating layout */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience