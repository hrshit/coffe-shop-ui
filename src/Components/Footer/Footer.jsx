// import React from "react";

import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import CreditCards from "../../assets/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-lightOrange">
      <div className="container  py-10 text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* compony detailed section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="space-y-6 text-left"
          >
            <h1 className="text-3xl font-semibold uppercase text-white">
              Coders Coffee
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi nulla enim laborum consequatur blanditiis iure!
            </p>
            <div className="place-content-center">
              <p className="flex items-center gap-2">
                <FaPhone />
                +1 (123) 456-7890
              </p>
              <p className="flex items-center gap-2 mt-2">
                <FaMapLocation />
                +1 (123) 456-7890
              </p>
            </div>
          </motion.div>
          {/* Footer links section  */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="space-y-6 text-left"
          >
            <h1 className="text-3xl font-semibold">Quick links</h1>
            <div className="grid grid-cols-2 gap-3">
              {/* first Column  */}
              <div className="">
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              {/* Second Column  */}
              <div className="">
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* Social Link Section  */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className="space-y-6 text-left"
          >
            <h1 className="text-3xl font-bold">Follow us</h1>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-150 duration-300" />
              <FaInstagram className="text-3xl hover:scale-150 duration-300" />
              <FaTelegram className="text-3xl hover:scale-150 duration-300" />
              <FaGoogle className="text-3xl hover:scale-150 duration-300" />
              <FaFacebook className="text-3xl hover:scale-150 duration-300" />
            </div>
            <div>
              <h1 className="text-xl font-semibold mb-2">Payment Methods</h1>
              <img src={CreditCards} alt="Credit Cards" className="w-[80%]" />
            </div>
          </motion.div>
        </div>
        <br className="w-full h-2 " />

        {/* Copyright Section  */}
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            delay: 0.8,
            duration: 0.6,
          }}
          className="text-white text-center mt-8 pt-2"
        >
          Copyright &copy: 2024 Compony Name. All rights reserved.
        </motion.p>
      </div>
    </div>
  );
};

export default Footer;
