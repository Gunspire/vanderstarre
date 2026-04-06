"use client";

import React, { useState } from "react";

import { Plus, Minus } from "lucide-react";

import { cn } from "../lib/cn";

export function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-stone-300 last:border-0 group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 md:p-10 flex items-center justify-between text-left focus:outline-none hover:bg-[#faf9f7] transition-colors"
      >
        <span className="text-xl md:text-2xl font-bold text-[#141414] group-hover:text-[#C8181B] transition-colors pr-8">
          {question}
        </span>
        <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-stone-200 flex items-center justify-center group-hover:border-[#C8181B] transition-colors bg-white">
          {isOpen ? (
            <Minus className="w-5 h-5 text-[#C8181B]" />
          ) : (
            <Plus className="w-5 h-5 text-[#141414]" />
          )}
        </div>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-in-out px-8 md:px-10",
          isOpen ? "max-h-96 opacity-100 pb-8 md:pb-10" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-stone-500 text-base md:text-lg leading-relaxed max-w-3xl">
          {answer}
        </p>
      </div>
    </div>
  );
}