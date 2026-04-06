"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import projectWallImage from "./a2179f0d-f5a3-4378-ad51-a25e0e9dfbcd.jpg";
import projectRoofImage from "./22c67cf7-e2c4-46f9-a848-fa147641752e.jpg";
import projectWindowImage from "./59a38914-530f-43a5-ae71-2f9f180ac7be.jpg";

export function ProjectsSection() {
  const projects = [
    {
      img: projectWallImage.src,
      alt: "Binnenwand met gipsplaten geplaatst in slaapkamer",
      title: "Scheidingswand geplaatst",
      loc: "Zoetermeer",
      date: "Feb 2026",
      duration: "1 dag",
      description: "In deze kamer is een nieuwe scheidingswand geplaatst en bekleed met gipsplaten. De wand is vakkundig gemonteerd en staat nu helemaal klaar om verder strak te worden afgewerkt naar wens van de klant.",
      tags: ["Timmerwerk", "Gipsplaten"]
    },
    {
      img: projectRoofImage.src,
      alt: "Nieuwe overkapping aan schuur en buitenruimte",
      title: "Overkapping gerealiseerd",
      loc: "Den Haag",
      date: "Jan 2026",
      duration: "2 dagen",
      description: "Een nieuwe, stevige overkapping geplaatst voor extra beschutting in de tuin. Dit creëert een nette, praktische buitenruimte waar men het hele jaar door droog kan genieten van de buitenlucht.",
      tags: ["Buitenwerk", "Houtbouw"]
    },
    {
      img: projectWindowImage.src,
      alt: "Kozijnopening voorbereid en netjes afgetimmerd",
      title: "Kozijnopening afgetimmerd",
      loc: "Rijswijk",
      date: "Dec 2025",
      duration: "1 dag",
      description: "Bij deze verbouwing is de kozijnopening zorgvuldig voorbereid en naadloos afgetimmerd. Dit zorgt voor een perfecte basis voor de verdere afbouw en een strak eindresultaat van de ruimte.",
      tags: ["Renovatie", "Aftimmeren"]
    },
  ];

  return (
    <section id="projects" className="bg-[#EBE9E4] py-12 lg:py-20 border-b border-stone-300">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 lg:mb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-stone-300 bg-white rounded-full w-max shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#141414]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#141414]">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#141414] tracking-tight leading-[1.1]">
              Onze recente <br className="hidden md:block" />
              <span className="font-bold">Projecten.</span>
            </h2>
          </div>
          
          <Link 
            href="#contact" 
            className="mt-8 md:mt-0 inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#141414] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#C8181B] transition-colors group w-max"
          >
            Start uw project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Stacked Alternating Projects */}
        <div className="flex flex-col gap-16 lg:gap-32">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center group`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute top-4 left-4 z-10 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#141414] shadow-sm">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="aspect-[4/3] lg:aspect-[16/10] overflow-hidden bg-stone-200 border border-stone-300 shadow-sm relative">
                  <img 
                    src={project.img} 
                    alt={project.alt} 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
                  />
                  {/* Subtle overlay gradient on hover */}
                  <div className="absolute inset-0 bg-[#141414]/0 group-hover:bg-[#141414]/5 transition-colors duration-500" />
                </div>
              </div>

              {/* Text Side */}
              <div className={`w-full lg:w-1/2 flex flex-col justify-center ${index % 2 === 1 ? 'lg:pl-12 xl:pl-20' : 'lg:pr-12 xl:pr-20'}`}>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-stone-500 border border-stone-300 bg-white px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-[#141414] mb-6 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-stone-600 text-base md:text-lg leading-relaxed mb-8">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 border-t border-stone-300 pt-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-1">Locatie</span>
                    <span className="text-sm font-bold text-[#141414]">{project.loc}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-1">Oplevering</span>
                    <span className="text-sm font-bold text-[#141414]">{project.date}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-1">Duur</span>
                    <span className="text-sm font-bold text-[#141414]">{project.duration}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}