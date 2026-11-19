"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Clock, Users, Sparkles } from "lucide-react";
import { usePreferences } from "@/context/PreferencesContext";
import { siteContent } from "@/data/siteContent";

export default function ProgramPage() {
  const { language, highContrast } = usePreferences();
  const content = siteContent[language].programsPage;

  return (
    <main
      className={`min-h-screen transition-colors duration-200 ${
        highContrast ? "bg-black text-yellow-300" : "bg-white text-slate-900"
      }`}
    >
      {/* 1. HEADER HALAMAN: Pilar Pemberdayaan Increase.id */}
      <section
        className={`py-14 lg:py-24 border-b transition-colors ${
          highContrast
            ? "bg-zinc-950 border-yellow-400"
            : "bg-gradient-to-b from-teal-50/60 via-white to-white border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
                highContrast
                  ? "bg-yellow-400 text-black"
                  : "bg-teal-100/80 text-teal-800"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {language === "id"
                  ? "Pilar Pemberdayaan Increase.id"
                  : "Increase.id Empowerment Pillars"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.12]">
              {content.title}
            </h1>

            <p
              className={`text-base sm:text-lg leading-relaxed ${
                highContrast ? "text-yellow-100" : "text-slate-600"
              }`}
            >
              {content.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. PENJABARAN LENGKAP 3 PILAR PROGRAM (TATA LETAK ZIG-ZAG) */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-32">
          {content.items.map((pillar, index) => {
            const isReversed = index % 2 === 1;
            const displayTitle =
              pillar.id === "incubator"
                ? "Inclusive Startup & SME Incubator"
                : pillar.title;

            // Mengambil 3 poin cakupan utama dari modul kurikulum program
            const coreScopes = pillar.curriculum
              .flatMap((mod) => mod.topics)
              .slice(0, 3);

            return (
              <article
                key={pillar.id}
                id={pillar.id}
                className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                {/* Kolom Foto (Kiri / Kanan Bergantian) */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div
                    className={`relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-xl border ${
                      highContrast
                        ? "border-yellow-400 bg-zinc-900"
                        : "border-slate-200/80 bg-slate-100"
                    }`}
                  >
                    <Image
                      src={pillar.image}
                      alt={displayTitle}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Kolom Konten Program */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="space-y-2.5">
                    <span
                      className={`text-xs font-extrabold uppercase tracking-widest ${
                        highContrast ? "text-yellow-400" : "text-teal-700"
                      }`}
                    >
                      0{index + 1} — {pillar.tagline}
                    </span>

                    <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                      {displayTitle}
                    </h2>
                  </div>

                  <p
                    className={`text-base leading-relaxed ${
                      highContrast ? "text-yellow-100" : "text-slate-600"
                    }`}
                  >
                    {pillar.overview}
                  </p>

                  {/* Meta Info Peserta & Durasi */}
                  <div
                    className={`grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl border text-xs ${
                      highContrast
                        ? "bg-zinc-950 border-yellow-400 text-yellow-200"
                        : "bg-slate-50 border-slate-200/80 text-slate-700"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <Users
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          highContrast ? "text-yellow-400" : "text-teal-700"
                        }`}
                      />
                      <span>{pillar.targetAudience}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          highContrast ? "text-yellow-400" : "text-teal-700"
                        }`}
                      />
                      <span>{pillar.duration}</span>
                    </div>
                  </div>

                  {/* 3 Poin Cakupan Utama */}
                  <div className="space-y-3 pt-1">
                    <h3
                      className={`text-xs font-bold uppercase tracking-wider ${
                        highContrast ? "text-yellow-400" : "text-slate-500"
                      }`}
                    >
                      {language === "id"
                        ? "Cakupan Utama Program"
                        : "Core Program Scope"}
                    </h3>
                    <ul className="space-y-3">
                      {coreScopes.map((scope, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2
                            className={`w-5 h-5 mt-0.5 shrink-0 ${
                              highContrast ? "text-yellow-400" : "text-teal-600"
                            }`}
                          />
                          <span
                            className={`text-sm sm:text-base font-medium leading-snug ${
                              highContrast ? "text-yellow-100" : "text-slate-800"
                            }`}
                          >
                            {scope}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 3. BANNER AJAKAN KONSULTASI / KOLABORASI -> /kontak */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`rounded-3xl p-8 sm:p-12 lg:p-16 border flex flex-col lg:flex-row lg:items-center justify-between gap-8 transition-colors ${
              highContrast
                ? "bg-zinc-950 border-2 border-yellow-400 text-yellow-300"
                : "bg-teal-900 border-teal-800 text-white shadow-xl"
            }`}
          >
            <div className="max-w-2xl space-y-3">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  highContrast
                    ? "bg-yellow-400 text-black"
                    : "bg-teal-800 text-teal-200"
                }`}
              >
                {language === "id"
                  ? "Kemitraan & Kolaborasi"
                  : "Partnership & Collaboration"}
              </span>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                {language === "id"
                  ? "Siap Merancang Program Inklusif Bersama Kami?"
                  : "Ready to Co-Design an Inclusive Program With Us?"}
              </h2>

              <p
                className={`text-base leading-relaxed ${
                  highContrast ? "text-yellow-100" : "text-teal-100/90"
                }`}
              >
                {language === "id"
                  ? "Diskusikan kebutuhan inkubasi talenta, akselerasi wirausaha sosial, maupun audit aksesibilitas korporat dengan tim ahli Increase.id."
                  : "Discuss talent incubation, social venture acceleration, or corporate accessibility audits with Increase.id specialists."}
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/kontak"
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold transition-all ${
                  highContrast
                    ? "bg-yellow-400 text-black hover:bg-yellow-300"
                    : "bg-white text-teal-900 hover:bg-teal-50 shadow-md"
                }`}
              >
                <span>{content.consultCta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}