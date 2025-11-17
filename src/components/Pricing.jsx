import React, { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Pricing() {
  const [plans, setPlans] = useState([
    { name: 'Starter', price_month: 0, price_year: 0, features: ['Community play', 'Basic prompts', 'Public chat'] },
    { name: 'Creator', price_month: 4.99, price_year: 49, features: ['All modes', 'Saved worlds', 'Custom decks'] },
    { name: 'Team', price_month: 14.99, price_year: 149, features: ['Facilitator tools', 'Scoreboards', 'Workshop mode'] },
  ])

  useEffect(() => {
    async function load() {
      try {
        const r = await fetch(`${API}/pricing`)
        if (r.ok) setPlans(await r.json())
      } catch {}
    }
    load()
  }, [])

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900">Simple, fair pricing</h2>
        <p className="text-gray-600 mt-2">Start free. Upgrade when you want more power.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <div className="mt-3">
                <div className="text-3xl font-bold">{p.price_month === 0 ? 'Free' : `KSh ${(p.price_month*130).toFixed(0)}/mo`}</div>
                <div className="text-sm text-gray-500">or {p.price_year === 0 ? 'Free' : `KSh ${(p.price_year*130).toFixed(0)}/yr`}</div>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                {p.features.map((f, i) => (<li key={i}>• {f}</li>))}
              </ul>
              <button className="mt-6 w-full py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600">Choose {p.name}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
