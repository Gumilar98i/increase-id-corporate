"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { usePreferences } from "@/context/PreferencesContext";
import { siteContent } from "@/data/siteContent";

export default function PillarsSection() {
  const { language, highContrast } = usePreferences();
  const content = siteContent[language].pillars;

  return (
    <section
      className={`py-16 lg:py-24 transition-colors duration-200 ${
        highContrast
          ? "bg-black text-yellow-300 border-b border-yellow-400"
          : "bg-slate-50 text-slate-900 border-y border-slate-200/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span
            className={`text-xs font-bold uppercase tracking-widest ${
              highContrast ? "text-yellow-400" : "text-teal-700"
            }`}
          >
            {content.badge}
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight">
            {content.title}
          </h2>
          <p
            className={`mt-3 text-base leading-relaxed ${
              highContrast ? "text-yellow-100" : "text-slate-600"
            }`}
          >
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.items.map((pillar) => (
            <article
              key={pillar.id}
              className={`group rounded-3xl overflow-hidden border flex flex-col transition-all duration-300 ${
                highContrast
                  ? "bg-zinc-950 border-yellow-400"
                  : "bg-white border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1"
              }`}
            >
              {/* Card Image */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-200">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-2.5">
                  <p
                    className={`text-xs font-bold uppercase tracking-wider ${
                      highContrast ? "text-yellow-400" : "text-teal-600"
                    }`}
                  >
                    {pillar.tagline}
                  </p>
                  <h3 className="text-xl font-extrabold tracking-tight">
                    {pillar.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      highContrast ? "text-yellow-100" : "text-slate-600"
                    }`}
                  >
                    {pillar.description}
                  </p>
                </div>

                <div>
                  <Link
                    href={`/program#${pillar.id}`}
                    className={`inline-flex items-center gap-1.5 text-sm font-bold transition-colors ${
                      highContrast
                        ? "text-yellow-400 underline"
                        : "text-teal-700 hover:text-teal-900"
                    }`}
                  >
                    <span>{content.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}