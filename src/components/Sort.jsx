import { span } from "framer-motion/client";
import React, { useEffect, useState } from "react";

function Sort({ placeholder, data, setData }) {
  const [toggle, setToggle] = useState(false);
  const [dataAwal, setDataAwal] = useState(null);

  // GLOBAL DOM FUNCTION
  // document.addEventListener("click", (event) => {});

  const urutkanAsc = () => {
    const sortedData = [...data].sort((a, b) => a.nomor - b.nomor);
    setData(sortedData);
    console.log("Asc ↑");
  };

  const urutkanDesc = () => {
    const sortedData = [...data].sort((a, b) => b.nomor - a.nomor);
    setData(sortedData);
    console.log("Desc ↓");
  };

  const urutkanSurahMakkiyah = () => {
    // Mekah
    const sortedDataMekah = [...dataAwal].filter(
      (value, index) => value.tempatTurun == "Mekah"
    );
    const jumlahSortedDataMekah = sortedDataMekah.length;

    // === NANTI BUATKAN TITLE JUMLAH SURAH DIDAPATKAN ===

    setData(sortedDataMekah);
    console.log(sortedDataMekah);
    console.log("Surah Makkiyah");
  };

  const urutkanSurahMadaniyah = () => {
    // Madinah
    const sortedDataMadinah = [...dataAwal].filter(
      (value, index) => value.tempatTurun == "Madinah"
    );
    const jumlahSortedDataMadinah = sortedDataMadinah.length;

    // === NANTI BUATKAN TITLE JUMLAH SURAH DIDAPATKAN ===

    setData(sortedDataMadinah);
    console.log(sortedDataMadinah);
    console.log("Surah Madaniyah");
  };

  const urutkanJumlahAyat = () => {
    console.log("jumlah ayat");
  };

  useEffect(() => {
    if (!dataAwal && data) {
      console.log(data);
      setDataAwal([...data]);
    }
  }, [data]);

  return (
    <>
      <div
        id="sortnya"
        onClick={() => {
          setToggle(!toggle);
        }}
        className="flexc h-[2em] text-[0.1em] my-auto shadow"
      >
        <button className="h-full w-[2.5rem] bg-slate-200 flexc rounded-s group relative">
          {toggle ? (
            <i className="text-dark fa-solid fa-xmark -scale-x-100 group-active:-scale-x-90 group-active:scale-y-90 transall"></i>
          ) : (
            <i className="text-dark fa-solid fa-sort -scale-x-100 group-active:-scale-x-90 group-active:scale-y-90 transall"></i>
          )}

          {/* === SUGGESTION === */}
          <div
            className={`
              absolute
              flexc flex-col
              top-12 left-0
              p-1.5
              w-[15rem] md:w-[20rem]
              text-[0.65rem] lg:text-[1rem]
              overflow-hidden
              bg-white
              rounded-md
              shadow 
              ${!toggle && "!hidden"}
            `}
          >
            {[
              // MENU 1
              <span
                onClick={() => {
                  urutkanAsc();
                }}
                className="leading-none flexc"
              >
                {`Surah [ 1 `}
                <span className="px-1.5">
                  <i className="fa-solid fa-right-long"></i>
                </span>
                {`114 ]`}
              </span>,

              // MENU 2
              <span
                onClick={() => {
                  urutkanDesc();
                }}
                className="leading-none flexc"
              >
                {`Surah [ 114 `}
                <span className="px-1.5">
                  <i className="fa-solid fa-right-long"></i>
                </span>
                {`1 ]`}
              </span>,

              // MENU 3
              <span
                onClick={() => {
                  urutkanSurahMakkiyah();
                }}
                className="leading-none flexc"
              >
                <span>Surah Makkiyah</span>
              </span>,

              // MENU 4
              <span
                onClick={() => {
                  urutkanSurahMadaniyah();
                }}
                className="leading-none flexc"
              >
                {" "}
                <span>Surah Madaniyah</span>
              </span>,

              // MENU 5
              <span
                onClick={() => {
                  urutkanJumlahAyat();
                }}
                className="leading-none flexc"
              >
                {" "}
                <span>Jumlah ayat</span>
              </span>,
            ].map((menu, index) => (
              <li
                key={index}
                className={`
                  w-full
                  py-2.5 m-1
                  hover:bg-dark hover:text-white
                  flexs
                  before:content-['◈'] before:mx-2 before:scale-[1.5] md:before:scale-[1.2]
                  bg-dark
                  text-white text-[1em] lg:text-[1em]
                  shadow-md shadow-gray-400
                  rounded-md
                  `}
              >
                {menu}
              </li>
            ))}
          </div>
          {/* === SUGGESTION === */}
        </button>
        <input
          readOnly
          className={`
            input-sort
            h-full w-[7rem] lg:w-[12rem]
            px-3
            text-dark font-semibold active:text-[0.65rem] text-[0.7rem] lg:text-[1rem] lg:active:text-[0.9rem] 
            placeholder:text-dark placeholder:font-semibold
            transition-all
            bg-slate-200
            focus:outline-none
            rounded-e
            cursor-pointer
            relative
            flex
            `}
          type="text"
          name="sort"
          id="sort"
          placeholder={placeholder}
        />
      </div>
    </>
  );
}

export default Sort;
