import React, { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  async function submit(e) {
    e.preventDefault()
    const r = await fetch(`${API}/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
    if (r.ok) setSent(true)
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900">Contact us</h2>
        <p className="text-gray-600 mt-2">Questions, ideas, partnerships — we’d love to hear from you.</p>
        <form onSubmit={submit} className="mt-8 grid gap-4">
          <input required placeholder="Name" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-300" />
          <input required type="email" placeholder="Email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-300" />
          <input required placeholder="Subject" value={form.subject} onChange={(e)=>setForm({...form, subject:e.target.value})} className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-300" />
          <textarea required rows={5} placeholder="Message" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-300" />
          <button className="px-5 py-3 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600">Send message</button>
          {sent && <p className="text-green-700">Thanks! We’ll get back to you soon.</p>}
        </form>
      </div>
    </section>
  )
}
