import React from "react";

function Surah({ className = "", data, index }) {
  return (
    <>
      <button
        className={`w-[26rem] p-3 font-normal text-[0.9rem] md:text-[1rem] active:scale-[0.98] transall duration-200 flexc rounded shadow bg-primary ${className}`}
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
        <div className="flex-[1] text-[1.2em] font-bold">{index + 1}</div>
        {/* --------------- */}
      </button>
    </>
  );
}

export default Surah;
