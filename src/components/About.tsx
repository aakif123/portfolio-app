'use client'

import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="section bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <h2 className="heading text-center mb-12 animate-fade-in">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl shadow-2xl shadow-cyan-500/10 p-8 md:p-12 animate-slide-up">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                  <div className="relative w-64 h-64">
                    <Image
                      src="/profile.jpg"
                      alt="Aakif Khan"
                      fill
                      className="rounded-full object-cover border-4 border-gray-900"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I am a <span className="font-semibold text-cyan-400">Frontend Developer</span> with 3.5 years of experience at Cognizant, specializing in building enterprise-scale applications.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Expert in React.js, Angular, TypeScript, and backend technologies including Java and Spring Boot. I deliver scalable solutions with proven performance improvements.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I thrive in Agile environments, mentor junior developers, and continuously seek challenging opportunities to drive impactful digital solutions.
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">3.5+</p>
                    <p className="text-sm text-gray-400">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">30%</p>
                    <p className="text-sm text-gray-400">Performance Boost</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">10K+</p>
                    <p className="text-sm text-gray-400">Daily Users</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About