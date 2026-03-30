"use client";

import React from "react";

import { Button } from "../components/Button";
import { ServiceCard } from "../components/ServiceCard";
import { SectionHeading } from "../components/SectionHeading";

export function ServicesSection() {
  const [showAll, setShowAll] = React.useState(false);

  const services = [
    {
      title: "Traptreden dichtmaken",
      description:
        "Traptreden netjes dichtmaken met stootborden voor een veilige en strakke uitstraling.",
    },
    {
      title: "Vlizotrap plaatsen",
      description:
        "Een vlizotrap plaatsen zorgt voor eenvoudige toegang tot de zolder. Netjes ingebouwd en vakkundig afgewerkt.",
    },
    {
      title: "Binnenwand plaatsen",
      description:
        "Ruimte efficient indelen met een nieuwe binnenwand. Strak en duurzaam geplaatst op maat.",
    },
    {
      title: "Trap plaatsen of renoveren",
      description:
        "Nieuwe trap plaatsen of bestaande trap renoveren. Veilig, sterk en mooi afgewerkt.",
    },
    {
      title: "Trapkast maken",
      description: "Maximaal gebruik van de ruimte onder de trap met een op maat gemaakte trapkast.",
    },
    {
      title: "Trapleuningen plaatsen",
      description:
        "Trapleuning plaatsen voor extra veiligheid en een mooie uitstraling in uw woning.",
    },
    {
      title: "Deuren repareren",
      description: "Slecht sluitende of beschadigde deuren snel en vakkundig gerepareerd zonder gedoe.",
    },
    {
      title: "Veranda / overkapping",
      description:
        "Overkapping of veranda plaatsen voor meer woonplezier en beschutting in de tuin.",
    },
    {
      title: "Plafond gipsen",
      description:
        "Plafond netjes gipsen voor een strakke, egale afwerking klaar voor verf of behang.",
    },
    {
      title: "Wanden gipsen",
      description:
        "Wanden strak gipsen voor een nette basis en hoogwaardige afwerking in iedere ruimte.",
    },
    {
      title: "Egaliseren",
      description:
        "Vloer of wand egaliseren voor een perfecte, vlakke ondergrond en strakke eindafwerking.",
    },
    {
      title: "Velux dakraam vervangen",
      description:
        "Lekkend of verouderd dakraam snel en vakkundig vervangen door een nieuw Velux raam.",
    },
    {
      title: "Deurkozijnen plaatsen of vervangen",
      description:
        "Nieuw kozijn plaatsen of oud kozijn vervangen. Strak afgewerkt en professioneel.",
    },
    {
      title: "Deuren afhangen",
      description:
        "Binnendeuren vakkundig afhangen voor een soepele en rechte passing in elk kozijn.",
    },
  ];

  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <section id="services" className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading subtitle="Onze expertise" center>
        Timmerwerkzaamheden &amp; Onderhoud
      </SectionHeading>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleServices.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            linkLabel="Meer info"
            href="#contact"
          />
        ))}
      </div>

      {!showAll && (
        <div className="mt-10 flex justify-center">
          <Button variant="outline" onClick={() => setShowAll(true)}>
            Laat alle diensten zien
          </Button>
        </div>
      )}
    </section>
  );
}
