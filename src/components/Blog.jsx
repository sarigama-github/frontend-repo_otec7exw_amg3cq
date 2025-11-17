import React, { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function load() {
      try {
        const r = await fetch(`${API}/blog`)
        if (r.ok) setPosts(await r.json())
      } catch {}
    }
    load()
  }, [])

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900">From the blog</h2>
        <p className="text-gray-600 mt-2">Stories on creativity, culture and technology from Kenya and beyond.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {posts.length === 0 && (
            <div className="col-span-3 text-gray-600">No posts yet. Check back soon.</div>
          )}
          {posts.map((p) => (
            <article key={p.slug} className="rounded-2xl overflow-hidden bg-white border border-gray-200">
              {p.image && <img src={p.image} alt="" className="w-full h-40 object-cover" />}
              <div className="p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{p.excerpt}</p>
                <a className="inline-block mt-3 text-blue-600 font-medium" href={`#blog-${p.slug}`}>Read more →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
