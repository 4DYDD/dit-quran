import React, { useEffect, useRef, useState } from "react";

function Sort({ placeholder, data, setData }) {
  const sortnya = useRef(null);

  const [toggle, setToggle] = useState(false);
  const [dataAwal, setDataAwal] = useState(null);

  const selectMenu = [
    "default",
    "selected",
    "selected",
    "selected",
    "selected",
    "selected",
  ].map((value, index) => ({
    element: (
      <span className="absolute right-4 lg:right-5 text-slate-500 text-[0.9em] pointer-events-none">
        <i>{value}</i>
      </span>
    ),
    status: value == "default" ? true : false,
  }));

  const [selectOption, setSelectOption] = useState(selectMenu);

  // GLOBAL DOM FUNCTION
  // document.addEventListener("click", (event) => {});
  const aktifkanOpsi = (urutan) => {
    const newSelectMenu = [...selectOption].map((value, index) => ({
      element: value.element,
      status: index == urutan ? true : false,
    }));
    setSelectOption(newSelectMenu);
  };

  const urutkanAsc = (urutan) => {
    sortnya.current.value = `Urutkan - menu ${urutan}`;
    // ASC
    const sortedData = [...dataAwal].sort((a, b) => a.nomor - b.nomor);
    setData(sortedData);
    console.log("Asc ↑");
  };

  const urutkanDesc = (urutan) => {
    sortnya.current.value = `Urutkan - menu ${urutan}`;
    // DESC
    const sortedData = [...dataAwal].sort((a, b) => b.nomor - a.nomor);
    setData(sortedData);
  };

  const urutkanSurahMakkiyah = (urutan) => {
    sortnya.current.value = `Urutkan - menu ${urutan}`;
    // Mekah
    const sortedDataMekah = [...dataAwal].filter(
      (value, index) => value.tempatTurun == "Mekah"
    );
    const jumlahSortedDataMekah = sortedDataMekah.length;

    // === NANTI BUATKAN TITLE JUMLAH SURAH DIDAPATKAN ===

    setData(sortedDataMekah);
  };

  const urutkanSurahMadaniyah = (urutan) => {
    sortnya.current.value = `Urutkan - menu ${urutan}`;
    // Madinah
    const sortedDataMadinah = [...dataAwal].filter(
      (value, index) => value.tempatTurun == "Madinah"
    );
    const jumlahSortedDataMadinah = sortedDataMadinah.length;

    // === NANTI BUATKAN TITLE JUMLAH SURAH DIDAPATKAN ===

    setData(sortedDataMadinah);
  };

  useEffect(() => {
    if (!dataAwal && data) {
      setDataAwal([...data]);
    }
  }, [data]);

  const urutkanAyatSedikit = (urutan) => {
    sortnya.current.value = `Urutkan - menu ${urutan}`;
    // Ayat ASC
    const sortedData = [...dataAwal].sort(
      (a, b) => a.jumlahAyat - b.jumlahAyat
    );
    setData(sortedData);
  };

  const urutkanAyatBanyak = (urutan) => {
    sortnya.current.value = `Urutkan - menu ${urutan}`;
    // Ayat DESC
    const sortedData = [...dataAwal].sort(
      (a, b) => b.jumlahAyat - a.jumlahAyat
    );
    setData(sortedData);
  };

  const opsiFungsi = [
    urutkanAsc,
    urutkanDesc,
    urutkanSurahMakkiyah,
    urutkanSurahMadaniyah,
    urutkanAyatSedikit,
    urutkanAyatBanyak,
  ];

  return (
    <>
      <div
        id="sortnya"
        onClick={() => {
          setToggle(!toggle);
        }}
        className="flexc h-[2em] text-[0.1em] my-auto shadow active:scale-[0.99] transall"
      >
        <button className="h-full w-[2rem] lg:w-[2.5rem] bg-slate-200 flexc rounded-s group relative">
          {toggle ? (
            <i className="text-dark fa-solid fa-xmark -scale-x-100"></i>
          ) : (
            <i className="text-dark fa-solid fa-sort -scale-x-100"></i>
          )}

          {/* === SUGGESTION === */}
          <ul
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
              [
                `Surah 1 sampai 114`,
                <>{selectOption[0].status && selectOption[0].element}</>,
              ],

              // MENU 2
              [
                `Surah 114 sampai 1`,
                <>{selectOption[1].status && selectOption[1].element}</>,
              ],

              // MENU 3
              [
                `Surah Makkiyah`,
                <>{selectOption[2].status && selectOption[2].element}</>,
              ],

              // MENU 4
              [
                `Surah Madaniyah`,
                <>{selectOption[3].status && selectOption[3].element}</>,
              ],

              // MENU 5
              [
                `Ayat paling sedikit`,
                <>{selectOption[4].status && selectOption[4].element}</>,
              ],

              // MENU 6
              [
                `Ayat paling banyak`,
                <>{selectOption[5].status && selectOption[5].element}</>,
              ],
            ].map((menu, index) => (
              <li
                onClick={() => {
                  opsiFungsi[index](index + 1);
                  aktifkanOpsi(index);
                }}
                key={index}
                className={`
                  w-full
                  py-2.5 ps-0.5 m-1
                  hover:bg-dark hover:text-white
                  flexs
                  before:scale-[1.5] md:before:scale-[1.2]
                  bg-dark
                  text-white text-[1em] lg:text-[1em]
                  shadow-md shadow-gray-400
                  rounded-md
                  `}
              >
                <span className="relative w-full gap-3 leading-none flexs ps-2">
                  <span className="w-[6px] lg:w-[12px]">{index + 1}.</span>
                  <span>{menu[0]}</span>
                  {menu[1]}
                </span>
              </li>
            ))}
          </ul>
          {/* === SUGGESTION === */}
        </button>
        <input
          readOnly
          className={`
            input-sort
            h-full w-[7rem] lg:w-[12rem]
            px-0
            text-dark font-semibold text-[0.7rem] lg:text-[1rem]
            placeholder:text-dark placeholder:font-semibold
            bg-slate-200
            outline-none
            rounded-e
            cursor-pointer
            relative
            flex
            `}
          type="text"
          name="sort"
          id="sort"
          ref={sortnya}
          placeholder={placeholder}
        />
      </div>
    </>
  );
}

export default Sort;
