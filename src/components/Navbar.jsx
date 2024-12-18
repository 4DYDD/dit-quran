import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import my_quran from "../assets/my_quran.png";

import Image from "./Image";
import Search from "./Search";
import Sort from "./Sort";

function Navbar({ data, surahData, setData, page }) {
  const myInput = useRef(null);

  const [value, setValue] = useState(null);
  const [suggestion, setSuggestion] = useState([]);
  const [searchSebelumnya, setSearchSebelumnya] = useState(null);

  const changeValue = (theValue) => {
    // ==!== perlu di sanitasi ==!==
    if (theValue == "") {
      myInput.current.value = theValue;
    }
    setValue(myInput.current.value);
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

  const animate = (elemenTarget, status) => {
    // hapus searchSebelumnya
    if (status) {
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
    } else {
      hapusKelas(elemenTarget, [
        "!to-emerald-700",
        "!from-emerald-700",
        "animate-bounceku",
      ]);
    }
  };

  const batalkanSearch = () => {
    // batalkan yah
    if (searchSebelumnya) {
      animate(searchSebelumnya, false);
    }
    changeValue("");
  };

  return (
    <>
      <motion.div
        className={`sticky top-0 w-full h-auto text-[9rem] lg:text-[12rem] flex z-20 bg-gradient-to-t from-fuchsia-600 to-60% to-fuchsia-700`}
      >
        <div className="flex-col w-full text-[1em] text-center flexc">
          <Link to={``} className="flexc text-[1em]">
            <Image src={my_quran} />
          </Link>
          {page == "home" && (
            <div className="flexe !justify-center lg:!justify-end text-[1em] gap-5 w-full lg:w-[80rem] tracking-[1px]">
              <Sort
                data={data}
                setData={setData}
                batalkanSearch={batalkanSearch}
                animate={animate}
                placeholder={`Urutkan`}
              />

              <Search
                data={data}
                batalkanSearch={batalkanSearch}
                suggestion={suggestion}
                setSuggestion={setSuggestion}
                animate={animate}
                myInput={myInput}
                changeValue={changeValue}
                value={value}
                placeholder={`Cari Surah`}
              />
            </div>
          )}

          {page == "surah" && (
            <div className="flexe !justify-center lg:!justify-end text-[1em] gap-5 w-full lg:w-[80rem] tracking-[1px]">
              <Sort
                data={data}
                setData={setData}
                batalkanSearch={batalkanSearch}
                animate={animate}
                placeholder={`# development #`}
              />

              <Search
                data={data}
                batalkanSearch={batalkanSearch}
                suggestion={suggestion}
                setSuggestion={setSuggestion}
                animate={animate}
                myInput={myInput}
                changeValue={changeValue}
                value={value}
                placeholder={`# development #`}
              />
            </div>
          )}

          <div className="rounded-b-full bg-dark h-[8px] w-[20rem] lg:w-[85rem] my-2"></div>
        </div>
      </motion.div>
    </>
  );
}

export default Navbar;
