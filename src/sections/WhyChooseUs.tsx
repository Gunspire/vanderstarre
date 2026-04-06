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

import trustSectionImage from "./image (2).png";

export function WhyChooseUs() {
  return (
    <section className="w-full flex flex-col lg:flex-row items-stretch border-b border-stone-300">
      
      {/* Image Side (Left) */}
      <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto bg-stone-100 border-b lg:border-b-0 lg:border-r border-stone-300">
        <img
          src={trustSectionImage.src}
          alt="Open trap dichtmaken project van Van der Starre"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.1)] pointer-events-none" />
      </div>

      {/* Text Side (Right) */}
      <div className="w-full lg:w-1/2 bg-white p-6 md:p-10 lg:p-14 flex flex-col justify-center relative overflow-hidden">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-stone-200 bg-stone-50 rounded-full w-max">
            <div className="w-2 h-2 rounded-full bg-[#C8181B]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#141414]">Waarom Van der Starre</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#2b2b2b] tracking-tight leading-[1.1] mb-6">
            Gebouwd op <br/>
            <span className="font-bold">vakmanschap</span> &amp; <span className="font-bold">vertrouwen.</span>
          </h2>

          <p className="text-stone-500 text-base mb-8 max-w-lg leading-relaxed">
            Kwalitatief vakwerk, eerlijke prijzen en een vakman die u daadwerkelijk kunt vertrouwen.
            Wij behandelen uw woning als onze eigen — en staan voor elk project met garantie garant.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8 max-w-lg">
            {[
              { value: "5+", label: "Jaar Ervaring", icon: Award },
              { value: "4.9", label: "Beoordeling", icon: Star },
              { value: "20+", label: "Projecten", icon: Users },
              { value: "100%", label: "Garantie", icon: CheckCircle2 },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <s.icon className="w-5 h-5 text-[#C8181B]" />
                  <span className="text-2xl font-black text-[#141414] tracking-tight">{s.value}</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200 max-w-xl">
            {[
              {
                title: "KvK geregistreerd & verzekerd",
                desc: "Transparant en aanspreekbaar. (KvK: 76281019)",
                icon: ShieldCheck
              },
              {
                title: "Schriftelijke garantie",
                desc: "Zekerheid op al onze werkzaamheden.",
                icon: BadgeCheck
              },
              {
                title: "Geen verrassingen",
                desc: "Heldere communicatie en afgesproken prijs.",
                icon: CheckCircle2
              },
              {
                title: "Respect voor uw woning",
                desc: "Nette werkplek en zorgvuldige oplevering.",
                icon: Clock
              }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-10 h-10 shrink-0 bg-stone-50 rounded-full flex items-center justify-center border border-stone-200">
                  <item.icon className="w-4 h-4 text-[#C8181B]" />
                </div>
                <div className="pt-0.5">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#141414] mb-1">{item.title}</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}