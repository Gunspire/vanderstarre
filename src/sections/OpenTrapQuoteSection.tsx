"use client";

import React from "react";
import { CheckCircle2, ChevronRight, MessageCircle, Mail, Smartphone } from "lucide-react";

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
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
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
                  <div className="py-6 sm:py-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-[#141414]">Demo: Wat Ricardo ontvangt</h3>
                      <div className="bg-[#C8181B]/10 text-[#C8181B] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Demo Modus</div>
                    </div>
                    
                    <p className="text-[#666666] mb-8 text-sm">
                      Zodra een klant het formulier invult, ontvangt Ricardo direct de gegevens. Dit kan via WhatsApp of E-mail, zodat hij de klant meteen kan bellen.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* WhatsApp Mock */}
                      <div className="rounded-2xl border border-stone-200 bg-[#E5DDD5] overflow-hidden flex flex-col shadow-sm">
                        <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                          <MessageCircle className="text-white w-5 h-5" />
                          <span className="text-white font-semibold">WhatsApp Notificatie</span>
                        </div>
                        <div className="p-4 flex-1">
                          <div className="bg-white rounded-lg p-3 shadow-sm text-[13px] leading-relaxed relative border-l-4 border-green-500">
                            <p><strong>Nieuwe Offerte Aanvraag 🚀</strong></p>
                            <p className="mt-1">Dienst: Open trap dichtmaken</p>
                            <p>Stootborden: {riserCount}</p>
                            <p>Model: {selectedModel.label}</p>
                            <p>Indicatieprijs: € {total.toFixed(2).replace(".", ",")}</p>
                            <div className="bg-stone-50 p-2 rounded mt-2 text-xs">
                              <p><strong>Klant:</strong> {name || "Jan de Vries"}</p>
                              <p><strong>Tel:</strong> {phone || "06 12345678"}</p>
                              <p><strong>Adres:</strong> {address || "2700 AB, 12"}</p>
                            </div>
                            <p className="text-blue-500 mt-2 font-medium">Bel klant direct</p>
                            <span className="text-[10px] text-gray-400 absolute bottom-2 right-2">Nu</span>
                          </div>
                        </div>
                      </div>

                      {/* Email Mock */}
                      <div className="rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-sm flex flex-col">
                        <div className="bg-[#fcfcfc] border-b border-stone-200 px-4 py-3 flex items-center gap-3">
                          <Mail className="text-[#666666] w-5 h-5" />
                          <span className="text-[#141414] font-semibold">E-mail Inbox</span>
                        </div>
                        <div className="p-4 text-sm flex-1">
                          <div className="flex items-center gap-2 mb-3 pb-3 border-b border-stone-100">
                            <div className="w-8 h-8 rounded-full bg-[#C8181B]/10 flex items-center justify-center font-bold text-[#C8181B]">W</div>
                            <div>
                              <p className="font-semibold text-[#141414]">Website Notificatie</p>
                              <p className="text-xs text-[#666666]">Aan: info@vanderstarre.nl</p>
                            </div>
                          </div>
                          <div className="space-y-1 text-[#141414]">
                            <p className="font-semibold mb-2">Aanvraag: {name || "Jan de Vries"}</p>
                            <p className="text-xs text-[#666666]">Beste Ricardo, er is een nieuwe aanvraag binnengekomen:</p>
                            <div className="bg-stone-50 p-3 rounded-lg mt-3 mb-3 border border-stone-100 text-xs">
                              <p><strong>Specificaties:</strong> {riserCount} stootborden, {selectedModel.label}</p>
                              <p><strong>Berekende prijs:</strong> € {total.toFixed(2).replace(".", ",")}</p>
                            </div>
                            <p className="text-xs">Telefoonnummer: <strong>{phone || "06 12345678"}</strong></p>
                            <p className="text-xs">Adres: <strong>{address || "2700 AB, 12"}</strong></p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 text-center border-t border-stone-200 pt-6">
                      <Button variant="outline" onClick={() => setFormStatus("idle")}>
                        Terug naar formulier
                      </Button>
                    </div>
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
                        <div className="space-y-1.5 sm:col-span-2">
                          <label className="text-sm font-semibold text-[#141414]">Adres (Postcode & Huisnummer) *</label>
                          <input
                            required
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-[#C8181B] focus:ring-2 focus:ring-[#C8181B]/20 outline-none transition-all bg-white"
                            placeholder="bijv. 2700 AB, 12"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-sm font-semibold text-[#141414]">Naam *</label>
                          <input
                            required
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-[#C8181B] focus:ring-2 focus:ring-[#C8181B]/20 outline-none transition-all bg-white"
                            placeholder="Volledige naam"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-sm font-semibold text-[#141414]">Telefoonnummer *</label>
                          <input
                            required
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-[#C8181B] focus:ring-2 focus:ring-[#C8181B]/20 outline-none transition-all bg-white"
                            placeholder="06 23 755 436"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 border-t-0">
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
