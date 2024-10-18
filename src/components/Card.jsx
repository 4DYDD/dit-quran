import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Surahs from "./Surahs";
import Ayats from "./Ayats";

function Card({ setIsNavbar, data }) {
  const datanya = [
    {
      nama: "الفاتحة",
      namaLatin: "Al-Fatihah",
      arti: "Pembukaan",
      jumlahAyat: 7,
    },
    {
      nama: "البقرة",
      namaLatin: "Al-Baqarah",
      arti: "Sapi",
      jumlahAyat: 286,
    },
    {
      nama: "اٰل عمران",
      namaLatin: "Ali 'Imran",
      arti: "Keluarga Imran",
      jumlahAyat: 200,
    },
    {
      nama: "النساۤء",
      namaLatin: "An-Nisa",
      arti: "Wanita",
      jumlahAyat: 176,
    },
    {
      nama: "الماۤئدة",
      namaLatin: "Al-Ma'idah",
      arti: "Hidangan",
      jumlahAyat: 120,
    },
    {
      nama: "الانعام",
      namaLatin: "Al-An'am",
      arti: "Binatang Ternak",
      jumlahAyat: 165,
    },
  ];

  return (
    <>
      <div className="block mx-auto">
        <div className="flex flex-wrap content-center justify-center w-[20rem] lg:w-[90rem] font-semibold text-center text-white">
          <Routes>
            <Route path="/" element={<Surahs data={data} />} />
            <Route
              path="/surah/:nomor"
              element={<Ayats setIsNavbar={setIsNavbar} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Card;
