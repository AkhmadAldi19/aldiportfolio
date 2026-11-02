import React, { useState, useEffect, useMemo } from 'react';
import { 
  Briefcase, GraduationCap, Award, Layers, Code, Smartphone, 
  PenTool, Globe, ExternalLink, Mail, Phone, MapPin, 
  Plus, Trash2, Edit3, Save, Eye, Lock, Database, 
  CheckCircle2, AlertCircle, BookOpen, User, Terminal, 
  Copy, Check, Search, Filter, ArrowUpRight, Sparkles,
  LayoutDashboard, LogOut, ChevronRight, ChevronLeft, Menu, X, Calendar,
  FolderGit2, FileText, Settings, RefreshCw, UploadCloud,
  Sun, Moon, Bell, MessageSquare, Users, BarChart3, Clock, ShieldCheck, KeyRound,
  Languages, Loader2, ChevronDown
} from 'lucide-react';

// ============================================================================
// MULTI-LANGUAGE DICTIONARY & AI AUTO-TRANSLATION ENGINE
// ============================================================================

const SUPPORTED_LANGUAGES = [
  { code: 'id', label: 'ID', name: 'Indonesia', flag: '🇮🇩' },
  { code: 'en', label: 'EN', name: 'English', flag: '🇬🇧' },
  { code: 'ja', label: 'JA', name: '日本語', flag: '🇯🇵' },
  { code: 'ar', label: 'AR', name: 'العربية', flag: '🇸🇦' }
];

const UI_TRANSLATIONS = {
  id: {
    navAbout: "Tentang",
    navResume: "Resume",
    navWorks: "Karya",
    navBlog: "Blog",
    navContact: "Kontak",
    dayMode: "Mode Siang",
    nightMode: "Mode Malam",
    hireMe: "Hire Me",
    heroBadge: "Portfolio Resmi • Siap Berkolaborasi",
    heroGreeting: "Halo, Saya",
    exploreWorks: "Jelajahi Karya",
    contactWa: "Hubungi via WhatsApp",
    officialEmail: "Email Resmi",
    phoneWa: "WhatsApp / Telepon",
    addressTitle: "Alamat Domisili",
    pillarsTitle: "Fokus & Bidang Keahlian Utama",
    pillarsDesc: "Membangun karakter bisnis, UMKM, dan destinasi wisata melalui strategi brand yang kuat, identitas logo yang ikonik, serta manajemen visual media sosial.",
    selectedPortfolio: "PORTOFOLIO TERPILIH",
    worksTitle: "Karya & Proyek",
    searchPlaceholder: "Cari karya atau tools...",
    allCategory: "Semua",
    clickPreview: "Klik untuk lihat preview",
    projectDetail: "Detail Proyek",
    visitLink: "Kunjungi Link",
    resumeBadge: "RESUME & REKAM JEJAK",
    resumeTitle: "Pendidikan & Pengalaman",
    expTitle: "Pengalaman Kerja & Organisasi",
    eduTitle: "Pendidikan Formal & Non-Formal",
    eduPrefix: "Pendidikan",
    blogBadge: "BLOG & CATATAN",
    blogTitle: "Artikel & Studi Kasus",
    readTimeLabel: "Waktu baca:",
    readMore: "Baca",
    collabBadge: "Mari Berkolaborasi",
    collabTitle: "Siap Membangun Identitas Brand yang Kuat & Berkarakter?",
    collabDesc: "Hubungi saya untuk konsultasi Brand Strategy, pembuatan Logo & Brand Guideline, pengelolaan Social Media Management, maupun desain UI/UX.",
    closeBtn: "Tutup",
    openProjectLink: "Buka Link Proyek",
    toolsTech: "Tools & Teknologi:",
    byAuthor: "Oleh:",
    pillars: [
      {
        num: "01",
        title: "Brand Strategy",
        desc: "Perumusan positioning brand, analisis audiens, arsitektur pesan, dan penyusunan buku Pedoman Sistem Identitas (Brand Guideline) yang komprehensif.",
        tools: "Brand Audit, Positioning, Guideline"
      },
      {
        num: "02",
        title: "Logo Design & Identity",
        desc: "Perancangan logo orisinal, palet warna, tipografi, supergraphic, kemasan produk, hingga desain merchandise korporat & institusi.",
        tools: "Adobe Illustrator, Photoshop"
      },
      {
        num: "03",
        title: "Social Media Management",
        desc: "Perencanaan pilar konten (Content Planning), perancangan visual feed/story Instagram yang konsisten, dan pengelolaan komunikasi brand digital.",
        tools: "Content Pillar, Visual Kit, Copywriting"
      },
      {
        num: "04",
        title: "UI/UX & Digital Design",
        desc: "Riset pengalaman pengguna, wireframing, dan perancangan antarmuka produk digital yang selaras dengan identitas visual brand.",
        tools: "Figma, Google UX Method"
      }
    ]
  },
  en: {
    navAbout: "About",
    navResume: "Resume",
    navWorks: "Works",
    navBlog: "Blog",
    navContact: "Contact",
    dayMode: "Light Mode",
    nightMode: "Dark Mode",
    hireMe: "Hire Me",
    heroBadge: "Official Portfolio • Open for Collaboration",
    heroGreeting: "Hello, I am",
    exploreWorks: "Explore Works",
    contactWa: "Contact via WhatsApp",
    officialEmail: "Official Email",
    phoneWa: "WhatsApp / Phone",
    addressTitle: "Location Address",
    pillarsTitle: "Core Focus & Expertise",
    pillarsDesc: "Building strong character for businesses, SMEs, and tourism destinations through strategic branding, iconic logo identity, and visual social media management.",
    selectedPortfolio: "SELECTED PORTFOLIO",
    worksTitle: "Featured Works & Projects",
    searchPlaceholder: "Search works or tools...",
    allCategory: "All",
    clickPreview: "Click to view preview",
    projectDetail: "Project Details",
    visitLink: "Visit Link",
    resumeBadge: "RESUME & TRACK RECORD",
    resumeTitle: "Education & Experience",
    expTitle: "Work & Organizational Experience",
    eduTitle: "Formal & Non-Formal Education",
    eduPrefix: "Education:",
    blogBadge: "BLOG & INSIGHTS",
    blogTitle: "Articles & Case Studies",
    readTimeLabel: "Read time:",
    readMore: "Read",
    collabBadge: "Let's Collaborate",
    collabTitle: "Ready to Build a Strong & Memorable Brand Identity?",
    collabDesc: "Reach out for Brand Strategy consulting, Logo & Brand Guideline creation, Social Media Management, or UI/UX Design.",
    closeBtn: "Close",
    openProjectLink: "Open Project Link",
    toolsTech: "Tools & Technologies:",
    byAuthor: "By:",
    pillars: [
      {
        num: "01",
        title: "Brand Strategy",
        desc: "Brand positioning formulation, audience analysis, messaging architecture, and comprehensive Brand Identity Guidelines.",
        tools: "Brand Audit, Positioning, Guideline"
      },
      {
        num: "02",
        title: "Logo Design & Identity",
        desc: "Original logo creation, color systems, typography, supergraphics, product packaging, and corporate merchandise design.",
        tools: "Adobe Illustrator, Photoshop"
      },
      {
        num: "03",
        title: "Social Media Management",
        desc: "Content pillar planning, cohesive Instagram feed/story visual systems, and digital brand communication management.",
        tools: "Content Pillar, Visual Kit, Copywriting"
      },
      {
        num: "04",
        title: "UI/UX & Digital Design",
        desc: "User experience research, wireframing, and digital product interface design aligned with the brand's visual identity.",
        tools: "Figma, Google UX Method"
      }
    ]
  },
  ja: {
    navAbout: "概要",
    navResume: "経歴",
    navWorks: "実績",
    navBlog: "ブログ",
    navContact: "連絡先",
    dayMode: "ライト",
    nightMode: "ダーク",
    hireMe: "依頼する",
    heroBadge: "公式ポートフォリオ • コラボレーション受付中",
    heroGreeting: "こんにちは、私は",
    exploreWorks: "作品を見る",
    contactWa: "WhatsAppで連絡",
    officialEmail: "公式メール",
    phoneWa: "WhatsApp / 電話",
    addressTitle: "所在地",
    pillarsTitle: "専門分野と主要スキル",
    pillarsDesc: "強力なブランド戦略、象徴的なロゴアイデンティティ、ソーシャルメディアの視覚的管理を通じて、企業や観光地のブランド価値を構築します。",
    selectedPortfolio: "厳選ポートフォリオ",
    worksTitle: "制作実績・プロジェクト",
    searchPlaceholder: "作品やツールを検索...",
    allCategory: "すべて",
    clickPreview: "クリックしてプレビュー",
    projectDetail: "プロジェクト詳細",
    visitLink: "リンクを開く",
    resumeBadge: "履歴書・実績",
    resumeTitle: "学歴と職務経歴",
    expTitle: "職務および組織での経験",
    eduTitle: "公式・非公式教育",
    eduPrefix: "教育:",
    blogBadge: "ブログ・考察",
    blogTitle: "記事とケーススタディ",
    readTimeLabel: "読了時間:",
    readMore: "読む",
    collabBadge: "コラボレーション",
    collabTitle: "魅力的で強いブランドアイデンティティを構築しませんか？",
    collabDesc: "ブランド戦略、ロゴ＆ガイドライン制作、SNS運用、UI/UXデザインのご相談はお気軽にご連絡ください。",
    closeBtn: "閉じる",
    openProjectLink: "プロジェクトを開く",
    toolsTech: "使用ツール・技術:",
    byAuthor: "著者:",
    pillars: [
      {
        num: "01",
        title: "Brand Strategy",
        desc: "ブランドポジショニングの策定、ターゲット分析、メッセージ設計、および包括的なブランドガイドラインの作成。",
        tools: "Brand Audit, Positioning, Guideline"
      },
      {
        num: "02",
        title: "Logo Design & Identity",
        desc: "オリジナルロゴ、カラーパレット、タイポグラフィ、パッケージ、公式グッズのデザイン。",
        tools: "Adobe Illustrator, Photoshop"
      },
      {
        num: "03",
        title: "Social Media Management",
        desc: "コンテンツ企画、一貫性のあるInstagramフィード・ストーリーのデザイン、デジタルブランド運用。",
        tools: "Content Pillar, Visual Kit, Copywriting"
      },
      {
        num: "04",
        title: "UI/UX & Digital Design",
        desc: "ユーザー調査、ワイヤーフレーム作成、ブランドアイデンティティと調和したUI/UXデザイン。",
        tools: "Figma, Google UX Method"
      }
    ]
  },
  ar: {
    navAbout: "نبذة عني",
    navResume: "السيرة الذاتية",
    navWorks: "أعمالي",
    navBlog: "المدونة",
    navContact: "تواصل معي",
    dayMode: "الوضع النهاري",
    nightMode: "الوضع الليلي",
    hireMe: "وظفني",
    heroBadge: "ملف الأعمال الرسمي • متاح للتعاون",
    heroGreeting: "مرحباً، أنا",
    exploreWorks: "استكشف أعمالي",
    contactWa: "تواصل عبر واتساب",
    officialEmail: "البريد الإلكتروني الرسمي",
    phoneWa: "واتساب / هاتف",
    addressTitle: "العنوان",
    pillarsTitle: "مجالات التخصص والخبرة الأساسية",
    pillarsDesc: "بناء هوية قوية للشركات والمشاريع والوجهات السياحية من خلال استراتيجية العلامة التجارية، تصميم الشعارات، وإدارة وسائل التواصل الاجتماعي.",
    selectedPortfolio: "أعمال مختارة",
    worksTitle: "المشاريع والأعمال الإبداعية",
    searchPlaceholder: "ابحث في الأعمال أو الأدوات...",
    allCategory: "الكل",
    clickPreview: "انقر للمعاينة",
    projectDetail: "تفاصيل المشروع",
    visitLink: "زيارة الرابط",
    resumeBadge: "السيرة الذاتية والخبرات",
    resumeTitle: "التعليم والخبرات العملية",
    expTitle: "الخبرة المهنية والتنظيمية",
    eduTitle: "التعليم الأكاديمي والتدريب",
    eduPrefix: "تعليم",
    blogBadge: "المدونة والمقالات",
    blogTitle: "مقالات ودراسات حالة",
    readTimeLabel: "وقت القراءة:",
    readMore: "اقرأ المزيد",
    collabBadge: "لنتعاون معاً",
    collabTitle: "هل أنت مستعد لبناء هوية علامة تجارية قوية ومميزة؟",
    collabDesc: "تواصل معي لاستشارات استراتيجية العلامة التجارية، تصميم الشعارات، إدارة منصات التواصل الاجتماعي، أو تصميم واجهات المستخدم.",
    closeBtn: "إغلاق",
    openProjectLink: "فتح رابط المشروع",
    toolsTech: "الأدوات والتقنيات:",
    byAuthor: "بقلم:",
    pillars: [
      {
        num: "01",
        title: "Brand Strategy",
        desc: "صياغة مكانة العلامة التجارية، تحليل الجمهور، وإعداد دليل الهوية البصرية الشامل.",
        tools: "Brand Audit, Positioning, Guideline"
      },
      {
        num: "02",
        title: "Logo Design & Identity",
        desc: "تصميم شعارات مبتكرة، أنظمة الألوان، الخطوط، التغليف، والمطبوعات المؤسسية.",
        tools: "Adobe Illustrator, Photoshop"
      },
      {
        num: "03",
        title: "Social Media Management",
        desc: "تخطيط المحتوى، تصميم قوالب إنستغرام المتناسقة، وإدارة التواصل الرقمي للعلامة التجارية.",
        tools: "Content Pillar, Visual Kit, Copywriting"
      },
      {
        num: "04",
        title: "UI/UX & Digital Design",
        desc: "أبحاث تجربة المستخدم وتصميم واجهات رقمية متوافقة مع هوية العلامة التجارية.",
        tools: "Figma, Google UX Method"
      }
    ]
  }
};

