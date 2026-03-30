"use client";

import React from "react";
import { BadgeCheck, CheckCircle2, MapPin, Star } from "lucide-react";

import { Button } from "../components/Button";
import firstHeroImage from "./59a38914-530f-43a5-ae71-2f9f180ac7be.jpg";
import secondHeroImage from "./22c67cf7-e2c4-46f9-a848-fa147641752e.jpg";
import thirdHeroImage from "./a2179f0d-f5a3-4378-ad51-a25e0e9dfbcd.jpg";
import { cn } from "../lib/cn";

export function HeroSection() {
  const heroImages = [firstHeroImage.src, secondHeroImage.src, thirdHeroImage.src];
  const [heroImageIndex, setHeroImageIndex] = React.useState(0);
  const [formStatus, setFormStatus] = React.useState<"idle" | "submitting" | "success">(
    "idle"
  );

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setHeroImageIndex((currentIndex) => (currentIndex + 1) % heroImages.length);
    }, 5000);

    return () => window.clearInterval(id);
  }, [heroImages.length]);

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    window.setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-24 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 bg-white">
        {heroImages.map((imageSrc, index) => (
          <img
            key={imageSrc}
            src={imageSrc}
            alt=""
            aria-hidden="true"
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-[1800ms] ease-in-out",
              index === heroImageIndex ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/82 via-[#141414]/48 to-[#141414]/14" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,24,27,0.22),transparent_34%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/12 border border-white/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-[#C8181B]" />
                <span className="text-white text-sm font-medium">Zoetermeer &amp; omgeving</span>
              </div>

              <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Vakkundig timmerwerk voor
                <span className="text-[#C8181B]"> uw woning</span>
              </h1>

              <p className="text-lg text-white/88 mb-8 leading-relaxed max-w-xl">
                Ricardo van der Starre levert kwalitatieve timmerwerkzaamheden en onderhoud voor
                particulieren. Meer dan 5 jaar vakervaring, duidelijke communicatie en altijd met
                garantie.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button size="lg" as="a" href="#contact">
                  Gratis offerte aanvragen
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-[#141414]"
                  as="a"
                  href="#projects"
                >
                  Bekijk ons werk
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-8 border-t border-white/20">
                <div className="flex flex-col max-w-[220px]">
                  <p className="text-white/82 italic text-sm mb-2">
                    &ldquo;Ricardo heeft uitstekend werk geleverd. Netjes, op tijd en precies zoals afgesproken.&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#C8181B] rounded-full flex items-center justify-center text-xs font-bold text-white">
                      J
                    </div>
                    <span className="text-white/78 text-xs font-bold">J. de Vries, Zoetermeer</span>
                  </div>
                </div>
                <div className="h-8 w-px bg-white/20"></div>
                <div className="flex flex-col">
                  <div className="flex text-yellow-400 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-white/82 text-sm">4.9/5 op Werkspot</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="lg:col-span-4 bg-white/96 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 transform hover:scale-[1.01] transition-transform duration-300"
            id="contact"
          >
            {formStatus === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-[#141414] mb-2">Offerte aangevraagd!</h3>
                <p className="text-[#6E6660]">
                  Wij nemen binnen 24 uur contact met u op.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setFormStatus("idle")}
                >
                  Nog een aanvraag
                </Button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#141414]">Gratis offerte</h3>
                  <p className="text-[#6E6660] mt-1">Vrijblijvend. Snel antwoord.</p>
                </div>

                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-[#141414]">Naam</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-[#C8181B] focus:ring-2 focus:ring-[#C8181B]/20 outline-none transition-all"
                        placeholder="Volledige naam"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-[#141414]">Postcode</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-[#C8181B] focus:ring-2 focus:ring-[#C8181B]/20 outline-none transition-all"
                        placeholder="bijv. 2700 AB"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-[#141414]">Telefoonnummer</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-[#C8181B] focus:ring-2 focus:ring-[#C8181B]/20 outline-none transition-all"
                      placeholder="06 00 000 000"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-[#141414]">Gewenste dienst</label>
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

                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-[#141414]">Omschrijving</label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-[#C8181B] focus:ring-2 focus:ring-[#C8181B]/20 outline-none transition-all resize-none"
                      placeholder="Beschrijf kort de werkzaamheden..."
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full text-lg" disabled={formStatus === "submitting"}>
                    {formStatus === "submitting" ? "Versturen..." : "Gratis offerte aanvragen"}
                  </Button>

                  <p className="text-xs text-center text-[#6E6660] mt-4">
                    Uw gegevens zijn veilig. Wij delen nooit uw gegevens.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
