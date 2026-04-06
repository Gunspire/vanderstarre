"use client";

import React from "react";
import { Star, ArrowRight } from "lucide-react";
import Link from "next/link";

import reviewCameron from "./c024b121-4936-4fd7-90f2-cb089c561dab.jpg";
import reviewGouda from "./9dfc16fe-c9d5-4fe4-ac19-bd7c561310b0.jpg";
import reviewJeffrey from "./42ac996f-da0f-40cd-bd9f-eff781f3219b.jpg";
import werkspotLogo from "./images.png";

export function ReviewsSection() {
  const reviews = [
    {
      text: "Top! Ricardo heeft goed werk geleverd met mijn vloeren en een aantal andere reparaties. Ik zou hem zeker weer bellen.",
      author: "Cameron",
      location: "Rotterdam",
      date: "11 jan 2025",
      job: "Vloer egaliseren: 12 m2",
      imageSrc: reviewCameron.src,
    },
    {
      text: "Ricardo kwam op de afgesproken momenten langs om de klus te bekijken en vervolgens uit te voeren. Hij werkt erg netjes en snel.",
      author: "Werkspot-gebruiker uit Gouda",
      location: "Gouda",
      date: "12 jun 2025",
      job: "Diverse kleine klussen: Trapkast creeren, afscheiding trap/woonkamer",
      imageSrc: reviewGouda.src,
    },
    {
      text: "Prettig en direct contact met Ricardo. Uitvoering super en erg netjes gedaan. Wij zijn er erg blij mee!",
      author: "Jeffrey",
      location: "Kwintsheul",
      date: "28 aug 2025",
      job: "Trap plaatsen of renoveren: Installeren; Vlizotrap installeren",
      imageSrc: reviewJeffrey.src,
    },
  ];

  return (
    <section id="reviews" className="bg-[#EBE9E4] py-12 lg:py-16 border-b border-stone-300">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-stone-300 bg-white rounded-full w-max shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#141414]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#141414]">Klantervaringen</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#141414] tracking-tight leading-[1.1]">
              Wat onze <br className="hidden md:block" />
              <span className="font-bold">klanten zeggen.</span>
            </h2>
          </div>
          
          {/* Werkspot Stats Box - Editorial Style */}
          <div className="bg-white border border-stone-300 p-5 shadow-sm max-w-xs w-full md:w-auto">
            <div className="flex items-center gap-3 mb-3 pb-3 border-b border-stone-200">
              <img src={werkspotLogo.src} alt="Werkspot" className="h-8 w-8 rounded-full border border-stone-200" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-black text-[#141414] leading-none">4.9</span>
                  <div className="flex items-center text-[#141414]">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-stone-500 mt-1 block">Gemiddelde beoordeling</span>
              </div>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed font-medium">
              Gebaseerd op 20+ geverifieerde reviews op Werkspot door particulieren in de regio.
            </p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6">
          {reviews.map((review, i) => (
            <div 
              key={i}
              className="bg-white border border-stone-300 shadow-sm flex flex-col group relative overflow-hidden"
            >
              {/* Image Section */}
              <div className="aspect-[4/3] overflow-hidden bg-stone-100 border-b border-stone-300 relative">
                <img
                  src={review.imageSrc}
                  alt={`${review.author} review foto`}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter grayscale-[20%]"
                />
                <div className="absolute top-3 right-3 bg-white px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-[#141414] shadow-sm flex items-center gap-1.5">
                  <Star className="w-2.5 h-2.5 fill-current" />
                  Geverifieerd
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4 md:p-5 flex flex-col flex-1">
                <p className="text-base md:text-lg font-medium text-[#141414] leading-relaxed mb-5 flex-1 italic">
                  {review.text}
                </p>
                
                <div className="flex flex-col gap-1 border-t border-stone-200 pt-4">
                  <span className="text-sm font-bold text-[#141414]">{review.author}</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-stone-500">
                    {review.location} • {review.date}
                  </span>
                  <span className="text-[11px] text-stone-400 mt-1.5 line-clamp-1">{review.job}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link 
            href="#contact" 
            className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#141414] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#C8181B] transition-colors group w-max shadow-sm"
          >
            Lees meer op Werkspot
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}