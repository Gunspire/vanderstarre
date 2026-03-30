import React from "react";
import {
  Award,
  BadgeCheck,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

import { SectionHeading } from "../components/SectionHeading";
import trustSectionImage from "./59a38914-530f-43a5-ae71-2f9f180ac7be.jpg";

export function WhyChooseUs() {
  return (
    <section className="bg-white py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <SectionHeading subtitle="Waarom Van der Starre" className="mb-8">
              Gebouwd op vakmanschap &amp; vertrouwen
            </SectionHeading>

            <p className="text-[#6E6660] leading-relaxed text-base md:text-lg max-w-2xl">
              Kwalitatief vakwerk, eerlijke prijzen en een vakman die u daadwerkelijk kunt vertrouwen.
              Ricardo van der Starre behandelt uw woning als zijn eigen — en staat voor elk project
              met garantie garant.
            </p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-4 gap-3 max-w-2xl">
              {[
                { value: "5+", label: "Jaar ervaring", icon: Award },
                { value: "4.9", label: "Gemiddelde beoordeling", icon: Star },
                { value: "20+", label: "Tevreden klanten", icon: Users },
                { value: "100%", label: "Garantie op werk", icon: CheckCircle2 },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-stone-200 bg-white px-4 py-3 shadow-sm flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#fef2f2] border border-[#fde8e8] flex items-center justify-center shrink-0">
                    <s.icon className="w-5 h-5 text-[#C8181B]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xl font-extrabold text-[#141414] leading-none">{s.value}</p>
                    <p className="text-xs font-semibold text-[#6E6660] mt-1">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#fde8e8] flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-[#C8181B]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#141414]">KvK geregistreerd &amp; verzekerd</p>
                    <p className="text-[#6E6660] text-sm mt-1">
                      KvK: 76281019 — transparant en aanspreekbaar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#fde8e8] flex items-center justify-center">
                    <BadgeCheck className="w-5 h-5 text-[#C8181B]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#141414]">Schriftelijke garantie</p>
                    <p className="text-[#6E6660] text-sm mt-1">
                      Alle werkzaamheden worden geleverd met garantie.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#fde8e8] flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-[#C8181B]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#141414]">Geen verrassingen</p>
                    <p className="text-[#6E6660] text-sm mt-1">
                      Duidelijke offerte vooraf, heldere communicatie en afgesproken prijs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#fde8e8] flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#C8181B]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#141414]">Respect voor uw woning</p>
                    <p className="text-[#6E6660] text-sm mt-1">
                      Nette werkplek, zorgvuldige toegang en oplevering zoals afgesproken.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-stone-200 bg-white shadow-lg overflow-hidden">
              <div className="aspect-[4/5] relative">
                <img
                  src={trustSectionImage.src}
                  alt="Scheidingswand project van Van der Starre"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
