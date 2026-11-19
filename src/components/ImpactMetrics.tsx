"use client";

import React from "react";
import { usePreferences } from "@/context/PreferencesContext";
import { siteContent } from "@/data/siteContent";

export default function ImpactMetrics() {
  const { language, highContrast } = usePreferences();
  const content = siteContent[language].metrics;

  return (
    <section
      className={`py-14 lg:py-20 transition-colors duration-200 ${
        highContrast
          ? "bg-zinc-950 text-yellow-300 border-b border-yellow-400"
          : "bg-white text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {content.title}
            </h2>
            <p
              className={`mt-2 text-sm sm:text-base max-w-2xl ${
                highContrast ? "text-yellow-100" : "text-slate-600"
              }`}
            >
              {content.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.items.map((item, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-2xl border transition-all ${
                highContrast
                  ? "bg-black border-yellow-400"
                  : "bg-slate-50/80 border-slate-200/80 hover:border-teal-300 hover:bg-white hover:shadow-md"
              }`}
            >
              <div
                className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                  highContrast ? "text-yellow-400" : "text-teal-700"
                }`}
              >
                {item.value}
              </div>
              <div className="mt-2 font-bold text-base">{item.label}</div>
              <p
                className={`mt-1 text-xs sm:text-sm leading-relaxed ${
                  highContrast ? "text-yellow-200" : "text-slate-500"
                }`}
              >
                {item.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}