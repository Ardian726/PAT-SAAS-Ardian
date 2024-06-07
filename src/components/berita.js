import React from "react";
const posts = [
  {
    id: 1,
    imageSrc:
      "https://smktibazma.sch.id/static/media/lapangan.8feef39bc2c2eaa90525.jpg",
    imageAlt: "Silat",
    title:
      "Siswa SMK TI BAZMA Bogor Raih Juara 1 Lomba Pencak Silat Tingkat Kabupaten",
    href: "#",
    description:
      "Dalam kejuaraan yang digelar di Kabupaten Bogor, siswa-siswa SMK TI BAZMA menunjukkan prestasi gemilang dengan meraih juara 1 dalam lomba pencak silat. Keberhasilan mereka tidak hanya membanggakan sekolah, tetapi juga menjadi inspirasi bagi generasi muda di daerah tersebut.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Prestasi", href: "#" },
    author: {
      name: "SMK TI BAZMA",
      role: "Admin",
      href: "#",
      imageUrl:
        "https://smktibazma.sch.id/static/media/main-logo-2.7b74690f86ab4e9a4743.png",
    },
  },
  {
    id: 2,
    imageSrc:
      "https://smktibazma.sch.id/static/media/lapangan.8feef39bc2c2eaa90525.jpg",
    imageAlt: "Poster PPDB",
    title:
      "Pengumuman PPDB Tahun Ajaran Baru: Calon Siswa yang Berhasil Lolos Seleksi PPDB",
    href: "#",
    description:
      "SMK TI BAZMA dengan bangga mengumumkan hasil seleksi PPDB untuk tahun ajaran baru. Melalui proses seleksi yang ketat dan adil, sejumlah calon siswa telah berhasil lolos dan berhak melanjutkan pendidikan di sekolah ini.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "PPDB", href: "#" },
    author: {
      name: "SMK TI BAZMA",
      role: "Admin",
      href: "#",
      imageUrl:
        "https://smktibazma.sch.id/static/media/main-logo-2.7b74690f86ab4e9a4743.png",
    },
  },
  {
    id: 3,
    imageSrc:
      "https://smktibazma.sch.id/static/media/lapangan.8feef39bc2c2eaa90525.jpg",
    imageAlt: "Class Meeting SMK TI BAZMA",
    title:
      "Semarak Class Meeting Menghadirkan Antusiasme Tinggi di Kalangan Siswa",
    href: "#",
    description:
      "SMK TI BAZMA Bogor baru-baru ini menjadi saksi dari sebuah peristiwa yang meriah dan membanggakan: Class Meeting yang dihadiri oleh seluruh siswa dan guru sekolah tersebut. Acara ini tidak hanya menjadi wadah untuk berbagi informasi dan mendiskusikan hal-hal penting terkait kegiatan sekolah, tetapi juga menjadi momen untuk mempererat ikatan antara seluruh anggota komunitas sekolah.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Kegiatan", href: "#" },
    author: {
      name: "SMK TI BAZMA",
      role: "Admin",
      href: "#",
      imageUrl:
        "https://smktibazma.sch.id/static/media/main-logo-2.7b74690f86ab4e9a4743.png",
    },
  },
  // More posts...
];

export default function Component3() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8" id="berita">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Berita
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Seluruh berita terbaru dari SMK TI BAZMA.
        </p>
      </div>
      <div className="mx-auto grid mt-5 max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-5 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="flex max-w-2xl mx-auto flex-col items-start justify-between"
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={post.imageSrc}
                alt={post.imageAlt}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-3 flex items-center gap-x-4 text-xs">
              <time dateTime={post.datetime} className="text-gray-500">
                {post.date}
              </time>
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                {post.category.title}
              </span>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                {post.description}
              </p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
              <img
                src={post.author.imageUrl}
                alt=""
                className="h-10 w-10 rounded-full bg-gray-50"
              />
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <a href={post.author.href}>
                    <span className="absolute inset-0" />
                    {post.author.name}
                  </a>
                </p>
                <p className="text-gray-600">{post.author.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
