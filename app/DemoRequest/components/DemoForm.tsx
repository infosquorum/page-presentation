'use client'

import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Script from 'next/script'
import options from '../../data/options.json'

declare global {
  interface Window {
    turnstile: {
      render: (el: string | HTMLElement, opts: Record<string, unknown>) => string
      reset: (widgetId?: string) => void
      remove: (widgetId?: string) => void
    }
  }
}

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY as string

export default function DemoForm() {
  const formRef = useRef<HTMLDivElement | null>(null)
  const turnstileRef = useRef<HTMLDivElement | null>(null)
  const widgetIdRef = useRef<string | null>(null)

  const [isLoaded, setIsLoaded] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [turnstileToken, setTurnstileToken] = useState('')

  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    eventType: '',
    message: '',
    website: '' // honeypot — doit rester vide, les humains ne le voient pas
  })

  type Errors = {
    name?: string
    email?: string
    company?: string
    eventType?: string
  }
  const [errors, setErrors] = useState<Errors>({})

  // Avertit en dev si la clé Turnstile n'est pas configurée
  useEffect(() => {
    if (!TURNSTILE_SITE_KEY && process.env.NODE_ENV === 'development') {
      console.warn(
        "NEXT_PUBLIC_TURNSTILE_SITE_KEY manquante — le widget Turnstile ne s'affichera pas."
      )
    }
  }, [])

  // Animation d'entrée du formulaire
  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', onComplete: () => setIsLoaded(true) }
      )
    }
  }, [])

  // Nettoyage du widget Turnstile au démontage du composant
  useEffect(() => {
    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
      }
    }
  }, [])

  const validate = () => {
    const errs: Errors = {}
    if (!form.name) errs.name = 'Nom requis'
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Email invalide'
    if (!form.company) errs.company = 'Entreprise requise'
    if (!form.eventType) errs.eventType = 'Type requis'
    return errs
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    if (!turnstileToken) {
      setSubmitError('Veuillez valider la vérification anti-robot.')
      return
    }

    setErrors({})
    setSubmitError('')
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, turnstileToken })
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Erreur serveur')
      }

      alert('Votre demande a été envoyée avec succès.')
      setForm({ name: '', email: '', company: '', eventType: '', message: '', website: '' })
      setTurnstileToken('')
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current)
      }
    } catch {
      setSubmitError('Une erreur est survenue, réessayez plus tard.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      ref={formRef}
      className={`max-w-3xl mx-auto p-8 mt-12 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
        } bg-white dark:bg-gray-900`}
    >
      <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-8">
        Parlons de votre projet événementiel
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Honeypot — invisible pour les humains, piège pour les bots */}
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="website">Ne pas remplir ce champ</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Nom complet</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.name && (
            <p id="name-error" role="alert" className="text-red-500 text-sm mt-1">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Adresse email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.email && (
            <p id="email-error" role="alert" className="text-red-500 text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Entreprise / Organisation</label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? 'company-error' : undefined}
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.company && (
            <p id="company-error" role="alert" className="text-red-500 text-sm mt-1">
              {errors.company}
            </p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Type d&apos;événement</label>
          <select
            name="eventType"
            value={form.eventType}
            onChange={handleChange}
            aria-invalid={!!errors.eventType}
            aria-describedby={errors.eventType ? 'eventType-error' : undefined}
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">-- Choisir un type --</option>
            {options.map((opt, idx) => (
              <option key={idx} value={opt}>{opt}</option>
            ))}
          </select>
          {errors.eventType && (
            <p id="eventType-error" role="alert" className="text-red-500 text-sm mt-1">
              {errors.eventType}
            </p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Message (optionnel)</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none h-32"
          />
        </div>

        {/* Widget Turnstile */}
        <div ref={turnstileRef} />

        {submitError && (
          <p role="alert" aria-live="polite" className="text-red-500 text-sm text-center">
            {submitError}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
        </button>
      </form>

      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.turnstile && turnstileRef.current && turnstileRef.current.childElementCount === 0) {
            widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
              sitekey: TURNSTILE_SITE_KEY,
              callback: (token: string) => setTurnstileToken(token),
              'expired-callback': () => setTurnstileToken(''),
            })
          }
        }}
      />
    </div>
  )
}