import React from 'react'
import { Sparkles, Paintbrush, Lightbulb, Cpu } from 'lucide-react'

const modes = [
  { key: 'child', title: 'Child', desc: 'Playful prompts for kids', color: 'bg-orange-200 text-orange-900', icon: Sparkles },
  { key: 'arts', title: 'Arts & Culture', desc: 'Culture and expression', color: 'bg-yellow-200 text-yellow-900', icon: Paintbrush },
  { key: 'creative', title: 'Creative', desc: 'Open ideation and story', color: 'bg-green-200 text-green-900', icon: Lightbulb },
  { key: 'technology', title: 'Technology', desc: 'Invent the future', color: 'bg-blue-200 text-blue-900', icon: Cpu },
]

export default function Modes({ onSelect }) {
  return (
    <section id="modes" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Choose a Mode</h2>
        <p className="text-gray-600 mt-2">Each mode guides the questions to a different lens.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {modes.map((m) => (
            <button key={m.key} onClick={() => onSelect?.(m.key)} className={`group p-5 rounded-xl text-left shadow-sm hover:shadow-md transition ${m.color}`}>
              <div className="flex items-center gap-3">
                <m.icon className="w-5 h-5" />
                <h3 className="font-semibold">{m.title}</h3>
              </div>
              <p className="text-sm mt-2 opacity-80">{m.desc}</p>
              <span className="text-xs mt-3 inline-block opacity-70 group-hover:opacity-100">Tap to play →</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
