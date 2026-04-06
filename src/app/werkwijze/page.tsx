import React from "react";
import { Metadata } from "next";
import { ClipboardList, CalendarCheck, Hammer, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

import { Footer } from "../../sections/Footer";

export const metadata: Metadata = {
  title: "Werkwijze | Van der Starre Timmer- en Onderhoudswerkzaamheden",
  description: "Hoe wij werken: van uw eerste aanvraag tot de perfecte oplevering van uw timmer- of onderhoudsklus.",
};

const steps = [
  {
    number: "01",
    title: "Aanvraag & Offerte",
    description: "U neemt contact met ons op via WhatsApp, telefoon of één van onze handige offertetools. Op basis van uw wensen, foto's en afmetingen berekenen we snel een transparante prijsindicatie, zonder verborgen kosten.",
    icon: <ClipboardList className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Inmeten & Inplannen",
    description: "Na uw akkoord op de indicatie bellen we u op om eventuele details te bespreken. Waar nodig komen we langs om alles secuur in te meten. Daarna plannen we direct een definitieve montagedatum in die u uitkomt.",
    icon: <CalendarCheck className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Vakkundige Uitvoering",
    description: "Tringgg! Op de afgesproken dag staan wij bij u op de stoep. We werken netjes, efficiënt en met hoogwaardige materialen. We zorgen dat de werkplek tijdens en na de klus keurig wordt achtergelaten.",
    icon: <Hammer className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Oplevering & Garantie",
    description: "Samen met u lopen we het eindresultaat zorgvuldig na. Pas als u 100% tevreden bent, ronden wij de klus af. Op al ons geleverde werk zit uiteraard standaard garantie.",
    icon: <CheckCircle2 className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
  },
];

export default function WerkwijzePage() {
  return (
    <div className="min-h-screen bg-[#EBE9E4] font-sans flex flex-col">
      <main className="flex-1">
        
        {/* Editorial Header Section */}
        <section className="relative pt-12 pb-8 lg:pt-20 lg:pb-16 border-b border-stone-300">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-stone-300 bg-white rounded-full shadow-sm w-max">
                  <div className="w-2 h-2 rounded-full bg-[#C8181B]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#141414]">Werkwijze</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#141414] tracking-tight leading-[1.1] mb-6">
                  Helder, eerlijk &amp; <br className="hidden md:block" />
                  <span className="font-bold">zonder verrassingen.</span>
                </h1>
              </div>
              <div className="max-w-md lg:pb-2">
                <p className="text-stone-500 text-lg leading-relaxed">
                  We snappen dat u uw huis niet zomaar aan iedereen toevertrouwt. 
                  Daarom werken we met een helder stappenplan. Zo weet u bij ons altijd precies 
                  waar u aan toe bent, van het eerste contact tot de laatste schroef.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Timeline Section */}
        <section className="py-12 lg:py-20">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 lg:space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={step.number} 
                  className={`flex flex-col lg:flex-row items-stretch bg-white border border-stone-300 shadow-sm ${isEven ? '' : 'lg:flex-row-reverse'}`}
                >
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2 relative aspect-[16/9] lg:aspect-auto lg:min-h-[400px] border-b lg:border-b-0 border-stone-300 overflow-hidden">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="absolute inset-0 w-full h-full object-cover filter grayscale-[20%] transition-transform duration-1000 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white px-3 py-1.5 border border-stone-300 shadow-sm text-[9px] font-bold uppercase tracking-widest text-[#141414]">
                      Fase {step.number}
                    </div>
                  </div>

                  {/* Text Side */}
                  <div className={`w-full lg:w-1/2 p-6 md:p-10 lg:p-16 flex flex-col justify-center bg-white relative ${!isEven ? 'lg:border-r border-stone-300' : 'lg:border-l border-stone-300'}`}>
                    
                    <div className="absolute top-6 right-6 md:top-10 md:right-10 text-[80px] md:text-[100px] font-serif text-stone-100 leading-none select-none z-0">
                      {step.number}
                    </div>
                    
                    <div className="relative z-10">
                      <div className="w-10 h-10 border border-stone-300 bg-[#faf9f7] rounded-full flex items-center justify-center mb-6 text-[#141414]">
                        {step.icon}
                      </div>
                      
                      <div className="text-[9px] font-bold tracking-widest text-stone-500 uppercase mb-3">
                        Stap {step.number}
                      </div>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#141414] mb-4 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-stone-500 leading-relaxed text-base md:text-lg max-w-lg">
                        {step.description}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#141414] border-y border-stone-800 py-16 lg:py-24">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-stone-800 bg-stone-900 rounded-full shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#C8181B]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-stone-300">Start Project</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight leading-[1.1]">
              Klaar voor <span className="font-bold">stap 1?</span>
            </h2>
            
            <p className="text-stone-400 text-lg mb-12 max-w-2xl leading-relaxed">
              Start direct met de eerste stap. Bereken online uw prijsindicatie via onze handige offertetools, 
              geheel vrijblijvend.
            </p>
            
            <Link 
              href="/offertes" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#141414] font-bold text-xs uppercase tracking-wider hover:bg-[#C8181B] hover:text-white transition-colors group shadow-sm"
            >
              Start gratis offerte aanvraag <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}