// Automatic Multi-Language Translator (Uses Gemini API + Public Translation API fallback)
async function autoTranslateFields(fieldsObject) {
  // Mencoba mengambil API Key dari Environment Variable Vercel jika tersedia
  let apiKey = "";
  try {
    apiKey = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GEMINI_API_KEY) || "";
  } catch (e) {}

  const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;

  const prompt = `Translate the following Indonesian portfolio JSON fields into English (en), Japanese (ja), and Arabic (ar). Keep brand names, place names (like Wonosunyo, Wonokitri, Pasopati, Yudharta, Prigen, Prakarsa, Drakuy), and technical terms natural and professional. Return ONLY valid JSON with keys "en", "ja", and "ar" containing the exact same field keys as the input:\n${JSON.stringify(fieldsObject)}`;

  // 1. Try Gemini Structured JSON Translation first (Jika API Key Vercel ada)
  if (apiKey) {
    try {
      const response = await fetch(geminiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { responseMimeType: "application/json" }
        })
      });
      if (response.ok) {
        const result = await response.json();
        const rawText = result?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (rawText) {
          const parsed = JSON.parse(rawText);
          if (parsed.en) return parsed;
        }
      }
    } catch (e) {
      // Fallback to public translation endpoint below if offline or outside environment
    }
  }

  // 2. Fallback: Free Google Translate GTX endpoint so it also works standalone on Vercel without API keys
  const targetLangs = ['en', 'ja', 'ar'];
  const translations = { en: {}, ja: {}, ar: {} };

  await Promise.all(
    targetLangs.map(async (target) => {
      for (const [key, val] of Object.entries(fieldsObject)) {
        if (!val || typeof val !== 'string') {
          translations[target][key] = val;
          continue;
        }
        try {
          const res = await fetch(
            `https://translate.googleapis.com/translate_a/single?client=gtx&sl=id&tl=${target}&dt=t&q=${encodeURIComponent(val)}`
          );
          const data = await res.json();
          translations[target][key] = data[0].map((segment) => segment[0]).join('');
        } catch {
          translations[target][key] = val;
        }
      }
    })
  );

  return translations;
}

// ============================================================================
// INITIAL DATA EXTRACTED FROM AKHMAD ALDI'S PORTFOLIO PDF
// ============================================================================

const INITIAL_PROFILE = {
  name: "Akhmad Aldi",
  roles: [
    "Brand Strategy",
    "Logo Design & Identity",
    "Social Media Management",
    "UI/UX Designer"
  ],
  bio: "Hai! Saya adalah desainer kreatif lulusan Universitas Yudharta Pasuruan yang berfokus pada Brand Strategy, Logo Design & Identity, Social Media Management, serta UI/UX Design. Saya mulai mendalami desain grafis sejak bangku SMK (2016–2019), tersertifikasi di UPT BLK Pasuruan (2019), dan berpengalaman merancang sistem identitas visual (Brand Guideline) serta strategi konten media sosial untuk berbagai brand, UMKM, dan desa wisata.",
  translations: {
    en: {
      bio: "Hi! I am a creative designer graduated from Yudharta University Pasuruan focusing on Brand Strategy, Logo Design & Identity, Social Media Management, and UI/UX Design. I started exploring graphic design in vocational high school (2016–2019), earned certification at UPT BLK Pasuruan (2019), and have extensive experience crafting visual identity systems (Brand Guidelines) and social media content strategies for brands, SMEs, and tourism villages."
    },
    ja: {
      bio: "こんにちは！ユダルタ・パスルアン大学卒業のクリエイティブデザイナーです。ブランド戦略、ロゴデザイン＆アイデンティティ、SNS運用、UI/UXデザインを専門としています。2016年からグラフィックデザインを学び、多くの企業や観光村のブランドガイドラインやSNS戦略を手掛けています。"
    },
    ar: {
      bio: "مرحباً! أنا مصمم إبداعي خريج جامعة يودهارتا باسوروان، متخصص في استراتيجية العلامة التجارية، تصميم الشعارات والهوية البصرية، إدارة وسائل التواصل الاجتماعي، وتصميم UI/UX. أمتلك خبرة واسعة في بناء أدلة الهوية البصرية واستراتيجيات المحتوى الرقمي للشركات والقرى السياحية."
    }
  },
  email: "aldiakhmad15@gmail.com",
  phone: "+62-853-3463-4129",
  whatsapp: "6285334634129",
  address: "Jln Lely 2 Geneng Timur, Kel. Ledug, Kec. Prigen, Kab. Pasuruan, Jawa Timur 67157",
  socials: {
    linkedin: "Akhmad-Aldi",
    instagram: "Akhmadaldi19",
    github: "Akhmadaldi19"
  }
};

const INITIAL_EDUCATION = [
  {
    id: "edu-1",
    type: "Formal",
    institution: "Universitas Yudharta Pasuruan",
    major: "Teknik Informatika (Fokus Desain & Media Kreatif)",
    period: "2020 - 2024",
    description: "Mendalami komunikasi visual, perancangan sistem identitas brand, riset pengalaman pengguna (UI/UX Design), dan manajemen media digital.",
    translations: {
      en: {
        major: "Informatics Engineering (Creative Design & Media Focus)",
        description: "Studied visual communication, brand identity system design, user experience research (UI/UX Design), and digital media management."
      }
    }
  },
  {
    id: "edu-2",
    type: "Formal",
    institution: "SMK Negeri Prigen",
    major: "Multimedia",
    period: "2016 - 2019",
    description: "Mempelajari dasar hingga lanjut desain grafis, fotografi, videografi, dan produksi konten kreatif.",
    translations: {
      en: {
        major: "Multimedia",
        description: "Learned foundational to advanced graphic design, photography, videography, and creative content production."
      }
    }
  },
  {
    id: "edu-3",
    type: "Non-Formal",
    institution: "Coursera | Google",
    major: "Design UX | Google",
    period: "2023",
    description: "Mempelajari metodologi desain berbasis pengguna (User-Centered Design), riset audiens, wireframing, dan prototyping.",
    translations: {
      en: {
        major: "Google UX Design Professional Certificate",
        description: "Mastered User-Centered Design methodology, audience research, wireframing, and interactive prototyping."
      }
    }
  },
  {
    id: "edu-5",
    type: "Non-Formal",
    institution: "UPT BLK Pasuruan",
    major: "Design Grafis",
    period: "2019",
    description: "Sertifikasi kompetensi keahlian desain grafis percetakan, tipografi, dan sistem identitas visual.",
    translations: {
      en: {
        major: "Graphic Design Certification",
        description: "Professional competency certification in print graphic design, typography, and visual identity systems."
      }
    }
  }
];

const INITIAL_EXPERIENCE = [
  {
    id: "exp-1",
    role: "Brand Strategist & Visual Identity Designer",
    company: "PPK ORMAWA UYP | Desa Edelweiss Wonokitri",
    type: "PPK Ormawa",
    period: "2023",
    description: "Merancang strategi branding, Logo resmi, serta buku Pedoman Sistem Identitas (Brand Guideline) dan materi promosi media sosial Desa Wisata Edelweiss Wonokitri.",
    translations: {
      en: {
        role: "Brand Strategist & Visual Identity Designer",
        type: "PPK Ormawa Program",
        description: "Designed branding strategy, official logo, comprehensive Brand Identity Guidelines, and social media promotional kits for Edelweiss Wonokitri Tourism Village."
      }
    }
  },
  {
    id: "exp-2",
    role: "Brand Designer & Social Media Specialist",
    company: "Toko Kilgo Ancreza | Batu",
    type: "Jarak Jauh",
    period: "2022 - 2023",
    description: "Bertanggung jawab atas strategi visual brand, perancangan katalog konten Instagram/media sosial, kemasan produk, dan kampanye promosi digital.",
    translations: {
      en: {
        role: "Brand Designer & Social Media Specialist",
        type: "Remote",
        description: "Spearheaded brand visual strategy, Instagram content catalog design, product packaging, and digital promotional campaigns."
      }
    }
  },
  {
    id: "exp-4",
    role: "Koordinator Devisi Media & Branding",
    company: "KKNT Universitas Yudharta | Wonosunyo",
    type: "Kuliah Kerja Nyata Tematik",
    period: "2022",
    description: "Merumuskan Brand Strategy, membuat Brand Guideline (Pedoman Sistem Identitas), serta mengelola publikasi konten media sosial Desa Wisata Wonosunyo.",
    translations: {
      en: {
        role: "Media & Branding Division Coordinator",
        type: "Thematic Community Service",
        description: "Formulated Brand Strategy, authored the Brand Identity Guideline book, and managed social media content publications for Wonosunyo Tourism Village."
      }
    }
  },
  {
    id: "exp-5",
    role: "Graphic Designer & Operator Mesin Cetak",
    company: "ITSOL Indonesia | Pandaan",
    type: "Penuh Waktu",
    period: "2019 - 2020",
    description: "Menangani desain identitas pracetak, materi promosi brand klien, dan mengoperasikan mesin produksi cetak digital skala besar.",
    translations: {
      en: {
        role: "Graphic Designer & Print Production Operator",
        type: "Full-time",
        description: "Handled pre-press identity design, client brand promotional materials, and operated large-scale digital printing machines."
      }
    }
  },
  {
    id: "exp-6",
    role: "Graphic Designer & Fotografer",
    company: "Glamour Foto Makmur | Pandaan",
    type: "Magang",
    period: "2019",
    description: "Melakukan sesi pemotretan produk/studio, retouching visual, serta penataan layout aset kreatif.",
    translations: {
      en: {
        role: "Graphic Designer & Photographer",
        type: "Internship",
        description: "Conducted studio/product photography sessions, visual retouching, and creative asset layouting."
      }
    }
  }
];

