import { motion } from "framer-motion";
import React from "react";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute 
      dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: {duration: 1.5} }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h1 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">Skills</h1>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circualrLight dark:bg-circualrDark
      lg:h-[80vh] sm:-h-[60vh] xs:h-[50vh] 
      lg:bg-circualrLightLg lg:dark:bg-circualrDarkLg
      md:bg-circualrLightMd md:dark:bg-circualrDarkMd
      sm:bg-circualrLightSm sm:dark:bg-circualrDarkSm
      ">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer 
          dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="HTML" x="-22vw" y="2vw" />
        <Skill name="Javascript" x="20vw" y="8vw" />
        <Skill name="ReactJS" x="0vw" y="10vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="Laravel" x="30vw" y="-5vw" />
        <Skill name="Graphics Designing" x="0vw" y="-20vw" />
        <Skill name="PHP" x="-22vw" y="13vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Tailwind CSS" x="18vw" y="19vw" />
      </div>
    </>
  );
};

export default Skills;