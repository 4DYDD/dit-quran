import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

import quran from "../assets/quran.png";

import Image from "./Image";
import Search from "./Search";

function Navbar() {
  const { scrollYProgress } = useScroll();
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgba(217,70,239,1)", "rgba(147,51,235,1)"]
  );

  return (
    <>
      <motion.div
        style={{
          background,
        }}
        className={`sticky top-0 w-full h-auto text-[9rem] md:text-[12rem] pb-5 flex`}
      >
        <div className="flex-col w-full text-[1em] text-center flexc">
          <Link to={``} className="flexc text-[1em]">
            <Image src={quran} />
          </Link>
          <div className="flexc text-[1em]">
            <Search placeholder={`Search`} />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Navbar;
