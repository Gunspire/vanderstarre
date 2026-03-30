"use client";

import React from "react";
import { CheckCircle2, Mail, MessageCircle, Phone, Send, X } from "lucide-react";

import { Button } from "../components/Button";

export function ChatWidget() {
  const [chatOpen, setChatOpen] = React.useState(false);
  const [chatStatus, setChatStatus] = React.useState<"idle" | "submitting" | "success">("idle");

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setChatStatus("submitting");
    window.setTimeout(() => {
      setChatStatus("success");
    }, 900);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="relative">
        {chatOpen && (
          <div className="w-[340px] max-w-[calc(100vw-2.5rem)] rounded-3xl overflow-hidden border border-stone-200 shadow-2xl bg-white">
            <div className="bg-gradient-to-r from-[#a81416] via-[#C8181B] to-[#a81416] px-5 py-4 text-white">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-[#f9d9d9]">Van der Starre — Direct contact</p>
                  <p className="text-lg font-bold leading-tight">Hoe kunnen wij helpen?</p>
                  <p className="text-xs text-[#f9d9d9]/90 mt-1">Reactie binnen 1 uur (Ma–Vr)</p>
                </div>
                <button
                  type="button"
                  onClick={() => setChatOpen(false)}
                  className="rounded-full bg-white/15 hover:bg-white/25 transition p-2"
                  aria-label="Chat sluiten"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-5">
              {chatStatus === "success" ? (
                <div className="py-6 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="mt-4 text-lg font-bold text-[#141414]">Bericht ontvangen</p>
                  <p className="mt-2 text-sm text-[#6E6660]">
                    Bedankt — wij nemen spoedig contact met u op. Bij spoed kunt u bellen.
                  </p>
                  <div className="mt-5 flex gap-3 justify-center">
                    <Button variant="outline" as="a" href="tel:+31623755436" className="text-sm">
                      <Phone className="w-4 h-4 mr-2" /> Bellen
                    </Button>
                    <Button variant="outline" className="text-sm" onClick={() => setChatStatus("idle")}>
                      Nieuw bericht
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Vlizotrap", "Trap renovatie", "Deuren repareren", "Veranda", "Overige"].map(
                      (tag) => (
                        <button
                          key={tag}
                          type="button"
                          className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-semibold text-[#2b2b2b] hover:bg-[#fff5f5] transition"
                        >
                          {tag}
                        </button>
                      )
                    )}
                  </div>

                  <form onSubmit={handleChatSubmit} className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-[#6E6660]">Naam</label>
                        <input
                          required
                          type="text"
                          className="w-full px-3 py-2 rounded-lg border border-stone-200 focus:border-[#C8181B] focus:ring-2 focus:ring-[#C8181B]/20 outline-none transition text-sm"
                          placeholder="Uw naam"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-[#6E6660]">Postcode</label>
                        <input
                          required
                          type="text"
                          className="w-full px-3 py-2 rounded-lg border border-stone-200 focus:border-[#C8181B] focus:ring-2 focus:ring-[#C8181B]/20 outline-none transition text-sm"
                          placeholder="2700 AB"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#6E6660]">Telefoonnummer</label>
                      <input
                        required
                        type="tel"
                        className="w-full px-3 py-2 rounded-lg border border-stone-200 focus:border-[#C8181B] focus:ring-2 focus:ring-[#C8181B]/20 outline-none transition text-sm"
                        placeholder="06 00 000 000"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#6E6660]">Bericht</label>
                      <textarea
                        required
                        rows={3}
                        className="w-full px-3 py-2 rounded-lg border border-stone-200 focus:border-[#C8181B] focus:ring-2 focus:ring-[#C8181B]/20 outline-none transition text-sm resize-none"
                        placeholder="Omschrijf de werkzaamheden (en hoe urgent het is)."
                      />
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-1">
                      <div className="flex items-center gap-3 text-xs text-[#6E6660]">
                        <a
                          href="mailto:[PLACEHOLDER]"
                          className="inline-flex items-center gap-1 hover:text-[#141414]"
                        >
                          <Mail className="w-3.5 h-3.5" /> E-mail
                        </a>
                        <a
                          href="tel:+31623755436"
                          className="inline-flex items-center gap-1 hover:text-[#141414]"
                        >
                          <Phone className="w-3.5 h-3.5" /> Bellen
                        </a>
                      </div>

                      <Button type="submit" disabled={chatStatus === "submitting"} className="text-sm">
                        {chatStatus === "submitting" ? (
                          "Verzenden..."
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" /> Versturen
                          </>
                        )}
                      </Button>
                    </div>
                    <p className="text-[11px] text-stone-400">
                      Dit chat-formulier stuurt een aanvraag in — geen live agent vereist.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        )}

        {!chatOpen && (
          <button
            type="button"
            onClick={() => setChatOpen(true)}
            className="rounded-full shadow-2xl bg-[#C8181B] hover:bg-[#a81416] transition text-white px-4 py-3 flex items-center gap-2"
            aria-label="Chat openen"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold text-sm">Chat</span>
          </button>
        )}
      </div>
    </div>
  );
}
