"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { FAQItem } from "../components/FAQItem";

export function FaqSection() {
  return (
    <section id="faq" className="bg-[#EBE9E4] py-12 lg:py-16 border-b border-stone-300">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          {/* Left Column - Header */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-stone-300 bg-white rounded-full w-max shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#C8181B]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#141414]">Informatie</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#141414] tracking-tight leading-[1.1] mb-6">
              Veelgestelde <br className="hidden md:block" />
              <span className="font-bold">vragen.</span>
            </h2>
            
            <p className="text-stone-500 text-base md:text-lg leading-relaxed mb-10 max-w-sm">
              Vind snel antwoord op de meest gestelde vragen over onze werkwijze, garanties en diensten in de regio Zoetermeer en omstreken.
            </p>
            
            <Link 
              href="#contact" 
              className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-white border border-stone-300 text-[#141414] font-bold text-xs uppercase tracking-wider hover:bg-[#141414] hover:text-white hover:border-[#141414] transition-colors group w-max shadow-sm"
            >
              Stel uw vraag
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="w-full lg:w-2/3 bg-white border border-stone-300 shadow-sm flex flex-col">
            <FAQItem
              question="Kan ik mijn open trap laten dichtmaken?"
              answer="Absoluut. Dit is een van onze meest gevraagde diensten. We plaatsen stootborden tussen de bestaande treden, wat niet alleen veiliger is (vooral voor kinderen), maar ook zorgt voor minder warmteverlies naar boven. Gebruik gerust onze Offertetool voor een snelle prijsindicatie!"
            />
            <FAQItem
              question="Wat is inbegrepen in de prijs voor het dichtmaken van een trap?"
              answer="De prijs is inclusief het inmeten, het zagen en plaatsen van de stootborden, en de benodigde bevestigingsmaterialen. We zorgen voor een strakke, schilderklaar afwerking. U kunt dit makkelijk berekenen in onze Offertetool."
            />
            <FAQItem
              question="Doet u ook kleinere klussen en onderhoudswerk?"
              answer="Jazeker. Naast grotere projecten zoals het plaatsen van (vlizo)trappen en scheidingswanden, komen wij ook graag langs voor het repareren of afhangen van deuren, het aftimmeren van kozijnen, en diverse andere onderhoudswerkzaamheden in huis."
            />
            <FAQItem
              question="Biedt u garantie op uw werk?"
              answer="Ja, wij staan volledig achter de kwaliteit van ons vakwerk. U krijgt altijd duidelijke afspraken vooraf en garantie op de door ons uitgevoerde werkzaamheden en geleverde materialen."
            />
            <FAQItem
              question="In welke regio bent u werkzaam?"
              answer="Ons werkgebied is voornamelijk Zoetermeer en de omliggende regio (inclusief Den Haag, Gouda, Rotterdam en omliggende dorpen). Twijfelt u of u binnen ons gebied valt? Neem gerust even contact op!"
            />
          </div>

        </div>
      </div>
    </section>
  );
}