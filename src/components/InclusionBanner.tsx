'use client';

import React from 'react';
import { usePreferences } from '@/context/PreferencesContext';
import {
  Accessibility,
  Handshake,
  BarChart3,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';

export default function InclusionBanner() {
  const { content, highContrast, lang } = usePreferences();
  const { inclusionCommitment } = content;

  const pointIcons = [Accessibility, Handshake, BarChart3];

  return (
    <section
      id="inklusi"
      aria-labelledby="inclusion-heading"
      className={`border-b py-16 sm:py-24 transition-colors ${
        highContrast
          ? 'border-yellow-400 bg-zinc-950 text-white'
          : 'border-slate-800 bg-slate-900 text-white'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Kolom Kiri: Pernyataan Komitmen Inklusi */}
          <div className="lg:col-span-5">
            <div
              className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest ${
                highContrast
                  ? 'border-yellow-400 bg-black text-yellow-400'
                  : 'border-teal-400/30 bg-teal-500/10 text-teal-300'
              }`}
            >
              <Accessibility className="h-4 w-4" aria-hidden="true" />
              <span>{inclusionCommitment.eyebrow}</span>
            </div>

            <h2
              id="inclusion-heading"
              className="mt-5 text-2xl font-extrabold tracking-tight sm:text-4xl sm:leading-tight"
            >
              {inclusionCommitment.title}
            </h2>

            <p
              className={`mt-4 text-base leading-relaxed ${
                highContrast ? 'text-zinc-200' : 'text-slate-300'
              }`}
            >
              {inclusionCommitment.description}
            </p>

            {/* Kotak Kutipan Prinsip Utama */}
            <div
              className={`mt-8 rounded-2xl border p-5 ${
                highContrast
                  ? 'border-yellow-400 bg-black text-yellow-300'
                  : 'border-slate-700/80 bg-slate-800/70 text-slate-200'
              }`}
            >
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className={`mt-0.5 h-5 w-5 shrink-0 ${
                    highContrast ? 'text-yellow-400' : 'text-teal-400'
                  }`}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-bold">
                    &ldquo;Nothing About Us Without Us&rdquo;
                  </p>
                  <p
                    className={`mt-1 text-xs leading-relaxed ${
                      highContrast ? 'text-zinc-300' : 'text-slate-400'
                    }`}
                  >
                    {lang === 'id'
                      ? 'Penyandang disabilitas terlibat langsung sebagai perancang kurikulum, fasilitator, dan pengambil keputusan strategis di Increase.id.'
                      : 'Persons with disabilities are directly involved as curriculum architects, facilitators, and strategic decision-makers at Increase.id.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#kontak"
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                  highContrast
                    ? 'bg-yellow-400 text-black hover:bg-yellow-300 focus:ring-yellow-400'
                    : 'bg-teal-500 text-slate-950 hover:bg-teal-400 focus:ring-teal-400'
                }`}
              >
                <span>{inclusionCommitment.ctaText}</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Kolom Kanan: 3 Pilar Standar Aksesibilitas & Tata Kelola */}
          <div className="grid grid-cols-1 gap-6 lg:col-span-7">
            {inclusionCommitment.points.map((point, index) => {
              const IconComponent = pointIcons[index % pointIcons.length];

              return (
                <div
                  key={point.title}
                  className={`flex flex-col gap-4 rounded-2xl border p-6 sm:flex-row sm:items-start sm:p-7 transition ${
                    highContrast
                      ? 'border-2 border-yellow-400 bg-black'
                      : 'border-slate-800 bg-slate-800/50 hover:border-teal-500/40 hover:bg-slate-800/90'
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                      highContrast
                        ? 'bg-yellow-400 text-black'
                        : 'bg-blue-600/20 text-teal-300 ring-1 ring-teal-400/30'
                    }`}
                  >
                    <IconComponent className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-extrabold uppercase tracking-wider ${
                          highContrast ? 'text-yellow-400' : 'text-teal-400'
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <h3 className="text-lg font-extrabold text-white">
                        {point.title}
                      </h3>
                    </div>
                    <p
                      className={`mt-2 text-sm leading-relaxed ${
                        highContrast ? 'text-zinc-300' : 'text-slate-300'
                      }`}
                    >
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}