import { useState } from "react";

const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Khmer:wght@400;600;700;900&family=Hanuman:wght@400;700;900&display=swap');
    * { font-family: 'Noto Sans Khmer', 'Hanuman', sans-serif; }
    html { scroll-behavior: smooth; }
  `}</style>
);

const NAV_LINKS = [
  { label: "HOME / គេហទំព័រ", href: "#hero" },
  { label: "ABOUT / អំពីយើង", href: "#about" },
  { label: "FEATURES / លក្ខណៈពិសេស", href: "#features" },
  { label: "CONTACT / ទំនាក់ទំនង", href: "#contact" },
];

export default function TreyVisai() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <FontLoader />
      <div className="min-h-screen bg-white text-gray-900">

        {/* ── NAVBAR ── */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white flex items-center justify-between px-6 py-3 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 font-black text-lg tracking-wide">Trey Visai</span>
            <span className="text-gray-400 text-sm">| ត្រីវិស័យ</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-xs font-semibold tracking-wide">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-yellow-400 transition-colors">{l.label}</a>
            ))}
          </div>
          <a href="#contact" className="hidden md:block bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold text-xs px-4 py-2 rounded transition-colors">
            Join Now / ចូលរួម
          </a>
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="fixed top-12 left-0 right-0 z-40 bg-gray-900 text-white flex flex-col gap-4 px-6 py-4 text-sm font-semibold shadow-lg">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="bg-yellow-500 text-gray-900 font-bold px-4 py-2 rounded text-center">
              Join Now / ចូលរួម
            </a>
          </div>
        )}

        {/* ── HERO ── */}
        <section id="hero" className="relative min-h-screen bg-gray-900 flex items-center overflow-hidden pt-12">
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #b8860b 0%, transparent 60%)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block">
            <div className="w-full h-full bg-gradient-to-l from-yellow-800 via-yellow-600 to-transparent opacity-30 rounded-bl-[120px]" />
            <div className="absolute bottom-1/3 left-1/4 bg-yellow-500 text-gray-900 rounded-full px-4 py-2 text-xs font-bold shadow-xl flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Verified Local
            </div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 py-24">
            <h1 className="text-4xl md:text-6xl font-black leading-tight text-white mb-2">
              អរម្ភេញ។ ភ្ជាប់។<br />រីកចម្រើន។
            </h1>
            <h2 className="text-3xl md:text-5xl font-black text-yellow-400 mb-6 leading-tight">
              Discover.<br />Connect. Grow.
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-2 max-w-xl">
              ត្រីវិស័យភ្ជាប់អ្នកលក់ជាវ័យកម្ពុជាដែលបានផ្ទៀងផ្ទាត់ជាមួយអ្នកទិញទូទាំងប្រទេស — ដើម្បីឱ្យការស្វែងរក ការទុកចិត្ត និងការគាំទ្រអាជីវកម្មក្នុងស្រុកកាន់តែងាយស្រួល។
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Trey Visai connects verified Cambodian merchants with customers across the country — making it easier to find, trust, and support local.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded text-sm transition-all shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-0.5">
                Join as a Merchant / ចូលជាអ្នកលក់
              </a>
              <a href="#about" className="border border-gray-500 text-gray-300 hover:border-yellow-400 hover:text-yellow-400 font-semibold px-6 py-3 rounded text-sm transition-all">
                Learn More / ស្វែងយល់បន្ថែម
              </a>
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs font-bold text-yellow-600 uppercase tracking-widest mb-8">អំពីយើង / Who We Are</p>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-xl font-black text-gray-900 mb-1">ត្រីវិស័យ គឺជាវេទិកាសមាជិកភាព និងការស្វែងរកអាជីវកម្មដែលបានផ្ទៀងផ្ទាត់</h3>
                <h3 className="text-xl font-black text-gray-700 mb-1">សម្រាប់សេដ្ឋកិច្ចអាជីវកម្មខ្នាតតូចដ៏រស់រវើកនៅកម្ពុជា</h3>
                <h4 className="text-lg font-bold text-yellow-700 mb-4">Building Cambodia's Vibrant Business Economy</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  យើងភ្ជាប់អ្នកលក់ក្នុងស្រុកជាមួយអ្នកទិញដែលកំពុងស្វែងរកពួកគេ។
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Trey Visai is a verified business discovery and membership platform built for Cambodia's vibrant small business economy. We bridge the gap between local merchants and the customers who are looking for them.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-base font-black text-gray-900 mb-1">បេសកកម្មរបស់យើង</h4>
                <h4 className="text-base font-bold text-yellow-600 mb-4">Our Mission</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  ផ្តល់ឱ្យអាជីវកម្មខ្នាតតូចនូវភាពមើលឃើញ ភាពជឿទុកចិត្ត និងសហគមន៍ — ដើម្បីឱ្យអ្នកលក់រាល់រូប មានទីកន្លែងដើម្បីត្រូវបានរកឃើញ និងទុកចិត្ត។
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  To empower Cambodian small businesses with visibility, credibility, and community — so every merchant has a place to be found and trusted.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-black text-gray-900">លក្ខណៈ​ពិសេស និងអត្ថប្រយោជន៍</h2>
              <h3 className="text-xl font-bold text-yellow-600">Features & Benefits</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Merchants */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-black text-gray-900 text-sm">សម្រាប់អ្នកលក់</p>
                    <p className="font-bold text-yellow-600 text-xs">For Merchants</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    ["ចុះឈ្មោះ និងទទួលបានការផ្ទៀងផ្ទាត់នៅលើវេទិកាដែលគួរជឿទុកចិត្ត", "Get listed and verified on a trusted platform"],
                    ["ទាក់ទងអ្នកទិញទូទាំងកម្ពុជា", "Reach buyers across Cambodia"],
                    ["បង្ហាញផលិតផល ទីតាំង និងព័ត៌មានទំនាក់ទំនង", "Showcase your products, location, and contact details"],
                    ["កសាងកេរ្តិ៍ឈ្មោះជាមួយប្រវត្តិរូបសមាជិកភាព", "Build your reputation with a recognised membership profile"],
                  ].map(([kh, en], i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="mt-1 w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-gray-800 leading-snug">{kh}</p>
                        <p className="text-xs text-gray-500 leading-snug">{en}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buyers */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-black text-gray-900 text-sm">សម្រាប់អ្នកទិញ</p>
                    <p className="font-bold text-red-500 text-xs">For Buyers</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    ["ស្វែងរកអាជីវកម្មក្នុងស្រុកបានយ៉ាងលឿន និងងាយស្រួល", "Discover local businesses quickly and easily"],
                    ["រកមើលអ្នកលក់ដែលបានផ្ទៀងផ្ទាត់", "Browse verified merchants you can trust"],
                    ["ស្វែងរកតាមប្រភេទ ទីតាំង ឬឈ្មោះ", "Find businesses by category, location, or name"],
                    ["គាំទ្រសេដ្ឋកិច្ចក្នុងស្រុករបស់កម្ពុជា", "Support Cambodia's local economy"],
                  ].map(([kh, en], i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="mt-1 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-gray-800 leading-snug">{kh}</p>
                        <p className="text-xs text-gray-500 leading-snug">{en}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT + FOOTER COMBINED ── */}
        <footer id="contact" className="bg-gray-900 text-white">

          {/* Contact info block */}
          <div className="max-w-5xl mx-auto px-6 py-16 text-center">
            <h2 className="text-2xl font-black text-white mb-1">ទំនាក់ទំនងមកយើង</h2>
            <h3 className="text-xl font-bold text-yellow-400 mb-5">Get in Touch</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-1 max-w-xl mx-auto">
              មានសំណួរ ឬចង់ចូលរួមជាអ្នកលក់នៅត្រីវិស័យ? យើងរីករាយទទួលស្ដាប់អ្នក។
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-xl mx-auto">
              Have questions or want to join Trey Visai as a merchant? We'd love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
              <a href="mailto:lamveng012@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                <span className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center text-base flex-shrink-0">📧</span>
                lamveng012@gmail.com
              </a>
              <a href="tel:081966266" className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                <span className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center text-base flex-shrink-0">📱</span>
                081966266
              </a>
              <a href="https://treyvisaikh.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                <span className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center text-base flex-shrink-0">🌐</span>
                Treyvisaikh.com
              </a>
            </div>
          </div>

          {/* Footer bar */}
          <div className="border-t border-gray-800 bg-gray-950 text-gray-500 py-5 px-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 font-bold">Trey Visai</span>
                <span>| ត្រីវិស័យ</span>
              </div>
              <p>© 2024 Trey Visai. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-yellow-400 transition-colors">Support / គាំទ្រ</a>
              </div>
            </div>
          </div>

        </footer>

      </div>
    </>
  );
}
