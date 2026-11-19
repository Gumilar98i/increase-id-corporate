"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, X } from "lucide-react";
import { usePreferences } from "@/context/PreferencesContext";
import { siteContent, NewsItem } from "@/data/siteContent";

interface NewsSectionProps {
  showViewAllButton?: boolean;
}

export default function NewsSection({ showViewAllButton = true }: NewsSectionProps) {
  const { language, highContrast } = usePreferences();
  const content = siteContent[language].news;
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  return (
    <section
      className={`py-16 lg:py-24 transition-colors duration-200 ${
        highContrast
          ? "bg-black text-yellow-300 border-b border-yellow-400"
          : "bg-white text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
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
              className={`mt-2 text-base max-w-2xl ${
                highContrast ? "text-yellow-100" : "text-slate-600"
              }`}
            >
              {content.subtitle}
            </p>
          </div>

          {showViewAllButton && (
            <Link
              href="/berita"
              className={`inline-flex items-center gap-1.5 text-sm font-bold shrink-0 ${
                highContrast
                  ? "text-yellow-400 underline"
                  : "text-teal-700 hover:text-teal-900"
              }`}
            >
              <span>{language === "id" ? "Semua Berita" : "All Articles"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.items.map((item) => (
            <article
              key={item.id}
              className={`group rounded-3xl overflow-hidden border flex flex-col transition-all duration-300 ${
                highContrast
                  ? "bg-zinc-950 border-yellow-400"
                  : "bg-white border-slate-200/80 shadow-xs hover:shadow-lg"
              }`}
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className={`absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-xs font-bold ${
                    highContrast
                      ? "bg-yellow-400 text-black"
                      : "bg-white/95 text-teal-800 shadow-xs"
                  }`}
                >
                  {item.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-2.5">
                  <div
                    className={`flex items-center gap-3 text-xs ${
                      highContrast ? "text-yellow-200" : "text-slate-500"
                    }`}
                  >
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {item.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold leading-snug line-clamp-2">
                    {item.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed line-clamp-3 ${
                      highContrast ? "text-yellow-100" : "text-slate-600"
                    }`}
                  >
                    {item.excerpt}
                  </p>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(item)}
                    className={`inline-flex items-center gap-1.5 text-sm font-bold cursor-pointer ${
                      highContrast
                        ? "text-yellow-400 underline"
                        : "text-teal-700 hover:text-teal-900"
                    }`}
                  >
                    <span>{content.readMore}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-modal-title"
        >
          <div
            className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border ${
              highContrast
                ? "bg-black text-yellow-300 border-2 border-yellow-400"
                : "bg-white text-slate-900 border-slate-200"
            }`}
          >
            <div className="relative h-56 sm:h-64 w-full bg-slate-200">
              <Image
                src={selectedArticle.image}
                alt={selectedArticle.title}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className={`absolute top-4 right-4 p-2 rounded-full shadow-md transition cursor-pointer ${
                  highContrast
                    ? "bg-yellow-400 text-black"
                    : "bg-white/95 text-slate-800 hover:bg-white"
                }`}
                aria-label={content.closeModal}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                <span
                  className={`px-3 py-1 rounded-full ${
                    highContrast
                      ? "bg-yellow-400 text-black"
                      : "bg-teal-50 text-teal-800"
                  }`}
                >
                  {selectedArticle.category}
                </span>
                <span className="opacity-75">{selectedArticle.date}</span>
                <span>•</span>
                <span className="opacity-75">{selectedArticle.readTime}</span>
              </div>

              <h3 id="article-modal-title" className="text-2xl font-extrabold leading-tight">
                {selectedArticle.title}
              </h3>

              <div
                className={`space-y-4 text-base leading-relaxed ${
                  highContrast ? "text-yellow-100" : "text-slate-700"
                }`}
              >
                {selectedArticle.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold cursor-pointer ${
                    highContrast
                      ? "bg-yellow-400 text-black"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  {content.closeModal}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}