export interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
}

export interface PillarHomeItem {
  id: string;
  title: string;
  tagline: string;
  shortDesc: string;
  image: string;
}

export interface PillarDetailItem {
  id: string;
  title: string;
  tagline: string;
  image: string;
  overview: string;
  targetAudience: string;
  duration: string;
  curriculum: {
    moduleTitle: string;
    topics: string[];
  }[];
  outcomes: string[];
}

export interface NewsItem {
  id: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
}

export interface SiteLanguageContent {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    image: string;
    imageCaption: string;
  };
  metrics: {
    title: string;
    subtitle: string;
    items: MetricItem[];
  };
  pillars: {
    badge: string;
    title: string;
    subtitle: string;
    ctaText: string;
    items: PillarHomeItem[];
  };
  inclusion: {
    badge: string;
    title: string;
    subtitle: string;
    ctaText: string;
    features: { title: string; desc: string }[];
  };
  news: {
    badge: string;
    title: string;
    subtitle: string;
    readMore: string;
    closeModal: string;
    items: NewsItem[];
  };
  aboutPage: {
    badge: string;
    title: string;
    lead: string;
    image: string;
    philosophyBadge: string;
    philosophyTitle: string;
    philosophyQuote: string;
    philosophyParagraphs: string[];
    visionTitle: string;
    visionText: string;
    missionTitle: string;
    missions: string[];
    values: { title: string; desc: string }[];
    accessibilityStandard: {
      title: string;
      subtitle: string;
      standards: { code: string; name: string; detail: string }[];
    };
  };
  programsPage: {
    badge: string;
    title: string;
    subtitle: string;
    curriculumHeading: string;
    outcomeHeading: string;
    consultCta: string;
    items: PillarDetailItem[];
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    addressLabel: string;
    addressValue: string;
    emailLabel: string;
    hoursLabel: string;
    hoursValue: string;
    formTitle: string;
    namePlaceholder: string;
    orgPlaceholder: string;
    emailPlaceholder: string;
    topicLabel: string;
    topics: string[];
    messagePlaceholder: string;
    submitBtn: string;
    successMsg: string;
  };
}

