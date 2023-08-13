import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import Article1 from "../../public/images/articles/CWDR.png";
import Article2 from "../../public/images/articles/MCSS.png";
import { motion, useMotionValue } from "framer-motion";
import Article3 from "../../public/images/articles/nodejs.png";
import Article4 from "../../public/images/articles/10bestframes.png";
import Article5 from "../../public/images/articles/jobwithout.png";
import Article6 from "../../public/images/articles/selftaught.png";
import Article7 from "../../public/images/articles/HTML5.png";
import Article8 from "../../public/images/articles/future.png";
import Article9 from "../../public/images/articles/devtrends.png";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display ="inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link href={link} target="_blank"

    onMouseMove={handleMouse}
    onMouseLeave={handleMouseLeave}

    >
      <h2 className=" capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x:x, y:y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className=" z-10 w-96 h-auto hidden absolute rounded-lg"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className=" relative w-full p-4 py-4 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className=" text-primary font-semibold pl-4 dark:text-primaryDark">{date}</span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className=" relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className=" absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className=" w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className=" w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className=" capitalize text-2xl font-bold my-2 mt-4 hover:underline">
          {title}
        </h2>
      </Link>
      <p className=" text-sm mb-2">{summary}</p>
      <span className=" text-primary font-semibold dark:text-primaryDark">{time}</span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Chips | Articles Page</title>
        <meta name="description" content="any description" />
      </Head>

      <main className=" w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Words Can Change The World!" className="mb-16 " />
          <ul className=" grid grid-cols-2 gap-16">
            <FeaturedArticle
              title="The Web Developer RoadMap"
              summary="This is not just an article of the sort but a fantastic resource on what it takes to become a Web developer. 
                It lists all the technologies and tools a Web developer should be familiar with."
              time="5 min read"
              link="https://javarevisited.blogspot.com/2019/02/the-2019-web-developer-roadmap.html"
              img={Article1}
            />
            <FeaturedArticle
              title="Modern CSS Explained For Dinosaurs"
              summary="This is another masterpiece from Peter Jang, author of the very first article in this list, but this time, he has covered CSS, another pillar of web development."
              time="9 min read"
              link="https://medium.com/actualize-network/modern-css-explained-for-dinosaurs-5226febe3525"
              img={Article2}
            />
          </ul>
          <h2 className=" font-bold text-4xl w-full text-center my-16 mt-32 ">
            All Articles
          </h2>
          <ul>
            <Article
              title="What exactly is Node.js?"
              date="August 11, 2023"
              link="https://www.freecodecamp.org/news/what-exactly-is-node-js-ae36e97449f5"
              img={Article3}
            />
            <Article
              title="Top 10 JavaScript Frameworks to Learn in Depth"
              date="August 15, 2023"
              link="https://www.java67.com/2019/01/top-10-javascript-frameworks-and-libraries-for-web-developers.html"
              img={Article4}
            />
            <Article
              title="How I landed a full stack developer job without a tech degree or work experience"
              date="August 20, 2023"
              link="https://www.freecodecamp.org/news/how-i-landed-a-full-stack-developer-job-without-a-tech-degree-or-work-experience-6add97be2051"
              img={Article5}
            />
            <Article
              title="How long does it take to get a job as a self taught programmer"
              date="August 22, 2023"
              link="https://www.anythingprogramming.com/2022/01/3-ways-to-learn-to-coding-within-three.html"
              img={Article6}
            />
            <Article
              title="Build Web applications with HTML 5"
              date="August 28, 2023"
              link="https://developer.ibm.com/articles/wa-html5webapp/"
              img={Article7}
            />
            <Article
              title="The future of responsive design"
              date="August 30, 2023"
              link="https://developer.ibm.com/articles/responsive-design-future/"
              img={Article8}
            />
            <Article
              title="Dominating Web Development Trends"
              date="September, 2023"
              link="https://medium.com/quick-code/dominating-web-development-trends-2021-94a8e86ba416"
              img={Article9}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
