import React from "react";
import { Mail, ArrowLeft, Reply, Forward, MoreHorizontal, Printer, Star } from "lucide-react";
import Link from "next/link";

export default function EmailPreviewPage() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans py-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <Link href="/offerte-2" className="inline-flex items-center gap-2 text-sm text-[#666666] hover:text-[#141414] transition-colors mb-2">
              <ArrowLeft className="w-4 h-4" /> Terug naar Offertetool
            </Link>
            <h1 className="text-2xl font-bold text-[#141414]">E-mail Voorbeelden</h1>
            <p className="text-sm text-[#666666]">Zo komen de e-mails aan bij de klant en bij u.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Klant Email Preview */}
          <div className="flex flex-col h-full">
            <h2 className="text-sm font-bold text-[#141414] uppercase tracking-wider mb-3 ml-1 flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#C8181B]" />
              Mail naar de Klant
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden flex-1 flex flex-col">
              {/* Email Header / Client Chrome */}
              <div className="border-b border-stone-100 bg-[#f9fafb] p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex gap-2 text-stone-400">
                    <Reply className="w-4 h-4" />
                    <Forward className="w-4 h-4" />
                  </div>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex">
                    <span className="w-16 text-stone-500 text-right pr-3">Van:</span>
                    <span className="font-semibold text-stone-800">Van der Starre <span className="font-normal text-stone-500">&lt;info@vanderstarre.nl&gt;</span></span>
                  </div>
                  <div className="flex">
                    <span className="w-16 text-stone-500 text-right pr-3">Aan:</span>
                    <span className="font-semibold text-stone-800">Klant Naam <span className="font-normal text-stone-500">&lt;klant@email.nl&gt;</span></span>
                  </div>
                  <div className="flex pt-1 mt-1 border-t border-stone-200/50">
                    <span className="w-16 text-stone-500 text-right pr-3">Onderwerp:</span>
                    <span className="font-bold text-stone-900">Uw offerte-aanvraag voor het dichtmaken van uw trap(pen)</span>
                  </div>
                </div>
              </div>
              
              {/* Email Body */}
              <div className="p-6 bg-white flex-1">
                <div className="max-w-lg mx-auto font-sans text-[15px] text-[#333333] leading-relaxed">
                  <div className="mb-8 text-center">
                    <div className="inline-block px-4 py-2 border-2 border-[#C8181B] text-[#C8181B] font-bold text-xl tracking-wider uppercase mb-6">
                      VAN DER STARRE
                    </div>
                  </div>
                  
                  <p className="mb-4">Beste Klant Naam,</p>
                  
                  <p className="mb-4">
                    Bedankt voor uw interesse in het dichtmaken van uw open trap(pen)! We hebben uw aanvraag in goede orde ontvangen.
                  </p>
                  
                  <p className="mb-6">
                    Op basis van de door u ingevulde gegevens hebben wij een prijsindicatie berekend. 
                    Hieronder vindt u een overzicht van uw aanvraag.
                  </p>

                  <div className="bg-[#fcfcfc] border border-stone-200 rounded-xl p-5 mb-6">
                    <h3 className="font-bold text-[#141414] mb-3 border-b border-stone-200 pb-2">Uw Aanvraag Overzicht</h3>
                    
                    <div className="mb-3 pb-3 border-b border-stone-100">
                      <div className="font-semibold text-[#141414]">Trap 1</div>
                      <div className="text-sm text-[#666666]">13 treden • Begane grond • Rechte trap</div>
                    </div>
                    
                    <div className="mb-3 pb-3 border-b border-stone-100">
                      <div className="font-semibold text-[#141414]">Trap 2</div>
                      <div className="text-sm text-[#666666]">14 treden • 1e Verdieping • Kwartslag trap</div>
                    </div>

                    <div className="mt-4 flex justify-between items-center text-lg font-bold text-[#141414]">
                      <span>Totale Prijsindicatie:</span>
                      <span className="text-[#C8181B]">€ 387,50</span>
                    </div>
                    <p className="text-xs text-stone-400 mt-1 italic">*Dit is een indicatie op basis van uw invoer. De definitieve prijs wordt samen met u afgestemd.</p>
                  </div>

                  <p className="mb-4">
                    <strong>Wat is de volgende stap?</strong><br />
                    Ricardo zal binnen 1 tot 2 werkdagen telefonisch contact met u opnemen op <strong>06 123 456 78</strong> om de details kort door te nemen en een afspraak in te plannen.
                  </p>

                  <p className="mb-6">
                    Heeft u in de tussentijd al vragen? Beantwoord dan gerust deze e-mail of bel ons direct.
                  </p>

                  <p className="mb-1">Met vriendelijke groet,</p>
                  <p className="font-bold text-[#141414]">Ricardo</p>
                  <p className="text-sm text-[#666666]">Van der Starre</p>
                </div>
              </div>
            </div>
          </div>

          {/* Eigenaar Email Preview */}
          <div className="flex flex-col h-full mt-8 lg:mt-0">
            <h2 className="text-sm font-bold text-[#141414] uppercase tracking-wider mb-3 ml-1 flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              Mail naar U (Ricardo)
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden flex-1 flex flex-col">
              {/* Email Header / Client Chrome */}
              <div className="border-b border-stone-100 bg-[#f9fafb] p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-stone-300"></div>
                    <div className="w-3 h-3 rounded-full bg-stone-300"></div>
                    <div className="w-3 h-3 rounded-full bg-stone-300"></div>
                  </div>
                  <div className="flex gap-3 text-stone-400">
                    <Printer className="w-4 h-4" />
                    <Reply className="w-4 h-4" />
                    <MoreHorizontal className="w-4 h-4" />
                  </div>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex">
                    <span className="w-16 text-stone-500 text-right pr-3">Van:</span>
                    <span className="font-semibold text-stone-800">Website Offertetool <span className="font-normal text-stone-500">&lt;noreply@vanderstarre.nl&gt;</span></span>
                  </div>
                  <div className="flex">
                    <span className="w-16 text-stone-500 text-right pr-3">Aan:</span>
                    <span className="font-semibold text-stone-800">Info <span className="font-normal text-stone-500">&lt;info@vanderstarre.nl&gt;</span></span>
                  </div>
                  <div className="flex pt-1 mt-1 border-t border-stone-200/50">
                    <span className="w-16 text-stone-500 text-right pr-3">Onderwerp:</span>
                    <span className="font-bold text-stone-900">🚨 Nieuwe Offerte Aanvraag: Klant Naam (€ 387,50)</span>
                  </div>
                </div>
              </div>
              
              {/* Email Body */}
              <div className="p-6 bg-[#fdfdfd] flex-1">
                <div className="max-w-lg mx-auto font-sans text-[14px] text-[#333333]">
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6 flex items-center justify-between">
                    <span className="font-bold">Nieuwe lead via de website!</span>
                    <span className="text-xs bg-green-200 px-2 py-1 rounded font-bold">Zojuist</span>
                  </div>
                  
                  <p className="mb-4">Hoi Ricardo,</p>
                  <p className="mb-6">Er is zojuist een nieuwe aanvraag binnengekomen voor het dichtmaken van trappen via de offertetool op de website.</p>

                  <h3 className="font-bold text-[#141414] text-base border-b border-stone-200 pb-2 mb-3">Klantgegevens</h3>
                  <table className="w-full mb-6">
                    <tbody>
                      <tr className="border-b border-stone-100">
                        <td className="py-2 text-stone-500 w-1/3">Naam:</td>
                        <td className="py-2 font-semibold">Klant Naam</td>
                      </tr>
                      <tr className="border-b border-stone-100">
                        <td className="py-2 text-stone-500">Telefoon:</td>
                        <td className="py-2 font-semibold text-blue-600"><a href="tel:0612345678">06 123 456 78</a></td>
                      </tr>
                      <tr className="border-b border-stone-100">
                        <td className="py-2 text-stone-500">E-mail:</td>
                        <td className="py-2 font-semibold text-blue-600"><a href="mailto:klant@email.nl">klant@email.nl</a></td>
                      </tr>
                      <tr className="border-b border-stone-100">
                        <td className="py-2 text-stone-500">Adres:</td>
                        <td className="py-2 font-semibold">2700 AB, 12</td>
                      </tr>
                    </tbody>
                  </table>

                  <h3 className="font-bold text-[#141414] text-base border-b border-stone-200 pb-2 mb-3">Aanvraag Details (2 Trappen)</h3>
                  
                  <div className="bg-white border border-stone-200 rounded p-4 mb-6 shadow-sm">
                    <div className="mb-3 pb-3 border-b border-stone-100">
                      <div className="font-bold text-[#141414] flex justify-between">
                        <span>Trap 1</span>
                        <span>€ 162,50</span>
                      </div>
                      <div className="text-sm text-[#666666] mt-1">13 treden • Begane grond • Rechte trap</div>
                    </div>
                    
                    <div className="mb-3 pb-3 border-b border-stone-100">
                      <div className="font-bold text-[#141414] flex justify-between">
                        <span>Trap 2</span>
                        <span>€ 225,00</span>
                      </div>
                      <div className="text-sm text-[#666666] mt-1">14 treden • 1e Verdieping • Kwartslag trap (+ €25,-)</div>
                    </div>

                    <div className="flex justify-between items-center text-base font-bold text-[#141414] pt-1">
                      <span>Gegeven Prijsindicatie:</span>
                      <span className="text-[#C8181B]">€ 387,50</span>
                    </div>
                  </div>

                  <div className="text-center mt-8">
                    <a href="tel:0612345678" className="inline-block bg-[#141414] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#333333] transition-colors">
                      Bel Klant Direct
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}