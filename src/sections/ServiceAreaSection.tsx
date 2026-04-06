import React from "react";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

export function ServiceAreaSection() {
  return (
    <section className="bg-white py-16 lg:py-24 border-b border-stone-300">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-stone-300 bg-white rounded-full shadow-sm w-max">
              <div className="w-2 h-2 rounded-full bg-[#C8181B]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#141414]">Werkgebied</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#141414] tracking-tight leading-[1.1] mb-8">
              Zoetermeer <br className="hidden md:block" />
              <span className="font-bold">&amp; omgeving.</span>
            </h2>

            <p className="text-stone-500 text-lg leading-relaxed mb-10 max-w-md">
              Wij zijn gevestigd in Zoetermeer en werken voornamelijk in de{" "}
              <span className="font-bold text-[#141414]">regio Haaglanden</span> — voor
              timmerwerkzaamheden, onderhoud en klussen bij particulieren.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: "Kern werkgebied",
                  items: ["Zoetermeer", "Den Haag", "Rijswijk", "Delft"],
                },
                {
                  title: "Omliggende gebieden",
                  items: [
                    "Nootdorp",
                    "Pijnacker",
                    "Leidschendam",
                    "Voorburg",
                    "Wassenaar",
                    "Wateringen",
                  ],
                },
              ].map((block) => (
                <div
                  key={block.title}
                  className="border-t border-stone-300 pt-6"
                >
                  <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-4">{block.title}</p>
                  <ul className="space-y-3 text-sm font-bold text-[#141414]">
                    {block.items.map((it) => (
                      <li key={it} className="flex items-center gap-3">
                        <MapPin className="w-3.5 h-3.5 text-[#C8181B]" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/offertes" 
                className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#141414] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#C8181B] transition-colors group w-max shadow-sm"
              >
                Beschikbaarheid controleren
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:sticky lg:top-32 border border-stone-300 bg-stone-100 p-2 md:p-4 shadow-sm">
            <div className="aspect-square relative overflow-hidden bg-white border border-stone-200">
              <iframe
                title="Werkgebied kaart (Zoetermeer)"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Zoetermeer,+Nederland&z=10&output=embed"
              />

              <div
                className="pointer-events-none absolute left-1/2 top-1/2 rounded-full border-2 border-[#C8181B]/80 bg-[#C8181B]/10 shadow-[0_0_0_8px_rgba(200,24,27,0.10)] -translate-x-1/2 -translate-y-1/2"
                style={{ width: "72%", height: "72%" }}
                aria-hidden="true"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}