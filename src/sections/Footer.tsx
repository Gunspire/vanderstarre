import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

import { Logo } from "../components/Logo";
import werkspotLogo from "./images.png";

export function Footer() {
  return (
    <footer className="bg-[#141414] text-stone-400 py-16 lg:py-24 border-t border-[#2b2b2b]">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="md:col-span-4 lg:col-span-5 pr-8">
            <div className="mb-8">
              {/* Force logo to be white by inverting it */}
              <div className="text-white fill-white brightness-0 invert inline-block">
                <Logo className="h-[50px] sm:h-[60px]" />
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-sm text-stone-400">
              Kwalitatief timmerwerk en onderhoud voor particulieren in Zoetermeer en de regio Haaglanden.
            </p>
            <div className="text-xs font-bold uppercase tracking-widest text-stone-500">
              KvK: 76281019
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-white text-[10px] font-bold uppercase tracking-widest mb-6">Diensten</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link href="/offertes" className="hover:text-white transition-colors">Vlizotrap plaatsen</Link>
              </li>
              <li>
                <Link href="/offertes" className="hover:text-white transition-colors">Trap renoveren</Link>
              </li>
              <li>
                <Link href="/offertes" className="hover:text-white transition-colors">Deuren repareren</Link>
              </li>
              <li>
                <Link href="/offertes" className="hover:text-white transition-colors">Veranda / overkapping</Link>
              </li>
              <li>
                <Link href="/offertes" className="hover:text-white transition-colors">Gipsen &amp; egaliseren</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="text-white text-[10px] font-bold uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <span className="block text-stone-500 text-xs mb-1">Locatie</span>
                <span className="text-stone-300">Zoetermeer</span>
              </li>
              <li>
                <span className="block text-stone-500 text-xs mb-1">Telefoon</span>
                <a href="tel:+31623755436" className="text-stone-300 hover:text-white transition-colors">+31 6 23755436</a>
              </li>
              <li>
                <span className="block text-stone-500 text-xs mb-1">E-mail</span>
                <a href="mailto:info@vanderstarre.nl" className="text-stone-300 hover:text-white transition-colors">info@vanderstarre.nl</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-white text-[10px] font-bold uppercase tracking-widest mb-6">Keurmerken</h4>
            <div className="flex flex-col gap-4">
              <a href="#" className="group flex items-center gap-3 border border-stone-800 bg-[#1c1c1c] p-3 hover:border-stone-600 transition-colors w-max">
                <img src={werkspotLogo.src} alt="Werkspot" className="h-8 w-8 rounded-full object-cover border border-stone-700" />
                <div>
                  <span className="block text-white font-bold text-xs">Werkspot</span>
                  <span className="block text-stone-500 text-[10px] uppercase tracking-widest mt-0.5">Geverifieerd vakman</span>
                </div>
              </a>
            </div>
          </div>
          
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-stone-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Van der Starre Timmer- en Onderhoudwerkzaamheden.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacybeleid</a>
            <a href="#" className="hover:text-white transition-colors">Algemene voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  );
}