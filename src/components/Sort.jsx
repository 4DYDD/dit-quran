import { span } from "framer-motion/client";
import React, { useState } from "react";

function Sort({ placeholder }) {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div
        onClick={() => setToggle(!toggle)}
        className="flexc h-[2em] text-[0.1em] my-auto shadow"
      >
        <button className="h-full w-[2.5rem] bg-slate-200 flexc rounded-s group relative">
          {toggle ? (
            <i className="text-dark fa-solid fa-xmark -scale-x-100 group-active:-scale-x-90 group-active:scale-y-90 transall"></i>
          ) : (
            <i className="text-dark fa-solid fa-sort -scale-x-100 group-active:-scale-x-90 group-active:scale-y-90 transall"></i>
          )}

          {/* === SUGGESTION === */}
          <div
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
              <span className="leading-none flexc">
                {`Surah [ 1 `}
                <span className="px-1.5">
                  <i className="fa-solid fa-right-long"></i>
                </span>
                {`114 ]`}
              </span>,
              <span className="leading-none flexc">
                {`Surah [ 114 `}
                <span className="px-1.5">
                  <i className="fa-solid fa-right-long"></i>
                </span>
                {`1 ]`}
              </span>,
              <span className="leading-none flexc">
                <span>Tempat turunnya surah</span>
              </span>,
              <span className="leading-none flexc">
                {" "}
                <span>Jumlah ayat</span>
              </span>,
              <span className="leading-none flexc">
                {" "}
                <span>Juz</span>
              </span>,
            ].map((menu, index) => (
              <li
                key={index}
                className={`
                  w-full
                  py-2.5 m-1
                  hover:bg-dark hover:text-white
                  flexs
                  before:content-['◈'] before:mx-2 before:scale-[1.5] md:before:scale-[1.2]
                  bg-dark
                  text-white text-[1em] lg:text-[1em]
                  shadow-md shadow-gray-400
                  rounded-md
                  `}
              >
                {menu}
              </li>
            ))}
          </div>
          {/* === SUGGESTION === */}
        </button>
        <input
          readOnly
          className={`
            input-sort
            h-full w-[7rem] lg:w-[12rem]
            px-3
            text-dark font-semibold active:text-[0.65rem] text-[0.7rem] lg:text-[1rem] lg:active:text-[0.9rem] 
            placeholder:text-dark placeholder:font-semibold
            transition-all
            bg-slate-200
            focus:outline-none
            rounded-e
            cursor-pointer
            relative
            flex
            `}
          type="search"
          name="sort"
          id="sort"
          placeholder={placeholder}
        />
      </div>
    </>
  );
}

export default Sort;
