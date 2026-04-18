"use client";

import { useState } from "react";

const initialValues = {
  name: "",
  email: "",
  topic: "Recipe request",
  message: ""
};

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateValue(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      const result = await response.json();

      setStatus({ type: response.ok ? "success" : "error", message: result.message });
      if (response.ok) {
        setValues(initialValues);
      }
    } catch (error) {
      setStatus({ type: "error", message: "Could not reach the contact service." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label>
          Name
          <input name="name" value={values.name} onChange={updateValue} required />
        </label>
        <label>
          Email
          <input name="email" type="email" value={values.email} onChange={updateValue} required />
        </label>
      </div>
      <label>
        Topic
        <select name="topic" value={values.topic} onChange={updateValue}>
          <option>Recipe request</option>
          <option>Partnership</option>
          <option>Support</option>
          <option>Community story</option>
        </select>
      </label>
      <label>
        Message
        <textarea
          name="message"
          value={values.message}
          onChange={updateValue}
          rows={7}
          placeholder="Tell us what you are cooking, craving, or trying to solve."
          required
        />
      </label>
      <button className="dark-button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
      <p className={`form-status ${status.type}`} aria-live="polite">
        {status.message}
      </p>
    </form>
  );
}
