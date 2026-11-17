export type Language = 'id' | 'en';

export interface NavItem {
  label: string;
  href: string;
}

export interface MetricItem {
  id: string;
  value: string;
  suffix: string;
  label: string;
  description: string;
  category: string;
}

export interface PillarItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  ctaText: string;
  href: string;
  accentColor: 'blue' | 'teal' | 'amber';
}

export interface ArticleItem {
  id: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  author: string;
  slug: string;
}

export interface SiteData {
  meta: {
    siteName: string;
    tagline: string;
    skipToContent: string;
  };
  accessibilityBar: {
    label: string;
    contrastToggle: string;
    contrastActive: string;
    fontSizeLabel: string;
    languageLabel: string;
  };
  nav: {
    items: NavItem[];
    ctaButton: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    highlightTitle: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    featuredStatLabel: string;
    featuredStatValue: string;
  };
  impactSection: {
    eyebrow: string;
    title: string;
    description: string;
    lastUpdated: string;
    metrics: MetricItem[];
  };
  pillarsSection: {
    eyebrow: string;
    title: string;
    description: string;
    pillars: PillarItem[];
  };
  inclusionCommitment: {
    eyebrow: string;
    title: string;
    description: string;
    points: {
      title: string;
      description: string;
    }[];
    ctaText: string;
  };
  newsSection: {
    eyebrow: string;
    title: string;
    description: string;
    viewAllText: string;
    readMoreText: string;
    articles: ArticleItem[];
  };
  footer: {
    aboutText: string;
    addressTitle: string;
    addressLines: string[];
    quickLinksTitle: string;
    pillarsTitle: string;
    contactTitle: string;
    email: string;
    phone: string;
    copyright: string;
    accessibilityStatement: string;
  };
}

