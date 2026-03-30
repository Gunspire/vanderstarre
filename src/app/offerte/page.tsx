import React from "react";
import { Metadata } from "next";

import { OpenTrapQuoteSection } from "../../sections/OpenTrapQuoteSection";
import { Footer } from "../../sections/Footer";

export const metadata: Metadata = {
  title: "Offerte Aanvragen | Van der Starre",
  description: "Bereken direct uw prijsindicatie en vraag een offerte aan.",
};

export default function OffertePage() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans flex flex-col">
      <main className="flex-1">
        <OpenTrapQuoteSection />
      </main>
      <Footer />
    </div>
  );
}