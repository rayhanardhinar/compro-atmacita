export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          Profil Perusahaan
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Kami adalah mitra strategis yang fokus pada perkembangan mental dan
          profesional.
        </p>
        <section className="mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Visi & Misi
          </h2>
          {/* Tambahkan konten Visi Misi di sini */}
          <p className="text-gray-600">
            *Konten yang lebih detail mengenai latar belakang, visi, misi, dan
            tim.*
          </p>
        </section>
      </div>
    </div>
  );
}
