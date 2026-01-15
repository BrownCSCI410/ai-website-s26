// src/app/page.tsx
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      {/* Background */}
      <div className="cr-bg" aria-hidden="true" />

      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 py-10 min-h-screen flex items-center">
        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left image */}
          <div className="flex justify-center md:justify-start">
            <div className="cr-frame">
              <Image
                src="/mascot.png"
                alt="Course graphic"
                width={520}
                height={520}
                priority
                className="cr-portrait"
              />
            </div>
          </div>

          {/* Right text box */}
          <section className="cr-card">
            <div className="cr-card-header">
              <h1 className="cr-title">CS COURSE ARENA</h1>
              <p className="cr-subtitle">
                Welcome to the battlefield. Announcements, assignments, and
                resources live here.
              </p>
            </div>

            <div className="cr-divider" />

            <div className="space-y-4">
              <div className="cr-pill">
                <span className="cr-pill-dot" />
                <p>
                  <span className="font-extrabold">Office Hours:</span> Mon–Thu,
                  7–9pm
                </p>
              </div>

              <div className="cr-pill">
                <span className="cr-pill-dot" />
                <p>
                  <span className="font-extrabold">Next Due:</span> Lab 1 —
                  Friday @ 11:59pm
                </p>
              </div>

              <div className="cr-pill">
                <span className="cr-pill-dot" />
                <p>
                  <span className="font-extrabold">Code:</span> GitHub repo +
                  autograder link in Resources
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a className="cr-button" href="/syllabus">
                  View Syllabus
                </a>
                <a className="cr-button cr-button-secondary" href="/schedule">
                  View Schedule
                </a>
              </div>

              <p className="text-sm text-white/80 pt-2">
                Tip: add your theme art in <span className="font-semibold">/public</span>{" "}
                and update the image paths in this file.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
