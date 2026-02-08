"use client";

import { useState, FormEvent, ChangeEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        // Reset submitted state after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="border-t-4 border-foreground bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="mb-16">
          <h2 className="text-foreground mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-foreground"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-lg text-foreground/75 leading-relaxed mb-12">
              Always interested in new opportunities and projects. Whether it's
              blockchain, cloud infrastructure, or an innovative idea—let's
              talk.
            </p>

            <div className="space-y-8">
              <div className="border-l-4 border-foreground pl-6">
                <p className="text-xs font-black uppercase tracking-widest text-foreground/60 mb-2">
                  Email
                </p>
                <a
                  href="mailto:hello@example.com"
                  className="text-lg font-bold text-foreground hover:opacity-70 transition-opacity"
                >
                  mutebialvinalvienzo@gmail.com
                </a>
              </div>

              <div className="border-l-4 border-foreground pl-6">
                <p className="text-xs font-black uppercase tracking-widest text-foreground/60 mb-4">
                  Social
                </p>
                <div className="space-y-2">
                  <a
                    href="https://github.com/alvienzo720/"
                    className="block font-bold text-foreground/80 hover:text-foreground transition-colors"
                  >
                    → GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/alvin-mutebi-a5356815b/"
                    className="block font-bold text-foreground/80 hover:text-foreground transition-colors"
                  >
                    → LinkedIn
                  </a>
                  <a
                    href="https://x.com/Code__bruh"
                    className="block font-bold text-foreground/80 hover:text-foreground transition-colors"
                  >
                    → Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="border-3 border-foreground p-12 bg-foreground/5 text-center">
                <p className="text-2xl font-black text-foreground mb-3">
                  Success!
                </p>
                <p className="text-foreground/70">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-black uppercase tracking-widest text-foreground mb-3"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-foreground bg-background text-foreground focus:outline-none focus:bg-foreground/5 transition-colors font-medium"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-black uppercase tracking-widest text-foreground mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-foreground bg-background text-foreground focus:outline-none focus:bg-foreground/5 transition-colors font-medium"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-black uppercase tracking-widest text-foreground mb-3"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 border-2 border-foreground bg-background text-foreground focus:outline-none focus:bg-foreground/5 transition-colors resize-none font-medium"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-8 py-4 bg-foreground text-background font-black uppercase tracking-widest text-sm hover:opacity-80 transition-opacity disabled:opacity-50 active:scale-95"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t-2 border-foreground mt-20 pt-8 text-center">
          <p className="text-xs font-black uppercase tracking-widest text-foreground/50">
            © 2026 Built with Code & Coffee
          </p>
        </div>
      </div>
    </section>
  );
}
