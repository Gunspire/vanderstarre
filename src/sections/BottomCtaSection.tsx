"use client";

import React from "react";
import { CheckCircle2, Mail, MessageCircle, Phone } from "lucide-react";

import { Button } from "../components/Button";

export function BottomCtaSection() {
  const [footerFormStatus, setFooterFormStatus] = React.useState<
    "idle" | "submitting" | "success"
  >("idle");

  const handleFooterQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFooterFormStatus("submitting");
    window.setTimeout(() => {
      setFooterFormStatus("success");
    }, 1500);
  };

  return (
    <section className="relative overflow-hidden py-16 lg:py-20 bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[#fff5f5] via-white to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 text-[#2b2b2b]">
            <p className="text-[#C8181B] font-semibold tracking-wider text-sm uppercase mb-3">Neem contact op</p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Kies wat voor u het makkelijkst is</h2>
            <p className="text-[#666666] mt-4 text-lg leading-relaxed">
              Bel, app of mail ons direct. Liever een formulier invullen? Dat kan rechts.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="tel:+31623755436"
                className="group rounded-2xl bg-white border border-stone-200 px-5 py-4 hover:bg-[#fff5f5] transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl border border-[#f3c4c5] bg-[#fff5f5] flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#C8181B] shrink-0" />
                  </div>
                  <div>
                    <p className="text-[#2b2b2b] font-bold leading-tight">Bel direct</p>
                    <p className="text-[#666666] text-sm mt-1">+31 6 23755436</p>
                    <p className="text-[#888888] text-xs mt-1">Ma–Za bereikbaar</p>
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/31623755436?text=Hallo%20Ricardo%2C%20ik%20wil%20graag%20een%20offerte%20aanvragen."
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl bg-white border border-stone-200 px-5 py-4 hover:bg-[#fff5f5] transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl border border-[#f3c4c5] bg-[#fff5f5] flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-[#C8181B] shrink-0" />
                  </div>
                  <div>
                    <p className="text-[#2b2b2b] font-bold leading-tight">WhatsApp</p>
                    <p className="text-[#666666] text-sm mt-1">Stuur foto&apos;s en een omschrijving</p>
                    <p className="text-[#888888] text-xs mt-1">Reactie binnen 1–2 uur</p>
                  </div>
                </div>
              </a>

              <a
                href="mailto:[PLACEHOLDER]"
                className="group rounded-2xl bg-white border border-stone-200 px-5 py-4 hover:bg-[#fff5f5] transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl border border-[#f3c4c5] bg-[#fff5f5] flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#C8181B] shrink-0" />
                  </div>
                  <div>
                    <p className="text-[#2b2b2b] font-bold leading-tight">E-mail</p>
                    <p className="text-[#666666] text-sm mt-1">[PLACEHOLDER]</p>
                    <p className="text-[#888888] text-xs mt-1">
                      Ma&ndash;Vr 8:00&ndash;18:00
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/15 bg-white/90 backdrop-blur shadow-2xl overflow-hidden">
              <div className="p-6 sm:p-8">
                {footerFormStatus === "success" ? (
                  <div className="py-10 text-center">
                    <div className="mx-auto w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="mt-5 text-2xl font-bold text-[#141414]">Aanvraag verstuurd</h3>
                    <p className="mt-2 text-[#6E6660]">
                      Bedankt — wij nemen spoedig contact met u op om de details te bespreken.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6"
                      onClick={() => setFooterFormStatus("idle")}
                    >
                      Nog een aanvraag
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-[#141414]">Vraag een offerte aan</h3>
                      <p className="text-[#6E6660] mt-1">Simpel formulier, snelle reactie.</p>
                    </div>

                    <form onSubmit={handleFooterQuoteSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-sm font-semibold text-[#141414]">Naam</label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-[#C8181B] focus:ring-2 focus:ring-[#C8181B]/20 outline-none transition-all bg-white"
                            placeholder="Volledige naam"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-sm font-semibold text-[#141414]">Postcode</label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-[#C8181B] focus:ring-2 focus:ring-[#C8181B]/20 outline-none transition-all bg-white"
                            placeholder="bijv. 2700 AB"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-sm font-semibold text-[#141414]">Telefoonnummer</label>
                          <input
                            type="tel"
                            required
                            className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-[#C8181B] focus:ring-2 focus:ring-[#C8181B]/20 outline-none transition-all bg-white"
                            placeholder="06 00 000 000"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-sm font-semibold text-[#141414]">Dienst</label>
                          <select className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-[#C8181B] focus:ring-2 focus:ring-[#C8181B]/20 outline-none transition-all bg-white">
                            <option>Vlizotrap plaatsen</option>
                            <option>Binnenwand plaatsen</option>
                            <option>Trap plaatsen of renoveren</option>
                            <option>Trapkast maken</option>
                            <option>Traptreden dicht maken</option>
                            <option>Trapleuningen plaatsen</option>
                            <option>Deuren repareren</option>
                            <option>Veranda / overkapping</option>
                            <option>Plafond gipsen</option>
                            <option>Wanden gipsen</option>
                            <option>Egaliseren</option>
                            <option>Velux dakraam vervangen</option>
                            <option>Deurkozijnen plaatsen of vervangen</option>
                            <option>Deuren afhangen</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-[#141414]">Korte omschrijving</label>
                        <textarea
                          rows={5}
                          className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-[#C8181B] focus:ring-2 focus:ring-[#C8181B]/20 outline-none transition-all bg-white resize-none"
                          placeholder="Omschrijf kort wat u nodig heeft."
                        />
                      </div>

                      <div className="flex justify-end pt-2">
                        <Button type="submit" disabled={footerFormStatus === "submitting"}>
                          {footerFormStatus === "submitting" ? "Verzenden..." : "Aanvraag versturen"}
                        </Button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
