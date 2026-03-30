import React from "react";
import {
  Award,
  BadgeCheck,
  CheckCircle2,
  ShieldCheck,
  ThumbsUp,
  Wrench,
} from "lucide-react";
import werkspotLogo from "./images.png";

export function TrustStrip() {
  const items: Array<
    | { text: string; icon: React.ComponentType<{ className?: string }> }
    | { text: string; imageSrc: string; imageAlt: string }
  > = [
    { imageSrc: werkspotLogo.src, imageAlt: "Werkspot", text: "Geverifieerd op Werkspot" },
    { icon: ShieldCheck, text: "KvK geregistreerd" },
    { imageSrc: werkspotLogo.src, imageAlt: "Werkspot", text: "4.9 op Werkspot" },
    { icon: CheckCircle2, text: "Garantie op werk" },
    { icon: ThumbsUp, text: "5+ jaar vakervaring" },
    { icon: Wrench, text: "Vakkundig timmerwerk" },
    { icon: BadgeCheck, text: "Particulieren & bedrijven" },
    { icon: CheckCircle2, text: "Zoetermeer &amp; omgeving" },
  ];

  return (
    <div className="bg-white border-b border-stone-100 overflow-hidden py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex w-full overflow-hidden">
          <div className="flex animate-scroll gap-16 items-center whitespace-nowrap">
            {[...items, ...items].map((item, i) => (
              <div key={i} className="flex items-center gap-3 group cursor-default">
                <div className="w-12 h-12 rounded-full bg-[#fef2f2] flex items-center justify-center group-hover:bg-[#C8181B] transition-colors duration-300">
                  {"icon" in item ? (
                    <item.icon className="w-6 h-6 text-[#C8181B] group-hover:text-white transition-colors duration-300" />
                  ) : (
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      className="h-7 w-7 rounded-full object-cover"
                    />
                  )}
                </div>
                <span className="text-lg font-bold text-[#141414] group-hover:text-[#141414] transition-colors" dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
