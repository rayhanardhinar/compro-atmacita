"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { profileData, services, features } from "./data/atmacitaData";

const HomePage: React.FC = () => {
  return (
    <>
      <main className="min-h-screen">
        <header className="min-h-screen bg-white pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
                {profileData.tagline}
              </p>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Menciptakan SDM Unggul
                <span className="block text-blue-600">
                  dari Dalam dan Luar.
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                {profileData.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services/psychology"
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                >
                  Lihat Layanan Utama
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-white border border-gray-300 text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition duration-300"
                >
                  Hubungi Konsultan
                </Link>
              </div>
            </div>

            {/* Image Placeholder / Slider (dengan perbaikan Image Component) */}
            <div className="relative aspect-video bg-gray-200 rounded-xl shadow-2xl overflow-hidden">
              <Image
                src="/images/hero-image.jpg"
                alt="Ilustrasi Sinergi Psikologi dan Pelatihan"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xl font-medium"></div>
            </div>
          </div>
        </header>

        {/* 2. Divisi Fokus (Key Services) - Tampilan Kartu yang Diperbarui */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Dua Pilar Kekuatan Kami
            </h2>
            <p className="text-lg text-gray-500 mb-12">
              Kami beroperasi melalui dua divisi utama yang saling melengkapi.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`p-10 border-t-8 ${service.border} bg-white rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 text-left`}
                >
                  <div
                    className={`p-3 rounded-xl flex items-center justify-start mb-6 overflow-hidden`}
                  >
                    {/* Mengganti <service.icon> dengan Image Component */}
                    <Image
                      src={service.icon}
                      alt={`Logo ${service.title}`}
                      width={service.logoWidth}
                      height={service.logoHeight}
                      style={{ objectFit: "contain" }} // Agar logo tidak terpotong
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                  </div>
                  <Link
                    href={service.slug}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-150"
                  >
                    Pelajari Lebih Lanjut
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Why Choose Us Section - Tampilan Fitur List yang Clean */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Header Section */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
                Mengapa Memilih Atmacita?
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Kami mengintegrasikan ilmu psikologi dengan kebutuhan industri
                untuk menciptakan SDM yang unggul dan kompeten.
              </p>
              {/* Garis Aksen Kuning Atmacita */}
              <div className="h-1.5 w-20 mx-auto mt-6 rounded-full bg-yellow-400"></div>
            </div>

            {/* Grid Card Section */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                // Karena iconName adalah komponen (LucideIcon), kita alias-kan ke Icon (Huruf Besar)
                const Icon = feature.iconName;

                return (
                  <div
                    key={index}
                    className="group p-8 bg-white border border-gray-100 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-100"
                  >
                    <div className="w-16 h-16 mx-auto mb-6 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <Icon
                        size={32}
                        strokeWidth={1.5}
                        className="transition-colors duration-300 group-hover:text-white text-yellow-400"
                      />
                    </div>

                    <h4 className="text-xl font-bold mb-3 text-blue-900 group-hover:text-blue-600 transition-colors text-center">
                      {feature.title}
                    </h4>

                    <p className="text-gray-600 text-sm leading-relaxed text-center">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
