import React from "react";
import {
  ClipboardCheck,
  UserRound,
  GraduationCap,
  Briefcase,
  BrainCircuit,
  HeartHandshake,
  Users,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";

// 1. Definisi Interface untuk Type Safety
interface ServiceCategoryProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  accentColor: string;
}

// 2. Komponen Kecil untuk Kartu Kategori
const ServiceCategoryCard: React.FC<ServiceCategoryProps> = ({
  icon: Icon,
  title,
  items,
  accentColor,
}) => (
  <div className="group p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
    <div
      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-6 ${accentColor}`}
    >
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <ul className="space-y-3 grow">
      {items.map((item, idx) => (
        <li
          key={idx}
          className="text-gray-600 flex items-start text-sm md:text-base"
        >
          <CheckCircle2 className="mr-2 w-5 h-5 text-green-500 shrink-0 mt-0.5" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

// 3. Halaman Utama
const PsychologyServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Header */}
      <section className="relative py-24 bg-blue-950 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/20 skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center md:text-left">
          <span className="inline-block px-4 py-1.5 bg-yellow-400 text-blue-950 font-bold text-sm rounded-full mb-6">
            ATMACITA CONSULTING [cite: 1]
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Layanan Psikotes & <br />
            <span className="text-yellow-400">Pengembangan SDM</span>
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl leading-relaxed">
            Meningkatkan kompetensi individu dan organisasi melalui layanan
            profesional berbasis psikologi yang terintegrasi dan kredibel[cite:
            5].
          </p>
        </div>
      </section>

      {/* Section: Layanan Psikotes */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
              Layanan Psikotes
            </h2>{" "}
            [cite: 47]
            <p className="text-gray-500">
              Asesmen mendalam untuk berbagai kebutuhan sektor.
            </p>
          </div>
          <div className="h-1 w-24 bg-red-600 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCategoryCard
            icon={Briefcase}
            title="Industri"
            items={["Seleksi Karyawan", "Evaluasi Jabatan", "Pemetaan Potensi"]}
            accentColor="bg-blue-600"
          />
          <ServiceCategoryCard
            icon={GraduationCap}
            title="Pendidikan"
            items={[
              "Tes Minat Bakat",
              "Tes Penjurusan",
              "Tes Inteligensi",
              "Seleksi Guru & Karyawan",
            ]}
            accentColor="bg-red-600"
          />
          <ServiceCategoryCard
            icon={UserRound}
            title="Umum"
            items={[
              "Tes Potensi Diri",
              "Analisis Karakter",
              "Eksplorasi Bakat",
            ]}
            accentColor="bg-yellow-500"
          />
        </div>
      </section>

      {/* Section: Konseling & Psikoterapi */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Konseling & Psikoterapi [cite: 72]
            </h2>
            <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Konseling Karir", icon: BrainCircuit, cite: 74 },
              { label: "Bimbingan Konseling", icon: HeartHandshake, cite: 76 },
              { label: "Konseling Keluarga", icon: Users, cite: 80 },
              { label: "Konseling Anak", icon: ClipboardCheck, cite: 81 },
            ].map((item, i) => (
              <div
                key={i}
                className="group text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-gray-800">{item.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-linear-to-r from-blue-900 to-blue-800 rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-400 rounded-full"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Siap Mengembangkan Potensi Anda?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Atmacita berkomitmen memberikan pelayanan terbaik bagi seluruh
              klien dalam mencapai pertumbuhan yang maksimal[cite: 6].
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-yellow-400 text-blue-950 px-10 py-4 rounded-full text-lg font-bold hover:bg-white transition-all transform hover:scale-105 shadow-xl"
              >
                Hubungi Kami [cite: 33]
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PsychologyServicesPage;
