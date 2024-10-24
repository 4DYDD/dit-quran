import React from "react";
import Surah from "./Surah";
import SkeletonSurah from "./SkeletonSurah";

function Surahs({ data }) {
  return (
    <>
      {!data
        ? new Array(114).fill({ data: "" }).map((value, index) => (
            <React.Fragment key={index}>
              <SkeletonSurah className={`m-2`} />
            </React.Fragment>
          ))
        : data.map((value, index) => {
            console.log(index);
            return (
              <React.Fragment key={index + 1}>
                <Surah data={value} className={`m-2`} />
              </React.Fragment>
            );
          })}
    </>
  );
}

export default Surahs;
