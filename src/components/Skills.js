import { motion } from 'framer-motion';
import React from 'react';


const Skill = ({name, x, y}) => {
    return (
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute "
            whileHover={{scale:1.05}}
            initial={{x:0,y:0}}
            whileInView={{ x:x,y:y }}
            transition={{duration: 1.5}}
            viewport={{once: true}}
            >
                {name}
            </motion.div>
    )
}

const Skills = () => {
    return (
        <>
        <h1 className="font-bold text-8xl mt-64 w-full text-center">Skills</h1>
        <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circualrLight">

            <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
            whileHover={{scale:1.05}}
            >
                Web
            </motion.div>

            <Skill name="HTML" x="-25vw" y="2vw"/>
            <Skill name="Javascript" x="21vw" y="8vw"/>
            <Skill name="ReactJS" x="0vw" y="11vw"/>
            <Skill name="NextJS" x="-20vw" y="-15vw"/>
            <Skill name="Web Design" x="32vw" y="-5vw"/>
            <Skill name="Graphics Designing" x="0vw" y="-21vw"/>
            <Skill name="Figma" x="-22vw" y="13vw"/>
            <Skill name="CSS" x="-5vw" y="-10vw"/>
            <Skill name="Tailwind CSS" x="18vw" y="19vw"/>

        </div>
        </>
    )
}

export default Skills;