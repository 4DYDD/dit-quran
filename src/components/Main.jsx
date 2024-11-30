import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Surahs from "./Surahs";
import Ayats from "./Ayats";

function Main({ data, setPage }) {
  return (
    <>
      <div className="block mx-auto">
        <div className="flex flex-wrap content-center justify-center m-auto w-[20rem] md:w-full font-semibold text-center text-putih overflow-hidden pt-3">
          <Routes>
            <Route
              path="/"
              element={<Surahs data={data} setPage={setPage} />}
            />
            <Route path="/surah/:nomor" element={<Ayats setPage={setPage} />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Main;
