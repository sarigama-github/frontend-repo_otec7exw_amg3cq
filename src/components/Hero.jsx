import React from 'react'
import Spline from '@splinetool/react-spline'

const colors = {
  yellow: '#FDE68A',
  orange: '#FDBA74',
  blue: '#93C5FD',
  green: '#86EFAC',
  black: '#0B0F13',
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden flex items-center bg-[radial-gradient(130%_120%_at_90%_10%,#111_0%,#0a0d10_30%,#0b0f13_60%)]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <span className="inline-flex items-center gap-2 text-xs md:text-sm text-white/80 bg-white/10 px-3 py-1 rounded-full backdrop-blur">
          <span className="size-2 rounded-full" style={{ background: colors.orange }} />
          IMAGINE • World-building Card Game
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow">
          Reimagine Kenya through Play
        </h1>
        <p className="mt-4 text-white/80 max-w-2xl">
          Ask bold what-if questions. Build new worlds together across Child, Arts & Culture, Creative and Technology modes.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#play" className="px-5 py-3 rounded-lg font-semibold text-black" style={{ background: colors.yellow }}>Start Playing</a>
          <a href="#pricing" className="px-5 py-3 rounded-lg font-semibold text-white/90 ring-1 ring-white/20">See Pricing</a>
        </div>
      </div>
    </section>
  )
}
