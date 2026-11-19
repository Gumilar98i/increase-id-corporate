"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, Eye, ArrowUpRight } from "lucide-react";
import { usePreferences } from "@/context/PreferencesContext";

export default function Navbar() {
  const {
    language,
    setLanguage,
    fontSize,
    setFontSize,
    highContrast,
    setHighContrast,
  } = usePreferences();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    {
      href: "/",
      label: language === "id" ? "Beranda" : "Home",
    },
    {
      href: "/tentang-kami",
      label: language === "id" ? "Tentang Kami" : "About Us",
    },
    {
      href: "/program",
      label: language === "id" ? "Program" : "Programs",
    },
    {
      href: "/berita",
      label: language === "id" ? "Berita" : "News",
    },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
        highContrast
          ? "bg-black text-yellow-300 border-b-2 border-yellow-400"
          : "bg-white/95 backdrop-blur-md text-slate-900 border-b border-slate-200/80 shadow-xs"
      }`}
    >
      {/* Slim Top Utility Bar (Accessibility & ID/EN Language Toggle) */}
      <div
        className={`text-xs transition-colors ${
          highContrast
            ? "bg-zinc-900 text-yellow-300 border-b border-yellow-500/40"
            : "bg-slate-900 text-slate-300"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between">
          <span className="hidden sm:inline font-medium tracking-wider text-[11px] uppercase opacity-85">
            Inclusive Creative Social Enterprise
          </span>

          <div className="flex items-center gap-3 ml-auto">
            {/* Font Size Resizer */}
            <div
              className="flex items-center gap-1"
              role="group"
              aria-label={language === "id" ? "Ukuran Teks" : "Text Size"}
            >
              {(["normal", "large", "xlarge"] as const).map((size, idx) => {
                const labels = ["A", "A+", "A++"];
                const active = fontSize === size;
                return (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setFontSize(size)}
                    className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition cursor-pointer ${
                      active
                        ? highContrast
                          ? "bg-yellow-400 text-black"
                          : "bg-teal-600 text-white"
                        : "hover:bg-white/10"
                    }`}
                    aria-pressed={active}
                    title={
                      language === "id"
                        ? `Ukuran huruf: ${labels[idx]}`
                        : `Font size: ${labels[idx]}`
                    }
                  >
                    {labels[idx]}
                  </button>
                );
              })}
            </div>

            <span className="opacity-30">|</span>

            {/* High Contrast Toggle */}
            <button
              type="button"
              onClick={() => setHighContrast(!highContrast)}
              className={`flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium transition cursor-pointer ${
                highContrast
                  ? "bg-yellow-400 text-black font-bold"
                  : "hover:bg-white/10 text-slate-200"
              }`}
              aria-pressed={highContrast}
            >
              <Eye className="w-3 h-3" />
              <span>{language === "id" ? "Kontras" : "Contrast"}</span>
            </button>

            <span className="opacity-30">|</span>

            {/* Slim Language Switcher (ID / EN) */}
            <div
              className="flex items-center gap-1"
              role="group"
              aria-label={language === "id" ? "Pilih Bahasa" : "Select Language"}
            >
              <Globe className="w-3 h-3 mr-0.5 opacity-80" />
              <button
                type="button"
                onClick={() => setLanguage("id")}
                className={`px-1.5 py-0.5 rounded text-[11px] font-bold transition cursor-pointer ${
                  language === "id"
                    ? highContrast
                      ? "bg-yellow-400 text-black"
                      : "bg-white text-slate-900"
                    : "opacity-70 hover:opacity-100"
                }`}
                aria-pressed={language === "id"}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-1.5 py-0.5 rounded text-[11px] font-bold transition cursor-pointer ${
                  language === "en"
                    ? highContrast
                      ? "bg-yellow-400 text-black"
                      : "bg-white text-slate-900"
                    : "opacity-70 hover:opacity-100"
                }`}
                aria-pressed={language === "en"}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Corporate Navigation */}
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label={language === "id" ? "Navigasi Utama" : "Main Navigation"}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-lg tracking-tight transition-transform group-hover:scale-105 ${
              highContrast
                ? "bg-yellow-400 text-black"
                : "bg-gradient-to-br from-teal-600 to-emerald-700 text-white shadow-xs"
            }`}
          >
            in
          </div>
          <span className="font-extrabold text-xl tracking-tight leading-none">
            increase
            <span className={highContrast ? "text-yellow-400" : "text-teal-600"}>
              .id
            </span>
          </span>
        </Link>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 text-sm font-semibold transition-colors ${
                  active
                    ? highContrast
                      ? "text-yellow-400 underline underline-offset-8 decoration-2"
                      : "text-teal-700"
                    : highContrast
                    ? "text-yellow-200 hover:text-yellow-400"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
                {active && !highContrast && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA Button -> /kontak */}
        <div className="hidden md:flex items-center">
          <Link
            href="/kontak"
            className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              highContrast
                ? "bg-yellow-400 text-black hover:bg-yellow-300"
                : "bg-teal-700 text-white hover:bg-teal-800 shadow-xs hover:shadow"
            }`}
          >
            <span>{language === "id" ? "Hubungi Kami" : "Contact Us"}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition cursor-pointer ${
            highContrast
              ? "text-yellow-300 hover:bg-zinc-800"
              : "text-slate-700 hover:bg-slate-100"
          }`}
          aria-expanded={mobileMenuOpen}
          aria-label={language === "id" ? "Buka Menu" : "Toggle Menu"}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-4 pt-2 pb-6 space-y-2 border-t ${
            highContrast
              ? "bg-black border-yellow-400 text-yellow-300"
              : "bg-white border-slate-100 text-slate-900"
          }`}
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3.5 py-2.5 rounded-xl text-base font-semibold transition ${
                  active
                    ? highContrast
                      ? "bg-yellow-400 text-black"
                      : "bg-teal-50 text-teal-700"
                    : highContrast
                    ? "hover:bg-zinc-900"
                    : "hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="pt-2">
            <Link
              href="/kontak"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-center gap-1.5 w-full py-3 rounded-full font-semibold text-sm transition ${
                highContrast
                  ? "bg-yellow-400 text-black hover:bg-yellow-300"
                  : "bg-teal-700 text-white hover:bg-teal-800"
              }`}
            >
              <span>{language === "id" ? "Hubungi Kami" : "Contact Us"}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}