import React from "react";
import Surah from "./Surah";

function Card({ data }) {
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
  const samting = [
    {
      nomor: "",
      nama: "",
      namaLatin: "",
      jumlahAyat: "",
      tempatTurun: "",
      arti: "",
      deskripsi: "",
      audioFull: {
        "01": "",
        "02": "",
        "03": "",
        "04": "",
        "05": "",
      },
    },
  ];
  return (
    <>
      <div className="block mx-auto">
        <div className="flex flex-wrap content-center justify-center w-[20rem] lg:w-[90rem] font-semibold text-center text-purple-900">
          {data.map((value, index) => (
            <React.Fragment key={index}>
              <Surah key={index} data={value} index={index} className={`m-2`} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default Card;
