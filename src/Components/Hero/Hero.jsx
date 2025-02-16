import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import BgImage from "../../assets/bg-slate.png";
import CoffeMain from "../../assets/black.png";
import Navbar from "../Navbar/Navbar";
import { motion, spring } from "framer-motion";
import React from "react";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "Cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  const [sidebar, setSidebar] = React.useState(false);

  console.log("Sidebar value", sidebar);

  return (
    <main style={bgImage}>
      <section className="reltive min-h-[750px] w-full ">
        <div className="container">
          {/* Navbar section */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* Text Content Section */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28 text-left ">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="text-7xl font-bold leading-tight ml-14 "
              >
                Blvck Tumbler
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black LifeStyle Lovers</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore ex praesentium facilis illum quas incidunt qui neque,
                    molestiae a dolorem rem molestias officiis eos repellat,
                    quisquam ad! Consectetur, magni veniam?
                  </h1>
                </div>
                <div className="absolute -top-8 -left-10 w-[250px] h-[190px] bg-lightGray"></div>
              </motion.div>
            </div>
            {/* Hero Image Section */}
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                src={CoffeMain}
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
                alt=""
              />
              {/* orange circle ring circle */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary rounded-full border-[20px] z-10"
              ></motion.div>

              {/* big text section */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="absolute -top-5 left-[200px] z-[1]"
              >
                <h1 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none ">
                  Black Tumbler
                </h1>
              </motion.div>
            </div>
            {/* Third div Section */}
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="text-lightOrange mt-[100px] md:mt-28 p-4 space-y-28 text-left"
              >
                <h1 className="text-7xl font-bold leading-tight ml-14"></h1>
                <div className="relative">
                  <div className="relative z-10 space-y-4 ml-10">
                    <h1 className="text-2xl">Blvck Tumbler</h1>
                    <h1 className="text-sm opacity-55 leading-loose">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Labore ex praesentium facilis illum quas incidunt qui
                    </h1>
                  </div>
                  <div className="absolute -right-10 -top-2 w-[250px] h-[190px] bg-darkGray/50"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        {sidebar && (
          <motion.div
            initial={{ x: 100 }}
            whileInView={{ x: 1 }}
            className="absolute top-0 right-0 w-[140px] h-full   bg-gradient-to-b from-primary/80 to-primaryDark backdrop-blur-sm z-10"
          >
            <div className="w-full h-full flex justify-center items-center gap-6 text-white">
              {/* line */}
              <div className="flex flex-col justify-center items-center gap-6 text-white">
                <div className="w-[1px] h-[70px] bg-white"></div>
                {/* Social Icons */}
                <div className="inline-block p-2 rounded-full cursor-pointer border-white">
                  <FaFacebook className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border-white">
                  <FaTwitter className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border-white">
                  <FaInstagram className="text-2xl" />
                </div>
                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </motion.div>
        )}
        {/* Sidebar Menu Section */}
      </section>
    </main>
  );
};

export default Hero;
