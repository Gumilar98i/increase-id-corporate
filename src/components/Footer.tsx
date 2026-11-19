"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Mail, ArrowUpRight, Accessibility } from "lucide-react";
import { usePreferences } from "@/context/PreferencesContext";

export default function Footer() {
  const { language, highContrast } = usePreferences();

  const navLinks = [
    {
      href: "/tentang-kami",
      label: language === "id" ? "Tentang Kami" : "About Us",
    },
    {
      href: "/program",
      label: language === "id" ? "Pilar Program" : "Program Pillars",
    },
    {
      href: "/berita",
      label: language === "id" ? "Berita & Riset" : "News & Insights",
    },
    {
      href: "/kontak",
      label: language === "id" ? "Kontak & Kemitraan" : "Contact & Partnership",
    },
  ];

  return (
    <footer
      className={`transition-colors duration-200 ${
        highContrast
          ? "bg-black text-yellow-300 border-t-2 border-yellow-400"
          : "bg-slate-950 text-slate-300"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-slate-800/80">
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-lg transition-transform group-hover:scale-105 ${
                  highContrast
                    ? "bg-yellow-400 text-black"
                    : "bg-teal-600 text-white"
                }`}
              >
                in
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                increase
                <span
                  className={highContrast ? "text-yellow-400" : "text-teal-400"}
                >
                  .id
                </span>
              </span>
            </Link>

            <p
              className={`text-sm leading-relaxed max-w-sm ${
                highContrast ? "text-yellow-100" : "text-slate-400"
              }`}
            >
              {language === "id"
                ? "Inclusive Creative Social Enterprise yang menghubungkan talenta disabilitas dengan ekosistem industri modern."
                : "An Inclusive Creative Social Enterprise connecting talents with disabilities to modern industry ecosystems."}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">
              {language === "id" ? "Navigasi" : "Navigation"}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${
                      highContrast
                        ? "text-yellow-200 hover:text-yellow-400 hover:underline"
                        : "text-slate-400 hover:text-teal-400"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Hub & Partnership Contact */}
          <div className="md:col-span-4 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">
              {language === "id" ? "Increase Inclusive Hub" : "Increase Inclusive Hub"}
            </h3>
            <ul
              className={`space-y-3 text-sm ${
                highContrast ? "text-yellow-100" : "text-slate-400"
              }`}
            >
              <li className="flex items-start gap-2.5">
                <MapPin
                  className={`w-4 h-4 mt-0.5 shrink-0 ${
                    highContrast ? "text-yellow-400" : "text-teal-400"
                  }`}
                />
                <span>Jl. Kemang Raya No. 88, Jakarta Selatan</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail
                  className={`w-4 h-4 shrink-0 ${
                    highContrast ? "text-yellow-400" : "text-teal-400"
                  }`}
                />
                <a
                  href="mailto:partnership@increase.id"
                  className="hover:text-white transition-colors"
                >
                  partnership@increase.id
                </a>
              </li>
            </ul>

            <div className="pt-1">
              <Link
                href="/kontak"
                className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                  highContrast
                    ? "text-yellow-400 underline"
                    : "text-teal-400 hover:text-teal-300"
                }`}
              >
                <span>
                  {language === "id"
                    ? "Mulai Kemitraan"
                    : "Start a Partnership"}
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & WCAG 2.1 Level AA Note */}
        <div
          className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
            highContrast ? "text-yellow-200" : "text-slate-500"
          }`}
        >
          <p>© 2026 Increase.id — Inclusive Creative Social Enterprise.</p>
          <div className="inline-flex items-center gap-1.5 font-medium">
            <Accessibility
              className={`w-3.5 h-3.5 ${
                highContrast ? "text-yellow-400" : "text-teal-500"
              }`}
            />
            <span>
              {language === "id"
                ? "Memenuhi standar aksesibilitas WCAG 2.1 Level AA"
                : "Compliant with WCAG 2.1 Level AA accessibility standards"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}