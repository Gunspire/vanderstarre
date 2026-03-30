import React from "react";

import { FAQItem } from "../components/FAQItem";
import { SectionHeading } from "../components/SectionHeading";

export function FaqSection() {
  return (
    <section id="faq" className="py-20 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Veelgestelde vragen" center>
          Heeft u vragen?
        </SectionHeading>

        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6 md:p-8 space-y-2">
          <FAQItem
            question="Kunt u een gratis offerte geven?"
            answer="Ja, wij bieden een vrijblijvende offerte aan. Na een kort gesprek of bezoek ontvangt u een duidelijke prijsopgave zonder verplichtingen."
          />
          <FAQItem
            question="Bent u KvK geregistreerd en verzekerd?"
            answer="Ja, wij zijn geregistreerd bij de Kamer van Koophandel (KvK: 76281019) en werken volledig verzekerd voor uw gemoedsrust."
          />
          <FAQItem
            question="Hoe lang duurt het plaatsen van een vlizotrap?"
            answer="Het plaatsen van een vlizotrap duurt gemiddeld een halve tot volledige werkdag, afhankelijk van de situatie. Wij geven vooraf een duidelijke planning."
          />
          <FAQItem
            question="Biedt u garantie op uw werk?"
            answer="Ja, wij bieden garantie op al onze werkzaamheden. De exacte garantieperiode wordt per opdracht vastgelegd en schriftelijk bevestigd."
          />
        </div>
      </div>
    </section>
  );
}
