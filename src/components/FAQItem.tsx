"use client";

import React, { useState } from "react";

import { ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "../lib/cn";

export function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-stone-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="text-lg font-semibold text-[#141414]">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#C8181B]" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#6E6660]" />
        )}
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-[#6E6660] leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
