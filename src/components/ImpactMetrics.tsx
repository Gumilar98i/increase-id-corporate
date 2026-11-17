'use client';

import React from 'react';
import { usePreferences } from '@/context/PreferencesContext';
import {
  Rocket,
  Users,
  Building2,
  MapPin,
  CheckCircle,
} from 'lucide-react';

export default function ImpactMetrics() {
  const { content, highContrast } = usePreferences();
  const { impactSection } = content;

  const getMetricIcon = (id: string) => {
    switch (id) {
      case 'metric-1':
        return Rocket;
      case 'metric-2':
        return Users;
      case 'metric-3':
        return Building2;
      case 'metric-4':
      default:
        return MapPin;
    }
  };

  return (
    <section
      id="dampak"
      aria-labelledby="impact-heading"
      className={`border-b py-16 sm:py-24 transition-colors ${
        highContrast
          ? 'border-yellow-400 bg-zinc-950 text-white'
          : 'border-slate-200 bg-white text-slate-900'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Bagian Angka Dampak */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p
              className={`text-xs font-extrabold uppercase tracking-widest ${
                highContrast ? 'text-yellow-400' : 'text-blue-700'
              }`}
            >
              {impactSection.eyebrow}
            </p>
            <h2
              id="impact-heading"
              className="mt-2 text-2xl font-extrabold tracking-tight sm:text-4xl"
            >
              {impactSection.title}
            </h2>
            <p
              className={`mt-4 text-base leading-relaxed ${
                highContrast ? 'text-zinc-300' : 'text-slate-600'
              }`}
            >
              {impactSection.description}
            </p>
          </div>

          {/* Indikator Verifikasi Data */}
          <div
            className={`inline-flex items-center gap-2 self-start rounded-full border px-4 py-2 text-xs font-semibold lg:self-auto ${
              highContrast
                ? 'border-yellow-400 bg-black text-yellow-300'
                : 'border-teal-200 bg-teal-50 text-teal-800'
            }`}
          >
            <CheckCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{impactSection.lastUpdated}</span>
          </div>
        </div>

        {/* Grid 4 Kartu Metrik Dampak */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impactSection.metrics.map((metric) => {
            const IconComponent = getMetricIcon(metric.id);

            return (
              <article
                key={metric.id}
                className={`group relative flex flex-col justify-between rounded-2xl border p-6 transition-all ${
                  highContrast
                    ? 'border-2 border-yellow-400 bg-black hover:bg-zinc-900'
                    : 'border-slate-200 bg-slate-50/70 hover:-translate-y-1 hover:border-blue-600/40 hover:bg-white hover:shadow-lg hover:shadow-blue-900/5'
                }`}
              >
                <div>
                  {/* Baris Atas: Kategori & Ikon */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-block rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${
                        highContrast
                          ? 'bg-zinc-800 text-yellow-400'
                          : 'bg-blue-100/80 text-blue-800'
                      }`}
                    >
                      {metric.category}
                    </span>
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        highContrast
                          ? 'bg-yellow-400 text-black'
                          : 'bg-white text-blue-700 shadow-sm ring-1 ring-slate-200/80'
                      }`}
                    >
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Angka Utama */}
                  <div className="mt-6 flex items-baseline gap-1">
                    <span
                      className={`text-4xl font-black tracking-tight sm:text-5xl ${
                        highContrast ? 'text-yellow-400' : 'text-slate-900'
                      }`}
                    >
                      {metric.value}
                    </span>
                    <span
                      className={`text-xl font-extrabold ${
                        highContrast ? 'text-white' : 'text-blue-700'
                      }`}
                    >
                      {metric.suffix}
                    </span>
                  </div>

                  {/* Label Metrik */}
                  <h3 className="mt-3 text-base font-bold leading-snug">
                    {metric.label}
                  </h3>
                </div>

                {/* Deskripsi Penjelas */}
                <p
                  className={`mt-4 border-t pt-4 text-xs leading-relaxed ${
                    highContrast
                      ? 'border-zinc-800 text-zinc-300'
                      : 'border-slate-200/80 text-slate-600'
                  }`}
                >
                  {metric.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
