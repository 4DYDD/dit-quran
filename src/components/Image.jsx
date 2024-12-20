import React from "react";

function Image({ src, className = "" }) {
  return (
    <>
      <div
        className={`rounded-full w-[1em] h-[1em] flex justify-center items-center relative overflow-hidden !pointer-events-none !select-none ${className}`}
      >
        <img
          className={`w-full h-full trans-center drop-shadow-lg`}
          src={src}
          alt="profile picture"
        />
      </div>
    </>
  );
}

export default Image;
