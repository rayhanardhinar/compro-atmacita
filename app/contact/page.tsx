import React from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { contactData } from "../data/atmacitaData";

const accentColor = "#F7C71F";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Header Section */}
      <section className="bg-blue-900 py-20 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Hubungi Kami
        </h1>
        <p className="text-blue-100 max-w-2xl mx-auto px-4">
          Punya pertanyaan tentang layanan psikologi atau sertifikasi kami? Tim
          Atmacita siap membantu Anda.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* LEFT COLUMN: Contact Info & Maps */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                Informasi Kontak
              </h2>
              <div className="space-y-6">
                <ContactItem
                  icon={<MapPin />}
                  title="Alamat"
                  desc={contactData.address}
                />
                <ContactItem
                  icon={<Phone />}
                  title="Telepon"
                  desc={contactData.phone}
                />
                <ContactItem
                  icon={<Mail />}
                  title="Email"
                  desc={contactData.email}
                />
              </div>
            </div>

            {/* Jam Operasional Card */}
            <div
              className="bg-blue-50 p-6 rounded-2xl border-l-4"
              style={{ borderColor: accentColor }}
            >
              <div className="flex items-center mb-4 text-blue-900">
                <Clock className="mr-2 w-5 h-5" />
                <h3 className="font-bold text-lg">Jam Operasional</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                {contactData.workingHours.map((item, i) => (
                  <li
                    key={i}
                    className="flex justify-between border-b border-blue-100 pb-1"
                  >
                    <span>{item.day}</span>
                    <span className="font-semibold text-blue-900">
                      {item.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Peta Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 border border-gray-200">
              <iframe
                src={contactData.mapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                Kirim Pesan
              </h3>
              <p className="text-gray-500 mb-8">
                Isi formulir di bawah ini, tim kami akan menghubungi Anda dalam
                1x24 jam.
              </p>

              <form className="grid md:grid-cols-2 gap-6 text-blue-900 font-bold">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="name@email.com"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Subjek
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-gray-700"
                    defaultValue=""
                  >
                    {/* Option Default / Placeholder */}
                    <option value="" disabled hidden>
                      Pilih layanan Anda...
                    </option>

                    {/* Daftar Layanan */}
                    <option value="kerjasama">Kerja Sama Instansi</option>
                    <option value="psikologi">Layanan Psikologi</option>
                    <option value="sertifikasi">Sertifikasi & Pelatihan</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Pesan
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="Tuliskan pesan Anda di sini..."
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full md:w-auto px-10 py-4 rounded-xl font-bold text-blue-900 flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg"
                    style={{ backgroundColor: accentColor }}
                  >
                    <Send size={18} />
                    Kirim Pesan Sekarang
                  </button>
                </div>
              </form>
            </div>

            {/* WhatsApp Quick Action (Tambahan Bagus) */}
            <div className="mt-8 flex items-center justify-center p-6 bg-green-50 rounded-2xl border border-green-100">
              <MessageCircle className="text-green-600 mr-3 w-8 h-8" />
              <div>
                <p className="text-sm text-green-800">
                  Butuh respon lebih cepat?
                </p>
                <a
                  href={`https://wa.me/${contactData.whatsapp}`}
                  className="font-bold text-green-700 text-lg hover:underline"
                >
                  Chat via WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sub-komponen untuk item kontak agar rapi
function ContactItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-blue-900">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
