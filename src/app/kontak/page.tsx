"use client";

import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Handshake,
} from "lucide-react";
import { usePreferences } from "@/context/PreferencesContext";
import { siteContent } from "@/data/siteContent";

export default function ContactPage() {
  const { language, highContrast } = usePreferences();
  const content = siteContent[language].contact;

  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    topic: content.topics[0],
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      organization: "",
      email: "",
      topic: content.topics[0],
      message: "",
    });
    setIsSubmitted(false);
  };

  return (
    <main
      className={`min-h-screen py-14 lg:py-24 transition-colors duration-200 ${
        highContrast
          ? "bg-black text-yellow-300"
          : "bg-gradient-to-b from-teal-50/40 via-white to-slate-50/60 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* KOLOM KIRI: Ajakan Kolaborasi CSR/B2B & Informasi Hub */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
                  highContrast
                    ? "bg-yellow-400 text-black"
                    : "bg-teal-100/80 text-teal-800"
                }`}
              >
                <Handshake className="w-3.5 h-3.5" />
                <span>{content.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.12]">
                {content.title}
              </h1>

              <p
                className={`text-base leading-relaxed ${
                  highContrast ? "text-yellow-100" : "text-slate-600"
                }`}
              >
                {language === "id"
                  ? "Bangun dampak sosial terukur melalui kemitraan CSR, pengadaan inklusif B2B, audit aksesibilitas digital, maupun penyaluran talenta kreatif disabilitas bersama Increase.id."
                  : "Build measurable social impact through CSR partnerships, inclusive B2B procurement, digital accessibility audits, and creative disability talent placement with Increase.id."}
              </p>
            </div>

            {/* Detail Alamat & Kontak Resmi */}
            <div
              className={`p-7 rounded-3xl border space-y-6 ${
                highContrast
                  ? "bg-zinc-950 border-yellow-400"
                  : "bg-white border-slate-200/80 shadow-2xs"
              }`}
            >
              {/* Alamat Increase Inclusive Hub */}
              <div className="flex items-start gap-4">
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${
                    highContrast
                      ? "bg-yellow-400 text-black"
                      : "bg-teal-50 text-teal-700"
                  }`}
                >
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider opacity-75">
                    Increase Inclusive Hub
                  </h2>
                  <p
                    className={`mt-1 text-sm font-semibold leading-relaxed ${
                      highContrast ? "text-yellow-100" : "text-slate-800"
                    }`}
                  >
                    Jl. Kemang Raya No. 88, Jakarta Selatan
                  </p>
                </div>
              </div>

              {/* Email Kemitraan */}
              <div className="flex items-start gap-4">
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${
                    highContrast
                      ? "bg-yellow-400 text-black"
                      : "bg-teal-50 text-teal-700"
                  }`}
                >
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider opacity-75">
                    {content.emailLabel}
                  </h2>
                  <a
                    href="mailto:partnership@increase.id"
                    className={`mt-1 inline-block text-sm font-bold hover:underline ${
                      highContrast ? "text-yellow-300" : "text-teal-700"
                    }`}
                  >
                    partnership@increase.id
                  </a>
                </div>
              </div>

              {/* Telepon Resmi */}
              <div className="flex items-start gap-4">
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${
                    highContrast
                      ? "bg-yellow-400 text-black"
                      : "bg-teal-50 text-teal-700"
                  }`}
                >
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider opacity-75">
                    {language === "id" ? "Telepon" : "Phone"}
                  </h2>
                  <a
                    href="tel:+622150987712"
                    className={`mt-1 inline-block text-sm font-semibold hover:underline ${
                      highContrast ? "text-yellow-100" : "text-slate-800"
                    }`}
                  >
                    +62 (21) 5098-7712
                  </a>
                </div>
              </div>

              {/* Jam Operasional */}
              <div className="flex items-start gap-4">
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${
                    highContrast
                      ? "bg-yellow-400 text-black"
                      : "bg-teal-50 text-teal-700"
                  }`}
                >
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider opacity-75">
                    {content.hoursLabel}
                  </h2>
                  <p
                    className={`mt-1 text-sm font-semibold ${
                      highContrast ? "text-yellow-100" : "text-slate-800"
                    }`}
                  >
                    {content.hoursValue}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: Formulir Kemitraan Interaktif */}
          <div className="lg:col-span-7">
            <div
              className={`p-8 sm:p-11 rounded-3xl border transition-all ${
                highContrast
                  ? "bg-zinc-950 border-yellow-400"
                  : "bg-white border-slate-200/80 shadow-xl shadow-slate-200/40"
              }`}
            >
              <h2 className="text-2xl font-extrabold tracking-tight mb-2">
                {content.formTitle}
              </h2>
              <p
                className={`text-sm mb-8 ${
                  highContrast ? "text-yellow-200" : "text-slate-500"
                }`}
              >
                {language === "id"
                  ? "Lengkapi detail di bawah ini dan tim kemitraan kami akan segera menjadwalkan sesi diskusi."
                  : "Complete the details below and our partnership team will schedule an introductory call."}
              </p>

              {isSubmitted ? (
                <div
                  className={`p-8 rounded-3xl border text-center space-y-5 ${
                    highContrast
                      ? "bg-black border-2 border-yellow-400 text-yellow-300"
                      : "bg-teal-50/70 border-teal-200 text-teal-950"
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  <div
                    className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center ${
                      highContrast
                        ? "bg-yellow-400 text-black"
                        : "bg-teal-600 text-white shadow-md"
                    }`}
                  >
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-xl font-extrabold">
                      {language === "id"
                        ? "Pengajuan Kemitraan Terkirim"
                        : "Partnership Inquiry Sent"}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        highContrast ? "text-yellow-100" : "text-teal-800"
                      }`}
                    >
                      {language === "id"
                        ? `Terima kasih, ${formData.name || "Mitra"}. Pesan dari ${
                            formData.organization || "instansi Anda"
                          } telah kami terima. Tim Increase.id akan menghubungi Anda dalam 1–2 hari kerja.`
                        : `Thank you, ${formData.name || "Partner"}. We have received your inquiry from ${
                            formData.organization || "your organization"
                          }. The Increase.id team will reach out within 1–2 business days.`}
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className={`px-6 py-2.5 rounded-full text-xs font-bold transition cursor-pointer ${
                        highContrast
                          ? "bg-yellow-400 text-black hover:bg-yellow-300"
                          : "bg-teal-700 text-white hover:bg-teal-800"
                      }`}
                    >
                      {language === "id"
                        ? "Kirim Pengajuan Lainnya"
                        : "Submit Another Inquiry"}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nama */}
                    <div>
                      <label
                        htmlFor="partnership-name"
                        className="block text-xs font-bold uppercase tracking-wider mb-2"
                      >
                        {language === "id" ? "Nama Lengkap" : "Full Name"} *
                      </label>
                      <input
                        id="partnership-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder={content.namePlaceholder}
                        className={`w-full px-4 py-3.5 rounded-xl text-sm border transition focus:outline-none focus:ring-2 ${
                          highContrast
                            ? "bg-black border-yellow-400 text-yellow-300 focus:ring-yellow-400"
                            : "bg-slate-50/80 border-slate-200 text-slate-900 focus:bg-white focus:border-teal-600 focus:ring-teal-600/20"
                        }`}
                      />
                    </div>

                    {/* Instansi / Perusahaan */}
                    <div>
                      <label
                        htmlFor="partnership-org"
                        className="block text-xs font-bold uppercase tracking-wider mb-2"
                      >
                        {language === "id"
                          ? "Instansi / Perusahaan"
                          : "Organization / Company"}{" "}
                        *
                      </label>
                      <input
                        id="partnership-org"
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            organization: e.target.value,
                          })
                        }
                        placeholder={content.orgPlaceholder}
                        className={`w-full px-4 py-3.5 rounded-xl text-sm border transition focus:outline-none focus:ring-2 ${
                          highContrast
                            ? "bg-black border-yellow-400 text-yellow-300 focus:ring-yellow-400"
                            : "bg-slate-50/80 border-slate-200 text-slate-900 focus:bg-white focus:border-teal-600 focus:ring-teal-600/20"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="partnership-email"
                        className="block text-xs font-bold uppercase tracking-wider mb-2"
                      >
                        Email *
                      </label>
                      <input
                        id="partnership-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder={content.emailPlaceholder}
                        className={`w-full px-4 py-3.5 rounded-xl text-sm border transition focus:outline-none focus:ring-2 ${
                          highContrast
                            ? "bg-black border-yellow-400 text-yellow-300 focus:ring-yellow-400"
                            : "bg-slate-50/80 border-slate-200 text-slate-900 focus:bg-white focus:border-teal-600 focus:ring-teal-600/20"
                        }`}
                      />
                    </div>

                    {/* Topik Kolaborasi */}
                    <div>
                      <label
                        htmlFor="partnership-topic"
                        className="block text-xs font-bold uppercase tracking-wider mb-2"
                      >
                        {language === "id"
                          ? "Topik Kolaborasi"
                          : "Collaboration Topic"}
                      </label>
                      <select
                        id="partnership-topic"
                        value={formData.topic}
                        onChange={(e) =>
                          setFormData({ ...formData, topic: e.target.value })
                        }
                        className={`w-full px-4 py-3.5 rounded-xl text-sm border transition focus:outline-none focus:ring-2 ${
                          highContrast
                            ? "bg-black border-yellow-400 text-yellow-300 focus:ring-yellow-400"
                            : "bg-slate-50/80 border-slate-200 text-slate-900 focus:bg-white focus:border-teal-600 focus:ring-teal-600/20"
                        }`}
                      >
                        {content.topics.map((topic, idx) => (
                          <option key={idx} value={topic}>
                            {topic}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Pesan */}
                  <div>
                    <label
                      htmlFor="partnership-message"
                      className="block text-xs font-bold uppercase tracking-wider mb-2"
                    >
                      {language === "id" ? "Pesan" : "Message"} *
                    </label>
                    <textarea
                      id="partnership-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder={content.messagePlaceholder}
                      className={`w-full px-4 py-3.5 rounded-xl text-sm border transition focus:outline-none focus:ring-2 ${
                        highContrast
                          ? "bg-black border-yellow-400 text-yellow-300 focus:ring-yellow-400"
                          : "bg-slate-50/80 border-slate-200 text-slate-900 focus:bg-white focus:border-teal-600 focus:ring-teal-600/20"
                      }`}
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className={`inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold transition-all cursor-pointer ${
                        highContrast
                          ? "bg-yellow-400 text-black hover:bg-yellow-300"
                          : "bg-teal-700 text-white hover:bg-teal-800 shadow-md hover:shadow-lg"
                      }`}
                    >
                      <Send className="w-4 h-4" />
                      <span>{content.submitBtn}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}