import React, { useState } from 'react'
import Hero from './components/Hero'
import Modes from './components/Modes'
import Game from './components/Game'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Chat from './components/Chat'

export default function App() {
  const [mode, setMode] = useState('technology')

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top bar */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-xl">IMAGINE<span className="text-orange-500">.</span></a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#modes" className="hover:text-orange-600">Modes</a>
            <a href="#play" className="hover:text-orange-600">Play</a>
            <a href="#pricing" className="hover:text-orange-600">Pricing</a>
            <a href="#blog" className="hover:text-orange-600">Blog</a>
            <a href="#contact" className="hover:text-orange-600">Contact</a>
          </nav>
          <a href="#play" className="px-4 py-2 rounded-lg bg-black text-white">Play now</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Modes onSelect={setMode} />
        <Game mode={mode} />
        <Pricing />
        <Chat />
        <Blog />
        <Contact />
      </main>

      <footer className="py-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} IMAGINE — Built for Kenya with love.</footer>
    </div>
  )
}
