import {
  CheckCircle,
  Lightbulb,
  TrendingUp,
  LucideIcon,
  ShieldCheck,
  HeartHandshake,
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
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface CoreValue {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface companyData {
  name: string;
  tagline: string;
  description: string;
  vision: string;
  missions: string[];
  values: CoreValue[];
  whyUs: string[];
}

export const companyData: companyData = {
  name: "Sinergi Atmacita Utama",
  tagline: "Sinergi Kesejahteraan Jiwa dan Kompetensi Unggul",
  description:
    "Sinergi Atmacita Utama adalah perusahaan konsultan yang berfokus ganda pada peningkatan kualitas sumber daya manusia (SDM). Kami menggabungkan keahlian psikologis mendalam dengan program pelatihan dan sertifikasi berstandar tinggi untuk mencapai potensi individu dan organisasi secara menyeluruh.",
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
  whyUs: [
    "Kurikulum Berbasis Praktik",
    "Tim Ahli Psikolog & Trainer Berpengalaman",
    "Sertifikasi Resmi & Terakreditasi",
    "Pendekatan Personal & Custom",
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
    icon: Lightbulb,
    title: "Pendekatan Holistik",
    description:
      "Menggabungkan aspek psikologis (mental) dan kompetensi hard skill (profesional) untuk hasil yang seimbang dan berkelanjutan.",
  },
  {
    icon: CheckCircle,
    title: "Berbasis Bukti Ilmiah",
    description:
      "Setiap program dan asesmen kami didasarkan pada riset ilmiah terkini dan standar profesional yang berlaku.",
  },
  {
    icon: TrendingUp,
    title: "Sertifikasi Kompeten",
    description:
      "Program pelatihan kami menghasilkan sertifikat yang diakui, memvalidasi keahlian anda di pasar industri.",
  },
];
