import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Surahs from "./Surahs";
import Ayats from "./Ayats";

function Main({ setIsNavbar, data }) {
  return (
    <>
      <div className="block mx-auto">
        <div className="flex flex-wrap content-center justify-center w-[20rem] lg:w-[90rem] font-semibold text-center text-slate-300">
          <Routes>
            <Route path="/" element={<Surahs data={data} />} />
            <Route
              path="/surah/:nomor"
              element={<Ayats setIsNavbar={setIsNavbar} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Main;
