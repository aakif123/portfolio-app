'use client'

import React from 'react'
import { skills } from '../lib/data'

const Skills = () => {
  const categories = ['Frontend', 'Backend', 'Tools']

  return (
    <section id="skills" className="section bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <h2 className="heading text-center mb-16 animate-fade-in">
          Skills & Technologies
        </h2>
        <div className="max-w-6xl mx-auto">
          {categories.map((category, catIndex) => (
            <div key={category} className="mb-12 animate-slide-up" style={{ animationDelay: `${catIndex * 0.2}s` }}>
              <h3 className="subheading text-center md:text-left mb-6">
                {category}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl shadow-lg p-6 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="text-lg font-semibold text-gray-100">{skill.name}</h4>
                        <span className="text-sm font-bold text-cyan-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-cyan-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-cyan-500/50"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills