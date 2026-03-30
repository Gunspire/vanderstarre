"use client";

import React from "react";
import { CheckCircle2, ChevronRight } from "lucide-react";

import { Button } from "../components/Button";
import { SectionHeading } from "../components/SectionHeading";
import stairAfter from "./image (2).png";

const RISER_OPTIONS = [12, 14, 16, 18, 20];
const PRICE_PER_RISER = 12.5;

const STAIR_MODELS = [
  { value: "rechte-trap", label: "Rechte trap", surcharge: 0 },
  { value: "een-kwart-draaitrap", label: "Een kwart draaitrap", surcharge: 25 },
  { value: "twee-kwart-draaitrap", label: "Twee kwart draaitrap", surcharge: 50 },
];

export function OpenTrapQuoteSection() {
  const [riserCount, setRiserCount] = React.useState(16);
  const [stairModel, setStairModel] = React.useState(STAIR_MODELS[0].value);
  const [formStatus, setFormStatus] = React.useState<"idle" | "submitting" | "success">("idle");

  const selectedModel = STAIR_MODELS.find((item) => item.value === stairModel) ?? STAIR_MODELS[0];
  const materialSubtotal = riserCount * PRICE_PER_RISER;
  const total = materialSubtotal + selectedModel.surcharge;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setFormStatus("submitting");

    window.setTimeout(() => {
      setFormStatus("success");
    }, 1200);
  };

  return (
    <section className="py-20 lg:py-24 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Offertetool" center>
          Kies uw dienst
        </SectionHeading>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Open trap dichtmaken", active: true },
            { label: "Vlizotrap plaatsen", active: false },
            { label: "Trapkast maken", active: false },
            { label: "Deuren afhangen", active: false },
          ].map((service) => (
            <div
              key={service.label}
              className={
                service.active
                  ? "rounded-2xl border-2 border-[#C8181B] bg-white px-5 py-4 shadow-sm"
                  : "rounded-2xl border border-stone-200 bg-white/70 px-5 py-4 opacity-65"
              }
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-bold text-[#141414]">{service.label}</p>
                  <p className="text-sm text-[#666666] mt-1">
                    {service.active ? "Nu beschikbaar" : "Binnenkort beschikbaar"}
                  </p>
                </div>
                {service.active ? (
                  <div className="h-9 w-9 rounded-full bg-[#fff5f5] flex items-center justify-center">
                    <ChevronRight className="w-5 h-5 text-[#C8181B]" />
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-stone-200 bg-white shadow-sm">
              <div className="relative aspect-[4/4.6]">
                <img
                  src={stairAfter.src}
                  alt="Open trap dichtgemaakt met stootborden"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/65 to-transparent">
                  <div className="inline-flex rounded-full bg-white px-3 py-1 text-sm font-bold text-[#C8181B]">
                    Vanaf € {total.toFixed(2).replace(".", ",")}
                  </div>
                  <p className="mt-3 text-white font-semibold">Open trap dichtmaken met stootborden</p>
                  <p className="text-white/80 text-sm mt-1">Simpel ingevuld, snel een prijsindicatie.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[#666666]">Stap 1: {riserCount} stootborden</span>
                  <span className="font-semibold text-[#141414]">
                    € {materialSubtotal.toFixed(2).replace(".", ",")}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[#666666]">Stap 2: {selectedModel.label}</span>
                  <span className="font-semibold text-[#141414]">
                    € {selectedModel.surcharge.toFixed(2).replace(".", ",")}
                  </span>
                </div>
                <div className="border-t border-stone-200 pt-4 flex items-center justify-between gap-4">
                  <span className="text-base font-bold text-[#141414]">Prijsindicatie</span>
                  <span className="text-xl font-extrabold text-[#C8181B]">
                    € {total.toFixed(2).replace(".", ",")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-stone-200 bg-white shadow-xl overflow-hidden">
              <div className="p-6 sm:p-8">
                {formStatus === "success" ? (
                  <div className="py-10 text-center">
                    <div className="mx-auto w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="mt-5 text-2xl font-bold text-[#141414]">Offerte-aanvraag verstuurd</h3>
                    <p className="mt-2 text-[#666666] max-w-md mx-auto">
                      Bedankt. Ricardo neemt contact met u op om de trap en uw wensen door te nemen.
                    </p>
                    <Button variant="outline" className="mt-6" onClick={() => setFormStatus("idle")}>
                      Nieuwe aanvraag
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[#141414]">Maak uw offerte-aanvraag</h3>
                      <p className="text-[#666666] mt-1">In 3 simpele stappen.</p>
                    </div>

                    <div className="rounded-2xl border border-stone-200 bg-[#fafafa] p-5">
                      <p className="text-sm font-bold text-[#141414] mb-3">Stap 1</p>
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-[#141414]">Aantal stootborden *</label>
                        <select
                          value={riserCount}
                          onChange={(event) => setRiserCount(Number(event.target.value))}
                          className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-[#C8181B] focus:ring-2 focus:ring-[#C8181B]/20 outline-none transition-all bg-white"
                        >
                          {RISER_OPTIONS.map((count) => (
                            <option key={count} value={count}>
                              {count} (€ {PRICE_PER_RISER.toFixed(2).replace(".", ",")})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-stone-200 bg-[#fafafa] p-5">
                      <p className="text-sm font-bold text-[#141414] mb-3">Stap 2</p>
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-[#141414]">Kies het juiste model trap *</label>
                        <select
                          value={stairModel}
                          onChange={(event) => setStairModel(event.target.value)}
                          className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-[#C8181B] focus:ring-2 focus:ring-[#C8181B]/20 outline-none transition-all bg-white"
                        >
                          {STAIR_MODELS.map((item) => (
                            <option key={item.value} value={item.value}>
                              {item.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-stone-200 bg-[#fafafa] p-5">
                      <p className="text-sm font-bold text-[#141414] mb-3">Stap 3</p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-sm font-semibold text-[#141414]">Naam *</label>
                          <input
                            required
                            type="text"
                            className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-[#C8181B] focus:ring-2 focus:ring-[#C8181B]/20 outline-none transition-all bg-white"
                            placeholder="Volledige naam"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-sm font-semibold text-[#141414]">Telefoonnummer *</label>
                          <input
                            required
                            type="tel"
                            className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-[#C8181B] focus:ring-2 focus:ring-[#C8181B]/20 outline-none transition-all bg-white"
                            placeholder="06 23 755 436"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
                      <p className="text-xs text-[#666666]">Dit is een simpele prijsindicatie.</p>
                      <Button type="submit">Offerte aanvragen</Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
