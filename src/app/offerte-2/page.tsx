import React from "react";
import { Metadata } from "next";

import { OpenTrapQuoteSection2 } from "../../sections/OpenTrapQuoteSection2";
import { Footer } from "../../sections/Footer";

export const metadata: Metadata = {
  title: "Offerte Aanvragen (Meerdere Trappen) | Van der Starre",
  description: "Bereken direct uw prijsindicatie en vraag een offerte aan voor het dichtmaken van een open trap.",
};

export default function Offerte2Page() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans flex flex-col">
      <main className="flex-1">
        <OpenTrapQuoteSection2 />
      </main>
      <Footer />
    </div>
  );
}
