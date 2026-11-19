"use client";

import React from "react";
import { Accessibility, CheckCircle2 } from "lucide-react";
import { usePreferences } from "@/context/PreferencesContext";
import { siteContent } from "@/data/siteContent";

export default function InclusionBanner() {
  const { language, highContrast } = usePreferences();
  const content = siteContent[language].inclusion;

  return (
    <section
      className={`py-16 lg:py-20 transition-colors duration-200 ${
        highContrast
          ? "bg-zinc-950 text-yellow-300 border-b border-yellow-400"
          : "bg-teal-900 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                highContrast
                  ? "bg-yellow-400 text-black"
                  : "bg-teal-800 text-teal-200 border border-teal-700"
              }`}
            >
              <Accessibility className="w-4 h-4" />
              <span>{content.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug">
              {content.title}
            </h2>
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                highContrast ? "text-yellow-100" : "text-teal-100/90"
              }`}
            >
              {content.subtitle}
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {content.features.map((feat, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border ${
                  highContrast
                    ? "bg-black border-yellow-400"
                    : "bg-teal-800/60 border-teal-700/80"
                }`}
              >
                <CheckCircle2
                  className={`w-6 h-6 mb-3 ${
                    highContrast ? "text-yellow-400" : "text-teal-300"
                  }`}
                />
                <h3 className="font-bold text-sm mb-1.5">{feat.title}</h3>
                <p
                  className={`text-xs leading-relaxed ${
                    highContrast ? "text-yellow-200" : "text-teal-100/80"
                  }`}
                >
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}