const INITIAL_PROJECTS = [
  {
    id: "proj-1",
    title: "Logo Pasopati 2023",
    category: "Logo Design & Identity",
    subtitle: "Orientasi Mahasiswa Universitas Yudharta Pasuruan",
    description: "Project logo resmi untuk kegiatan Orientasi Mahasiswa Baru (Pasopati 2023) Universitas Yudharta Pasuruan. Mengusung tema 'Agni Aksa Renjana' yang berarti 'Api Abadi yang Membara' dengan palet warna #F75404, #F98404, #FCBA04 dan font Poppins.",
    translations: {
      en: {
        title: "Pasopati 2023 Official Logo",
        subtitle: "Student Orientation of Yudharta University Pasuruan",
        description: "Official logo identity project for the New Student Orientation (Pasopati 2023) at Yudharta University Pasuruan. Carrying the theme 'Agni Aksa Renjana' meaning 'Eternal Blazing Flame' with warm geometric elephant visuals."
      },
      ja: {
        title: "Pasopati 2023 公式ロゴ",
        subtitle: "ユダルタ・パスルアン大学 新入生オリエンテーション",
        description: "ユダルタ・パスルアン大学の新入生オリエンテーション（Pasopati 2023）の公式ロゴプロジェクト。「永遠に燃える炎」を意味するテーマを幾何学的な象のモチーフで表現。"
      },
      ar: {
        title: "شعار باسوباتي 2023 الرسمي",
        subtitle: "توجيه الطلاب الجدد بجامعة يودهارتا باسوروان",
        description: "مشروع الشعار الرسمي لتوجيه الطلاب الجدد لعام 2023 بجامعة يودهارتا، يجسد مفهوم الشعلة الأبدية المتقدة بأسلوب هندسي حديث."
      }
    },
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Brand Guideline"],
    link: "https://s.id/pasopati2023",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80",
    featured: true,
    accentColor: "from-orange-500 to-amber-500",
    year: "2023",
    rate: "5.0"
  },
  {
    id: "proj-2",
    title: "Rebranding Desa Wisata Wonosunyo",
    category: "Brand Strategy",
    subtitle: "Pedoman Sistem Identitas & Strategi Brand Desa Wisata",
    description: "Perancangan strategi brand, logo, dan Brand Guideline lengkap (kop surat, totebag, kaos, mug, dan supergraphic) untuk membangun citra pariwisata Desa Wisata Wonosunyo.",
    translations: {
      en: {
        title: "Wonosunyo Tourism Village Rebranding",
        subtitle: "Brand Identity Guidelines & Tourism Brand Strategy",
        description: "Comprehensive brand strategy, logo design, and Brand Identity Guidelines (letterhead, totebag, t-shirt, mug, and supergraphics) to elevate Wonosunyo Tourism Village."
      },
      ja: {
        title: "ウォノスニョ観光村のリブランディング",
        subtitle: "ブランドアイデンティティガイドライン＆戦略",
        description: "ウォノスニョ観光村の観光イメージを構築するための包括的なブランド戦略、ロゴ、および公式グッズのガイドライン設計。"
      },
      ar: {
        title: "إعادة بناء الهوية البصرية لقرية وونوسونيو السياحية",
        subtitle: "دليل الهوية البصرية واستراتيجية العلامة التجارية",
        description: "تطوير استراتيجية العلامة التجارية والشعار ودليل الهوية الكامل لتعزيز مكانة قرية وونوسونيو كوجهة سياحية."
      }
    },
    tools: ["Brand Strategy", "Adobe Illustrator", "Adobe Photoshop"],
    link: "https://s.id/desawisatawonosunyo",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=900&q=80",
    featured: true,
    accentColor: "from-emerald-500 to-teal-600",
    year: "2022",
    rate: "4.9"
  },
  {
    id: "proj-3",
    title: "Brand Identity Desa Wisata Wonokitri",
    category: "Brand Strategy",
    subtitle: "Brand & Design Application Guidelines Edelweiss Wonokitri",
    description: "Perumusan strategi posisi brand dan perancangan identitas visual Desa Wisata Edelweiss Wonokitri beserta pedoman pengaplikasian media dan merchandise resmi.",
    translations: {
      en: {
        title: "Wonokitri Edelweiss Village Brand Identity",
        subtitle: "Brand & Design Application Guidelines",
        description: "Brand positioning strategy and visual identity system for Edelweiss Wonokitri Tourism Village, complete with official merchandise and media application rules."
      }
    },
    tools: ["Brand Strategy", "Adobe Illustrator", "Adobe Photoshop"],
    link: "https://s.id/desawisatawonokitri",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=900&q=80",
    featured: true,
    accentColor: "from-green-600 to-lime-500",
    year: "2023",
    rate: "5.0"
  },
  {
    id: "proj-4",
    title: "Logo Kampoeng Samiler",
    category: "Logo Design & Identity",
    subtitle: "Identitas Visual UMKM & Komunitas Kuliner",
    description: "Perancangan identitas visual dan kemasan untuk Kampoeng Samiler dengan pendekatan ikonik yang meningkatkan daya tarik produk lokal di pasar modern.",
    translations: {
      en: {
        title: "Kampoeng Samiler Logo Identity",
        subtitle: "Visual Identity for Culinary SME Community",
        description: "Visual identity and packaging design for Kampoeng Samiler using an iconic approach to boost local culinary appeal in modern markets."
      }
    },
    tools: ["Adobe Illustrator", "Packaging Design"],
    link: "https://s.id/Kampoengsamiler",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80",
    featured: false,
    accentColor: "from-amber-600 to-yellow-500",
    year: "2022",
    rate: "4.8"
  },
  {
    id: "proj-5",
    title: "Identitas & Feeds KKN 17 Tapaan",
    category: "Social Media Management",
    subtitle: "Manajemen Konten & Identitas Visual KKN 17",
    description: "Perancangan logo resmi sekaligus pengelolaan template feed Instagram, story, dan publikasi dokumentasi kegiatan KKN Reguler 17 di Kelurahan Tapaan.",
    translations: {
      en: {
        title: "KKN 17 Tapaan Identity & Instagram Feeds",
        subtitle: "Social Media Content Management & Visual Identity",
        description: "Official logo creation and cohesive Instagram grid templates, stories, and digital publication management for KKN 17 in Tapaan."
      }
    },
    tools: ["Adobe Illustrator", "Photoshop", "Instagram Grid"],
    link: "https://s.id/kkn17tapaan",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=900&q=80",
    featured: false,
    accentColor: "from-blue-600 to-cyan-500",
    year: "2022",
    rate: "4.8"
  },
  {
    id: "proj-6",
    title: "Kampanye Media Sosial KKNT Wonosunyo",
    category: "Social Media Management",
    subtitle: "Strategi Konten & Publikasi Digital Desa Wisata",
    description: "Pengelolaan arah visual media sosial, desain konten edukasi pariwisata, dan branding digital untuk tim KKN Tematik MBKM Desa Wonosunyo.",
    translations: {
      en: {
        title: "KKNT Wonosunyo Social Media Campaign",
        subtitle: "Content Strategy & Digital Tourism Publication",
        description: "Social media visual direction, educational tourism content design, and digital branding for the Wonosunyo Thematic KKN team."
      }
    },
    tools: ["Social Media Kit", "Adobe Illustrator", "Copywriting"],
    link: "https://s.id/kkntwonosunyo",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80",
    featured: true,
    accentColor: "from-teal-500 to-emerald-500",
    year: "2022",
    rate: "4.9"
  },
  {
    id: "proj-7",
    title: "PPK Ormawa Himakom Branding & Socials",
    category: "Social Media Management",
    subtitle: "Identitas Visual & Manajemen Publikasi Program",
    description: "Perancangan logo bunga Edelweiss geometris serta sistem template publikasi media sosial untuk meningkatkan eksposur program PPK Ormawa Himakom di Wonokitri.",
    translations: {
      en: {
        title: "PPK Ormawa Himakom Branding & Socials",
        subtitle: "Visual Identity & Program Publication Management",
        description: "Geometric Edelweiss logo design and social media publication template system to maximize digital exposure in Wonokitri."
      }
    },
    tools: ["Adobe Illustrator", "Content Planning", "Brand Kit"],
    link: "https://s.id/ppkormawa",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
    featured: true,
    accentColor: "from-yellow-500 to-emerald-600",
    year: "2023",
    rate: "5.0"
  },
  {
    id: "proj-8",
    title: "Logo TPA Anwarul Qulub",
    category: "Logo Design & Identity",
    subtitle: "Taman Pendidikan Al-Quran Wonosunyo",
    description: "Perancangan logo bernuansa islami modern untuk Taman Pendidikan Al-Quran (TPA) Anwarul Qulub Dusun Badur, Wonosunyo.",
    translations: {
      en: {
        title: "TPA Anwarul Qulub Islamic Logo",
        subtitle: "Quranic Education Center in Wonosunyo",
        description: "Modern Islamic visual identity design for Anwarul Qulub Quranic Education Center (TPA) in Badur Hamlet, Wonosunyo."
      }
    },
    tools: ["Adobe Illustrator", "Visual Identity"],
    link: "https://s.id/anwarulQulub",
    image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=900&q=80",
    featured: false,
    accentColor: "from-emerald-700 to-green-500",
    year: "2022",
    rate: "4.9"
  },
  {
    id: "proj-9",
    title: "Prakarsa - Career Platform UI/UX",
    category: "UI/UX Design",
    subtitle: "Finalis Lomba UI/UX Design Universitas Nusa Mandiri",
    description: "Perancangan antarmuka dan pengalaman pengguna (UI/UX) aplikasi pencari kerja dan kursus yang berhasil menembus Babak Final tingkat nasional di Universitas Nusa Mandiri.",
    translations: {
      en: {
        title: "Prakarsa - Career Platform UI/UX",
        subtitle: "National UI/UX Design Finalist at Nusa Mandiri University",
        description: "User interface and experience (UI/UX) design for a career and skill-building mobile app, selected as a National Finalist."
      }
    },
    tools: ["Figma", "Prototyping", "UX Research"],
    link: "https://s.id/Prakarsa",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80",
    featured: true,
    accentColor: "from-indigo-600 to-violet-600",
    year: "2023",
    rate: "5.0"
  },
  {
    id: "proj-10",
    title: "Drakuy - Streaming App UI/UX",
    category: "UI/UX Design",
    subtitle: "Eksplorasi Desain Antarmuka & Design System",
    description: "Project UI/UX Design aplikasi streaming drama Korea dengan fokus pada kemudahan navigasi visual, hierarki tipografi, dan kenyamanan pengguna.",
    translations: {
      en: {
        title: "Drakuy - Streaming App UI/UX",
        subtitle: "Interface Exploration & Mobile Design System",
        description: "UI/UX Design project for a Korean drama streaming platform focusing on intuitive visual navigation, typography hierarchy, and user comfort."
      }
    },
    tools: ["Figma", "Wireframing", "Design System"],
    link: "https://s.id/drakuy",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=80",
    featured: false,
    accentColor: "from-rose-500 to-pink-600",
    year: "2022",
    rate: "4.9"
  }
];

const INITIAL_BLOGS = [
  {
    id: "blog-1",
    title: "Proses Kreatif di Balik Logo Pasopati 2023: Agni Aksa Renjana",
    slug: "proses-kreatif-logo-pasopati-2023",
    category: "Logo Design & Identity",
    date: "2023-08-15",
    readTime: "4 Menit",
    status: "Completed",
    excerpt: "Bagaimana menerjemahkan filosofi 'Api Abadi yang Membara' ke dalam bentuk geometris modern untuk orientasi mahasiswa baru Universitas Yudharta Pasuruan.",
    content: "Merancang identitas visual untuk acara tahunan kampus membutuhkan keseimbangan antara nilai filosofis tradisional dan estetika modern yang disukai generasi muda. Pada logo Pasopati 2023, tema 'Agni Aksa Renjana' diwujudkan melalui siluet gajah geometris dengan mahkota api tiga warna (#F75404, #F98404, #FCBA04) yang melambangkan semangat, intelektualitas, dan keberanian mahasiswa baru.",
    translations: {
      en: {
        title: "Creative Process Behind Pasopati 2023 Logo: Agni Aksa Renjana",
        excerpt: "How to translate the philosophy of 'Eternal Blazing Flame' into modern geometric forms for Yudharta University's new student orientation.",
        content: "Designing a visual identity for an annual university event requires a balance between traditional philosophical values and modern aesthetics favored by the younger generation. In the Pasopati 2023 logo, the theme 'Agni Aksa Renjana' is realized through a geometric elephant silhouette crowned with a tri-color flame (#F75404, #F98404, #FCBA04) symbolizing spirit, intellect, and courage."
      },
      ja: {
        title: "Pasopati 2023 ロゴ制作の裏側：Agni Aksa Renjana",
        excerpt: "「永遠に燃える炎」の哲学を現代的な幾何学フォルムへと昇華させたデザインプロセス。",
        content: "大学の年次イベントのビジュアルアイデンティティをデザインするには、伝統的な哲学と若い世代が好むモダンな美学のバランスが必要です。Pasopati 2023のロゴでは、3色の炎の冠を戴く幾何学的な象のシルエットを通じて、新入生の情熱と知性を表現しました。"
      },
      ar: {
        title: "العملية الإبداعية وراء شعار باسوباتي 2023: الشعلة الأبدية",
        excerpt: "كيف تمت ترجمة فلسفة الشعلة المتقدة إلى أشكال هندسية حديثة لتوجيه الطلاب الجدد.",
        content: "يتطلب تصميم الهوية البصرية لحدث جامعي سنوي توازناً بين القيم الفلسفية التقليدية والجماليات الحديثة التي يفضلها جيل الشباب. في شعار باسوباتي 2023، تم تجسيد هذا المفهوم من خلال تصميم هندسي متناسق يعبر عن الحماس والشجاعة."
      }
    }
  },
  {
    id: "blog-2",
    title: "Pentingnya Brand Guideline & Social Media Kit untuk Desa Wisata",
    slug: "pentingnya-brand-guideline-desa-wisata",
    category: "Brand Strategy",
    date: "2023-11-02",
    readTime: "6 Menit",
    status: "Completed",
    excerpt: "Studi kasus bagaimana konsistensi warna, tipografi, dan supergraphic mampu meningkatkan daya tarik Desa Wisata Wonosunyo dan Edelweiss Wonokitri.",
    content: "Banyak destinasi wisata lokal memiliki potensi alam dan budaya yang luar biasa, namun belum memiliki karakter visual yang mudah diingat wisatawan. Melalui penyusunan Brand Guideline (Pedoman Sistem Identitas), setiap titik sentuh—mulai dari papan petunjuk, merchandise kaos & totebag, hingga template konten Instagram—memiliki bahasa visual yang seragam dan profesional.",
    translations: {
      en: {
        title: "Why Brand Guidelines & Social Media Kits Matter for Tourism Villages",
        excerpt: "A case study on how consistent color palettes, typography, and supergraphics elevated Wonosunyo and Edelweiss Wonokitri Tourism Villages.",
        content: "Many local tourism destinations possess extraordinary natural and cultural potential but lack a memorable visual character. By establishing a comprehensive Brand Guideline, every touchpoint—from signage and official merchandise to Instagram templates—speaks a unified, trustworthy visual language."
      }
    }
  },
  {
    id: "blog-3",
    title: "Strategi Visual Social Media Management agar Audiens Lebih Terlibat",
    slug: "strategi-visual-social-media-management",
    category: "Social Media Management",
    date: "2024-02-10",
    readTime: "5 Menit",
    status: "Completed",
    excerpt: "Menggabungkan perencanaan konten (Content Pillar), psikologi warna, dan tata letak carousel untuk membangun identitas brand yang kuat di Instagram.",
    content: "Manajemen media sosial bukan sekadar mengunggah poster setiap hari. Kunci utamanya terletak pada keselarasan antara Brand Strategy dengan kebutuhan informasi audiens. Dengan membagi konten ke dalam pilar edukasi, promosi, dan interaksi, serta menjaga konsistensi grid visual, sebuah brand dapat meningkatkan kepercayaan sekaligus konversi secara organik.",
    translations: {
      en: {
        title: "Visual Social Media Management Strategies for Higher Audience Engagement",
        excerpt: "Combining content pillars, color psychology, and carousel storytelling to build a powerful brand identity on Instagram.",
        content: "Social media management is more than posting daily graphics. The key lies in aligning Brand Strategy with audience needs. By structuring content into educational, promotional, and interactive pillars while maintaining visual grid consistency, brands can organically grow trust and conversions."
      }
    }
  }
];

const SUPABASE_SQL_SCHEMA = `-- ============================================================================
-- SUPABASE SQL SCHEMA UNTUK LANDINGPAGE.HTML & DASHBOARD.HTML (MULTI-LANGUAGE)
-- Jalankan script ini di Supabase Dashboard -> SQL Editor -> New Query
-- ============================================================================

CREATE TABLE IF NOT EXISTS public.portfolio_profile (
  id INT PRIMARY KEY DEFAULT 1,
  data JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.portfolio_projects (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  subtitle TEXT,
  description TEXT,
  tools JSONB DEFAULT '[]'::jsonb,
  link TEXT,
  image TEXT,
  featured BOOLEAN DEFAULT false,
  accent_color TEXT DEFAULT 'from-indigo-600 to-violet-600',
  year TEXT DEFAULT '2024',
  translations JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.portfolio_blogs (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT,
  category TEXT,
  date TEXT,
  read_time TEXT,
  excerpt TEXT,
  content TEXT,
  translations JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.portfolio_resume (
  id INT PRIMARY KEY DEFAULT 1,
  education JSONB NOT NULL,
  experience JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.portfolio_profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_resume ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public Access Profile" ON public.portfolio_profile FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Access Projects" ON public.portfolio_projects FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Access Blogs" ON public.portfolio_blogs FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Access Resume" ON public.portfolio_resume FOR ALL USING (true) WITH CHECK (true);
`;

// ============================================================================
// MAIN APPLICATION COMPONENT
// ============================================================================

