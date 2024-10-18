import React from "react";

function Image({ src, className = "" }) {
  return (
    <>
      <div
        className={`rounded-full w-[1em] h-[1em] flex justify-center items-center relative overflow-hidden ${className}`}
      >
        <img
          className={`w-full h-full trans-center drop-shadow-md`}
          src={src}
          alt="profile picture"
        />
      </div>
    </>
  );
}

export default Image;
