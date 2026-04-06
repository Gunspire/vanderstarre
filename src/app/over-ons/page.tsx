import React from "react";
import { Metadata } from "next";
import { ArrowRight, Hammer, Ruler, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { Footer } from "../../sections/Footer";

export const metadata: Metadata = {
  title: "Over Ons | Van der Starre Timmer- en Onderhoudswerkzaamheden",
  description: "Leer meer over Van der Starre. Vakmanschap, kwaliteit en heldere communicatie voor uw klus in regio Zoetermeer.",
};

export default function OverOnsPage() {
  return (
    <div className="min-h-screen bg-[#EBE9E4] font-sans flex flex-col">
      <main className="flex-1">
        
        {/* Editorial Hero Section */}
        <section className="relative pt-16 pb-12 lg:pt-24 lg:pb-16 border-b border-stone-300">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-stone-300 bg-white rounded-full shadow-sm w-max">
                  <div className="w-2 h-2 rounded-full bg-[#C8181B]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#141414]">Over Ons</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-[#141414] tracking-tight leading-[1.1] mb-6">
                  Vakmanschap. <br className="hidden md:block" />
                  <span className="font-bold">Gewoon goed geregeld.</span>
                </h1>
              </div>
              <div className="max-w-md lg:pb-3">
                <p className="text-stone-500 text-lg leading-relaxed">
                  Al jarenlang het vertrouwde adres in de regio Haaglanden voor al uw timmerwerk en onderhoud. We houden van ons vak en nog meer van tevreden klanten.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Story Section - Asymmetrical Split */}
        <section className="py-12 lg:py-20">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col lg:flex-row items-stretch bg-white border border-stone-300 shadow-sm">
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-[700px] border-b lg:border-b-0 lg:border-r border-stone-300 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2000&auto=format&fit=crop" 
                  alt="Vakman aan het werk"
                  className="absolute inset-0 w-full h-full object-cover filter grayscale-[20%] transition-transform duration-1000 hover:scale-105"
                />
                <div className="absolute top-6 left-6 bg-white px-4 py-2 border border-stone-300 shadow-sm text-[10px] font-bold uppercase tracking-widest text-[#141414]">
                  Oprichter
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-20 xl:p-24 flex flex-col justify-center bg-white relative">
                <div className="absolute top-12 right-12 text-[120px] font-serif text-stone-100 leading-none select-none z-0 hidden md:block">
                  "
                </div>
                
                <div className="relative z-10">
                  <div className="text-[10px] font-bold tracking-widest text-stone-500 uppercase mb-4">
                    Het verhaal
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#141414] mb-8 leading-tight">
                    Wie is Ricardo?
                  </h2>
                  <div className="space-y-6 text-stone-500 text-lg leading-relaxed">
                    <p>
                      Als oprichter van Van der Starre Timmer- en Onderhoudswerkzaamheden, ben ik er trots op om dagelijks de huizen van mijn klanten mooier, veiliger en comfortabeler te maken. Mijn passie voor hout en bouwen zat er al vroeg in.
                    </p>
                    <p>
                      Na jarenlange ervaring te hebben opgedaan in diverse klussen — van het compleet aftimmeren van zolders tot precisiewerk bij het dichtmaken van open trappen — besloot ik mijn eigen onderneming te starten. Mijn doel? Klanten in Zoetermeer en omgeving voorzien van eerlijk vakwerk zonder gedoe.
                    </p>
                    <p>
                      Wat u van mij kunt verwachten is simpel: ik kom mijn afspraken na, ik denk mee in oplossingen in plaats van problemen, en ik ga pas weg als u 100% tevreden bent.
                    </p>
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-stone-200">
                    <h4 className="text-[#141414] font-bold text-xl mb-1">Ricardo van der Starre</h4>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Eigenaar & Vakman</p>
                  </div>
                </div>
              </div>
              
            </div>

          </div>
        </section>

        {/* Core Values Section */}
        <section className="bg-[#141414] border-y border-stone-800 py-20 lg:py-32">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-16 lg:mb-24">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-stone-800 bg-stone-900 rounded-full shadow-sm w-max">
                <div className="w-2 h-2 rounded-full bg-[#C8181B]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-300">Onze Waarden</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1]">
                Waar wij <br className="hidden md:block" />
                <span className="font-bold">voor staan.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              
              {/* Value 1 */}
              <div className="border-t border-stone-800 pt-8 group">
                <div className="w-14 h-14 border border-stone-800 bg-[#1c1c1c] rounded-full flex items-center justify-center mb-8 text-white group-hover:border-[#C8181B] group-hover:bg-[#C8181B] transition-colors">
                  <Hammer className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Ouderwets Vakmanschap</h3>
                <p className="text-stone-400 leading-relaxed text-lg">
                  Kwaliteit staat altijd voorop. We werken met de beste materialen en leveren altijd precisiewerk. Oog voor detail is voor ons de standaard, niet een optie.
                </p>
              </div>

              {/* Value 2 */}
              <div className="border-t border-stone-800 pt-8 group">
                <div className="w-14 h-14 border border-stone-800 bg-[#1c1c1c] rounded-full flex items-center justify-center mb-8 text-white group-hover:border-[#C8181B] group-hover:bg-[#C8181B] transition-colors">
                  <Ruler className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Heldere Afspraken</h3>
                <p className="text-stone-400 leading-relaxed text-lg">
                  Geen verrassingen achteraf. U weet van tevoren precies wat de kosten zijn, hoe lang de klus gaat duren en wat u mag verwachten. Afspraak is afspraak.
                </p>
              </div>

              {/* Value 3 */}
              <div className="border-t border-stone-800 pt-8 group">
                <div className="w-14 h-14 border border-stone-800 bg-[#1c1c1c] rounded-full flex items-center justify-center mb-8 text-white group-hover:border-[#C8181B] group-hover:bg-[#C8181B] transition-colors">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Netjes & Betrouwbaar</h3>
                <p className="text-stone-400 leading-relaxed text-lg">
                  We behandelen uw huis met respect. We ruimen altijd onze rommel netjes op en zorgen dat u na vertrek direct kunt genieten van het eindresultaat.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16 lg:py-24 border-b border-stone-300">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            
            <h2 className="text-4xl md:text-5xl font-light text-[#141414] mb-8 tracking-tight leading-[1.1]">
              Klaar om uw klus te <span className="font-bold">bespreken?</span>
            </h2>
            
            <p className="text-stone-500 text-lg mb-12 max-w-2xl leading-relaxed">
              Of u nu precies weet wat u wilt of gewoon wilt sparren over de mogelijkheden. Wij helpen u graag verder.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#141414] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#C8181B] transition-colors group shadow-sm"
              >
                Neem contact op <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/offertes" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-stone-300 text-[#141414] font-bold text-xs uppercase tracking-wider hover:border-[#141414] transition-colors shadow-sm"
              >
                Bekijk offertetools
              </Link>
            </div>
            
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}