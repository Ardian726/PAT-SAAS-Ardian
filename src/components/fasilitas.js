import React from "react";
import kelas from "../Fasilitas/kelas.jpg";
import masjid from "../Fasilitas/masjid.jpg";
import asrama from "../Fasilitas/asrama.jpg";
import lapangan from "../Fasilitas/lapangan.jpg";

const features = [
  { name: "Ruang Kelas & LAB", description: "Tempat belajar para siswa" },
  {
    name: "Masjid & Aula",
    description: "Tempat Sholat dan acara",
  },
  {
    name: "Gedung Asrama",
    description: "Tempat beraktivitas para siswa setelah kegiatan KBM berakhir",
  },
  {
    name: "Lapangan Olahraga",
    description: "Tempat para siswa berolahraga",
  },
];

export default function Component4() {
  return (
    <div className="mx-auto grid max-w-7xl px-6 grid-cols-1 items-center gap-x-8 gap-y-16 py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-8" id="fasilitas">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Fasilitas Sekolah
        </h2>
        <p className="mt-4 text-gray-500">
          Seluruh fasilitas ruang lingkup pembelajaran SMK TI BAZMA yang
          digunakan untuk melakasanakan kegitan belajar
        </p>

        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">{feature.name}</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
        <img
          src={kelas}
          alt="Ruang Kelas & LAB"
          className="rounded-lg bg-gray-100"
        />
        <img
          src={masjid}
          alt="Masjid & Aula"
          className="rounded-lg bg-gray-100"
        />
        <img
          src={asrama}
          alt="Gedung Asrama"
          className="rounded-lg bg-gray-100"
        />
        <img
          src={lapangan}
          alt="Lapangan Olahraga"
          className="rounded-lg bg-gray-100"
        />
      </div>
    </div>
  );
}
