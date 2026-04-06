"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X, ArrowRight } from "lucide-react";

import headerLogo from "./WhatsApp Image 2026-03-30 at 14.53.50.jpeg";

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
    <header className="sticky top-0 z-50 bg-white border-b border-stone-300">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <Image
                src={headerLogo}
                alt="Van der Starre Timmer- en Onderhoudswerkzaamheden"
                className="h-12 sm:h-14 w-auto object-contain"
                priority
              />
              <span className="sr-only">Van der Starre Timmer- en Onderhoudwerkzaamheden</span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <div
              ref={servicesRef}
              className="relative h-20 flex items-center"
              onMouseEnter={openServices}
              onMouseLeave={closeServicesSoon}
            >
              <button
                type="button"
                onClick={() => (isServicesOpen ? setIsServicesOpen(false) : openServices())}
                aria-haspopup="menu"
                aria-expanded={isServicesOpen}
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#141414] hover:text-[#C8181B] transition-colors h-full"
              >
                Diensten
                <ChevronDown className="w-3 h-3" />
              </button>

              {isServicesOpen && (
                <div
                  role="menu"
                  className="absolute top-20 left-0 w-[400px] border border-stone-300 bg-white shadow-sm overflow-hidden"
                  onMouseEnter={openServices}
                  onMouseLeave={closeServicesSoon}
                >
                  <div className="flex flex-col">
                    {servicesItems.map((it, idx) => (
                      <a
                        key={it.label}
                        href={it.href}
                        role="menuitem"
                        className={`block px-6 py-4 hover:bg-[#faf9f7] transition-colors group ${
                          idx !== servicesItems.length - 1 ? "border-b border-stone-200" : ""
                        }`}
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <div className="text-xs font-bold uppercase tracking-widest text-[#141414] group-hover:text-[#C8181B] transition-colors">{it.label}</div>
                        <div className="text-stone-500 text-sm mt-1">{it.desc}</div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <a
              href={onHome ? "#projecten" : "/#projecten"}
              className="text-[10px] font-bold uppercase tracking-widest text-[#141414] hover:text-[#C8181B] transition-colors"
            >
              Projecten
            </a>
            
            <a
              href="/over-ons"
              className="text-[10px] font-bold uppercase tracking-widest text-[#141414] hover:text-[#C8181B] transition-colors"
            >
              Over Ons
            </a>
            
            <a
              href="/werkwijze"
              className="text-[10px] font-bold uppercase tracking-widest text-[#141414] hover:text-[#C8181B] transition-colors"
            >
              Werkwijze
            </a>
            
            <a
              href="/contact"
              className="text-[10px] font-bold uppercase tracking-widest text-[#141414] hover:text-[#C8181B] transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+31623755436"
              className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#141414] hover:text-[#C8181B] transition-colors"
            >
              <div className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>Bel nu: <br className="hidden lg:block" />+31 6 23755436</span>
            </a>
            <Link 
              href="/offertes" 
              className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#141414] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#C8181B] transition-colors group"
            >
              Gratis offerte
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-[#141414]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Menu sluiten" : "Menu openen"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-300 absolute w-full shadow-sm">
          <div className="flex flex-col">
            <div className="px-4 py-3 bg-[#faf9f7] border-b border-stone-200 text-[10px] font-bold uppercase tracking-widest text-stone-500">
              Diensten
            </div>
            <div className="flex flex-col px-4">
              {servicesItems.map((it) => (
                <a
                  key={it.label}
                  href={it.href}
                  className="text-xs font-bold uppercase tracking-widest text-[#141414] py-4 border-b border-stone-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {it.label}
                </a>
              ))}
            </div>

            <div className="px-4 py-3 bg-[#faf9f7] border-y border-stone-200 mt-4 text-[10px] font-bold uppercase tracking-widest text-stone-500">
              Navigatie
            </div>
            <div className="flex flex-col px-4">
              <a
                href={onHome ? "#projecten" : "/#projecten"}
                className="text-xs font-bold uppercase tracking-widest text-[#141414] py-4 border-b border-stone-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projecten
              </a>
              <a
                href="/over-ons"
                className="text-xs font-bold uppercase tracking-widest text-[#141414] py-4 border-b border-stone-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Over Ons
              </a>
              <a
                href="/werkwijze"
                className="text-xs font-bold uppercase tracking-widest text-[#141414] py-4 border-b border-stone-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Werkwijze
              </a>
              <a
                href="/contact"
                className="text-xs font-bold uppercase tracking-widest text-[#141414] py-4 border-b border-stone-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>

            <div className="p-6 bg-[#faf9f7] flex flex-col gap-4 mt-4">
              <a
                href="tel:+31623755436"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-white border border-stone-300 text-[#141414] font-bold text-xs uppercase tracking-wider"
              >
                <Phone className="w-4 h-4" /> +31 6 23755436
              </a>
              <Link 
                href="/offertes" 
                className="flex items-center justify-center gap-3 px-6 py-4 bg-[#141414] text-white font-bold text-xs uppercase tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gratis offerte
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}