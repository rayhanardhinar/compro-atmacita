import { Briefcase, Heart, BookOpen } from "lucide-react";
import Link from "next/link";

const companyData = {
  name: "Sinergi Atmacita Utama",
  tagline: "Sinergi Kesejahteraan Jiwa dan Kompetensi Unggul",
  description:
    "Sinergi Atmacita Utama adalah perusahaan konsultan yang berfokus ganda pada peningkatan kualitas sumber daya manusia (SDM). Kami menggabungkan keahlian psikologis mendalam dengan program pelatihan dan sertifikasi berstandar tinggi untuk mencapai potensi individu dan organisasi secara menyeluruh.",
  vision:
    "Menjadi mitra strategis terdepan dalam membentuk individu dan organisasi yang berdaya saing tinggi, didukung oleh keseimbangan mental yang sehat dan kompetensi yang teruji.",
};

const services = [
  {
    icon: Heart,
    title: "Divisi Psikologi",
    description:
      "Menyediakan layanan asesmen psikologis, konseling individu, konseling karir, dan program Employee Assistance Program (EAP). Fokus kami adalah memahami dinamika internal dan memfasilitasi pertumbuhan mental yang stabil dan produktif.",
    slug: "/services/psychology",
    color: "text-red-500 bg-red-100",
  },
  {
    icon: BookOpen,
    title: "Divisi Training & Certification",
    description:
      "Menyelenggarakan pelatihan keterampilan teknis dan non-teknis (soft skills), serta program sertifikasi profesi yang diakui. Kami memastikan SDM memiliki kompetensi yang relevan dan terkini sesuai tuntutan industri.",
    slug: "/services/training",
    color: "text-green-500 bg-green-100",
  },
];

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <header className="bg-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-extrabold mb-4">{companyData.name}</h1>
            <p className="text-xl italic font-light">{companyData.tagline}</p>
          </div>
        </header>

        {/* About Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-blue-400 inline-block pb-1">
              Pendahuluan
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {companyData.description}
            </p>

            <div className="p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg shadow-inner">
              <h3 className="text-2xl font-semibold text-yellow-800 mb-2">
                Visi Kami
              </h3>
              <p className="text-gray-700 italic">{companyData.vision}</p>
            </div>
          </div>
        </section>

        {/* Divisi Fokus (Key Services) */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Dua Pilar Kekuatan Kami
            </h2>
            <p className="text-lg text-gray-500 mb-12">
              Kami beroperasi melalui dua divisi utama yang saling melengkapi.
            </p>

            <div className="grid md:grid-cols-2 gap-10">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-8 border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
                >
                  <div
                    className={`p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 ${service.color}`}
                  >
                    <service.icon size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
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

        {/* Why Choose Us Section (Optional) */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
              Mengapa Memilih Kami?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Item 1 */}
              <div className="p-6 text-center">
                <Briefcase className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <h4 className="text-xl font-semibold mb-2">
                  Pendekatan Holistik
                </h4>
                <p className="text-gray-600">
                  Menggabungkan aspek psikologis dan kompetensi hard skill untuk
                  hasil yang seimbang.
                </p>
              </div>
              {/* Item 2 */}
              <div className="p-6 text-center">
                <Briefcase className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <h4 className="text-xl font-semibold mb-2">Berbasis Bukti</h4>
                <p className="text-gray-600">
                  Setiap program didasarkan pada riset ilmiah dan standar
                  profesional terkini.
                </p>
              </div>
              {/* Item 3 */}
              <div className="p-6 text-center">
                <Briefcase className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <h4 className="text-xl font-semibold mb-2">
                  Sertifikasi Kompeten
                </h4>
                <p className="text-gray-600">
                  Program pelatihan yang menghasilkan sertifikat yang diakui di
                  industri.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer bisa ditambahkan di luar komponen main, atau sebagai komponen terpisah */}
      </main>
    </>
  );
}
