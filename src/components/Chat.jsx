import React, { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Chat() {
  const [messages, setMessages] = useState([])
  const [text, setText] = useState('')
  const [username, setUsername] = useState('')

  async function send() {
    if (!text.trim()) return
    await fetch(`${API}/chat`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username: username || 'Guest', text }) })
    setText('')
    load()
  }

  async function load() {
    try {
      const r = await fetch(`${API}/chat?limit=30`)
      if (r.ok) setMessages(await r.json())
    } catch {}
  }

  useEffect(() => {
    load()
    const id = setInterval(load, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900">Community chat</h2>
        <div className="mt-6 bg-white rounded-2xl border border-gray-200 p-4">
          <div className="h-64 overflow-y-auto space-y-2 pr-2">
            {messages.map((m, i) => (
              <div key={i} className="text-sm"><span className="font-semibold">{m.username}:</span> {m.text}</div>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <input value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Name" className="px-3 py-2 rounded-lg border border-gray-200 w-32" />
            <input value={text} onChange={(e)=>setText(e.target.value)} placeholder="Type a message" className="flex-1 px-3 py-2 rounded-lg border border-gray-200" />
            <button onClick={send} className="px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold">Send</button>
          </div>
        </div>
      </div>
    </section>
  )
}
