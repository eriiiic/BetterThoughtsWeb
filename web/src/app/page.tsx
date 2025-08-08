import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-50 selection:bg-teal-300/40">
      <header className="sticky top-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <Image src="/logo.svg" alt="BetterThoughts" width={28} height={28} />
            <span>BetterThoughts</span>
          </a>
          <div className="flex items-center gap-5 text-slate-300">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#privacy" className="hover:text-white">Privacy</a>
            <a href="#terms" className="hover:text-white">Terms</a>
            <a href="#contact" className="text-teal-300 hover:text-teal-200 font-medium">Contact</a>
          </div>
        </nav>
      </header>

      <main id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 size-[40rem] rounded-full bg-teal-400/30 blur-3xl animate-pulse" />
          <div className="absolute -bottom-24 -right-24 size-[40rem] rounded-full bg-sky-400/25 blur-3xl animate-[pulse_12s_ease-in-out_infinite_3s]" />
        </div>
        <section className="mx-auto max-w-6xl px-4 pt-24 md:pt-32 pb-16 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="uppercase tracking-[0.2em] text-xs text-slate-300">Introducing</div>
            <h1 className="mt-3 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-sky-200 to-teal-300">
              Reframe your thoughts. Feel better.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-300">
              A modern iPhone app inspired by CBT that helps you reframe thoughts with curated quotes,
              category filters, bookmarks, and a beautiful widget. Works offline. No login required.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a href="#features" className="rounded-xl px-5 py-3 text-black font-semibold bg-gradient-to-tr from-teal-300 to-sky-300 shadow-lg shadow-black/30 hover:opacity-95">
                Explore features
              </a>
              <a href="#privacy" className="rounded-xl px-5 py-3 border border-white/20 text-slate-100 hover:bg-white/5">
                Privacy
              </a>
            </div>
            <p className="mt-3 text-sm text-slate-400">Coming soon to the App Store.</p>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold">Key features</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Thought Reframing",
                text: "Card-based interface with curated quotes to gently shift perspective.",
              },
              {
                title: "Category Filters",
                text: "Choose categories that matter to you. First launch guides you to set them up.",
              },
              { title: "Bookmarks", text: "Favorite quotes and revisit them quickly." },
              { title: "Offline Support", text: "All data is stored locally with Core Data." },
              { title: "Home Screen Widget", text: "Rotating quotes in small and medium sizes." },
              { title: "Respectful Analytics", text: "Anonymous metrics only; no personal data." },
            ].map(({ title, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-1 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="privacy" className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold">Privacy Policy</h2>
          <p className="mt-2 text-slate-300">Effective date: <strong>2025-01-01</strong></p>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-300">
            <li><strong>Local storage only</strong>: Quotes, categories, bookmarks, and dismissed cards are saved on-device.</li>
            <li><strong>No login</strong>: The app works entirely without creating an account.</li>
            <li><strong>Analytics</strong>: Firebase Analytics collects anonymous, aggregated usage metrics only.</li>
            <li><strong>Data sharing</strong>: We do not sell or share personal data.</li>
            <li><strong>Contact</strong>: <a className="underline hover:text-teal-300" href="mailto:contact@betterthoughts.app">contact@betterthoughts.app</a></li>
          </ul>
          <p className="mt-4 text-slate-300">Uninstalling the app removes locally stored data from your device.</p>
        </section>

        <section id="terms" className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold">Terms &amp; Conditions</h2>
          <p className="mt-2 text-slate-300">Effective date: <strong>2025-01-01</strong></p>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-300">
            <li><strong>License</strong>: Personal, non-transferable, non-exclusive license to use the app.</li>
            <li><strong>Content</strong>: Provided “as is.” Features/content may change at any time.</li>
            <li><strong>Limitation of liability</strong>: No liability for indirect, incidental, or consequential damages.</li>
            <li><strong>Updates</strong>: Continued use after updates constitutes acceptance of updated terms.</li>
            <li><strong>Contact</strong>: <a className="underline hover:text-teal-300" href="mailto:contact@betterthoughts.app">contact@betterthoughts.app</a></li>
          </ul>
        </section>

        <section id="contact" className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
          <p className="mt-2 text-slate-300">
            We’d love to hear from you. Reach out at
            {" "}
            <a className="underline hover:text-teal-300" href="mailto:contact@betterthoughts.app">
              contact@betterthoughts.app
            </a>
            .
          </p>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/30 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between text-slate-300">
          <p>© {new Date().getFullYear()} BetterThoughts</p>
          <nav className="flex items-center gap-3">
            <a className="hover:text-white" href="#privacy">Privacy</a>
            <span aria-hidden>·</span>
            <a className="hover:text-white" href="#terms">Terms</a>
            <span aria-hidden>·</span>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
