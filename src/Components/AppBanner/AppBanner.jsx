// import React from 'react'
import { motion, spring } from "framer-motion";

import bannerImg from "../../assets/coffee-cover.jpg";
import AppStoreImg from "../../assets/app-store.png";
import playStoreImg from "../../assets/play-store.png";

console.log(`url(${bannerImg})`);
const BannerStyle = {
  backgroundImage: `url(${bannerImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};
const AppBanner = () => {
  return (
    <div className="relative text-center w-full px-4 md:px-6 lg:px-36 mx-auto my-14">
      <div
        style={BannerStyle}
        className="sm:min-h-[400px] sm:flex sm:justify-end sm:items:center rounded-xl"
      >
        <div className="">
          <div className="space-y-6 max-w-xl mx-auto my-4">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              className="text-2xl text-center sm:text-4xl font-semibold"
            >
              Download our app
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              className="text-center sm:px-20"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
              provident delectus quasi. Voluptatibus aliquam aut distinctio
              doloribus ducimus veritatis sit illum. Aliquam dolore nam
              corporis!
            </motion.p>
            {/* image link */}
            <motion.div className="flex justify-center items-center gap-4">
              <a
                href="#"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              >
                <motion.img
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4,
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  }}
                  src={AppStoreImg}
                  alt=""
                />
              </a>
              <a
                href="#"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              >
                <motion.img
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5,
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  }}
                  src={playStoreImg}
                  alt=""
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
