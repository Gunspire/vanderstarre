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
            question="Kan ik mijn open trap laten dichtmaken?"
            answer="Absoluut. Dit is een van onze meest gevraagde diensten. We plaatsen stootborden tussen de bestaande treden, wat niet alleen veiliger is (vooral voor kinderen), maar ook zorgt voor minder warmteverlies naar boven. Gebruik gerust onze Offertetool bovenaan de pagina voor een snelle prijsindicatie!"
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
    </section>
  );
}
