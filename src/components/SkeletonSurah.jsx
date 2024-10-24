import React from "react";

function SkeletonSurah({ className = "" }) {
  return (
    <>
      <button
        className={`w-[26rem] h-[3.65rem] lg:h-[4.6rem] p-3 font-normal text-[0.7rem] lg:text-[1rem] active:scale-[0.98] transall duration-200 flexc rounded shadow bg-dark ${className}`}
      >
        {/* --------------- */}
        <div className="flexc flex-col flex-[1.5] me-3">
          <div className="flex-[1] text-[1.2em] font-bold font-Rubik mb-2 self-start">
            <span className="block w-[4.7em] h-[1.5em] bg-secondary animate-pulseku"></span>
          </div>
          <div className="flex-[1] text-[0.85em] self-start">
            <span className="block w-[6.2em] h-[1.5em] bg-secondary animate-pulseku"></span>
          </div>
        </div>
        {/* --------------- */}

        {/* --------------- */}
        <div className="text-left flex-col flex-[4]">
          <div className="flex-[4] text-[1.1em] font-bold mb-2">
            <span className="block w-[7em] h-[1.6em] bg-secondary animate-pulseku"></span>
          </div>
          <div className="flex-[4] text-[0.9em]">
            <span className="block w-[12em] h-[1.5em] bg-secondary animate-pulseku"></span>
          </div>
        </div>
        {/* --------------- */}

        {/* --------------- */}
        <div className="flex-[1] text-[1em] lg:text-[0.8em] font-bold relative animate-spinku">
          <span className="bg-secondary animate-pulseku size-[1.8rem] lg:size-[2rem] flexc trans-center rounded rotate-[45deg]">
            <span className="block rotate-[-45deg]">{""}</span>
          </span>
        </div>
        {/* --------------- */}
      </button>
    </>
  );
}

export default SkeletonSurah;
