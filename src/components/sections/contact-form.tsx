"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

type SubmitState = "idle" | "submitting" | "success" | "error";

/**
 * Client-side form shell only. No backend is wired up yet — replace the
 * handleSubmit body with a real request (e.g. to an API route or email
 * service) when one is available.
 */
export function ContactForm() {
  const [status, setStatus] = useState<SubmitState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    // TODO: replace with a real submission (API route, email service, etc.)
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("success");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="rounded-input border border-border bg-surface px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          placeholder="Your name"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="rounded-input border border-border bg-surface px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          placeholder="you@example.com"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="resize-none rounded-input border border-border bg-surface px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          placeholder="Tell me about your project or question"
        />
      </div>

      <Button type="submit" disabled={status === "submitting"} className="mt-2 self-start">
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>

      <p role="status" aria-live="polite" className="text-sm text-ink-secondary">
        {status === "success"
          ? "Thanks — this form isn't connected to a backend yet, so your message wasn't actually sent."
          : null}
      </p>
    </form>
  );
}
