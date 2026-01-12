"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "kirti25032007@gmail.com";

  const handleEmailClick = () => {
    setShowEmailPopup(true);
    setTimeout(() => {
      setShowEmailPopup(false);
    }, 3000);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setShowEmailPopup(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const contactLinks = [
    {
      name: "GitHub",
      url: "https://github.com/kirti253",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-github"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      url: "https://x.com/Kirti_253",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-twitter"
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kirti253/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-linkedin"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      name: "Email",
      url: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-mail"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      isEmail: true,
    },
  ];

  return (
    <section className="space-y-6 md:space-y-8 relative">
      <h2 className="text-sm md:text-base font-medium text-foreground/60 uppercase tracking-wider">
        CONTACT
      </h2>

      <div className="space-y-8 md:space-y-10 relative">
        {/* Headline */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-foreground">
            Turning ideas into
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans text-foreground/80">
            experiences.
          </h2>
        </div>

        {/* Email Popup */}
        {showEmailPopup && (
          <div className="absolute top-20 md:top-24 left-0 md:left-1/4 z-20 bg-foreground/10 border border-foreground/20 rounded-lg p-4 backdrop-blur-sm shadow-lg">
            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-md hover:bg-foreground/10 transition-colors"
                aria-label="Copy email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-copy"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2" />
                </svg>
              </button>
              <span className="text-sm text-foreground/60">COPY EMAIL</span>
              <span className="text-base font-medium text-foreground">
                {email}
              </span>
              {copied && (
                <span className="text-sm text-green-400 ml-2">✓ Copied!</span>
              )}
            </div>
          </div>
        )}

        {/* Contact Buttons */}
        <div className="flex flex-wrap gap-3 md:gap-4">
          {contactLinks.map((link, index) => {
            const isEmail = link.isEmail;
            return isEmail ? (
              <button
                key={index}
                onClick={handleEmailClick}
                className="flex items-center gap-2 px-4 py-3 rounded-lg bg-foreground/5 border border-green-500/30 hover:border-green-500/50 hover:bg-foreground/10 transition-colors text-foreground"
              >
                {link.icon}
                <span className="text-sm font-medium">{link.name}</span>
              </button>
            ) : (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 hover:border-foreground/20 hover:bg-foreground/10 transition-colors text-foreground"
              >
                {link.icon}
                <span className="text-sm font-medium">{link.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
