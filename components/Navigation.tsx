// components/Navigation.tsx
'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="p-6 bg-neon-green relative">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold neo-brutalist-box bg-hot-pink p-2">Alvin Mutebi</h1>
        <button onClick={toggleMenu} className="md:hidden neo-brutalist-button">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
        <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
          <li><a href="#about" className="neo-brutalist-button block text-center" onClick={toggleMenu}>About</a></li>
          <li><a href="#experience" className="neo-brutalist-button block text-center" onClick={toggleMenu}>Experience</a></li>
          <li><a href="#projects" className="neo-brutalist-button block text-center" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" className="neo-brutalist-button block text-center" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}