import React from "react";
import Surah from "./Surah";
import SkeletonSurah from "./SkeletonSurah";

function Surahs({ data }) {
  return (
    <>
      {!data
        ? new Array(114).fill({}).map((value, index) => (
            <>
              <React.Fragment key={index}>
                <SkeletonSurah className={`m-2`} />
              </React.Fragment>
            </>
          ))
        : data.map((value, index) => (
            <React.Fragment key={index}>
              <Surah key={index} data={value} index={index} className={`m-2`} />
            </React.Fragment>
          ))}
    </>
  );
}

export default Surahs;
