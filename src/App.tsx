/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, FileText, Info, Mail, Phone, MapPin, Instagram, Facebook, Youtube, Video } from 'lucide-react';

type Section = 'home' | 'terms' | 'privacy' | 'deletion' | 'impressum';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Video },
    { id: 'terms', label: 'Terms of Use', icon: FileText },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'deletion', label: 'Data Deletion', icon: Shield },
    { id: 'impressum', label: 'Impressum', icon: Info },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div 
              className="flex items-center gap-2 cursor-pointer" 
              onClick={() => setActiveSection('home')}
            >
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-200">
                <Video size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight text-blue-900">Blue Visuals</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id as Section)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-slate-500'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Nav Button (Simplified) */}
            <div className="md:hidden flex gap-4">
               {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id as Section)}
                  className={`p-2 rounded-full ${
                    activeSection === item.id ? 'bg-blue-50 text-blue-600' : 'text-slate-400'
                  }`}
                >
                  <item.icon size={20} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <section className="text-center space-y-6 py-12">
                <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight sm:text-6xl">
                  Elevate Your <span className="text-blue-600">Digital Presence</span>
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  Blue Visuals specializes in high-impact digital content creation for YouTube, TikTok, Facebook, and Instagram. We turn visions into viral realities.
                </p>
                <div className="flex justify-center gap-6 pt-4">
                  <Youtube className="text-slate-400 hover:text-red-600 transition-colors cursor-pointer" size={32} />
                  <Instagram className="text-slate-400 hover:text-pink-600 transition-colors cursor-pointer" size={32} />
                  <Facebook className="text-slate-400 hover:text-blue-600 transition-colors cursor-pointer" size={32} />
                  <Video className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer" size={32} />
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: 'Video Editing', desc: 'Professional post-production for all social platforms.' },
                  { title: 'Content Strategy', desc: 'Data-driven planning to maximize engagement and reach.' },
                  { title: 'Visual Identity', desc: 'Consistent branding that makes your content stand out.' }
                ].map((service, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === 'terms' && (
            <motion.div
              key="terms"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="prose prose-slate max-w-none bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-100"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Nutzungsbedingungen (Terms of Use)</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <section>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">1. Geltungsbereich</h3>
                  <p>Diese Nutzungsbedingungen gelten für alle Dienstleistungen von Blue Visuals im Bereich der digitalen Content-Erstellung.</p>
                </section>
                <section>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">2. Leistungen</h3>
                  <p>Blue Visuals erstellt Video- und Bildinhalte für soziale Netzwerke wie YouTube, TikTok, Facebook und Instagram. Der genaue Leistungsumfang ergibt sich aus dem jeweiligen Einzelauftrag.</p>
                </section>
                <section>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">3. Urheberrecht</h3>
                  <p>Soweit nicht anders vereinbart, verbleiben die Urheberrechte an den erstellten Inhalten bei Blue Visuals. Dem Kunden werden die für den jeweiligen Zweck erforderlichen Nutzungsrechte eingeräumt.</p>
                </section>
                <section>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">4. Haftung</h3>
                  <p>Blue Visuals haftet nur für Schäden, die auf einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung beruhen.</p>
                </section>
              </div>
            </motion.div>
          )}

          {activeSection === 'privacy' && (
            <motion.div
              key="privacy"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="prose prose-slate max-w-none bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-100"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Datenschutzerklärung (Privacy Policy)</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <section>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">1. Datenschutz auf einen Blick</h3>
                  <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
                </section>
                <section>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">2. Datenerfassung auf unserer Website</h3>
                  <p>Die Datennutzung auf dieser Website beschränkt sich auf das technisch Notwendige. Wir verwenden keine Tracking-Cookies oder Analysetools von Drittanbietern.</p>
                </section>
                <section>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">3. Ihre Rechte</h3>
                  <p>Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten.</p>
                </section>
              </div>
            </motion.div>
          )}

          {activeSection === 'deletion' && (
            <motion.div
              key="deletion"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="prose prose-slate max-w-none bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-100"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8">User Data Deletion Instructions</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <section>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">How to Request Data Deletion</h3>
                  <p>At Blue Visuals, we respect your privacy and provide you with the ability to request the deletion of your personal data that we may have collected through our services or social media integrations.</p>
                </section>
                <section>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Steps to Delete Your Data</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Send an email to <span className="font-semibold text-blue-600">herr.rafai@gmail.com</span> with the subject line "Data Deletion Request".</li>
                    <li>In the body of the email, please provide your name and the platform (e.g., Facebook, Instagram) you used to interact with our services.</li>
                    <li>Once we receive your request, we will verify your identity and process the deletion within 30 days.</li>
                  </ol>
                </section>
                <section>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Automated Deletion</h3>
                  <p>If you have connected our app via Facebook or Instagram, you can also remove our app's access directly through your social media account settings under "Apps and Websites". This will automatically trigger a data deletion callback to our systems.</p>
                </section>
              </div>
            </motion.div>
          )}

          {activeSection === 'impressum' && (
            <motion.div
              key="impressum"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-100"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Impressum</h2>
              <div className="space-y-8">
                <div>
                  <p className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-2">Angaben gemäß § 5 TMG</p>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-slate-900">Amin Rafai | Blue Visuals</p>
                      <p className="text-slate-600">Annenstraße 29</p>
                      <p className="text-slate-600">31134 Hildesheim, Deutschland</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-4">Kontakt</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                        <Phone size={20} />
                      </div>
                      <p className="text-slate-600">+49 176 4334 7838</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                        <Mail size={20} />
                      </div>
                      <p className="text-slate-600">herr.rafai@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <p className="text-sm font-semibold text-slate-400 mb-1">Steuernummer</p>
                      <p className="text-slate-900 font-medium">43196274049</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-400 mb-1">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</p>
                      <p className="text-slate-900 font-medium">Amin Rafai (Anschrift s.o.)</p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 pt-8">Quelle Impressum: e-recht24.de</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 border-t border-slate-200 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white">
              <Video size={18} />
            </div>
            <span className="font-bold text-slate-900">Blue Visuals</span>
          </div>
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Blue Visuals. All rights reserved.</p>
          <div className="flex gap-6">
            <button onClick={() => setActiveSection('terms')} className="text-xs text-slate-400 hover:text-blue-600 transition-colors">Terms</button>
            <button onClick={() => setActiveSection('privacy')} className="text-xs text-slate-400 hover:text-blue-600 transition-colors">Privacy</button>
            <button onClick={() => setActiveSection('deletion')} className="text-xs text-slate-400 hover:text-blue-600 transition-colors">Deletion</button>
            <button onClick={() => setActiveSection('impressum')} className="text-xs text-slate-400 hover:text-blue-600 transition-colors">Impressum</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
