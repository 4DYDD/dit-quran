import React, { useState, useEffect, useRef } from "react";

function Search({ data, placeholder }) {
  const myInput = useRef(null);
  const [value, setValue] = useState(null);
  const [suggestion, setSuggestion] = useState([]);
  const [isToggle, setIsToggle] = useState(false);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      const target = e.target;
      if (!target.classList.contains("input-search")) {
        setIsToggle(false);
      }
    });
  }, []);

  useEffect(() => {
    if (value) {
      const filteredSearch = data
        .filter((datanya) =>
          datanya.namaLatin.toLowerCase().includes(value.toLowerCase())
            ? true
            : false
        )
        .map((datanyatuh) => datanyatuh.namaLatin);

      showSuggestion(filteredSearch);
      if (!isToggle) setIsToggle(true);
    } else {
      showSuggestion([]);
      setIsToggle(false);
    }
  }, [value]);

  const changeValue = () => {
    // ==!== perlu di sanitasi ==!==
    setValue(myInput.current.value);
  };

  const showSuggestion = (filteredSearch) => {
    setSuggestion(filteredSearch);
    console.log(filteredSearch);
  };

  return (
    <>
      <div className="flexc h-[2em] text-[0.1em] my-auto shadow relative">
        <button className="h-full px-2.5 border-2 border-r border-dark flexc rounded-s group bg-dark">
          <i className="text-slate-300 fa-solid fa-magnifying-glass -scale-x-100 group-active:-scale-x-90 group-active:scale-y-90 transall"></i>
        </button>
        <input
          onChange={() => {
            changeValue();
          }}
          onFocus={() => {
            value && setIsToggle(true);
          }}
          ref={myInput}
          className="input-search flex h-full w-[7rem] lg:w-[12rem] px-3 font-semibold transition-all border-2 border-l text-slate-300 bg-dark border-dark focus:outline-none rounded-e placeholder:text-slate-300 placeholder:font-semibold focus:text-[0.55rem] lg:focus:text-[0.9rem] text-[0.6rem] lg:text-[1rem] relative"
          type="search"
          name="search"
          id="search"
          placeholder={placeholder}
        />
        <div
          className={`absolute top-12 left-0 flexs !items-start flex-col py-1 w-full lg:w-[15rem] h-[8.5rem] overflow-auto text-[0.65rem] lg:text-[0.8rem] bg-white rounded-md shadow ${
            !isToggle && "!hidden"
          }`}
        >
          {suggestion.map((value, index) => (
            <React.Fragment key={index}>
              <button
                onClick={() => {
                  const dataDicari = data.find(
                    (datanya) => datanya.namaLatin == value
                  ).nomor;

                  const elemenTarget = document.getElementById(`${dataDicari}`);
                  elemenTarget.scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                    blockOffset: 500,
                  });
                }}
                className="w-full py-1 hover:bg-slate-100 flexs before:content-['◊'] before:mx-2"
              >
                {value}
              </button>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default Search;
