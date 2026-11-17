'use client';

import React, { useState } from 'react';
import { usePreferences, FontSizeScale } from '@/context/PreferencesContext';
import {
  Globe,
  Eye,
  Type,
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

export default function Navbar() {
  const {
    lang,
    setLang,
    highContrast,
    toggleHighContrast,
    fontSize,
    setFontSize,
    content,
  } = usePreferences();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const fontSizes: { key: FontSizeScale; label: string; aria: string }[] = [
    { key: 'normal', label: 'A', aria: 'Ukuran teks normal' },
    { key: 'large', label: 'A+', aria: 'Ukuran teks besar' },
    { key: 'xlarge', label: 'A++', aria: 'Ukuran teks ekstra besar' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Skip to Main Content Link (Penting untuk Pembaca Layar / Screen Reader) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-yellow-400 focus:px-4 focus:py-2 focus:font-bold focus:text-black focus:shadow-lg"
      >
        {content.meta.skipToContent}
      </a>

      {/* Lapis 1: Top Utility & Accessibility Bar ala Unilever */}
      <div
        className={`border-b text-xs transition-colors ${
          highContrast
            ? 'border-yellow-400/40 bg-zinc-950 text-yellow-300'
            : 'border-slate-200 bg-slate-900 text-slate-200'
        }`}
        role="region"
        aria-label={content.accessibilityBar.label}
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-teal-400" aria-hidden="true" />
            <span className="font-medium tracking-wide">
              {content.meta.siteName} — {content.meta.tagline}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            {/* Kontrol Ukuran Teks */}
            <div className="flex items-center gap-1.5" role="group" aria-label={content.accessibilityBar.fontSizeLabel}>
              <Type className="h-3.5 w-3.5 opacity-80" aria-hidden="true" />
              <span className="hidden sm:inline opacity-80">
                {content.accessibilityBar.fontSizeLabel}:
              </span>
              <div className="flex items-center rounded bg-slate-800 p-0.5">
                {fontSizes.map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setFontSize(item.key)}
                    aria-label={item.aria}
                    aria-pressed={fontSize === item.key}
                    className={`rounded px-2 py-0.5 font-semibold transition ${
                      fontSize === item.key
                        ? highContrast
                          ? 'bg-yellow-400 text-black'
                          : 'bg-blue-600 text-white'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tombol Kontras Tinggi */}
            <button
              type="button"
              onClick={toggleHighContrast}
              aria-pressed={highContrast}
              className={`flex items-center gap-1.5 rounded px-2.5 py-1 font-medium transition focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                highContrast
                  ? 'bg-yellow-400 font-bold text-black'
                  : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
              }`}
            >
              <Eye className="h-3.5 w-3.5" aria-hidden="true" />
              <span>
                {highContrast
                  ? content.accessibilityBar.contrastActive
                  : content.accessibilityBar.contrastToggle}
              </span>
            </button>

            {/* Sakelar Bahasa ID / EN */}
            <div
              className="flex items-center gap-1.5"
              role="group"
              aria-label={content.accessibilityBar.languageLabel}
            >
              <Globe className="h-3.5 w-3.5 opacity-80" aria-hidden="true" />
              <div className="flex items-center rounded bg-slate-800 p-0.5">
                <button
                  type="button"
                  onClick={() => setLang('id')}
                  aria-pressed={lang === 'id'}
                  className={`rounded px-2 py-0.5 font-semibold transition ${
                    lang === 'id'
                      ? highContrast
                        ? 'bg-yellow-400 text-black'
                        : 'bg-teal-600 text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  ID
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  aria-pressed={lang === 'en'}
                  className={`rounded px-2 py-0.5 font-semibold transition ${
                    lang === 'en'
                      ? highContrast
                        ? 'bg-yellow-400 text-black'
                        : 'bg-teal-600 text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lapis 2: Navigasi Korporat Utama */}
      <nav
        aria-label="Navigasi Utama"
        className={`border-b backdrop-blur-md transition-colors ${
          highContrast
            ? 'border-yellow-400 bg-black/95 text-white'
            : 'border-slate-200/80 bg-white/95 text-slate-900 shadow-sm'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg"
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl font-black text-lg tracking-tighter ${
                highContrast
                  ? 'bg-yellow-400 text-black'
                  : 'bg-gradient-to-br from-blue-700 via-blue-600 to-teal-500 text-white shadow-md shadow-blue-600/20'
              }`}
            >
              IN
            </div>
            <div>
              <span className="block text-xl font-extrabold tracking-tight">
                Increase<span className={highContrast ? 'text-yellow-400' : 'text-blue-700'}>.id</span>
              </span>
              <span
                className={`block text-[11px] font-medium uppercase tracking-widest ${
                  highContrast ? 'text-zinc-300' : 'text-slate-500'
                }`}
              >
                Inclusive Social Enterprise
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {content.nav.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition-colors focus:outline-none focus:underline ${
                  highContrast
                    ? 'text-white hover:text-yellow-400'
                    : 'text-slate-700 hover:text-blue-700'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:flex lg:items-center">
            <a
              href="#kontak"
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                highContrast
                  ? 'bg-yellow-400 text-black hover:bg-yellow-300 focus:ring-yellow-400'
                  : 'bg-blue-700 text-white hover:bg-blue-800 shadow-sm focus:ring-blue-700'
              }`}
            >
              <span>{content.nav.ctaButton}</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              className={`rounded-lg p-2.5 focus:outline-none focus:ring-2 ${
                highContrast
                  ? 'border border-yellow-400 text-yellow-400 focus:ring-yellow-400'
                  : 'border border-slate-200 text-slate-700 hover:bg-slate-100 focus:ring-blue-600'
              }`}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            className={`border-t px-4 pt-3 pb-6 lg:hidden ${
              highContrast
                ? 'border-yellow-400 bg-zinc-950 text-white'
                : 'border-slate-200 bg-white text-slate-900'
            }`}
          >
            <div className="flex flex-col space-y-3">
              {content.nav.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-lg px-3 py-2 text-base font-semibold ${
                    highContrast
                      ? 'hover:bg-zinc-900 hover:text-yellow-400'
                      : 'hover:bg-slate-100 hover:text-blue-700'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#kontak"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold ${
                    highContrast
                      ? 'bg-yellow-400 text-black'
                      : 'bg-blue-700 text-white hover:bg-blue-800'
                  }`}
                >
                  <span>{content.nav.ctaButton}</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
