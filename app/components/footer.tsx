// components/Footer.tsx
import Link from "next/link";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

// Data Navigasi (sama dengan yang digunakan di Navbar)
const navItems = [
  { name: "Home", href: "/" },
  { name: "Profil", href: "/profile" },
  { name: "Layanan Psikologi", href: "/services/psychology" },
  { name: "Pelatihan & Sertifikasi", href: "/services/training" },
  { name: "Kontak", href: "/contact" },
];

// Data Kontak
const contactInfo = [
  {
    icon: MapPin,
    text: "Jl. Sinergi No. 10, Jakarta Selatan",
    href: "/contact",
  },
  { icon: Phone, text: "+62 21 555 1234", href: "tel:+62215551234" },
  {
    icon: Mail,
    text: "info@sinergiatmacita.com",
    href: "mailto:info@sinergiatmacita.com",
  },
];

// Data Media Sosial
const socialMedia = [
  {
    icon: Instagram,
    href: "https://instagram.com/sinergi_atmacita",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/sinergi-atmacita",
    label: "LinkedIn",
  },
  {
    icon: Facebook,
    href: "https://facebook.com/sinergiatmacita",
    label: "Facebook",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6 border-t-4 border-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Konten Utama Footer (Grid 3 Kolom) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-8 pb-8 border-b border-gray-700">
          {/* Kolom 1: Logo dan Deskripsi Singkat */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              Sinergi Atmacita Utama
            </h3>
            <p className="text-sm text-gray-400">
              Sinergi Kesejahteraan Jiwa dan Kompetensi Unggul. Kami berkomitmen
              menyediakan layanan psikologis dan pelatihan profesional terbaik.
            </p>
          </div>

          {/* Kolom 2: Tautan Cepat (Quick Links) */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-white">
              Tautan Cepat
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-blue-400 transition duration-150 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Kontak Kami */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-white">
              Hubungi Kami
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((item) => (
                <li key={item.text} className="flex items-center">
                  <item.icon className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-blue-400 transition duration-150 text-sm"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bagian Bawah Footer (Copyright & Social Media) */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center pt-4">
          {/* Copyright */}
          <p className="text-sm text-gray-500 order-2 md:order-1 mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} Sinergi Atmacita Utama. Hak Cipta
            Dilindungi.
          </p>

          {/* Ikon Media Sosial */}
          <div className="flex space-x-4 order-1 md:order-2">
            {socialMedia.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition duration-150"
                aria-label={item.label}
              >
                <item.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
