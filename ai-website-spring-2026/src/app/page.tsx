// src/app/page.tsx
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative min-h-screen text-white">
      {/* Background */}
      <div className="cr-bg" aria-hidden="true" />

      {/* Dark overlay for readability (not blur) */}
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 py-10 min-h-screen flex items-center">
        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* LEFT COLUMN: Mascot + title box to its right */}
          <div className="flex justify-center md:justify-start">
            <div className="cr-hero">
              {/* Mascot (no bubble) */}
              <Image
                src="/mascot.png"
                alt="Course mascot"
                width={360}
                height={360}
                priority
                className="cr-mascot"
              />

              {/* Title box to the right of mascot */}
              <div className="cr-title-card">
                <h1 className="cr-title">CS COURSE ARENA</h1>
                <p className="cr-subtitle">
                  Welcome to the battlefield. Announcements, assignments, and resources live here.
                </p>

                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <a className="cr-button" href="/syllabus">
                    Syllabus
                  </a>
                  <a className="cr-button cr-button-secondary" href="/schedule">
                    Schedule
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Big info box */}
          <section className="cr-card">
            <div className="cr-card-header">
              <h2 className="text-2xl font-extrabold tracking-wide">Quick Info</h2>
              <p className="cr-subtitle">
                Everything you need at a glance.
              </p>
            </div>

            <div className="cr-divider" />

            <div className="space-y-4">
              <div className="cr-pill">
                <span className="cr-pill-dot" />
                <p>
                  <span className="font-extrabold">Office Hours:</span> Mon–Thu, 7–9pm
                </p>
              </div>

              <div className="cr-pill">
                <span className="cr-pill-dot" />
                <p>
                  <span className="font-extrabold">Next Due:</span> Lab 1 — Friday @ 11:59pm
                </p>
              </div>

              <div className="cr-pill">
                <span className="cr-pill-dot" />
                <p>
                  <span className="font-extrabold">Code:</span> GitHub repo + autograder link in Resources
                </p>
              </div>

              <p className="text-sm text-white/80 pt-2">
                Tip: put theme art in <span className="font-semibold">/public</span> and update image paths here.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
