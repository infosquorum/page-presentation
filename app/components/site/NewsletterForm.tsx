// app/components/site/NewsletterForm.tsx — « Être prévenu » (POST /api/subscribe)
"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!EMAIL_REGEX.test(email.trim())) {
      setStatus("error");
      setMessage("Saisissez une adresse e-mail valide, par exemple nom@entreprise.ci.");
      return;
    }
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), website }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "L’inscription n’a pas pu être enregistrée, réessayez plus tard.");
      setStatus("success");
      setMessage("C’est noté ! Nous vous écrirons à l’annonce de nos prochains événements.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error && err.message !== "Failed to fetch"
        ? err.message
        : "Connexion impossible pour le moment, réessayez dans un instant.");
    }
  };

  return (
    <div className="mt-6 max-w-[480px]">
      <form onSubmit={submit} noValidate className="flex flex-wrap gap-2 rounded-[28px] border border-white/[.12] bg-white/[.04] p-1.5 focus-within:border-white/30">
        <label htmlFor="newsletter-email" className="sr-only">Votre e-mail</label>
        <input
          id="newsletter-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }}
          placeholder="Votre e-mail"
          aria-invalid={status === "error"}
          aria-describedby="newsletter-status"
          className="min-h-[46px] min-w-0 flex-[1_1_180px] bg-transparent px-4 text-white placeholder:text-haze focus:outline-none"
        />
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="newsletter-website">Ne pas remplir</label>
          <input id="newsletter-website" type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </div>
        <button type="submit" disabled={status === "sending"}
          className="q-btn min-h-[46px] rounded-full bg-[#eceefa] px-5 font-semibold text-night disabled:cursor-wait disabled:opacity-60">
          {status === "sending" ? "Envoi…" : "Être prévenu"}
        </button>
      </form>
      <p id="newsletter-status" role="status" aria-live="polite"
        className={`min-h-6 px-4 pt-2 text-sm ${status === "success" ? "text-mint" : status === "error" ? "text-peach" : "text-transparent"}`}>
        {message}
      </p>
    </div>
  );
}
