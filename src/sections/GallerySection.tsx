import React from "react";

import { SectionHeading } from "../components/SectionHeading";
import { cn } from "../lib/cn";

export function GallerySection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <SectionHeading subtitle="Galerij" center>
          Echt vakwerk. Echte resultaten.
        </SectionHeading>

        <div className="hidden md:block">
          <div className="bg-white p-3 lg:p-4 rounded-3xl border border-stone-200 shadow-sm">
            <div className="relative h-[70vh] lg:h-[80vh]">
              <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-3 lg:gap-4">
                {[
                  {
                    id: "A",
                    cls: "col-span-7 row-span-3",
                    location: "Zoetermeer",
                  },
                  {
                    id: "B",
                    cls: "col-span-5 row-span-3",
                    location: "Den Haag",
                  },
                  {
                    id: "C",
                    cls: "col-span-5 row-span-3",
                    location: "Rijswijk",
                  },
                  {
                    id: "D",
                    cls: "col-span-7 row-span-3",
                    location: "Delft",
                  },
                ].map((t) => (
                  <div
                    key={t.id}
                    className={cn(
                      "group relative overflow-hidden rounded-2xl",
                      "bg-[#e8e2d9] ring-1 ring-stone-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:ring-[#C8181B]/20",
                      t.cls
                    )}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[#6E6660] text-sm font-medium">Foto invoegen</span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center rounded-full bg-white/80 backdrop-blur px-3 py-1.5 text-xs font-semibold text-[#141414] border border-white/50 shadow-sm transition-all duration-300 group-hover:bg-white/95 group-hover:-translate-y-0.5">
                        {t.location}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="bg-white p-3 rounded-3xl border border-stone-200 shadow-sm">
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: "A", location: "Zoetermeer" },
                  { id: "B", location: "Den Haag" },
                  { id: "C", location: "Rijswijk" },
                  { id: "D", location: "Delft" },
                ].map((t) => (
                  <div
                    key={t.id}
                    className="group relative overflow-hidden rounded-2xl bg-[#e8e2d9] ring-1 ring-stone-200 aspect-[4/3] transition-all duration-300 active:scale-[0.99]"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[#6E6660] text-sm font-medium">Foto invoegen</span>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center rounded-full bg-white/80 backdrop-blur px-3 py-1.5 text-xs font-semibold text-[#141414] border border-white/50 shadow-sm transition-all duration-300 group-hover:bg-white/95 group-hover:-translate-y-0.5">
                        {t.location}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
