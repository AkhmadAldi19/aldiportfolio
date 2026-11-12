import React, { useState, useEffect, useMemo } from 'react';
import { 
  Briefcase, GraduationCap, Layers, 
  PenTool, ExternalLink, Mail, Phone, MapPin, 
  Trash2, Edit3, Eye, Lock, 
  CheckCircle2, AlertCircle, User, 
  Search, ArrowUpRight, Sparkles,
  LayoutDashboard, LogOut, ChevronRight, ChevronLeft, Menu, X, Calendar,
  FolderGit2, FileText, RefreshCw, UploadCloud,
  Sun, Moon, MessageSquare, Languages, Loader2, ChevronDown, Image as ImageIcon,
  Plus, Play, Mouse
} from 'lucide-react';

// ============================================================================
// DEFAULT SUPABASE CREDENTIALS (DIRECT AUTO-CONNECT & AUTO-SEED)
// ============================================================================
const DEFAULT_SUPABASE_URL = 'https://juxhrebslwfcsidfppaa.supabase.co';
const DEFAULT_SUPABASE_KEY = 'sb_publishable_7xCDMG1gLSTcnZbX0q-rPg_S6Jw8qF0';

// ============================================================================
// BRAND COLOR TOKENS (LIGHT MODE PALETTE: #000000, #233D4D, #FE7F2D, #EAECF0)
// ============================================================================
const BRAND_LIGHT = {
  bg: '#EAECF0',
  surface: '#FFFFFF',
  textPrimary: '#000000',
  textSecondary: '#233D4D',
  accent: '#FE7F2D',
  accentHover: '#E86E20',
  border: '#D0D5DD',
  borderSubtle: '#E4E7EC'
};

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
    navAbout: "Keahlian",
    navResume: "Resume",
    navWorks: "Karya",
    navBlog: "Blog",
    navContact: "Kontak",
    dayMode: "Mode Siang",
    nightMode: "Mode Malam",
    hireMe: "Hire Me",
    heroGreeting: "Halo, Saya",
    exploreWorks: "Jelajahi Karya",
    contactWa: "Hubungi via WhatsApp",
    officialEmail: "Email Resmi",
    phoneWa: "WhatsApp / Telepon",
    addressTitle: "Alamat Domisili",
    pillarsTitle: "Fokus & Bidang Keahlian Utama",
    pillarsDesc: "Membangun karakter bisnis, UMKM, dan destinasi wisata melalui strategi brand yang kuat, identitas logo yang ikonik, serta manajemen visual media sosial.",
    selectedPortfolio: "PORTOFOLIO TERPILIH",
    worksTitle: "Portfolio",
    searchPlaceholder: "Cari karya atau tools...",
    allCategory: "Semua",
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
    navAbout: "Expertise",
    navResume: "Resume",
    navWorks: "Works",
    navBlog: "Blog",
    navContact: "Contact",
    dayMode: "Light Mode",
    nightMode: "Dark Mode",
    hireMe: "Hire Me",
    heroGreeting: "Hello, I am",
    exploreWorks: "Explore Works",
    contactWa: "Contact via WhatsApp",
    officialEmail: "Official Email",
    phoneWa: "WhatsApp / Phone",
    addressTitle: "Location Address",
    pillarsTitle: "Core Focus & Expertise",
    pillarsDesc: "Building strong character for businesses, SMEs, and tourism destinations through strategic branding, iconic logo identity, and visual social media management.",
    selectedPortfolio: "SELECTED PORTFOLIO",
    worksTitle: "Portfolio",
    searchPlaceholder: "Search works or tools...",
    allCategory: "All",
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
    navAbout: "専門スキル",
    navResume: "経歴",
    navWorks: "実績",
    navBlog: "ブログ",
    navContact: "連絡先",
    dayMode: "ライト",
    nightMode: "ダーク",
    hireMe: "依頼する",
    heroGreeting: "こんにちは、私は",
    exploreWorks: "作品を見る",
    contactWa: "WhatsAppで連絡",
    officialEmail: "公式メール",
    phoneWa: "WhatsApp / 電話",
    addressTitle: "所在地",
    pillarsTitle: "専門分野と主要スキル",
    pillarsDesc: "強力なブランド戦略、象徴的なロゴアイデンティティ、ソーシャルメディアの視覚的管理を通じて、企業や観光地のブランド価値を構築します。",
    selectedPortfolio: "厳選ポートフォリオ",
    worksTitle: "Portfolio",
    searchPlaceholder: "作品やツールを検索...",
    allCategory: "すべて",
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
    navAbout: "الخبرات",
    navResume: "السيرة الذاتية",
    navWorks: "أعمالي",
    navBlog: "المدونة",
    navContact: "تواصل معي",
    dayMode: "الوضع النهاري",
    nightMode: "الوضع الليلي",
    hireMe: "وظفني",
    heroGreeting: "مرحباً، أنا",
    exploreWorks: "استكشف أعمالي",
    contactWa: "تواصل عبر واتساب",
    officialEmail: "البريد الإلكتروني الرسمي",
    phoneWa: "واتساب / هاتف",
    addressTitle: "العنوان",
    pillarsTitle: "مجالات التخصص والخبرة الأساسية",
    pillarsDesc: "بناء هوية قوية للشركات والمشاريع والوجهات السياحية من خلال استراتيجية العلامة التجارية، تصميم الشعارات، وإدارة وسائل التواصل الاجتماعي.",
    selectedPortfolio: "أعمال مختارة",
    worksTitle: "Portfolio",
    searchPlaceholder: "ابحث في الأعمال أو الأدوات...",
    allCategory: "الكل",
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

// Automatic Multi-Language Translator (Gemini API with Public Google Translate fallback)
async function autoTranslateFields(fieldsObject) {
  let apiKey = "";
  try {
    apiKey = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GEMINI_API_KEY) || "";
  } catch (e) {}

  const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
  const prompt = `Translate the following Indonesian portfolio JSON fields into English (en), Japanese (ja), and Arabic (ar). Keep brand names, place names (like Wonosunyo, Wonokitri, Pasopati, Yudharta, Prigen, Prakarsa, Drakuy), and technical terms natural and professional. Return ONLY valid JSON with keys "en", "ja", and "ar" containing the exact same field keys as the input:\n${JSON.stringify(fieldsObject)}`;

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
    } catch (e) {}
  }

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

// Client-Side Image Compressor (Converts uploaded file to lightweight WebP Data URL)
function compressImageToDataUrl(file, maxWidth = 1000, quality = 0.8) {
  return new Promise((resolve, reject) => {
    if (!file) return reject(new Error("File tidak ditemukan"));
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        const compressed = canvas.toDataURL('image/webp', quality);
        resolve(compressed);
      };
      img.onerror = () => reject(new Error("Gagal memuat gambar"));
      img.src = event.target.result;
    };
    reader.onerror = () => reject(new Error("Gagal membaca file"));
    reader.readAsDataURL(file);
  });
}

// ============================================================================
// AUTOMATIC CHECKERBOARD / SOLID BACKGROUND REMOVER FOR CHARACTER AVATAR
// ============================================================================
function CleanCharacterAvatar({ src, alt, className }) {
  // Start with null while processing so no white-faced placeholder flashes during load
  const [cleanedSrc, setCleanedSrc] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!src) {
      setCleanedSrc(null);
      return;
    }

    let cancelled = false;
    setFailed(false);
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      try {
        const w = img.naturalWidth || img.width;
        const h = img.naturalHeight || img.height;
        if (!w || !h) {
          if (!cancelled) setCleanedSrc(src);
          return;
        }

        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);

        const imgData = ctx.getImageData(0, 0, w, h);
        const data = imgData.data;

        // Sample top-left corner color to also support solid-colored backgrounds (e.g., purple)
        const cornerR = data[0];
        const cornerG = data[1];
        const cornerB = data[2];
        const cornerA = data[3];

        const isCheckerOrBgPixel = (r, g, b, a) => {
          if (a < 20) return true;
          // 1. Neutral gray/white checkerboard background
          const maxC = Math.max(r, g, b);
          const minC = Math.min(r, g, b);
          const diff = maxC - minC;
          if (diff <= 16 && minC >= 145) return true;

          // 2. Solid uniform outer background matching top-left corner
          if (cornerA > 200) {
            const dist = Math.abs(r - cornerR) + Math.abs(g - cornerG) + Math.abs(b - cornerB);
            if (dist <= 45) return true;
          }
          return false;
        };

        const visited = new Uint8Array(w * h);
        const queue = new Int32Array(w * h);
        let head = 0;
        let tail = 0;

        const enqueue = (x, y) => {
          if (x < 0 || x >= w || y < 0 || y >= h) return;
          const idx = y * w + x;
          if (visited[idx]) return;
          const p = idx * 4;
          if (isCheckerOrBgPixel(data[p], data[p + 1], data[p + 2], data[p + 3])) {
            visited[idx] = 1;
            queue[tail++] = idx;
          }
        };

        for (let x = 0; x < w; x++) {
          enqueue(x, 0);
          enqueue(x, h - 1);
        }
        for (let y = 0; y < h; y++) {
          enqueue(0, y);
          enqueue(w - 1, y);
        }

        while (head < tail) {
          const idx = queue[head++];
          const p = idx * 4;
          data[p + 3] = 0;

          const x = idx % w;
          const y = (idx - x) / w;
          enqueue(x + 1, y);
          enqueue(x - 1, y);
          enqueue(x, y + 1);
          enqueue(x, y - 1);
        }

        ctx.putImageData(imgData, 0, 0);
        if (!cancelled) {
          setCleanedSrc(canvas.toDataURL('image/png'));
        }
      } catch (err) {
        if (!cancelled) setCleanedSrc(src);
      }
    };

    img.onerror = () => {
      if (!cancelled) {
        setFailed(true);
        setCleanedSrc(null);
      }
    };

    img.src = src;
    return () => { cancelled = true; };
  }, [src]);

  // Jangan tampilkan karakter cadangan lain saat gagal/kosong
  if (failed || !cleanedSrc) {
    return null;
  }

  return (
    <img
      src={cleanedSrc}
      alt={alt}
      className={`${className} transition-opacity duration-300 opacity-100`}
    />
  );
}

// ============================================================================
// INITIAL DATA
// ============================================================================
const DEFAULT_CATEGORIES = [
  'Brand Strategy',
  'Logo Design & Identity',
  'Social Media Management',
  'UI/UX Design'
];