export const siteContent: Record<Language, SiteData> = {
  id: {
    meta: {
      siteName: 'Increase.id',
      tagline: 'Inclusive Creative Social Enterprise',
      skipToContent: 'Lewati ke konten utama',
    },
    accessibilityBar: {
      label: 'Aksesibilitas',
      contrastToggle: 'Kontras Tinggi',
      contrastActive: 'Mode Kontras Aktif',
      fontSizeLabel: 'Ukuran Teks',
      languageLabel: 'Bahasa',
    },
    nav: {
      items: [
        { label: 'Tentang Kami', href: '#tentang' },
        { label: 'Angka Dampak', href: '#dampak' },
        { label: 'Pilar Program', href: '#pilar' },
        { label: 'Inklusi & Aksesibilitas', href: '#inklusi' },
        { label: 'Wawasan & Berita', href: '#berita' },
      ],
      ctaButton: 'Bermitra Dengan Kami',
    },
    hero: {
      eyebrow: 'INCLUSIVE CREATIVE SOCIAL ENTERPRISE',
      title: 'Menggerakkan Ekonomi Kreatif yang',
      highlightTitle: 'Setara, Inklusif, dan Berdampak Nyata.',
      description:
        'Increase.id menjembatani wirausaha sosial, talenta penyandang disabilitas, dan korporasi untuk membangun ekosistem bisnis berkelanjutan di seluruh Indonesia.',
      primaryCta: 'Jelajahi Pilar Program',
      secondaryCta: 'Unduh Laporan Dampak',
      featuredStatLabel: 'Penerima Manfaat & Talenta Inklusif',
      featuredStatValue: '12.400+',
    },
    impactSection: {
      eyebrow: 'JEJAK DAMPAK KAMI',
      title: 'Pertumbuhan Bisnis yang Beriringan dengan Keadilan Sosial',
      description:
        'Kami mengukur keberhasilan bukan hanya dari pertumbuhan pendapatan mitra, tetapi dari seberapa luas akses ekonomi terbuka bagi kelompok rentan dan penyandang disabilitas.',
      lastUpdated: 'Data terverifikasi hingga Kuartal IV',
      metrics: [
        {
          id: 'metric-1',
          value: '185',
          suffix: '+',
          label: 'UMKM & Wirausaha Sosial Diinkubasi',
          description: 'Mendapatkan pendampingan kurikulum bisnis inklusif, tata kelola keuangan, dan akses pasar.',
          category: 'Inkubasi & Akselerasi',
        },
        {
          id: 'metric-2',
          value: '12.400',
          suffix: '+',
          label: 'Talenta Disabilitas & Kelompok Rentan',
          description: 'Terlibat aktif dalam rantai pasok kreatif, pelatihan kesiapan kerja, dan kewirausahaan.',
          category: 'Pemberdayaan SDM',
        },
        {
          id: 'metric-3',
          value: '42',
          suffix: ' Mitra',
          label: 'Korporasi & Lembaga Pembangunan',
          description: 'Bertransformasi menerapkan kebijakan DEI (Diversity, Equity, & Inclusion) bersama tim advisory kami.',
          category: 'Kemitraan Strategis',
        },
        {
          id: 'metric-4',
          value: '24',
          suffix: ' Provinsi',
          label: 'Jangkauan Ekosistem Nasional',
          description: 'Menjangkau komunitas kreatif lokal dari wilayah perkotaan hingga daerah 3T di Indonesia.',
          category: 'Sebaran Geografis',
        },
      ],
    },
    pillarsSection: {
      eyebrow: 'PILAR PROGRAM UTAMA',
      title: 'Tiga Mesin Penggerak Ekosistem Inklusif Increase.id',
      description:
        'Pendekatan menyeluruh dari peningkatan kapasitas wirausaha tingkat akar rumput hingga transformasi strategis di level korporasi.',
      pillars: [
        {
          id: 'incubator',
          badge: 'PILAR 01',
          title: 'Inclusive Startup & SME Incubator',
          subtitle: 'Membangun Fondasi Bisnis Kreatif yang Ramah Disabilitas',
          description:
            'Program inkubasi intensif bagi wirausaha tahap awal (early-stage) yang dipimpin oleh penyandang disabilitas atau memiliki misi dampak sosial yang kuat.',
          highlights: [
            'Kurikulum desain produk & layanan berbasis Universal Design',
            'Mentoring 1-on-1 bersama praktisi industri kreatif dan keuangan',
            'Validasi model bisnis, legalitas usaha, dan kesiapan pasar lokal',
          ],
          ctaText: 'Pelajari Program Incubator',
          href: '#pilar-incubator',
          accentColor: 'blue',
        },
        {
          id: 'accelerator',
          badge: 'PILAR 02',
          title: 'Impact Accelerator',
          subtitle: 'Akselerasi Skala Dampak dan Kesiapan Investasi Berkelanjutan',
          description:
            'Dirancang bagi social enterprise yang siap memperluas jangkauan pasar nasional, mengintegrasikan rantai pasok korporasi, dan mengakses pendanaan berdampak (impact investing).',
          highlights: [
            'Pengukuran & pelaporan dampak terstandarisasi (Impact Measurement & Management)',
            'Business matching dengan jaringan pembeli korporasi (B2B procurement)',
            'Fasilitasi akses hibah strategis dan modal ventura berdampak',
          ],
          ctaText: 'Pelajari Impact Accelerator',
          href: '#pilar-accelerator',
          accentColor: 'teal',
        },
        {
          id: 'advisory',
          badge: 'PILAR 03',
          title: 'Business & Inclusion Advisory',
          subtitle: 'Konsultasi Strategis DEI, ESG, dan Transformasi Korporasi Inklusif',
          description:
            'Mendampingi perusahaan nasional maupun multinasional dalam merancang kebijakan lingkungan kerja inklusif, audit aksesibilitas, serta program CSR/CSV berkelanjutan.',
          highlights: [
            'Audit aksesibilitas fisik dan digital serta pelatihan etika berinteraksi dengan disabilitas',
            'Perancangan rekrutmen inklusif dan penyesuaian layak (reasonable accommodation)',
            'Riset dampak sosial dan implementasi rantai pasok inklusif',
          ],
          ctaText: 'Konsultasi Bersama Advisory',
          href: '#pilar-advisory',
          accentColor: 'amber',
        },
      ],
    },
    inclusionCommitment: {
      eyebrow: 'STANDAR INKLUSIVITAS KAMI',
      title: 'Dirancang Bersama, Bukan Sekadar Untuk Penyandang Disabilitas',
      description:
        'Kami menerapkan prinsip "Nothing About Us Without Us" dalam setiap riset, desain kurikulum, dan rekomendasi kebijakan bisnis yang kami jalankan.',
      points: [
        {
          title: 'Aksesibilitas Digital & Fisik 360 Derajat',
          description:
            'Seluruh materi pelatihan dilengkapi juru bahasa isyarat (JBI), teks tertutup, dokumen ramah pembaca layar, serta lokasi kegiatan yang aksesibel.',
        },
        {
          title: 'Kemitraan Berbasis Kesetaraan Nilai',
          description:
            'Menempatkan pelaku usaha kreatif disabilitas sebagai mitra profesional yang kompetitif di pasar, bukan sekadar objek amal.',
        },
        {
          title: 'Akuntabilitas & Transparansi Dampak',
          description:
            'Setiap program dipantau menggunakan indikator kinerja utama (KPI) sosial dan ekonomi yang transparan bagi seluruh pemangku kepentingan.',
        },
      ],
      ctaText: 'Pelajari Standar Aksesibilitas Kami',
    },
    newsSection: {
      eyebrow: 'WAWASAN, RISET & BERITA TERBARU',
      title: 'Cerita Perubahan dan Publikasi Ekosistem Inklusif',
      description:
        'Ikuti perkembangan terbaru dari program inkubasi, laporan riset inklusi kerja, dan kisah inspiratif mitra wirausaha kami.',
      viewAllText: 'Lihat Semua Publikasi',
      readMoreText: 'Baca Selengkapnya',
      articles: [
        {
          id: 'news-1',
          category: 'Laporan Riset',
          date: '12 Oktober 2026',
          readTime: '5 menit baca',
          title: 'Mendorong Rantai Pasok Inklusif: Bagaimana Korporasi Indonesia Mengintegrasikan UMKM Disabilitas',
          excerpt:
            'Temuan terbaru Increase.id menunjukkan peningkatan efisiensi dan inovasi produk ketika perusahaan membuka akses pengadaan bagi wirausaha sosial inklusif.',
          author: 'Tim Riset & Advisory Increase.id',
          slug: 'mendorong-rantai-pasok-inklusif-korporasi-indonesia',
        },
        {
          id: 'news-2',
          category: 'Sorotan Program',
          date: '28 September 2026',
          readTime: '4 menit baca',
          title: '25 Startup Kreatif Terpilih dalam Kohort Terbaru Impact Accelerator Increase.id',
          excerpt:
            'Para pendiri bisnis dari 11 provinsi berkumpul untuk menjalani akselerasi bisnis selama 16 minggu menuju kesiapan pendanaan berdampak.',
          author: 'Divisi Inkubasi & Akselerasi',
          slug: '25-startup-kreatif-terpilih-kohort-impact-accelerator',
        },
        {
          id: 'news-3',
          category: 'Panduan Praktis',
          date: '15 September 2026',
          readTime: '6 menit baca',
          title: 'Panduan Menyusun Akomodasi Layak (Reasonable Accommodation) di Tempat Kerja Modern',
          excerpt:
            'Langkah konkret bagi divisi HR dan pemimpin bisnis dalam menciptakan ruang kerja yang produktif, aman, dan memberdayakan talenta disabilitas.',
          author: 'Unit Business & Inclusion Advisory',
          slug: 'panduan-menyusun-akomodasi-layak-di-tempat-kerja',
        },
      ],
    },
    footer: {
      aboutText:
        'Increase.id adalah Inclusive Creative Social Enterprise yang berfokus mempercepat pertumbuhan wirausaha sosial dan membangun ekosistem bisnis yang inklusif di Indonesia.',
      addressTitle: 'Kantor Pusat & Ruang Kolaborasi',
      addressLines: [
        'Increase Inclusive Hub, Jl. Kemang Raya No. 88',
        'Jakarta Selatan, DKI Jakarta 12730, Indonesia',
      ],
      quickLinksTitle: 'Navigasi Utama',
      pillarsTitle: 'Pilar Program',
      contactTitle: 'Hubungi Tim Kami',
      email: 'partnership@increase.id',
      phone: '+62 (21) 5098-7712',
      copyright: '© 2026 Increase.id (PT Inklusi Kreatif Nusantara). Hak Cipta Dilindungi.',
      accessibilityStatement: 'Website ini dirancang mengikuti standar aksesibilitas web WCAG 2.1 Level AA.',
    },
  },

  en: {
    meta: {
      siteName: 'Increase.id',
      tagline: 'Inclusive Creative Social Enterprise',
      skipToContent: 'Skip to main content',
    },
    accessibilityBar: {
      label: 'Accessibility',
      contrastToggle: 'High Contrast',
      contrastActive: 'High Contrast Active',
      fontSizeLabel: 'Text Size',
      languageLabel: 'Language',
    },
    nav: {
      items: [
        { label: 'About Us', href: '#tentang' },
        { label: 'Impact Metrics', href: '#dampak' },
        { label: 'Program Pillars', href: '#pilar' },
        { label: 'Inclusion & Accessibility', href: '#inklusi' },
        { label: 'Insights & News', href: '#berita' },
      ],
      ctaButton: 'Partner With Us',
    },
    hero: {
      eyebrow: 'INCLUSIVE CREATIVE SOCIAL ENTERPRISE',
      title: 'Advancing a Creative Economy that is',
      highlightTitle: 'Equitable, Inclusive, and High-Impact.',
      description:
        'Increase.id bridges social entrepreneurs, talents with disabilities, and forward-thinking corporations to build a sustainable business ecosystem across Indonesia.',
      primaryCta: 'Explore Program Pillars',
      secondaryCta: 'Download Impact Report',
      featuredStatLabel: 'Inclusive Talents & Beneficiaries Reached',
      featuredStatValue: '12,400+',
    },
    impactSection: {
      eyebrow: 'OUR IMPACT FOOTPRINT',
      title: 'Business Growth Hand-in-Hand with Social Equity',
      description:
        'We measure success not only by our partners’ revenue growth, but by how widely economic opportunities are unlocked for marginalized groups and persons with disabilities.',
      lastUpdated: 'Verified data through Quarter IV',
      metrics: [
        {
          id: 'metric-1',
          value: '185',
          suffix: '+',
          label: 'SMEs & Social Enterprises Incubated',
          description: 'Equipped with inclusive business curricula, financial governance, and direct market access.',
          category: 'Incubation & Acceleration',
        },
        {
          id: 'metric-2',
          value: '12,400',
          suffix: '+',
          label: 'Talents with Disabilities & Vulnerable Youth',
          description: 'Actively engaged in creative supply chains, job-readiness bootcamps, and entrepreneurship.',
          category: 'Talent Empowerment',
        },
        {
          id: 'metric-3',
          value: '42',
          suffix: ' Partners',
          label: 'Corporations & Development Agencies',
          description: 'Transformed their DEI (Diversity, Equity, & Inclusion) policies alongside our advisory team.',
          category: 'Strategic Partnerships',
        },
        {
          id: 'metric-4',
          value: '24',
          suffix: ' Provinces',
          label: 'National Ecosystem Reach',
          description: 'Connecting grassroots creative communities from major urban hubs to underserved regions.',
          category: 'Geographic Footprint',
        },
      ],
    },
    pillarsSection: {
      eyebrow: 'CORE PROGRAM PILLARS',
      title: 'Three Engines Driving the Increase.id Inclusive Ecosystem',
      description:
        'A holistic approach spanning from grassroots entrepreneurial capacity building to boardroom-level corporate inclusion strategy.',
      pillars: [
        {
          id: 'incubator',
          badge: 'PILLAR 01',
          title: 'Inclusive Startup & SME Incubator',
          subtitle: 'Building Disability-Friendly Creative Business Foundations',
          description:
            'An intensive incubation program tailored for early-stage ventures led by persons with disabilities or founded with a core social inclusion mission.',
          highlights: [
            'Product and service design curriculum rooted in Universal Design principles',
            '1-on-1 mentorship with creative industry leaders and financial specialists',
            'Business model validation, legal incorporation, and local market readiness',
          ],
          ctaText: 'Discover the Incubator',
          href: '#pilar-incubator',
          accentColor: 'blue',
        },
        {
          id: 'accelerator',
          badge: 'PILLAR 02',
          title: 'Impact Accelerator',
          subtitle: 'Scaling Social Impact and Sustainable Investment Readiness',
          description:
            'Designed for growth-stage social enterprises ready to expand nationwide, integrate into corporate supply chains, and secure impact investment.',
          highlights: [
            'Standardized Impact Measurement & Management (IMM) framework implementation',
            'Direct B2B business matching with corporate procurement networks',
            'Facilitation of strategic catalytic grants and impact venture capital',
          ],
          ctaText: 'Discover the Accelerator',
          href: '#pilar-accelerator',
          accentColor: 'teal',
        },
        {
          id: 'advisory',
          badge: 'PILLAR 03',
          title: 'Business & Inclusion Advisory',
          subtitle: 'Strategic DEI, ESG, and Inclusive Corporate Transformation Consulting',
          description:
            'Partnering with national and multinational enterprises to architect inclusive workplace policies, accessibility audits, and high-impact CSR/CSV initiatives.',
          highlights: [
            'Physical and digital accessibility audits plus disability etiquette training',
            'Inclusive recruitment pipeline design and reasonable accommodation policies',
            'Social return on investment (SROI) research and inclusive procurement strategy',
          ],
          ctaText: 'Consult With Our Advisory',
          href: '#pilar-advisory',
          accentColor: 'amber',
        },
      ],
    },
    inclusionCommitment: {
      eyebrow: 'OUR INCLUSION STANDARD',
      title: 'Co-Designed With, Not Merely For, Persons with Disabilities',
      description:
        'We uphold the principle of "Nothing About Us Without Us" across every research study, curriculum design, and corporate advisory engagement we deliver.',
      points: [
        {
          title: '360-Degree Digital & Physical Accessibility',
          description:
            'All learning modules feature sign language interpretation, closed captioning, screen-reader-optimized documents, and barrier-free venues.',
        },
        {
          title: 'Value-Driven Equal Partnerships',
          description:
            'Positioning disability-led creative enterprises as competitive, professional market suppliers rather than charity recipients.',
        },
        {
          title: 'Impact Accountability & Transparency',
          description:
            'Every initiative is tracked against transparent social and economic Key Performance Indicators (KPIs) reported to stakeholders.',
        },
      ],
      ctaText: 'Read Our Accessibility Charter',
    },
    newsSection: {
      eyebrow: 'LATEST INSIGHTS, RESEARCH & NEWS',
      title: 'Stories of Change and Inclusive Ecosystem Publications',
      description:
        'Stay updated with breakthroughs from our incubation cohorts, workplace inclusion whitepapers, and inspiring partner journeys.',
      viewAllText: 'View All Publications',
      readMoreText: 'Read Full Article',
      articles: [
        {
          id: 'news-1',
          category: 'Research Report',
          date: 'October 12, 2026',
          readTime: '5 min read',
          title: 'Advancing Inclusive Supply Chains: How Indonesian Corporations Integrate Disability-Led SMEs',
          excerpt:
            'New findings from Increase.id reveal stronger product innovation and brand resilience when enterprises open procurement to inclusive social ventures.',
          author: 'Increase.id Research & Advisory Team',
          slug: 'advancing-inclusive-supply-chains-indonesian-corporations',
        },
        {
          id: 'news-2',
          category: 'Program Spotlight',
          date: 'September 28, 2026',
          readTime: '4 min read',
          title: '25 Creative Ventures Selected for the Newest Increase.id Impact Accelerator Cohort',
          excerpt:
            'Founders across 11 provinces convene for a 16-week intensive acceleration sprint toward B2B market expansion and impact funding readiness.',
          author: 'Incubation & Acceleration Division',
          slug: '25-creative-ventures-selected-impact-accelerator-cohort',
        },
        {
          id: 'news-3',
          category: 'Practical Guide',
          date: 'September 15, 2026',
          readTime: '6 min read',
          title: 'Executive Guide to Implementing Reasonable Accommodation in Modern Workplaces',
          excerpt:
            'Actionable steps for HR leaders and corporate executives to cultivate productive, barrier-free environments for talents with disabilities.',
          author: 'Business & Inclusion Advisory Unit',
          slug: 'executive-guide-implementing-reasonable-accommodation',
        },
      ],
    },
    footer: {
      aboutText:
        'Increase.id is an Inclusive Creative Social Enterprise dedicated to accelerating social ventures and building an inclusive business ecosystem across Indonesia.',
      addressTitle: 'Headquarters & Collaboration Hub',
      addressLines: [
        'Increase Inclusive Hub, Jl. Kemang Raya No. 88',
        'South Jakarta, DKI Jakarta 12730, Indonesia',
      ],
      quickLinksTitle: 'Main Navigation',
      pillarsTitle: 'Program Pillars',
      contactTitle: 'Connect With Our Team',
      email: 'partnership@increase.id',
      phone: '+62 (21) 5098-7712',
      copyright: '© 2026 Increase.id (PT Inklusi Kreatif Nusantara). All Rights Reserved.',
      accessibilityStatement: 'This website is engineered in alignment with WCAG 2.1 Level AA web accessibility standards.',
    },
  },
};

