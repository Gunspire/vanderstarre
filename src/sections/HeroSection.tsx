"use client";

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import firstHeroImage from "./59a38914-530f-43a5-ae71-2f9f180ac7be.jpg";

export function HeroSection() {
  return (
    <section className="w-full flex flex-col lg:flex-row items-stretch min-h-[calc(100vh-80px)] border-b border-stone-300">
      
      {/* Text Side */}
      <div className="w-full lg:w-1/2 bg-white p-10 md:p-16 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-stone-300 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-stone-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4 z-0" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-stone-200 bg-stone-50 rounded-full">
                <div className="w-2 h-2 rounded-full bg-[#C8181B] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#141414]">Zoetermeer & Omstreken</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-light text-[#2b2b2b] tracking-tight leading-[1.1] mb-8">
                Vakkundig <br />
                <span className="font-bold">timmerwerk</span><br />
                voor uw woning.
              </h1>
              
              <p className="text-stone-500 text-lg mb-12 max-w-md leading-relaxed">
                Ricardo van der Starre levert kwalitatieve timmerwerkzaamheden en onderhoud voor particulieren. 
                Meer dan 5 jaar vakervaring en altijd met garantie.
              </p>
              
              <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-6">
                <Link 
                  href="/offertes" 
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#141414] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#C8181B] transition-colors group"
                >
                  Start Offerte Aanvraag 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="#projecten" 
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#141414] border border-stone-300 font-bold text-sm uppercase tracking-wider hover:border-[#141414] transition-colors"
                >
                  Bekijk Projecten
                </Link>
              </div>

              <div className="mt-12 pt-8 border-t border-stone-200">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-600">J</div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-stone-300 flex items-center justify-center text-xs font-bold text-stone-600">M</div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-[#C8181B] flex items-center justify-center text-xs font-bold text-white">4.9</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-yellow-400 mb-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#141414]">Beoordeeld op Werkspot</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-full bg-stone-100">
            <img 
              src={firstHeroImage.src} 
              alt="Timmerwerk op maat" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Soft gradient overlay to make it blend nicely */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/40 to-transparent" />
            
            {/* Floating Quality Badge */}
            <div className="absolute bottom-8 left-8 bg-white p-6 shadow-xl border border-stone-100 max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <span className="font-bold text-[#141414] text-sm uppercase tracking-wider">Vakmanschap</span>
              </div>
              <p className="text-stone-500 text-sm">Altijd met garantie op ons geleverde werk.</p>
            </div>
          </div>

    </section>
  );
}