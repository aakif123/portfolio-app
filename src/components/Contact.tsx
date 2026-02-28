'use client'

import React, { useState } from 'react'
// Uncomment below when you set up EmailJS
// import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // METHOD 1: EmailJS (Recommended)
  const handleSubmitWithEmailJS = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      // SETUP INSTRUCTIONS:
      // 1. Go to https://www.emailjs.com/ and create account
      // 2. Add email service (Gmail/Outlook)
      // 3. Create email template
      // 4. Replace these with your actual IDs:
      
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',      // e.g., 'service_abc123'
      //   'YOUR_TEMPLATE_ID',     // e.g., 'template_xyz456'
      //   {
      //     from_name: formData.name,
      //     from_email: formData.email,
      //     message: formData.message,
      //     to_email: 'aakifcse2022@gmail.com'
      //   },
      //   'YOUR_PUBLIC_KEY'       // e.g., 'user_abc123xyz'
      // )
      
      // For now, using Web3Forms (simpler, no signup needed initially)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '6ef92cff-a83c-43fa-833b-9b387ba60caf',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to: 'aakifcse2022@gmail.com',
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Error:', error)
      setStatus('error')
    } finally {
      setLoading(false)
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  // METHOD 2: Simple Form (for testing - logs to console)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // For now, just log and show success message
    console.log('Form submitted:', formData)
    console.log('Email will be sent to: aakifcse2022@gmail.com')
    
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setLoading(false)
      setTimeout(() => setStatus('idle'), 5000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="section bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="heading text-center mb-8 animate-fade-in">
          Get In Touch
        </h2>
        <p className="text-center text-xl mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmitWithEmailJS} className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 backdrop-blur-lg rounded-2xl p-8 shadow-2xl shadow-cyan-500/10 animate-slide-up">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all resize-none"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed ${loading ? 'animate-pulse' : ''}`}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            
            {/* Status Messages */}
            {status === 'success' && (
              <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center animate-fade-in">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-center animate-fade-in">
                ✗ Failed to send message. Please email me directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact