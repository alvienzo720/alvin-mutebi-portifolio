'use client'

import './globals.css'
import { useState, useEffect } from 'react'
import { Roboto_Mono } from 'next/font/google'
import { Menu, X, Moon, Sun } from 'lucide-react'

const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') !== 'false'
    setDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', String(newDarkMode))
    document.documentElement.classList.toggle('dark', newDarkMode)
  }

  return (
    <html lang="en" className={darkMode ? 'dark' : ''}>
      <body className={`${robotoMono.className} bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300`}>
        <header className="p-6 bg-primary">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold neo-brutalist-box bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark p-2">Alvin Mutebi</h1>
            <div className="flex items-center space-x-4">
              <button onClick={toggleDarkMode} className="neo-brutalist-button bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark p-2">
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
              <button onClick={toggleMenu} className="md:hidden neo-brutalist-button bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
            <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
              <li><a href="#about" className="neo-brutalist-button block text-center bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark" onClick={toggleMenu}>About</a></li>
              <li><a href="#experience" className="neo-brutalist-button block text-center bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark" onClick={toggleMenu}>Experience</a></li>
              <li><a href="#projects" className="neo-brutalist-button block text-center bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark" onClick={toggleMenu}>Projects</a></li>
              <li><a href="#contact" className="neo-brutalist-button block text-center bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark" onClick={toggleMenu}>Contact</a></li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-primary text-text-dark p-6 text-center">
          <p className="font-bold">&copy; 2024 Alvin Mutebi. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}