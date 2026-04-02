"use client";

import React from "react";
import { CheckCircle2, ChevronRight, MessageCircle, Mail, Smartphone, Plus, Trash2 } from "lucide-react";

import { Button } from "../components/Button";
import { SectionHeading } from "../components/SectionHeading";
import stairAfter from "./image (2).png";

const PRICE_PER_STEP = 12.5;

const STAIR_TYPES = [
  { value: "recht", label: "Rechte trap", surcharge: 0 },
  { value: "kwartslag", label: "Kwartslag trap", surcharge: 25 },
  { value: "dubbele-kwartslag", label: "Dubbele kwartslag", surcharge: 50 },
];

const FLOORS = [
  { value: "begane-grond", label: "Begane grond" },
  { value: "1e-verdieping", label: "1e Verdieping" },
  { value: "hoger", label: "Hoger" },
];

interface Stair {
  id: string;
  steps: number;
  floor: string;
  type: string;
}

export function OpenTrapQuoteSection2() {
  const [stairs, setStairs] = React.useState<Stair[]>([
    { id: "stair-1", steps: 13, floor: "begane-grond", type: "recht" },
  ]);
  
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [formStatus, setFormStatus] = React.useState<"idle" | "submitting" | "success">("idle");

  const addStair = () => {
    setStairs([
      ...stairs,
      { id: `stair-${Date.now()}`, steps: 13, floor: "begane-grond", type: "recht" },
    ]);
  };

  const removeStair = (id: string) => {
    if (stairs.length > 1) {
      setStairs(stairs.filter((s) => s.id !== id));
    }
  };

  const updateStair = (id: string, field: keyof Stair, value: string | number) => {
    setStairs(stairs.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
  };

  // Calculate total
  const total = stairs.reduce((sum, stair) => {
    const selectedType = STAIR_TYPES.find((t) => t.value === stair.type) ?? STAIR_TYPES[0];
    return sum + stair.steps * PRICE_PER_STEP + selectedType.surcharge;
  }, 0);

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
          Open trap dichtmaken
        </SectionHeading>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-[#666666] leading-relaxed">
            Wilt u uw open trap transformeren voor meer veiligheid, warmte en een moderne uitstraling? 
            Wij maken uw trap vakkundig dicht met hoogwaardige stootborden van 15 mm dik gegrond multiplex. 
            Deze zijn extra stevig en direct overschilderbaar, zodat u de trap volledig naar eigen smaak kunt afwerken.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl overflow-hidden border border-stone-200 bg-white shadow-sm">
              <div className="relative aspect-[4/4.6]">
                <img
                  src={stairAfter.src}
                  alt="Open trap dichtgemaakt met stootborden"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/65 to-transparent">
                  <div className="inline-flex rounded-full bg-white px-3 py-1 text-sm font-bold text-[#C8181B]">
                    Prijsindicatie € {total.toFixed(2).replace(".", ",")}
                  </div>
                  <p className="mt-3 text-white font-semibold">Open trap(pen) dichtmaken</p>
                  <p className="text-white/80 text-sm mt-1">Inclusief stootborden en montage.</p>
                </div>
              </div>
            </div>

            {/* Waarom kiezen voor een dichte trap? */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#141414] mb-4">Waarom een dichte trap?</h3>
              <ul className="space-y-3 text-sm text-[#666666]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                  <span><strong>Optimale Veiligheid:</strong> Geen open ruimtes meer, veilig voor kinderen en huisdieren.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                  <span><strong>Meer Comfort & Warmte:</strong> Stopt de tochtstroom, houdt de warmte beneden en werkt geluiddempend.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                  <span><strong>Luxe Uitstraling:</strong> Oogt rustiger en luxer voor elk interieur.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                  <span><strong>Extra Ruimte:</strong> Creëer een praktische trapkast of opbergruimte.</span>
                </li>
              </ul>
            </div>
            
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
               <h3 className="text-xl font-bold text-[#141414] mb-4">Onze werkwijze</h3>
               <p className="text-sm text-[#666666] leading-relaxed">
                 Nadat u akkoord bent gegaan met de offerte, plannen we samen direct een datum in. 
                 Vlak voordat we aan de slag gaan, sturen we u een herinnering. 
                 Tringgg! De deurbel gaat, wij zijn er en gaan direct voor u aan de slag.
               </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-stone-200 bg-white shadow-xl overflow-hidden">
              <div className="p-6 sm:p-8">
                {formStatus === "success" ? (
                  <div className="py-6 sm:py-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-[#141414]">Offerte-aanvraag verzonden!</h3>
                      <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Succes</div>
                    </div>
                    
                    <p className="text-[#666666] mb-8 text-sm">
                      Bedankt voor uw aanvraag, {name}. We hebben een bevestiging gestuurd naar <strong>{email}</strong> met een overzicht voor de aanvraag van {stairs.length} trap(pen). 
                      Ricardo neemt zo snel mogelijk contact met u op via {phone} om de details te bespreken en een afspraak in te plannen.
                    </p>

                    <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-8">
                      <h4 className="font-bold text-[#141414] mb-4">Overzicht van uw aanvraag:</h4>
                      <ul className="space-y-4 text-sm text-[#666666]">
                        {stairs.map((stair, index) => (
                          <li key={stair.id} className="pb-4 border-b border-stone-200 last:border-0 last:pb-0">
                            <strong>Trap {index + 1}:</strong> {stair.steps} treden, {FLOORS.find(f => f.value === stair.floor)?.label}, {STAIR_TYPES.find(t => t.value === stair.type)?.label}.
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-4 border-t border-stone-200 flex justify-between font-bold text-lg text-[#141414]">
                        <span>Totaal indicatie:</span>
                        <span className="text-[#C8181B]">€ {total.toFixed(2).replace(".", ",")}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <Button variant="outline" onClick={() => setFormStatus("idle")}>
                        Nieuwe aanvraag doen
                      </Button>
                      <a href="/offerte-2/email-preview" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#141414] hover:bg-[#333333] text-white font-bold text-sm transition-all shadow-md">
                        <Mail className="w-4 h-4" /> Bekijk E-mail Voorbeeld
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[#141414]">Hoe werkt onze offertetool?</h3>
                      <p className="text-[#666666] mt-1 text-sm">Bereken in een paar stappen de exacte materialen voor uw trap.</p>
                    </div>

                    <div className="space-y-6">
                      {stairs.map((stair, index) => (
                        <div key={stair.id} className="rounded-2xl border border-stone-200 bg-[#fafafa] p-5 relative">
                          <div className="flex justify-between items-center mb-4 border-b border-stone-200 pb-3">
                            <h4 className="font-bold text-[#141414]">Trap {index + 1} details</h4>
                            {stairs.length > 1 && (
                              <button 
                                type="button" 
                                onClick={() => removeStair(stair.id)}
                                className="text-red-500 hover:text-red-700 flex items-center gap-1 text-xs font-semibold"
                              >
                                <Trash2 className="w-4 h-4" /> Verwijder
                              </button>
                            )}
                          </div>
                          
                          <div className="grid sm:grid-cols-2 gap-5">
                            {/* Stap 1: Aantal treden */}
                            <div className="space-y-1.5">
                              <label className="text-sm font-semibold text-[#141414]">Stap 1: Aantal treden *</label>
                              <select
                                value={stair.steps}
                                onChange={(e) => updateStair(stair.id, "steps", Number(e.target.value))}
                                className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-[#C8181B] focus:ring-2 focus:ring-[#C8181B]/20 outline-none transition-all bg-white"
                              >
                                {[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((num) => (
                                  <option key={num} value={num}>{num} treden</option>
                                ))}
                              </select>
                            </div>

                            {/* Stap 2: Verdieping */}
                            <div className="space-y-1.5">
                              <label className="text-sm font-semibold text-[#141414]">Stap 2: Verdieping *</label>
                              <select
                                value={stair.floor}
                                onChange={(e) => updateStair(stair.id, "floor", e.target.value)}
                                className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-[#C8181B] focus:ring-2 focus:ring-[#C8181B]/20 outline-none transition-all bg-white"
                              >
                                {FLOORS.map(f => (
                                  <option key={f.value} value={f.value}>{f.label}</option>
                                ))}
                              </select>
                            </div>

                            {/* Stap 3: Type trap */}
                            <div className="space-y-1.5 sm:col-span-2">
                              <label className="text-sm font-semibold text-[#141414]">Stap 3: Type trap *</label>
                              <select
                                value={stair.type}
                                onChange={(e) => updateStair(stair.id, "type", e.target.value)}
                                className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-[#C8181B] focus:ring-2 focus:ring-[#C8181B]/20 outline-none transition-all bg-white"
                              >
                                {STAIR_TYPES.map(t => (
                                  <option key={t.value} value={t.value}>{t.label}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Stap 4: Meerdere trappen */}
                    <div className="flex justify-center border-b border-stone-200 pb-8 pt-2">
                      <button 
                        type="button" 
                        onClick={addStair}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-stone-200 hover:border-[#C8181B] hover:text-[#C8181B] font-bold text-sm text-[#141414] transition-all bg-white"
                      >
                        <Plus className="w-4 h-4" /> Stap 4: Extra trap dichtmaken
                      </button>
                    </div>

                    <div className="pt-4 space-y-4">
                      <h4 className="font-bold text-[#141414]">Uw Contactgegevens</h4>
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
                        <div className="space-y-1.5 sm:col-span-2">
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
                          <label className="text-sm font-semibold text-[#141414]">E-mailadres *</label>
                          <input
                            required
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-[#C8181B] focus:ring-2 focus:ring-[#C8181B]/20 outline-none transition-all bg-white"
                            placeholder="uw@email.nl"
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

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-6 border-t border-stone-200">
                      <div>
                        <p className="text-lg font-extrabold text-[#C8181B]">Totaal: € {total.toFixed(2).replace(".", ",")}</p>
                        <p className="text-xs text-[#666666]">Dit is een simpele prijsindicatie.</p>
                      </div>
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
