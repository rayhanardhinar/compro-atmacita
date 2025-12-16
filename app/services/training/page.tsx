// app/services/training/page.tsx
import { GraduationCap, Award, LucideIcon } from "lucide-react";
import React from "react";

// 1. Definisikan Interface untuk Props ServiceCard
interface ServiceCardProps {
  icon: LucideIcon; // Type untuk ikon dari lucide-react
  title: string;
  description: string;
  color: string; // Tambahkan prop warna untuk styling
}

// 2. Komponen Pembantu (ServiceCard) dengan TypeScript
// Menggunakan React.FC untuk mendefinisikan komponen fungsional
const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  color,
}) => (
  <div className="p-6 bg-white border border-green-200 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    {/* Menggunakan prop 'color' di template literal untuk Tailwind CSS */}
    <Icon className={`w-8 h-8 ${color} mb-4`} />
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// 3. Halaman Utama (TrainingServicesPage)
const TrainingServicesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-6">
        Pelatihan & Sertifikasi
      </h1>
      <p className="text-xl text-gray-700 mb-8">
        Meningkatkan kompetensi dan validasi keahlian profesional.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <ServiceCard
          icon={GraduationCap}
          title="Pelatihan Soft Skills"
          description="Program pengembangan kepemimpinan, komunikasi, dan *problem solving*."
          color="text-green-500" // Warna untuk ikon
        />
        <ServiceCard
          icon={Award}
          title="Sertifikasi Profesi"
          description="Persiapan dan ujian sertifikasi yang diakui secara nasional dan internasional."
          color="text-green-500" // Warna untuk ikon
        />
      </div>
    </div>
  );
};

export default TrainingServicesPage;
