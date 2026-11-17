'use client';

import React, { useState } from 'react';
import { usePreferences } from '@/context/PreferencesContext';
import {
  Lightbulb,
  TrendingUp,
  Briefcase,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';

export default function PillarsSection() {
  const { content, highContrast, lang } = usePreferences();
  const { pillarsSection } = content;

  const [activePillarId, setActivePillarId] = useState<string>('all');

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'incubator':
        return Lightbulb;
      case 'accelerator':
        return TrendingUp;
      case 'advisory':
      default:
        return Briefcase;
    }
  };

  const getAccentClasses = (accent: 'blue' | 'teal' | 'amber') => {
    if (highContrast) {
      return {
        badge: 'bg-yellow-400 text-black',
        iconBox: 'bg-yellow-400 text-black',
        border: 'border-2 border-yellow-400 bg-zinc-950',
        check: 'text-yellow-400',
        button:
          'bg-yellow-400 text-black hover:bg-yellow-300 focus:ring-yellow-400',
      };
    }

    switch (accent) {
      case 'blue':
        return {
          badge: 'bg-blue-100 text-blue-800 border border-blue-200',
          iconBox: 'bg-blue-700 text-white shadow-md shadow-blue-700/20',
          border: 'border-slate-200 bg-white hover:border-blue-600/50',
          check: 'text-blue-700',
          button:
            'bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-700',
        };
      case 'teal':
        return {
          badge: 'bg-teal-100 text-teal-900 border border-teal-200',
          iconBox: 'bg-teal-600 text-white shadow-md shadow-teal-600/20',
          border: 'border-slate-200 bg-white hover:border-teal-600/50',
          check: 'text-teal-600',
          button:
            'bg-teal-700 text-white hover:bg-teal-800 focus:ring-teal-700',
        };
      case 'amber':
      default:
        return {
          badge: 'bg-amber-100 text-amber-900 border border-amber-200',
          iconBox: 'bg-slate-900 text-amber-400 shadow-md shadow-slate-900/20',
          border: 'border-slate-200 bg-white hover:border-amber-500/60',
          check: 'text-amber-600',
          button:
            'bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900',
        };
    }
  };

  const filteredPillars =
    activePillarId === 'all'
      ? pillarsSection.pillars
      : pillarsSection.pillars.filter((p) => p.id === activePillarId);

  return (
    <section
      id="pilar"
      aria-labelledby="pillars-heading"
      className={`border-b py-16 sm:py-24 transition-colors ${
        highContrast
          ? 'border-yellow-400 bg-black text-white'
          : 'border-slate-200 bg-slate-50 text-slate-900'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Bagian Pilar Program */}
        <div className="mx-auto max-w-3xl text-center">
          <p
            className={`text-xs font-extrabold uppercase tracking-widest ${
              highContrast ? 'text-yellow-400' : 'text-blue-700'
            }`}
          >
            {pillarsSection.eyebrow}
          </p>
          <h2
            id="pillars-heading"
            className="mt-2 text-2xl font-extrabold tracking-tight sm:text-4xl"
          >
            {pillarsSection.title}
          </h2>
          <p
            className={`mt-4 text-base leading-relaxed ${
              highContrast ? 'text-zinc-300' : 'text-slate-600'
            }`}
          >
            {pillarsSection.description}
          </p>
        </div>

        {/* Filter Tab Interaktif (Memudahkan eksplorasi fokus program) */}
        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
          role="tablist"
          aria-label={
            lang === 'id' ? 'Filter Pilar Program' : 'Filter Program Pillars'
          }
        >
          <button
            type="button"
            role="tab"
            aria-selected={activePillarId === 'all'}
            onClick={() => setActivePillarId('all')}
            className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition focus:outline-none focus:ring-2 ${
              activePillarId === 'all'
                ? highContrast
                  ? 'bg-yellow-400 text-black focus:ring-yellow-400'
                  : 'bg-blue-700 text-white shadow-sm focus:ring-blue-700'
                : highContrast
                ? 'border border-zinc-700 bg-zinc-900 text-zinc-300 hover:text-white'
                : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            {lang === 'id' ? 'Semua Pilar (3)' : 'All Pillars (3)'}
          </button>

          {pillarsSection.pillars.map((pillar) => (
            <button
              key={pillar.id}
              type="button"
              role="tab"
              aria-selected={activePillarId === pillar.id}
              onClick={() => setActivePillarId(pillar.id)}
              className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition focus:outline-none focus:ring-2 ${
                activePillarId === pillar.id
                  ? highContrast
                    ? 'bg-yellow-400 text-black focus:ring-yellow-400'
                    : 'bg-blue-700 text-white shadow-sm focus:ring-blue-700'
                  : highContrast
                  ? 'border border-zinc-700 bg-zinc-900 text-zinc-300 hover:text-white'
                  : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              {pillar.title}
            </button>
          ))}
        </div>

        {/* Grid Kartu Pilar Program */}
        <div
          className={`mt-12 grid grid-cols-1 gap-8 ${
            filteredPillars.length === 1
              ? 'mx-auto max-w-3xl'
              : 'lg:grid-cols-3'
          }`}
        >
          {filteredPillars.map((pillar) => {
            const IconComponent = getPillarIcon(pillar.id);
            const styles = getAccentClasses(pillar.accentColor);

            return (
              <article
                key={pillar.id}
                id={`pilar-${pillar.id}`}
                className={`flex flex-col justify-between rounded-3xl border p-7 sm:p-8 shadow-sm transition-all ${styles.border}`}
              >
                <div>
                  {/* Baris Atas: Badge & Ikon */}
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wider ${styles.badge}`}
                    >
                      {pillar.badge}
                    </span>
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${styles.iconBox}`}
                    >
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Judul & Subjudul Pilar */}
                  <h3 className="mt-6 text-2xl font-extrabold tracking-tight">
                    {pillar.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm font-semibold ${
                      highContrast ? 'text-yellow-300' : 'text-blue-700'
                    }`}
                  >
                    {pillar.subtitle}
                  </p>

                  {/* Deskripsi Pilar */}
                  <p
                    className={`mt-4 text-sm leading-relaxed ${
                      highContrast ? 'text-zinc-300' : 'text-slate-600'
                    }`}
                  >
                    {pillar.description}
                  </p>

                  {/* Daftar Cakupan Program (Highlights) */}
                  <div
                    className={`mt-6 border-t pt-6 ${
                      highContrast ? 'border-zinc-800' : 'border-slate-100'
                    }`}
                  >
                    <p
                      className={`text-xs font-bold uppercase tracking-wider ${
                        highContrast ? 'text-zinc-400' : 'text-slate-400'
                      }`}
                    >
                      {lang === 'id'
                        ? 'Fokus & Cakupan Utama:'
                        : 'Core Focus & Deliverables:'}
                    </p>
                    <ul className="mt-3 space-y-3">
                      {pillar.highlights.map((point, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2.5 text-sm leading-snug"
                        >
                          <CheckCircle2
                            className={`mt-0.5 h-4 w-4 shrink-0 ${styles.check}`}
                            aria-hidden="true"
                          />
                          <span
                            className={
                              highContrast ? 'text-zinc-100' : 'text-slate-700'
                            }
                          >
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tombol Aksi Pilar */}
                <div className="mt-8 pt-2">
                  <a
                    href="#kontak"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${styles.button}`}
                  >
                    <span>{pillar.ctaText}</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
