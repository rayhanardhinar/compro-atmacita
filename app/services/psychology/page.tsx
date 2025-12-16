// app/services/psychology/page.tsx
import { Zap, Users, LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

// 1. Definisikan Interface untuk Props ServiceCard
interface ServiceCardProps {
  icon: LucideIcon; // Type untuk ikon dari lucide-react
  title: string;
  description: string;
}

// 2. Komponen Pembantu (ServiceCard) dengan TypeScript
const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <div className="p-6 bg-white border border-red-200 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    {/* Menggunakan Icon Component yang di-destructure dari props */}
    <Icon className="w-8 h-8 text-red-500 mb-4" />
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// 3. Halaman Utama (PsychologyServicesPage)
const PsychologyServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-red-700 mb-6">
          Layanan Psikologi
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Fokus pada kesejahteraan mental individu dan organisasi.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={Zap}
            title="Asesmen Psikologis"
            description="Pengukuran kepribadian, minat, dan bakat menggunakan alat uji terstandardisasi."
          />
          <ServiceCard
            icon={Users}
            title="Konseling Individu & Karir"
            description="Sesi tatap muka dan daring untuk mengatasi masalah pribadi dan perencanaan karir."
          />
          <ServiceCard
            icon={Zap}
            title="Employee Assistance Program (EAP)"
            description="Dukungan psikologis untuk karyawan dalam lingkup perusahaan."
          />
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-red-700 transition duration-300"
          >
            Konsultasi Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PsychologyServicesPage;