export default function App() {
  // 1. Theme State ('dark' | 'light') & Language State ('id' | 'en' | 'ja' | 'ar')
  const [theme, setTheme] = useState('dark');
  const isDark = theme === 'dark';
  const [lang, setLang] = useState('id');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [autoTranslateEnabled, setAutoTranslateEnabled] = useState(true);
  const [isTranslating, setIsTranslating] = useState(false);

  const t = UI_TRANSLATIONS[lang] || UI_TRANSLATIONS.id;
  const activeLangObj = SUPPORTED_LANGUAGES.find(l => l.code === lang) || SUPPORTED_LANGUAGES[0];

  // Helper to get localized field from an item (Project, Blog, Resume, Profile)
  const getLocalized = (item, field) => {
    if (!item) return '';
    if (lang === 'id') return item[field];
    return item.translations?.[lang]?.[field] || item.translations?.en?.[field] || item[field];
  };

  // 2. Multi-page Route Simulation ('landingpage.html' | 'dashboard.html')
  // Auto-detects URL path or query when deployed to Vercel (/dashboard.html or /admin)
  const [currentRoute, setCurrentRoute] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('dashboard') || path.includes('admin') || hash.includes('dashboard')) {
        return 'dashboard.html';
      }
    }
    return 'landingpage.html';
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 3. Authentication State for dashboard.html
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminCredentials, setAdminCredentials] = useState({
    username: 'aldi',
    password: 'password123'
  });
  const [loginInput, setLoginInput] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');

  // Secret keyboard shortcut (Ctrl + Shift + L or Alt + L) to jump to dashboard.html
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'l') || (e.altKey && e.key.toLowerCase() === 'l')) {
        e.preventDefault();
        setCurrentRoute('dashboard.html');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // 4. Portfolio & CMS Data States
  const [profile, setProfile] = useState(INITIAL_PROFILE);
  const [education, setEducation] = useState(INITIAL_EDUCATION);
  const [experience, setExperience] = useState(INITIAL_EXPERIENCE);
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [blogs, setBlogs] = useState(INITIAL_BLOGS);

  // 5. Eduplex CMS Navigation State
  const [cmsMenu, setCmsMenu] = useState('overview'); // 'overview' | 'projects' | 'blogs' | 'resume' | 'profile' | 'supabase' | 'guide'
  const [cmsSearch, setCmsSearch] = useState('');
  const [cmsSidebarOpen, setCmsSidebarOpen] = useState(false);

  // 6. Landing Page Filter & Modal States
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [activeBlogModal, setActiveBlogModal] = useState(null);

  // 7. Supabase Connection State (Auto-loads from Vercel Environment Variables if present)
  const [supabaseUrl, setSupabaseUrl] = useState(() => {
    try {
      return (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_URL) || 'https://juxhrebslwfcsidfppaa.supabase.co';
    } catch {
      return 'https://juxhrebslwfcsidfppaa.supabase.co';
    }
  });
  const [supabaseKey, setSupabaseKey] = useState(() => {
    try {
      return (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_ANON_KEY) || '';
    } catch {
      return '';
    }
  });
  const [isSupabaseConnected, setIsSupabaseConnected] = useState(false);
  const [syncStatus, setSyncStatus] = useState(null);
  const [copiedSql, setCopiedSql] = useState(false);
  const [copiedFileKey, setCopiedFileKey] = useState('');

  // 8. CMS Form States
  const [editingProject, setEditingProject] = useState(null);
  const [projectForm, setProjectForm] = useState({
    title: '', category: 'Logo Design & Identity', subtitle: '', description: '',
    tools: '', link: '', image: '', featured: true, accentColor: 'from-orange-500 to-amber-500', year: '2026', rate: '5.0'
  });

  const [editingBlog, setEditingBlog] = useState(null);
  const [blogForm, setBlogForm] = useState({
    title: '', category: 'Brand Strategy', date: '2026-11-02', readTime: '5 Menit', status: 'Completed', excerpt: '', content: ''
  });

  // 9. Resume (Experience & Education) CMS Form States
  const [resumeSubTab, setResumeSubTab] = useState('experience'); // 'experience' | 'education'
  const [editingExp, setEditingExp] = useState(null);
  const [expForm, setExpForm] = useState({
    role: '',
    company: '',
    type: 'Penuh Waktu',
    period: '2026',
    description: ''
  });

  const [editingEdu, setEditingEdu] = useState(null);
  const [eduForm, setEduForm] = useState({
    type: 'Formal',
    institution: '',
    major: '',
    period: '2026',
    description: ''
  });

  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  // ============================================================================
  // AUTHENTICATION HANDLERS
  // ============================================================================
  const handleLogin = (e) => {
    e.preventDefault();
    if (
      loginInput.username.trim().toLowerCase() === adminCredentials.username.toLowerCase() &&
      loginInput.password === adminCredentials.password
    ) {
      setIsAuthenticated(true);
      setLoginError('');
      showToast(`Selamat datang kembali, ${profile.name}!`);
    } else {
      setLoginError('Username atau password salah! Gunakan default: aldi / password123');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setLoginInput({ username: '', password: '' });
    showToast('Anda telah keluar dari sesi CMS.');
  };

  // ============================================================================
  // SUPABASE REST API INTEGRATION
  // ============================================================================
  const cleanUrl = (url) => {
    if (!url) return '';
    return url
      .trim()
      .replace(/\/rest\/v1\/?$/i, '')
      .replace(/\/+$/, '');
  };

  const fetchFromSupabase = async (url = supabaseUrl, key = supabaseKey) => {
    if (!url || !key) {
      showToast("Masukkan Supabase URL dan Publishable/Anon Key terlebih dahulu", "error");
      return;
    }
    setSyncStatus({ type: 'loading', message: 'Mengambil data dari Supabase...' });
    try {
      const base = cleanUrl(url);
      const cleanKey = key.trim();
      const headers = {
        'apikey': cleanKey,
        'Authorization': `Bearer ${cleanKey}`,
        'Content-Type': 'application/json'
      };

      const [profRes, projRes, blogRes, resRes] = await Promise.all([
        fetch(`${base}/rest/v1/portfolio_profile?id=eq.1&select=*`, { headers }),
        fetch(`${base}/rest/v1/portfolio_projects?select=*&order=created_at.asc`, { headers }),
        fetch(`${base}/rest/v1/portfolio_blogs?select=*&order=created_at.desc`, { headers }),
        fetch(`${base}/rest/v1/portfolio_resume?id=eq.1&select=*`, { headers })
      ]);

      if (!profRes.ok) throw new Error("Pastikan tabel SQL sudah dibuat di Supabase SQL Editor.");

      const profData = await profRes.json();
      const projData = await projRes.json();
      const blogData = await blogRes.json();
      const resData = await resRes.json();

      if (profData?.length > 0 && profData[0].data) setProfile(profData[0].data);
      if (projData?.length > 0) {
        setProjects(projData.map(p => ({
          id: p.id, title: p.title, category: p.category, subtitle: p.subtitle,
          description: p.description, tools: p.tools || [], link: p.link,
          image: p.image || '',
          featured: p.featured, accentColor: p.accent_color || 'from-indigo-600 to-violet-600',
          year: p.year || '2023', rate: '5.0',
          translations: p.translations || {}
        })));
      }
      if (blogData?.length > 0) {
        setBlogs(blogData.map(b => ({
          id: b.id, title: b.title, slug: b.slug, category: b.category,
          date: b.date, readTime: b.read_time, status: 'Completed', excerpt: b.excerpt, content: b.content,
          translations: b.translations || {}
        })));
      }
      if (resData?.length > 0) {
        if (resData[0].education) setEducation(resData[0].education);
        if (resData[0].experience) setExperience(resData[0].experience);
      }

      setIsSupabaseConnected(true);
      setSyncStatus({ type: 'success', message: 'Terhubung! Data berhasil dimuat dari Supabase.' });
      showToast("Data berhasil disinkronkan dari Supabase!");
    } catch (err) {
      setSyncStatus({ type: 'error', message: err.message || 'Gagal terhubung ke Supabase.' });
      showToast(err.message || "Gagal memuat dari Supabase", "error");
    }
  };

  const pushAllToSupabase = async () => {
    if (!supabaseUrl || !supabaseKey) {
      showToast("Masukkan Publishable Key Supabase terlebih dahulu di menu Supabase DB.", "error");
      setCmsMenu('supabase');
      return;
    }
    setSyncStatus({ type: 'loading', message: 'Mengunggah seluruh data ke Supabase...' });
    try {
      const base = cleanUrl(supabaseUrl);
      const cleanKey = supabaseKey.trim();
      const headers = {
        'apikey': cleanKey,
        'Authorization': `Bearer ${cleanKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'resolution=merge-duplicates'
      };

      const profReq = await fetch(`${base}/rest/v1/portfolio_profile`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ id: 1, data: profile, updated_at: new Date().toISOString() })
      });
      if (!profReq.ok) throw new Error("Gagal menyimpan profil. Pastikan script SQL sudah dijalankan.");

      const formattedProjects = projects.map(p => ({
        id: p.id, title: p.title, category: p.category, subtitle: p.subtitle,
        description: p.description, tools: p.tools, link: p.link,
        image: p.image || '',
        featured: p.featured, accent_color: p.accentColor, year: p.year,
        translations: p.translations || {}
      }));
      await fetch(`${base}/rest/v1/portfolio_projects`, {
        method: 'POST', headers, body: JSON.stringify(formattedProjects)
      });

      const formattedBlogs = blogs.map(b => ({
        id: b.id, title: b.title, slug: b.slug, category: b.category,
        date: b.date, read_time: b.readTime, excerpt: b.excerpt, content: b.content,
        translations: b.translations || {}
      }));
      await fetch(`${base}/rest/v1/portfolio_blogs`, {
        method: 'POST', headers, body: JSON.stringify(formattedBlogs)
      });

      await fetch(`${base}/rest/v1/portfolio_resume`, {
        method: 'POST', headers,
        body: JSON.stringify({ id: 1, education, experience, updated_at: new Date().toISOString() })
      });

      setIsSupabaseConnected(true);
      setSyncStatus({ type: 'success', message: 'Seluruh data portofolio berhasil disimpan ke database Supabase!' });
      showToast("Berhasil push seluruh data ke Supabase!");
    } catch (err) {
      setSyncStatus({ type: 'error', message: err.message });
      showToast(err.message, "error");
    }
  };

  // Filtered Projects for Landing Page
  const categories = ['Semua', 'Brand Strategy', 'Logo Design & Identity', 'Social Media Management', 'UI/UX Design'];
  const filteredProjects = useMemo(() => {
    return projects.filter(proj => {
      const matchCat = selectedCategory === 'Semua' || proj.category === selectedCategory;
      const localTitle = (lang === 'id' ? proj.title : (proj.translations?.[lang]?.title || proj.title)) || '';
      const localDesc = (lang === 'id' ? proj.description : (proj.translations?.[lang]?.description || proj.description)) || '';
      const matchSearch = localTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          localDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.tools.some(tool => tool.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [projects, selectedCategory, searchQuery, lang]);

  // ============================================================================
  // CMS CRUD HANDLERS (WITH AUTOMATIC MULTI-LANGUAGE TRANSLATION)
  // ============================================================================
  const handleSaveProject = async (e) => {
    e.preventDefault();
    if (!projectForm.title.trim()) return;

    const toolsArray = typeof projectForm.tools === 'string'
      ? projectForm.tools.split(',').map(t => t.trim()).filter(Boolean)
      : projectForm.tools;

    let generatedTranslations = editingProject?.translations || {};

    if (autoTranslateEnabled) {
      setIsTranslating(true);
      showToast("Menerjemahkan karya otomatis ke Inggris, Jepang & Arab...", "info");
      generatedTranslations = await autoTranslateFields({
        title: projectForm.title,
        subtitle: projectForm.subtitle,
        description: projectForm.description
      });
      setIsTranslating(false);
    }

    if (editingProject) {
      setProjects(prev => prev.map(p => p.id === editingProject.id ? {
        ...p, ...projectForm, tools: toolsArray, translations: generatedTranslations
      } : p));
      showToast("Karya & terjemahan multi-bahasa berhasil diperbarui!");
    } else {
      const newProj = {
        ...projectForm,
        id: `proj-${Date.now()}`,
        tools: toolsArray,
        rate: '5.0',
        translations: generatedTranslations
      };
      setProjects(prev => [newProj, ...prev]);
      showToast("Karya baru berhasil ditambahkan & diterjemahkan ke 3 bahasa!");
    }

    setEditingProject(null);
    setProjectForm({
      title: '', category: 'Logo Design & Identity', subtitle: '', description: '',
      tools: '', link: '', image: '', featured: true, accentColor: 'from-orange-500 to-amber-500', year: '2026', rate: '5.0'
    });
  };

  const handleEditProject = (proj) => {
    setEditingProject(proj);
    setProjectForm({
      ...proj,
      image: proj.image || '',
      tools: Array.isArray(proj.tools) ? proj.tools.join(', ') : proj.tools
    });
    setCmsMenu('projects');
  };

  const handleImageFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setProjectForm(prev => ({ ...prev, image: reader.result }));
      showToast("Gambar preview berhasil dimuat!");
    };
    reader.readAsDataURL(file);
  };

  const handleDeleteProject = (id) => {
    setProjects(prev => prev.filter(p => p.id !== id));
    showToast("Karya dihapus dari daftar.", "info");
  };

  const handleSaveBlog = async (e) => {
    e.preventDefault();
    if (!blogForm.title.trim()) return;

    const slug = blogForm.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    let generatedTranslations = editingBlog?.translations || {};

    if (autoTranslateEnabled) {
      setIsTranslating(true);
      showToast("Menerjemahkan artikel blog otomatis ke Inggris, Jepang & Arab...", "info");
      generatedTranslations = await autoTranslateFields({
        title: blogForm.title,
        excerpt: blogForm.excerpt,
        content: blogForm.content
      });
      setIsTranslating(false);
    }

    if (editingBlog) {
      setBlogs(prev => prev.map(b => b.id === editingBlog.id ? {
        ...b, ...blogForm, slug, translations: generatedTranslations
      } : b));
      showToast("Artikel blog & terjemahan multi-bahasa berhasil diperbarui!");
    } else {
      const newBlog = {
        ...blogForm,
        id: `blog-${Date.now()}`,
        slug,
        translations: generatedTranslations
      };
      setBlogs(prev => [newBlog, ...prev]);
      showToast("Artikel blog diterbitkan & otomatis diterjemahkan ke berbagai bahasa!");
    }

    setEditingBlog(null);
    setBlogForm({
      title: '', category: 'Brand Strategy', date: new Date().toISOString().slice(0, 10),
      readTime: '5 Menit', status: 'Completed', excerpt: '', content: ''
    });
  };

  const handleDeleteBlog = (id) => {
    setBlogs(prev => prev.filter(b => b.id !== id));
    showToast("Artikel blog dihapus.", "info");
  };

  // Experience CRUD Handlers (With Auto-Translation)
  const handleSaveExperience = async (e) => {
    e.preventDefault();
    if (!expForm.role.trim() || !expForm.company.trim()) return;

    let generatedTranslations = editingExp?.translations || {};
    if (autoTranslateEnabled) {
      setIsTranslating(true);
      generatedTranslations = await autoTranslateFields({
        role: expForm.role,
        type: expForm.type,
        description: expForm.description
      });
      setIsTranslating(false);
    }

    if (editingExp) {
      setExperience(prev => prev.map(item => item.id === editingExp.id ? {
        ...item, ...expForm, translations: generatedTranslations
      } : item));
      showToast("Data pengalaman & terjemahan diperbarui!");
    } else {
      const newExp = {
        ...expForm,
        id: `exp-${Date.now()}`,
        translations: generatedTranslations
      };
      setExperience(prev => [newExp, ...prev]);
      showToast("Pengalaman baru ditambahkan & diterjemahkan!");
    }

    setEditingExp(null);
    setExpForm({
      role: '',
      company: '',
      type: 'Penuh Waktu',
      period: '2026',
      description: ''
    });
  };

  const handleEditExperience = (exp) => {
    setEditingExp(exp);
    setExpForm({
      role: exp.role,
      company: exp.company,
      type: exp.type || 'Penuh Waktu',
      period: exp.period,
      description: exp.description || ''
    });
  };

  const handleDeleteExperience = (id) => {
    setExperience(prev => prev.filter(item => item.id !== id));
    if (editingExp?.id === id) {
      setEditingExp(null);
      setExpForm({ role: '', company: '', type: 'Penuh Waktu', period: '2026', description: '' });
    }
    showToast("Riwayat pengalaman dihapus.", "info");
  };

  const handleMoveExperience = (index, direction) => {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= experience.length) return;
    const updated = [...experience];
    const temp = updated[index];
    updated[index] = updated[newIndex];
    updated[newIndex] = temp;
    setExperience(updated);
  };

  // Education CRUD Handlers
  const handleSaveEducation = (e) => {
    e.preventDefault();
    if (!eduForm.institution.trim() || !eduForm.major.trim()) return;

    if (editingEdu) {
      setEducation(prev => prev.map(item => item.id === editingEdu.id ? { ...item, ...eduForm } : item));
      showToast("Data pendidikan berhasil diperbarui!");
    } else {
      const newEdu = {
        ...eduForm,
        id: `edu-${Date.now()}`
      };
      setEducation(prev => [newEdu, ...prev]);
      showToast("Riwayat pendidikan baru berhasil ditambahkan!");
    }

    setEditingEdu(null);
    setEduForm({
      type: 'Formal',
      institution: '',
      major: '',
      period: '2026',
      description: ''
    });
  };

  const handleEditEducation = (edu) => {
    setEditingEdu(edu);
    setEduForm({
      type: edu.type || 'Formal',
      institution: edu.institution,
      major: edu.major,
      period: edu.period,
      description: edu.description || ''
    });
  };

  const handleDeleteEducation = (id) => {
    setEducation(prev => prev.filter(item => item.id !== id));
    if (editingEdu?.id === id) {
      setEditingEdu(null);
      setEduForm({ type: 'Formal', institution: '', major: '', period: '2026', description: '' });
    }
    showToast("Riwayat pendidikan dihapus.", "info");
  };

  const copySqlToClipboard = () => {
    const textArea = document.createElement("textarea");
    textArea.value = SUPABASE_SQL_SCHEMA;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    setCopiedSql(true);
    showToast("Script SQL berhasil disalin!");
    setTimeout(() => setCopiedSql(false), 3000);
  };

  const copySnippet = (key, content, label) => {
    const textArea = document.createElement("textarea");
    textArea.value = content;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    setCopiedFileKey(key);
    showToast(`${label} berhasil disalin!`);
    setTimeout(() => setCopiedFileKey(''), 3000);
  };

  const downloadJsonBackup = () => {
    const payload = {
      exportedAt: new Date().toISOString(),
      profile,
      projects,
      blogs,
      education,
      experience
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'akhmad-aldi-portfolio-data.json';
    a.click();
    URL.revokeObjectURL(url);
    showToast("File JSON Backup berhasil diunduh!");
  };

  // Auto-fetch from Supabase on initial load if Environment Variables are configured
  useEffect(() => {
    if (supabaseUrl && supabaseKey) {
      fetchFromSupabase(supabaseUrl, supabaseKey);
    }
  }, []);

  const getCategoryIcon = (cat) => {
    switch (cat) {
      case 'Brand Strategy': return <Sparkles className="w-4 h-4" />;
      case 'Logo Design & Identity': return <PenTool className="w-4 h-4" />;
      case 'Social Media Management': return <MessageSquare className="w-4 h-4" />;
      case 'UI/UX Design': return <Layers className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl border backdrop-blur-md transition-all duration-300 bg-slate-900/95 border-slate-700 text-white">
          {toast.type === 'error' ? (
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-[#D4F34A] shrink-0" />
          )}
          <span className="text-sm font-medium">{toast.message}</span>
        </div>
      )}

      {/* SIMULATED BROWSER URL BAR (Otomatis tersembunyi saat sudah di-deploy ke domain asli/Vercel) */}
      {(typeof window === 'undefined' || !window.location.hostname.includes('vercel.app')) && (
        <div className="bg-[#111118] text-slate-300 border-b border-slate-800 px-3 sm:px-6 py-2 text-xs flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </div>
            <span className="text-slate-500 hidden sm:inline">Simulasi File Vercel:</span>
            <div className="inline-flex rounded-lg bg-slate-900 p-0.5 border border-slate-800">
              <button
                onClick={() => setCurrentRoute('landingpage.html')}
                className={`px-3 py-1 rounded-md font-mono text-[11px] transition-all flex items-center gap-1.5 ${
                  currentRoute === 'landingpage.html'
                    ? 'bg-orange-500 text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Globe className="w-3 h-3" />
                /landingpage.html
              </button>
              <button
                onClick={() => setCurrentRoute('dashboard.html')}
                className={`px-3 py-1 rounded-md font-mono text-[11px] transition-all flex items-center gap-1.5 ${
                  currentRoute === 'dashboard.html'
                    ? 'bg-[#D4F34A] text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Lock className="w-3 h-3" />
                /dashboard.html
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-slate-400">
            <span className="hidden md:inline">
              Akses rahasia di halaman publik: klik ikon gembok di footer atau tekan <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-200">Alt + L</kbd>
            </span>
          </div>
        </div>
      )}

      {/* =====================================================================
          FILE 1: LANDINGPAGE.HTML (PUBLIC PORTFOLIO - NO CMS BUTTON IN NAVBAR)
         ===================================================================== */}
      {currentRoute === 'landingpage.html' && (
        <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className={isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}>
          {/* TOP NAVBAR (Clean Navigation + Language Switcher + Day/Night Mode) */}
          <header className={`sticky top-0 z-40 backdrop-blur-xl border-b transition-colors ${
            isDark ? 'bg-slate-950/85 border-slate-800/80' : 'bg-white/85 border-slate-200'
          }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2">
              {/* Brand Logo */}
              <a href="#" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 flex items-center justify-center text-slate-950 font-black text-lg sm:text-xl shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform shrink-0">
                  AA
                </div>
                <div className="min-w-0">
                  <div className={`font-bold text-base sm:text-lg tracking-tight flex items-center gap-2 whitespace-nowrap ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    <span className="truncate">{profile.name}</span>
                    {isSupabaseConnected && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Live
                      </span>
                    )}
                  </div>
                  <p className={`text-xs hidden sm:block truncate ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Brand Strategist • Identity & Social Media
                  </p>
                </div>
              </a>

              {/* Clean Navigation Links (Multi-language) */}
              <nav className={`hidden lg:flex items-center gap-8 text-sm font-semibold ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                <a href="#tentang" className="hover:text-orange-500 transition-colors">{t.navAbout}</a>
                <a href="#pengalaman" className="hover:text-orange-500 transition-colors">{t.navResume}</a>
                <a href="#karya" className="hover:text-orange-500 transition-colors">{t.navWorks}</a>
                <a href="#blog" className="hover:text-orange-500 transition-colors">{t.navBlog}</a>
                <a href="#kontak" className="hover:text-orange-500 transition-colors">{t.navContact}</a>
              </nav>

              {/* Right Actions: Compact Language Dropdown, Day/Night Mode Toggle & Contact CTA */}
              <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                {/* Multi-Language Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                    className={`px-3 py-2.5 rounded-xl border text-xs font-extrabold transition-all flex items-center gap-1.5 ${
                      isDark
                        ? 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800'
                        : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200'
                    }`}
                  >
                    <Languages className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                    <span>{activeLangObj.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {langDropdownOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setLangDropdownOpen(false)}
                      />
                      <div
                        className={`absolute right-0 mt-2 w-44 rounded-2xl border p-1.5 shadow-2xl z-50 backdrop-blur-xl ${
                          isDark
                            ? 'bg-slate-900/95 border-slate-800 text-slate-100'
                            : 'bg-white/95 border-slate-200 text-slate-800'
                        }`}
                      >
                        {SUPPORTED_LANGUAGES.map((l) => {
                          const isSelected = lang === l.code;
                          return (
                            <button
                              key={l.code}
                              type="button"
                              onClick={() => {
                                setLang(l.code);
                                setLangDropdownOpen(false);
                              }}
                              className={`w-full px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between transition-all ${
                                isSelected
                                  ? 'bg-orange-500 text-slate-950 shadow-sm'
                                  : isDark
                                    ? 'text-slate-300 hover:bg-slate-800 hover:text-white'
                                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                              }`}
                            >
                              <span className="flex items-center gap-2">
                                <span>{l.flag}</span>
                                <span>{l.name}</span>
                              </span>
                              <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded ${
                                isSelected ? 'bg-slate-950/20 text-slate-950' : 'text-slate-400'
                              }`}>
                                {l.label}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>

                <button
                  onClick={() => setTheme(isDark ? 'light' : 'dark')}
                  title={isDark ? t.dayMode : t.nightMode}
                  className={`p-2.5 rounded-xl border transition-all flex items-center gap-2 text-xs font-semibold ${
                    isDark 
                      ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800' 
                      : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {isDark ? (
                    <>
                      <Sun className="w-4 h-4" />
                      <span className="hidden xl:inline">{t.dayMode}</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4 text-indigo-600" />
                      <span className="hidden xl:inline">{t.nightMode}</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://wa.me/${profile.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 shadow-lg shadow-orange-500/20 transition-all"
                >
                  <span>{t.hireMe}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`lg:hidden p-2.5 rounded-xl border ${
                    isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Mobile & Tablet Navigation Drawer */}
            {mobileMenuOpen && (
              <div className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-2 shadow-xl ${
                isDark ? 'bg-slate-900/95 border-slate-800 text-slate-200' : 'bg-white/95 border-slate-200 text-slate-800'
              }`}>
                <a href="#tentang" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-xl font-semibold hover:bg-orange-500/10 hover:text-orange-500 transition-colors">{t.navAbout}</a>
                <a href="#pengalaman" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-xl font-semibold hover:bg-orange-500/10 hover:text-orange-500 transition-colors">{t.navResume}</a>
                <a href="#karya" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-xl font-semibold hover:bg-orange-500/10 hover:text-orange-500 transition-colors">{t.navWorks}</a>
                <a href="#blog" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-xl font-semibold hover:bg-orange-500/10 hover:text-orange-500 transition-colors">{t.navBlog}</a>
                <a href="#kontak" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-xl font-semibold hover:bg-orange-500/10 hover:text-orange-500 transition-colors">{t.navContact}</a>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${profile.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
                  >
                    <span>{t.contactWa}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}
          </header>

          {/* HERO SECTION */}
          <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-32">
            <div className="absolute top-10 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[11px] sm:text-xs font-semibold tracking-wide uppercase">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>{t.heroBadge}</span>
                  </div>

                  <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {t.heroGreeting} <br />
                    <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                      {profile.name}
                    </span>
                  </h1>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {profile.roles.map((role, idx) => (
                      <span 
                        key={idx}
                        className={`px-3 py-1.5 rounded-xl border text-xs sm:text-sm font-medium flex items-center gap-2 ${
                          isDark 
                            ? 'bg-slate-900/90 border-slate-800 text-slate-200' 
                            : 'bg-white border-slate-200 text-slate-700 shadow-sm'
                        }`}
                      >
                        <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                        {role}
                      </span>
                    ))}
                  </div>

                  <p className={`text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {getLocalized(profile, 'bio')}
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                    <a
                      href="#karya"
                      className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-bold text-sm shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2 transition-all"
                    >
                      <span>{t.exploreWorks}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <a
                      href={`https://wa.me/${profile.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className={`px-6 py-3.5 rounded-xl border font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                        isDark 
                          ? 'bg-slate-900 hover:bg-slate-800 text-white border-slate-700' 
                          : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300 shadow-sm'
                      }`}
                    >
                      <Phone className="w-4 h-4 text-orange-500" />
                      <span>{t.contactWa}</span>
                    </a>
                  </div>
                </div>

                {/* Right Profile Card */}
                <div className="lg:col-span-5">
                  <div className="relative mx-auto max-w-lg lg:max-w-md">
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-amber-500 to-indigo-500 rounded-3xl blur-xl opacity-30" />
                    <div className={`relative rounded-3xl p-5 sm:p-8 shadow-2xl border space-y-5 sm:space-y-6 ${
                      isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                    }`}>
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-800 to-amber-700 p-1 shrink-0 shadow-lg">
                          <div className="w-full h-full rounded-xl bg-slate-950 flex items-center justify-center text-2xl font-black text-orange-400">
                            AA
                          </div>
                        </div>
                        <div>
                          <span className="px-2.5 py-0.5 text-[11px] font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full">
                            Universitas Yudharta Pasuruan
                          </span>
                          <h3 className={`text-xl font-bold mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{profile.name}</h3>
                          <p className={`text-xs flex items-center gap-1 mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                            <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                            Prigen, Pasuruan, Jawa Timur
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        {[
                          { badge: "Br", title: "Brand Strategy", sub: "Positioning & Guideline", color: "text-orange-500 bg-orange-500/10 border-orange-500/20" },
                          { badge: "Ai/Ps", title: "Logo & Identity", sub: "Illustrator & Photoshop", color: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
                          { badge: "Sm", title: "Social Media Mgmt", sub: "Content & Visual Kit", color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
                          { badge: "Fig", title: "Figma UI/UX", sub: "Visual & Prototyping", color: "text-purple-500 bg-purple-500/10 border-purple-500/20" }
                        ].map((tool, i) => (
                          <div key={i} className={`p-3 rounded-2xl border flex items-center gap-3 ${
                            isDark ? 'bg-slate-950/80 border-slate-800/80' : 'bg-slate-50 border-slate-200/80'
                          }`}>
                            <div className={`w-9 h-9 rounded-xl border flex items-center justify-center font-bold text-xs ${tool.color}`}>
                              {tool.badge}
                            </div>
                            <div className="min-w-0">
                              <div className={`text-xs font-bold truncate ${isDark ? 'text-white' : 'text-slate-900'}`}>{tool.title}</div>
                              <div className="text-[10px] text-slate-400 truncate">{tool.sub}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className={`pt-4 border-t grid grid-cols-3 gap-2 text-center ${
                        isDark ? 'border-slate-800' : 'border-slate-200'
                      }`}>
                        <div className={`p-2.5 rounded-xl ${isDark ? 'bg-slate-950/60' : 'bg-slate-50'}`}>
                          <div className="text-xl font-black text-orange-500">{projects.length}+</div>
                          <div className="text-[11px] text-slate-400">{t.navWorks}</div>
                        </div>
                        <div className={`p-2.5 rounded-xl ${isDark ? 'bg-slate-950/60' : 'bg-slate-50'}`}>
                          <div className="text-xl font-black text-amber-500">{experience.length}</div>
                          <div className="text-[11px] text-slate-400">{t.navResume}</div>
                        </div>
                        <div className={`p-2.5 rounded-xl ${isDark ? 'bg-slate-950/60' : 'bg-slate-50'}`}>
                          <div className="text-xl font-black text-emerald-500">4</div>
                          <div className="text-[11px] text-slate-400">Languages</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* TENTANG & EMPAT PILAR KEAHLIAN */}
          <section id="tentang" className={`py-16 border-y ${
            isDark ? 'border-slate-800/80 bg-slate-900/30' : 'border-slate-200 bg-white'
          }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="grid md:grid-cols-3 gap-6">
                <div className={`p-6 rounded-2xl border flex items-start gap-4 ${
                  isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500 border border-orange-500/20">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">{t.officialEmail}</div>
                    <a href={`mailto:${profile.email}`} className="text-sm font-bold hover:text-orange-500 break-all mt-1 block">
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className={`p-6 rounded-2xl border flex items-start gap-4 ${
                  isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">{t.phoneWa}</div>
                    <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer" className="text-sm font-bold hover:text-emerald-500 mt-1 block">
                      {profile.phone}
                    </a>
                  </div>
                </div>

                <div className={`p-6 rounded-2xl border flex items-start gap-4 ${
                  isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">{t.addressTitle}</div>
                    <p className="text-xs leading-relaxed mt-1 opacity-85">{profile.address}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="text-center max-w-2xl mx-auto">
                  <h2 className="text-2xl sm:text-3xl font-black">{t.pillarsTitle}</h2>
                  <p className="text-slate-400 text-sm mt-2">{t.pillarsDesc}</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {t.pillars.map((pillar, idx) => (
                    <div key={idx} className={`p-6 rounded-2xl border hover:border-orange-500/50 transition-all group ${
                      isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}>
                      <div className="text-3xl font-black text-slate-500/30 group-hover:text-orange-500/60 transition-colors">
                        {pillar.num}
                      </div>
                      <h3 className="text-lg font-bold mt-2">{pillar.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed mt-2">{pillar.desc}</p>
                      <div className={`mt-4 pt-3 border-t text-[11px] font-semibold text-orange-500 ${
                        isDark ? 'border-slate-800' : 'border-slate-200'
                      }`}>
                        {pillar.tools}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* KARYA / PORTOFOLIO SECTION */}
          <section id="karya" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2">
                  {t.selectedPortfolio}
                </div>
                <h2 className="text-3xl sm:text-4xl font-black">{t.worksTitle}</h2>
              </div>

              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-orange-500 ${
                    isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
                  }`}
                />
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {categories.map((cat) => {
                const active = selectedCategory === cat;
                const displayCat = cat === 'Semua' ? t.allCategory : cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                      active
                        ? 'bg-orange-500 text-slate-950 shadow-lg shadow-orange-500/25'
                        : isDark
                          ? 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                          : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                    }`}
                  >
                    <span>{displayCat}</span>
                  </button>
                );
              })}
            </div>

            {/* Project Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  className={`group rounded-3xl border overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-lg ${
                    isDark
                      ? 'bg-slate-900/90 border-slate-800/90 hover:border-orange-500/50'
                      : 'bg-white border-slate-200 hover:border-orange-500/50'
                  }`}
                >
                  <div>
                    <div
                      onClick={() => setActiveProjectModal(proj)}
                      className={`h-48 sm:h-52 bg-gradient-to-br ${proj.accentColor} p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden cursor-pointer`}
                    >
                      {proj.image && (
                        <img
                          src={proj.image}
                          alt={getLocalized(proj, 'title')}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover object-center opacity-55 group-hover:scale-110 group-hover:opacity-75 transition-all duration-700"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-slate-950/20" />

                      <div className="relative z-10 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/75 backdrop-blur-md text-white text-xs font-semibold border border-white/15 shadow">
                          {getCategoryIcon(proj.category)}
                          <span>{proj.category}</span>
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-950/60 backdrop-blur-md text-white text-[11px] font-bold border border-white/15">
                          {proj.year}
                        </span>
                      </div>

                      <div className="relative z-10">
                        <h3 className="text-xl font-black text-white leading-tight drop-shadow-md group-hover:translate-x-1 transition-transform">
                          {getLocalized(proj, 'title')}
                        </h3>
                        <p className="text-xs text-white/90 line-clamp-1 mt-1 font-medium drop-shadow">
                          {getLocalized(proj, 'subtitle')}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <p className={`text-xs leading-relaxed line-clamp-3 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        {getLocalized(proj, 'description')}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {proj.tools.map((tool, i) => (
                          <span
                            key={i}
                            className={`px-2.5 py-1 rounded-lg border text-[11px] font-medium ${
                              isDark ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                            }`}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={`px-6 py-4 border-t flex items-center justify-between ${
                    isDark ? 'border-slate-800/80 bg-slate-950/40' : 'border-slate-100 bg-slate-50/70'
                  }`}>
                    <button
                      onClick={() => setActiveProjectModal(proj)}
                      className="text-xs font-semibold hover:text-orange-500 transition-colors flex items-center gap-1"
                    >
                      <span>{t.projectDetail}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-500 hover:text-orange-400"
                      >
                        <span>{t.visitLink}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* RESUME: PENDIDIKAN & PENGALAMAN */}
          <section id="pengalaman" className={`py-20 border-y ${
            isDark ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white border-slate-200'
          }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="text-center max-w-2xl mx-auto">
                <div className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2">
                  {t.resumeBadge}
                </div>
                <h2 className="text-3xl sm:text-4xl font-black">{t.resumeTitle}</h2>
              </div>

              <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-500 border border-orange-500/20">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold">{t.expTitle}</h3>
                  </div>

                  <div className="space-y-4 relative before:absolute before:top-3 before:bottom-3 before:left-4 before:w-0.5 before:bg-slate-700/40">
                    {experience.map((exp) => (
                      <div key={exp.id} className="relative pl-10">
                        <div className="w-3.5 h-3.5 rounded-full bg-orange-500 border-4 border-slate-950 absolute left-[9px] top-5" />
                        <div className={`p-5 rounded-2xl border transition-all ${
                          isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
                        }`}>
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="text-xs font-bold text-orange-500">{exp.period}</span>
                            <span className={`px-2.5 py-0.5 rounded-full border text-[11px] ${
                              isDark ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-600'
                            }`}>
                              {getLocalized(exp, 'type')}
                            </span>
                          </div>
                          <h4 className="text-base font-bold mt-1">{getLocalized(exp, 'role')}</h4>
                          <div className="text-xs font-semibold text-slate-400 mt-0.5">{exp.company}</div>
                          <p className="text-xs text-slate-400 mt-2 leading-relaxed">{getLocalized(exp, 'description')}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold">{t.eduTitle}</h3>
                  </div>

                  <div className="space-y-4">
                    {education.map((edu) => (
                      <div key={edu.id} className={`p-5 rounded-2xl border ${
                        isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
                      }`}>
                        <div className="flex items-center justify-between">
                          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                            edu.type === 'Formal'
                              ? 'bg-indigo-500/10 text-indigo-500 border border-indigo-500/20'
                              : 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                          }`}>
                            {t.eduPrefix} {edu.type}
                          </span>
                          <span className="text-xs font-semibold text-slate-400">{edu.period}</span>
                        </div>
                        <h4 className="text-base font-bold mt-2">{edu.institution}</h4>
                        <div className="text-xs font-semibold text-orange-500 mt-0.5">{getLocalized(edu, 'major')}</div>
                        <p className="text-xs text-slate-400 mt-2 leading-relaxed">{getLocalized(edu, 'description')}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BLOG SECTION */}
          <section id="blog" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2">
                {t.blogBadge}
              </div>
              <h2 className="text-3xl sm:text-4xl font-black">{t.blogTitle}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <article
                  key={blog.id}
                  className={`rounded-3xl border p-6 flex flex-col justify-between transition-all ${
                    isDark ? 'bg-slate-900 border-slate-800 hover:border-orange-500/40' : 'bg-white border-slate-200 hover:border-orange-500/40 shadow-sm'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 font-semibold border border-orange-500/20">
                        {blog.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {blog.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold leading-snug">{getLocalized(blog, 'title')}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{getLocalized(blog, 'excerpt')}</p>
                  </div>

                  <div className={`pt-6 mt-6 border-t flex items-center justify-between ${
                    isDark ? 'border-slate-800' : 'border-slate-100'
                  }`}>
                    <span className="text-[11px] text-slate-400">{t.readTimeLabel} {blog.readTime}</span>
                    <button
                      onClick={() => setActiveBlogModal(blog)}
                      className="text-xs font-bold text-orange-500 hover:text-orange-400 flex items-center gap-1"
                    >
                      <span>{t.readMore}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* FOOTER */}
          <footer id="kontak" className={`border-t py-14 ${
            isDark ? 'border-slate-800 bg-slate-900/60' : 'border-slate-200 bg-slate-100'
          }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
              <div className="rounded-3xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 p-6 sm:p-12 text-slate-950 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-2xl">
                <div className="space-y-2 max-w-xl">
                  <span className="text-xs font-black uppercase tracking-widest bg-slate-950/10 px-3 py-1 rounded-full">
                    {t.collabBadge}
                  </span>
                  <h2 className="text-xl sm:text-3xl font-black leading-tight">{t.collabTitle}</h2>
                  <p className="text-xs sm:text-sm font-medium text-slate-900/80">{t.collabDesc}</p>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full lg:w-auto">
                  <a
                    href={`https://wa.me/${profile.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-slate-950 text-white font-bold text-sm hover:bg-slate-900 transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-orange-400" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="px-6 py-3.5 rounded-xl bg-white/90 text-slate-950 font-bold text-sm hover:bg-white transition-all flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
                <div>© {new Date().getFullYear()} {profile.name}. Deployed on Vercel + Supabase.</div>
                <div className="flex items-center gap-4">
                  <span>@{profile.socials.instagram}</span>
                  {/* Tombol Rahasia Admin menuju dashboard.html */}
                  <button
                    onClick={() => setCurrentRoute('dashboard.html')}
                    title="Admin Access (dashboard.html)"
                    className="opacity-30 hover:opacity-100 transition-opacity p-1.5 rounded-lg hover:bg-slate-800/30"
                  >
                    <Lock className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}

      {/* =====================================================================
          FILE 2: DASHBOARD.HTML (AUTHENTICATED EDUPLEX CMS PAGE)
         ===================================================================== */}
      {currentRoute === 'dashboard.html' && (
        <>
          {!isAuthenticated ? (
            /* LOGIN SCREEN FOR DASHBOARD.HTML */
            <div className={`min-h-[calc(100vh-42px)] flex items-center justify-center p-4 ${
              isDark ? 'bg-[#12121A]' : 'bg-[#ECE9FE]'
            }`}>
              <div className={`w-full max-w-md rounded-3xl p-8 shadow-2xl border space-y-6 ${
                isDark ? 'bg-[#181824] border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-[#D4F34A] text-slate-950 flex items-center justify-center font-black text-lg shadow">
                      AA
                    </div>
                    <div>
                      <h2 className="text-lg font-black">CMS Login Portal</h2>
                      <p className="text-xs text-slate-400 font-mono">dashboard.html</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setCurrentRoute('landingpage.html')}
                    className="text-xs text-slate-400 hover:text-orange-500 flex items-center gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Kembali</span>
                  </button>
                </div>

                {loginError && (
                  <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{loginError}</span>
                  </div>
                )}

                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1.5">Username</label>
                    <input
                      type="text"
                      required
                      value={loginInput.username}
                      onChange={(e) => setLoginInput({ ...loginInput, username: e.target.value })}
                      placeholder="aldi"
                      className={`w-full px-4 py-3 rounded-2xl border text-sm focus:outline-none ${
                        isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1.5">Password</label>
                    <input
                      type="password"
                      required
                      value={loginInput.password}
                      onChange={(e) => setLoginInput({ ...loginInput, password: e.target.value })}
                      placeholder="••••••••"
                      className={`w-full px-4 py-3 rounded-2xl border text-sm focus:outline-none ${
                        isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                      }`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl bg-[#D4F34A] hover:bg-[#c6e63b] text-slate-950 font-black text-sm shadow-lg transition-all"
                  >
                    Masuk ke Dashboard CMS
                  </button>
                </form>

                <div className="p-3.5 rounded-2xl bg-slate-500/10 text-xs text-slate-400 flex items-center justify-between">
                  <span>Default Login Demo:</span>
                  <code className="font-mono font-bold text-[#D4F34A] bg-slate-900 px-2.5 py-1 rounded-lg">
                    aldi / password123
                  </code>
                </div>
              </div>
            </div>
          ) : (
            /* AUTHENTICATED EDUPLEX CMS LAYOUT */
            <div className={`min-h-[calc(100vh-42px)] p-2 sm:p-4 lg:p-6 transition-colors ${
              isDark ? 'bg-[#0F0F17]' : 'bg-[#DFD7F9]'
            }`}>
              <div className={`max-w-[1440px] mx-auto rounded-[24px] sm:rounded-[34px] shadow-2xl border overflow-hidden flex flex-col lg:flex-row min-h-[860px] relative ${
                isDark ? 'bg-[#171723] border-slate-800/80 text-slate-100' : 'bg-[#F8F9FB] border-white text-slate-900'
              }`}>
                {/* SIDEBAR */}
                <aside className="w-full lg:w-64 bg-[#181824] text-white p-5 flex flex-col justify-between shrink-0">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#181824] font-black text-base">
                          <Sparkles className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-extrabold text-lg tracking-tight">AldiCMS</span>
                          <span className="block text-[10px] text-slate-400 font-mono">dashboard.html</span>
                        </div>
                      </div>
                    </div>

                    <nav className="flex lg:flex-col gap-1.5 overflow-x-auto pb-2 lg:pb-0">
                      {[
                        { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
                        { id: 'projects', label: 'My Works', icon: FolderGit2, badge: projects.length },
                        { id: 'blogs', label: 'Blog Posts', icon: FileText, badge: blogs.length },
                        { id: 'resume', label: 'Resume CV', icon: Briefcase },
                        { id: 'profile', label: 'Profile Info', icon: User },
                        { id: 'supabase', label: 'Supabase DB', icon: Database },
                        { id: 'guide', label: 'Vercel Guide', icon: Terminal }
                      ].map((item) => {
                        const Icon = item.icon;
                        const active = cmsMenu === item.id;
                        return (
                          <button
                            key={item.id}
                            onClick={() => setCmsMenu(item.id)}
                            className={`px-4 py-3 rounded-2xl text-xs font-bold flex items-center justify-between transition-all whitespace-nowrap ${
                              active
                                ? 'bg-[#D4F34A] text-[#181824] shadow-lg'
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <Icon className="w-4 h-4 shrink-0" />
                              <span>{item.label}</span>
                            </div>
                            {item.badge !== undefined && (
                              <span className={`ml-2 px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                                active ? 'bg-[#181824] text-[#D4F34A]' : 'bg-orange-500/20 text-orange-400'
                              }`}>
                                {item.badge}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </nav>
                  </div>

                  <div className="pt-6 space-y-3 hidden lg:block">
                    <button
                      onClick={() => setCurrentRoute('landingpage.html')}
                      className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold text-slate-300 flex items-center justify-center gap-2"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Lihat Landing Page</span>
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full py-2.5 px-4 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-xs font-bold flex items-center justify-center gap-2"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Keluar (Logout)</span>
                    </button>
                  </div>
                </aside>

                {/* MAIN CONTENT AREA */}
                <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto space-y-6">
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h1 className="text-xl sm:text-2xl font-black tracking-tight">
                        Welcome back {profile.name.split(' ')[1] || profile.name} 👋
                      </h1>
                      <p className="text-xs text-slate-400">
                        Kelola karya, artikel blog, resume, dan database Supabase secara real-time.
                      </p>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <button
                        onClick={() => setTheme(isDark ? 'light' : 'dark')}
                        className={`p-2.5 rounded-2xl border ${
                          isDark ? 'bg-[#1F1F2E] border-slate-800 text-amber-400' : 'bg-white border-slate-200 text-slate-700'
                        }`}
                      >
                        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={pushAllToSupabase}
                        className="px-4 py-2.5 rounded-2xl bg-[#D4F34A] text-[#181824] font-extrabold text-xs flex items-center gap-2 shadow"
                      >
                        <UploadCloud className="w-4 h-4" />
                        <span>Sync ke Supabase</span>
                      </button>
                    </div>
                  </div>

                  {/* TAB 1: OVERVIEW */}
                  {cmsMenu === 'overview' && (
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div onClick={() => setCmsMenu('projects')} className={`p-5 rounded-3xl border cursor-pointer ${isDark ? 'bg-[#1F1F2E] border-slate-800' : 'bg-white border-slate-200'}`}>
                        <div className="text-xs text-slate-400 font-bold">Total Karya Portofolio</div>
                        <div className="text-3xl font-black mt-2 text-orange-500">{projects.length}</div>
                        <div className="text-[11px] text-slate-400 mt-1">Klik untuk kelola karya →</div>
                      </div>
                      <div onClick={() => setCmsMenu('blogs')} className={`p-5 rounded-3xl border cursor-pointer ${isDark ? 'bg-[#1F1F2E] border-slate-800' : 'bg-white border-slate-200'}`}>
                        <div className="text-xs text-slate-400 font-bold">Total Artikel Blog</div>
                        <div className="text-3xl font-black mt-2 text-emerald-500">{blogs.length}</div>
                        <div className="text-[11px] text-slate-400 mt-1">Klik untuk tulis artikel →</div>
                      </div>
                      <div onClick={() => setCmsMenu('supabase')} className={`p-5 rounded-3xl border cursor-pointer ${isDark ? 'bg-[#1F1F2E] border-slate-800' : 'bg-white border-slate-200'}`}>
                        <div className="text-xs text-slate-400 font-bold">Status Cloud Supabase</div>
                        <div className="text-lg font-black mt-2 text-[#D4F34A]">
                          {isSupabaseConnected ? 'Terhubung (Live)' : 'Siap Dihubungkan'}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-1">Klik untuk buka pengaturan DB →</div>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: PROJECTS CRUD */}
                  {cmsMenu === 'projects' && (
                    <div className="grid lg:grid-cols-12 gap-6">
                      <form onSubmit={handleSaveProject} className={`lg:col-span-5 p-6 rounded-3xl border space-y-4 ${isDark ? 'bg-[#1F1F2E] border-slate-800' : 'bg-white border-slate-200'}`}>
                        <h3 className="font-extrabold text-base">{editingProject ? 'Edit Karya' : 'Tambah Karya Baru'}</h3>
                        <input
                          type="text"
                          required
                          placeholder="Judul Karya"
                          value={projectForm.title}
                          onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'}`}
                        />
                        <select
                          value={projectForm.category}
                          onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'}`}
                        >
                          <option value="Brand Strategy">Brand Strategy</option>
                          <option value="Logo Design & Identity">Logo Design & Identity</option>
                          <option value="Social Media Management">Social Media Management</option>
                          <option value="UI/UX Design">UI/UX Design</option>
                        </select>
                        <input
                          type="text"
                          placeholder="Subjudul Singkat"
                          value={projectForm.subtitle}
                          onChange={(e) => setProjectForm({ ...projectForm, subtitle: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'}`}
                        />
                        <textarea
                          rows={3}
                          placeholder="Deskripsi Karya (Otomatis diterjemahkan ke EN, JA, AR)"
                          value={projectForm.description}
                          onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'}`}
                        />
                        <input
                          type="url"
                          placeholder="URL Gambar Preview (https://...)"
                          value={projectForm.image}
                          onChange={(e) => setProjectForm({ ...projectForm, image: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'}`}
                        />
                        <input
                          type="text"
                          placeholder="Tools (pisahkan koma: Adobe Illustrator, Figma)"
                          value={projectForm.tools}
                          onChange={(e) => setProjectForm({ ...projectForm, tools: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'}`}
                        />
                        <input
                          type="url"
                          placeholder="Link Proyek (https://s.id/...)"
                          value={projectForm.link}
                          onChange={(e) => setProjectForm({ ...projectForm, link: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'}`}
                        />
                        <button
                          type="submit"
                          disabled={isTranslating}
                          className="w-full py-3 rounded-xl bg-[#D4F34A] text-[#181824] font-extrabold text-xs"
                        >
                          {isTranslating ? 'Menerjemahkan...' : (editingProject ? 'Update Karya' : 'Simpan Karya & Auto-Translate')}
                        </button>
                      </form>

                      <div className="lg:col-span-7 space-y-3">
                        {projects.map((p) => (
                          <div key={p.id} className={`p-4 rounded-2xl border flex items-center justify-between gap-4 ${isDark ? 'bg-[#1F1F2E] border-slate-800' : 'bg-white border-slate-200'}`}>
                            <div>
                              <div className="text-xs font-bold text-orange-500">{p.category} • {p.year}</div>
                              <div className="font-bold text-sm">{p.title}</div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button onClick={() => handleEditProject(p)} className="p-2 rounded-lg bg-slate-800 text-slate-200"><Edit3 className="w-3.5 h-3.5" /></button>
                              <button onClick={() => handleDeleteProject(p.id)} className="p-2 rounded-lg bg-rose-500/10 text-rose-400"><Trash2 className="w-3.5 h-3.5" /></button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 3: BLOGS CRUD */}
                  {cmsMenu === 'blogs' && (
                    <div className="grid lg:grid-cols-12 gap-6">
                      <form onSubmit={handleSaveBlog} className={`lg:col-span-5 p-6 rounded-3xl border space-y-4 ${isDark ? 'bg-[#1F1F2E] border-slate-800' : 'bg-white border-slate-200'}`}>
                        <h3 className="font-extrabold text-base">{editingBlog ? 'Edit Artikel Blog' : 'Tulis Artikel Blog'}</h3>
                        <input
                          type="text"
                          required
                          placeholder="Judul Artikel"
                          value={blogForm.title}
                          onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'}`}
                        />
                        <textarea
                          rows={2}
                          placeholder="Ringkasan (Excerpt)"
                          value={blogForm.excerpt}
                          onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'}`}
                        />
                        <textarea
                          rows={5}
                          placeholder="Isi Lengkap Artikel"
                          value={blogForm.content}
                          onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'}`}
                        />
                        <button type="submit" disabled={isTranslating} className="w-full py-3 rounded-xl bg-[#D4F34A] text-[#181824] font-extrabold text-xs">
                          {isTranslating ? 'Menerjemahkan...' : 'Terbitkan & Auto-Translate'}
                        </button>
                      </form>
                      <div className="lg:col-span-7 space-y-3">
                        {blogs.map((b) => (
                          <div key={b.id} className={`p-4 rounded-2xl border flex items-center justify-between gap-4 ${isDark ? 'bg-[#1F1F2E] border-slate-800' : 'bg-white border-slate-200'}`}>
                            <div>
                              <div className="text-xs text-emerald-500 font-bold">{b.category} • {b.date}</div>
                              <div className="font-bold text-sm">{b.title}</div>
                            </div>
                            <button onClick={() => handleDeleteBlog(b.id)} className="p-2 rounded-lg bg-rose-500/10 text-rose-400"><Trash2 className="w-3.5 h-3.5" /></button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 4: RESUME CV CRUD */}
                  {cmsMenu === 'resume' && (
                    <div className="grid lg:grid-cols-12 gap-6">
                      <form onSubmit={handleSaveExperience} className={`lg:col-span-5 p-6 rounded-3xl border space-y-4 ${isDark ? 'bg-[#1F1F2E] border-slate-800' : 'bg-white border-slate-200'}`}>
                        <h3 className="font-extrabold text-base">{editingExp ? 'Edit Pengalaman' : 'Tambah Pengalaman'}</h3>
                        <input
                          type="text"
                          required
                          placeholder="Posisi / Jabatan"
                          value={expForm.role}
                          onChange={(e) => setExpForm({ ...expForm, role: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'}`}
                        />
                        <input
                          type="text"
                          required
                          placeholder="Nama Instansi / Perusahaan"
                          value={expForm.company}
                          onChange={(e) => setExpForm({ ...expForm, company: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'}`}
                        />
                        <input
                          type="text"
                          placeholder="Periode (contoh: 2022 - 2023)"
                          value={expForm.period}
                          onChange={(e) => setExpForm({ ...expForm, period: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'}`}
                        />
                        <textarea
                          rows={3}
                          placeholder="Deskripsi Tugas"
                          value={expForm.description}
                          onChange={(e) => setExpForm({ ...expForm, description: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'}`}
                        />
                        <button type="submit" className="w-full py-3 rounded-xl bg-[#D4F34A] text-[#181824] font-extrabold text-xs">
                          Simpan Pengalaman
                        </button>
                      </form>
                      <div className="lg:col-span-7 space-y-3">
                        {experience.map((exp) => (
                          <div key={exp.id} className={`p-4 rounded-2xl border flex items-center justify-between gap-4 ${isDark ? 'bg-[#1F1F2E] border-slate-800' : 'bg-white border-slate-200'}`}>
                            <div>
                              <div className="text-xs text-orange-500 font-bold">{exp.period} • {exp.company}</div>
                              <div className="font-bold text-sm">{exp.role}</div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button onClick={() => handleEditExperience(exp)} className="p-2 rounded-lg bg-slate-800 text-slate-200"><Edit3 className="w-3.5 h-3.5" /></button>
                              <button onClick={() => handleDeleteExperience(exp.id)} className="p-2 rounded-lg bg-rose-500/10 text-rose-400"><Trash2 className="w-3.5 h-3.5" /></button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 5: PROFILE INFO */}
                  {cmsMenu === 'profile' && (
                    <div className={`p-6 rounded-3xl border space-y-4 ${isDark ? 'bg-[#1F1F2E] border-slate-800' : 'bg-white border-slate-200'}`}>
                      <h3 className="font-extrabold text-base">Profil & Kontak Utama</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <input
                          type="text"
                          value={profile.name}
                          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'}`}
                        />
                        <input
                          type="email"
                          value={profile.email}
                          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'}`}
                        />
                      </div>
                      <textarea
                        rows={4}
                        value={profile.bio}
                        onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'}`}
                      />
                    </div>
                  )}

                  {/* TAB 6: SUPABASE DB */}
                  {cmsMenu === 'supabase' && (
                    <div className="space-y-6">
                      <div className={`p-6 rounded-[28px] border space-y-5 ${
                        isDark ? 'bg-[#1F1F2E] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                      }`}>
                        <h3 className="font-extrabold text-base flex items-center gap-2">
                          <Database className="w-5 h-5 text-emerald-500" />
                          <span>Konfigurasi Koneksi Supabase</span>
                        </h3>

                        {syncStatus && (
                          <div className={`p-3.5 rounded-2xl text-xs font-bold flex items-center gap-2 ${
                            syncStatus.type === 'error'
                              ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                              : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          }`}>
                            <CheckCircle2 className="w-4 h-4 shrink-0" />
                            <span>{syncStatus.message}</span>
                          </div>
                        )}

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-400 mb-1">Supabase Project / API URL</label>
                            <input
                              type="url"
                              value={supabaseUrl}
                              onChange={(e) => setSupabaseUrl(e.target.value)}
                              placeholder="https://juxhrebslwfcsidfppaa.supabase.co"
                              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-mono ${
                                isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                              }`}
                            />
                            <span className="text-[10px] text-emerald-500 mt-1 block">
                              ✓ URL Supabase Anda sudah terisi otomatis (akhiran /rest/v1/ otomatis dirapikan).
                            </span>
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-400 mb-1">Publishable Key / Anon Key</label>
                            <input
                              type="text"
                              value={supabaseKey}
                              onChange={(e) => setSupabaseKey(e.target.value)}
                              placeholder="sb_publishable_7xCDMG1gLSTcnZbX0q-rPg_..."
                              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-mono ${
                                isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                              }`}
                            />
                            <span className="text-[10px] text-slate-400 mt-1 block">
                              Tempelkan kode <code className="font-mono">sb_publishable_...</code> dari menu API Keys Supabase Anda.
                            </span>
                          </div>
                        </div>

                        {syncStatus && (
                          <div className={`p-3.5 rounded-2xl border text-xs font-bold flex items-center gap-2 ${
                            syncStatus.type === 'error'
                              ? 'bg-rose-500/10 border-rose-500/20 text-rose-400'
                              : syncStatus.type === 'success'
                                ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                                : 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
                          }`}>
                            {syncStatus.type === 'loading' ? (
                              <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                            ) : syncStatus.type === 'error' ? (
                              <AlertCircle className="w-4 h-4 shrink-0" />
                            ) : (
                              <CheckCircle2 className="w-4 h-4 shrink-0" />
                            )}
                            <span>{syncStatus.message}</span>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-3">
                          <button
                            onClick={() => fetchFromSupabase()}
                            className="px-4 py-2.5 rounded-xl bg-slate-800 text-white text-xs font-bold flex items-center gap-2"
                          >
                            <RefreshCw className="w-4 h-4" /> Pull dari Supabase
                          </button>
                          <button
                            onClick={pushAllToSupabase}
                            className="px-4 py-2.5 rounded-xl bg-[#D4F34A] text-[#181824] text-xs font-extrabold flex items-center gap-2 shadow-lg"
                          >
                            <UploadCloud className="w-4 h-4" /> Push / Seed Data PDF ke Supabase
                          </button>
                        </div>
                      </div>

                      <div className={`p-6 rounded-[28px] border space-y-3 ${
                        isDark ? 'bg-[#1F1F2E] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                      }`}>
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-sm">SQL Schema (Supabase SQL Editor)</span>
                          <button
                            onClick={copySqlToClipboard}
                            className="px-3 py-1.5 rounded-xl bg-[#181824] text-[#D4F34A] text-xs font-bold flex items-center gap-1.5"
                          >
                            {copiedSql ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                            <span>{copiedSql ? 'Tersalin!' : 'Salin SQL'}</span>
                          </button>
                        </div>
                        <pre className="p-4 rounded-2xl bg-[#12121A] text-emerald-400 text-[11px] font-mono overflow-x-auto max-h-60">
                          {SUPABASE_SQL_SCHEMA}
                        </pre>
                      </div>
                    </div>
                  )}

                  {/* =========================================================
                      CMS TAB 7: PANDUAN DEPLOY VERCEL & PRODUCTION KIT
                     ========================================================= */}
                  {cmsMenu === 'guide' && (
                    <div className="space-y-6">
                      {/* Header Banner */}
                      <div className="bg-[#181824] text-white p-6 rounded-[28px] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
                        <div>
                          <span className="px-2.5 py-1 rounded-full bg-[#D4F34A]/20 text-[#D4F34A] text-[10px] font-extrabold uppercase tracking-wider">
                            Production Ready • Vercel + Supabase
                          </span>
                          <h3 className="text-xl font-black mt-2">
                            Panduan Tahap Development & Deploy ke Vercel.app
                          </h3>
                          <p className="text-xs text-slate-400 mt-1">
                            Ikuti 4 langkah di bawah ini untuk mempublikasikan <code className="text-[#D4F34A]">landingpage.html</code> dan <code className="text-[#D4F34A]">dashboard.html</code> ke domain Vercel Anda.
                          </p>
                        </div>

                        <button
                          onClick={downloadJsonBackup}
                          className="px-4 py-3 rounded-2xl bg-[#D4F34A] text-[#181824] font-extrabold text-xs shrink-0 flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
                        >
                          <UploadCloud className="w-4 h-4" />
                          <span>Download Data JSON</span>
                        </button>
                      </div>

                      {/* 4 Steps Checklist Grid */}
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Step 1: Inisialisasi Project Vite React */}
                        <div className={`p-6 rounded-[28px] border space-y-3 ${
                          isDark ? 'bg-[#1F1F2E] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                        }`}>
                          <div className="flex items-center justify-between">
                            <span className="px-2.5 py-1 rounded-lg bg-orange-500/15 text-orange-500 text-xs font-extrabold">
                              LANGKAH 1 • TERMINAL LOKAL
                            </span>
                            <button
                              onClick={() => copySnippet(
                                'step1',
                                `npm create vite@latest aldi-portfolio -- --template react\ncd aldi-portfolio\nnpm install lucide-react\nnpm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p`,
                                'Perintah Terminal'
                              )}
                              className="text-xs font-bold text-indigo-500 hover:underline flex items-center gap-1"
                            >
                              {copiedFileKey === 'step1' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                              <span>{copiedFileKey === 'step1' ? 'Tersalin' : 'Salin Command'}</span>
                            </button>
                          </div>
                          <h4 className="font-extrabold text-sm">1. Buat Project React + Tailwind di Komputer</h4>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            Jalankan perintah berikut di terminal VS Code Anda, lalu tempelkan seluruh kode <code className="font-mono">App.jsx</code> dari editor sebelah kanan ke dalam file <code className="font-mono">src/App.jsx</code>.
                          </p>
                          <pre className="p-3.5 rounded-2xl bg-[#12121A] text-[#D4F34A] text-[11px] font-mono overflow-x-auto">
{`npm create vite@latest aldi-portfolio -- --template react
cd aldi-portfolio
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer`}
                          </pre>
                        </div>

                        {/* Step 2: Konfigurasi vercel.json */}
                        <div className={`p-6 rounded-[28px] border space-y-3 ${
                          isDark ? 'bg-[#1F1F2E] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                        }`}>
                          <div className="flex items-center justify-between">
                            <span className="px-2.5 py-1 rounded-lg bg-indigo-500/15 text-indigo-500 text-xs font-extrabold">
                              LANGKAH 2 • VERCEL ROUTING
                            </span>
                            <button
                              onClick={() => copySnippet(
                                'verceljson',
                                `{\n  "rewrites": [\n    { "source": "/landingpage.html", "destination": "/index.html" },\n    { "source": "/dashboard.html", "destination": "/index.html" },\n    { "source": "/admin", "destination": "/index.html" },\n    { "source": "/(.*)", "destination": "/index.html" }\n  ]\n}`,
                                'Konfigurasi vercel.json'
                              )}
                              className="text-xs font-bold text-indigo-500 hover:underline flex items-center gap-1"
                            >
                              {copiedFileKey === 'verceljson' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                              <span>{copiedFileKey === 'verceljson' ? 'Tersalin' : 'Salin vercel.json'}</span>
                            </button>
                          </div>
                          <h4 className="font-extrabold text-sm">2. Buat File <code className="font-mono">vercel.json</code> di Root Folder</h4>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            Kode <code className="font-mono">App.jsx</code> ini sudah otomatis mendeteksi URL <code className="font-mono">/dashboard.html</code> dan <code className="font-mono">/landingpage.html</code>. Tambahkan file ini agar Vercel mengarahkan kedua rute tersebut dengan benar:
                          </p>
                          <pre className="p-3.5 rounded-2xl bg-[#12121A] text-emerald-400 text-[11px] font-mono overflow-x-auto">
{`{
  "rewrites": [
    { "source": "/landingpage.html", "destination": "/index.html" },
    { "source": "/dashboard.html", "destination": "/index.html" },
    { "source": "/admin", "destination": "/index.html" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}`}
                          </pre>
                        </div>

                        {/* Step 3: Environment Variables (.env) */}
                        <div className={`p-6 rounded-[28px] border space-y-3 ${
                          isDark ? 'bg-[#1F1F2E] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                        }`}>
                          <div className="flex items-center justify-between">
                            <span className="px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-500 text-xs font-extrabold">
                              LANGKAH 3 • SUPABASE & AI ENV
                            </span>
                            <button
                              onClick={() => copySnippet(
                                'envfile',
                                `VITE_SUPABASE_URL=${supabaseUrl || 'https://project-id-anda.supabase.co'}\nVITE_SUPABASE_ANON_KEY=${supabaseKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'}\nVITE_GEMINI_API_KEY=AIzaSy... (Opsional untuk Translator AI)`,
                                'Template .env'
                              )}
                              className="text-xs font-bold text-indigo-500 hover:underline flex items-center gap-1"
                            >
                              {copiedFileKey === 'envfile' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                              <span>{copiedFileKey === 'envfile' ? 'Tersalin' : 'Salin .env'}</span>
                            </button>
                          </div>
                          <h4 className="font-extrabold text-sm">3. Pasang Environment Variables di Vercel</h4>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            Saat mengimpor repositori GitHub Anda di <strong>Vercel Dashboard → Settings → Environment Variables</strong>, masukkan variabel berikut agar web otomatis membaca database Supabase dan mengaktifkan AI Translator (opsional):
                          </p>
                          <pre className="p-3.5 rounded-2xl bg-[#12121A] text-amber-300 text-[11px] font-mono overflow-x-auto whitespace-pre">
{`VITE_SUPABASE_URL=${supabaseUrl || 'https://xyzcompany.supabase.co'}
VITE_SUPABASE_ANON_KEY=${supabaseKey ? supabaseKey.slice(0, 24) + '...' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'}
VITE_GEMINI_API_KEY=AIzaSy... (Opsional/Opsional)`}
                          </pre>
                        </div>

                        {/* Step 4: Push ke GitHub & Deploy */}
                        <div className={`p-6 rounded-[28px] border space-y-3 ${
                          isDark ? 'bg-[#1F1F2E] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                        }`}>
                          <div className="flex items-center justify-between">
                            <span className="px-2.5 py-1 rounded-lg bg-purple-500/15 text-purple-500 text-xs font-extrabold">
                              LANGKAH 4 • DEPLOY VERCEL
                            </span>
                            <button
                              onClick={() => copySnippet(
                                'gitpush',
                                `git init\ngit add .\ngit commit -m "Initial commit portfolio Akhmad Aldi + Eduplex CMS"\ngit branch -M main\ngit remote add origin https://github.com/Akhmadaldi19/portfolio-cms.git\ngit push -u origin main`,
                                'Perintah Git Push'
                              )}
                              className="text-xs font-bold text-indigo-500 hover:underline flex items-center gap-1"
                            >
                              {copiedFileKey === 'gitpush' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                              <span>{copiedFileKey === 'gitpush' ? 'Tersalin' : 'Salin Git Push'}</span>
                            </button>
                          </div>
                          <h4 className="font-extrabold text-sm">4. Push ke GitHub & Hubungkan ke Vercel</h4>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            Unggah ke GitHub (<code className="font-mono">@Akhmadaldi19</code>), lalu buka <strong>vercel.com/new</strong>, pilih repo tersebut, dan klik <strong>Deploy</strong>.
                          </p>
                          <pre className="p-3.5 rounded-2xl bg-[#12121A] text-sky-400 text-[11px] font-mono overflow-x-auto">
{`git init && git add .
git commit -m "Deploy Portfolio Akhmad Aldi"
git push -u origin main`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* =====================================================================
          MODAL DETAIL PROYEK (UNTUK LANDINGPAGE.HTML)
         ===================================================================== */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
          <div className={`border rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl ${
            isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <div className={`h-48 sm:h-52 bg-gradient-to-br ${activeProjectModal.accentColor} p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden`}>
              {activeProjectModal.image && (
                <img
                  src={activeProjectModal.image}
                  alt={getLocalized(activeProjectModal, 'title')}
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-75"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />
              <button
                onClick={() => setActiveProjectModal(null)}
                className="relative z-10 self-end p-2 rounded-full bg-slate-950/60 text-white hover:bg-slate-950"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="relative z-10">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white/90 bg-slate-950/60 border border-white/15 px-2.5 py-1 rounded-full">
                  {activeProjectModal.category} • {activeProjectModal.year}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1.5 drop-shadow">
                  {getLocalized(activeProjectModal, 'title')}
                </h3>
              </div>
            </div>

            <div className="p-5 sm:p-6 space-y-4">
              <div className="text-xs font-semibold text-orange-500">
                {getLocalized(activeProjectModal, 'subtitle')}
              </div>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {getLocalized(activeProjectModal, 'description')}
              </p>

              <div>
                <div className="text-xs font-bold text-slate-400 mb-2">{t.toolsTech}</div>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.tools.map((tool, i) => (
                    <span key={i} className={`px-3 py-1 rounded-lg border text-xs ${
                      isDark ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-100 border-slate-200 text-slate-700'
                    }`}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`pt-4 border-t flex justify-end gap-3 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="px-4 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-xs font-semibold"
                >
                  {t.closeBtn}
                </button>
                {activeProjectModal.link && (
                  <a
                    href={activeProjectModal.link}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-orange-500 text-slate-950 text-xs font-bold flex items-center gap-1.5"
                  >
                    <span>{t.openProjectLink}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL BACA ARTIKEL BLOG
         ===================================================================== */}
      {activeBlogModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className={`border rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl max-h-[90vh] overflow-y-auto ${
            isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold">
                {activeBlogModal.category}
              </span>
              <button
                onClick={() => setActiveBlogModal(null)}
                className="p-2 rounded-full bg-slate-200 dark:bg-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <h2 className="text-2xl font-black leading-snug">{getLocalized(activeBlogModal, 'title')}</h2>
            <div className={`text-xs text-slate-400 flex items-center gap-4 border-b pb-4 ${
              isDark ? 'border-slate-800' : 'border-slate-200'
            }`}>
              <span>{t.byAuthor} {profile.name}</span>
              <span>•</span>
              <span>{activeBlogModal.date}</span>
              <span>•</span>
              <span>{activeBlogModal.readTime}</span>
            </div>

            <p className={`text-sm sm:text-base leading-relaxed whitespace-pre-line ${
              isDark ? 'text-slate-200' : 'text-slate-700'
            }`}>
              {getLocalized(activeBlogModal, 'content')}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}