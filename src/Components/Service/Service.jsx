import React from "react";
import { delay, easeInOut, motion } from "framer-motion";
import Coffee1 from "../../assets/coffee/coffee1.png"
import Coffee3 from "../../assets/coffee/coffee3.png"
import { div } from "framer-motion/client";


const ServiceData = [
    {
        id: 1,
        image: Coffee1,
        title: "Black Coffe",
        subtitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, recusandae!"
    },
    {
        id: 1,
        image: Coffee3,
        title: "Black Coffe",
        subtitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, recusandae!"
    },
    {
        id: 1,
        image: Coffee1,
        title: "Black Coffe",
        subtitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, recusandae!"
    }
]


const CardVariant = {
    hidden: {
        opacity: 0,
        y:20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: "150",
            damping: 10,
            ease : "easeInOut"
        }
    }
}
const ContainerVariant = {
    hidden: {
        opacity: 1,
        y:20,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.6,
            staggerChildren : 0.4,
        }
    }
}



const Service = () => {
  return (
    <div className="relative text-center w-full px-4 md:px-6 lg:px-36 mx-auto my-16">
      {/* header section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl font-bold text-lightGray"
        >
          Fresh <span className="text-primary">Tasty Coffe</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.6,
          }}
          className="text-sm opacity-50"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
          magni fugit assumenda quas officia hic consequatur, dolor amet et
          animi?
        </motion.p>
      </div>
      {/* Card Section */}
      <motion.div variants={ContainerVariant} initial="hidden" whileInView="visible" viewport={{amount :0.8}} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {ServiceData.map((service, key) => (
          <motion.div variants={CardVariant} key={key} className="text-center p-4 space-y-6">
            <img src={service.image} className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer" alt="" />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-primary">
                {service.title}
              </h1>
              <p className="text-darkGray">{service.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
