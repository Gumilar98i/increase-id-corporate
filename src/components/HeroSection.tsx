'use client';

import React from 'react';
import { usePreferences } from '@/context/PreferencesContext';
import {
  ArrowRight,
  FileDown,
  Users,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';

export default function HeroSection() {
  const { content, highContrast, lang } = usePreferences();

  const quickHighlights =
    lang === 'id'
      ? [
          'Kurikulum Berbasis Universal Design',
          'Akses Rantai Pasok Korporasi (B2B)',
          'Standar Aksesibilitas WCAG 2.1 AA',
        ]
      : [
          'Universal Design Curriculum',
          'Corporate Supply Chain Access (B2B)',
          'WCAG 2.1 AA Accessibility Standard',
        ];

  return (
    <section
      id="tentang"
      aria-labelledby="hero-heading"
      className={`relative overflow-hidden border-b transition-colors ${
        highContrast
          ? 'border-yellow-400 bg-black text-white'
          : 'border-slate-200 bg-gradient-to-br from-slate-50 via-blue-50/40 to-teal-50/30 text-slate-900'
      }`}
    >
      {/* Dekorasi Latar Belakang Halus (Disembunyikan saat Mode Kontras Tinggi) */}
      {!highContrast && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl" />
        </div>
      )}

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Kolom Kiri: Narasi Korporat & CTA */}
          <div className="lg:col-span-7">
            <div
              className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-bold tracking-wider uppercase ${
                highContrast
                  ? 'border-yellow-400 bg-zinc-900 text-yellow-400'
                  : 'border-blue-200 bg-blue-100/80 text-blue-800'
              }`}
            >
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{content.hero.eyebrow}</span>
            </div>

            <h1
              id="hero-heading"
              className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl lg:leading-[1.15]"
            >
              {content.hero.title}{' '}
              <span
                className={
                  highContrast
                    ? 'underline decoration-yellow-400 decoration-4 underline-offset-8 text-yellow-400'
                    : 'bg-gradient-to-r from-blue-700 via-blue-600 to-teal-600 bg-clip-text text-transparent'
                }
              >
                {content.hero.highlightTitle}
              </span>
            </h1>

            <p
              className={`mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${
                highContrast ? 'text-zinc-200' : 'text-slate-600'
              }`}
            >
              {content.hero.description}
            </p>

            {/* Daftar Poin Keunggulan Singkat */}
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
              {quickHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2
                    className={`h-4 w-4 shrink-0 ${
                      highContrast ? 'text-yellow-400' : 'text-teal-600'
                    }`}
                    aria-hidden="true"
                  />
                  <span className={highContrast ? 'text-white' : 'text-slate-700'}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Tombol Call-To-Action */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#pilar"
                className={`inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  highContrast
                    ? 'bg-yellow-400 text-black hover:bg-yellow-300 focus:ring-yellow-400'
                    : 'bg-blue-700 text-white shadow-lg shadow-blue-700/25 hover:bg-blue-800 focus:ring-blue-700'
                }`}
              >
                <span>{content.hero.primaryCta}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#dampak"
                className={`inline-flex items-center gap-2.5 rounded-full border px-6 py-3.5 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  highContrast
                    ? 'border-2 border-white bg-black text-white hover:bg-zinc-900 focus:ring-yellow-400'
                    : 'border-slate-300 bg-white text-slate-800 shadow-sm hover:border-blue-600 hover:text-blue-700 focus:ring-blue-600'
                }`}
              >
                <FileDown className="h-4 w-4" aria-hidden="true" />
                <span>{content.hero.secondaryCta}</span>
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Kartu Sorotan Korporat & Ekosistem Inklusif */}
          <div className="lg:col-span-5">
            <div
              className={`rounded-3xl border p-6 sm:p-8 transition-all ${
                highContrast
                  ? 'border-2 border-yellow-400 bg-zinc-950 text-white'
                  : 'border-slate-200/90 bg-white/95 shadow-xl shadow-slate-900/5 backdrop-blur'
              }`}
            >
              {/* Header Kartu Visual */}
              <div className="flex items-center justify-between border-b pb-5 border-slate-200/60 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      highContrast
                        ? 'bg-yellow-400 text-black'
                        : 'bg-blue-50 text-blue-700'
                    }`}
                  >
                    <Users className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p
                      className={`text-xs font-bold uppercase tracking-wider ${
                        highContrast ? 'text-yellow-400' : 'text-blue-700'
                      }`}
                    >
                      {lang === 'id' ? 'Sorotan Dampak Utama' : 'Featured Impact Highlight'}
                    </p>
                    <p
                      className={`text-sm font-medium ${
                        highContrast ? 'text-zinc-300' : 'text-slate-600'
                      }`}
                    >
                      {content.hero.featuredStatLabel}
                    </p>
                  </div>
                </div>
              </div>

              {/* Angka Sorotan Besar */}
              <div className="my-6">
                <div
                  className={`text-4xl font-black tracking-tight sm:text-5xl ${
                    highContrast ? 'text-yellow-400' : 'text-slate-900'
                  }`}
                >
                  {content.hero.featuredStatValue}
                </div>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    highContrast ? 'text-zinc-300' : 'text-slate-600'
                  }`}
                >
                  {lang === 'id'
                    ? 'Terhubung langsung dengan jaringan inkubator, pelatihan kesiapan kerja, dan kemitraan rantai pasok di 24 provinsi Indonesia.'
                    : 'Directly connected to our incubation network, job-readiness bootcamps, and corporate supply chain partnerships across 24 Indonesian provinces.'}
                </p>
              </div>

              {/* 2 Kartu Mini Pilar Pendukung */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div
                  className={`rounded-2xl border p-4 ${
                    highContrast
                      ? 'border-zinc-700 bg-zinc-900'
                      : 'border-slate-100 bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp
                      className={`h-4 w-4 ${
                        highContrast ? 'text-yellow-400' : 'text-teal-600'
                      }`}
                      aria-hidden="true"
                    />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {lang === 'id' ? 'Pertumbuhan Mitra' : 'Venture Growth'}
                    </span>
                  </div>
                  <p className="mt-1.5 text-lg font-extrabold">185+ UMKM</p>
                  <p
                    className={`text-xs ${
                      highContrast ? 'text-zinc-300' : 'text-slate-500'
                    }`}
                  >
                    {lang === 'id'
                      ? 'Wirausaha sosial & kreatif terinkubasi'
                      : 'Incubated creative & social ventures'}
                  </p>
                </div>

                <div
                  className={`rounded-2xl border p-4 ${
                    highContrast
                      ? 'border-zinc-700 bg-zinc-900'
                      : 'border-slate-100 bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck
                      className={`h-4 w-4 ${
                        highContrast ? 'text-yellow-400' : 'text-blue-600'
                      }`}
                      aria-hidden="true"
                    />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {lang === 'id' ? 'Transformasi DEI' : 'DEI Transformation'}
                    </span>
                  </div>
                  <p className="mt-1.5 text-lg font-extrabold">
                    {lang === 'id' ? '42 Korporasi' : '42 Enterprises'}
                  </p>
                  <p
                    className={`text-xs ${
                      highContrast ? 'text-zinc-300' : 'text-slate-500'
                    }`}
                  >
                    {lang === 'id'
                      ? 'Mitra implementasi bisnis inklusif'
                      : 'Inclusive business advisory partners'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}