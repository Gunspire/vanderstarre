"use client";

import React from "react";
import { CheckCircle2, Mail, MessageCircle, Phone, ArrowRight } from "lucide-react";

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
    <section id="contact" className="bg-[#EBE9E4] py-16 lg:py-24 border-b border-stone-300">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-stretch bg-white border border-stone-300 shadow-sm">
          
          {/* Left Column - Contact Info */}
          <div className="w-full lg:w-2/5 p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-stone-300 bg-[#faf9f7] flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-stone-300 bg-white rounded-full w-max shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#C8181B]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#141414]">Neem contact op</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-light text-[#141414] tracking-tight leading-[1.1] mb-6">
              Kies wat voor u <br />
              <span className="font-bold">het makkelijkst is.</span>
            </h2>
            
            <p className="text-stone-500 text-base leading-relaxed mb-12">
              Bel, app of mail ons direct. Liever een formulier invullen? Dat kan rechts.
            </p>

            <div className="space-y-6">
              <a href="tel:+31623755436" className="group flex items-center gap-5 pb-6 border-b border-stone-200">
                <div className="w-12 h-12 rounded-full border border-stone-300 bg-white flex items-center justify-center group-hover:border-[#C8181B] transition-colors">
                  <Phone className="w-5 h-5 text-[#141414] group-hover:text-[#C8181B] transition-colors" />
                </div>
                <div>
                  <p className="text-[#141414] font-bold text-sm">Bel direct</p>
                  <p className="text-stone-500 text-xs mt-1">+31 6 23755436 <span className="text-stone-400 mx-1">•</span> Ma–Za bereikbaar</p>
                </div>
              </a>

              <a href="https://wa.me/31623755436?text=Hallo%20Ricardo%2C%20ik%20wil%20graag%20een%20offerte%20aanvragen." target="_blank" rel="noreferrer" className="group flex items-center gap-5 pb-6 border-b border-stone-200">
                <div className="w-12 h-12 rounded-full border border-stone-300 bg-white flex items-center justify-center group-hover:border-[#C8181B] transition-colors">
                  <MessageCircle className="w-5 h-5 text-[#141414] group-hover:text-[#C8181B] transition-colors" />
                </div>
                <div>
                  <p className="text-[#141414] font-bold text-sm">WhatsApp</p>
                  <p className="text-stone-500 text-xs mt-1">Stuur foto&apos;s door <span className="text-stone-400 mx-1">•</span> Reactie in 1-2 uur</p>
                </div>
              </a>

              <a href="mailto:info@vanderstarre.nl" className="group flex items-center gap-5">
                <div className="w-12 h-12 rounded-full border border-stone-300 bg-white flex items-center justify-center group-hover:border-[#C8181B] transition-colors">
                  <Mail className="w-5 h-5 text-[#141414] group-hover:text-[#C8181B] transition-colors" />
                </div>
                <div>
                  <p className="text-[#141414] font-bold text-sm">E-mail</p>
                  <p className="text-stone-500 text-xs mt-1">info@vanderstarre.nl <span className="text-stone-400 mx-1">•</span> Ma–Vr 8:00–18:00</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full lg:w-3/5 p-8 md:p-12 lg:p-16">
            {footerFormStatus === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mb-8">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-[#141414] mb-4">Aanvraag verstuurd</h3>
                <p className="text-stone-500 max-w-sm mx-auto mb-8">
                  Bedankt — wij nemen spoedig contact met u op om de details te bespreken.
                </p>
                <button
                  onClick={() => setFooterFormStatus("idle")}
                  className="text-[10px] font-bold uppercase tracking-widest text-[#141414] border-b border-[#141414] hover:text-[#C8181B] hover:border-[#C8181B] transition-colors pb-1"
                >
                  Nog een aanvraag
                </button>
              </div>
            ) : (
              <div className="h-full flex flex-col justify-center">
                <div className="mb-10 border-b border-stone-200 pb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#141414] mb-3">Vraag een offerte aan</h3>
                  <p className="text-stone-500 text-sm">Simpel formulier, snelle reactie.</p>
                </div>

                <form onSubmit={handleFooterQuoteSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Naam</label>
                      <input
                        type="text"
                        required
                        className="w-full px-0 py-3 border-b border-stone-300 focus:border-[#141414] bg-transparent outline-none transition-colors text-[#141414] placeholder-stone-300"
                        placeholder="Volledige naam"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Postcode</label>
                      <input
                        type="text"
                        required
                        className="w-full px-0 py-3 border-b border-stone-300 focus:border-[#141414] bg-transparent outline-none transition-colors text-[#141414] placeholder-stone-300"
                        placeholder="bijv. 2700 AB"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Telefoonnummer</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-0 py-3 border-b border-stone-300 focus:border-[#141414] bg-transparent outline-none transition-colors text-[#141414] placeholder-stone-300"
                        placeholder="06 00 000 000"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Dienst</label>
                      <select className="w-full px-0 py-3 border-b border-stone-300 focus:border-[#141414] bg-transparent outline-none transition-colors text-[#141414]">
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

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Korte omschrijving</label>
                    <textarea
                      rows={3}
                      className="w-full px-0 py-3 border-b border-stone-300 focus:border-[#141414] bg-transparent outline-none transition-colors text-[#141414] placeholder-stone-300 resize-none"
                      placeholder="Omschrijf kort wat u nodig heeft."
                    />
                  </div>

                  <div className="pt-6 flex justify-end">
                    <button 
                      type="submit" 
                      disabled={footerFormStatus === "submitting"}
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#141414] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#C8181B] transition-colors group disabled:opacity-70 disabled:hover:bg-[#141414]"
                    >
                      {footerFormStatus === "submitting" ? "Verzenden..." : "Aanvraag versturen"}
                      {footerFormStatus !== "submitting" && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}