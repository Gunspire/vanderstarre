import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

import { Logo } from "../components/Logo";
import werkspotLogo from "./images.png";

export function Footer() {
  return (
    <footer className="bg-white text-[#666666] py-12 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Logo className="h-[66px] sm:h-[72px]" />
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Kwalitatief timmerwerk en onderhoud voor particulieren in Zoetermeer en omgeving.
              KvK: 76281019.
            </p>
          </div>

          <div>
            <h4 className="text-[#2b2b2b] font-bold mb-4">Diensten</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-[#C8181B] transition-colors">
                  Vlizotrap plaatsen
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C8181B] transition-colors">
                  Trap plaatsen of renoveren
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C8181B] transition-colors">
                  Deuren repareren
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C8181B] transition-colors">
                  Veranda / overkapping
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C8181B] transition-colors">
                  Gipsen &amp; egaliseren
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#2b2b2b] font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C8181B] shrink-0" /> Zoetermeer
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C8181B] shrink-0" /> +31 6 23755436
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C8181B] shrink-0" /> [PLACEHOLDER]
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#2b2b2b] font-bold mb-4">Keurmerken</h4>
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 rounded-lg bg-[#fff5f5] px-3 py-2 text-xs font-bold text-[#C8181B]">
                <img src={werkspotLogo.src} alt="Werkspot" className="h-5 w-5 rounded-full object-cover" />
                Geverifieerd op Werkspot
              </div>
              <div className="inline-flex items-center gap-2 rounded-lg bg-[#fff5f5] px-3 py-2 text-xs font-bold text-[#C8181B]">
                KvK: 76281019
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Van der Starre Timmer- en Onderhoudwerkzaamheden. Alle rechten voorbehouden.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#C8181B]">
              Privacybeleid
            </a>
            <a href="#" className="hover:text-[#C8181B]">
              Algemene voorwaarden
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
