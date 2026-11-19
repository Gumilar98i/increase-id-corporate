"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { usePreferences } from "@/context/PreferencesContext";
import { siteContent } from "@/data/siteContent";

export default function HomePage() {
  const { language, highContrast } = usePreferences();
  const content = siteContent[language];
  const [activePillarIndex, setActivePillarIndex] = useState(0);

  const activePillar = content.pillars.items[activePillarIndex];

  const getTabLabel = (id: string, fallbackTitle: string) => {
    if (id === "incubator") return "Incubator";
    if (id === "accelerator") return "Impact Accelerator";
    if (id === "advisory") return "Advisory";
    return fallbackTitle;
  };

  return (
    <main
      className={`transition-colors duration-200 ${
        highContrast ? "bg-black text-yellow-300" : "bg-white text-slate-900"
      }`}
    >
      {/* 1. HERO SECTION: Split Layout Bersih */}
      <section
        className={`py-14 lg:py-24 border-b transition-colors ${
          highContrast
            ? "bg-black border-yellow-400"
            : "bg-gradient-to-b from-teal-50/60 via-white to-white border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                  highContrast
                    ? "bg-yellow-400 text-black"
                    : "bg-teal-100/80 text-teal-800"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{content.hero.badge}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08]">
                {content.hero.title}
              </h1>

              <p
                className={`text-base sm:text-lg leading-relaxed max-w-lg ${
                  highContrast ? "text-yellow-100" : "text-slate-600"
                }`}
              >
                {content.hero.subtitle}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/program"
                  className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold transition-all ${
                    highContrast
                      ? "bg-yellow-400 text-black hover:bg-yellow-300"
                      : "bg-teal-700 text-white hover:bg-teal-800 shadow-md hover:shadow-lg"
                  }`}
                >
                  <span>{content.hero.primaryCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/tentang-kami"
                  className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold border transition-all ${
                    highContrast
                      ? "border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black"
                      : "border-slate-300 text-slate-800 hover:border-teal-600 hover:text-teal-700"
                  }`}
                >
                  <span>{content.hero.secondaryCta}</span>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6">
              <div
                className={`aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border ${
                  highContrast
                    ? "border-yellow-400 bg-zinc-900"
                    : "border-slate-200/80 bg-slate-100"
                }`}
              >
                <img
                  src={content.hero.image || "/images/hero.jpg"}
                  alt={content.hero.imageCaption}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. IMPACT METRICS: 4 Angka Besar & Label Singkat */}
      <section
        className={`py-16 lg:py-20 border-b transition-colors ${
          highContrast
            ? "bg-zinc-950 border-yellow-400"
            : "bg-white border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {content.metrics.items.map((metric, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl border text-center transition-all ${
                  highContrast
                    ? "bg-black border-yellow-400"
                    : "bg-slate-50/70 border-slate-200/70 hover:border-teal-300 hover:bg-white hover:shadow-sm"
                }`}
              >
                <div
                  className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${
                    highContrast ? "text-yellow-400" : "text-teal-700"
                  }`}
                >
                  {metric.value}
                </div>
                <div
                  className={`mt-2.5 text-sm sm:text-base font-bold ${
                    highContrast ? "text-yellow-200" : "text-slate-800"
                  }`}
                >
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TAB INTERAKTIF 3 PILAR PROGRAM */}
      <section
        className={`py-16 lg:py-24 border-b transition-colors ${
          highContrast
            ? "bg-black border-yellow-400"
            : "bg-slate-50/70 border-slate-200/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Header & Tab Buttons */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span
                className={`text-xs font-bold uppercase tracking-widest ${
                  highContrast ? "text-yellow-400" : "text-teal-700"
                }`}
              >
                {content.pillars.badge}
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
                {content.pillars.title}
              </h2>
            </div>

            {/* Interactive Tab Switcher */}
            <div
              className={`inline-flex flex-wrap gap-2 p-1.5 rounded-2xl border ${
                highContrast
                  ? "bg-zinc-900 border-yellow-400"
                  : "bg-white border-slate-200 shadow-2xs"
              }`}
              role="tablist"
              aria-label={content.pillars.title}
            >
              {content.pillars.items.map((pillar, idx) => {
                const isSelected = activePillarIndex === idx;
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActivePillarIndex(idx)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                      isSelected
                        ? highContrast
                          ? "bg-yellow-400 text-black"
                          : "bg-teal-700 text-white shadow-xs"
                        : highContrast
                        ? "text-yellow-200 hover:bg-zinc-800"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {getTabLabel(pillar.id, pillar.title)}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Tab Panel */}
          <div
            role="tabpanel"
            className={`rounded-3xl overflow-hidden border grid grid-cols-1 lg:grid-cols-12 items-center transition-all ${
              highContrast
                ? "bg-zinc-950 border-yellow-400"
                : "bg-white border-slate-200/80 shadow-sm"
            }`}
          >
            {/* Pillar Visual */}
            <div className="lg:col-span-6 aspect-[16/10] lg:aspect-auto lg:h-[400px] w-full bg-slate-100 overflow-hidden">
              <img
                src={activePillar.image || `/images/pilar-${activePillarIndex + 1}.jpg`}
                alt={activePillar.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Pillar Summary */}
            <div className="lg:col-span-6 p-8 sm:p-12 space-y-5">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  highContrast
                    ? "bg-yellow-400 text-black"
                    : "bg-teal-50 text-teal-800"
                }`}
              >
                {activePillar.tagline}
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {activePillar.title}
              </h3>

              <p
                className={`text-base leading-relaxed ${
                  highContrast ? "text-yellow-100" : "text-slate-600"
                }`}
              >
                {activePillar.shortDesc}
              </p>

              <div className="pt-2">
                <Link
                  href={`/program#${activePillar.id}`}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${
                    highContrast
                      ? "bg-yellow-400 text-black hover:bg-yellow-300"
                      : "bg-slate-900 text-white hover:bg-teal-700"
                  }`}
                >
                  <span>{language === "id" ? "Selengkapnya" : "Learn More"}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BERITA TERBARU: Grid 3 Kartu Visual Tanpa Excerpt */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span
                className={`text-xs font-bold uppercase tracking-widest ${
                  highContrast ? "text-yellow-400" : "text-teal-700"
                }`}
              >
                {content.news.badge}
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
                {content.news.title}
              </h2>
            </div>

            <Link
              href="/berita"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold border transition-all shrink-0 ${
                highContrast
                  ? "border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black"
                  : "border-slate-300 text-slate-800 hover:border-teal-600 hover:text-teal-700"
              }`}
            >
              <span>
                {language === "id" ? "Lihat Semua Berita" : "View All News"}
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.news.items.slice(0, 3).map((item, idx) => (
              <Link
                key={item.id}
                href="/berita"
                className={`group rounded-3xl overflow-hidden border flex flex-col transition-all duration-300 ${
                  highContrast
                    ? "bg-zinc-950 border-yellow-400"
                    : "bg-white border-slate-200/80 shadow-2xs hover:shadow-xl hover:-translate-y-1"
                }`}
              >
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image || `/images/news-${idx + 1}.jpg`}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${
                      highContrast
                        ? "bg-yellow-400 text-black"
                        : "bg-white/95 text-teal-800 shadow-2xs"
                    }`}
                  >
                    {item.category}
                  </span>
                </div>

                <div className="p-6 space-y-2.5">
                  <p
                    className={`text-xs font-semibold ${
                      highContrast ? "text-yellow-200" : "text-slate-500"
                    }`}
                  >
                    {item.date}
                  </p>
                  <h3 className="text-lg font-extrabold leading-snug group-hover:text-teal-700 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}