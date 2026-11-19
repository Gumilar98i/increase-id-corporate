"use client";

import React from "react";
import Link from "next/link";
import {
  Quote,
  Accessibility,
  Handshake,
  BarChart3,
  Target,
  Compass,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { usePreferences } from "@/context/PreferencesContext";
import { siteContent } from "@/data/siteContent";

export default function AboutPage() {
  const { language, highContrast } = usePreferences();
  const content = siteContent[language].aboutPage;

  const inclusionPillars =
    language === "id"
      ? [
          {
            icon: Accessibility,
            code: "WCAG 2.1 AA",
            title: "Aksesibilitas 360 Derajat",
            desc: "Memastikan produk digital, ruang fisik, dan alur komunikasi dapat diakses secara setara oleh seluruh ragam disabilitas tanpa hambatan.",
          },
          {
            icon: Handshake,
            code: "CO-CREATION",
            title: "Kemitraan Kesetaraan Nilai",
            desc: "Membangun kolaborasi bisnis strategis bersama mitra korporasi dan komunitas disabilitas sebagai mitra profesional yang setara.",
          },
          {
            icon: BarChart3,
            code: "MEASURABLE SROI",
            title: "Akuntabilitas Dampak",
            desc: "Mengukur setiap program pemberdayaan berdasarkan serapan kerja nyata, kemandirian ekonomi, dan indikator dampak sosial yang terverifikasi.",
          },
        ]
      : [
          {
            icon: Accessibility,
            code: "WCAG 2.1 AA",
            title: "360-Degree Accessibility",
            desc: "Ensuring digital products, physical spaces, and communication flows are equally accessible across all disability spectrums without barriers.",
          },
          {
            icon: Handshake,
            code: "CO-CREATION",
            title: "Equal-Value Partnership",
            desc: "Building strategic business collaborations between corporate partners and disability communities as equal professional peers.",
          },
          {
            icon: BarChart3,
            code: "MEASURABLE SROI",
            title: "Impact Accountability",
            desc: "Measuring every empowerment initiative through real workforce placement, economic independence, and verified social impact metrics.",
          },
        ];

  return (
    <main
      className={`min-h-screen transition-colors duration-200 ${
        highContrast ? "bg-black text-yellow-300" : "bg-white text-slate-900"
      }`}
    >
      {/* 1. HEADER BERSIH & FOTO ILUSTRASI */}
      <section
        className={`py-14 lg:py-24 border-b transition-colors ${
          highContrast
            ? "bg-black border-yellow-400"
            : "bg-gradient-to-b from-teal-50/50 via-white to-white border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-5">
            <span
              className={`inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
                highContrast
                  ? "bg-yellow-400 text-black"
                  : "bg-teal-100/80 text-teal-800"
              }`}
            >
              {content.badge}
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.12]">
              {content.title}
            </h1>

            <p
              className={`text-base sm:text-lg leading-relaxed ${
                highContrast ? "text-yellow-100" : "text-slate-600"
              }`}
            >
              {content.lead}
            </p>
          </div>

          <div
            className={`aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-xl border ${
              highContrast
                ? "border-yellow-400 bg-zinc-900"
                : "border-slate-200/80 bg-slate-100"
            }`}
          >
            <img
              src={content.image || "/images/about.jpg"}
              alt={content.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. PROFIL SINGKAT & FILOSOFI "NOTHING ABOUT US WITHOUT US" */}
      <section
        className={`py-16 lg:py-24 border-b transition-colors ${
          highContrast
            ? "bg-zinc-950 border-yellow-400"
            : "bg-slate-50/70 border-slate-200/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span
                className={`text-xs font-bold uppercase tracking-widest ${
                  highContrast ? "text-yellow-400" : "text-teal-700"
                }`}
              >
                {content.philosophyBadge}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                {content.philosophyTitle}
              </h2>

              <blockquote
                className={`mt-6 p-6 sm:p-8 rounded-3xl border space-y-3 ${
                  highContrast
                    ? "bg-black border-yellow-400 text-yellow-300"
                    : "bg-teal-900 text-white border-teal-800 shadow-lg"
                }`}
              >
                <Quote
                  className={`w-7 h-7 ${
                    highContrast ? "text-yellow-400" : "text-teal-300"
                  }`}
                />
                <p className="text-base sm:text-lg font-semibold leading-relaxed">
                  {content.philosophyQuote}
                </p>
              </blockquote>
            </div>

            <div className="lg:col-span-7 space-y-5 lg:pt-8">
              {content.philosophyParagraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={`text-base leading-relaxed ${
                    highContrast ? "text-yellow-100" : "text-slate-600"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div
              className={`lg:col-span-5 p-8 sm:p-10 rounded-3xl border space-y-4 ${
                highContrast
                  ? "bg-black border-yellow-400"
                  : "bg-white border-slate-200/80 shadow-2xs"
              }`}
            >
              <div
                className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                  highContrast
                    ? "bg-yellow-400 text-black"
                    : "bg-teal-50 text-teal-700"
                }`}
              >
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold">{content.visionTitle}</h3>
              <p
                className={`text-base leading-relaxed ${
                  highContrast ? "text-yellow-100" : "text-slate-600"
                }`}
              >
                {content.visionText}
              </p>
            </div>

            <div
              className={`lg:col-span-7 p-8 sm:p-10 rounded-3xl border space-y-5 ${
                highContrast
                  ? "bg-black border-yellow-400"
                  : "bg-white border-slate-200/80 shadow-2xs"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                    highContrast
                      ? "bg-yellow-400 text-black"
                      : "bg-teal-50 text-teal-700"
                  }`}
                >
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold">
                  {content.missionTitle}
                </h3>
              </div>

              <ul className="space-y-3.5">
                {content.missions.map((mission, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2
                      className={`w-5 h-5 mt-0.5 shrink-0 ${
                        highContrast ? "text-yellow-400" : "text-teal-600"
                      }`}
                    />
                    <span
                      className={`text-sm sm:text-base leading-relaxed ${
                        highContrast ? "text-yellow-100" : "text-slate-700"
                      }`}
                    >
                      {mission}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TIGA PILAR STANDAR INKLUSIVITAS & AKSESIBILITAS */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <span
                className={`text-xs font-bold uppercase tracking-widest ${
                  highContrast ? "text-yellow-400" : "text-teal-700"
                }`}
              >
                {language === "id"
                  ? "Tata Kelola Inklusi"
                  : "Inclusion Governance"}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                {language === "id"
                  ? "Tiga Pilar Standar Inklusivitas & Aksesibilitas"
                  : "Three Pillars of Inclusivity & Accessibility Standards"}
              </h2>
            </div>

            <Link
              href="/program"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all shrink-0 ${
                highContrast
                  ? "bg-yellow-400 text-black hover:bg-yellow-300"
                  : "bg-teal-700 text-white hover:bg-teal-800 shadow-xs"
              }`}
            >
              <span>
                {language === "id"
                  ? "Jelajahi Program Kami"
                  : "Explore Our Programs"}
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {inclusionPillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <article
                  key={idx}
                  className={`p-8 sm:p-9 rounded-3xl border flex flex-col justify-between space-y-6 transition-all ${
                    highContrast
                      ? "bg-zinc-950 border-yellow-400"
                      : "bg-white border-slate-200/80 shadow-2xs hover:border-teal-300 hover:shadow-lg"
                  }`}
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                          highContrast
                            ? "bg-yellow-400 text-black"
                            : "bg-teal-50 text-teal-700"
                        }`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase ${
                          highContrast
                            ? "bg-zinc-900 text-yellow-400 border border-yellow-400"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {pillar.code}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold tracking-tight">
                      {pillar.title}
                    </h3>

                    <p
                      className={`text-sm sm:text-base leading-relaxed ${
                        highContrast ? "text-yellow-100" : "text-slate-600"
                      }`}
                    >
                      {pillar.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}