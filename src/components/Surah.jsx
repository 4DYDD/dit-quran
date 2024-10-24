import React from "react";
import { Link } from "react-router-dom";
import { ArabicNumbers } from "react-native-arabic-numbers";

import labelguweh from "../assets/labelguweh.png";
import emblemguweh from "../assets/emblemguweh.png";

function Surah({ className = "", data }) {
  return (
    <>
      <Link
        to={`/surah/${data.nomor}`}
        className={`w-[26rem] p-3 font-normal text-[0.7rem] lg:text-[1rem] active:scale-[0.98] transall duration-200 flexc overflow-hidden rounded shadow bg-gradient-to-b to-slate-900 from-black ${className}`}
      >
        {/* --------------- */}
        <div className="flexc flex-col flex-[1.5] me-3">
          <div className="flex-[1] text-[1.2em] font-bold font-Rubik">
            {data.nama}{" "}
          </div>
          <div className="flex-[1] text-[0.85em]">{data.jumlahAyat} Ayat</div>
        </div>
        {/* --------------- */}

        {/* --------------- */}
        <div className="text-left flex-col flex-[4]">
          <div className="flex-[4] text-[1.1em] font-bold tracking-wider">
            {data.namaLatin}
          </div>
          <div className="flex-[4] text-[0.9em]">{data.arti}</div>
        </div>
        {/* --------------- */}

        {/* --------------- */}
        <div className="flex-[1] text-[1.3em] lg:text-[0.8em] font-bold relative h-full flexc">
          <div className="absolute size-12x lg:size-16">
            <img
              className="object-cover"
              src={emblemguweh}
              alt="emblemarabic"
            />
          </div>
          <span className="block">{ArabicNumbers(data.nomor)}</span>
        </div>
        {/* --------------- */}
      </Link>
    </>
  );
}

export default Surah;
