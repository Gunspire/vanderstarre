import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Hammer, Layers, Phone } from "lucide-react";

import { Footer } from "../../sections/Footer";

export const metadata: Metadata = {
  title: "Kies uw offerte | Van der Starre",
  description: "Kies voor welke dienst u een prijsindicatie wilt berekenen en een offerte wilt aanvragen.",
};

export default function OffertesPage() {
  return (
    <div className="min-h-screen bg-[#EBE9E4] font-sans flex flex-col">
      <main className="flex-1 py-16 md:py-24 lg:py-32">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-16 lg:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-stone-300 bg-white rounded-full w-max shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#C8181B]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#141414]">Offertetools</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-[#141414] tracking-tight leading-[1.1]">
                Kies uw <br className="hidden md:block" />
                <span className="font-bold">offertetool.</span>
              </h1>
            </div>
            <div className="max-w-sm">
              <p className="text-stone-500 text-lg leading-relaxed">
                Weet u al precies wat u wilt? Bereken direct online een prijsindicatie 
                en vraag een offerte aan voor uw specifieke klus.
              </p>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-24">
            
            {/* General Quote Tool */}
            <Link 
              href="/offerte" 
              className="group bg-white border border-stone-300 shadow-sm flex flex-col h-full hover:border-[#141414] transition-colors duration-300 relative"
            >
              <div className="p-8 md:p-12 lg:p-16 flex flex-col h-full">
                <div className="mb-12 border-b border-stone-200 pb-8 flex justify-between items-start">
                  <div className="w-16 h-16 bg-[#faf9f7] border border-stone-200 flex items-center justify-center group-hover:bg-[#141414] transition-colors">
                    <Hammer className="w-6 h-6 text-[#141414] group-hover:text-white transition-colors" />
                  </div>
                  <div className="w-10 h-10 border border-stone-200 flex items-center justify-center group-hover:border-[#C8181B] group-hover:bg-[#C8181B] transition-colors">
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-[#141414] mb-6 leading-tight">
                  Algemene Timmerwerken
                </h3>
                
                <p className="text-stone-500 text-lg leading-relaxed mb-12 flex-1">
                  Vraag een offerte aan voor algemene klussen zoals deuren afhangen, 
                  plafonds gipsen, plinten plaatsen of kozijnen aftimmeren.
                </p>
                
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#141414] group-hover:text-[#C8181B] transition-colors mt-auto">
                  Start aanvraag <div className="w-8 h-[1px] bg-current" />
                </div>
              </div>
            </Link>

            {/* Trap Dichtmaken Quote Tool */}
            <Link 
              href="/offerte-2" 
              className="group bg-[#141414] border border-[#2b2b2b] shadow-sm flex flex-col h-full hover:border-[#C8181B] transition-colors duration-300 relative"
            >
              <div className="p-8 md:p-12 lg:p-16 flex flex-col h-full">
                <div className="mb-12 border-b border-stone-800 pb-8 flex justify-between items-start">
                  <div className="w-16 h-16 bg-[#1c1c1c] border border-stone-800 flex items-center justify-center group-hover:bg-[#C8181B] group-hover:border-[#C8181B] transition-colors">
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-10 h-10 border border-stone-800 flex items-center justify-center group-hover:border-[#C8181B] group-hover:bg-[#C8181B] transition-colors">
                    <ArrowRight className="w-4 h-4 text-stone-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                  Open Trap Dichtmaken
                </h3>
                
                <p className="text-stone-400 text-lg leading-relaxed mb-12 flex-1">
                  Bereken exact de materiaalkosten voor het dichtmaken van uw trap. 
                  Vul in hoeveel treden, verdiepingen en type trap(pen) u heeft.
                </p>
                
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white group-hover:text-[#C8181B] transition-colors mt-auto">
                  Start berekening <div className="w-8 h-[1px] bg-current" />
                </div>
              </div>
            </Link>

          </div>
          
          {/* Custom CTA */}
          <div className="bg-white border border-stone-300 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
            <div>
              <h4 className="text-2xl font-bold text-[#141414] mb-2">Staat uw klus er niet tussen?</h4>
              <p className="text-stone-500 text-lg">
                Geen probleem! We bespreken graag de mogelijkheden voor uw specifieke wensen.
              </p>
            </div>
            <a 
              href="tel:+31623755436" 
              className="inline-flex items-center justify-center gap-4 px-8 py-4 bg-transparent border border-[#141414] text-[#141414] font-bold text-xs uppercase tracking-wider hover:bg-[#141414] hover:text-white transition-colors group w-full md:w-auto whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              Bel: 06 23755436
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}