import React from "react";
import { Star } from "lucide-react";

import { SectionHeading } from "../components/SectionHeading";
import reviewCameron from "./c024b121-4936-4fd7-90f2-cb089c561dab.jpg";
import reviewGouda from "./9dfc16fe-c9d5-4fe4-ac19-bd7c561310b0.jpg";
import reviewJeffrey from "./42ac996f-da0f-40cd-bd9f-eff781f3219b.jpg";
import werkspotLogo from "./images.png";

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Ervaringen" center>
          Wat klanten zeggen
        </SectionHeading>

        <div className="max-w-3xl mx-auto mb-10">
          <div className="rounded-2xl border border-stone-200 bg-white px-6 py-5 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-center justify-center overflow-hidden">
                  <img src={werkspotLogo.src} alt="Werkspot" className="h-10 w-10 rounded-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-extrabold text-[#141414] leading-none">4.9</span>
                    <div className="flex items-center text-yellow-500">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-[#6E6660]">gemiddeld op Werkspot</span>
                  </div>
                  <p className="text-sm text-[#6E6660] mt-1">
                    <span className="font-semibold text-[#141414]">20+ geverifieerde Werkspot reviews</span>
                    {" "}van particulieren in Zoetermeer &amp; omgeving.
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-stone-200 px-4 py-2 text-sm font-semibold text-[#141414] shadow-sm">
                <img src={werkspotLogo.src} alt="Werkspot" className="h-5 w-5 rounded-full object-cover" />
                Geverifieerd op Werkspot
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              text: "Top! Ricardo heeft goed werk geleverd met mijn vloeren en een aantal andere reparaties. Ik zou hem zeker weer bellen.",
              author: "Cameron",
              location: "Rotterdam",
              date: "11 jan 2025",
              job: "Vloer egaliseren: 12 m2",
              imageSrc: reviewCameron.src,
            },
            {
              text: "Ricardo kwam op de afgesproken momenten langs om de klus te bekijken en vervolgens uit te voeren. Hij werkt erg netjes en snel.",
              author: "Werkspot-gebruiker uit Gouda",
              location: "Gouda",
              date: "12 jun 2025",
              job: "Diverse kleine klussen: Trapkast creeren, afscheiding trap/woonkamer",
              imageSrc: reviewGouda.src,
            },
            {
              text: "Prettig en direct contact met Ricardo. Uitvoering super en erg netjes gedaan. Wij zijn er erg blij mee!",
              author: "Jeffrey",
              location: "Kwintsheul",
              date: "28 aug 2025",
              job: "Trap plaatsen of renoveren: Installeren; Vlizotrap installeren",
              imageSrc: reviewJeffrey.src,
            },
          ].map((review, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-[#fde8e8] rounded-full flex items-center justify-center text-[#C8181B] font-bold">
                    {review.author[0]}
                  </div>
                  <div>
                    <p className="text-[#141414] font-bold text-sm leading-tight">{review.author}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-semibold text-[#6E6660]">Geverifieerde Werkspot review</span>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center rounded-full bg-[#fff5f5] border border-stone-200 px-3 py-1.5">
                  <span className="text-xs font-semibold text-[#141414]">Werkspot</span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-1 text-yellow-500">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-[#6E6660]">{review.date}</span>
              </div>

              <div className="mt-4 rounded-2xl border border-stone-200 bg-[#fafafa] aspect-[4/3] overflow-hidden">
                <img
                  src={review.imageSrc}
                  alt={`${review.author} review foto`}
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="text-[#141414] mt-4 leading-relaxed">&ldquo;{review.text}&rdquo;</p>

              <p className="text-sm text-[#6E6660] mt-4">{review.job}</p>

              <div className="mt-5 flex items-center justify-between text-xs text-[#6E6660]">
                <span className="font-semibold text-[#6E6660]">{review.location}</span>
                <span>Geplaatst op Werkspot</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
