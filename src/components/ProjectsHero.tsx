"use client";

import React from "react";
import { BadgeCheck, CheckCircle2, Phone, Star } from "lucide-react";

import { Button } from "./Button";
import { cn } from "../lib/cn";

const PHONE_NUMBER_DISPLAY = "+31 6 23755436";
const PHONE_NUMBER_TEL = "+31623755436";

export function ProjectsHero() {
  const heroImages = ["/hero-1.png", "/hero-2.png"];
  const [heroImageIndex, setHeroImageIndex] = React.useState(0);
  const [formStatus, setFormStatus] = React.useState<"idle" | "submitting" | "success">("idle");

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setHeroImageIndex((i) => (i + 1) % heroImages.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [heroImages.length]);

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    window.setTimeout(() => setFormStatus("success"), 1200);
  };

  return (
    <section className="relative pt-10 pb-10 lg:pt-14 lg:pb-12 overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out",
              idx === heroImageIndex ? "opacity-100" : "opacity-0"
            )}
            loading={idx === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/85 via-blue-900/65 to-slate-900/35" />
        <div className="absolute inset-0 bg-slate-950/15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-300/20 rounded-full px-4 py-1.5 backdrop-blur-sm">
              <BadgeCheck className="w-4 h-4 text-blue-200" />
              <span className="text-blue-50 text-sm font-semibold">Recent Projects</span>
            </div>

            <h1 className="mt-6 text-3xl md:text-5xl font-extrabold text-white leading-tight">
              See the finish. See the details. See the difference.
            </h1>

            <p className="mt-5 text-lg text-blue-50/90 font-medium leading-relaxed max-w-2xl">
              Browse real roofing projects—from repairs to full replacements. If you like what you see,
              request a quote and we’ll get back quickly with clear next steps.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" as="a" href="#projects">
                View projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-900"
                as="a"
                href={`tel:${PHONE_NUMBER_TEL}`}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {PHONE_NUMBER_DISPLAY}
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm font-semibold text-white/90">
              <span className="inline-flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-300 fill-current" />
                Rated 4.9
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-200" />
                Tidy workmanship
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-200" />
                Clear written quotes
              </span>
            </div>
          </div>

          {/* Quote form card (same style as service hero) */}
          <div className="lg:col-span-4 bg-white rounded-2xl shadow-2xl p-6 sm:p-8" id="contact">
            {formStatus === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Quote Requested!</h2>
                <p className="text-slate-600">
                  {"We'll be in touch within 24 hours to discuss your roofing needs."}
                </p>
                <Button variant="outline" className="mt-6" onClick={() => setFormStatus("idle")}>
                  Request Another
                </Button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-slate-900">Get a Free Quote</h2>
                  <p className="text-slate-500 mt-1">Fast response. No obligation.</p>
                </div>

                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-700">Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-700">Postcode</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="SW1A 1AA"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="07700 900000"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">Service Needed</label>
                    <select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white">
                      <option>New Roof Installation</option>
                      <option>Roof Repairs</option>
                      <option>Flat Roofing (EPDM/Felt)</option>
                      <option>Guttering & Fascias</option>
                      <option>Chimney Repair</option>
                      <option>Emergency Call-out</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">Details</label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                      placeholder="Briefly describe what you need..."
                    />
                  </div>

                  <Button type="submit" className="w-full text-lg" disabled={formStatus === "submitting"}>
                    {formStatus === "submitting" ? "Sending..." : "Request a Free Quote"}
                  </Button>

                  <p className="text-xs text-center text-slate-400 mt-4">
                    Your data is secure. We never share your details.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


