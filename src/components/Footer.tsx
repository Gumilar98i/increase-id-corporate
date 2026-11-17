'use client';

import React from 'react';
import { usePreferences } from '@/context/PreferencesContext';
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';

export default function Footer() {
  const { content, highContrast, lang } = usePreferences();
  const { footer, nav, pillarsSection } = content;

  return (
    <footer
      id="kontak"
      aria-labelledby="footer-heading"
      className={`transition-colors ${
        highContrast
          ? 'bg-black text-white'
          : 'bg-slate-950 text-slate-200'
      }`}
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Banner Ajakan Kemitraan (Call to Partnership) */}
      <div
        className={`border-b ${
          highContrast ? 'border-yellow-400' : 'border-slate-800'
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <p
              className={`text-xs font-extrabold uppercase tracking-widest ${
                highContrast ? 'text-yellow-400' : 'text-teal-400'
              }`}
            >
              {lang === 'id'
                ? 'KOLABORASI & KEMITRAAN STRATEGIS'
                : 'STRATEGIC COLLABORATION & PARTNERSHIP'}
            </p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              {lang === 'id'
                ? 'Siap Membangun Ekosistem Bisnis yang Lebih Inklusif Bersama Increase.id?'
                : 'Ready to Build a More Inclusive Business Ecosystem with Increase.id?'}
            </h3>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${footer.email}`}
              className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition focus:outline-none focus:ring-2 ${
                highContrast
                  ? 'bg-yellow-400 text-black hover:bg-yellow-300 focus:ring-yellow-400'
                  : 'bg-blue-600 text-white hover:bg-blue-500 focus:ring-blue-400'
              }`}
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>{footer.email}</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Isi Utama Footer */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Kolom 1: Profil Singkat & Alamat */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl font-black text-lg ${
                  highContrast
                    ? 'bg-yellow-400 text-black'
                    : 'bg-gradient-to-br from-blue-600 to-teal-500 text-white'
                }`}
              >
                IN
              </div>
              <div>
                <span className="block text-xl font-extrabold tracking-tight text-white">
                  Increase
                  <span
                    className={
                      highContrast ? 'text-yellow-400' : 'text-teal-400'
                    }
                  >
                    .id
                  </span>
                </span>
                <span className="block text-[11px] font-medium uppercase tracking-widest text-slate-400">
                  Inclusive Creative Social Enterprise
                </span>
              </div>
            </div>

            <p
              className={`mt-4 max-w-md text-sm leading-relaxed ${
                highContrast ? 'text-zinc-300' : 'text-slate-400'
              }`}
            >
              {footer.aboutText}
            </p>

            <div className="mt-6 flex items-start gap-2.5 text-sm">
              <MapPin
                className={`mt-0.5 h-4 w-4 shrink-0 ${
                  highContrast ? 'text-yellow-400' : 'text-teal-400'
                }`}
                aria-hidden="true"
              />
              <div>
                <p className="font-bold text-white">{footer.addressTitle}</p>
                {footer.addressLines.map((line) => (
                  <p
                    key={line}
                    className={
                      highContrast ? 'text-zinc-300' : 'text-slate-400'
                    }
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              {footer.quickLinksTitle}
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`transition hover:underline ${
                      highContrast
                        ? 'text-zinc-300 hover:text-yellow-400'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Pilar Program & Kontak */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              {footer.pillarsTitle}
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {pillarsSection.pillars.map((pillar) => (
                <li key={pillar.id}>
                  <a
                    href={pillar.href}
                    className={`transition hover:underline ${
                      highContrast
                        ? 'text-zinc-300 hover:text-yellow-400'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {pillar.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-slate-800 pt-5">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
                {footer.contactTitle}
              </h4>
              <div className="mt-3 space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Mail
                    className={`h-4 w-4 ${
                      highContrast ? 'text-yellow-400' : 'text-teal-400'
                    }`}
                    aria-hidden="true"
                  />
                  <a
                    href={`mailto:${footer.email}`}
                    className="hover:underline"
                  >
                    {footer.email}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone
                    className={`h-4 w-4 ${
                      highContrast ? 'text-yellow-400' : 'text-teal-400'
                    }`}
                    aria-hidden="true"
                  />
                  <span>{footer.phone}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Baris Hak Cipta & Pernyataan Standar WCAG */}
        <div
          className={`mt-12 flex flex-col items-start justify-between gap-4 border-t pt-8 text-xs sm:flex-row sm:items-center ${
            highContrast
              ? 'border-yellow-400/50 text-zinc-300'
              : 'border-slate-800 text-slate-400'
          }`}
        >
          <p>{footer.copyright}</p>
          <p className="inline-flex items-center gap-2 font-medium">
            <ShieldCheck
              className={`h-4 w-4 ${
                highContrast ? 'text-yellow-400' : 'text-teal-400'
              }`}
              aria-hidden="true"
            />
            <span>{footer.accessibilityStatement}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
