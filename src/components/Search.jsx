import React from "react";

function Search({ placeholder }) {
  return (
    <>
      <div className="flexc h-[2em] text-[0.1em] my-auto">
        <button className="h-full px-2.5 border-2 border-r border-primary flexc rounded-s group">
          <i className="text-primary fa-solid fa-magnifying-glass -scale-x-100 group-active:-scale-x-90 group-active:scale-y-90 transall"></i>
        </button>
        <input
          className="h-full w-[12rem] px-3 font-semibold transition-all bg-transparent border-2 border-l text-primary border-primary focus:outline-none rounded-e placeholder:text-primary placeholder:font-semibold focus:text-[0.8rem] md:focus:text-[1rem] md:text-[1.1rem]"
          type="text"
          name="search"
          id="search"
          placeholder={placeholder}
        />
      </div>
    </>
  );
}

export default Search;
