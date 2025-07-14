'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="John Doe"
          className="input input-bordered w-full bg-brand-bg placeholder-brand-fo"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="john.doe@gmail.com"
          className="input input-bordered w-full bg-brand-bg placeholder-brand-fo"
          required
        />
      </div>

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Entrez votre message..."
        className="w-full textarea textarea-bordered h-32 bg-brand-bg placeholder-brand-fo"
        required
      ></textarea>

      <div className="flex justify-end">
        <button
          type="submit"
          className="btn btn-outline w-full text-brand-fg hover:text-brand-bg hover:bg-brand-important"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Envoi...' : 'Envoyer'}
        </button>
      </div>

      {status === 'success' && (
        <p className="text-green-500 text-sm">Message envoyé avec succès !</p>
      )}
      {status === 'error' && (
        <p className="text-red-500 text-sm">Erreur lors de l’envoi. Essayez à nouveau.</p>
      )}
    </form>
  );
}