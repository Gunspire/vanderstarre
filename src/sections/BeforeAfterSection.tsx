import React from "react";
import { CheckCircle2, Clock, MapPin, Star } from "lucide-react";

import { Button } from "../components/Button";
import { BeforeAfterSlider } from "../components/BeforeAfterSlider";
import { SectionHeading } from "../components/SectionHeading";
import stairAfter from "./image (2).png";
import stairBefore from "./Generated Image March 30, 2026 - 3_31PM.jpg";

export function BeforeAfterSection() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading subtitle="Transformatie">
              Open trap &rarr; Veilig en strak dichtgemaakt
            </SectionHeading>
            <p className="text-[#6E6660] mb-8 leading-relaxed text-lg">
              Deze trap was eerst open tussen de treden. Ricardo heeft hout tussen de treden
              geplaatst, zodat de trap dicht is gemaakt voor extra veiligheid en een nettere,
              rustigere uitstraling in huis.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-[#141414] font-medium">
                  Hout tussen de open treden geplaatst
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-[#141414] font-medium">
                  Trap veilig dichtgemaakt met stootborden
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-[#141414] font-medium">
                  Strakkere uitstraling en veiliger in gebruik
                </span>
              </li>
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              <div className="bg-white rounded-xl border border-stone-200 px-4 py-3 shadow-sm flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#fef2f2] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#C8181B]" />
                </div>
                <div>
                  <p className="text-xs text-[#6E6660] font-medium">Locatie</p>
                  <p className="text-sm font-bold text-[#141414]">Zoetermeer</p>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-stone-200 px-4 py-3 shadow-sm flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#fef2f2] flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#C8181B]" />
                </div>
                <div>
                  <p className="text-xs text-[#6E6660] font-medium">Doorlooptijd</p>
                  <p className="text-sm font-bold text-[#141414]">1 dag</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button as="a" href="#contact">
                Gratis offerte aanvragen
              </Button>
              <Button variant="outline" as="a" href="tel:+31623755436">
                Bel +31 6 23755436
              </Button>
            </div>
          </div>

          <div className="relative">
            <BeforeAfterSlider beforeImage={stairBefore.src} afterImage={stairAfter.src} />
            <p className="text-center text-sm text-[#6E6660] mt-4 italic">
              Sleep de schuifbalk om de transformatie te zien
            </p>

            <div className="mt-6 bg-white rounded-2xl border border-stone-200 shadow-sm p-6">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-1 text-yellow-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-[#6E6660]">Recent afgerond</span>
              </div>
              <p className="text-[#141414] leading-relaxed italic">
                &ldquo;Vakkundig en vriendelijk. Zou hem zeker opnieuw inhuren.&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-5">
                <div className="w-10 h-10 bg-[#fde8e8] rounded-full flex items-center justify-center text-[#C8181B] font-bold">
                  M
                </div>
                <div>
                  <p className="text-[#141414] font-bold text-sm">M. Bakker</p>
                  <p className="text-[#6E6660] text-xs">Den Haag &bull; Trap dichtgemaakt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
