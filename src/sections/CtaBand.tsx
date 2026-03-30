import React from "react";

import { Button } from "../components/Button";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden py-10 lg:py-12 bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[#fff5f5] via-white to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2b2b2b] mb-4">
          Heeft u een vakman nodig die u kunt vertrouwen?
        </h2>
        <p className="text-[#666666] text-base md:text-lg mb-6 max-w-2xl mx-auto">
          Van kleine reparaties tot grote projecten — Ricardo staat voor u klaar. Vraag vandaag nog een vrijblijvende offerte aan.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="white" size="md" as="a" href="#contact">
            Gratis offerte aanvragen
          </Button>
          <Button
            variant="outline"
            size="md"
            className="border-[#C8181B] text-[#C8181B] hover:bg-[#fff5f5]"
            as="a"
            href="tel:+31623755436"
          >
            Bel +31 6 23755436
          </Button>
        </div>
      </div>
    </section>
  );
}
