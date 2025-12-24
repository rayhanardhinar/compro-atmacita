import {
  TrendingUp,
  LucideIcon,
  ShieldCheck,
  HeartHandshake,
  BookOpenCheck,
  UserCheck,
  FileBadge,
  Settings2,
} from "lucide-react";

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  slug: string;
  color: string;
  border: string;
  logoWidth: number;
  logoHeight: number;
}

export interface FeatureItem {
  iconName: LucideIcon;
  title: string;
  description: string;
}

export interface CoreValue {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface profileData {
  name: string;
  tagline: string;
  vision: string;
  missions: string[];
  values: CoreValue[];
}

export const profileData: profileData = {
  name: "Sinergi Atmacita Utama",
  tagline: "Sinergi Kesejahteraan Jiwa dan Kompetensi Unggul",
  vision:
    "Menjadi mitra strategis terpercaya dalam pengembangan kompetensi sumber daya manusia Indonesia melalui pelatihan dan sertifikasi yang berkualitas, inovatif, dan berstandar nasional maupun internasional.",
  missions: [
    "Memberikan layanan pelatihan dan sertifikasi yang kredibel, cepat, dan tranparan.",
    "Menghadirkan metode pembelajaran interaktif dan teknologi digital dalam setiap program pelatihan.",
    "Menjalin kemitraan strategis dengan perusahaan, institusi pendidikan, dan asosiasi profesi untuk memperluas dampak positif terhadap pengembangan SDM Indonesia.",
    "Mengedepankan layanan berkualitas, inovasi, dan etika kerja dalam setiap aspek operasional.",
  ],
  values: [
    {
      icon: ShieldCheck,
      title: "Integritas",
      description:
        "Menjunjung tinggi etika profesional dalam setiap layanan psikologi dan pelatihan.",
    },
    {
      icon: TrendingUp,
      title: "Inovasi",
      description:
        "Terus berkembang mengikuti tren industri untuk memberikan materi yang up-to-date.",
    },
    {
      icon: HeartHandshake,
      title: "Empati",
      description:
        "Memahami kebutuhan personal dan organisasi secara mendalam.",
    },
  ],
};

export const services: ServiceItem[] = [
  {
    icon: "/images/logo-psi.png", // Path gambar kustom
    title: "Divisi Psikologi",
    description:
      "Layanan asesmen, konseling individu & karir, serta Employee Assistance Program (EAP) untuk pertumbuhan mental yang stabil dan produktif.",
    slug: "/services/psychology",
    color: "text-red-600 bg-red-50",
    border: "border-yellow-500",
    logoWidth: 150,
    logoHeight: 150,
  },
  {
    icon: "/images/logo-training.png", // Path gambar kustom
    title: "Divisi Training & Certification",
    description:
      "Pelatihan keterampilan teknis/non-teknis (soft skills) dan program sertifikasi profesi berstandar tinggi yang diakui industri.",
    slug: "/services/training",
    color: "text-green-600 bg-green-50",
    border: "border-orange-500",
    logoWidth: 100,
    logoHeight: 100,
  },
];

export const features: FeatureItem[] = [
  {
    title: "Kurikulum Praktis",
    description:
      "Materi dirancang untuk diaplikasikan langsung dalam dunia kerja, mengutamakan simulasi dan studi kasus nyata.",
    iconName: BookOpenCheck,
  },
  {
    title: "Tenaga Ahli Profesional",
    description:
      "Didukung oleh tim Psikolog dan Trainer bersertifikat yang memiliki jam terbang tinggi di industri.",
    iconName: UserCheck,
  },
  {
    title: "Sertifikasi Resmi",
    description:
      "Program kami terakreditasi, memberikan nilai tambah yang diakui secara nasional bagi karir Anda.",
    iconName: FileBadge,
  },
  {
    title: "Pendekatan Personal",
    description:
      "Layanan yang fleksibel dan dapat disesuaikan (custom) dengan kebutuhan spesifik individu atau organisasi.",
    iconName: Settings2,
  },
];

export const contactData = {
  address: "Perum Graha Amerta Bunder Blok P-13, Gresik, Jawa Timur",
  phone: "+62 12345678",
  email: "atmapsikologi@gmail.com",
  whatsapp: "+62 812 3456 7890",
  mapsUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.551923087991!2d112.6075021758908!3d-7.177678692827265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77ff5cbe9344a9%3A0xcfb7d0fb74474b80!2sGraha%20Amerta%20Bunder%20P13!5e0!3m2!1sid!2sid!4v1766394918682!5m2!1sid!2sid",
  workingHours: [
    { day: "Senin - Jumat", time: "08:00 - 16:00" },
    { day: "Sabtu", time: "09:00 - 14:00" },
    { day: "Minggu", time: "Tutup" },
  ],
};
