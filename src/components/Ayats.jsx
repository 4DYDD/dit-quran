import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import LoadingScreen from "./LoadingScreen";

function Ayats({ className = "", setIsNavbar }) {
  const { nomor } = useParams();

  const [surahData, setSurahData] = useState({ ayat: [] });

  useEffect(() => {
    // Fungsi untuk mengambil data surah berdasarkan nomor
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://equran.id/api/v2/surat/${nomor}`
        );

        setTimeout(() => {
          console.log(response.data.data);
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
        className={`w-[26rem] lg:w-[60rem] font-normal text-[0.7rem] lg:text-[1rem] flexc flex-col ${className}`}
      >
        <div className="ayat-header w-full h-[4rem] lg:h-[5rem] text-[1em] p-3 rounded-t shadow bg-primary flexc">
          {surahData.ayat.length < 1 ? (
            <>
              {/* --------------- */}
              <div className="flexc flex-col flex-[1.5] me-3">
                <div className="flex-[1] text-[1.2em] font-bold font-Rubik mb-2 self-start">
                  <span className="block w-[4.7em] h-[1.5em] bg-yellow-600 animate-pulseku"></span>
                </div>
                <div className="flex-[1] text-[0.85em] self-start">
                  <span className="block w-[6.2em] h-[1.5em] bg-yellow-600 animate-pulseku"></span>
                </div>
              </div>
              {/* --------------- */}

              {/* --------------- */}
              <div className="text-left flex-col flex-[4]">
                <div className="flex-[4] text-[1.1em] font-bold mb-2">
                  <span className="block w-[7em] h-[1.6em] bg-yellow-600 animate-pulseku"></span>
                </div>
                <div className="flex-[4] text-[0.9em]">
                  <span className="block w-[12em] h-[1.5em] bg-yellow-600 animate-pulseku"></span>
                </div>
              </div>
              {/* --------------- */}

              {/* --------------- */}
              <div className="flex-[1] text-[1em] lg:text-[0.8em] font-bold relative animate-spinku">
                <span className="bg-yellow-600 animate-pulseku size-[1.8rem] lg:size-[2rem] flexc trans-center rounded rotate-[45deg]">
                  <span className="block rotate-[-45deg]">{""}</span>
                </span>
              </div>
              {/* --------------- */}
            </>
          ) : (
            <>
              {/* --------------- */}
              <div className="flexc flex-col flex-[1.5] me-3">
                <div className="flex-[1] text-[1.2em] font-bold font-Rubik">
                  {surahData.nama}
                </div>
                <div className="flex-[1] text-[0.85em]">
                  {surahData.jumlahAyat} Ayat
                </div>
              </div>
              {/* --------------- */}

              {/* --------------- */}
              <div className="text-left flex-col flex-[4]">
                <div className="flex-[4] text-[1.1em] font-bold">
                  {surahData.namaLatin}
                </div>
                <div className="flex-[4] text-[0.9em]">{surahData.arti}</div>
              </div>
              {/* --------------- */}

              {/* --------------- */}
              <div className="flex-[1] text-[1em] lg:text-[0.8em] font-bold relative">
                <span className="bg-yellow-600 size-[1.8rem] lg:size-[2rem] flexc trans-center rounded rotate-[45deg]">
                  <span className="block rotate-[-45deg]">
                    {surahData.nomor}
                  </span>
                </span>
              </div>
              {/* --------------- */}
            </>
          )}
        </div>

        <div className="flex-col w-full bg-yellow-600 ayat-content flexc text-[1em]">
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
