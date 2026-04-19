'use client'

import React, { useState } from 'react'
import { experiences } from '../lib/data'

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="experience" className="section bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <h2 className="heading text-center mb-16 animate-fade-in">
          Experience
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() =>
                setExpandedIndex((prev) => (prev === index ? null : index))
              }
            >
              <div
                className={`card relative overflow-hidden transition-all duration-500 ${
                  expandedIndex === index
                    ? 'border-cyan-500 shadow-lg shadow-cyan-500/30 scale-[1.02]'
                    : 'border-gray-800'
                }`}
              >
                {/* Animated background gradient when expanded */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 transition-opacity duration-500 ${
                    expandedIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                ></div>

                <div className="relative z-10">
                  {/* Header - Always visible */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-white pr-4">
                        {exp.title}
                      </h3>
                      <span className="text-cyan-400 text-xs font-medium whitespace-nowrap bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-cyan-400 font-medium text-sm flex items-center">
                      <span className="mr-2">🏢</span>
                      {exp.company}
                    </p>
                  </div>

                  {/* Skills - Always visible (show limited initially) */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies
                      .slice(0, expandedIndex === index ? exp.technologies.length : 5)
                      .map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    {expandedIndex !== index && exp.technologies.length > 5 && (
                      <span className="px-3 py-1 text-xs text-gray-500">
                        +{exp.technologies.length - 5} more
                      </span>
                    )}
                  </div>

                  {/* Expandable responsibilities */}
                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      expandedIndex === index
                        ? 'max-h-[500px] opacity-100'
                        : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    <div className="pt-4 border-t border-gray-800">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((item, i) => (
                          <li
                            key={i}
                            className="text-gray-300 text-sm flex items-start"
                          >
                            <span className="text-cyan-500 mr-2 mt-1 flex-shrink-0">
                              ▹
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Expand indicator for mobile-friendly interaction */}
                  {expandedIndex !== index && (
                    <div className="mt-4 pt-4 border-t border-gray-800">
                      <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-2">
                        <span className="animate-pulse">👇</span>
                        Click to expand details
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience