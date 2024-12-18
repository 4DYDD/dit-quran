import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ArabicNumbers from "../js/ArabicNumbers";
import axios from "axios";
import Scrollbars from "rc-scrollbars";

import labelguweh from "../assets/labelguweh.png";
import emblemguweh from "../assets/emblemguweh.png";

function Ayats({ className = "", surahData, setSurahData, setPage }) {
  const { nomor } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const endLoading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  if (!surahData.ayat.length < 1) endLoading();

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
        }, 500);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setPage("surah");
  }, []);

  return (
    <>
      <main
        className={`w-[26rem] lg:w-[60rem] font-normal text-[0.7rem] lg:text-[1rem] flexs flex-col relative max-h-[68vh] overflow-auto rounded-lg shadow bg-dark shadow-slate-700 ${className}`}
      >
        <div
          className={`bg-gradient-to-b from-75% from-dark to-transparent ayat-header w-full py-10 sticky top-0 z-[3] flexc text-[1.3em]`}
        >
          <Link
            onClick={(e) => {
              localStorage.removeItem("surahData");
              setSurahData({ ayat: [] });
            }}
            to={`/`}
            className="absolute text-white bg-red-500 py-1 px-3 lg:px-5 rounded-lg trans-center !left-8 lg:!left-14 hover:text-dark transall text-[0.8em]"
          >
            <i className="fa-solid fa-left-long"></i>
          </Link>
          {isLoading ? (
            <span className="block w-[50%] h-[2.5rem] bg-white animate-pulseku"></span>
          ) : (
            <>
              <img
                className="absolute object-cover scale-x-150 size-36"
                src={labelguweh}
                alt="labelarabic"
              />
              <span className="absolute text-dark">{surahData.namaLatin}</span>
            </>
          )}
        </div>
        <div className="flex-col w-full bg-dark ayat-content flexc text-[1em]">
          {isLoading
            ? new Array(5).fill({}).map((value, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className="flex-col w-full text-left flexc">
                      <div className="w-full flexe">
                        <span className="block w-[60%] h-[4em] mx-6 lg:px-10 mb-4 bg-secondary animate-pulseku"></span>
                      </div>
                      <div className="flex w-full">
                        <span className="block w-[80%] h-[3em] mx-6 lg:px-10 mb-14 bg-secondary animate-pulseku"></span>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })
            : surahData.ayat.map((value, index) => {
                const { teksArab, nomorAyat, teksIndonesia } = value;
                return (
                  <React.Fragment key={index}>
                    <div className="flex-col w-full text-[1em] flexc py-5">
                      <div className="flexc flex-col px-6 lg:px-10 w-full text-end text-[2.2em] mb-7 tracking-[0.02em] leading-[2.2em] text-arabnya">
                        <div className="w-full">
                          <span>{teksArab}</span>
                        </div>
                        <div className="relative self-end size-14">
                          <span className="absolute trans-center z-[2] text-[0.6em] !top-[30px]">
                            {ArabicNumbers(nomorAyat)}
                          </span>
                          <span className="absolute size-[3.2rem] lg:size-[4.5rem] trans-center z-[1]">
                            <img
                              className="object-cover"
                              src={emblemguweh}
                              alt="emblemarabic"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="px-6 lg:px-10 w-full text-start text-[1em] mb-5 font-Rubik">
                        {teksIndonesia}
                      </div>
                      <div className="mx-6 lg:mx-10 bg-white w-[200px] h-[1.5px] mb-10 self-start rounded-full"></div>
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
