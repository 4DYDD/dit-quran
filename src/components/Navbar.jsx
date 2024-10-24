import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

import quran from "../assets/quran.png";
import my_quran from "../assets/my_quran.png";

import Image from "./Image";
import Search from "./Search";
import Sort from "./Sort";

function Navbar() {
  return (
    <>
      <motion.div
        className={`sticky top-0 w-full h-auto text-[9rem] lg:text-[12rem] pb-5 flex z-20 bg-gradient-to-t from-fuchsia-600 to-60% to-fuchsia-700`}
      >
        <div className="flex-col w-full text-[1em] text-center flexc">
          <Link to={``} className="flexc text-[1em]">
            <Image src={my_quran} />
          </Link>
          <div className="flexe !justify-center lg:!justify-end text-[1em] gap-5 w-full lg:w-[80rem] tracking-[1px]">
            <Sort placeholder={`Sort`} />
            <Search placeholder={`Search`} />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Navbar;
