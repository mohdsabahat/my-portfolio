// "use client";

import { personalInfo } from "@/app/lib/content";

export function ContactForm() {
  // const [status, setStatus] = useState<
  //   "idle" | "sending" | "sent" | "error"
  // >("idle");

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   const formData = new FormData(form);

  //   const name = (formData.get("name") as string).trim();
  //   const email = (formData.get("email") as string).trim();
  //   const message = (formData.get("message") as string).trim();

  //   if (!name || !email || !message) return;

  //   // If a form endpoint is configured (Formspree, Web3Forms, etc.), use it.
  //   // Set NEXT_PUBLIC_FORM_ENDPOINT in your .env.local — otherwise fall back to the
  //   // Formspree endpoint provided by the user.
  //   const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT ||
  //     "https://formspree.io/f/mgoqzzlk";

  //   if (endpoint) {
  //     setStatus("sending");
  //     try {
  //       const res = await fetch(endpoint, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //         },
  //         body: JSON.stringify({ name, email, message }),
  //       });
  //       if (res.ok) {
  //         setStatus("sent");
  //         form.reset();
  //       } else {
  //         setStatus("error");
  //       }
  //     } catch {
  //       setStatus("error");
  //     }
  //   } else {
  //     // Fallback: open the visitor's email client
  //     const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
  //     const body = encodeURIComponent(
  //       `From: ${name} (${email})\n\n${message}`
  //     );
  //     globalThis.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  //     setStatus("sent");
  //     form.reset();
  //   }
  // };

  return (
    <form 
      // onSubmit={handleSubmit} 
      action={process.env.NEXT_PUBLIC_FORM_ENDPOINT}
      className="flex flex-col gap-4"
      method="POST"
      >
      <div>
        <label htmlFor="contact-name" className="block text-sm text-ink-muted mb-1.5">
          Name
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          required
          autoComplete="name"
          className="w-full px-3 py-2.5 bg-surface border border-edge rounded-md text-ink text-sm
            focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent
            placeholder:text-ink-muted/60 transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm text-ink-muted mb-1.5">
          Email
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          required
          autoComplete="email"
          className="w-full px-3 py-2.5 bg-surface border border-edge rounded-md text-ink text-sm
            focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent
            placeholder:text-ink-muted/60 transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm text-ink-muted mb-1.5">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="w-full px-3 py-2.5 bg-surface border border-edge rounded-md text-ink text-sm resize-y
            focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent
            placeholder:text-ink-muted/60 transition-colors"
          placeholder="What's on your mind?"
        />
      </div>

      {/* honeypot for bots */}
      <input type="text" name="_gotcha" autoComplete="off" tabIndex={-1} style={{ display: "none" }} />

      <button
        type="submit"
        // disabled={status === "sending"}
        className="self-start px-6 py-2.5 bg-accent text-page text-sm font-medium rounded-md
          hover:bg-accent-hover transition-colors cursor-pointer
          disabled:opacity-50 disabled:cursor-not-allowed"
      >Send Message
        {/* {status === "sending" ? "Sending..." : "Send Message"} */}
      </button>

      {/* {status === "sent" && (
        <output className="text-sm text-accent block">
          Message sent. Thank you!
        </output>
      )}
      {status === "error" && (
        <p className="text-sm text-red-500" role="alert">
          Something went wrong. Please try again or email directly.
        </p>
      )} */}
    </form>
  );
}
