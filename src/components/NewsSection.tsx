'use client';

import React, { useState } from 'react';
import { usePreferences } from '@/context/PreferencesContext';
import { ArticleItem } from '@/data/siteContent';
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  UserCheck,
  X,
} from 'lucide-react';

export default function NewsSection() {
  const { content, highContrast, lang } = usePreferences();
  const { newsSection } = content;

  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(
    null
  );

  return (
    <section
      id="berita"
      aria-labelledby="news-heading"
      className={`border-b py-16 sm:py-24 transition-colors ${
        highContrast
          ? 'border-yellow-400 bg-black text-white'
          : 'border-slate-200 bg-white text-slate-900'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Bagian Berita & Publikasi */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p
              className={`text-xs font-extrabold uppercase tracking-widest ${
                highContrast ? 'text-yellow-400' : 'text-blue-700'
              }`}
            >
              {newsSection.eyebrow}
            </p>
            <h2
              id="news-heading"
              className="mt-2 text-2xl font-extrabold tracking-tight sm:text-4xl"
            >
              {newsSection.title}
            </h2>
            <p
              className={`mt-4 text-base leading-relaxed ${
                highContrast ? 'text-zinc-300' : 'text-slate-600'
              }`}
            >
              {newsSection.description}
            </p>
          </div>

          <a
            href="#kontak"
            className={`inline-flex items-center gap-2 self-start rounded-full border px-5 py-2.5 text-sm font-bold transition lg:self-auto ${
              highContrast
                ? 'border-yellow-400 bg-zinc-900 text-yellow-400 hover:bg-zinc-800'
                : 'border-slate-300 bg-slate-50 text-slate-800 hover:border-blue-600 hover:text-blue-700'
            }`}
          >
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            <span>{newsSection.viewAllText}</span>
          </a>
        </div>

        {/* Grid 3 Artikel Korporat */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {newsSection.articles.map((article, idx) => (
            <article
              key={article.id}
              className={`group flex flex-col justify-between rounded-3xl border overflow-hidden transition-all ${
                highContrast
                  ? 'border-2 border-yellow-400 bg-zinc-950'
                  : 'border-slate-200 bg-slate-50/60 hover:-translate-y-1 hover:border-blue-600/40 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5'
              }`}
            >
              <div>
                {/* Ilustrasi Banner Visual Korporat */}
                <div
                  className={`relative flex h-44 flex-col justify-between p-6 ${
                    highContrast
                      ? 'border-b border-yellow-400 bg-zinc-900'
                      : idx === 0
                      ? 'bg-gradient-to-br from-blue-800 via-blue-700 to-teal-600 text-white'
                      : idx === 1
                      ? 'bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-600 text-white'
                      : 'bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wider ${
                        highContrast
                          ? 'bg-yellow-400 text-black'
                          : 'bg-white/20 text-white backdrop-blur-sm'
                      }`}
                    >
                      {article.category}
                    </span>
                    <span className="text-xs font-semibold opacity-90">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-medium opacity-95">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      {article.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Konten Artikel */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-lg font-extrabold leading-snug tracking-tight">
                    {article.title}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      highContrast ? 'text-zinc-300' : 'text-slate-600'
                    }`}
                  >
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Footer Kartu Artikel */}
              <div
                className={`flex items-center justify-between border-t px-6 py-4 sm:px-7 ${
                  highContrast ? 'border-zinc-800' : 'border-slate-200/80'
                }`}
              >
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                    highContrast ? 'text-zinc-300' : 'text-slate-500'
                  }`}
                >
                  <UserCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  {article.author}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedArticle(article)}
                  className={`inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider transition focus:outline-none focus:underline ${
                    highContrast
                      ? 'text-yellow-400 hover:text-yellow-300'
                      : 'text-blue-700 hover:text-blue-900'
                  }`}
                >
                  <span>{newsSection.readMoreText}</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal Pratinjau Artikel Aksesibel */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-article-title"
        >
          <div
            className={`relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border p-6 sm:p-8 shadow-2xl ${
              highContrast
                ? 'border-2 border-yellow-400 bg-black text-white'
                : 'border-slate-200 bg-white text-slate-900'
            }`}
          >
            <div className="flex items-start justify-between gap-4 border-b pb-4 border-slate-200 dark:border-zinc-800">
              <div>
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase ${
                    highContrast
                      ? 'bg-yellow-400 text-black'
                      : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {selectedArticle.category}
                </span>
                <p
                  className={`mt-2 text-xs ${
                    highContrast ? 'text-zinc-300' : 'text-slate-500'
                  }`}
                >
                  {selectedArticle.date} • {selectedArticle.readTime} •{' '}
                  {selectedArticle.author}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                aria-label={lang === 'id' ? 'Tutup artikel' : 'Close article'}
                className={`rounded-full p-2 transition ${
                  highContrast
                    ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <h3
              id="modal-article-title"
              className="mt-5 text-xl font-extrabold leading-snug sm:text-2xl"
            >
              {selectedArticle.title}
            </h3>

            <div
              className={`mt-4 space-y-4 text-sm leading-relaxed sm:text-base ${
                highContrast ? 'text-zinc-200' : 'text-slate-700'
              }`}
            >
              <p>{selectedArticle.excerpt}</p>
              <p>
                {lang === 'id'
                  ? 'Melalui pendekatan kolaboratif antara wirausaha kreatif penyandang disabilitas, mentor industri, serta mitra pengadaan korporasi, Increase.id terus membuktikan bahwa inklusivitas bukan sekadar kepatuhan sosial, melainkan penggerak inovasi dan daya saing bisnis jangka panjang.'
                  : 'Through a collaborative approach uniting creative entrepreneurs with disabilities, industry mentors, and corporate procurement partners, Increase.id continues to demonstrate that inclusion is not merely social compliance, but a catalyst for long-term business innovation and competitiveness.'}
              </p>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className={`rounded-full px-6 py-2.5 text-sm font-bold transition ${
                  highContrast
                    ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                    : 'bg-blue-700 text-white hover:bg-blue-800'
                }`}
              >
                {lang === 'id' ? 'Tutup Pratinjau' : 'Close Preview'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}