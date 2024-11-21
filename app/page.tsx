'use client'

import Image from 'next/image'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

export default function Home() {
  const [formStatus, setFormStatus] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const body = Object.fromEntries(formData)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      // Log the full response for debugging
      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      // Parse the response body to get more details
      const responseBody = await response.text();
      console.log('Response body:', responseBody);

      if (response.ok) {
        setFormStatus('Message sent successfully!')
        // Reset form using ref instead of e.currentTarget
        formRef.current?.reset()
      } else {
        // Log the error response and set a more informative status
        setFormStatus(`Failed to send message. Status: ${response.status}. ${responseBody}`)
      }
    } catch (error) {
      // Log the actual error for more details
      console.error('Submission error:', error);
      setFormStatus('An error occurred. Please try again later.')
    }
  }

  return (
    <div className="space-y-16">
      <motion.section 
        id="hero" 
        className="flex flex-col items-center justify-center min-h-screen text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/alvinmutebi.jpg?height=200&width=200"
          alt="Alvin Mutebi"
          width={200}
          height={200}
          className="rounded-full neo-brutalist-box mb-8"
        />
        <h1 className="text-6xl font-bold mb-4 bg-primary p-4 neo-brutalist-box text-text-dark">Alvin Mutebi</h1>
        <p className="text-2xl mb-8 bg-background-light dark:bg-background-dark p-2 neo-brutalist-box text-text-light dark:text-text-dark">Software Developer | Web3 Enthusiast | Blockchain Expert</p>
        <div className="flex space-x-4">
          <a href="https://github.com/alvienzo720" target="_blank" rel="noopener noreferrer" className="text-text-light dark:text-text-dark hover:text-primary">
            <Github size={32} />
          </a>
          <a href="https://linkedin.com/in/alvin-mutebi-a5356815b" target="_blank" rel="noopener noreferrer" className="text-text-light dark:text-text-dark hover:text-primary">
            <Linkedin size={32} />
          </a>
          <a href="mailto:mutebialvinalvienzo@gmail.com" className="text-text-light dark:text-text-dark hover:text-primary">
            <Mail size={32} />
          </a>
          <a href="tel:+256786829438" className="text-text-light dark:text-text-dark hover:text-primary">
            <Phone size={32} />
          </a>
        </div>
      </motion.section>

      <motion.section 
        id="about" 
        className="neo-brutalist-box bg-primary p-8 text-text-dark"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          I'm a passionate software developer with expertise in Web3, blockchain technologies, and full-stack development. 
          With a strong background in Python, TypeScript, and Solidity, I've worked on various projects ranging from 
          trading bots to decentralized applications. I'm always eager to learn and take on new challenges in the 
          ever-evolving world of technology.
        </p>
      </motion.section>

      <motion.section 
        id="experience" 
        className="neo-brutalist-box bg-background-light dark:bg-background-dark p-8 text-text-light dark:text-text-dark"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
        <div className="space-y-8">
          <div className="neo-brutalist-box bg-primary p-4 text-text-dark">
            <h3 className="text-2xl font-bold">Web3 Trainer</h3>
            <p className="text-lg">Code3Camp | January 2024 - August 2024</p>
            <ul className="list-disc list-inside mt-2">
              <li>Guided developers through Web3 fundamentals</li>
              <li>Taught smart contract development using Solidity and Motoko</li>
              <li>Led comprehensive sessions on DeFi</li>
              <li>Conducted hands-on workshops on blockchain technologies</li>
            </ul>
          </div>
          <div className="neo-brutalist-box bg-primary p-4 text-text-dark">
            <h3 className="text-2xl font-bold">Software Developer</h3>
            <p className="text-lg">Ngeni Labs | January 2023 - August 2024</p>
            <ul className="list-disc list-inside mt-2">
              <li>Developed efficient trading bot on Bybit using TypeScript, Express, and Node.js</li>
              <li>Deployed 12+ RESTful APIs using TypeScript, Node.js, Python, and Django</li>
              <li>Built Telegram bot for Uniswap V3 token operations</li>
              <li>Implemented 20+ smart contracts on various protocols</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="projects" 
        className="neo-brutalist-box bg-primary p-8 text-text-dark"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="neo-brutalist-box bg-background-light dark:bg-background-dark p-4 text-text-light dark:text-text-dark">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Bybit Trading Bot"
              width={300}
              height={200}
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Bybit Trading Bot</h3>
            <p>Efficient trading bot developed for Bybit using TypeScript, Express, and Node.js.</p>
          </div>
          <div className="neo-brutalist-box bg-background-light dark:bg-background-dark p-4 text-text-light dark:text-text-dark">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Blockchain Student Database"
              width={300}
              height={200}
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Blockchain Student Database</h3>
            <p>Python-based blockchain solution for secure student data management on AWS.</p>
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="contact" 
        className="neo-brutalist-box bg-background-light dark:bg-background-dark p-8 text-text-light dark:text-text-dark"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <form 
          ref={formRef} 
          className="space-y-4" 
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="block mb-1 font-bold">Name</label>
            <input type="text" id="name" name="name" className="w-full p-2 neo-brutalist-box bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-bold">Email</label>
            <input type="email" id="email" name="email" className="w-full p-2 neo-brutalist-box bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark" required />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-bold">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full p-2 neo-brutalist-box bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark" required></textarea>
          </div>
          <button type="submit" className="neo-brutalist-button bg-primary text-text-dark hover:bg-opacity-80">Send Message</button>
        </form>
        {formStatus && <p className="mt-4 text-center font-bold">{formStatus}</p>}
      </motion.section>
    </div>
  )
}