import React from "react";
import { profileData } from "../data/atmacitaData";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

const ProfilePage: React.FC = () => {
  const accentColor = "#F7C71F";

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative py-35 text-white">
        <Image
          src="/images/bg-about.jpg"
          alt="Sinergi Atmacita Utama"
          fill
          className="object-cover pointer-events-none select-none"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-6">
            Tentang Sinergi Atmacita Utama
          </h1>
          <p className="text-xl max-w-6xl mx-auto text-blue-100">
            PT Sinergi Atmacita Utama adalah sebuah perusahaan yang bergerak di
            bidang jasa konsultasi dan pengembangan sumber daya manusia (SDM)
            berbasis psikologi. Perusahaan ini berfokus pada peningkatan
            kompetensi individu dan organisasi melalui berbagai layanan
            profesional yang terintegrasi. Atmacita berkomitmen untuk memberikan
            pelayanan dan kontribusi terbaiknya bagi seluruh klien.
          </p>
        </div>
      </section>
      {/* 2. Visi & Misi Section */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="bg-gray-50 p-8 rounded-2xl border-l-8"
            style={{ borderColor: accentColor }}
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Visi Kami</h2>
            <p className="text-gray-700 leading-relaxed text-lg italic">
              &quot;{profileData.vision}&quot;
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Misi Kami</h2>
            <ul className="space-y-4">
              {profileData.missions.map((mission, index) => (
                <li key={index} className="flex items-start">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-sm font-bold mt-1 mr-3">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{mission}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* 3. Core Values Section */}
      <section className="relative py-20 bg-blue-900 text-white">
        <Image
          src="/images/bg-about2.jpg"
          alt="Sinergi Atmacita Utama"
          fill
          className="object-cover pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Nilai Utama Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {profileData.values.map((val, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-blue-900/30 backdrop-blur-md border border-blue-700 hover:border-yellow-400 duration-300 transform hover:-translate-y-1 transition"
              >
                <div
                  className="mb-4 flex justify-center"
                  style={{ color: accentColor }}
                >
                  <val.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">{val.title}</h3>
                <p className="text-blue-100 text-sm">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Elemen dekoratif abstrak untuk menarik mata ke tengah */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4 leading-tight">
            Langkah Kecil Hari Ini untuk <br />
            <span className="text-yellow-400">Transformasi Besar</span> Masa
            Depan.
          </h2>
          <p className="text-gray-600 mb-10 text-lg max-w-2xl mx-auto">
            Bergabunglah dengan profesional dan organisasi yang telah berkembang
            bersama layanan psikologi dan pelatihan Atmacita.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center">
            <Link
              href="/contact"
              className="group px-10 py-4 rounded-full font-bold text-blue-950 flex items-center shadow-lg hover:shadow-yellow-400/20 transition-all hover:scale-105 active:scale-95"
              style={{ backgroundColor: accentColor }}
            >
              Mulai Konsultasi
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-400 italic">
            * Respon cepat tim kami tersedia di jam operasional.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
