import React, { useState, useEffect, useRef } from "react";

function Search({ data, placeholder }) {
  const myInput = useRef(null);
  const [value, setValue] = useState(null);
  const [suggestion, setSuggestion] = useState([]);
  const [isToggle, setIsToggle] = useState(false);
  const [searchSebelumnya, setSearchSebelumnya] = useState(null);

  // GLOBAL DOM FUNCTION
  document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "k" && event.ctrlKey) {
      event.preventDefault();
      myInput.current.focus();
    }
    if (
      event.key.toLowerCase() === "escape" &&
      document.activeElement === myInput.current
    ) {
      event.preventDefault();
      myInput.current.blur();
    }
  });

  // tutup suggestion
  useEffect(() => {
    window.addEventListener("click", (e) => {
      const target = e.target;
      if (!target.classList.contains("input-search")) {
        setIsToggle(false);
      }
    });
  }, []);

  // buka suggestion
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

  // suggestion
  const showSuggestion = (filteredSearch) => {
    setSuggestion(filteredSearch);
  };

  function tambahKelas(elemen, kelas) {
    kelas.forEach((kel) => {
      elemen.classList.add(kel);
    });
  }

  function hapusKelas(elemen, kelas) {
    kelas.forEach((kel) => {
      elemen.classList.remove(kel);
    });
  }

  const animate = (elemenTarget) => {
    // hapus searchSebelumnya
    if (searchSebelumnya) {
      hapusKelas(searchSebelumnya, [
        "!to-emerald-700",
        "!from-emerald-700",
        "animate-bounceku",
      ]);
    }
    setSearchSebelumnya(elemenTarget);

    // jadikan searchPertama
    tambahKelas(elemenTarget, [
      "!to-emerald-700",
      "!from-emerald-700",
      "animate-bounceku",
    ]);
  };

  const searching = (value) => {
    const dataDicari = data.find((datanya) => datanya.namaLatin == value).nomor;

    const elemenTarget = document.getElementById(`${dataDicari}-${dataDicari}`);

    elemenTarget.scrollIntoView({
      block: "center",
      behavior: "smooth",
      blockOffset: 200,
    });

    animate(elemenTarget);
    myInput.current.value = value;
    changeValue();
  };

  return (
    <>
      <div className="flexc h-[2em] text-[0.1em] my-auto shadow relative">
        <button
          className={`h-full px-2.5 border-2 border-r border-dark flexc rounded-s group bg-dark`}
        >
          <i
            className={`text-slate-300 fa-solid fa-magnifying-glass -scale-x-100 group-active:-scale-x-90 group-active:scale-y-90 transall`}
          ></i>
        </button>
        <input
          onChange={(e) => {
            e.preventDefault();
            changeValue();
          }}
          onFocus={() => {
            value && setIsToggle(true);
          }}
          ref={myInput}
          className={`
            input-search
            flex
            h-full w-[7rem] lg:w-[12rem]
            px-3
            font-semibold
            transition-all
            rounded-e
            bg-dark border-dark border-2 border-l
            placeholder:text-slate-300 placeholder:font-semibold
            focus:outline-none focus:text-[0.6rem] focus:text-slate-300 focus:lg:text-[0.9rem] 
            text-[0.65rem] text-slate-500 lg:text-[1rem] 
            relative
            `}
          type="search"
          name="search"
          id="search"
          placeholder={placeholder}
        />
        <span
          className={`
        absolute
        -top-6 left-0
        text-[0.8em] text-transparent lg:text-fuchsia-500 text-center
        w-full
          `}
        >
          {`[ctrl + K untuk fokus]`}
        </span>

        {/* === SUGGESTION === */}
        <div
          className={`
            absolute
            top-12 left-0
            flexs !items-start flex-col
            py-1
            w-full
            lg:w-[15rem] h-[8.5rem]
            overflow-auto
            text-[0.65rem] lg:text-[0.8rem]
            bg-white
            rounded-md
            shadow
            ${!isToggle && "!hidden"}
          `}
        >
          {suggestion.map((value, index) => (
            <React.Fragment key={index}>
              <button
                onClick={() => {
                  searching(value);
                }}
                className={`
                  w-full
                  py-1
                  hover:bg-slate-100
                  flexs
                  before:content-['⇒'] before:font-bold before:mx-2
                  focus:outline-none focus:bg-slate-200 focus:rounded-r-md
                  `}
              >
                {value}
              </button>
            </React.Fragment>
          ))}
        </div>
        {/* === SUGGESTION === */}
      </div>
    </>
  );
}

export default Search;
