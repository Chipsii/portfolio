import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/portfolio-site.jpg";
import mudslanger from "../../public/images/projects/mudslangers.jpg";
import project2 from "../../public/images/projects/AbletonClone.jpg";
import ohstudio from "../../public/images/projects/ohstudio.png";
import carShowcase from "../../public/images/projects/carShowcase.jpg";
import procurementing from "../../public/images/projects/procurementing.jpg";
import backstage from "../../public/images/projects/backstage.jpg";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2x1 rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
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

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold 
            dark:bg-light dark:text-dark sm:px-4 sm:text-base
            "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]" />

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
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
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
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout classname="pt-16 ">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Portfolio Website"
                img={project1}
                summary="The front-end of the portfolio was designed with a focus on modern and visually appealing aesthetics, utilizing HTML, CSS, and possibly JavaScript to achieve the desired interactive features. 
                                The user's projects are showcased with descriptions, images, and links to demonstrate their skills and accomplishments."
                link="https://hasib-hossain.netlify.app/"
                github="https://github.com/Chipsii/portfolio"
                type="Portfolio Website"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Mudslangers"
                img={mudslanger}
                summary="Mudslangers is an online platform that sells online tickets for different events help by the organization"
                link="https://www.mudslangers.com/"
                github="https://github.com/jubaedprince/mudslangers-frontend"
                type="Business Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="OH-STUDIO Clone"
                img={ohstudio}
                summary="Clone of the well-known website OH-STUDIO."
                link="https://oh-studio-clone-mu.vercel.app/"
                github="https://github.com/Chipsii/oh-studio-clone"
                type="Side Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="101cars"
                img={carShowcase}
                summary="The website car-showcase is a platform that offers services related to car rental. 
                The platform is designed to streamline the car rental experience by offering an effortless booking process."
                link="https://car-showcase-tawny.vercel.app/"
                github="https://github.com/Chipsii/car_showcase"
                type="Car Showcase project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Procurementing"
                img={procurementing}
                summary="Procurementing is a user-friendly SAAS procurement software tailored for small businesses. With Procurementing, businesses can efficiently manage purchase orders, approvals, and expenses, ultimately improving overall operational effectiveness. This SAAS Procurement Software focuses on simplicity without compromising functionality, making it an ideal solution for small businesses looking to enhance procurement efficiency and optimize supplier management"
                link="https://procurementing.com/"
                github="https://procurementing.com/"
                type="Procurement Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Ableton-Clone"
                img={project2}
                summary="Ableton clone is a platform that offers services related to music production."
                link="https://ableton-clone-pi.vercel.app/"
                github="https://github.com/Chipsii/ableton-clone"
                type="Side Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Backstage Talks Magazine"
                img={backstage}
                summary="Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right ones, we need to talk."
                link="https://backstagetalks-git-main-chipsiis-projects.vercel.app/"
                github="https://github.com/Chipsii/backstage-talks-magazine"
                type="Side Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
