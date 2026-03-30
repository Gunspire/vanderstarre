import React from "react";
import { CalendarDays, Clock, MapPin } from "lucide-react";

import { Button } from "../components/Button";
import { SectionHeading } from "../components/SectionHeading";
import projectWallImage from "./a2179f0d-f5a3-4378-ad51-a25e0e9dfbcd.jpg";
import projectRoofImage from "./22c67cf7-e2c4-46f9-a848-fa147641752e.jpg";
import projectWindowImage from "./59a38914-530f-43a5-ae71-2f9f180ac7be.jpg";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Ons werk" center>
          Recente projecten
        </SectionHeading>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              img: projectWallImage.src,
              alt: "Binnenwand met gipsplaten geplaatst in slaapkamer",
              title: "Scheidingswand geplaatst",
              loc: "Zoetermeer",
              date: "Feb 2026",
              duration: "1 dag",
              description:
                "In deze kamer is een nieuwe scheidingswand geplaatst en bekleed met gipsplaten, klaar om verder strak af te werken.",
              highlights: ["Scheidingswand", "Gipsplaten", "Klaar voor afwerking"],
            },
            {
              img: projectRoofImage.src,
              alt: "Nieuwe overkapping aan schuur en buitenruimte",
              title: "Overkapping gerealiseerd",
              loc: "Den Haag",
              date: "Jan 2026",
              duration: "2 dagen",
              description:
                "Een nieuwe overkapping geplaatst voor extra beschutting en een nette, praktische buitenruimte.",
              highlights: ["Overkapping", "Duurzame materialen", "Netjes afgewerkt"],
            },
            {
              img: projectWindowImage.src,
              alt: "Kozijnopening voorbereid en netjes afgetimmerd",
              title: "Kozijnopening afgetimmerd",
              loc: "Rijswijk",
              date: "Dec 2025",
              duration: "1 dag",
              description:
                "Bij deze verbouwing is de kozijnopening netjes voorbereid en afgetimmerd voor een strakke verdere afbouw.",
              highlights: ["Kozijnopening", "Aftimmering", "Renovatie"],
            },
          ].map((project, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-2xl shadow-sm ring-1 ring-stone-200 bg-white"
            >
              <div className="relative aspect-[4/3] bg-[#e8e2d9] overflow-hidden">
                <img
                  src={project.img}
                  alt={project.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>

              <div className="p-6">
                <h4 className="text-[#141414] text-xl font-extrabold leading-snug">{project.title}</h4>
                <p className="text-[#6E6660] font-semibold flex items-center gap-2 mt-1">
                  <MapPin className="w-4 h-4 text-[#C8181B]" /> {project.loc}
                </p>
                <p className="text-[#666666] leading-relaxed mt-4">{project.description}</p>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-[#6E6660]">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-[#C8181B]" />
                    <span className="font-semibold">{project.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#C8181B]" />
                    <span className="font-semibold">{project.duration}</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center rounded-full bg-[#fff5f5] border border-stone-200 px-3 py-1 text-xs font-semibold text-[#2b2b2b]"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button as="a" href="#contact" variant="outline">
            Neem contact op voor meer projecten
          </Button>
        </div>
      </div>
    </section>
  );
}
