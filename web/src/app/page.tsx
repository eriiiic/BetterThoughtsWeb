import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-300/40">
      {/* Scroll Progress */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 z-[60] transition-all duration-300 ease-out shadow-lg shadow-emerald-500/30" style={{width: '0%'}} />
      
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-black/90 border-b-2 border-white/10 transition-all duration-300">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 font-bold text-xl group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-yellow-500 to-emerald-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-spin" style={{animationDuration: '10s'}} />
              <Image src="/logo.svg" alt="BetterThoughts" width={28} height={28} className="filter brightness-0 invert relative z-10 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <span className="bg-gradient-to-r from-white via-emerald-200 to-blue-300 bg-clip-text text-transparent">BetterThoughts</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-gray-300">
            <a href="#features" className="relative px-3 py-2 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:text-emerald-400 hover:-translate-y-1 hover:bg-white/5 group">
              <span className="relative z-10">Features</span>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full shadow-lg shadow-emerald-500/50" />
            </a>
            <a href="#screenshots" className="relative px-3 py-2 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:text-emerald-400 hover:-translate-y-1 hover:bg-white/5 group">
              <span className="relative z-10">Screenshots</span>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full shadow-lg shadow-emerald-500/50" />
            </a>
            <a href="#testimonials" className="relative px-3 py-2 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:text-emerald-400 hover:-translate-y-1 hover:bg-white/5 group">
              <span className="relative z-10">Reviews</span>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full shadow-lg shadow-emerald-500/50" />
            </a>
            <a href="#contact" className="relative px-3 py-2 rounded-lg font-semibold text-sm uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-all duration-300 hover:-translate-y-1 hover:bg-white/5 group">
              <span className="relative z-10">Contact</span>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full shadow-lg shadow-emerald-500/50" />
            </a>
          </div>
          <button className="md:hidden flex flex-col gap-1 p-2">
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-48 -left-48 w-[800px] h-[800px] rounded-full bg-gradient-radial from-emerald-400/40 via-emerald-400/20 to-transparent blur-3xl animate-pulse mix-blend-screen" />
          <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] rounded-full bg-gradient-radial from-blue-500/30 via-blue-500/15 to-transparent blur-3xl animate-[pulse_15s_ease-in-out_infinite_4s] mix-blend-screen" />
          <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] rounded-full bg-gradient-radial from-purple-600/30 via-purple-600/15 to-transparent blur-3xl animate-[pulse_25s_ease-in-out_infinite_8s] mix-blend-screen" />
          <div className="absolute top-1/5 left-1/10 w-[500px] h-[500px] rounded-full bg-gradient-radial from-pink-500/20 via-pink-500/10 to-transparent blur-3xl animate-[pulse_20s_ease-in-out_infinite_12s] mix-blend-screen" />
          
          {/* Animated particles */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-blue-500/10 to-purple-600/10 opacity-30 animate-pulse" 
               style={{
                 backgroundImage: `radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.3) 2px, transparent 2px),
                                  radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                                  radial-gradient(circle at 40% 40%, rgba(147, 51, 234, 0.2) 1px, transparent 1px),
                                  radial-gradient(circle at 60% 70%, rgba(236, 72, 153, 0.2) 1px, transparent 1px)`,
                 backgroundSize: '150px 150px, 200px 200px, 250px 250px, 180px 180px',
                 animation: 'float 35s linear infinite'
               }} />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Hero Content */}
            <div className="text-center lg:text-left relative z-10">
              <div className="inline-flex items-center bg-white/10 border-2 border-emerald-400/30 rounded-full px-6 py-3 mb-8 backdrop-blur-lg shadow-lg shadow-emerald-500/20 animate-pulse">
                <span className="text-sm font-bold text-emerald-400 uppercase tracking-wider">✨ Available Now</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] mb-8 relative">
                <span className="block bg-gradient-to-r from-white via-emerald-200 to-blue-300 bg-clip-text text-transparent animate-pulse drop-shadow-2xl">
                  Reframe Your
                </span>
                <span className="block bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse drop-shadow-2xl" 
                      style={{textShadow: '0 0 50px rgba(16, 185, 129, 0.5)'}}>
                  Thoughts
                </span>
                <span className="block bg-gradient-to-r from-white via-emerald-200 to-blue-300 bg-clip-text text-transparent animate-pulse drop-shadow-2xl">
                  Transform Your
                </span>
                <span className="block bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse drop-shadow-2xl"
                      style={{textShadow: '0 0 50px rgba(16, 185, 129, 0.5)'}}>
                  Mindset
                </span>
            </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                Swipe through curated thought reframing quotes. Boost your mindset, bookmark your favorites, and find clarity: anytime, offline, with no login required. 
                <strong className="text-white"> Free download available now.</strong>
              </p>
              
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                {['#CBT', '#Mindset', '#Productivity', '#SelfWorth', '#Calm'].map((tag) => (
                  <span key={tag} className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm font-semibold text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
                <a href="https://apps.apple.com/us/app/betterthoughtscbt/id6749776512" target="_blank" rel="noopener" className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 text-black font-black py-6 px-10 rounded-2xl shadow-2xl shadow-emerald-500/30 transition-all duration-500 hover:scale-110 hover:shadow-emerald-500/50 overflow-hidden uppercase tracking-wider text-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-yellow-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse" />
                  <span className="text-3xl relative z-10 group-hover:scale-110 transition-transform duration-300">📱</span>
                  <div className="text-left relative z-10">
                    <div className="text-xl font-black">Download Now</div>
                    <div className="text-sm opacity-90 font-semibold">Free on App Store</div>
                  </div>
                </a>
                <a href="#screenshots" className="group relative inline-flex items-center gap-4 bg-white/10 hover:bg-white/20 text-white font-bold py-6 px-10 rounded-2xl border-2 border-emerald-400/30 hover:border-emerald-400 backdrop-blur-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/30 overflow-hidden uppercase tracking-wider text-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="text-3xl relative z-10 group-hover:scale-110 transition-transform duration-300">👀</span>
                  <span className="relative z-10">See Screenshots</span>
                </a>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
                <div className="text-center">
                  <div className="text-3xl font-black text-teal-400">500+</div>
                  <div className="text-sm text-gray-400">Curated Quotes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-teal-400">10+</div>
                  <div className="text-sm text-gray-400">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-teal-400">100%</div>
                  <div className="text-sm text-gray-400">Offline</div>
                </div>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-96">
                <div className="absolute inset-0 border-8 border-gray-800 rounded-[40px] shadow-2xl bg-gray-800"></div>
                <Image 
                  src="/logo.svg" 
                  alt="BetterThoughts app screenshot" 
                  width={320} 
                  height={640}
                  className="absolute inset-0 w-full h-full object-cover rounded-[32px]"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-900/50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white via-teal-200 to-blue-300 bg-clip-text text-transparent">
              Why BetterThoughts?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Designed with modern psychology and beautiful UX in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "💭",
                title: "Thought Reframing",
                description: "Card-based interface with carefully curated quotes to gently shift your perspective and challenge limiting beliefs.",
                highlight: "Swipe through insights"
              },
              {
                icon: "🎯",
                title: "Smart Categories",
                description: "Choose categories that matter to you. First launch guides you to set up your personalized experience.",
                highlight: "Personalized content"
              },
              {
                icon: "⭐",
                title: "Smart Bookmarks",
                description: "Favorite quotes and quickly revisit them. Manage your collection from a dedicated, beautiful view.",
                highlight: "Save what resonates"
              },
              {
                icon: "🔒",
                title: "100% Offline",
                description: "All data is stored locally on your device using Core Data. No account required, no internet needed.",
                highlight: "Always available"
              },
              {
                icon: "📱",
                title: "Home Screen Widget",
                description: "See rotating quotes on your Home Screen. Supports small and medium sizes with beautiful animations.",
                highlight: "Daily inspiration"
              },
              {
                icon: "🛡️",
                title: "Respectful Analytics",
                description: "Anonymous usage metrics help improve the app. No personal data is collected or shared.",
                highlight: "Your privacy first"
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <span className="inline-block bg-gradient-to-r from-teal-400 to-blue-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {feature.highlight}
                </span>
              </div>
            ))}
          </div>
          </div>
        </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white via-teal-200 to-blue-300 bg-clip-text text-transparent">
              See it in action
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Beautiful, intuitive design that feels natural
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Focus on what matters",
                description: "Filter quotes by category to find exactly what you need"
              },
              {
                title: "Save your favorites",
                description: "Bookmark quotes and access them anytime, anywhere"
              },
              {
                title: "Swipe to discover",
                description: "Simple card-based design makes exploration effortless"
              },
              {
                title: "Reframe your thoughts",
                description: "Discover powerful CBT-inspired quotes that shift perspective"
              }
            ].map((screenshot, index) => (
              <div key={index} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <div className="w-full h-64 bg-gradient-to-br from-teal-400/20 to-blue-500/20 flex items-center justify-center">
                    <span className="text-4xl">📱</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{screenshot.title}</h3>
                  <p className="text-gray-300 text-sm">{screenshot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>

      {/* Download Section */}
      <section id="download" className="py-24 bg-gray-900/50 text-center">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white via-teal-200 to-blue-300 bg-clip-text text-transparent">
            Transform your mindset today
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join users who are already reframing their thoughts with BetterThoughts. Download now and start your journey.
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <a href="https://apps.apple.com/us/app/betterthoughtscbt/id6749776512" target="_blank" rel="noopener" className="inline-flex items-center gap-4 bg-white/10 border border-white/20 rounded-2xl px-8 py-6 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 hover:-translate-y-1">
              <span className="text-3xl">🍎</span>
              <div className="text-left">
                <div className="text-sm text-gray-400">Download on the</div>
                <div className="text-xl font-bold text-white">App Store</div>
              </div>
            </a>
            
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-lg">⚡</span>
                <span className="text-sm">Free to download</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-lg">🔒</span>
                <span className="text-sm">No login required</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-lg">📱</span>
                <span className="text-sm">iOS 17+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white via-teal-200 to-blue-300 bg-clip-text text-transparent">
              Loved by mindful doers
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real feedback from our beta users
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Beautifully designed and genuinely helpful. The quotes feel curated—like a friend nudging you in the right direction.",
                author: "Beta User",
                title: "Early Adopter",
                rating: "⭐⭐⭐⭐⭐"
              },
              {
                quote: "I open it when I'm stuck. One or two cards usually shift my mindset just enough to keep going.",
                author: "Early Adopter",
                title: "Productivity Enthusiast",
                rating: "⭐⭐⭐⭐⭐"
              },
              {
                quote: "Offline, fast, and private. Exactly what I wanted in a mental health app.",
                author: "iOS Enthusiast",
                title: "Privacy Advocate",
                rating: "⭐⭐⭐⭐⭐"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl backdrop-blur-sm">
                <p className="text-lg text-gray-300 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-xl">
                    👤
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.title}</div>
                  </div>
                  <div className="text-sm">{testimonial.rating}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gray-900/50">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white via-teal-200 to-blue-300 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about BetterThoughts
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: "Does it work offline?",
                answer: "Yes! All content is stored locally on your device. No internet connection required to use the app."
              },
              {
                question: "Is my data private?",
                answer: "Absolutely. We don't collect personal information. All your data stays on your device. See our Privacy Policy for details."
              },
              {
                question: "When is the launch?",
                answer: "We're putting the final polish on the app. Join our beta program to get early access and help shape the future of BetterThoughts."
              },
              {
                question: "What devices are supported?",
                answer: "BetterThoughts requires iOS 17 or later and is optimized for iPhone. iPad support is coming soon!"
              },
              {
                question: "How much does it cost?",
                answer: "The app is free to download with all core features included. Premium features may be added in the future."
              },
              {
                question: "Can I export my bookmarks?",
                answer: "Currently, bookmarks are stored locally. We're working on export features for future updates."
              }
            ].map((faq, index) => (
              <details key={index} className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-white hover:bg-white/5 transition-colors">
                  <span>{faq.question}</span>
                  <span className="text-teal-400 text-xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 text-center">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white via-teal-200 to-blue-300 bg-clip-text text-transparent">
            Get in touch
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            We'd love to hear from you. Questions, feedback, or just want to say hello?
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <a href="mailto:contact@betterthoughts.app" className="inline-flex items-center gap-4 bg-white/10 border border-white/20 rounded-2xl px-8 py-6 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 hover:-translate-y-1">
              <span className="text-2xl">✉️</span>
              <span className="text-xl font-semibold text-white">contact@betterthoughts.app</span>
            </a>
            
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-lg">💬</span>
                <span className="text-sm">We respond within 24 hours</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-lg">🔒</span>
                <span className="text-sm">Your privacy is protected</span>
              </div>
            </div>
          </div>
        </div>
        </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-gray-900/50 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 font-bold text-white">
            <Image src="/logo.svg" alt="BetterThoughts" width={24} height={24} className="filter brightness-0 invert" />
            <span>BetterThoughts</span>
          </div>
          
          <nav className="flex gap-8 text-gray-400">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} BetterThoughts. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-xl border-t border-white/10 transform translate-y-full transition-transform duration-300">
        <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-bold text-white">Ready to reframe your thoughts?</div>
            <div className="text-sm text-gray-400">Download BetterThoughts today</div>
          </div>
                     <div className="flex gap-4">
             <a href="https://apps.apple.com/us/app/betterthoughtscbt/id6749776512" target="_blank" rel="noopener" className="bg-gradient-to-r from-teal-400 to-blue-500 text-black font-semibold px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
               Download Now
             </a>
            <a href="#screenshots" className="bg-white/10 border border-white/20 text-white font-semibold px-6 py-2 rounded-lg backdrop-blur-sm hover:bg-white/15 transition-all duration-200 hover:-translate-y-0.5">
              See Screenshots
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
