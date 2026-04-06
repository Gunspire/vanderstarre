"use client";

import React from "react";
import { CheckCircle2, Clock, MapPin, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

import { BeforeAfterSlider } from "../components/BeforeAfterSlider";
import stairAfter from "./image (2).png";
import stairBefore from "./Generated Image March 30, 2026 - 3_31PM.jpg";

export function BeforeAfterSection() {
  return (
    <section className="bg-white border-b border-stone-300 w-full">
      <div className="w-full flex flex-col lg:flex-row items-stretch">
        
        {/* Text Side (Left) */}
        <div className="w-full lg:w-1/3 p-8 md:p-12 lg:p-16 xl:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-stone-300 relative overflow-hidden bg-white">
          <div className="relative z-10">
            
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-stone-200 bg-white rounded-full w-max">
                <div className="w-2 h-2 rounded-full bg-[#C8181B]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#141414]">Transformatie</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-[#2b2b2b] tracking-tight leading-[1.1]">
                Open trap <span className="font-bold">veilig</span> &amp; <span className="font-bold">strak</span> dichtgemaakt.
              </h2>
            </div>

            <p className="text-stone-500 text-base mb-8 max-w-md leading-relaxed">
              Deze trap was eerst open. Wij hebben hout tussen de treden geplaatst, 
              zodat de trap veilig is afgesloten en een strakkere, rustigere uitstraling heeft.
            </p>

            <ul className="space-y-3 mb-10 text-sm">
              {[
                "Veilig dichtgemaakt",
                "Strakkere uitstraling",
                "Minder warmteverlies"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C8181B] shrink-0" />
                  <span className="text-[#141414] font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 gap-4 mb-10 border-y border-stone-200 py-6">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-5 h-5 text-[#C8181B]" />
                  <span className="text-xl font-black text-[#141414] tracking-tight">Zoetermeer</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Locatie</span>
              </div>
              <div className="flex flex-col border-l border-stone-200 pl-4">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-5 h-5 text-[#C8181B]" />
                  <span className="text-xl font-black text-[#141414] tracking-tight">1 dag</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Doorlooptijd</span>
              </div>
            </div>

            <Link 
              href="/offerte-2" 
              className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#141414] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#C8181B] transition-colors group w-max"
            >
              Prijsindicatie 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Image/Slider Side (Right) */}
        <div className="w-full lg:w-2/3 relative min-h-[500px] lg:min-h-[800px] bg-stone-100 flex flex-col justify-center p-8 md:p-12 lg:p-16 xl:p-24 overflow-hidden">
          
          <div className="relative z-10 w-full mx-auto max-w-5xl">
            
            <div className="rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
              <BeforeAfterSlider beforeImage={stairBefore.src} afterImage={stairAfter.src} />
            </div>
            <p className="text-center text-xs font-bold uppercase tracking-widest text-stone-500 mt-6">
              Sleep de schuifbalk voor resultaat
            </p>

            {/* Testimonial Card */}
            <div className="mt-12 max-w-xl mx-auto bg-white rounded-3xl border border-stone-200 shadow-lg p-6 relative overflow-hidden group hover:border-[#C8181B]/30 transition-colors">
              <div className="absolute top-2 right-4 text-7xl font-serif text-stone-100 leading-none select-none z-0">
                "
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-4 border-b border-stone-100 pb-4">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Recent afgerond</span>
                </div>
                
                <p className="text-[#141414] text-base leading-relaxed italic mb-4">
                  "Vakkundig en vriendelijk. Zou hem zeker opnieuw inhuren."
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-stone-100 border border-stone-200 rounded-full flex items-center justify-center text-[#141414] font-black text-sm">
                    M
                  </div>
                  <div>
                    <p className="text-[#141414] font-bold text-sm">M. Bakker</p>
                    <p className="text-stone-500 text-[10px] uppercase tracking-widest mt-0.5">Den Haag • Trap dichtgemaakt</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}