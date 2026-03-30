import React from "react";

import { ArrowRight } from "lucide-react";

export function ServiceCard({
  title,
  description,
  imageSrc,
  imageAlt,
  href = "#contact",
  linkLabel = "Learn more",
}: {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {imageSrc ? (
        <div className="relative aspect-[16/9] w-full border-b border-slate-100 bg-slate-100 overflow-hidden">
          <img
            src={imageSrc}
            alt={imageAlt ?? title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-slate-900/10 to-transparent" />
        </div>
      ) : null}

      <div className="p-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          <p className="text-slate-600 leading-relaxed mt-2 mb-4">{description}</p>
          <a
            href={href}
            className="inline-flex items-center text-[#C8181B] font-semibold text-sm group-hover:translate-x-1 transition-transform"
          >
            {linkLabel} <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
