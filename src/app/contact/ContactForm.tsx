"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "../../components/Button";

export function ContactForm() {
  const [formStatus, setFormStatus] = React.useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    window.setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <div className="p-10 md:p-16 lg:p-20 bg-white">
      {formStatus === "success" ? (
        <div className="py-16 text-center max-w-md mx-auto">
          <div className="mx-auto w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-3xl font-light text-[#2b2b2b] tracking-tight mb-4">Bericht <span className="font-bold">verstuurd</span></h3>
          <p className="text-stone-500 text-lg leading-relaxed mb-8">
            Bedankt voor uw bericht. Wij nemen zo snel mogelijk contact met u op om uw vraag of project te bespreken.
          </p>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-stone-300 hover:border-[#141414] text-[#141414] font-bold text-sm uppercase tracking-wider transition-colors"
            onClick={() => setFormStatus("idle")}
          >
            Nog een bericht sturen
          </button>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h3 className="text-3xl font-light text-[#2b2b2b] tracking-tight mb-4">
              Stuur een <span className="font-bold">bericht</span>
            </h3>
            <p className="text-stone-500 text-lg">
              Liever typen? Vul het formulier in en we reageren zo snel mogelijk.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-2 relative group">
                <label className="text-xs font-bold uppercase tracking-widest text-[#C8181B]">Naam</label>
                <input
                  type="text"
                  required
                  className="w-full px-0 py-3 border-b-2 border-stone-200 focus:border-[#141414] outline-none transition-colors bg-transparent text-lg text-[#141414] placeholder:text-stone-300"
                  placeholder="Uw volledige naam"
                />
              </div>
              <div className="space-y-2 relative group">
                <label className="text-xs font-bold uppercase tracking-widest text-[#C8181B]">E-mailadres</label>
                <input
                  type="email"
                  required
                  className="w-full px-0 py-3 border-b-2 border-stone-200 focus:border-[#141414] outline-none transition-colors bg-transparent text-lg text-[#141414] placeholder:text-stone-300"
                  placeholder="uw@email.nl"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-2 relative group">
                <label className="text-xs font-bold uppercase tracking-widest text-[#C8181B]">Telefoonnummer</label>
                <input
                  type="tel"
                  required
                  className="w-full px-0 py-3 border-b-2 border-stone-200 focus:border-[#141414] outline-none transition-colors bg-transparent text-lg text-[#141414] placeholder:text-stone-300"
                  placeholder="06 12 34 56 78"
                />
              </div>
              <div className="space-y-2 relative group">
                <label className="text-xs font-bold uppercase tracking-widest text-[#C8181B]">Woonplaats</label>
                <input
                  type="text"
                  className="w-full px-0 py-3 border-b-2 border-stone-200 focus:border-[#141414] outline-none transition-colors bg-transparent text-lg text-[#141414] placeholder:text-stone-300"
                  placeholder="bijv. Zoetermeer"
                />
              </div>
            </div>

            <div className="space-y-2 relative group">
              <label className="text-xs font-bold uppercase tracking-widest text-[#C8181B]">Bericht</label>
              <textarea
                rows={4}
                required
                className="w-full px-0 py-3 border-b-2 border-stone-200 focus:border-[#141414] outline-none transition-colors bg-transparent resize-none text-lg text-[#141414] placeholder:text-stone-300"
                placeholder="Typ hier uw vraag of omschrijf uw klus..."
              />
            </div>

            <div className="pt-8 flex justify-center">
              <button 
                type="submit" 
                disabled={formStatus === "submitting"}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#141414] hover:bg-[#C8181B] text-white font-bold text-sm uppercase tracking-wider transition-colors disabled:opacity-50 w-full sm:w-auto"
              >
                {formStatus === "submitting" ? "Verzenden..." : "Verstuur Bericht"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}