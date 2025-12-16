import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Profil", href: "/profile" },
    { name: "Layanan Psikologi", href: "/services/psychology" },
    { name: "Pelatihan & Sertifikasi", href: "/services/training" },
    { name: "Kontak", href: "/contact" },
  ];

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
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-700 hover:border-blue-500 hover:text-blue-800 transition duration-150"
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* Tambahkan Hamburger menu untuk mobile di sini jika diperlukan */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
