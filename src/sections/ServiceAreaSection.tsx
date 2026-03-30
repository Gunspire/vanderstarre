import React from "react";

import { Button } from "../components/Button";
import { SectionHeading } from "../components/SectionHeading";

export function ServiceAreaSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionHeading subtitle="Werkgebied">Zoetermeer &amp; omgeving</SectionHeading>

            <p className="text-[#6E6660] text-lg leading-relaxed mb-6">
              Wij zijn gevestigd in Zoetermeer en werken voornamelijk in de{" "}
              <span className="font-semibold text-[#141414]">regio Haaglanden</span> — voor
              timmerwerkzaamheden, onderhoud en klussen bij particulieren.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
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
                  className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
                >
                  <p className="font-bold text-[#141414]">{block.title}</p>
                  <ul className="mt-3 space-y-2 text-sm text-[#6E6660]">
                    {block.items.map((it) => (
                      <li key={it} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#C8181B]/70" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button as="a" href="#contact">
                Beschikbaarheid controleren
              </Button>
              <Button variant="outline" as="a" href="tel:+31623755436">
                Bel +31 6 23755436
              </Button>
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <div className="rounded-3xl overflow-hidden border border-stone-200 shadow-lg bg-stone-100">
              <div className="aspect-square relative">
                <iframe
                  title="Werkgebied kaart (Zoetermeer)"
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Zoetermeer,+Nederland&z=11&output=embed"
                />

                <div
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#C8181B]/80 bg-[#C8181B]/10 shadow-[0_0_0_8px_rgba(200,24,27,0.10)]"
                  style={{ width: "72%", height: "72%" }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
