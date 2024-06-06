import React from "react";

export default function Component2() {
  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4 my-auto">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-600">
                Islamic Boarding School
              </h2>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                SMK TI BAZMA
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI
                BAZMA) merupakan sekolah unggulan berasrama yang diperuntukkan
                bagi anak-anak tidak mampu. Pembangunan sekolah, baik fasilitas
                maupun operasional didanai dari hasil pengelolaan wakaf dan
                sumber dana sosial kemanusiaan lainnya yang diamanahkan oleh
                masyarakat.
              </p>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                SMK TI BAZMA menyelenggarakan program pembelajaran yang ditempuh
                selama 4 tahun dengan siswa-siswa yang berasal dari berbagai
                daerah di seluruh Indonesia. SMK TI Bazma menyelenggarakan
                pendidikan dengan jurusan SIJA (Sistem Informatika, Jaringan &
                Aplikasi) dengan kombinasi kurikulum berbasis asrama.
              </p>
              <button
                type="button"
                className="mt-10 bg-blue-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
              >
                Selengkapnya
              </button>
            </div>
          </div>
          <img
            src="https://smktibazma.sch.id/static/media/asrama.d1fa6eec69bfc5732828.jpg"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[70rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}

// <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
//   <div className="max-w-7xl lg:px-8 mx-auto grid grid-cols-1 lg:max-w-7xl lg:gap-x-20 lg:grid-cols-2">
//     <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
//       <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//         SMK TI BAZMA
//       </h1>
//       <p className="text-sm leading-4 font-medium sm:text-slate-500 dark:sm:text-slate-400">
//         Islamic Boarding School
//       </p>
//     </div>
//     <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
//       <img
//         src="https://smktibazma.sch.id/static/media/hero-1.2803f83852406277b6cd.jpg"
//         alt=""
//         className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full shadow"
//         loading="lazy"
//       />
//       <img
//         src="https://smktibazma.sch.id/static/media/masjid.d157934d98cee11f144c.jpg"
//         alt=""
//         className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32 shadow"
//         loading="lazy"
//       />
//       <img
//         src="https://smktibazma.sch.id/static/media/lapangan.8feef39bc2c2eaa90525.jpg"
//         alt=""
//         className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32 shadow"
//         loading="lazy"
//       />
//     </div>
//     <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2 lg:row-end-3">
//       <dt className="sr-only">Location</dt>
//       <dd className="flex items-center">
//         <svg
//           width="24"
//           height="24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="mr-1 text-slate-400 dark:text-slate-500"
//           aria-hidden="true"
//         >
//           <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
//           <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
//         </svg>
//         Ciampea, Bogor
//       </dd>
//     </dl>
//     <p className="mt-4 leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-3 lg:row-end-4 lg:col-span-1">
//       Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI BAZMA)
//       merupakan sekolah unggulan berasrama yang diperuntukkan bagi anak-anak
//       tidak mampu. Pembangunan sekolah, baik fasilitas maupun operasional
//       didanai dari hasil pengelolaan wakaf dan sumber dana sosial
//       kemanusiaan lainnya yang diamanahkan oleh masyarakat.
//     </p>
//     <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-4 lg:row-end-5">
//       <button
//         type="button"
//         className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
//       >
//         Selengkapnya
//       </button>
//     </div>
//   </div>
// </main>