export const siteContent: Record<"id" | "en", SiteLanguageContent> = {
  id: {
    // ==========================================
    // 1. BERANDA (RINGKAS & VISUAL ALA UNILEVER)
    // ==========================================
    hero: {
      badge: "Inclusive Creative Social Enterprise",
      title: "Inovasi Kreatif Tanpa Batas.",
      subtitle:
        "Menghubungkan talenta disabilitas dengan industri melalui inkubasi, akselerasi usaha, dan konsultasi inklusi.",
      primaryCta: "Program Kami",
      secondaryCta: "Tentang Kami",
      image: "/images/hero.jpg",
      imageCaption: "Studio Kolaborasi Inklusif Increase.id",
    },
    metrics: {
      title: "Dampak Terukur",
      subtitle: "Skala transformasi inklusif di seluruh Indonesia.",
      items: [
        {
          value: "1.250+",
          label: "Talenta Kreatif",
          sublabel: "Tersertifikasi & siap kerja",
        },
        {
          value: "48",
          label: "Mitra Korporasi",
          sublabel: "Transformasi kerja inklusif",
        },
        {
          value: "82%",
          label: "Serapan Industri",
          sublabel: "Karier & wirausaha mandiri",
        },
        {
          value: "18",
          label: "Kota Jangkauan",
          sublabel: "Jejaring ekosistem nasional",
        },
      ],
    },
    pillars: {
      badge: "Pilar Utama",
      title: "Solusi Terintegrasi",
      subtitle: "Tiga fokus pemberdayaan talenta dan kesiapan korporasi.",
      ctaText: "Pelajari Kurikulum",
      items: [
        {
          id: "incubator",
          title: "Creative Incubator",
          tagline: "Inkubasi Talenta",
          shortDesc:
            "Pelatihan intensif desain visual, UI/UX, dan produksi konten digital siap kerja.",
          image: "/images/pilar-1.jpg",
        },
        {
          id: "accelerator",
          title: "Impact Accelerator",
          tagline: "Akselerasi Wirausaha",
          shortDesc:
            "Pendampingan skala bisnis dan akses modal bagi UMKM inklusif.",
          image: "/images/pilar-2.jpg",
        },
        {
          id: "advisory",
          title: "Business & Inclusion Advisory",
          tagline: "Konsultasi Korporasi",
          shortDesc:
            "Audit aksesibilitas WCAG, pelatihan HR, dan sistem rekrutmen ramah disabilitas.",
          image: "/images/pilar-3.jpg",
        },
      ],
    },
    inclusion: {
      badge: "Aksesibilitas 360°",
      title: "Aksesibel Sejak Baris Kode Pertama",
      subtitle: "Dirancang mengikuti standar WCAG 2.1 Level AA.",
      ctaText: "Lihat Standar Kami",
      features: [
        {
          title: "Tipografi & Kontras",
          desc: "Skala teks A++ dan mode kontras tinggi instan.",
        },
        {
          title: "Ramah Pembaca Layar",
          desc: "Navigasi keyboard dan struktur semantik penuh.",
        },
        {
          title: "Desain Kognitif Bersih",
          desc: "Visual ringkas tanpa distraksi berlebih.",
        },
      ],
    },
    news: {
      badge: "Publikasi",
      title: "Berita & Riset",
      subtitle: "Laporan dampak dan kabar kolaborasi terbaru.",
      readMore: "Baca",
      closeModal: "Tutup",
      items: [
        {
          id: "laporan-inklusi-2026",
          category: "Riset",
          date: "12 Okt 2026",
          readTime: "4 mnt",
          title: "Indeks Kesiapan Inklusi Industri Kreatif 2026",
          excerpt:
            "Adopsi rekrutmen inklusif meningkat 35% di 120 perusahaan digital.",
          content: [
            "Sektor ekonomi kreatif Indonesia mencatat kemajuan pesat dalam membuka peluang kerja bagi talenta disabilitas sepanjang 2026. Survei Increase.id terhadap 120 perusahaan digital dan agensi kreatif menunjukkan lonjakan komitmen keberagaman sebesar 35%.",
            "Perusahaan yang menerapkan penyesuaian wajar (reasonable accommodation) sejak tahap wawancara membukukan tingkat retensi karyawan hingga 88% pada tahun pertama.",
            "Laporan ini merangkum peta jalan praktis bagi tim HR dan pimpinan perusahaan untuk memulai audit aksesibilitas secara terukur.",
          ],
          image: "/images/news-1.jpg",
        },
        {
          id: "demo-day-incubator-batch-5",
          category: "Program",
          date: "28 Sep 2026",
          readTime: "3 mnt",
          title: "Demo Day Batch 5: 45 Kreator Siap Masuk Industri",
          excerpt:
            "Lulusan Tuli dan Daksa mempresentasikan portofolio di hadapan 20 mitra perekrut.",
          content: [
            "Setelah 12 minggu pelatihan intensif, 45 kreator Creative Incubator Batch 5 memamerkan proyek UI/UX, ilustrasi komersial, dan kampanye digital kepada 20 perusahaan mitra.",
            "Didukung Juru Bahasa Isyarat (JBI) dan takarir langsung, 31 lulusan langsung memperoleh kontrak kerja dan magang berbayar di pekan pertama.",
          ],
          image: "/images/news-2.jpg",
        },
        {
          id: "audit-aksesibilitas-digital",
          category: "Wawasan",
          date: "10 Agu 2026",
          readTime: "5 mnt",
          title: "Dampak Bisnis di Balik Kepatuhan Aksesibilitas WCAG",
          excerpt:
            "Platform digital yang aksesibel memperluas pangsa pasar sekaligus mendongkrak performa SEO.",
          content: [
            "Penerapan Web Content Accessibility Guidelines (WCAG) bukan sekadar kepatuhan regulasi, melainkan investasi pengalaman pengguna yang berdampak langsung pada konversi bisnis.",
            "Melalui Business & Inclusion Advisory, Increase.id mendampingi tim produk korporasi mengintegrasikan standar aksesibilitas ke dalam siklus pengembangan aplikasi.",
          ],
          image: "/images/news-3.jpg",
        },
      ],
    },

    // ==========================================
    // 2. HALAMAN KHUSUS: /tentang-kami
    // ==========================================
    aboutPage: {
      badge: "Profil Korporat",
      title: "Merekayasa Ulang Ekosistem Kerja yang Setara",
      lead: "Increase.id adalah wirausaha sosial kreatif yang menjembatani kesenjangan kompetensi dan aksesibilitas antara talenta disabilitas dengan industri modern.",
      image: "/images/about.jpg",
      philosophyBadge: "Filosofi Fundamental",
      philosophyTitle: "Nothing About Us Without Us",
      philosophyQuote:
        "“Tidak ada kebijakan, produk, maupun program inklusi yang dirancang tanpa keterlibatan langsung penyandang disabilitas sebagai subjek dan pengambil keputusan.”",
      philosophyParagraphs: [
        "Selama puluhan tahun, program pemberdayaan disabilitas kerap terjebak pada pendekatan karitatif satu arah. Penyandang disabilitas hanya ditempatkan sebagai penerima manfaat pasif, bukan sebagai kreator atau penentu arah inovasi.",
        "Di Increase.id, prinsip 'Nothing About Us Without Us' diterapkan secara struktural. Setiap kurikulum inkubasi, kerangka audit aksesibilitas, hingga tata kelola proyek dirancang, diuji, dan dipimpin bersama praktisi lintas disabilitas (Tuli, Netra, Daksa, dan Neurodivergen).",
        "Pendekatan ini memastikan setiap solusi yang kami hadirkan bagi mitra korporasi benar-benar relevan, bermartabat, dan menciptakan kemandirian ekonomi jangka panjang.",
      ],
      visionTitle: "Visi",
      visionText:
        "Menjadi katalis utama ekosistem ekonomi kreatif dan korporasi yang inklusif, aksesibel, dan berdaya saing global di Asia Tenggara.",
      missionTitle: "Misi Strategis",
      missions: [
        "Menyelenggarakan inkubasi keterampilan digital dan kreatif berstandar industri bagi talenta disabilitas.",
        "Mengakselerasi pertumbuhan bisnis sosial dan UMKM inklusif melalui akses pasar dan pendanaan berdampak.",
        "Mendampingi korporasi mentransformasi infrastruktur fisik, produk digital, dan budaya kerja ramah disabilitas.",
      ],
      values: [
        {
          title: "Ko-Kreasi Setara",
          desc: "Melibatkan komunitas disabilitas sebagai perancang utama di setiap lini program.",
        },
        {
          title: "Keunggulan Karya",
          desc: "Menempatkan kualitas profesional dan dampak terukur di atas narasi belas kasihan.",
        },
        {
          title: "Aksesibilitas Menyeluruh",
          desc: "Menghapus hambatan fisik, digital, dan komunikasi secara sistematis.",
        },
      ],
      accessibilityStandard: {
        title: "Standar Aksesibilitas 360° Kami",
        subtitle:
          "Tiga pilar standar operasional yang kami terapkan secara internal dan tularkan kepada seluruh mitra korporasi:",
        standards: [
          {
            code: "WCAG 2.1 AA",
            name: "Aksesibilitas Produk Digital",
            detail:
              "Rasio kontras minimal 4.5:1, dukungan penuh navigasi keyboard, atribut ARIA bagi pembaca layar, dan skalabilitas tipografi hingga 200%.",
          },
          {
            code: "ISO 21542",
            name: "Aksesibilitas Ruang & Acara Fisik",
            detail:
              "Ketersediaan jalur landai (ramp), ruang gerak kursi roda, pencahayaan ramah sensorik, serta juru bahasa isyarat (JBI) dan live captioning.",
          },
          {
            code: "DEI Playbook",
            name: "Budaya & Sistem HR Inklusif",
            detail:
              "Prosedur rekrutmen bebas bias, penyediaan akomodasi wajar (reasonable accommodation), serta pelatihan sensitivitas bagi manajer lini.",
          },
        ],
      },
    },

    // ==========================================
    // 3. HALAMAN KHUSUS: /program (KURIKULUM LENGKAP)
    // ==========================================
    programsPage: {
      badge: "Arsitektur Program",
      title: "Kurikulum & Pendampingan Berbasis Dampak",
      subtitle:
        "Setiap pilar program dirancang dengan silabus terstruktur dan indikator keberhasilan yang terukur bagi talenta maupun institusi mitra.",
      curriculumHeading: "Struktur Kurikulum & Modul",
      outcomeHeading: "Target Capaian (Output)",
      consultCta: "Konsultasikan Program Ini",
      items: [
        {
          id: "incubator",
          title: "Creative Incubator",
          tagline: "Inkubasi Karir & Portofolio Kreatif",
          image: "/images/pilar-1.jpg",
          overview:
            "Program intensif selama 12 minggu yang mempersiapkan talenta muda disabilitas menjadi desainer produk digital, kreator konten visual, dan spesialis komunikasi merek yang siap terjun ke industri.",
          targetAudience: "Talenta Tuli, Daksa, Netra & Neurodivergen (Usia 18–30 Tahun)",
          duration: "12 Minggu (Hybrid: Studio & Online Aksesibel)",
          curriculum: [
            {
              moduleTitle: "Modul 1: Fundamental Desain & Aksesibilitas Visual",
              topics: [
                "Prinsip tipografi, hierarki visual, dan psikologi warna inklusif",
                "Penguasaan perangkat lunak standar industri (Figma & Adobe Creative Suite)",
                "Desain ramah pengguna lintas kemampuan (Inclusive Design Thinking)",
              ],
            },
            {
              moduleTitle: "Modul 2: Produksi Proyek Nyata & Kolaborasi Agensi",
              topics: [
                "Simulasi brief klien korporat dan manajemen waktu proyek",
                "Komunikasi profesional lintas kemampuan di lingkungan kerja modern",
                "Kurasi portofolio komersial dan persiapan wawancara kerja",
              ],
            },
          ],
          outcomes: [
            "Portofolio terkurasi berisi minimal 3 studi kasus proyek komersial",
            "Sertifikasi kompetensi kreatif dan akses ke bursa kerja 48 mitra korporasi",
            "Pendampingan penempatan kerja (job placement) selama 6 bulan pasca-lulus",
          ],
        },
        {
          id: "accelerator",
          title: "Impact Accelerator",
          tagline: "Akselerasi Skala Bisnis & Investasi Sosial",
          image: "/images/pilar-2.jpg",
          overview:
            "Pendampingan bisnis strategis bagi wirausaha disabilitas dan rintisan sosial (social enterprise) untuk memperkuat rantai pasok, memperluas pasar B2B, dan mengakses pendanaan berdampak.",
          targetAudience: "UMKM Inklusif & Rintisan Sosial Tahap Awal-Bertumbuh",
          duration: "16 Minggu (Bootcamp, Mentoring 1-on-1 & Pitching)",
          curriculum: [
            {
              moduleTitle: "Modul 1: Validasi Model Bisnis & Unit Economics",
              topics: [
                "Audit struktur biaya, penetapan harga (pricing), dan margin berkelanjutan",
                "Standarisasi operasional dan manajemen rantai pasok inklusif",
                "Legalitas usaha, HKI, dan kesiapan pengadaan korporat (B2B procurement)",
              ],
            },
            {
              moduleTitle: "Modul 2: Pengukuran Dampak (SROI) & Kesiapan Investasi",
              topics: [
                "Perancangan kerangka Social Return on Investment (SROI)",
                "Strategi pemasaran digital dan kemitraan ritel modern",
                "Penyusunan pitch deck dan pertemuan langsung dengan pemberi hibah/investor",
              ],
            },
          ],
          outcomes: [
            "Dokumen proyeksi keuangan 3 tahun dan laporan metrik dampak sosial",
            "Kontrak pengadaan B2B dengan jaringan korporasi mitra Increase.id",
            "Akses langsung ke pendanaan katalitik dan hibah pengembangan usaha",
          ],
        },
        {
          id: "advisory",
          title: "Business & Inclusion Advisory",
          tagline: "Konsultasi Transformasi Inklusi Korporat",
          image: "/images/pilar-3.jpg",
          overview:
            "Layanan pendampingan menyeluruh bagi perusahaan, BUMN, dan institusi publik untuk membangun ekosistem kerja, layanan pelanggan, serta produk digital yang memenuhi standar inklusi global.",
          targetAudience: "Divisi HR, ESG/CSR, Tim Produk Digital & Manajemen Eksekutif",
          duration: "4–24 Minggu (Disesuaikan Skala Organisasi)",
          curriculum: [
            {
              moduleTitle: "Fase 1: Audit Aksesibilitas & Pemetaan Kesenjangan",
              topics: [
                "Audit aksesibilitas fisik kantor dan fasilitas publik",
                "Pengujian teknis situs web & aplikasi seluler berstandar WCAG 2.1",
                "Evaluasi kebijakan rekrutmen, KPI, dan kesiapan akomodasi kerja",
              ],
            },
            {
              moduleTitle: "Fase 2: Pelatihan Sensitivitas & Implementasi Sistem",
              topics: [
                "Workshop Disability Etiquette & komunikasi inklusif bagi pimpinan dan staf",
                "Perancangan SOP onboarding dan pendampingan karyawan disabilitas",
                "Publikasi laporan dampak ESG/DEI bersama pemangku kepentingan",
              ],
            },
          ],
          outcomes: [
            "Dokumen Peta Jalan Transformasi Inklusi (Inclusion Roadmap) & Sertifikasi Audit",
            "Peningkatan skor kepatuhan ESG/DEI dan kesiapan tim menerima talenta disabilitas",
            "Penyaluran talenta terlatih dari Creative Incubator sesuai kebutuhan divisi",
          ],
        },
      ],
    },

    // ==========================================
    // 4. HALAMAN KHUSUS: /kontak
    // ==========================================
    contact: {
      badge: "Kemitraan & Kontak",
      title: "Mulai Kolaborasi Inklusif Anda",
      subtitle:
        "Hubungi tim kami untuk diskusi rekrutmen talenta, audit aksesibilitas, atau kemitraan CSR/ESG.",
      addressLabel: "Studio & Kantor",
      addressValue: "Jl. Senopati Raya No. 45, Kebayoran Baru, Jakarta Selatan 12190",
      emailLabel: "Email Korporat",
      hoursLabel: "Jam Operasional",
      hoursValue: "Senin – Jumat, 09.00 – 17.00 WIB",
      formTitle: "Formulir Kemitraan",
      namePlaceholder: "Nama Lengkap",
      orgPlaceholder: "Nama Perusahaan / Institusi",
      emailPlaceholder: "nama@perusahaan.com",
      topicLabel: "Fokus Kebutuhan",
      topics: [
        "Business & Inclusion Advisory (Audit & Pelatihan HR)",
        "Rekrutmen Lulusan Creative Incubator",
        "Kemitraan CSR / Impact Accelerator",
        "Media & Undangan Pembicara",
      ],
      messagePlaceholder: "Jelaskan secara singkat rencana kolaborasi Anda...",
      submitBtn: "Kirim Pesan",
      successMsg:
        "Terima kasih! Tim kemitraan Increase.id akan menghubungi Anda dalam 1–2 hari kerja.",
    },
  },

  en: {
    // ==========================================
    // 1. HOME (CONCISE & VISUAL LIKE UNILEVER)
    // ==========================================
    hero: {
      badge: "Inclusive Creative Social Enterprise",
      title: "Limitless Creative Innovation.",
      subtitle:
        "Connecting talents with disabilities to industry through incubation, venture acceleration, and inclusion advisory.",
      primaryCta: "Our Programs",
      secondaryCta: "About Us",
      image: "/images/hero.jpg",
      imageCaption: "Increase.id Inclusive Collaboration Studio",
    },
    metrics: {
      title: "Measurable Impact",
      subtitle: "The scale of inclusive transformation across Indonesia.",
      items: [
        {
          value: "1,250+",
          label: "Creative Talents",
          sublabel: "Certified & industry-ready",
        },
        {
          value: "48",
          label: "Corporate Partners",
          sublabel: "Inclusive workplace transformation",
        },
        {
          value: "82%",
          label: "Industry Placement",
          sublabel: "Careers & independent ventures",
        },
        {
          value: "18",
          label: "Cities Reached",
          sublabel: "National ecosystem network",
        },
      ],
    },
    pillars: {
      badge: "Core Pillars",
      title: "Integrated Solutions",
      subtitle: "Three focus areas for talent empowerment and corporate readiness.",
      ctaText: "Explore Curriculum",
      items: [
        {
          id: "incubator",
          title: "Creative Incubator",
          tagline: "Talent Incubation",
          shortDesc:
            "Intensive job-ready training in visual design, UI/UX, and digital content production.",
          image: "/images/pilar-1.jpg",
        },
        {
          id: "accelerator",
          title: "Impact Accelerator",
          tagline: "Venture Acceleration",
          shortDesc:
            "Business scaling mentorship and capital access for inclusive MSMEs.",
          image: "/images/pilar-2.jpg",
        },
        {
          id: "advisory",
          title: "Business & Inclusion Advisory",
          tagline: "Corporate Advisory",
          shortDesc:
            "WCAG accessibility audits, HR training, and disability-inclusive hiring systems.",
          image: "/images/pilar-3.jpg",
        },
      ],
    },
    inclusion: {
      badge: "360° Accessibility",
      title: "Accessible from the First Line of Code",
      subtitle: "Engineered in accordance with WCAG 2.1 Level AA standards.",
      ctaText: "View Our Standards",
      features: [
        {
          title: "Typography & Contrast",
          desc: "Instant A++ text scaling and high-contrast mode.",
        },
        {
          title: "Screen Reader Ready",
          desc: "Full keyboard navigation and semantic structure.",
        },
        {
          title: "Clean Cognitive Layout",
          desc: "Concise visuals free of overwhelming clutter.",
        },
      ],
    },
    news: {
      badge: "Publications",
      title: "News & Insights",
      subtitle: "Latest impact reports and collaboration stories.",
      readMore: "Read",
      closeModal: "Close",
      items: [
        {
          id: "laporan-inklusi-2026",
          category: "Research",
          date: "Oct 12, 2026",
          readTime: "4 min",
          title: "Creative Industry Inclusion Readiness Index 2026",
          excerpt:
            "Inclusive hiring adoption rose by 35% across 120 digital companies.",
          content: [
            "Indonesia's creative economy recorded rapid progress in opening career pathways for talents with disabilities throughout 2026. Increase.id's survey of 120 digital firms and creative agencies shows a 35% surge in diversity commitments.",
            "Companies implementing reasonable accommodations from the interview phase achieved an 88% first-year employee retention rate.",
            "This report outlines a practical roadmap for HR teams and corporate leaders to initiate measurable accessibility audits.",
          ],
          image: "/images/news-1.jpg",
        },
        {
          id: "demo-day-incubator-batch-5",
          category: "Program",
          date: "Sep 28, 2026",
          readTime: "3 min",
          title: "Batch 5 Demo Day: 45 Creators Ready for Industry",
          excerpt:
            "Deaf and mobility-impaired graduates presented portfolios to 20 hiring partners.",
          content: [
            "After 12 weeks of intensive training, 45 creators from Creative Incubator Batch 5 showcased UI/UX projects, commercial illustrations, and digital campaigns to 20 partner companies.",
            "Supported by sign language interpreters and live captioning, 31 graduates secured job contracts and paid internships within the first week.",
          ],
          image: "/images/news-2.jpg",
        },
        {
          id: "audit-aksesibilitas-digital",
          category: "Insights",
          date: "Aug 10, 2026",
          readTime: "5 min",
          title: "The Business Case Behind WCAG Accessibility Compliance",
          excerpt:
            "Accessible digital platforms expand market reach while boosting SEO performance.",
          content: [
            "Implementing Web Content Accessibility Guidelines (WCAG) goes beyond regulatory compliance—it is a user experience investment that directly drives business conversion.",
            "Through Business & Inclusion Advisory, Increase.id assists corporate product teams in embedding accessibility standards into their development lifecycle.",
          ],
          image: "/images/news-3.jpg",
        },
      ],
    },

    // ==========================================
    // 2. DEDICATED PAGE: /tentang-kami
    // ==========================================
    aboutPage: {
      badge: "Corporate Profile",
      title: "Re-engineering an Equitable Work Ecosystem",
      lead: "Increase.id is an inclusive creative social enterprise bridging the competency and accessibility gap between talents with disabilities and modern industry.",
      image: "/images/about.jpg",
      philosophyBadge: "Foundational Philosophy",
      philosophyTitle: "Nothing About Us Without Us",
      philosophyQuote:
        "“No inclusion policy, product, or program should ever be designed without the direct involvement of persons with disabilities as active subjects and decision-makers.”",
      philosophyParagraphs: [
        "For decades, disability empowerment initiatives often fell into one-way charitable approaches—positioning persons with disabilities as passive beneficiaries rather than creators and leaders of innovation.",
        "At Increase.id, 'Nothing About Us Without Us' is embedded structurally. Every incubation curriculum, accessibility audit framework, and project governance model is co-designed, tested, and led alongside cross-disability practitioners (Deaf, Blind/Low-Vision, Physical, and Neurodivergent).",
        "This approach ensures that every solution we deliver to corporate partners is genuinely relevant, dignified, and built for long-term economic independence.",
      ],
      visionTitle: "Vision",
      visionText:
        "To be the primary catalyst for an inclusive, accessible, and globally competitive creative economy and corporate ecosystem in Southeast Asia.",
      missionTitle: "Strategic Missions",
      missions: [
        "Deliver industry-standard digital and creative skill incubation for talents with disabilities.",
        "Accelerate inclusive MSMEs and social ventures through market access and impact capital.",
        "Partner with corporations to transform physical infrastructure, digital products, and disability-friendly work cultures.",
      ],
      values: [
        {
          title: "Equal Co-Creation",
          desc: "Involving disability communities as lead designers across every program line.",
        },
        {
          title: "Craft Excellence",
          desc: "Putting professional quality and measurable impact above charity narratives.",
        },
        {
          title: "End-to-End Accessibility",
          desc: "Systematically removing physical, digital, and communication barriers.",
        },
      ],
      accessibilityStandard: {
        title: "Our 360° Accessibility Standards",
        subtitle:
          "Three operational pillars we practice internally and implement across all corporate partners:",
        standards: [
          {
            code: "WCAG 2.1 AA",
            name: "Digital Product Accessibility",
            detail:
              "Minimum 4.5:1 contrast ratio, full keyboard navigation support, ARIA attributes for screen readers, and typography scaling up to 200%.",
          },
          {
            code: "ISO 21542",
            name: "Physical Space & Event Accessibility",
            detail:
              "Step-free ramps, wheelchair turning radiuses, sensory-friendly lighting, plus professional sign language interpreters and live captioning.",
          },
          {
            code: "DEI Playbook",
            name: "Inclusive HR Culture & Systems",
            detail:
              "Bias-free hiring procedures, reasonable workplace accommodations, and practical sensitivity training for line managers.",
          },
        ],
      },
    },

    // ==========================================
    // 3. DEDICATED PAGE: /program (FULL CURRICULUM)
    // ==========================================
    programsPage: {
      badge: "Program Architecture",
      title: "Impact-Driven Curriculum & Advisory",
      subtitle:
        "Every program pillar is structured with a clear syllabus and measurable success indicators for both talents and partner institutions.",
      curriculumHeading: "Curriculum Structure & Modules",
      outcomeHeading: "Key Outcomes",
      consultCta: "Consult on This Program",
      items: [
        {
          id: "incubator",
          title: "Creative Incubator",
          tagline: "Creative Career & Portfolio Incubation",
          image: "/images/pilar-1.jpg",
          overview:
            "An intensive 12-week program preparing young talents with disabilities to become industry-ready digital product designers, visual content creators, and brand communication specialists.",
          targetAudience: "Deaf, Physical, Low-Vision & Neurodivergent Talents (Ages 18–30)",
          duration: "12 Weeks (Hybrid: Studio & Accessible Online)",
          curriculum: [
            {
              moduleTitle: "Module 1: Design Fundamentals & Visual Accessibility",
              topics: [
                "Typography principles, visual hierarchy, and inclusive color psychology",
                "Mastery of industry-standard tools (Figma & Adobe Creative Suite)",
                "Cross-ability user-centered design (Inclusive Design Thinking)",
              ],
            },
            {
              moduleTitle: "Module 2: Real-World Production & Agency Collaboration",
              topics: [
                "Corporate client brief simulations and project timeline management",
                "Cross-ability professional communication in modern workplaces",
                "Commercial portfolio curation and job interview preparation",
              ],
            },
          ],
          outcomes: [
            "Curated portfolio featuring at least 3 commercial project case studies",
            "Creative competency certification and access to 48 corporate hiring partners",
            "6-month post-graduation job placement mentoring",
          ],
        },
        {
          id: "accelerator",
          title: "Impact Accelerator",
          tagline: "Business Scaling & Social Investment Acceleration",
          image: "/images/pilar-2.jpg",
          overview:
            "Strategic business mentorship for entrepreneurs with disabilities and social enterprises to strengthen supply chains, expand B2B markets, and secure impact funding.",
          targetAudience: "Inclusive MSMEs & Early-to-Growth Social Enterprises",
          duration: "16 Weeks (Bootcamp, 1-on-1 Mentoring & Pitching)",
          curriculum: [
            {
              moduleTitle: "Module 1: Business Model Validation & Unit Economics",
              topics: [
                "Cost structure audit, pricing strategy, and sustainable margins",
                "Operational standardization and inclusive supply chain management",
                "Business legality, IP, and corporate B2B procurement readiness",
              ],
            },
            {
              moduleTitle: "Module 2: Impact Measurement (SROI) & Investment Readiness",
              topics: [
                "Designing a Social Return on Investment (SROI) framework",
                "Digital marketing strategy and modern retail partnerships",
                "Pitch deck refinement and direct matchmaking with grantmakers/investors",
              ],
            },
          ],
          outcomes: [
            "3-year financial projection model and social impact metrics report",
            "B2B procurement contracts within Increase.id's corporate partner network",
            "Direct access to catalytic capital and business development grants",
          ],
        },
        {
          id: "advisory",
          title: "Business & Inclusion Advisory",
          tagline: "Corporate Inclusion Transformation Advisory",
          image: "/images/pilar-3.jpg",
          overview:
            "End-to-end advisory for corporations, state-owned enterprises, and public institutions to build workplaces, customer services, and digital products that meet global inclusion standards.",
          targetAudience: "HR Divisions, ESG/CSR Teams, Digital Product Teams & Executives",
          duration: "4–24 Weeks (Tailored to Organizational Scale)",
          curriculum: [
            {
              moduleTitle: "Phase 1: Accessibility Audit & Gap Mapping",
              topics: [
                "Physical office and public facility accessibility audits",
                "Technical website & mobile app testing against WCAG 2.1 standards",
                "Evaluation of recruitment policies, KPIs, and workplace accommodation readiness",
              ],
            },
            {
              moduleTitle: "Phase 2: Sensitivity Training & System Implementation",
              topics: [
                "Disability Etiquette & inclusive communication workshops for leaders and staff",
                "Designing inclusive onboarding SOPs and employee support systems",
                "Co-publishing ESG/DEI impact reports for stakeholders",
              ],
            },
          ],
          outcomes: [
            "Comprehensive Inclusion Transformation Roadmap & Audit Certification",
            "Improved ESG/DEI compliance scores and team readiness for inclusive hiring",
            "Direct talent pipeline placement from Creative Incubator tailored to division needs",
          ],
        },
      ],
    },

    // ==========================================
    // 4. DEDICATED PAGE: /kontak
    // ==========================================
    contact: {
      badge: "Partnership & Contact",
      title: "Start Your Inclusive Collaboration",
      subtitle:
        "Reach out to our team to discuss talent recruitment, accessibility audits, or CSR/ESG partnerships.",
      addressLabel: "Studio & Office",
      addressValue: "Jl. Senopati Raya No. 45, Kebayoran Baru, South Jakarta 12190",
      emailLabel: "Corporate Email",
      hoursLabel: "Operating Hours",
      hoursValue: "Monday – Friday, 09:00 – 17:00 WIB",
      formTitle: "Partnership Inquiry Form",
      namePlaceholder: "Full Name",
      orgPlaceholder: "Company / Institution Name",
      emailPlaceholder: "name@company.com",
      topicLabel: "Collaboration Focus",
      topics: [
        "Business & Inclusion Advisory (Audit & HR Training)",
        "Creative Incubator Graduate Recruitment",
        "CSR / Impact Accelerator Partnership",
        "Media & Speaking Invitation",
      ],
      messagePlaceholder: "Briefly describe your collaboration plans...",
      submitBtn: "Send Message",
      successMsg:
        "Thank you! The Increase.id partnership team will contact you within 1–2 business days.",
    },
  },
};