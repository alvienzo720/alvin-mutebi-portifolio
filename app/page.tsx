'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
import Contact from '@/components/contact'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <div id="about" className="scroll-mt-20">
          <About />
        </div>
        <div id="skills" className="scroll-mt-20">
          <Skills />
        </div>
        <div id="experience" className="scroll-mt-20">
          <Experience />
        </div>
        <div id="projects" className="scroll-mt-20">
          <Projects />
        </div>
        <div id="contact" className="scroll-mt-20">
          <Contact />
        </div>
      </main>
    </div>
  )
}
