import React, { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

const exampleQuestions = {
  child: [
    'If your school had no electricity, how would you keep learning with friends?',
  ],
  arts: [
    'If fashion had no seasons, how else would designers create?',
  ],
  creative: [
    'If cities had no roads, how would people move and design communities?',
  ],
  technology: [
    'If buildings had no grid power, what new energy would your town invent?',
  ],
}

export default function Game({ mode = 'technology' }) {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [username, setUsername] = useState('')
  const [points, setPoints] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    async function loadQuestion() {
      try {
        const res = await fetch(`${API}/questions?mode=${mode}&limit=1`)
        if (res.ok) {
          const data = await res.json()
          if (data && data.length) {
            setQuestion(data[0].text)
            return
          }
        }
      } catch (e) {}
      const list = exampleQuestions[mode] || []
      setQuestion(list[Math.floor(Math.random() * list.length)] || 'Imagine something bold...')
    }
    loadQuestion()
  }, [mode])

  async function submit() {
    if (!answer.trim()) return
    setSubmitting(true)
    try {
      const res = await fetch(`${API}/answers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode, question_text: question, answer_text: answer, username })
      })
      if (res.ok) {
        setPoints(Math.floor(50 + Math.random() * 50))
        setAnswer('')
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="play" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="text-xs text-gray-500 uppercase tracking-wider">Current prompt</div>
          <p className="mt-2 text-xl font-semibold text-gray-900">{question}</p>

          <div className="mt-6 grid gap-3">
            <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Your name (optional)" className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-300 outline-none" />
            <textarea value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Share your idea..." rows={4} className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-300 outline-none" />
            <div className="flex items-center gap-3">
              <button onClick={submit} disabled={submitting} className="px-5 py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 disabled:opacity-60">Submit Idea</button>
              {points !== null && <span className="text-sm text-green-700 font-medium">+{points} points!</span>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
