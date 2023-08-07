import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);
    return (
     <li ref={ref} className=" my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
        
        <LiIcon reference={ref}/>

        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className=" capitalize font-bold text-2xl">{position}&nbsp;<a href={companyLink}
            target=" _blank"
            className=" text-primary capitalize"
            >@{company}</a></h3>
            <span className=" capitalize font-medium text-dark/75 ">
                {time} | {address}
            </span>
            <p className=" font-medium w-full">
                {work}
            </p>
        </motion.div>
    </li>
  )
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center">
            Experience
            </h2>

            <div ref={ref} className=" w-[75%] mx-auto relative">

<motion.div 
style={{scaleY: scrollYProgress}} 
className=" absolute left-9 top-0 w-[4px] h-full bg-dark origin-top" />

                <ul className=" w-full flex flex-col items-start justify-between ml-4">
                    <Details 
                    position="Front-end Web Developer" company="PixelIT Institute"
                    companyLink="https://www.pixelitinst.com/"
                    time="2022-2023" address="Dhaka, Bangladesh"
                    work="Worked on a team responsible for developing new features for PixelIT's API,
                    including improving the response, mobile-friendly design and 
                    developing new features for sensible website navigation and visualization."
                    />

                    <Details 
                    position="Teaching Assistant" company="Oxysome"
                    companyLink="https://www.facebook.com/OxysomeGaming/"
                    time="2019-2022" address="Dhaka, Bangladesh"
                    work="Assisted in teaching a course on computer programming, held office hours to help students with assignments, 
                    and graded exams and assignments."
                    />

                    <Details 
                    position="Graphics Designer" company="BSRS"
                    companyLink=""
                    time="2023" address="Dhaka, Bangladesh"
                    work="Created engaging and responsive website designs with CodePen that increased website traffic.
                    Streamlined CSS styling process with Sass to reduce production time."
                    />

                </ul>
            </div>
        </div>
    )
}

export default Experience;