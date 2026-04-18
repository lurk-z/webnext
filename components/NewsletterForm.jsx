"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const result = await response.json();

      setStatus({ type: response.ok ? "success" : "error", message: result.message });
      if (response.ok) {
        setEmail("");
      }
    } catch (error) {
      setStatus({ type: "error", message: "Could not reach the subscription service." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter your email address ..."
        required
      />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Saving..." : "Subscribe"}
      </button>
      <p className={`form-status ${status.type}`} aria-live="polite">
        {status.message}
      </p>
    </form>
  );
}
