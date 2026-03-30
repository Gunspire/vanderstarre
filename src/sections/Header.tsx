"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, Star, X } from "lucide-react";

import { Button } from "../components/Button";
import headerLogo from "./WhatsApp Image 2026-03-30 at 14.53.50.jpeg";
import werkspotLogo from "./images.png";

export function Header() {
  const pathname = usePathname();
  const onHome = pathname === "/";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const servicesRef = React.useRef<HTMLDivElement | null>(null);
  const closeTimerServicesRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    const onDocMouseDown = (e: MouseEvent) => {
      const target = e.target as Node | null;
      if (!target) return;
      if (servicesRef.current && !servicesRef.current.contains(target)) setIsServicesOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsServicesOpen(false);
    };
    document.addEventListener("mousedown", onDocMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const openServices = () => {
    if (closeTimerServicesRef.current) {
      window.clearTimeout(closeTimerServicesRef.current);
      closeTimerServicesRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const closeServicesSoon = () => {
    if (closeTimerServicesRef.current) window.clearTimeout(closeTimerServicesRef.current);
    closeTimerServicesRef.current = window.setTimeout(() => setIsServicesOpen(false), 180);
  };

  const servicesItems = [
    {
      label: "Alle diensten",
      href: onHome ? "#services" : "/#services",
      desc: "Bekijk al onze timmerwerkzaamheden",
    },
    {
      label: "Offerte aanvragen",
      href: "/offerte",
      desc: "Bereken direct uw prijsindicatie",
    },
    {
      label: "Vlizotrap plaatsen",
      href: onHome ? "#services" : "/#services",
      desc: "Ruimtebesparende vlizotrap vakkundig ingebouwd",
    },
    {
      label: "Trap plaatsen of renoveren",
      href: onHome ? "#services" : "/#services",
      desc: "Nieuwe trap of renovatie van bestaande trap",
    },
    {
      label: "Deuren repareren & afhangen",
      href: onHome ? "#services" : "/#services",
      desc: "Snel en vakkundig gerepareerd of gehangen",
    },
    {
      label: "Veranda / overkapping",
      href: onHome ? "#services" : "/#services",
      desc: "Meer woonplezier in uw tuin",
    },
    {
      label: "Gipsen & egaliseren",
      href: onHome ? "#services" : "/#services",
      desc: "Strakke afwerking van wanden en plafonds",
    },
    {
      label: "Velux dakraam vervangen",
      href: onHome ? "#services" : "/#services",
      desc: "Lekkend of verouderd dakraam snel vervangen",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <Image
                src={headerLogo}
                alt="Van der Starre Timmer- en Onderhoudswerkzaamheden"
                className="h-[72px] sm:h-[84px] w-auto"
                priority
              />
              <span className="sr-only">Van der Starre Timmer- en Onderhoudwerkzaamheden</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={closeServicesSoon}
            >
              <button
                type="button"
                onClick={() => (isServicesOpen ? setIsServicesOpen(false) : openServices())}
                aria-haspopup="menu"
                aria-expanded={isServicesOpen}
                className="inline-flex items-center gap-2 text-[#6E6660] hover:text-[#C8181B] font-medium transition-colors"
              >
                Diensten
                <ChevronDown className="w-4 h-4" />
              </button>

              {isServicesOpen && (
                <div
                  role="menu"
                  className="absolute left-0 mt-2 w-[360px] rounded-2xl border border-stone-200 bg-white shadow-xl overflow-hidden"
                  onMouseEnter={openServices}
                  onMouseLeave={closeServicesSoon}
                >
                  <div className="p-2">
                    {servicesItems.map((it) => (
                      <a
                        key={it.label}
                        href={it.href}
                        role="menuitem"
                        className="block rounded-xl px-4 py-3 hover:bg-stone-50 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <div className="text-sm font-extrabold text-[#141414]">{it.label}</div>
                        <div className="text-xs font-semibold text-[#6E6660] mt-1">{it.desc}</div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="/offerte"
              className="text-[#6E6660] hover:text-[#C8181B] font-medium transition-colors"
            >
              Offertetool
            </a>

            <a
              href={onHome ? "#reviews" : "/#reviews"}
              className="text-[#6E6660] hover:text-[#C8181B] font-medium transition-colors"
            >
              Reviews
            </a>

            <a
              href={onHome ? "#faq" : "/#faq"}
              className="text-[#6E6660] hover:text-[#C8181B] font-medium transition-colors"
            >
              FAQ
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <div className="hidden lg:inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1.5">
              <div className="flex items-center gap-0.5 text-yellow-500">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs font-bold text-[#141414] tabular-nums">4.9</span>
              <div className="h-4 w-px bg-stone-200" aria-hidden="true" />
              <img src={werkspotLogo.src} alt="Werkspot" className="h-5 w-5 rounded-full object-cover" />
            </div>
            <div className="flex flex-col items-end">
              <span className="text-xs text-[#6E6660] font-medium">Bel voor een offerte</span>
              <a
                href="tel:+31623755436"
                className="flex items-center gap-2 text-lg font-bold text-[#141414] hover:text-[#C8181B] transition-colors"
              >
                <Phone className="w-5 h-5 text-[#C8181B]" />
                +31 6 23755436
              </a>
            </div>
            <Button as="a" href={onHome ? "#contact" : "/#contact"}>
              Gratis offerte
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-[#6E6660]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Menu sluiten" : "Menu openen"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 p-4 absolute w-full shadow-lg">
          <div className="flex flex-col space-y-4">
            <a
              href="/offerte"
              className="text-lg font-medium text-[#141414] py-2 border-b border-stone-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Offertetool
            </a>
            <a
              href={onHome ? "#reviews" : "/#reviews"}
              className="text-lg font-medium text-[#141414] py-2 border-b border-stone-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reviews
            </a>
            <a
              href={onHome ? "#faq" : "/#faq"}
              className="text-lg font-medium text-[#141414] py-2 border-b border-stone-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>

            <div className="pt-2">
              <div className="text-xs font-extrabold tracking-wider text-[#6E6660] uppercase mb-2">
                Diensten
              </div>
              <div className="flex flex-col">
                {servicesItems.map((it) => (
                  <a
                    key={it.label}
                    href={it.href}
                    className="text-lg font-medium text-[#141414] py-2 border-b border-stone-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {it.label}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="tel:+31623755436"
              className="flex items-center gap-2 text-[#C8181B] font-bold py-2"
            >
              <Phone className="w-5 h-5" /> +31 6 23755436
            </a>
            <Button as="a" href={onHome ? "#contact" : "/#contact"} className="w-full">
              Gratis offerte
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
