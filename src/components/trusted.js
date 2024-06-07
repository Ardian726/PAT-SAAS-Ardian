import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

export default function Component5() {
  return (
    <div className="mx-auto grid max-w-7xl px-6 grid-cols-1 items-center gap-x-8 gap-y-16 py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-8" id="kontak">
      <Slider {...settings} className="bg-gray-100 rounded-lg px-10">
        <div className="mx-auto my-auto max-w-2xl lg:max-w-4xl">
          <figure className="mt-10">
            <blockquote className="text-center text-gray-900">
              <p>
                “Sekolahnya bagus banget... fasilitasnya apalagi, guru-gurunya
                ramah & baik-baik.”
              </p>
            </blockquote>
            <figcaption className="my-10">
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src="https://media.licdn.com/dms/image/D5603AQGYHeS13TDyxg/profile-displayphoto-shrink_800_800/0/1704354391987?e=2147483647&v=beta&t=ZBfKRf34kBZmrtN83OkrYx6XKA8gLCRi1-7N7bJbesg"
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">
                  Ulfa Mujahidah
                </div>
                <svg
                  viewBox="0 0 2 2"
                  width={3}
                  height={3}
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">Wali Siswa</div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="mt-10">
            <blockquote className="text-center text-gray-900">
              <p>
                “Sekolahnya bagus banget... fasilitasnya apalagi, guru-gurunya
                ramah & baik-baik.”
              </p>
            </blockquote>
            <figcaption className="my-10">
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src="https://c.superprof.com/i/m/29102234/500/20231215115735/29102234.jpg"
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">
                  IGde Bayu Priyambada
                </div>
                <svg
                  viewBox="0 0 2 2"
                  width={3}
                  height={3}
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">Wali Siswa</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </Slider>
      <form>
        <div className="space-y-12">
          <div className="">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Kirim Pesan
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Pesan
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
