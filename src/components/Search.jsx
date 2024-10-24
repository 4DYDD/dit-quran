import React from "react";

function Search({ placeholder }) {
  return (
    <>
      <div className="flexc h-[2em] text-[0.1em] my-auto">
        <button className="h-full px-2.5 border-2 border-r border-dark flexc rounded-s group bg-dark">
          <i className="text-slate-300 fa-solid fa-magnifying-glass -scale-x-100 group-active:-scale-x-90 group-active:scale-y-90 transall"></i>
        </button>
        <input
          className="input-search flex h-full w-[7rem] lg:w-[12rem] px-3 font-semibold transition-all border-2 border-l text-slate-300 bg-dark border-dark focus:outline-none rounded-e placeholder:text-slate-300 placeholder:font-semibold focus:text-[0.55rem] lg:focus:text-[0.9rem] text-[0.6rem] lg:text-[1rem] relative"
          type="search"
          name="search"
          id="search"
          placeholder={placeholder}
        />
      </div>
    </>
  );
}

export default Search;
