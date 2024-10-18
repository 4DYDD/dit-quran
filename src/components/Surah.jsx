import React from "react";
import { Link } from "react-router-dom";

function Surah({ className = "", data, index }) {
  return (
    <>
      <Link
        to={`/surah/${data.nomor}`}
        className={`w-[26rem] p-3 font-normal text-[0.7rem] lg:text-[1rem] active:scale-[0.98] transall duration-200 flexc rounded shadow bg-primary ${className}`}
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
          <div className="flex-[4] text-[1.1em] font-bold">
            {data.namaLatin}
          </div>
          <div className="flex-[4] text-[0.9em]">{data.arti}</div>
        </div>
        {/* --------------- */}

        {/* --------------- */}
        <div className="flex-[1] text-[1em] lg:text-[0.8em] font-bold relative">
          <span className="bg-yellow-600 size-[1.8rem] lg:size-[2rem] flexc trans-center rounded rotate-[45deg]">
            <span className="block rotate-[-45deg]">{data.nomor}</span>
          </span>{" "}
        </div>
        {/* --------------- */}
      </Link>
    </>
  );
}

export default Surah;
