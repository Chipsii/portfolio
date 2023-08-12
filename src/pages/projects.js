import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/portfolio-site.jpg";
import subProject from "../../public/images/projects/portfolio-site-2.jpg";
import project2 from "../../public/images/projects/sym.jpg";
import todolist from "../../public/images/projects/todolist.jpg";
import drum from "../../public/images/projects/drum.jpg";
import diceGame from "../../public/images/projects/dicegame.jpg";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2x1 rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className=" w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light ">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={link} target="_blank" className="w-10">
            {" "}
            <GithubIcon />{" "}
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold 
            dark:bg-light dark:text-dark
            ">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className=" w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
            {" "}
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Chips | Project Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout classname="pt-16 ">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Portfolio Website"
                img={project1}
                summary="The front-end of the portfolio was designed with a focus on modern and visually appealing aesthetics, utilizing HTML, CSS, and possibly JavaScript to achieve the desired interactive features. 
                                The user's projects are showcased with descriptions, images, and links to demonstrate their skills and accomplishments."
                link="https://hasib-hossain.netlify.app/"
                github="https://github.com/Chipsii/"
                type="Portfolio Website"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Portfolio Website"
                img={subProject}
                summary="The front-end of the portfolio was designed with a focus on modern and visually appealing aesthetics, utilizing HTML, CSS, and possibly JavaScript to achieve the desired interactive features. 
                                The user's projects are showcased with descriptions, images, and links to demonstrate their skills and accomplishments."
                link="https://github.com/Chipsii/SS"
                github="https://github.com/Chipsii/"
                type="Portfolio Website"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="To do list Project"
                img={todolist}
                summary="This to-do list application allows users to manage tasks and activities by creating, editing, and marking tasks as completed. 
                    The project involve front-end development using HTML, CSS, and JavaScript to create an interactive user interface where tasks can be added, edited, and marked off as completed. 
                    It also involve back-end development for tasks such as data storage, user authentication, and task management."
                link="https://github.com/Chipsii/todolist2"
                github="https://github.com/Chipsii/"
                type="To do list App"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="SpotiTubeMerge"
                img={project2}
                summary="SpotiTubeMerge is an innovative online platform that allows users to merge their Spotify and YouTube playlists, providing a unified music experience in a single harmonious platform. 
                    With SpotiTubeMerge, users can effortlessly connect their Google and Spotify accounts using authorized tokens, enabling them to combine and synchronize playlists from both services. 
                    Say goodbye to switching between apps to enjoy your favorite songs - SpotiTubeMerge optimizes music curation and ensures a seamless music listening experience."
                link="https://spotitubemerge.nexentra.online"
                github="https://github.com/Chipsii/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Dummy Drum Website"
                img={drum}
                summary="The purpose of the project appears to be creating a virtual drumming experience where users can simulate playing different drum sounds using their computer keyboard or other input devices."
                link="https://github.com/Chipsii/Drum"
                github="https://github.com/Chipsii/"
                type="Drum play project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Roll Dice Application"
                img={diceGame}
                summary=""
                link="https://github.com/Chipsii/Dice"
                github="https://github.com/Chipsii/"
                type="Dice Application"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;