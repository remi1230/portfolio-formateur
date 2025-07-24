'use client';

import { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import clsx from 'clsx';
import validateContactForm from '@/utils/validateContactForm';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isQuillFocused, setIsQuillFocused] = useState(false);
  const quillRef = useRef(null); // Pour référence à l'instance de Quill

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (isSubmitted && errors[e.target.name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: undefined }));
    }
  };

  const handleQuillChange = (content, delta, source, editor) => {
    setForm({ ...form, message: content });
    if (isSubmitted && errors.message) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = content;
      const plainText = tempDiv.textContent || tempDiv.innerText || '';
      if (plainText.trim()) {
        setErrors((prevErrors) => ({ ...prevErrors, message: undefined }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const formErrors = validateContactForm(form);
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      setStatus('validation-error');
      return;
    }

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
        setErrors({});
        setIsSubmitted(false);
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Erreur lors de l\'envoi du formulaire:', err);
      setStatus('error');
    }
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      ['link']
    ],
  };

  const formats = [
    'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent', 'link'
  ];

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={clsx(
              "input input-bordered w-full bg-brand-bg placeholder-brand-fo border-brand-message-bdr",
              { 'border-red-500 ring-red-500 ring-1': isSubmitted && errors.name }
            )}
            required
            autoComplete="name"
          />
          {isSubmitted && errors.name && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-md shadow-lg z-20 whitespace-nowrap
                            before:content-[''] before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-gray-800">
              <span className="inline-block align-middle mr-2 text-orange-400">⚠️</span>
              {errors.name}
            </div>
          )}
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john.doe@gmail.com"
            className={clsx(
              "input input-bordered w-full bg-brand-bg placeholder-brand-fo border-brand-message-bdr",
              { 'border-red-500 ring-red-500 ring-1': isSubmitted && errors.email }
            )}
            required
            autoComplete="email"
          />
          {isSubmitted && errors.email && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-md shadow-lg z-20 whitespace-nowrap
                            before:content-[''] before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-gray-800">
              <span className="inline-block align-middle mr-2 text-orange-400">⚠️</span>
              {errors.email}
            </div>
          )}
        </div>
      </div>

      <div className="relative z-10"> {/* Le conteneur ReactQuill */}
        <ReactQuill
          theme="snow"
          value={form.message}
          onChange={handleQuillChange}
          onFocus={() => setIsQuillFocused(true)} // Définir l'état focus à true
          onBlur={() => setIsQuillFocused(false)}
          modules={modules}
          formats={formats}
          placeholder="Entrez votre message..."
          className={clsx(
            "w-full rounded-md",
            { 'border-red-500 ring-red-500 ring-1': isSubmitted && errors.message,
              'quill-focus-styles' : isQuillFocused }
          )}
        />
        {isSubmitted && errors.message && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-md shadow-lg z-20 whitespace-nowrap
                          before:content-[''] before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-gray-800">
            <span className="inline-block align-middle mr-2 text-orange-400">⚠️</span>
            {errors.message}
          </div>
        )}
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="btn btn-outline w-full text-brand-fg hover:text-brand-bg hover:bg-brand-important border-brand-message-bdr"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Envoi...' : 'Envoyer'}
        </button>
      </div>

      {status === 'success' && (
        <p className="text-green-500 text-sm">Message envoyé avec succès !</p>
      )}
      {status === 'error' && (
        <p className="text-red-500 text-sm">Erreur lors de l’envoi. Veuillez réessayer.</p>
      )}
      {status === 'validation-error' && Object.keys(errors).length > 0 && (
          <p className="text-red-500 text-sm">Veuillez corriger les erreurs dans le formulaire.</p>
      )}
    </form>
  );
}