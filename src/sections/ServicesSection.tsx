"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ServicesSection() {
  const [showAll, setShowAll] = React.useState(false);

  const services = [
    {
      title: "Traptreden dichtmaken",
      description: "Traptreden netjes dichtmaken met stootborden voor een veilige en strakke uitstraling.",
      href: "/offerte-2",
      linkText: "Bereken prijs",
    },
    {
      title: "Vlizotrap plaatsen",
      description: "Een vlizotrap plaatsen zorgt voor eenvoudige toegang tot de zolder. Netjes ingebouwd en vakkundig afgewerkt.",
    },
    {
      title: "Binnenwand plaatsen",
      description: "Ruimte efficient indelen met een nieuwe binnenwand. Strak en duurzaam geplaatst op maat.",
    },
    {
      title: "Trap plaatsen of renoveren",
      description: "Nieuwe trap plaatsen of bestaande trap renoveren. Veilig, sterk en mooi afgewerkt.",
    },
    {
      title: "Trapkast maken",
      description: "Maximaal gebruik van de ruimte onder de trap met een op maat gemaakte trapkast.",
    },
    {
      title: "Trapleuningen plaatsen",
      description: "Trapleuning plaatsen voor extra veiligheid en een mooie uitstraling in uw woning.",
    },
    {
      title: "Deuren repareren",
      description: "Slecht sluitende of beschadigde deuren snel en vakkundig gerepareerd zonder gedoe.",
    },
    {
      title: "Veranda / overkapping",
      description: "Overkapping of veranda plaatsen voor meer woonplezier en beschutting in de tuin.",
    },
    {
      title: "Plafond gipsen",
      description: "Plafond netjes gipsen voor een strakke, egale afwerking klaar voor verf of behang.",
    },
    {
      title: "Wanden gipsen",
      description: "Wanden strak gipsen voor een nette basis en hoogwaardige afwerking in iedere ruimte.",
    },
    {
      title: "Egaliseren",
      description: "Vloer of wand egaliseren voor een perfecte, vlakke ondergrond en strakke eindafwerking.",
    },
    {
      title: "Velux dakraam vervangen",
      description: "Lekkend of verouderd dakraam snel en vakkundig vervangen door een nieuw Velux raam.",
    },
    {
      title: "Deurkozijnen plaatsen of vervangen",
      description: "Nieuw kozijn plaatsen of oud kozijn vervangen. Strak afgewerkt en professioneel.",
    },
    {
      title: "Deuren afhangen",
      description: "Binnendeuren vakkundig afhangen voor een soepele en rechte passing in elk kozijn.",
    },
  ];

  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <section id="services" className="bg-white border-b border-stone-300 w-full flex flex-col">
      {/* Header Area */}
      <div className="w-full p-10 md:p-16 lg:p-24 border-b border-stone-300 text-center flex flex-col items-center justify-center bg-[#faf9f7] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-stone-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4 z-0" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2b2b2b] tracking-tight leading-[1.1]">
            Timmerwerkzaamheden <br className="hidden sm:block" />&amp; <span className="font-bold">Onderhoud</span>
          </h2>
        </div>
      </div>

      {/* Grid Area */}
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3">
        {visibleServices.map((service, index) => {
          const totalItems = showAll ? visibleServices.length + 1 : visibleServices.length;
          const isLastInRow = (index + 1) % 3 === 0;
          const isLastRow = index >= totalItems - (totalItems % 3 || 3);
          
          return (
            <div 
              key={service.title} 
              className={`
                p-10 md:p-12 flex flex-col justify-between group hover:bg-[#faf9f7] transition-colors
                border-b border-stone-300
                ${!isLastInRow ? 'md:border-r' : ''}
                ${isLastRow ? 'lg:border-b-0' : ''}
              `}
            >
              <div>
                <h3 className="text-2xl font-bold text-[#141414] mb-4 group-hover:text-[#C8181B] transition-colors">
                  {service.title}
                </h3>
                <p className="text-stone-500 leading-relaxed mb-10 text-lg">
                  {service.description}
                </p>
              </div>
              
              <Link 
                href={service.href || "/offertes"} 
                className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#141414] hover:text-[#C8181B] transition-colors w-max"
              >
                {service.linkText || "Offerte aanvragen"} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          );
        })}

        {showAll && (
          <div className="p-10 md:p-12 flex flex-col justify-between group bg-[#141414] transition-colors lg:border-b-0">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#C8181B] transition-colors">
                Staat uw dienst er niet bij?
              </h3>
              <p className="text-stone-400 leading-relaxed mb-10 text-lg">
                Geen probleem. Neem gerust contact met ons op, dan bespreken we samen de mogelijkheden voor uw specifieke klus.
              </p>
            </div>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white hover:text-[#C8181B] transition-colors w-max"
            >
              Neem contact op <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>

      {/* Footer Area / Load More */}
      {!showAll && (
        <div className="w-full border-t border-stone-300 p-8 flex justify-center bg-white">
          <button 
            onClick={() => setShowAll(true)}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-stone-300 hover:border-[#141414] text-[#141414] font-bold text-sm uppercase tracking-wider transition-colors"
          >
            Laat alle diensten zien
          </button>
        </div>
      )}
    </section>
  );
}