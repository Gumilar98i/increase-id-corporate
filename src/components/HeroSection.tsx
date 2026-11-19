"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { usePreferences } from "@/context/PreferencesContext";
import { siteContent } from "@/data/siteContent";

export default function HeroSection() {
  const { language, highContrast } = usePreferences();
  const content = siteContent[language].hero;

  return (
    <section
      className={`relative overflow-hidden py-14 lg:py-24 transition-colors duration-200 ${
        highContrast
          ? "bg-black text-yellow-300 border-b border-yellow-400"
          : "bg-gradient-to-b from-teal-50/70 via-white to-white text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Copy Column */}
          <div className="lg:col-span-6 space-y-6">
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase ${
                highContrast
                  ? "bg-yellow-400 text-black"
                  : "bg-teal-100/80 text-teal-800 border border-teal-200"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{content.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.12]">
              {content.title}
            </h1>

            <p
              className={`text-base sm:text-lg leading-relaxed max-w-xl ${
                highContrast ? "text-yellow-100" : "text-slate-600"
              }`}
            >
              {content.subtitle}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/program"
                className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all ${
                  highContrast
                    ? "bg-yellow-400 text-black hover:bg-yellow-300"
                    : "bg-teal-700 text-white hover:bg-teal-800 shadow-md hover:shadow-lg"
                }`}
              >
                <span>{content.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/tentang-kami"
                className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm border transition-all ${
                  highContrast
                    ? "border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black"
                    : "border-slate-300 bg-white text-slate-800 hover:border-teal-600 hover:text-teal-700"
                }`}
              >
                <span>{content.secondaryCta}</span>
              </Link>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-6">
            <div
              className={`relative rounded-3xl overflow-hidden shadow-2xl border ${
                highContrast ? "border-yellow-400" : "border-slate-200/80"
              }`}
            >
              <div className="relative aspect-[4/3] w-full bg-slate-100">
                <Image
                  src={content.image}
                  alt={content.imageCaption}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div
                className={`px-5 py-3.5 text-xs font-medium flex items-center justify-between ${
                  highContrast
                    ? "bg-zinc-900 text-yellow-300 border-t border-yellow-400"
                    : "bg-white/95 backdrop-blur-xs text-slate-600 border-t border-slate-100"
                }`}
              >
                <span>{content.imageCaption}</span>
                <span className="font-bold text-teal-600">Increase.id</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}