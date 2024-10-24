import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import LoadingScreen from "./LoadingScreen";

function Ayats({ className = "", setIsNavbar }) {
  const { nomor } = useParams();

  const [surahData, setSurahData] = useState({ ayat: [] });

  useEffect(() => {
    setSurahData(JSON.parse(localStorage.getItem("surahData")) || { ayat: [] });
    // Fungsi untuk mengambil data surah berdasarkan nomor
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://equran.id/api/v2/surat/${nomor}`
        );

        setTimeout(() => {
          localStorage.setItem("surahData", JSON.stringify(response.data.data));
          setSurahData(response.data.data);
        }, 1000);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <main
        className={`w-[26rem] lg:w-[60rem] font-normal text-[0.7rem] lg:text-[1rem] flexs flex-col relative max-h-[70vh] overflow-auto ${className}`}
      >
        <div className={`bg-dark w-full rounded-t-md py-3 sticky top-0`}>
          {surahData.namaLatin}
        </div>
        <div className="flex-col w-full bg-yellow-600 ayat-content flexc text-[1em] pt-5">
          {surahData.ayat.length < 1
            ? new Array(75).fill({}).map((value, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className="flex-col w-full text-left flexc">
                      <div className="flex w-full">
                        <span className="block w-[60%] h-[3em] mx-6 lg:px-10 mb-2 mt-10 bg-yellow-700 animate-pulseku"></span>
                      </div>
                      <div className="flex w-full">
                        <span className="block w-[80%] h-[3em] mx-6 lg:px-10 mb-10 bg-yellow-700 animate-pulseku"></span>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })
            : surahData.ayat.map((value, index) => {
                const { teksArab, teksIndonesia } = value;
                return (
                  <React.Fragment key={index}>
                    <div className="flex-col w-full text-[1em] flexc">
                      <div className="px-6 lg:px-10 w-full text-end text-[2.5em] mb-2 tracking-[0.01em] leading-[2em] text-arabnya">
                        {teksArab}
                      </div>
                      <div className="px-6 lg:px-10 w-full text-start text-[1em] mb-2 font-Rubik">
                        {teksIndonesia}
                      </div>
                      <div className="mx-6 lg:mx-10 bg-white w-[100px] h-[1.5px] mb-10 self-start rounded-full"></div>
                    </div>
                  </React.Fragment>
                );
              })}
        </div>
      </main>
    </>
  );
}

export default Ayats;
