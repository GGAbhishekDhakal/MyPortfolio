"use client";

import { useState, type FormEvent } from "react";

const ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name,
          email,
          message,
          subject: `New message from ${name}`,
          from_name: name,
          replyto: email,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-lg border border-card-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-card-border card-glass p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your project or opportunity..."
          className={inputClass}
        />
      </div>

      <div className="mt-6 flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25 disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
          <span aria-hidden="true">→</span>
        </button>

        {status === "success" && (
          <p className="text-sm font-medium text-green-500">
            Message sent! I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm font-medium text-red-500">
            Something went wrong. Please email me directly.
          </p>
        )}
      </div>
    </form>
  );
}
