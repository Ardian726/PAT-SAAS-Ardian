import React from "react";
const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];

export default function Component2() {
  return (
    // <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
    //   <img
    //     src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
    //     alt=""
    //     className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
    //   />
    //   <div
    //     className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
    //     aria-hidden="true"
    //   >
    //     <div
    //       className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
    //       style={{
    //         clipPath:
    //           "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
    //       }}
    //     />
    //   </div>
    //   <div
    //     className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
    //     aria-hidden="true"
    //   >
    //     <div
    //       className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
    //       style={{
    //         clipPath:
    //           "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
    //       }}
    //     />
    //   </div>
    //   <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //     <div className="mx-auto max-w-2xl lg:mx-0">
    //       <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
    //         Creative<br />Studio.
    //       </h2>
    //       <p className="mt-6 text-lg leading-8 text-gray-300">
    //         Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
    //         lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
    //         fugiat aliqua.
    //       </p>
    //     </div>
    //     <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
    //       <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
    //         {stats.map((stat) => (
    //           <div key={stat.name} className="flex flex-col-reverse">
    //             <dt className="text-base leading-7 text-gray-300">
    //               {stat.name}
    //             </dt>
    //             <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
    //               {stat.value}
    //             </dd>
    //           </div>
    //         ))}
    //       </dl>
    //     </div>
    //   </div>
    // </div>
    <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
      <div className="max-w-7xl lg:px-8 mx-auto grid grid-cols-1 lg:max-w-7xl lg:gap-x-20 lg:grid-cols-2">
        <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            SMK TI BAZMA
          </h1>
          <p className="text-sm leading-4 font-medium sm:text-slate-500 dark:sm:text-slate-400">
            Islamic Boarding School
          </p>
        </div>
        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <img
            src="https://smktibazma.sch.id/static/media/hero-1.2803f83852406277b6cd.jpg"
            alt=""
            className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full shadow"
            loading="lazy"
          />
          <img
            src="https://smktibazma.sch.id/static/media/masjid.d157934d98cee11f144c.jpg"
            alt=""
            className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32 shadow"
            loading="lazy"
          />
          <img
            src="https://smktibazma.sch.id/static/media/lapangan.8feef39bc2c2eaa90525.jpg"
            alt=""
            className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32 shadow"
            loading="lazy"
          />
        </div>
        <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2 lg:row-end-3">
          <dt className="sr-only">Location</dt>
          <dd className="flex items-center">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1 text-slate-400 dark:text-slate-500"
              aria-hidden="true"
            >
              <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
              <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
            </svg>
            Ciampea, Bogor
          </dd>
        </dl>
        <p className="mt-4 leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-3 lg:row-end-4 lg:col-span-1">
          Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI BAZMA)
          merupakan sekolah unggulan berasrama yang diperuntukkan bagi anak-anak
          tidak mampu. Pembangunan sekolah, baik fasilitas maupun operasional
          didanai dari hasil pengelolaan wakaf dan sumber dana sosial
          kemanusiaan lainnya yang diamanahkan oleh masyarakat.
        </p>
        <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-4 lg:row-end-5">
          <button
            type="button"
            className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
          >
            Selengkapnya
          </button>
        </div>
      </div>
    </main>
  );
}
