// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
export const metadata: Metadata = {
  title: 'Alvin Mutebi - Neo-Brutalist Portfolio',
  description: 'Software Developer specializing in Web3, Blockchain, and Full Stack Development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-brutalist">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-electric-blue p-6 text-center">
          <p className="font-bold">&copy; 2024 Alvin Mutebi. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}