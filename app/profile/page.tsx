import { companyData } from "../data/atmacitaData";

export default function ProfilePage() {
  const accentColor = "#F7C71F";

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="bg-blue-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-6">Tentang Atmacita</h1>
          <p className="text-xl max-w-2xl mx-auto text-blue-100">
            Mitra strategis dalam pengembangan mental dan profesional,
            menjembatani potensi diri dengan kesuksesan karir.
          </p>
        </div>
      </section>

      {/* 2. Visi & Misi Section */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div
            className="bg-gray-50 p-8 rounded-2xl border-l-8"
            style={{ borderColor: accentColor }}
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Visi Kami</h2>
            <p className="text-gray-700 leading-relaxed text-lg italic">
              {companyData.vision}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Misi Kami</h2>
            <ul className="space-y-4">
              {companyData.missions.map((mission, index) => (
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
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Nilai Utama Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {companyData.values.map((val, index) => (
              <div
                key={index}
                className="p-8 rounded-xl border border-blue-700 hover:border-yellow-400 transition-colors"
              >
                <div className="text-4xl mb-4" style={{ color: accentColor }}>
                  ✦
                </div>
                <h3 className="text-xl font-bold mb-2">{val.title}</h3>
                <p className="text-blue-100 text-sm">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900">
            Mengapa Memilih Atmacita?
          </h2>
          <div
            className="h-1 w-20 mx-auto mt-4"
            style={{ backgroundColor: accentColor }}
          ></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {companyData.whyUs.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="font-semibold text-blue-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            Siap Mengembangkan Potensi Anda?
          </h2>
          <button
            className="px-8 py-3 rounded-full font-bold text-blue-900 transition-transform hover:scale-105"
            style={{ backgroundColor: accentColor }}
          >
            Hubungi Kami Sekarang
          </button>
        </div>
      </section>
    </div>
  );
}
