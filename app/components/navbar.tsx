"use client";
import Link from "next/link";
// Import usePathname dari navigation untuk mendapatkan path saat ini
import { usePathname } from "next/navigation";
import React from "react";

// Definisikan tipe untuk item navigasi
interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Profil", href: "/profile" },
  { name: "Layanan Psikologi", href: "/services/psychology" },
  { name: "Pelatihan & Sertifikasi", href: "/services/training" },
  { name: "Kontak", href: "/contact" },
];

const Navbar: React.FC = () => {
  // 1. Dapatkan path URL saat ini
  const currentPath = usePathname();

  // Fungsi untuk menentukan apakah link adalah active
  const isActive = (href: string) => {
    // Untuk path root ("/") harus diperiksa secara eksklusif agar tidak selalu aktif
    if (href === "/") {
      return currentPath === href;
    }
    // Untuk path lainnya, cek apakah path saat ini dimulai dengan href item navbar
    // Ini penting jika Anda memiliki sub-path (misal: /services/psychology/detail)
    return currentPath.startsWith(href);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link
              href="/"
              className="shrink-0 flex items-center text-2xl font-bold text-blue-800"
            >
              Sinergi Atmacita Utama
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navItems.map((item) => {
              // 2. Tentukan kelas aktif
              const activeClass = isActive(item.href)
                ? "border-blue-600 text-blue-800 font-bold" // Styling jika AKTIF
                : "border-transparent text-gray-700 hover:border-blue-500 hover:text-blue-800"; // Styling jika TIDAK AKTIF

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  // Gabungkan kelas default dengan kelas aktif/tidak aktif
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition duration-150 ${activeClass}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