const INITIAL_PROFILE = {
  name: "Akhmad Aldi",
  avatar: "/avatar.png",
  aboutCover: "/about-cover.png",
  roles: [
    "Brand Strategy",
    "Logo Design & Identity",
    "Social Media Management",
    "UI/UX Designer"
  ],
  bio: "Hai! Saya adalah desainer kreatif yang berfokus pada Brand Strategy, Logo Design & Identity, Social Media Management, serta UI/UX Design. Saya mulai mendalami desain grafis sejak bangku SMK (2016–2019), tersertifikasi di UPT BLK Pasuruan (2019), dan berpengalaman merancang sistem identitas visual (Brand Guideline) serta strategi konten media sosial untuk berbagai brand, UMKM, dan desa wisata.",
  translations: {
    en: {
      bio: "Hi! I am a creative designer focusing on Brand Strategy, Logo Design & Identity, Social Media Management, and UI/UX Design. I have extensive experience crafting visual identity systems (Brand Guidelines) and social media content strategies for brands, SMEs, and tourism villages."
    },
    ja: {
      bio: "こんにちは！ブランド戦略、ロゴデザイン＆アイデンティティ、SNS運用、UI/UXデザインを専門とするクリエイティブデザイナーです。多くの企業や観光村のブランドガイドラインやSNS戦略を手掛けています。"
    },
    ar: {
      bio: "مرحباً! أنا مصمم إبداعي متخصص في استراتيجية العلامة التجارية، تصميم الشعارات والهوية البصرية، إدارة وسائل التواصل الاجتماعي، وتصميم UI/UX."
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
        description: "Studied visual communication, brand identity system design, user experience research, and digital media management."
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
    subtitle: "Orientasi Mahasiswa Baru",
    description: "Project logo resmi untuk kegiatan Orientasi Mahasiswa Baru Pasopati 2023. Mengusung tema 'Agni Aksa Renjana' yang berarti 'Api Abadi yang Membara' dengan palet warna hangat dan tipografi modern.",
    translations: {
      en: {
        title: "Pasopati 2023 Official Logo",
        subtitle: "Student Orientation Project",
        description: "Official logo identity project for the New Student Orientation (Pasopati 2023). Carrying the theme 'Agni Aksa Renjana' meaning 'Eternal Blazing Flame' with warm geometric visuals."
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
        description: "Comprehensive brand strategy, logo design, and Brand Identity Guidelines to elevate Wonosunyo Tourism Village."
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
        description: "Brand positioning strategy and visual identity system for Edelweiss Wonokitri Tourism Village."
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
        description: "Visual identity and packaging design for Kampoeng Samiler using an iconic approach to boost local culinary appeal."
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
    description: "Perancangan logo resmi sekaligus pengelolaan template feed Instagram, story, dan publikasi dokumentasi kegiatan KKN Reguler 17.",
    translations: {
      en: {
        title: "KKN 17 Tapaan Identity & Instagram Feeds",
        subtitle: "Social Media Content Management & Visual Identity",
        description: "Official logo creation and cohesive Instagram grid templates, stories, and digital publication management."
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
    description: "Pengelolaan arah visual media sosial, desain konten edukasi pariwisata, dan branding digital untuk tim KKN Tematik Desa Wonosunyo.",
    translations: {
      en: {
        title: "KKNT Wonosunyo Social Media Campaign",
        subtitle: "Content Strategy & Digital Tourism Publication",
        description: "Social media visual direction, educational tourism content design, and digital branding."
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
    description: "Perancangan logo bunga Edelweiss geometris serta sistem template publikasi media sosial untuk meningkatkan eksposur program PPK Ormawa.",
    translations: {
      en: {
        title: "PPK Ormawa Himakom Branding & Socials",
        subtitle: "Visual Identity & Program Publication Management",
        description: "Geometric Edelweiss logo design and social media publication template system."
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
    subtitle: "Taman Pendidikan Al-Quran",
    description: "Perancangan logo bernuansa islami modern untuk Taman Pendidikan Al-Quran (TPA) Anwarul Qulub Dusun Badur.",
    translations: {
      en: {
        title: "TPA Anwarul Qulub Islamic Logo",
        subtitle: "Quranic Education Center",
        description: "Modern Islamic visual identity design for Anwarul Qulub Quranic Education Center."
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
    subtitle: "Finalis Lomba UI/UX Design Nasional",
    description: "Perancangan antarmuka dan pengalaman pengguna (UI/UX) aplikasi pencari kerja dan kursus yang berhasil menembus Babak Final tingkat nasional.",
    translations: {
      en: {
        title: "Prakarsa - Career Platform UI/UX",
        subtitle: "National UI/UX Design Finalist",
        description: "User interface and experience design for a career and skill-building mobile app."
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
    description: "Project UI/UX Design aplikasi streaming drama dengan fokus pada kemudahan navigasi visual, hierarki tipografi, dan kenyamanan pengguna.",
    translations: {
      en: {
        title: "Drakuy - Streaming App UI/UX",
        subtitle: "Interface Exploration & Mobile Design System",
        description: "UI/UX Design project for a streaming platform focusing on intuitive visual navigation."
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
    excerpt: "Bagaimana menerjemahkan filosofi 'Api Abadi yang Membara' ke dalam bentuk geometris modern untuk orientasi mahasiswa baru.",
    content: "Merancang identitas visual untuk acara tahunan membutuhkan keseimbangan antara nilai filosofis tradisional dan estetika modern. Pada logo Pasopati 2023, tema 'Agni Aksa Renjana' diwujudkan melalui siluet geometris dengan mahkota api tiga warna yang melambangkan semangat, intelektualitas, dan keberanian.",
    translations: {
      en: {
        title: "Creative Process Behind Pasopati 2023 Logo: Agni Aksa Renjana",
        excerpt: "How to translate the philosophy of 'Eternal Blazing Flame' into modern geometric forms.",
        content: "Designing a visual identity for an annual event requires a balance between traditional philosophical values and modern aesthetics."
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
    excerpt: "Studi kasus bagaimana konsistensi warna, tipografi, dan supergraphic mampu meningkatkan daya tarik Desa Wisata.",
    content: "Banyak destinasi wisata lokal memiliki potensi alam dan budaya yang luar biasa, namun belum memiliki karakter visual yang mudah diingat. Melalui penyusunan Brand Guideline, setiap titik sentuh memiliki bahasa visual yang seragam dan profesional.",
    translations: {
      en: {
        title: "Why Brand Guidelines & Social Media Kits Matter for Tourism Villages",
        excerpt: "A case study on how consistent color palettes, typography, and supergraphics elevated tourism destinations.",
        content: "Many local tourism destinations possess extraordinary potential but lack a memorable visual character. By establishing a comprehensive Brand Guideline, every touchpoint speaks a unified language."
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
    excerpt: "Menggabungkan perencanaan konten (Content Pillar), psikologi warna, dan tata letak carousel untuk membangun identitas brand di Instagram.",
    content: "Manajemen media sosial bukan sekadar mengunggah gambar setiap hari. Kunci utamanya terletak pada keselarasan antara Brand Strategy dengan kebutuhan audiens. Dengan membagi konten ke dalam pilar edukasi, promosi, dan interaksi, brand dapat berkembang secara organik.",
    translations: {
      en: {
        title: "Visual Social Media Management Strategies for Higher Audience Engagement",
        excerpt: "Combining content pillars, color psychology, and carousel storytelling to build a powerful brand identity.",
        content: "Social media management is more than posting daily graphics. The key lies in aligning Brand Strategy with audience needs."
      }
    }
  }
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================
export default function App() {
  const [theme, setTheme] = useState('dark');
  const isDark = theme === 'dark';
  const [lang, setLang] = useState('id');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [autoTranslateEnabled] = useState(true);
  const [isTranslating, setIsTranslating] = useState(false);

  const t = UI_TRANSLATIONS[lang] || UI_TRANSLATIONS.id;
  const activeLangObj = SUPPORTED_LANGUAGES.find(l => l.code === lang) || SUPPORTED_LANGUAGES[0];

  const getLocalized = (item, field) => {
    if (!item) return '';
    if (lang === 'id') return item[field];
    return item.translations?.[lang]?.[field] || item.translations?.en?.[field] || item[field];
  };

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

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminCredentials] = useState({
    username: 'aldi',
    password: 'password123'
  });
  const [loginInput, setLoginInput] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');

  // Shortcut Ctrl+Shift+L or Alt+L for CMS login
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

  const [aboutCoverFailed, setAboutCoverFailed] = useState(false);

  const [profile, setProfile] = useState(INITIAL_PROFILE);
  const [education, setEducation] = useState(INITIAL_EDUCATION);
  const [experience, setExperience] = useState(INITIAL_EXPERIENCE);
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [blogs, setBlogs] = useState(INITIAL_BLOGS);

  const [cmsMenu, setCmsMenu] = useState('overview');

  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [activeBlogModal, setActiveBlogModal] = useState(null);
  const [showcaseIndex, setShowcaseIndex] = useState(0);

  const [supabaseUrl] = useState(() => {
    try {
      return (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_URL) || DEFAULT_SUPABASE_URL;
    } catch {
      return DEFAULT_SUPABASE_URL;
    }
  });
  const [supabaseKey] = useState(() => {
    try {
      return (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_ANON_KEY) || DEFAULT_SUPABASE_KEY;
    } catch {
      return DEFAULT_SUPABASE_KEY;
    }
  });
  const [isSupabaseConnected, setIsSupabaseConnected] = useState(false);
  const [syncStatus, setSyncStatus] = useState(null);

  const [editingProject, setEditingProject] = useState(null);
  const [projectForm, setProjectForm] = useState({
    title: '', category: 'Logo Design & Identity', subtitle: '', description: '',
    tools: '', link: '', image: '', featured: true, accentColor: 'from-orange-500 to-amber-500', year: '2026', rate: '5.0'
  });
  // State input kategori kustom baru
  const [isCustomCategory, setIsCustomCategory] = useState(false);
  const [customCategoryInput, setCustomCategoryInput] = useState('');

  const [editingBlog, setEditingBlog] = useState(null);
  const [blogForm, setBlogForm] = useState({
    title: '', category: 'Brand Strategy', date: '2026-11-02', readTime: '5 Menit', status: 'Completed', image: '', excerpt: '', content: ''
  });
  const [isBlogCustomCategory, setIsBlogCustomCategory] = useState(false);
  const [blogCustomCategoryInput, setBlogCustomCategoryInput] = useState('');

  const [isUploadingImage, setIsUploadingImage] = useState(false);

  const [resumeSubTab, setResumeSubTab] = useState('experience');
  const [editingExp, setEditingExp] = useState(null);
  const [expForm, setExpForm] = useState({
    role: '', company: '', type: 'Penuh Waktu', period: '2026', description: ''
  });

  const [editingEdu, setEditingEdu] = useState(null);
  const [eduForm, setEduForm] = useState({
    type: 'Formal', institution: '', major: '', period: '2026', description: ''
  });

  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      loginInput.username.trim().toLowerCase() === adminCredentials.username.toLowerCase() &&
      loginInput.password === adminCredentials.password
    ) {
      setIsAuthenticated(true);
      setLoginError('');
      showToast(`Selamat datang, ${profile.name}!`);
    } else {
      setLoginError('Username atau password salah!');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setLoginInput({ username: '', password: '' });
    showToast('Sesi CMS ditutup.');
  };

  const cleanUrl = (url) => {
    if (!url) return '';
    return url.trim().replace(/\/rest\/v1\/?$/i, '').replace(/\/+$/, '');
  };

  const getSupabaseHeaders = (key = supabaseKey, preferMerge = false) => {
    const cleanKey = (key || '').trim();
    const headers = {
      'apikey': cleanKey,
      'Authorization': `Bearer ${cleanKey}`,
      'Content-Type': 'application/json'
    };
    if (preferMerge) {
      headers['Prefer'] = 'resolution=merge-duplicates';
    }
    return headers;
  };

  const pushAllToSupabase = async (
    customProf = profile,
    customProj = projects,
    customBlogs = blogs,
    customEdu = education,
    customExp = experience,
    silent = false
  ) => {
    if (!supabaseUrl || !supabaseKey) return;
    if (!silent) setSyncStatus({ type: 'loading', message: 'Menyinkronkan data ke Cloud Supabase...' });
    try {
      const base = cleanUrl(supabaseUrl);
      const headers = getSupabaseHeaders(supabaseKey, true);

      await fetch(`${base}/rest/v1/portfolio_profile`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ id: 1, data: customProf, updated_at: new Date().toISOString() })
      });

      const formattedProjects = customProj.map(p => ({
        id: p.id, title: p.title, category: p.category, subtitle: p.subtitle,
        description: p.description, tools: p.tools, link: p.link,
        image: p.image || '',
        featured: p.featured, accent_color: p.accentColor, year: p.year,
        translations: p.translations || {}
      }));
      await fetch(`${base}/rest/v1/portfolio_projects`, {
        method: 'POST', headers, body: JSON.stringify(formattedProjects)
      });

      const formattedBlogs = customBlogs.map(b => ({
        id: b.id, title: b.title, slug: b.slug, category: b.category,
        date: b.date, read_time: b.readTime, excerpt: b.excerpt, content: b.content,
        translations: b.translations || {}
      }));
      await fetch(`${base}/rest/v1/portfolio_blogs`, {
        method: 'POST', headers, body: JSON.stringify(formattedBlogs)
      });

      await fetch(`${base}/rest/v1/portfolio_resume`, {
        method: 'POST', headers,
        body: JSON.stringify({ id: 1, education: customEdu, experience: customExp, updated_at: new Date().toISOString() })
      });

      setIsSupabaseConnected(true);
      setSyncStatus({ type: 'success', message: 'Cloud Supabase Terhubung & Tersinkronisasi!' });
      if (!silent) showToast("Berhasil sinkronisasi penuh ke Supabase!");
    } catch (err) {
      setSyncStatus({ type: 'error', message: err.message });
      if (!silent) showToast(err.message, "error");
    }
  };

  const fetchFromSupabase = async (url = supabaseUrl, key = supabaseKey) => {
    if (!url || !key) return;
    setSyncStatus({ type: 'loading', message: 'Menghubungkan ke Cloud Supabase...' });
    try {
      const base = cleanUrl(url);
      const headers = getSupabaseHeaders(key, false);

      const [profRes, projRes, blogRes, resRes] = await Promise.all([
        fetch(`${base}/rest/v1/portfolio_profile?id=eq.1&select=*`, { headers }),
        fetch(`${base}/rest/v1/portfolio_projects?select=*&order=created_at.asc`, { headers }),
        fetch(`${base}/rest/v1/portfolio_blogs?select=*&order=created_at.desc`, { headers }),
        fetch(`${base}/rest/v1/portfolio_resume?id=eq.1&select=*`, { headers })
      ]);

      if (!profRes.ok) throw new Error("Tabel database belum terdeteksi.");

      const profData = await profRes.json();
      const projData = await projRes.json();
      const blogData = await blogRes.json();
      const resData = await resRes.json();

      if (
        (!profData || profData.length === 0) &&
        (!projData || projData.length === 0) &&
        (!blogData || blogData.length === 0)
      ) {
        await pushAllToSupabase(INITIAL_PROFILE, INITIAL_PROJECTS, INITIAL_BLOGS, INITIAL_EDUCATION, INITIAL_EXPERIENCE, true);
        setIsSupabaseConnected(true);
        setSyncStatus({ type: 'success', message: 'Database di-seed otomatis ke Supabase!' });
        return;
      }

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
          date: b.date, readTime: b.read_time, status: 'Completed',
          image: b.translations?._coverImage || '',
          excerpt: b.excerpt, content: b.content,
          translations: b.translations || {}
        })));
      }
      if (resData?.length > 0) {
        if (resData[0].education) setEducation(resData[0].education);
        if (resData[0].experience) setExperience(resData[0].experience);
      }

      setIsSupabaseConnected(true);
      setSyncStatus({ type: 'success', message: 'Terhubung! Data dimuat langsung dari Supabase.' });
    } catch (err) {
      setIsSupabaseConnected(false);
      setSyncStatus({ type: 'error', message: err.message || 'Belum terhubung ke tabel Supabase.' });
    }
  };

  useEffect(() => {
    if (supabaseUrl && supabaseKey) {
      fetchFromSupabase(supabaseUrl, supabaseKey);
    }
  }, []);

  // Showcase Carousel items (prioritize featured projects, fallback to all projects)
  const showcaseItems = useMemo(() => {
    const featuredList = projects.filter(p => p.featured);
    return featuredList.length > 0 ? featuredList : projects;
  }, [projects]);

  // Auto-advance Brand Showcase carousel every 10 seconds
  useEffect(() => {
    if (showcaseItems.length <= 1) return;
    const timer = setInterval(() => {
      setShowcaseIndex((prev) => (prev + 1) % showcaseItems.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [showcaseItems.length]);

  useEffect(() => {
    if (showcaseIndex >= showcaseItems.length) {
      setShowcaseIndex(0);
    }
  }, [showcaseItems.length, showcaseIndex]);

  // List kategori dinamis untuk filter publik: Hanya kategori yang SUDAH TERISI karya
  const publicCategories = useMemo(() => {
    const populatedCats = new Set(projects.map(p => p.category).filter(Boolean));
    return ['Semua', ...Array.from(populatedCats)];
  }, [projects]);

  // List kategori untuk opsi dropdown di CMS (default + kategori custom yang pernah dibuat)
  const cmsProjectCategories = useMemo(() => {
    const allCats = new Set([...DEFAULT_CATEGORIES, ...projects.map(p => p.category).filter(Boolean)]);
    return Array.from(allCats);
  }, [projects]);

  // Reset selectedCategory ke 'Semua' jika kategori aktif sudah tidak memiliki item
  useEffect(() => {
    if (selectedCategory !== 'Semua' && !publicCategories.includes(selectedCategory)) {
      setSelectedCategory('Semua');
    }
  }, [publicCategories, selectedCategory]);

  const blogCategories = useMemo(() => {
    const dynamicCats = new Set([...DEFAULT_CATEGORIES, ...blogs.map(b => b.category).filter(Boolean)]);
    return Array.from(dynamicCats);
  }, [blogs]);

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

  const handleProjectImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setIsUploadingImage(true);
      const compressedDataUrl = await compressImageToDataUrl(file, 1000, 0.82);
      setProjectForm(prev => ({ ...prev, image: compressedDataUrl }));
      showToast("Gambar karya berhasil diunggah!");
    } catch (err) {
      showToast("Gagal mengunggah gambar.", "error");
    } finally {
      setIsUploadingImage(false);
      e.target.value = '';
    }
  };

  const handleBlogCoverUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setIsUploadingImage(true);
      const compressedDataUrl = await compressImageToDataUrl(file, 1000, 0.82);
      setBlogForm(prev => ({ ...prev, image: compressedDataUrl }));
      showToast("Sampul blog berhasil diunggah!");
    } catch (err) {
      showToast("Gagal mengunggah sampul blog.", "error");
    } finally {
      setIsUploadingImage(false);
      e.target.value = '';
    }
  };

  const handleBlogInlineImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setIsUploadingImage(true);
      const compressedDataUrl = await compressImageToDataUrl(file, 900, 0.8);
      const imageBlock = `\n\n![Gambar Artikel](${compressedDataUrl})\n\n`;
      setBlogForm(prev => ({ ...prev, content: (prev.content || '') + imageBlock }));
      showToast("Gambar berhasil disisipkan ke isi artikel!");
    } catch (err) {
      showToast("Gagal menyisipkan gambar.", "error");
    } finally {
      setIsUploadingImage(false);
      e.target.value = '';
    }
  };

  const renderRichBlogContent = (rawText) => {
    if (!rawText) return null;
    const parts = rawText.split(/(!\[[^\]]*\]\([^)]+\))/g);
    return parts.map((part, idx) => {
      const match = part.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
      if (match) {
        return (
          <figure key={idx} className="my-5 rounded-2xl overflow-hidden border border-slate-700/40 shadow-lg">
            <img src={match[2]} alt={match[1] || 'Blog illustration'} className="w-full max-h-[420px] object-cover" />
            {match[1] && match[1] !== 'Gambar Artikel' && (
              <figcaption className="text-center text-xs text-slate-400 py-2 bg-slate-950/40">{match[1]}</figcaption>
            )}
          </figure>
        );
      }
      return (
        <span key={idx} className="whitespace-pre-line">
          {part}
        </span>
      );
    });
  };

  const handleSaveProject = async (e) => {
    e.preventDefault();
    if (!projectForm.title.trim()) return;

    // Tentukan kategori final (apakah dari input kustom atau dropdown)
    const finalCategory = isCustomCategory 
      ? (customCategoryInput.trim() || 'Logo Design & Identity')
      : projectForm.category;

    const toolsArray = typeof projectForm.tools === 'string'
      ? projectForm.tools.split(',').map(t => t.trim()).filter(Boolean)
      : projectForm.tools;

    let generatedTranslations = editingProject?.translations || {};
    if (autoTranslateEnabled) {
      setIsTranslating(true);
      showToast("Menerjemahkan karya otomatis...", "info");
      generatedTranslations = await autoTranslateFields({
        title: projectForm.title,
        subtitle: projectForm.subtitle,
        description: projectForm.description
      });
      setIsTranslating(false);
    }

    const savedItem = editingProject
      ? { ...editingProject, ...projectForm, category: finalCategory, tools: toolsArray, translations: generatedTranslations }
      : { ...projectForm, category: finalCategory, id: `proj-${Date.now()}`, tools: toolsArray, rate: '5.0', translations: generatedTranslations };

    const nextProjects = editingProject
      ? projects.map(p => p.id === editingProject.id ? savedItem : p)
      : [savedItem, ...projects];

    setProjects(nextProjects);

    if (supabaseUrl && supabaseKey) {
      try {
        const base = cleanUrl(supabaseUrl);
        await fetch(`${base}/rest/v1/portfolio_projects`, {
          method: 'POST',
          headers: getSupabaseHeaders(supabaseKey, true),
          body: JSON.stringify({
            id: savedItem.id,
            title: savedItem.title,
            category: savedItem.category,
            subtitle: savedItem.subtitle,
            description: savedItem.description,
            tools: savedItem.tools,
            link: savedItem.link,
            image: savedItem.image || '',
            featured: savedItem.featured,
            accent_color: savedItem.accentColor,
            year: savedItem.year,
            translations: savedItem.translations || {}
          })
        });
        setIsSupabaseConnected(true);
      } catch (e) {}
    }

    showToast(editingProject ? "Karya diperbarui di Supabase!" : "Karya baru tersimpan ke Supabase!");
    setEditingProject(null);
    setIsCustomCategory(false);
    setCustomCategoryInput('');
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
    // Jika kategorinya bukan bawaan baku, aktifkan input kustom
    const isStandard = DEFAULT_CATEGORIES.includes(proj.category);
    if (!isStandard) {
      setIsCustomCategory(true);
      setCustomCategoryInput(proj.category);
    } else {
      setIsCustomCategory(false);
      setCustomCategoryInput('');
    }
    setCmsMenu('projects');
  };

  const handleDeleteProject = async (id) => {
    setProjects(prev => prev.filter(p => p.id !== id));
    if (supabaseUrl && supabaseKey) {
      try {
        const base = cleanUrl(supabaseUrl);
        await fetch(`${base}/rest/v1/portfolio_projects?id=eq.${encodeURIComponent(id)}`, {
          method: 'DELETE',
          headers: getSupabaseHeaders(supabaseKey, false)
        });
      } catch (e) {}
    }
    showToast("Karya dihapus dari Supabase.", "info");
  };

  const handleSaveBlog = async (e) => {
    e.preventDefault();
    if (!blogForm.title.trim()) return;

    const finalCategory = isBlogCustomCategory
      ? (blogCustomCategoryInput.trim() || 'Brand Strategy')
      : blogForm.category;

    const slug = blogForm.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    let generatedTranslations = editingBlog?.translations || {};

    if (autoTranslateEnabled) {
      setIsTranslating(true);
      showToast("Menerjemahkan artikel otomatis...", "info");
      generatedTranslations = await autoTranslateFields({
        title: blogForm.title,
        excerpt: blogForm.excerpt,
        content: blogForm.content
      });
      setIsTranslating(false);
    }

    const translationsWithCover = {
      ...generatedTranslations,
      _coverImage: blogForm.image || ''
    };

    const savedBlog = editingBlog
      ? { ...editingBlog, ...blogForm, category: finalCategory, slug, translations: translationsWithCover }
      : { ...blogForm, category: finalCategory, id: `blog-${Date.now()}`, slug, translations: translationsWithCover };

    const nextBlogs = editingBlog
      ? blogs.map(b => b.id === editingBlog.id ? savedBlog : b)
      : [savedBlog, ...blogs];

    setBlogs(nextBlogs);

    if (supabaseUrl && supabaseKey) {
      try {
        const base = cleanUrl(supabaseUrl);
        await fetch(`${base}/rest/v1/portfolio_blogs`, {
          method: 'POST',
          headers: getSupabaseHeaders(supabaseKey, true),
          body: JSON.stringify({
            id: savedBlog.id,
            title: savedBlog.title,
            slug: savedBlog.slug,
            category: savedBlog.category,
            date: savedBlog.date,
            read_time: savedBlog.readTime,
            excerpt: savedBlog.excerpt,
            content: savedBlog.content,
            translations: savedBlog.translations || {}
          })
        });
        setIsSupabaseConnected(true);
      } catch (e) {}
    }

    showToast(editingBlog ? "Artikel blog diperbarui!" : "Artikel blog diterbitkan!");
    setEditingBlog(null);
    setIsBlogCustomCategory(false);
    setBlogCustomCategoryInput('');
    setBlogForm({
      title: '', category: 'Brand Strategy', date: new Date().toISOString().slice(0, 10),
      readTime: '5 Menit', status: 'Completed', image: '', excerpt: '', content: ''
    });
  };

  const handleEditBlog = (blog) => {
    setEditingBlog(blog);
    setBlogForm({
      title: blog.title,
      category: blog.category,
      date: blog.date,
      readTime: blog.readTime,
      status: 'Completed',
      image: blog.image || blog.translations?._coverImage || '',
      excerpt: blog.excerpt,
      content: blog.content
    });
    const isStandard = DEFAULT_CATEGORIES.includes(blog.category);
    if (!isStandard) {
      setIsBlogCustomCategory(true);
      setBlogCustomCategoryInput(blog.category);
    } else {
      setIsBlogCustomCategory(false);
      setBlogCustomCategoryInput('');
    }
    setCmsMenu('blogs');
  };

  const handleDeleteBlog = async (id) => {
    setBlogs(prev => prev.filter(b => b.id !== id));
    if (supabaseUrl && supabaseKey) {
      try {
        const base = cleanUrl(supabaseUrl);
        await fetch(`${base}/rest/v1/portfolio_blogs?id=eq.${encodeURIComponent(id)}`, {
          method: 'DELETE',
          headers: getSupabaseHeaders(supabaseKey, false)
        });
      } catch (e) {}
    }
    showToast("Artikel blog dihapus.", "info");
  };

  const syncResumeToSupabase = async (nextEdu, nextExp) => {
    if (!supabaseUrl || !supabaseKey) return;
    try {
      const base = cleanUrl(supabaseUrl);
      await fetch(`${base}/rest/v1/portfolio_resume`, {
        method: 'POST',
        headers: getSupabaseHeaders(supabaseKey, true),
        body: JSON.stringify({ id: 1, education: nextEdu, experience: nextExp, updated_at: new Date().toISOString() })
      });
      setIsSupabaseConnected(true);
    } catch (e) {}
  };

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

    const nextExp = editingExp
      ? experience.map(item => item.id === editingExp.id ? { ...item, ...expForm, translations: generatedTranslations } : item)
      : [{ ...expForm, id: `exp-${Date.now()}`, translations: generatedTranslations }, ...experience];

    setExperience(nextExp);
    await syncResumeToSupabase(education, nextExp);
    showToast(editingExp ? "Data pengalaman diperbarui!" : "Pengalaman baru disimpan!");

    setEditingExp(null);
    setExpForm({ role: '', company: '', type: 'Penuh Waktu', period: '2026', description: '' });
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

  const handleDeleteExperience = async (id) => {
    const nextExp = experience.filter(item => item.id !== id);
    setExperience(nextExp);
    await syncResumeToSupabase(education, nextExp);
    if (editingExp?.id === id) {
      setEditingExp(null);
      setExpForm({ role: '', company: '', type: 'Penuh Waktu', period: '2026', description: '' });
    }
    showToast("Riwayat pengalaman dihapus.", "info");
  };

  const handleSaveEducation = async (e) => {
    e.preventDefault();
    if (!eduForm.institution.trim() || !eduForm.major.trim()) return;

    const nextEdu = editingEdu
      ? education.map(item => item.id === editingEdu.id ? { ...item, ...eduForm } : item)
      : [{ ...eduForm, id: `edu-${Date.now()}` }, ...education];

    setEducation(nextEdu);
    await syncResumeToSupabase(nextEdu, experience);
    showToast(editingEdu ? "Pendidikan diperbarui!" : "Pendidikan disimpan!");

    setEditingEdu(null);
    setEduForm({ type: 'Formal', institution: '', major: '', period: '2026', description: '' });
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

  const handleDeleteEducation = async (id) => {
    const nextEdu = education.filter(item => item.id !== id);
    setEducation(nextEdu);
    await syncResumeToSupabase(nextEdu, experience);
    if (editingEdu?.id === id) {
      setEditingEdu(null);
      setEduForm({ type: 'Formal', institution: '', major: '', period: '2026', description: '' });
    }
    showToast("Riwayat pendidikan dihapus.", "info");
  };

  const handleSaveProfileInfo = async (e) => {
    e.preventDefault();
    if (autoTranslateEnabled) {
      setIsTranslating(true);
      const transBio = await autoTranslateFields({ bio: profile.bio });
      setIsTranslating(false);
      const updatedProfile = {
        ...profile,
        translations: {
          en: { bio: transBio.en?.bio || profile.bio },
          ja: { bio: transBio.ja?.bio || profile.bio },
          ar: { bio: transBio.ar?.bio || profile.bio }
        }
      };
      setProfile(updatedProfile);
      await pushAllToSupabase(updatedProfile, projects, blogs, education, experience, false);
    } else {
      await pushAllToSupabase(profile, projects, blogs, education, experience, false);
    }
  };

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
    <div 
      className={`min-h-screen font-sans transition-colors duration-300 ${
        isDark ? 'bg-slate-950 text-slate-100' : 'text-[#000000]'
      }`}
      style={!isDark ? { backgroundColor: BRAND_LIGHT.bg, color: BRAND_LIGHT.textPrimary } : undefined}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        .font-marker {
          font-family: 'Permanent Marker', cursive;
          letter-spacing: 0.02em;
        }
        @keyframes floatSlow {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(8px, -12px) rotate(2deg); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(-8px, 10px) rotate(-2deg); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float-slow {
          animation: floatSlow 7s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: floatReverse 9s ease-in-out infinite;
        }
        .animate-fade-up {
          animation: fadeInUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .card-hover-3d {
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
        }
        .card-hover-3d:hover {
          transform: translateY(-6px);
        }
      `}</style>

      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl border backdrop-blur-md transition-all duration-300 bg-slate-900/95 border-slate-700 text-white animate-fade-up">
          {toast.type === 'error' ? (
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-[#FE7F2D] shrink-0" />
          )}
          <span className="text-sm font-medium">{toast.message}</span>
        </div>
      )}

      {/* =====================================================================
          LANDINGPAGE.HTML (PUBLIC PORTFOLIO - CREATIVE DOODLE & ILLUSTRATION STYLE)
         ===================================================================== */}
      {currentRoute === 'landingpage.html' && (
        <div 
          dir={lang === 'ar' ? 'rtl' : 'ltr'}
          style={{ fontFamily: "'Poppins', 'Plus Jakarta Sans', sans-serif" }}
          className={isDark ? 'bg-[#0D0D12] text-white selection:bg-[#D6F83B] selection:text-black' : 'bg-[#EAECF0] text-[#000000] selection:bg-[#FE7F2D] selection:text-white'}
        >
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800;900&family=Poppins:wght@500;600;700;800&display=swap');
            .font-card-title {
              font-family: 'Poppins', 'Montserrat', sans-serif;
            }
          `}</style>
          {/* TOP NAVBAR WITH ORGANIC PURPLE BLOB */}
          <header className={`sticky top-0 z-40 backdrop-blur-xl transition-colors ${
            isDark ? 'bg-[#0D0D12]/90 border-b border-white/5' : 'bg-white/95 border-b border-[#D0D5DD]'
          }`}>
            {/* Organic Purple Corner Blob */}
            <svg className="pointer-events-none absolute -top-2 -left-4 w-52 h-24 text-[#6D28D9] opacity-90 z-0" viewBox="0 0 240 110" fill="currentColor">
              <path d="M0,0 L230,0 C205,48 165,78 112,72 C62,66 36,96 0,104 Z" />
            </svg>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2 relative z-10">
              <a href="#" className="flex items-center gap-2.5 group min-w-0">
                <span className={`font-marker text-2xl sm:text-3xl tracking-wider lowercase drop-shadow ${
                  isDark ? 'text-white' : 'text-[#000000]'
                }`}>
                  <span className="text-[#D6F83B]">.</span>gudelz
                </span>
              </a>

              <nav className={`hidden lg:flex items-center gap-8 text-sm font-bold ${
                isDark ? 'text-slate-300' : 'text-[#233D4D]'
              }`}>
                <a href="#" className={`relative py-1 ${isDark ? 'text-[#D6F83B]' : 'text-[#FE7F2D]'}`}>
                  Home
                  <span className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${isDark ? 'bg-[#D6F83B]' : 'bg-[#FE7F2D]'}`} />
                </a>
                <a href="#karya" className="hover:text-[#D6F83B] transition-colors">{t.navWorks}</a>
                <a href="#tentang" className="hover:text-[#D6F83B] transition-colors">{t.navAbout}</a>
                <a href="#pengalaman" className="hover:text-[#D6F83B] transition-colors">{t.navResume}</a>
                <a href="#blog" className="hover:text-[#D6F83B] transition-colors">{t.navBlog}</a>
                <a href="#kontak" className="hover:text-[#D6F83B] transition-colors">{t.navContact}</a>
              </nav>

              <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                {/* Language Switcher */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                    className={`px-3 py-2 rounded-full border text-xs font-extrabold transition-all flex items-center gap-1.5 ${
                      isDark
                        ? 'bg-[#181822] border-white/10 text-slate-200 hover:border-[#D6F83B]'
                        : 'bg-white border-[#D0D5DD] text-[#233D4D] hover:bg-[#EAECF0]'
                    }`}
                  >
                    <Languages className="w-3.5 h-3.5 text-[#D6F83B] shrink-0" />
                    <span>{activeLangObj.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 opacity-70 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {langDropdownOpen && (
                    <>
                      <div className="fixed inset-0 z-40" onClick={() => setLangDropdownOpen(false)} />
                      <div className={`absolute right-0 mt-2 w-44 rounded-2xl border p-1.5 shadow-2xl z-50 backdrop-blur-xl animate-fade-up ${
                        isDark ? 'bg-[#181822]/95 border-white/10 text-slate-100' : 'bg-white border-[#D0D5DD] text-[#000000]'
                      }`}>
                        {SUPPORTED_LANGUAGES.map((l) => {
                          const isSelected = lang === l.code;
                          return (
                            <button
                              key={l.code}
                              type="button"
                              onClick={() => { setLang(l.code); setLangDropdownOpen(false); }}
                              className={`w-full px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between transition-all ${
                                isSelected
                                  ? 'bg-[#D6F83B] text-black shadow-sm'
                                  : isDark
                                    ? 'text-slate-300 hover:bg-white/10 hover:text-white'
                                    : 'text-[#233D4D] hover:bg-[#EAECF0] hover:text-[#000000]'
                              }`}
                            >
                              <span className="flex items-center gap-2">
                                <span>{l.flag}</span>
                                <span>{l.name}</span>
                              </span>
                              <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded ${
                                isSelected ? 'bg-black/15 text-black' : 'opacity-60'
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

                {/* Theme Toggle */}
                <button
                  onClick={() => setTheme(isDark ? 'light' : 'dark')}
                  title={isDark ? t.dayMode : t.nightMode}
                  className={`p-2.5 rounded-full border transition-all flex items-center gap-1.5 text-xs font-bold ${
                    isDark 
                      ? 'bg-[#181822] border-white/10 text-[#D6F83B] hover:border-[#D6F83B]' 
                      : 'bg-white border-[#D0D5DD] text-[#233D4D] hover:bg-[#EAECF0]'
                  }`}
                >
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>

                {/* Desktop Hire Me Button */}
                <a
                  href={`https://wa.me/${profile.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#D6F83B] hover:bg-[#c5ea25] text-black font-extrabold text-xs shadow-md transition-transform hover:scale-105"
                >
                  <span>{t.hireMe}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                {/* Mobile & Tablet Only Hamburger Button (Hidden on Desktop lg+) */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Menu"
                  className="lg:hidden w-10 h-10 rounded-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white flex items-center justify-center shadow-lg shadow-[#6D28D9]/30 transition-transform hover:scale-105"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Mobile & Tablet Drawer Menu */}
            {mobileMenuOpen && (
              <div className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-fade-up ${
                isDark ? 'bg-[#14141D]/95 border-white/10 text-slate-200' : 'bg-white border-[#D0D5DD] text-[#233D4D]'
              }`}>
                <div className="max-w-7xl mx-auto grid sm:grid-cols-2 gap-2">
                  <a href="#tentang" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2.5 rounded-xl font-bold hover:bg-[#D6F83B] hover:text-black transition-colors">{t.navAbout}</a>
                  <a href="#karya" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2.5 rounded-xl font-bold hover:bg-[#D6F83B] hover:text-black transition-colors">{t.navWorks}</a>
                  <a href="#pengalaman" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2.5 rounded-xl font-bold hover:bg-[#D6F83B] hover:text-black transition-colors">{t.navResume}</a>
                  <a href="#blog" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2.5 rounded-xl font-bold hover:bg-[#D6F83B] hover:text-black transition-colors">{t.navBlog}</a>
                  <a href="#kontak" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2.5 rounded-xl font-bold hover:bg-[#D6F83B] hover:text-black transition-colors">{t.navContact}</a>
                  <a
                    href={`https://wa.me/${profile.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl font-extrabold bg-[#D6F83B] text-black flex items-center justify-center gap-1.5"
                  >
                    <span>{t.hireMe}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}
          </header>

          {/* =================================================================
              HERO SECTION: BRUSH TYPOGRAPHY, DOODLES, BLOBS & CHARACTER
             ================================================================= */}
          <section className="relative overflow-hidden pt-8 pb-10 sm:pt-12 sm:pb-14 md:pt-14 md:pb-16">
            {/* Organic Background Blobs & Doodles */}
            <svg className="pointer-events-none absolute -bottom-12 -left-16 w-48 h-48 md:w-64 md:h-64 text-[#38BDF8] opacity-90" viewBox="0 0 200 200" fill="currentColor">
              <path d="M38,-56C51,-48,64,-39,71,-26C78,-13,79,4,73,19C67,34,54,47,39,56C24,65,7,70,-9,71C-25,72,-40,69,-52,59C-64,49,-73,32,-76,14C-79,-4,-76,-23,-66,-38C-56,-53,-39,-64,-23,-68C-7,-72,8,-69,23,-63Z" transform="translate(90 105)" />
            </svg>
            <svg className="pointer-events-none absolute top-10 -right-24 w-72 h-72 md:w-96 md:h-96 text-[#F97316] opacity-90" viewBox="0 0 200 200" fill="currentColor">
              <path d="M44,-66C57,-57,68,-44,74,-29C80,-14,81,3,76,19C71,35,60,50,46,60C32,70,15,75,-2,77C-19,79,-36,78,-49,69C-62,60,-71,43,-75,25C-79,7,-78,-12,-70,-28C-62,-44,-47,-57,-32,-66C-17,-75,-2,-80,13,-79C28,-78,31,-75,44,-66Z" transform="translate(105 95)" />
            </svg>

            {/* Floating Hand-drawn Doodles */}
            <svg className="pointer-events-none absolute top-14 right-[10%] w-9 h-9 md:w-10 md:h-10 text-[#FACC15] animate-float-slow hidden sm:block" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
            </svg>
            <svg className="pointer-events-none absolute bottom-24 left-[54%] w-8 h-8 md:w-9 md:h-9 text-[#D6F83B] animate-float-reverse hidden md:block" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
            </svg>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-8 relative z-10">
              <div className="grid md:grid-cols-12 gap-6 md:gap-8 lg:gap-6 items-center">
                
                {/* LEFT COLUMN: BRUSH DISPLAY NAME & CTA PILLS */}
                <div className="md:col-span-7 space-y-4 md:space-y-5 text-left animate-fade-up">
                  {/* "Hey, I'm" + Hand-drawn arrow + Crown Doodle */}
                  <div className="relative inline-flex items-end gap-2.5 md:gap-3">
                    <div className="flex flex-col items-start">
                      <span className={`font-marker text-lg sm:text-xl md:text-2xl -rotate-6 ${isDark ? 'text-slate-200' : 'text-[#233D4D]'}`}>
                        Hey,
                      </span>
                      <svg className={`w-6 h-6 md:w-7 md:h-7 ml-3 md:ml-4 -mt-1 ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`} viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M6 6 C 6 20, 16 26, 28 24 M23 19 L29 24 L23 29" />
                      </svg>
                    </div>

                    <span className={`font-marker text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide ${isDark ? 'text-white' : 'text-[#000000]'}`}>
                      I&apos;m
                    </span>

                    {/* Little Neon Crown Doodle */}
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-[#D6F83B] -mt-3 md:-mt-4 ml-1 md:ml-2 rotate-12 animate-float-slow" viewBox="0 0 48 36" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 28 L8 10 L18 20 L24 6 L30 20 L40 10 L44 28 Z" />
                      <line x1="6" y1="33" x2="42" y2="33" />
                    </svg>
                  </div>

                  {/* GIANT BRUSH NAME + NEON UNDERLINE (Responsive Tablet Scale) */}
                  <div className="relative inline-block">
                    <h1 className={`font-marker text-4xl sm:text-5xl md:text-[54px] lg:text-[78px] leading-[0.98] uppercase tracking-tight ${
                      isDark ? 'text-white' : 'text-[#000000]'
                    }`}>
                      {profile.name}
                    </h1>
                    {/* Hand-drawn Lime Brush Underline */}
                    <svg className="w-full max-w-xs sm:max-w-sm md:max-w-md h-4 md:h-5 mt-1 text-[#D6F83B]" viewBox="0 0 320 18" fill="none">
                      <path d="M4 12 C 95 4, 210 4, 316 11" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
                    </svg>
                  </div>

                  {/* Dot-separated Roles */}
                  <p className={`text-xs sm:text-sm md:text-[15px] lg:text-lg font-bold tracking-wide flex flex-wrap items-center gap-x-2 md:gap-x-2.5 gap-y-1 ${
                    isDark ? 'text-slate-200' : 'text-[#233D4D]'
                  }`}>
                    {profile.roles.map((role, i) => (
                      <React.Fragment key={i}>
                        <span>{role}</span>
                        {i < profile.roles.length - 1 && (
                          <span className="text-[#D6F83B] font-black">•</span>
                        )}
                      </React.Fragment>
                    ))}
                  </p>

                  {/* Pill CTA Buttons (Lime Filled + Outlined) */}
                  <div className="flex flex-wrap items-center gap-3 md:gap-3.5 pt-2 relative">
                    <svg className={`w-9 h-10 md:w-10 md:h-12 -ml-3 hidden md:block ${isDark ? 'text-slate-300' : 'text-[#233D4D]'}`} viewBox="0 0 40 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M18 4 C 4 16, 4 34, 28 38 M22 32 L30 38 L22 44" />
                    </svg>

                    <a
                      href="#karya"
                      className="px-5 py-3 md:px-7 md:py-3.5 rounded-full bg-[#D6F83B] hover:bg-[#c5ea25] text-black font-extrabold text-xs md:text-sm shadow-xl shadow-[#D6F83B]/20 hover:scale-105 flex items-center gap-2 md:gap-2.5 transition-all"
                    >
                      <Play className="w-3.5 h-3.5 md:w-4 md:h-4 fill-black" />
                      <span>{t.exploreWorks}</span>
                    </a>

                    <a
                      href={`https://wa.me/${profile.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className={`px-5 py-3 md:px-7 md:py-3.5 rounded-full border font-extrabold text-xs md:text-sm flex items-center gap-2 hover:scale-105 transition-all ${
                        isDark 
                          ? 'bg-transparent border-white/25 text-white hover:border-[#D6F83B] hover:text-[#D6F83B]' 
                          : 'bg-white border-[#233D4D] text-[#000000] hover:bg-[#233D4D] hover:text-white'
                      }`}
                    >
                      <span>{t.hireMe}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    </a>
                  </div>
                </div>

                {/* RIGHT COLUMN: ENLARGED CHARACTER & CLOSE COMIC SPEECH BUBBLE */}
                <div className="md:col-span-5 relative flex flex-col items-center justify-center animate-fade-up mt-2 md:mt-0">
                  {/* Comic Speech Bubble positioned closer to character */}
                  <div className="self-center md:self-start md:ml-0 lg:ml-4 -mb-4 sm:-mb-5 lg:-mb-7 relative z-20 animate-float-slow">
                    <div className="bg-[#38BDF8] text-black font-marker text-[11px] sm:text-xs lg:text-sm uppercase px-4 py-2 lg:px-5 lg:py-2.5 rounded-[22px] lg:rounded-[26px] shadow-xl border-2 border-black leading-tight text-center -rotate-6">
                      LET&apos;S CREATE <br /> SOMETHING <br /> AWESOME!
                    </div>
                    <div className="w-3.5 h-3.5 lg:w-4 lg:h-4 bg-[#38BDF8] border-r-2 border-b-2 border-black rotate-45 mx-auto -mt-2" />
                  </div>

                  {/* Enlarged Clean Character Illustration */}
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[440px] lg:h-[440px] flex items-center justify-center">
                    {/* Organic Multi-layered Blob Behind Character */}
                    <svg
                      className="pointer-events-none absolute inset-0 w-full h-full text-[#6D28D9] opacity-90 scale-110 animate-float-reverse z-0"
                      viewBox="0 0 200 200"
                      fill="currentColor"
                    >
                      <path
                        d="M44.7,-67.1C57.6,-58.5,67.5,-45.2,73.4,-30.3C79.3,-15.4,81.2,1.1,76.8,15.8C72.4,30.5,61.7,43.4,48.9,53.4C36.1,63.4,21.2,70.5,5.1,72.9C-11,75.3,-28.3,73,-42.5,64.4C-56.7,55.8,-67.8,40.9,-73.3,24.4C-78.8,7.9,-78.7,-10.2,-71.8,-25.4C-64.9,-40.6,-51.2,-52.9,-36.6,-60.9C-22,-68.9,-6.5,-72.6,8.1,-73.7C22.7,-74.8,31.8,-75.7,44.7,-67.1Z"
                        transform="translate(100 100)"
                      />
                    </svg>
                    <svg
                      className="pointer-events-none absolute inset-0 w-full h-full text-[#FE7F2D] opacity-35 scale-95 rotate-45 animate-float-slow z-0"
                      viewBox="0 0 200 200"
                      fill="currentColor"
                    >
                      <path
                        d="M39.5,-61.6C51.4,-53.8,61.4,-43.1,67.9,-30.3C74.4,-17.5,77.4,-2.6,74.5,11.1C71.6,24.8,62.8,37.3,51.7,47.3C40.6,57.3,27.2,64.8,12.5,68.6C-2.2,72.4,-18.2,72.5,-32.1,66.6C-46,60.7,-57.8,48.8,-65.3,34.8C-72.8,20.8,-76,4.7,-73.1,-10.3C-70.2,-25.3,-61.2,-39.2,-49.2,-47.1C-37.2,-55,-22.2,-56.9,-7.8,-56.1C6.6,-55.3,27.6,-69.4,39.5,-61.6Z"
                        transform="translate(100 100)"
                      />
                    </svg>

                    <CleanCharacterAvatar
                      src={profile.avatar || "/avatar.png"}
                      alt={profile.name}
                      className="relative z-10 w-full h-full object-contain scale-105 drop-shadow-[0_22px_30px_rgba(0,0,0,0.48)] hover:scale-110 transition-transform duration-500"
                    />

                    {/* Smiley Doodle */}
                    <svg className="absolute -left-2 md:-left-3 bottom-6 md:bottom-8 w-8 h-8 md:w-10 md:h-10 text-[#D6F83B] animate-float-reverse z-20" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
                      <circle cx="20" cy="20" r="16" />
                      <circle cx="14" cy="15" r="1.5" fill="currentColor" />
                      <circle cx="26" cy="15" r="1.5" fill="currentColor" />
                      <path d="M13 23 C 16 28, 24 28, 27 23" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Scroll Down Indicator */}
              <div className="flex items-center justify-center gap-2 pt-6 pb-2 opacity-75">
                <Mouse className="w-4 h-4 animate-bounce" />
                <span className="text-xs font-bold tracking-wide">Scroll Down</span>
              </div>
            </div>
          </section>

          {/* =================================================================
              SHOWREEL / FEATURED SHOWCASE CARD (2-COLUMN + MINI CAROUSEL TABS)
             ================================================================= */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-8 pb-12">
            {(() => {
              const currentSlide = showcaseItems[showcaseIndex] || projects[0];
              return (
                <div className={`rounded-[28px] md:rounded-[32px] p-5 sm:p-7 md:p-8 lg:p-10 border grid md:grid-cols-12 gap-6 md:gap-8 items-center relative ${
                  isDark ? 'bg-[#15151E] border-white/10' : 'bg-white border-[#D0D5DD] shadow-lg'
                }`}>
                  {/* Decorative Purple Spark Lines on Right Edge */}
                  <svg className="pointer-events-none absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-14 text-[#7C3AED] hidden md:block" viewBox="0 0 32 56" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
                    <line x1="4" y1="16" x2="24" y2="8" />
                    <line x1="6" y1="28" x2="28" y2="28" />
                    <line x1="4" y1="40" x2="24" y2="48" />
                  </svg>

                  {/* LEFT COLUMN: ★ SHOWREEL + DESCRIPTION + WATCH NOW + MINI CAROUSEL TABS */}
                  <div className="md:col-span-5 lg:col-span-4 space-y-4 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2.5">
                        <svg className="w-6 h-6 text-[#7C3AED] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        <h2 className="font-marker text-2xl sm:text-3xl uppercase tracking-wide">
                          SHOWREEL
                        </h2>
                      </div>

                      <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-[#233D4D]'}`}>
                        {currentSlide
                          ? getLocalized(currentSlide, 'subtitle') || getLocalized(currentSlide, 'description')
                          : 'Sekilas karya terbaik dan dedikasi saya dalam membangun identitas visual & cerita brand.'}
                      </p>

                      {currentSlide && (
                        <button
                          type="button"
                          onClick={() => setActiveProjectModal(currentSlide)}
                          className={`inline-flex items-center gap-2.5 text-xs sm:text-sm font-extrabold pt-1 transition-all group ${
                            isDark ? 'text-[#D6F83B] hover:opacity-90' : 'text-[#FE7F2D] hover:opacity-90'
                          }`}
                        >
                          <span>Watch Now</span>
                          <span className={`w-6 h-6 rounded-full border flex items-center justify-center transition-transform group-hover:scale-110 ${
                            isDark ? 'border-[#D6F83B]' : 'border-[#FE7F2D]'
                          }`}>
                            <Play className="w-3 h-3 fill-current ml-0.5" />
                          </span>
                        </button>
                      )}
                    </div>

                    {/* Mini Carousel Tabs Below */}
                    {showcaseItems.length > 1 && (
                      <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {showcaseItems.map((item, idx) => {
                            const isActive = idx === showcaseIndex;
                            return (
                              <button
                                key={item.id || idx}
                                type="button"
                                onClick={() => setShowcaseIndex(idx)}
                                title={getLocalized(item, 'title')}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                  isActive
                                    ? (isDark ? 'w-7 bg-[#D6F83B]' : 'w-7 bg-[#FE7F2D]')
                                    : (isDark ? 'w-2 bg-white/25 hover:bg-white/50' : 'w-2 bg-[#233D4D]/30 hover:bg-[#233D4D]/60')
                                }`}
                              />
                            );
                          })}
                        </div>

                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => setShowcaseIndex((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length)}
                            aria-label="Sebelumnya"
                            className={`w-7 h-7 rounded-full border flex items-center justify-center transition-colors ${
                              isDark ? 'border-white/15 hover:border-[#D6F83B] text-slate-300' : 'border-[#D0D5DD] hover:border-[#FE7F2D] text-[#233D4D]'
                            }`}
                          >
                            <ChevronLeft className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setShowcaseIndex((prev) => (prev + 1) % showcaseItems.length)}
                            aria-label="Berikutnya"
                            className={`w-7 h-7 rounded-full border flex items-center justify-center transition-colors ${
                              isDark ? 'border-white/15 hover:border-[#D6F83B] text-slate-300' : 'border-[#D0D5DD] hover:border-[#FE7F2D] text-[#233D4D]'
                            }`}
                          >
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* RIGHT COLUMN: WIDE FEATURED BANNER */}
                  <div
                    onClick={() => currentSlide && setActiveProjectModal(currentSlide)}
                    className="md:col-span-7 lg:col-span-8 relative h-48 sm:h-56 md:h-60 lg:h-64 rounded-2xl overflow-hidden group cursor-pointer border border-white/10"
                  >
                    <img
                      key={currentSlide?.id || showcaseIndex}
                      src={currentSlide?.image || "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80"}
                      alt={currentSlide?.title || "Showreel Preview"}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 animate-fade-up"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#3B0764]/75 via-purple-900/30 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#D6F83B] text-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 md:w-7 md:h-7 fill-black ml-0.5" />
                      </div>
                    </div>
                    {currentSlide && (
                      <div className="absolute bottom-3.5 left-4 right-4 flex items-end justify-between gap-3 text-white">
                        <div className="min-w-0">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur inline-block">
                            {currentSlide.category}
                          </span>
                          <h3 className="font-card-title font-extrabold text-sm sm:text-base lg:text-lg mt-1 drop-shadow truncate">
                            {getLocalized(currentSlide, 'title')}
                          </h3>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })()}
          </section>

          {/* =================================================================
              SKILL & PILLARS SECTION (APP ICON BADGES + 4 PILLARS CARDS)
             ================================================================= */}
          <section id="tentang" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-8 pb-12">
            <div className={`rounded-[28px] md:rounded-[32px] p-5 sm:p-7 md:p-8 lg:p-10 border relative overflow-hidden space-y-8 ${
              isDark ? 'bg-[#15151E] border-white/10' : 'bg-white border-[#D0D5DD] shadow-lg'
            }`}>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-8">
                <div className="shrink-0">
                  <div className="inline-block">
                    <h2 className="font-marker text-xl sm:text-2xl lg:text-3xl uppercase tracking-wide">
                      SKILL
                    </h2>
                    <svg className="w-full h-3.5 mt-0.5 text-[#D6F83B]" viewBox="0 0 120 14" fill="none">
                      <path d="M3 10 C 35 3, 85 3, 117 9" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p className={`text-xs mt-1.5 font-medium ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`}>
                    {t.pillarsTitle}
                  </p>
                </div>

                {/* App Badges Row (3 cols on Mobile, 6 cols on Tablet & Desktop) */}
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 md:gap-4 flex-1 max-w-2xl">
                  {[
                    { code: 'Ai', name: 'Adobe Illustrator', bg: 'bg-[#330000]', border: 'border-[#FF9A00]', text: 'text-[#FF9A00]' },
                    { code: 'Ps', name: 'Adobe Photoshop', bg: 'bg-[#001E36]', border: 'border-[#31A8FF]', text: 'text-[#31A8FF]' },
                    { code: 'Fig', name: 'Figma UI/UX', bg: 'bg-[#1E1E1E]', border: 'border-[#A259FF]', text: 'text-[#0ACF83]' },
                    { code: 'Id', name: 'Brand Guideline', bg: 'bg-[#49021F]', border: 'border-[#FF3366]', text: 'text-[#FF3366]' },
                    { code: 'Sm', name: 'Social Media', bg: 'bg-[#1A103C]', border: 'border-[#8B5CF6]', text: 'text-[#C4B5FD]' },
                    { code: 'Br', name: 'Brand Strategy', bg: 'bg-[#0B2E1E]', border: 'border-[#D6F83B]', text: 'text-[#D6F83B]' }
                  ].map((app, i) => (
                    <div key={i} className="flex flex-col items-center text-center gap-2 group">
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${app.bg} border-2 ${app.border} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <span className={`font-black text-lg sm:text-xl ${app.text}`}>{app.code}</span>
                      </div>
                      <span className={`text-[11px] font-bold leading-tight ${isDark ? 'text-slate-300' : 'text-[#233D4D]'}`}>
                        {app.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4 Core Expertise Pillar Cards (01 - 04) */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 pt-2">
                {t.pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className={`p-5 md:p-6 rounded-2xl border flex flex-col justify-between card-hover-3d transition-all ${
                      isDark
                        ? 'bg-[#0D0D12] border-white/10 hover:border-[#D6F83B]'
                        : 'bg-[#EAECF0]/55 border-[#D0D5DD] hover:border-[#FE7F2D]'
                    }`}
                  >
                    <div className="space-y-3">
                      <span className={`font-card-title text-2xl font-black block ${
                        isDark ? 'text-slate-600' : 'text-[#233D4D]/35'
                      }`}>
                        {pillar.num}
                      </span>
                      <h3 className={`font-card-title font-extrabold text-base md:text-lg leading-snug ${
                        isDark ? 'text-white' : 'text-[#000000]'
                      }`}>
                        {pillar.title}
                      </h3>
                      <p className={`text-xs leading-relaxed ${
                        isDark ? 'text-slate-400' : 'text-[#233D4D]'
                      }`}>
                        {pillar.desc}
                      </p>
                    </div>

                    <div className={`mt-5 pt-3.5 border-t text-[11px] font-extrabold ${
                      isDark ? 'border-white/10 text-[#FE7F2D]' : 'border-[#D0D5DD] text-[#FE7F2D]'
                    }`}>
                      {pillar.tools}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* =================================================================
              ABOUT ME SECTION (NEON-LIME SKETCH COVER + BIO)
             ================================================================= */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-8 pb-16">
            <div className={`rounded-[28px] md:rounded-[32px] p-5 sm:p-7 md:p-8 lg:p-10 border grid md:grid-cols-12 gap-6 md:gap-8 items-center ${
              isDark ? 'bg-[#15151E] border-white/10' : 'bg-white border-[#D0D5DD] shadow-lg'
            }`}>
              {/* Left Neon-Lime Charcoal Sketch Cover */}
              <div className="md:col-span-5 relative rounded-3xl bg-[#D6F83B] text-black overflow-hidden flex items-center justify-center min-h-[225px] md:min-h-[250px] border-2 border-black shadow-xl group">
                <img
                  src={profile.aboutCover || "/about-cover.png"}
                  alt="Focus Discipline Consistency Cover"
                  className="w-full h-full min-h-[225px] md:min-h-[250px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right Bio Info */}
              <div className="md:col-span-7 space-y-3 md:space-y-4">
                <div className="inline-block">
                  <h2 className="font-marker text-xl sm:text-2xl lg:text-3xl uppercase tracking-wide">
                    ABOUT ME
                  </h2>
                  <svg className="w-full h-3.5 mt-0.5 text-[#D6F83B]" viewBox="0 0 180 14" fill="none">
                    <path d="M3 10 C 55 3, 125 3, 177 9" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
                  </svg>
                </div>
                <p className={`text-xs sm:text-sm lg:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-[#233D4D]'}`}>
                  {getLocalized(profile, 'bio')}
                </p>
                <a
                  href="#pengalaman"
                  className={`inline-flex items-center gap-2.5 text-xs sm:text-sm font-extrabold ${
                    isDark ? 'text-[#D6F83B] hover:underline' : 'text-[#FE7F2D] hover:underline'
                  }`}
                >
                  <span>EXPERIENCE</span>
                  <span className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                    isDark ? 'border-[#D6F83B]' : 'border-[#FE7F2D]'
                  }`}>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>
            </div>
          </section>

          {/* =================================================================
              EXPERIENCE SECTION (EXPERIENCE & EDUCATION)
             ================================================================= */}
          <section id="pengalaman" className={`py-14 md:py-16 border-y ${
            isDark ? 'bg-[#12121A] border-white/10' : 'bg-white border-[#D0D5DD]'
          }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-8 space-y-10 md:space-y-12">
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-block">
                  <h2 className="font-marker text-2xl sm:text-3xl lg:text-4xl uppercase">EXPERIENCE</h2>
                  <svg className="w-full h-3.5 mt-1 text-[#D6F83B]" viewBox="0 0 220 14" fill="none">
                    <path d="M4 10 C 65 3, 155 3, 216 9" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-8 lg:gap-10">
                <div className="md:col-span-7 space-y-5 md:space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#D6F83B] text-black">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg md:text-xl font-black">{t.expTitle}</h3>
                  </div>

                  <div className="space-y-4 relative before:absolute before:top-3 before:bottom-3 before:left-4 before:w-0.5 before:bg-[#6D28D9]/40">
                    {experience.map((exp) => (
                      <div key={exp.id} className="relative pl-9 md:pl-10">
                        <div className="w-3.5 h-3.5 rounded-full bg-[#D6F83B] border-2 border-black absolute left-[9px] top-5" />
                        <div className={`p-4 md:p-5 rounded-2xl border card-hover-3d ${
                          isDark ? 'bg-[#181822] border-white/10' : 'bg-[#EAECF0]/50 border-[#D0D5DD]'
                        }`}>
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className={`text-xs font-extrabold ${isDark ? 'text-[#D6F83B]' : 'text-[#FE7F2D]'}`}>{exp.period}</span>
                            <span className={`px-2.5 py-0.5 rounded-full border text-[11px] font-semibold ${
                              isDark ? 'bg-[#0D0D12] border-white/10 text-slate-300' : 'bg-white border-[#D0D5DD] text-[#233D4D]'
                            }`}>
                              {getLocalized(exp, 'type')}
                            </span>
                          </div>
                          <h4 className="text-sm md:text-base font-bold mt-1">{getLocalized(exp, 'role')}</h4>
                          <div className={`text-xs font-semibold mt-0.5 ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`}>{exp.company}</div>
                          <p className={`text-xs mt-2 leading-relaxed ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`}>{getLocalized(exp, 'description')}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-5 space-y-5 md:space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#6D28D9] text-white">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg md:text-xl font-black">{t.eduTitle}</h3>
                  </div>

                  <div className="space-y-4">
                    {education.map((edu) => (
                      <div key={edu.id} className={`p-4 md:p-5 rounded-2xl border card-hover-3d ${
                        isDark ? 'bg-[#181822] border-white/10' : 'bg-[#EAECF0]/50 border-[#D0D5DD]'
                      }`}>
                        <div className="flex items-center justify-between">
                          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                            edu.type === 'Formal'
                              ? 'bg-[#6D28D9]/20 text-[#A855F7] border border-[#6D28D9]/30'
                              : 'bg-[#D6F83B]/15 text-[#D6F83B] border border-[#D6F83B]/30'
                          }`}>
                            {t.eduPrefix} {edu.type}
                          </span>
                          <span className={`text-xs font-semibold ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`}>{edu.period}</span>
                        </div>
                        <h4 className="text-sm md:text-base font-bold mt-2">{edu.institution}</h4>
                        <div className={`text-xs font-bold mt-0.5 ${isDark ? 'text-[#D6F83B]' : 'text-[#FE7F2D]'}`}>{getLocalized(edu, 'major')}</div>
                        <p className={`text-xs mt-2 leading-relaxed ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`}>{getLocalized(edu, 'description')}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =================================================================
              MY LITTLE NOTES (BLOG SECTION)
             ================================================================= */}
          <section id="blog" className="py-14 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-8 space-y-8">
            <div>
              <div className="inline-block">
                <h2 className="font-marker text-2xl sm:text-3xl lg:text-4xl uppercase">MY LITTLE NOTES</h2>
                <svg className="w-full h-3.5 mt-1 text-[#D6F83B]" viewBox="0 0 260 14" fill="none">
                  <path d="M4 10 C 80 3, 180 3, 256 9" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {blogs.map((blog) => (
                <article
                  key={blog.id}
                  onClick={() => setActiveBlogModal(blog)}
                  className={`rounded-3xl border overflow-hidden flex flex-col justify-between card-hover-3d cursor-pointer group ${
                    isDark ? 'bg-[#15151E] border-white/10 hover:border-[#D6F83B]' : 'bg-white border-[#D0D5DD] hover:border-[#FE7F2D] shadow-sm'
                  }`}
                >
                  <div>
                    {(blog.image || blog.translations?._coverImage) && (
                      <div className="h-44 w-full overflow-hidden relative bg-slate-950">
                        <img
                          src={blog.image || blog.translations?._coverImage}
                          alt={getLocalized(blog, 'title')}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-5 md:p-6 space-y-4">
                      <div className={`flex items-center justify-between text-xs ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`}>
                        <span className="px-3 py-1 rounded-full bg-[#6D28D9]/20 text-[#A855F7] font-bold border border-[#6D28D9]/30">
                          {blog.category}
                        </span>
                        <span className="flex items-center gap-1 font-medium">
                          <Calendar className="w-3.5 h-3.5" />
                          {blog.date}
                        </span>
                      </div>

                      <h3 className={`text-lg md:text-xl font-bold leading-snug transition-colors ${
                        isDark ? 'text-white group-hover:text-[#D6F83B]' : 'text-[#000000] group-hover:text-[#FE7F2D]'
                      }`}>
                        {getLocalized(blog, 'title')}
                      </h3>
                      <p className={`text-xs leading-relaxed line-clamp-3 ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`}>
                        {getLocalized(blog, 'excerpt')}
                      </p>
                    </div>
                  </div>

                  <div className={`px-5 md:px-6 py-4 border-t flex items-center justify-between ${
                    isDark ? 'border-white/10' : 'border-[#E4E7EC]'
                  }`}>
                    <span className={`text-[11px] font-medium ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`}>
                      {t.readTimeLabel} {blog.readTime}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setActiveBlogModal(blog); }}
                      className={`text-xs font-extrabold hover:underline flex items-center gap-1 ${
                        isDark ? 'text-[#D6F83B]' : 'text-[#FE7F2D]'
                      }`}
                    >
                      <span>{t.readMore}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* =================================================================
              FOOTER ("LET'S MAKE SOMETHING DOPE!" STYLE WITH CORNER BLOB)
             ================================================================= */}
          <footer id="kontak" className={`relative overflow-hidden border-t py-12 md:py-14 ${
            isDark ? 'border-white/10 bg-[#0A0A0F]' : 'border-[#D0D5DD] bg-white'
          }`}>
            {/* Cute Blue Corner Character Blob */}
            <svg className="pointer-events-none absolute -bottom-4 -right-4 w-28 h-28 md:w-36 md:h-36 text-[#38BDF8] opacity-90" viewBox="0 0 160 160" fill="currentColor">
              <path d="M45,160 C25,115 45,55 95,40 C130,30 155,45 160,75 L160,160 Z" />
              <circle cx="95" cy="92" r="5" fill="#0A0A0F" />
              <circle cx="122" cy="86" r="5" fill="#0A0A0F" />
              <path d="M98,108 Q112,122 124,104" stroke="#0A0A0F" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-8 space-y-8 md:space-y-10 relative z-10">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
                {/* Left Brush Headline */}
                <div>
                  <h2 className="font-marker text-2xl sm:text-3xl lg:text-4xl uppercase leading-tight">
                    LET&apos;S MAKE <br />
                    SOMETHING{' '}
                    <span className="inline-block px-3 py-0.5 rounded-full border-2 border-[#6D28D9] text-[#D6F83B] bg-[#6D28D9]/20 -rotate-2">
                      DOPE!
                    </span>
                  </h2>
                </div>

                {/* Middle Contact Details */}
                <div className="space-y-2.5 text-xs sm:text-sm">
                  <a href={`mailto:${profile.email}`} className="flex items-center gap-3 font-bold hover:text-[#D6F83B] transition-colors">
                    <Mail className="w-4 h-4 text-[#D6F83B] shrink-0" />
                    <span>{profile.email}</span>
                  </a>
                  <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 font-bold hover:text-[#D6F83B] transition-colors">
                    <Phone className="w-4 h-4 text-[#D6F83B] shrink-0" />
                    <span>{profile.phone}</span>
                  </a>
                  <div className="flex items-center gap-3 font-medium opacity-80">
                    <MapPin className="w-4 h-4 text-[#D6F83B] shrink-0" />
                    <span>Prigen, Pasuruan, Jawa Timur</span>
                  </div>
                </div>

                {/* Right Social Circles */}
                <div className="flex items-center gap-3">
                  <a
                    href={`https://instagram.com/${profile.socials.instagram}`}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-10 h-10 rounded-full border flex items-center justify-center text-xs font-black transition-all hover:scale-110 ${
                      isDark ? 'border-white/20 hover:bg-[#D6F83B] hover:text-black' : 'border-[#D0D5DD] hover:bg-[#FE7F2D] hover:text-white'
                    }`}
                  >
                    IG
                  </a>
                  <a
                    href={`https://linkedin.com/in/${profile.socials.linkedin}`}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-10 h-10 rounded-full border flex items-center justify-center text-xs font-black transition-all hover:scale-110 ${
                      isDark ? 'border-white/20 hover:bg-[#D6F83B] hover:text-black' : 'border-[#D0D5DD] hover:bg-[#FE7F2D] hover:text-white'
                    }`}
                  >
                    IN
                  </a>
                  <a
                    href={`https://wa.me/${profile.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-10 h-10 rounded-full border flex items-center justify-center text-xs font-black transition-all hover:scale-110 ${
                      isDark ? 'border-white/20 hover:bg-[#D6F83B] hover:text-black' : 'border-[#D0D5DD] hover:bg-[#FE7F2D] hover:text-white'
                    }`}
                  >
                    WA
                  </a>
                </div>
              </div>

              <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t text-xs font-medium ${
                isDark ? 'border-white/10 text-slate-400' : 'border-[#D0D5DD] text-[#233D4D]'
              }`}>
                <div>© {new Date().getFullYear()} {profile.name}. All Rights Reserved.</div>
                <div className="flex items-center gap-4">
                  <span>@{profile.socials.instagram}</span>
                  <button
                    onClick={() => setCurrentRoute('dashboard.html')}
                    title="Admin Access (dashboard.html)"
                    className="opacity-40 hover:opacity-100 transition-opacity p-1.5 rounded-lg hover:bg-white/10"
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
          DASHBOARD.HTML (CMS)
         ===================================================================== */}
      {currentRoute === 'dashboard.html' && (
        <>
          {!isAuthenticated ? (
            <div className={`min-h-[calc(100vh-42px)] flex items-center justify-center p-4 ${
              isDark ? 'bg-[#12121A]' : 'bg-[#EAECF0]'
            }`}>
              <div className={`w-full max-w-md rounded-3xl p-8 shadow-2xl border space-y-6 animate-fade-up ${
                isDark ? 'bg-[#181824] border-slate-800 text-white' : 'bg-white border-[#D0D5DD] text-[#000000]'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl overflow-hidden border shadow shrink-0 flex items-center justify-center ${
                      isDark ? 'border-slate-700/80 bg-slate-900' : 'border-[#D0D5DD] bg-[#EAECF0]'
                    }`}>
                      <CleanCharacterAvatar
                        src={profile.avatar || "/avatar.png"}
                        alt="Avatar Karakter"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-lg font-black">CMS Login Portal</h2>
                      <p className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`}>dashboard.html</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setCurrentRoute('landingpage.html')}
                    className="text-xs text-[#233D4D] hover:text-[#FE7F2D] flex items-center gap-1 font-bold"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Kembali</span>
                  </button>
                </div>

                {loginError && (
                  <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-semibold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{loginError}</span>
                  </div>
                )}

                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className={`block text-xs font-bold mb-1.5 ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`}>Username</label>
                    <input
                      type="text"
                      required
                      value={loginInput.username}
                      onChange={(e) => setLoginInput({ ...loginInput, username: e.target.value })}
                      placeholder="Masukkan username..."
                      className={`w-full px-4 py-3 rounded-2xl border text-sm focus:outline-none focus:border-[#FE7F2D] ${
                        isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/50 border-[#D0D5DD] text-[#000000]'
                      }`}
                    />
                  </div>
                  <div>
                    <label className={`block text-xs font-bold mb-1.5 ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`}>Password</label>
                    <input
                      type="password"
                      required
                      value={loginInput.password}
                      onChange={(e) => setLoginInput({ ...loginInput, password: e.target.value })}
                      placeholder="••••••••"
                      className={`w-full px-4 py-3 rounded-2xl border text-sm focus:outline-none focus:border-[#FE7F2D] ${
                        isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/50 border-[#D0D5DD] text-[#000000]'
                      }`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl bg-[#FE7F2D] hover:bg-[#E86E20] text-white font-black text-sm shadow-lg shadow-[#FE7F2D]/20 transition-all"
                  >
                    Masuk ke Dashboard CMS
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className={`min-h-[calc(100vh-42px)] p-2 sm:p-4 lg:p-6 transition-colors ${
              isDark ? 'bg-[#0F0F17]' : 'bg-[#EAECF0]'
            }`}>
              <div className={`max-w-[1440px] mx-auto rounded-[24px] sm:rounded-[34px] shadow-2xl border overflow-hidden flex flex-col lg:flex-row min-h-[820px] relative ${
                isDark ? 'bg-[#171723] border-slate-800/80 text-slate-100' : 'bg-white border-[#D0D5DD] text-[#000000]'
              }`}>
                {/* SIDEBAR */}
                <aside className="w-full lg:w-64 bg-[#181824] text-white p-5 flex flex-col justify-between shrink-0">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#FE7F2D] flex items-center justify-center text-white font-black text-base">
                          <Sparkles className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-extrabold text-lg tracking-tight">AldiCMS</span>
                          <span className="block text-[10px] text-emerald-400 font-mono">
                            {isSupabaseConnected ? '● Cloud Active' : '○ Local Mode'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <nav className="flex lg:flex-col gap-1.5 overflow-x-auto pb-2 lg:pb-0">
                      {[
                        { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
                        { id: 'projects', label: 'My Works', icon: FolderGit2, badge: projects.length },
                        { id: 'blogs', label: 'Blog Posts', icon: FileText, badge: blogs.length },
                        { id: 'resume', label: 'Resume CV', icon: Briefcase },
                        { id: 'profile', label: 'Profile Info', icon: User }
                      ].map((item) => {
                        const Icon = item.icon;
                        const active = cmsMenu === item.id;
                        return (
                          <button
                            key={item.id}
                            onClick={() => setCmsMenu(item.id)}
                            className={`px-4 py-3 rounded-2xl text-xs font-bold flex items-center justify-between transition-all whitespace-nowrap ${
                              active
                                ? 'bg-[#FE7F2D] text-white shadow-lg shadow-[#FE7F2D]/20'
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <Icon className="w-4 h-4 shrink-0" />
                              <span>{item.label}</span>
                            </div>
                            {item.badge !== undefined && (
                              <span className={`ml-2 px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                                active ? 'bg-black/20 text-white' : 'bg-orange-500/20 text-orange-400'
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

                {/* MAIN CMS CONTENT */}
                <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto space-y-6">
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h1 className="text-xl sm:text-2xl font-black tracking-tight">
                        Welcome back {profile.name.split(' ')[1] || profile.name} 👋
                      </h1>
                      <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`}>
                        Setiap perubahan karya, blog, dan resume otomatis tersimpan ke Cloud Supabase.
                      </p>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <button
                        onClick={() => setTheme(isDark ? 'light' : 'dark')}
                        className={`p-2.5 rounded-2xl border ${
                          isDark ? 'bg-[#1F1F2E] border-slate-800 text-amber-400' : 'bg-white border-[#D0D5DD] text-[#233D4D]'
                        }`}
                      >
                        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => fetchFromSupabase()}
                        title="Muat Ulang dari Cloud"
                        className={`p-2.5 rounded-2xl border ${
                          isDark ? 'bg-[#1F1F2E] border-slate-800 text-slate-200' : 'bg-white border-[#D0D5DD] text-[#233D4D]'
                        }`}
                      >
                        <RefreshCw className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => pushAllToSupabase()}
                        className="px-4 py-2.5 rounded-2xl bg-[#FE7F2D] hover:bg-[#E86E20] text-white font-extrabold text-xs flex items-center gap-2 shadow"
                      >
                        <UploadCloud className="w-4 h-4" />
                        <span>Sync Cloud</span>
                      </button>
                    </div>
                  </div>

                  {syncStatus && (
                    <div className={`p-3.5 rounded-2xl border text-xs font-bold flex items-center justify-between gap-2 ${
                      syncStatus.type === 'error'
                        ? 'bg-rose-500/10 border-rose-500/20 text-rose-500'
                        : syncStatus.type === 'success'
                          ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600'
                          : 'bg-indigo-500/10 border-indigo-500/20 text-indigo-600'
                    }`}>
                      <div className="flex items-center gap-2">
                        {syncStatus.type === 'loading' ? (
                          <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                        ) : syncStatus.type === 'error' ? (
                          <AlertCircle className="w-4 h-4 shrink-0" />
                        ) : (
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                        )}
                        <span>{syncStatus.message}</span>
                      </div>
                      <span className="text-[10px] font-mono opacity-75 hidden sm:inline">
                        {cleanUrl(supabaseUrl)}
                      </span>
                    </div>
                  )}

                  {/* TAB 1: OVERVIEW */}
                  {cmsMenu === 'overview' && (
                    <div className="space-y-6 animate-fade-up">
                      <div className="grid sm:grid-cols-3 gap-4">
                        <div onClick={() => setCmsMenu('projects')} className={`p-6 rounded-3xl border cursor-pointer card-hover-3d ${isDark ? 'bg-[#1F1F2E] border-slate-800' : 'bg-[#EAECF0]/60 border-[#D0D5DD]'}`}>
                          <div className={`text-xs font-bold ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`}>Total Karya Portofolio</div>
                          <div className="text-3xl font-black mt-2 text-[#FE7F2D]">{projects.length}</div>
                          <div className={`text-[11px] mt-1 font-medium ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`}>Klik untuk kelola karya →</div>
                        </div>
                        <div onClick={() => setCmsMenu('blogs')} className={`p-6 rounded-3xl border cursor-pointer card-hover-3d ${isDark ? 'bg-[#1F1F2E] border-slate-800' : 'bg-[#EAECF0]/60 border-[#D0D5DD]'}`}>
                          <div className={`text-xs font-bold ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`}>Total Artikel Blog</div>
                          <div className="text-3xl font-black mt-2 text-emerald-500">{blogs.length}</div>
                          <div className={`text-[11px] mt-1 font-medium ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`}>Klik untuk tulis artikel →</div>
                        </div>
                        <div onClick={() => setCmsMenu('resume')} className={`p-6 rounded-3xl border cursor-pointer card-hover-3d ${isDark ? 'bg-[#1F1F2E] border-slate-800' : 'bg-[#EAECF0]/60 border-[#D0D5DD]'}`}>
                          <div className={`text-xs font-bold ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`}>Pengalaman & Pendidikan</div>
                          <div className="text-3xl font-black mt-2 text-[#FE7F2D]">
                            {experience.length + education.length}
                          </div>
                          <div className={`text-[11px] mt-1 font-medium ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`}>Klik untuk edit resume →</div>
                        </div>
                      </div>

                      <div className={`p-6 rounded-3xl border space-y-4 ${isDark ? 'bg-[#1F1F2E] border-slate-800' : 'bg-white border-[#D0D5DD]'}`}>
                        <div className="flex items-center justify-between">
                          <h3 className={`font-black text-sm ${isDark ? 'text-white' : 'text-[#000000]'}`}>Karya Terbaru</h3>
                          <button onClick={() => setCmsMenu('projects')} className="text-xs font-bold text-[#FE7F2D] hover:underline">
                             + Tambah Karya
                          </button>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {projects.slice(0, 4).map((p) => (
                            <div key={p.id} className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3 ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-[#EAECF0]/50 border-[#D0D5DD]'}`}>
                              <div className="min-w-0">
                                <div className="text-[11px] font-bold text-[#FE7F2D] truncate">{p.category}</div>
                                <div className={`text-xs font-bold truncate ${isDark ? 'text-white' : 'text-[#000000]'}`}>{p.title}</div>
                              </div>
                              <button onClick={() => handleEditProject(p)} className="p-2 rounded-lg bg-slate-800 text-slate-200 shrink-0">
                                <Edit3 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: PROJECTS CRUD */}
                  {cmsMenu === 'projects' && (
                    <div className="grid lg:grid-cols-12 gap-6 animate-fade-up">
                      <form onSubmit={handleSaveProject} className={`lg:col-span-5 p-6 rounded-3xl border space-y-4 ${isDark ? 'bg-[#1F1F2E] border-slate-800' : 'bg-white border-[#D0D5DD]'}`}>
                        <h3 className={`font-black text-base ${isDark ? 'text-white' : 'text-[#000000]'}`}>{editingProject ? 'Edit Karya' : 'Tambah Karya Baru'}</h3>
                        <input
                          type="text"
                          required
                          placeholder="Judul Karya"
                          value={projectForm.title}
                          onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/40 border-[#D0D5DD] text-[#000000]'}`}
                        />
                        <div className="grid grid-cols-2 gap-2.5">
                          {/* Kategori Fleksibel: Dropdown + Opsi Kustom */}
                          <div>
                            {!isCustomCategory ? (
                              <select
                                value={projectForm.category}
                                onChange={(e) => {
                                  if (e.target.value === '__NEW__') {
                                    setIsCustomCategory(true);
                                    setCustomCategoryInput('');
                                  } else {
                                    setProjectForm({ ...projectForm, category: e.target.value });
                                  }
                                }}
                                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-medium ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/40 border-[#D0D5DD] text-[#000000]'}`}
                              >
                                {cmsProjectCategories.map(cat => (
                                  <option key={cat} value={cat}>{cat}</option>
                                ))}
                                <option value="__NEW__" className="font-bold text-[#FE7F2D]">+ Tambah Kategori Baru...</option>
                              </select>
                            ) : (
                              <div className="flex items-center gap-1.5">
                                <input
                                  type="text"
                                  autoFocus
                                  required
                                  placeholder="Ketik Kategori Baru..."
                                  value={customCategoryInput}
                                  onChange={(e) => setCustomCategoryInput(e.target.value)}
                                  className={`w-full px-3 py-2.5 rounded-xl border text-xs font-semibold focus:border-[#FE7F2D] ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/40 border-[#D0D5DD] text-[#000000]'}`}
                                />
                                <button
                                  type="button"
                                  onClick={() => {
                                    setIsCustomCategory(false);
                                    setCustomCategoryInput('');
                                  }}
                                  title="Kembali ke pilihan"
                                  className={`p-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-white border-[#D0D5DD] text-[#233D4D]'}`}
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            )}
                          </div>

                          <input
                            type="text"
                            placeholder="Tahun (misal: 2026)"
                            value={projectForm.year}
                            onChange={(e) => setProjectForm({ ...projectForm, year: e.target.value })}
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/40 border-[#D0D5DD] text-[#000000]'}`}
                          />
                        </div>
                        <input
                          type="text"
                          placeholder="Subjudul Singkat"
                          value={projectForm.subtitle}
                          onChange={(e) => setProjectForm({ ...projectForm, subtitle: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/40 border-[#D0D5DD] text-[#000000]'}`}
                        />
                        <textarea
                          rows={3}
                          placeholder="Deskripsi Karya"
                          value={projectForm.description}
                          onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/40 border-[#D0D5DD] text-[#000000]'}`}
                        />

                        {/* Upload Gambar */}
                        <div className="space-y-2">
                          <label className={`block text-[11px] font-bold ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`}>
                            Gambar Preview Karya
                          </label>
                          {projectForm.image ? (
                            <div className="relative rounded-2xl overflow-hidden border border-[#D0D5DD] h-36 bg-[#EAECF0] group">
                              <img src={projectForm.image} alt="Preview Karya" className="w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                <label className="px-3 py-1.5 rounded-xl bg-[#FE7F2D] text-white text-xs font-bold cursor-pointer">
                                  Ganti Gambar
                                  <input type="file" accept="image/*" onChange={handleProjectImageUpload} className="hidden" />
                                </label>
                                <button
                                  type="button"
                                  onClick={() => setProjectForm({ ...projectForm, image: '' })}
                                  className="px-3 py-1.5 rounded-xl bg-rose-500 text-white text-xs font-bold"
                                >
                                  Hapus
                                </button>
                              </div>
                            </div>
                          ) : (
                            <label className={`flex flex-col items-center justify-center h-28 rounded-2xl border-2 border-dashed cursor-pointer transition-colors ${
                              isDark ? 'border-slate-700 hover:border-[#FE7F2D] bg-slate-900/60' : 'border-[#D0D5DD] hover:border-[#FE7F2D] bg-[#EAECF0]/40'
                            }`}>
                              <UploadCloud className="w-6 h-6 text-[#FE7F2D] mb-1" />
                              <span className="text-xs font-bold">
                                {isUploadingImage ? 'Mengoptimalkan Gambar...' : 'Klik untuk Upload Gambar Karya'}
                              </span>
                              <span className={`text-[10px] ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`}>PNG, JPG, WEBP (Otomatis dikompres)</span>
                              <input type="file" accept="image/*" onChange={handleProjectImageUpload} className="hidden" />
                            </label>
                          )}
                        </div>

                        <input
                          type="text"
                          placeholder="Tools (pisahkan koma: Adobe Illustrator, Figma)"
                          value={projectForm.tools}
                          onChange={(e) => setProjectForm({ ...projectForm, tools: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/40 border-[#D0D5DD] text-[#000000]'}`}
                        />
                        <input
                          type="url"
                          placeholder="Link Proyek (https://s.id/...)"
                          value={projectForm.link}
                          onChange={(e) => setProjectForm({ ...projectForm, link: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/40 border-[#D0D5DD] text-[#000000]'}`}
                        />
                        <div className="flex gap-2">
                          {editingProject && (
                            <button
                              type="button"
                              onClick={() => {
                                setEditingProject(null);
                                setIsCustomCategory(false);
                                setCustomCategoryInput('');
                                setProjectForm({
                                  title: '', category: 'Logo Design & Identity', subtitle: '', description: '',
                                  tools: '', link: '', image: '', featured: true, accentColor: 'from-orange-500 to-amber-500', year: '2026', rate: '5.0'
                                });
                              }}
                              className="px-4 py-3 rounded-xl bg-slate-200 text-[#233D4D] font-bold text-xs"
                            >
                              Batal
                            </button>
                          )}
                          <button
                            type="submit"
                            disabled={isTranslating}
                            className="flex-1 py-3 rounded-xl bg-[#FE7F2D] text-white font-black text-xs"
                          >
                            {isTranslating ? 'Menerjemahkan & Menyimpan...' : (editingProject ? 'Update Karya' : 'Simpan Karya ke Cloud')}
                          </button>
                        </div>
                      </form>

                      <div className="lg:col-span-7 space-y-3">
                        {projects.map((p) => (
                          <div key={p.id} className={`p-4 rounded-2xl border flex items-center justify-between gap-4 ${isDark ? 'bg-[#1F1F2E] border-slate-800' : 'bg-white border-[#D0D5DD]'}`}>
                            <div>
                              <div className="text-xs font-bold text-[#FE7F2D]">{p.category} • {p.year}</div>
                              <div className={`font-bold text-sm ${isDark ? 'text-white' : 'text-[#000000]'}`}>{p.title}</div>
                              <div className={`text-xs line-clamp-1 ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`}>{p.subtitle}</div>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                              <button onClick={() => handleEditProject(p)} className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700"><Edit3 className="w-3.5 h-3.5" /></button>
                              <button onClick={() => handleDeleteProject(p.id)} className="p-2 rounded-lg bg-rose-500/10 text-rose-500 hover:bg-rose-500/20"><Trash2 className="w-3.5 h-3.5" /></button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 3: BLOGS CRUD */}
                  {cmsMenu === 'blogs' && (
                    <div className="grid lg:grid-cols-12 gap-6 animate-fade-up">
                      <form onSubmit={handleSaveBlog} className={`lg:col-span-5 p-6 rounded-3xl border space-y-4 ${isDark ? 'bg-[#1F1F2E] border-slate-800' : 'bg-white border-[#D0D5DD]'}`}>
                        <h3 className={`font-black text-base ${isDark ? 'text-white' : 'text-[#000000]'}`}>{editingBlog ? 'Edit Artikel Blog' : 'Tulis Artikel Blog'}</h3>
                        <input
                          type="text"
                          required
                          placeholder="Judul Artikel"
                          value={blogForm.title}
                          onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/40 border-[#D0D5DD] text-[#000000]'}`}
                        />
                        <div className="grid grid-cols-2 gap-2.5">
                          {/* Kategori Fleksibel Blog */}
                          <div>
                            {!isBlogCustomCategory ? (
                              <select
                                value={blogForm.category}
                                onChange={(e) => {
                                  if (e.target.value === '__NEW__') {
                                    setIsBlogCustomCategory(true);
                                    setBlogCustomCategoryInput('');
                                  } else {
                                    setBlogForm({ ...blogForm, category: e.target.value });
                                  }
                                }}
                                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-medium ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/40 border-[#D0D5DD] text-[#000000]'}`}
                              >
                                {blogCategories.map(cat => (
                                  <option key={cat} value={cat}>{cat}</option>
                                ))}
                                <option value="__NEW__" className="font-bold text-[#FE7F2D]">+ Tambah Kategori Baru...</option>
                              </select>
                            ) : (
                              <div className="flex items-center gap-1.5">
                                <input
                                  type="text"
                                  autoFocus
                                  required
                                  placeholder="Ketik Kategori Baru..."
                                  value={blogCustomCategoryInput}
                                  onChange={(e) => setBlogCustomCategoryInput(e.target.value)}
                                  className={`w-full px-3 py-2.5 rounded-xl border text-xs font-semibold focus:border-[#FE7F2D] ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/40 border-[#D0D5DD] text-[#000000]'}`}
                                />
                                <button
                                  type="button"
                                  onClick={() => {
                                    setIsBlogCustomCategory(false);
                                    setBlogCustomCategoryInput('');
                                  }}
                                  title="Kembali ke pilihan"
                                  className={`p-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-white border-[#D0D5DD] text-[#233D4D]'}`}
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            )}
                          </div>

                          <input
                            type="text"
                            placeholder="Waktu Baca (5 Menit)"
                            value={blogForm.readTime}
                            onChange={(e) => setBlogForm({ ...blogForm, readTime: e.target.value })}
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/40 border-[#D0D5DD] text-[#000000]'}`}
                          />
                        </div>

                        {/* Upload Cover Blog */}
                        <div className="space-y-1.5">
                          <label className={`block text-[11px] font-bold ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`}>
                            Gambar Sampul Blog (Cover)
                          </label>
                          {blogForm.image ? (
                            <div className="relative rounded-2xl overflow-hidden border border-[#D0D5DD] h-32 bg-[#EAECF0] group">
                              <img src={blogForm.image} alt="Cover Blog" className="w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                <label className="px-3 py-1.5 rounded-xl bg-[#FE7F2D] text-white text-xs font-bold cursor-pointer">
                                  Ganti Sampul
                                  <input type="file" accept="image/*" onChange={handleBlogCoverUpload} className="hidden" />
                                </label>
                                <button
                                  type="button"
                                  onClick={() => setBlogForm({ ...blogForm, image: '' })}
                                  className="px-3 py-1.5 rounded-xl bg-rose-500 text-white text-xs font-bold"
                                >
                                  Hapus
                                </button>
                              </div>
                            </div>
                          ) : (
                            <label className={`flex flex-col items-center justify-center h-24 rounded-2xl border-2 border-dashed cursor-pointer transition-colors ${
                              isDark ? 'border-slate-700 hover:border-[#FE7F2D] bg-slate-900/60' : 'border-[#D0D5DD] hover:border-[#FE7F2D] bg-[#EAECF0]/40'
                            }`}>
                              <UploadCloud className="w-5 h-5 text-[#FE7F2D] mb-1" />
                              <span className="text-xs font-bold">Upload Gambar Sampul Blog</span>
                              <input type="file" accept="image/*" onChange={handleBlogCoverUpload} className="hidden" />
                            </label>
                          )}
                        </div>

                        <textarea
                          rows={2}
                          placeholder="Ringkasan (Excerpt)"
                          value={blogForm.excerpt}
                          onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/40 border-[#D0D5DD] text-[#000000]'}`}
                        />

                        {/* Isi Artikel */}
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <label className={`text-[11px] font-bold ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`}>Isi Lengkap Artikel</label>
                            <label className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#FE7F2D]/15 text-[#FE7F2D] hover:bg-[#FE7F2D]/25 text-[11px] font-bold cursor-pointer transition-colors">
                              <ImageIcon className="w-3.5 h-3.5" />
                              <span>+ Sisipkan Gambar di Isi</span>
                              <input type="file" accept="image/*" onChange={handleBlogInlineImageUpload} className="hidden" />
                            </label>
                          </div>
                          <textarea
                            rows={6}
                            placeholder="Tulis isi artikel di sini..."
                            value={blogForm.content}
                            onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/40 border-[#D0D5DD] text-[#000000]'}`}
                          />
                        </div>

                        <div className="flex gap-2">
                          {editingBlog && (
                            <button
                              type="button"
                              onClick={() => {
                                setEditingBlog(null);
                                setIsBlogCustomCategory(false);
                                setBlogCustomCategoryInput('');
                                setBlogForm({
                                  title: '', category: 'Brand Strategy', date: new Date().toISOString().slice(0, 10),
                                  readTime: '5 Menit', status: 'Completed', image: '', excerpt: '', content: ''
                                });
                              }}
                              className="px-4 py-3 rounded-xl bg-slate-200 text-[#233D4D] font-bold text-xs"
                            >
                              Batal
                            </button>
                          )}
                          <button type="submit" disabled={isTranslating} className="flex-1 py-3 rounded-xl bg-[#FE7F2D] text-white font-black text-xs">
                            {isTranslating ? 'Menerjemahkan & Menyimpan...' : (editingBlog ? 'Update Artikel' : 'Terbitkan ke Cloud')}
                          </button>
                        </div>
                      </form>
                      <div className="lg:col-span-7 space-y-3">
                        {blogs.map((b) => (
                          <div key={b.id} className={`p-4 rounded-2xl border flex items-center justify-between gap-4 ${isDark ? 'bg-[#1F1F2E] border-slate-800' : 'bg-white border-[#D0D5DD]'}`}>
                            <div className="flex items-center gap-3 min-w-0">
                              {(b.image || b.translations?._coverImage) && (
                                <img
                                  src={b.image || b.translations?._coverImage}
                                  alt={b.title}
                                  className="w-12 h-12 rounded-xl object-cover shrink-0 border border-[#D0D5DD]"
                                />
                              )}
                              <div className="min-w-0">
                                <div className="text-xs text-emerald-500 font-bold">{b.category} • {b.date}</div>
                                <div className={`font-bold text-sm truncate ${isDark ? 'text-white' : 'text-[#000000]'}`}>{b.title}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                              <button onClick={() => handleEditBlog(b)} className="p-2 rounded-lg bg-slate-800 text-slate-200"><Edit3 className="w-3.5 h-3.5" /></button>
                              <button onClick={() => handleDeleteBlog(b.id)} className="p-2 rounded-lg bg-rose-500/10 text-rose-500"><Trash2 className="w-3.5 h-3.5" /></button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 4: RESUME CV CRUD */}
                  {cmsMenu === 'resume' && (
                    <div className="space-y-4 animate-fade-up">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setResumeSubTab('experience')}
                          className={`px-4 py-2 rounded-xl text-xs font-black ${
                            resumeSubTab === 'experience' ? 'bg-[#FE7F2D] text-white' : 'bg-slate-800 text-slate-300'
                          }`}
                        >
                          Pengalaman Kerja ({experience.length})
                        </button>
                        <button
                          onClick={() => setResumeSubTab('education')}
                          className={`px-4 py-2 rounded-xl text-xs font-black ${
                            resumeSubTab === 'education' ? 'bg-[#FE7F2D] text-white' : 'bg-slate-800 text-slate-300'
                          }`}
                        >
                          Pendidikan ({education.length})
                        </button>
                      </div>

                      {resumeSubTab === 'experience' ? (
                        <div className="grid lg:grid-cols-12 gap-6">
                          <form onSubmit={handleSaveExperience} className={`lg:col-span-5 p-6 rounded-3xl border space-y-4 ${isDark ? 'bg-[#1F1F2E] border-slate-800' : 'bg-white border-[#D0D5DD]'}`}>
                            <h3 className={`font-black text-base ${isDark ? 'text-white' : 'text-[#000000]'}`}>{editingExp ? 'Edit Pengalaman' : 'Tambah Pengalaman'}</h3>
                            <input
                              type="text"
                              required
                              placeholder="Posisi / Jabatan"
                              value={expForm.role}
                              onChange={(e) => setExpForm({ ...expForm, role: e.target.value })}
                              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/40 border-[#D0D5DD] text-[#000000]'}`}
                            />
                            <input
                              type="text"
                              required
                              placeholder="Nama Instansi / Perusahaan"
                              value={expForm.company}
                              onChange={(e) => setExpForm({ ...expForm, company: e.target.value })}
                              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/40 border-[#D0D5DD] text-[#000000]'}`}
                            />
                            <div className="grid grid-cols-2 gap-2.5">
                              <input
                                type="text"
                                placeholder="Jenis (Penuh Waktu / Magang)"
                                value={expForm.type}
                                onChange={(e) => setExpForm({ ...expForm, type: e.target.value })}
                                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/40 border-[#D0D5DD] text-[#000000]'}`}
                              />
                              <input
                                type="text"
                                placeholder="Periode (2022 - 2023)"
                                value={expForm.period}
                                onChange={(e) => setExpForm({ ...expForm, period: e.target.value })}
                                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/40 border-[#D0D5DD] text-[#000000]'}`}
                              />
                            </div>
                            <textarea
                              rows={3}
                              placeholder="Deskripsi Tugas"
                              value={expForm.description}
                              onChange={(e) => setExpForm({ ...expForm, description: e.target.value })}
                              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/40 border-[#D0D5DD] text-[#000000]'}`}
                            />
                            <button type="submit" className="w-full py-3 rounded-xl bg-[#FE7F2D] text-white font-black text-xs">
                              Simpan Pengalaman ke Cloud
                            </button>
                          </form>
                          <div className="lg:col-span-7 space-y-3">
                            {experience.map((exp) => (
                              <div key={exp.id} className={`p-4 rounded-2xl border flex items-center justify-between gap-4 ${isDark ? 'bg-[#1F1F2E] border-slate-800' : 'bg-white border-[#D0D5DD]'}`}>
                                <div>
                                  <div className="text-xs text-[#FE7F2D] font-bold">{exp.period} • {exp.company}</div>
                                  <div className={`font-bold text-sm ${isDark ? 'text-white' : 'text-[#000000]'}`}>{exp.role}</div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <button onClick={() => handleEditExperience(exp)} className="p-2 rounded-lg bg-slate-800 text-slate-200"><Edit3 className="w-3.5 h-3.5" /></button>
                                  <button onClick={() => handleDeleteExperience(exp.id)} className="p-2 rounded-lg bg-rose-500/10 text-rose-500"><Trash2 className="w-3.5 h-3.5" /></button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="grid lg:grid-cols-12 gap-6">
                          <form onSubmit={handleSaveEducation} className={`lg:col-span-5 p-6 rounded-3xl border space-y-4 ${isDark ? 'bg-[#1F1F2E] border-slate-800' : 'bg-white border-[#D0D5DD]'}`}>
                            <h3 className={`font-black text-base ${isDark ? 'text-white' : 'text-[#000000]'}`}>{editingEdu ? 'Edit Pendidikan' : 'Tambah Pendidikan'}</h3>
                            <select
                              value={eduForm.type}
                              onChange={(e) => setEduForm({ ...eduForm, type: e.target.value })}
                              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/40 border-[#D0D5DD] text-[#000000]'}`}
                            >
                              <option value="Formal">Formal</option>
                              <option value="Non-Formal">Non-Formal</option>
                            </select>
                            <input
                              type="text"
                              required
                              placeholder="Nama Institusi / Kampus"
                              value={eduForm.institution}
                              onChange={(e) => setEduForm({ ...eduForm, institution: e.target.value })}
                              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/40 border-[#D0D5DD] text-[#000000]'}`}
                            />
                            <input
                              type="text"
                              required
                              placeholder="Jurusan / Program"
                              value={eduForm.major}
                              onChange={(e) => setEduForm({ ...eduForm, major: e.target.value })}
                              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/40 border-[#D0D5DD] text-[#000000]'}`}
                            />
                            <input
                              type="text"
                              placeholder="Periode (2020 - 2024)"
                              value={eduForm.period}
                              onChange={(e) => setEduForm({ ...eduForm, period: e.target.value })}
                              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/40 border-[#D0D5DD] text-[#000000]'}`}
                            />
                            <textarea
                              rows={3}
                              placeholder="Deskripsi"
                              value={eduForm.description}
                              onChange={(e) => setEduForm({ ...eduForm, description: e.target.value })}
                              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/40 border-[#D0D5DD] text-[#000000]'}`}
                            />
                            <button type="submit" className="w-full py-3 rounded-xl bg-[#FE7F2D] text-white font-black text-xs">
                              Simpan Pendidikan ke Cloud
                            </button>
                          </form>
                          <div className="lg:col-span-7 space-y-3">
                            {education.map((edu) => (
                              <div key={edu.id} className={`p-4 rounded-2xl border flex items-center justify-between gap-4 ${isDark ? 'bg-[#1F1F2E] border-slate-800' : 'bg-white border-[#D0D5DD]'}`}>
                                <div>
                                  <div className="text-xs text-indigo-500 font-bold">{edu.type} • {edu.period}</div>
                                  <div className={`font-bold text-sm ${isDark ? 'text-white' : 'text-[#000000]'}`}>{edu.institution}</div>
                                  <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`}>{edu.major}</div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <button onClick={() => handleEditEducation(edu)} className="p-2 rounded-lg bg-slate-800 text-slate-200"><Edit3 className="w-3.5 h-3.5" /></button>
                                  <button onClick={() => handleDeleteEducation(edu.id)} className="p-2 rounded-lg bg-rose-500/10 text-rose-500"><Trash2 className="w-3.5 h-3.5" /></button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* TAB 5: PROFILE INFO */}
                  {cmsMenu === 'profile' && (
                    <form onSubmit={handleSaveProfileInfo} className={`p-6 rounded-3xl border space-y-4 animate-fade-up ${isDark ? 'bg-[#1F1F2E] border-slate-800' : 'bg-white border-[#D0D5DD]'}`}>
                      <h3 className={`font-black text-base ${isDark ? 'text-white' : 'text-[#000000]'}`}>Profil, Avatar Hero & Sampul About Me</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {/* Avatar Hero Upload */}
                        <div className={`flex items-center gap-4 p-4 rounded-2xl border ${isDark ? 'border-slate-700/60 bg-slate-900/40' : 'border-[#D0D5DD] bg-[#EAECF0]/50'}`}>
                          <div className={`w-16 h-16 rounded-2xl overflow-hidden border shrink-0 flex items-center justify-center ${isDark ? 'border-slate-600 bg-slate-950' : 'border-[#D0D5DD] bg-white'}`}>
                            <CleanCharacterAvatar
                              src={profile.avatar || "/avatar.png"}
                              alt="Preview Avatar Hero"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <span className={`text-xs font-bold block ${isDark ? 'text-slate-200' : 'text-[#000000]'}`}>Karakter Hero (Utama)</span>
                            <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FE7F2D] text-white text-xs font-bold cursor-pointer hover:bg-[#E86E20] transition-colors">
                              <UploadCloud className="w-3.5 h-3.5" />
                              <span>Upload Karakter Hero</span>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={async (e) => {
                                  const file = e.target.files?.[0];
                                  if (!file) return;
                                  try {
                                    const compressed = await compressImageToDataUrl(file, 800, 0.88);
                                    setProfile(prev => ({ ...prev, avatar: compressed }));
                                    showToast("Karakter Hero berhasil diperbarui!");
                                  } catch (err) {
                                    showToast("Gagal mengunggah gambar.", "error");
                                  }
                                }}
                                className="hidden"
                              />
                            </label>
                          </div>
                        </div>

                        {/* About Me Cover Upload */}
                        <div className={`flex items-center gap-4 p-4 rounded-2xl border ${isDark ? 'border-slate-700/60 bg-slate-900/40' : 'border-[#D0D5DD] bg-[#EAECF0]/50'}`}>
                          <div className={`w-24 h-16 rounded-2xl overflow-hidden border shrink-0 flex items-center justify-center bg-[#D6F83B] ${isDark ? 'border-slate-600' : 'border-[#D0D5DD]'}`}>
                            {profile.aboutCover && !aboutCoverFailed ? (
                              <img src={profile.aboutCover} alt="Sampul About Me" className="w-full h-full object-cover" />
                            ) : (
                              <span className="font-marker text-[10px] text-black text-center leading-tight px-1">FOCUS<br/>SKETCH</span>
                            )}
                          </div>
                          <div className="space-y-1.5">
                            <span className={`text-xs font-bold block ${isDark ? 'text-slate-200' : 'text-[#000000]'}`}>Sampul About Me</span>
                            <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FE7F2D] text-white text-xs font-bold cursor-pointer hover:bg-[#E86E20] transition-colors">
                              <UploadCloud className="w-3.5 h-3.5" />
                              <span>Upload Sampul About</span>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={async (e) => {
                                  const file = e.target.files?.[0];
                                  if (!file) return;
                                  try {
                                    const compressed = await compressImageToDataUrl(file, 1000, 0.88);
                                    setAboutCoverFailed(false);
                                    setProfile(prev => ({ ...prev, aboutCover: compressed }));
                                    showToast("Sampul About Me berhasil diperbarui!");
                                  } catch (err) {
                                    showToast("Gagal mengunggah sampul.", "error");
                                  }
                                }}
                                className="hidden"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className={`block text-xs font-bold mb-1 ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`}>Nama Lengkap</label>
                          <input
                            type="text"
                            value={profile.name}
                            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/40 border-[#D0D5DD] text-[#000000]'}`}
                          />
                        </div>
                        <div>
                          <label className={`block text-xs font-bold mb-1 ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`}>Email Resmi</label>
                          <input
                            type="email"
                            value={profile.email}
                            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/40 border-[#D0D5DD] text-[#000000]'}`}
                          />
                        </div>
                        <div>
                          <label className={`block text-xs font-bold mb-1 ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`}>Nomor Telepon / WhatsApp</label>
                          <input
                            type="text"
                            value={profile.phone}
                            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/40 border-[#D0D5DD] text-[#000000]'}`}
                          />
                        </div>
                        <div>
                          <label className={`block text-xs font-bold mb-1 ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`}>Alamat Domisili (Footer)</label>
                          <input
                            type="text"
                            value={profile.address}
                            onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/40 border-[#D0D5DD] text-[#000000]'}`}
                          />
                        </div>
                      </div>
                      <div>
                        <label className={`block text-xs font-bold mb-1 ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`}>Bio Singkat</label>
                        <textarea
                          rows={4}
                          value={profile.bio}
                          onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-[#EAECF0]/40 border-[#D0D5DD] text-[#000000]'}`}
                        />
                      </div>
                      <button type="submit" disabled={isTranslating} className="px-6 py-3 rounded-xl bg-[#FE7F2D] text-white font-black text-xs shadow-md">
                        {isTranslating ? 'Menyimpan...' : 'Simpan Profil ke Cloud Supabase'}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* MODAL DETAIL PROYEK */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
          <div className={`border rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-up ${
            isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-[#D0D5DD] text-[#000000]'
          }`}>
            <div className={`h-48 sm:h-52 bg-gradient-to-br ${activeProjectModal.accentColor} p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden`}>
              {activeProjectModal.image && (
                <img
                  src={activeProjectModal.image}
                  alt={getLocalized(activeProjectModal, 'title')}
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-75"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
              <button
                onClick={() => setActiveProjectModal(null)}
                className="relative z-10 self-end p-2 rounded-full bg-black/60 text-white hover:bg-black"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="relative z-10">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white/90 bg-black/60 border border-white/15 px-2.5 py-1 rounded-full">
                  {activeProjectModal.category} • {activeProjectModal.year}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1.5 drop-shadow">
                  {getLocalized(activeProjectModal, 'title')}
                </h3>
              </div>
            </div>

            <div className="p-5 sm:p-6 space-y-4">
              <div className="text-xs font-bold text-[#FE7F2D]">
                {getLocalized(activeProjectModal, 'subtitle')}
              </div>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-[#233D4D]'}`}>
                {getLocalized(activeProjectModal, 'description')}
              </p>

              <div>
                <div className={`text-xs font-bold mb-2 ${isDark ? 'text-slate-400' : 'text-[#233D4D]'}`}>{t.toolsTech}</div>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.tools.map((tool, i) => (
                    <span key={i} className={`px-3 py-1 rounded-lg border text-xs font-semibold ${
                      isDark ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-[#EAECF0] border-[#D0D5DD] text-[#233D4D]'
                    }`}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`pt-4 border-t flex justify-end gap-3 ${isDark ? 'border-slate-800' : 'border-[#D0D5DD]'}`}>
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold ${
                    isDark ? 'bg-slate-800 text-white' : 'bg-[#EAECF0] text-[#233D4D]'
                  }`}
                >
                  {t.closeBtn}
                </button>
                {activeProjectModal.link && (
                  <a
                    href={activeProjectModal.link}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-[#FE7F2D] text-white text-xs font-bold flex items-center gap-1.5 hover:bg-[#E86E20]"
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

      {/* MODAL BACA ARTIKEL BLOG */}
      {activeBlogModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className={`border rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl max-h-[90vh] overflow-y-auto animate-fade-up ${
            isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-[#D0D5DD] text-[#000000]'
          }`}>
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#FE7F2D]/10 text-[#FE7F2D] text-xs font-bold border border-[#FE7F2D]/20">
                {activeBlogModal.category}
              </span>
              <button
                onClick={() => setActiveBlogModal(null)}
                className={`p-2 rounded-full ${isDark ? 'bg-slate-800 text-white' : 'bg-[#EAECF0] text-[#233D4D]'}`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <h2 className="text-2xl font-black leading-snug">{getLocalized(activeBlogModal, 'title')}</h2>
            <div className={`text-xs flex items-center gap-4 border-b pb-4 font-semibold ${
              isDark ? 'border-slate-800 text-slate-400' : 'border-[#D0D5DD] text-[#233D4D]'
            }`}>
              <span>{t.byAuthor} {profile.name}</span>
              <span>•</span>
              <span>{activeBlogModal.date}</span>
              <span>•</span>
              <span>{activeBlogModal.readTime}</span>
            </div>

            {(activeBlogModal.image || activeBlogModal.translations?._coverImage) && (
              <div className="rounded-2xl overflow-hidden border border-[#D0D5DD] max-h-80">
                <img
                  src={activeBlogModal.image || activeBlogModal.translations?._coverImage}
                  alt={getLocalized(activeBlogModal, 'title')}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className={`text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-slate-200' : 'text-[#233D4D]'
            }`}>
              {renderRichBlogContent(getLocalized(activeBlogModal, 'content'))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}