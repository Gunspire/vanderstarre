import React from "react";
import { Metadata } from "next";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import Link from "next/link";

import { Footer } from "../../sections/Footer";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Van der Starre Timmer- en Onderhoudswerkzaamheden",
  description: "Neem contact met ons op voor een gratis offerte, vragen of meer informatie over onze timmerwerkzaamheden.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#EBE9E4] font-sans flex flex-col">
      <main className="flex-1 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Editorial Box */}
          <div className="border border-stone-300 bg-white shadow-sm flex flex-col mb-12">
            
            {/* Top Hero Section - 50/50 Split */}
            <div className="flex flex-col lg:flex-row items-stretch border-b border-stone-300">
              
              {/* Text Side */}
              <div className="w-full lg:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-stone-300">
                <h1 className="text-5xl md:text-6xl font-light text-[#2b2b2b] tracking-tight mb-8">
                  Neem <span className="font-bold">contact</span><br/> met ons op.
                </h1>
                <p className="text-stone-500 text-lg mb-12 max-w-md leading-relaxed">
                  Of u nu een specifieke klus in gedachten heeft of simpelweg advies nodig heeft over de mogelijkheden. Wij horen graag van u.
                </p>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#C8181B] mb-2">Telefoon</h4>
                    <a href="tel:+31623755436" className="text-2xl text-[#2b2b2b] hover:text-[#C8181B] transition-colors block">+31 6 23755436</a>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#C8181B] mb-2">WhatsApp</h4>
                    <a href="https://wa.me/31623755436" target="_blank" rel="noreferrer" className="text-2xl text-[#2b2b2b] hover:text-[#C8181B] transition-colors block">Stuur een bericht</a>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#C8181B] mb-2">E-mail</h4>
                    <a href="mailto:info@vanderstarre.nl" className="text-2xl text-[#2b2b2b] hover:text-[#C8181B] transition-colors block">info@vanderstarre.nl</a>
                  </div>
                </div>
                
                <div className="mt-16 pt-8 border-t border-stone-200">
                  <Link href="/offertes" className="inline-flex items-center gap-4 text-[#141414] hover:text-[#C8181B] font-bold text-lg uppercase tracking-wider transition-colors group">
                    Naar offertetools <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full bg-stone-100">
                <img 
                  src="https://images.unsplash.com/photo-1622372738946-62e02505feb3?q=80&w=2000&auto=format&fit=crop" 
                  alt="Modern interieur" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

            </div>

            {/* Bottom Info Section - 50/50 Split */}
            <div className="flex flex-col lg:flex-row items-stretch">
              
              {/* Practical Info Side */}
              <div className="w-full lg:w-1/2 p-10 md:p-16 lg:p-20 border-b lg:border-b-0 lg:border-r border-stone-300 bg-[#faf9f7]">
                <h3 className="text-3xl font-light text-[#2b2b2b] tracking-tight mb-10">
                  Praktische <span className="font-bold">Informatie</span>
                </h3>
                
                <div className="space-y-12">
                  <div className="flex gap-5">
                    <MapPin className="w-6 h-6 text-[#C8181B] shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-[#141414] mb-3">Werkgebied</h4>
                      <p className="text-stone-500 text-lg leading-relaxed">
                        Wij zijn voornamelijk werkzaam in de regio rondom <strong className="text-[#141414] font-medium">Zoetermeer</strong> en omstreken (circa 30km).
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-5">
                    <Clock className="w-6 h-6 text-[#C8181B] shrink-0 mt-1" />
                    <div className="w-full">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-[#141414] mb-4">Openingstijden</h4>
                      <ul className="text-stone-500 text-lg space-y-3">
                        <li className="flex justify-between items-center border-b border-stone-200 pb-3">
                          <span>Maandag – Vrijdag</span> 
                          <span className="font-medium text-[#141414]">08:00 - 18:00</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-stone-200 pb-3">
                          <span>Zaterdag</span> 
                          <span className="font-medium text-[#141414]">09:00 - 15:00</span>
                        </li>
                        <li className="flex justify-between items-center text-stone-400">
                          <span>Zondag</span> 
                          <span className="font-medium">Gesloten</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Side */}
              <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full p-4 lg:p-8 bg-white">
                <div className="w-full h-full relative border border-stone-200 bg-stone-100 overflow-hidden">
                  <iframe
                    title="Werkgebied kaart (Zoetermeer)"
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=Zoetermeer,+Nederland&z=10&output=embed"
                  />
                  <div
                    className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#C8181B]/80 bg-[#C8181B]/10 shadow-[0_0_0_8px_rgba(200,24,27,0.10)]"
                    style={{ width: "72%", height: "72%" }}
                    aria-hidden="true"
                  />
                  <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)]" />
                </div>
              </div>

            </div>

          </div>

          {/* Form wrapper to keep it in the editorial style */}
          <div className="border border-stone-300 bg-white shadow-sm overflow-hidden relative">
             <ContactForm />
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}