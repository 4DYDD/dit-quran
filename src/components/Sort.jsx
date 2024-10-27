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
          <div
            className={`absolute top-12 left-0 flexs !items-start flex-col w-[15rem] text-[0.65rem] lg:text-[0.8rem] overflow-hidden bg-white rounded-md shadow ${
              !toggle && "!hidden"
            }`}
          >
            <li className="w-full py-1 hover:bg-slate-100 flexs before:content-['◊'] before:mx-2">
              menu1
            </li>
            <li className="w-full py-1 hover:bg-slate-100 flexs before:content-['◊'] before:mx-2">
              menu2
            </li>
            <li className="w-full py-1 hover:bg-slate-100 flexs before:content-['◊'] before:mx-2">
              menu3
            </li>
            <li className="w-full py-1 hover:bg-slate-100 flexs before:content-['◊'] before:mx-2">
              menu4
            </li>
            <li className="w-full py-1 hover:bg-slate-100 flexs before:content-['◊'] before:mx-2">
              menu5
            </li>
          </div>
        </button>
        <input
          readOnly
          className="input-sort cursor-pointer flex h-full w-[7rem] lg:w-[12rem] px-3 font-semibold transition-all bg-slate-200 text-dark  focus:outline-none rounded-e placeholder:text-dark placeholder:font-semibold active:text-[0.55rem] lg:active:text-[0.9rem] text-[0.6rem] lg:text-[1rem] relative"
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
