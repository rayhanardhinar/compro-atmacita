// app/contact/page.tsx
import { Mail, Phone, MapPin, LucideIcon } from "lucide-react";
import React from "react";

// 1. Definisikan Interface untuk Props ContactInfo
interface ContactInfoProps {
  icon: LucideIcon; // Icon dari lucide-react
  title: string;
  value: string;
}

// 2. Komponen Pembantu (ContactInfo) dengan TypeScript
const ContactInfo: React.FC<ContactInfoProps> = ({
  icon: Icon,
  title,
  value,
}) => (
  <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
    <Icon className="w-6 h-6 text-blue-600 mr-4" />
    <div>
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <p className="text-gray-600">{value}</p>
    </div>
  </div>
);

// 3. Halaman Utama (ContactPage)
const ContactPage: React.FC = () => {
  // Catatan: Next.js akan memperingatkan Anda untuk menggunakan state untuk form input,
  // tetapi untuk tampilan statis, kode ini sudah benar.

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Hubungi Kami
        </h1>
        <div className="space-y-6">
          <ContactInfo
            icon={MapPin}
            title="Alamat Kantor Pusat"
            value="Jl. Sinergi No. 10, Jakarta Selatan, Indonesia."
          />
          <ContactInfo icon={Phone} title="Telepon" value="+62 21 555 1234" />
          <ContactInfo
            icon={Mail}
            title="Email"
            value="info@sinergiatmacita.com"
          />
        </div>

        <div className="mt-12 p-8 bg-gray-100 rounded-lg shadow-inner">
          <h2 className="text-2xl font-semibold mb-4">Kirim Pesan Langsung</h2>
          {/* Formulir Kontak Sederhana */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email Anda"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Pesan Anda"
              // PROSES FIX ERROR: rows sekarang bernilai number 4, bukan string "4"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
