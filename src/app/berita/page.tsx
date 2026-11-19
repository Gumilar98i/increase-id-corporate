"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, X, Newspaper } from "lucide-react";
import { usePreferences } from "@/context/PreferencesContext";
import { siteContent, NewsItem } from "@/data/siteContent";

type FilterKey = "ALL" | "RESEARCH" | "PROGRAM" | "GUIDE";

export default function NewsPage() {
  const { language, highContrast } = usePreferences();
  const content = siteContent[language].news;
  const [activeFilter, setActiveFilter] = useState<FilterKey>("ALL");
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  const filterOptions: { key: FilterKey; label: string }[] =
    language === "id"
      ? [
          { key: "ALL", label: "Semua" },
          { key: "RESEARCH", label: "Laporan Riset" },
          { key: "PROGRAM", label: "Sorotan Program" },
          { key: "GUIDE", label: "Panduan Praktis" },
        ]
      : [
          { key: "ALL", label: "All" },
          { key: "RESEARCH", label: "Research Reports" },
          { key: "PROGRAM", label: "Program Highlights" },
          { key: "GUIDE", label: "Practical Guides" },
        ];

  const getCategoryDisplayLabel = (rawCategory: string) => {
    const normalized = rawCategory.toLowerCase();
    if (normalized.includes("riset") || normalized.includes("research")) {
      return language === "id" ? "Laporan Riset" : "Research Report";
    }
    if (normalized.includes("program")) {
      return language === "id" ? "Sorotan Program" : "Program Highlight";
    }
    return language === "id" ? "Panduan Praktis" : "Practical Guide";
  };

  const filteredArticles = content.items.filter((item) => {
    if (activeFilter === "ALL") return true;
    const normalized = item.category.toLowerCase();
    if (activeFilter === "RESEARCH") {
      return normalized.includes("riset") || normalized.includes("research");
    }
    if (activeFilter === "PROGRAM") {
      return normalized.includes("program");
    }
    if (activeFilter === "GUIDE") {
      return (
        normalized.includes("wawasan") ||
        normalized.includes("insight") ||
        normalized.includes("panduan") ||
        normalized.includes("guide")
      );
    }
    return true;
  });

  return (
    <main
      className={`min-h-screen transition-colors duration-200 ${
        highContrast ? "bg-black text-yellow-300" : "bg-white text-slate-900"
      }`}
    >
      {/* 1. HEADER HALAMAN: Wawasan, Riset & Berita Terbaru */}
      <section
        className={`py-14 lg:py-24 border-b transition-colors ${
          highContrast
            ? "bg-zinc-950 border-yellow-400"
            : "bg-gradient-to-b from-teal-50/60 via-white to-white border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-4">
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
                highContrast
                  ? "bg-yellow-400 text-black"
                  : "bg-teal-100/80 text-teal-800"
              }`}
            >
              <Newspaper className="w-3.5 h-3.5" />
              <span>{content.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.12]">
              {language === "id"
                ? "Wawasan, Riset & Berita Terbaru"
                : "Latest Insights, Research & News"}
            </h1>

            <p
              className={`text-base sm:text-lg leading-relaxed ${
                highContrast ? "text-yellow-100" : "text-slate-600"
              }`}
            >
              {content.subtitle}
            </p>
          </div>

          {/* 2. FILTER KATEGORI SEDERHANA */}
          <div
            className="flex flex-wrap items-center gap-2.5 pt-2"
            role="tablist"
            aria-label={
              language === "id" ? "Filter Kategori Berita" : "Filter News Category"
            }
          >
            {filterOptions.map((option) => {
              const isSelected = activeFilter === option.key;
              return (
                <button
                  key={option.key}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(option.key)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isSelected
                      ? highContrast
                        ? "bg-yellow-400 text-black"
                        : "bg-teal-700 text-white shadow-xs"
                      : highContrast
                      ? "border border-yellow-400 text-yellow-300 hover:bg-zinc-900"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200/80"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. GRID KARTU BERITA LENGKAP */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredArticles.map((item) => {
              const displayCategory = getCategoryDisplayLabel(item.category);
              return (
                <article
                  key={item.id}
                  className={`group rounded-3xl overflow-hidden border flex flex-col transition-all duration-300 ${
                    highContrast
                      ? "bg-zinc-950 border-yellow-400"
                      : "bg-white border-slate-200/80 shadow-2xs hover:shadow-xl hover:-translate-y-1"
                  }`}
                >
                  {/* Thumbnail Foto */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span
                      className={`absolute top-4 left-4 px-3.5 py-1 rounded-full text-xs font-bold ${
                        highContrast
                          ? "bg-yellow-400 text-black"
                          : "bg-white/95 text-teal-800 shadow-2xs"
                      }`}
                    >
                      {displayCategory}
                    </span>
                  </div>

                  {/* Isi Kartu: Tanggal, Waktu Baca, Judul & Ringkasan */}
                  <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div
                        className={`flex items-center gap-3 text-xs font-medium ${
                          highContrast ? "text-yellow-200" : "text-slate-500"
                        }`}
                      >
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.date}
                        </span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {item.readTime}
                        </span>
                      </div>

                      <h2 className="text-xl font-extrabold leading-snug">
                        {item.title}
                      </h2>

                      <p
                        className={`text-sm leading-relaxed ${
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
                        className={`inline-flex items-center gap-1.5 text-sm font-bold transition-colors cursor-pointer ${
                          highContrast
                            ? "text-yellow-400 underline"
                            : "text-teal-700 hover:text-teal-900"
                        }`}
                      >
                        <span>
                          {language === "id"
                            ? "Baca Selengkapnya"
                            : "Read Full Article"}
                        </span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* MODAL PEMBACA ARTIKEL */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="news-modal-title"
        >
          <div
            className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border ${
              highContrast
                ? "bg-black text-yellow-300 border-2 border-yellow-400"
                : "bg-white text-slate-900 border-slate-200"
            }`}
          >
            <div className="relative h-60 sm:h-72 w-full bg-slate-200">
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
                className={`absolute top-4 right-4 p-2.5 rounded-full shadow-md transition cursor-pointer ${
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
                  {getCategoryDisplayLabel(selectedArticle.category)}
                </span>
                <span className="opacity-75">{selectedArticle.date}</span>
                <span>•</span>
                <span className="opacity-75">{selectedArticle.readTime}</span>
              </div>

              <h3
                id="news-modal-title"
                className="text-2xl font-extrabold leading-tight"
              >
                {selectedArticle.title}
              </h3>

              <div
                className={`space-y-4 text-base leading-relaxed ${
                  highContrast ? "text-yellow-100" : "text-slate-700"
                }`}
              >
                {selectedArticle.content.map((para, idx) => (
                  <p key={idx}>{para}</p>
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
    </main>
  );
}