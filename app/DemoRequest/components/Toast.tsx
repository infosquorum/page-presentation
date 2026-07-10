'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

type ToastType = 'success' | 'error'

interface ToastProps {
  message: string
  type: ToastType
  onClose: () => void
}

export default function Toast({ message, type, onClose }: ToastProps) {
  const toastRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = toastRef.current
    if (!el) return

    gsap.fromTo(
      el,
      { opacity: 0, y: -20, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(1.7)' }
    )

    const timer = setTimeout(() => {
      gsap.to(el, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: onClose
      })
    }, 5000)

    return () => clearTimeout(timer)
  }, [onClose])

  const isSuccess = type === 'success'

  return (
    <div
      ref={toastRef}
      role="alert"
      aria-live="assertive"
      className={`fixed top-6 right-6 z-50 flex items-start gap-3 max-w-sm w-full p-4 rounded-2xl shadow-2xl border backdrop-blur-sm ${
        isSuccess
          ? 'bg-white/95 dark:bg-gray-900/95 border-emerald-200 dark:border-emerald-800'
          : 'bg-white/95 dark:bg-gray-900/95 border-red-200 dark:border-red-800'
      }`}
    >
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isSuccess ? 'bg-emerald-100 dark:bg-emerald-900/40' : 'bg-red-100 dark:bg-red-900/40'
        }`}
      >
        {isSuccess ? (
          <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </div>

      <div className="flex-1 pt-0.5">
        <p className={`text-sm font-semibold ${isSuccess ? 'text-emerald-900 dark:text-emerald-100' : 'text-red-900 dark:text-red-100'}`}>
          {isSuccess ? 'Demande envoyée' : 'Erreur'}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-0.5">{message}</p>
      </div>

      <button
        onClick={onClose}
        aria-label="Fermer la notification"
        className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}