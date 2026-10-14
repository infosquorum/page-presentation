'use client'

import React, { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import options from '../../data/options.json'
import Toast from './Toast'

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

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState('')
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

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
      setToast({ message: 'Veuillez valider la vérification anti-robot.', type: 'error' })
      return
    }

    setErrors({})
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

      setToast({ message: 'Votre demande a été envoyée avec succès. Nous vous répondrons rapidement.', type: 'success' })
      setForm({ name: '', email: '', company: '', eventType: '', message: '', website: '' })
      setTurnstileToken('')
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current)
      }
    } catch {
      setToast({ message: 'Une erreur est survenue, réessayez plus tard.', type: 'error' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const field = (name: 'name' | 'email' | 'company', label: string, type: string, placeholder: string, autoComplete: string) => (
    <div className="flex flex-col gap-2">
      <label htmlFor={`demo-${name}`} className="text-sm font-medium">{label}</label>
      <input
        id={`demo-${name}`}
        type={type}
        name={name}
        value={form[name]}
        onChange={handleChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={!!errors[name]}
        aria-describedby={errors[name] ? `${name}-error` : undefined}
        className="w-full min-h-[52px] rounded-[14px] border border-ink/[.14] bg-white px-4 text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
      />
      {errors[name] && <p id={`${name}-error`} role="alert" className="text-sm text-[#c2312f]">{errors[name]}</p>}
    </div>
  )

  return (
    <div ref={formRef} className="rounded-[32px] border border-ink/[.07] bg-white p-6 sm:p-12">
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-[18px]">
        {/* Honeypot — invisible pour les humains, piège pour les bots */}
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="website">Ne pas remplir ce champ</label>
          <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={handleChange} />
        </div>

        <div className="grid gap-[18px] sm:grid-cols-2">
          {field('name', 'Nom complet', 'text', 'Awa Koné', 'name')}
          {field('email', 'E-mail professionnel', 'email', 'awa@entreprise.ci', 'email')}
        </div>
        <div className="grid gap-[18px] sm:grid-cols-2">
          {field('company', 'Entreprise ou organisation', 'text', 'Nom de votre entreprise', 'organization')}
          <div className="flex flex-col gap-2">
            <label htmlFor="demo-eventType" className="text-sm font-medium">Type d&apos;événement</label>
            <select
              id="demo-eventType"
              name="eventType"
              value={form.eventType}
              onChange={handleChange}
              aria-invalid={!!errors.eventType}
              aria-describedby={errors.eventType ? 'eventType-error' : undefined}
              className="w-full min-h-[52px] rounded-[14px] border border-ink/[.14] bg-white px-4 text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
            >
              <option value="">Choisir un format</option>
              {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            {errors.eventType && <p id="eventType-error" role="alert" className="text-sm text-[#c2312f]">{errors.eventType}</p>}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="demo-message" className="text-sm font-medium">Votre projet <span className="font-normal text-slate">(facultatif)</span></label>
          <textarea
            id="demo-message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Date, nombre d'invités, lieu, ce que vous attendez de la plateforme…"
            className="w-full resize-y rounded-[14px] border border-ink/[.14] bg-white px-4 py-3.5 text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
        </div>

        {/* Widget Turnstile */}
        <div ref={turnstileRef} className="min-h-[66px]" />

        <button
          type="submit"
          disabled={isSubmitting}
          className="q-btn inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-brand font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? 'Envoi en cours…' : 'Envoyer la demande'}
        </button>
        <p className="text-[13px] leading-normal text-[#8a8fae]">Vos informations servent uniquement à vous recontacter au sujet de votre demande.</p>
      </form>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

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