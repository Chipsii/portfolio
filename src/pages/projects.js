import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import project1 from "../../public/images/projects/portfolio-site.jpg";
import project2 from "G:\Web development\portfolio\public\images\projects\spotitubemerge.jpg";



const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="w-full flex items-center justify-between relative rounded-br-2x1 rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12">
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />

        <Link href={link} target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
        >
            <Image src={img} alt={title} className=" w-full h-auto" />
        </Link>

        <div className="w-1/2 flex flex-col items-start justify-between pl-6 ">
            <span className="text-primary font-medium text-xl">{type}</span>
            <Link href={link} target="_blank" className="hover:underline underline-offset-2">
            <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
        <Link href={link} target="_blank" className="w-10"> <GithubIcon/> </Link>
        <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold  ">Visit Project</Link>
        </div>
        </div>

        </article>
    )
}


const Project = ({ title, type, img, link, github }) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />

        <Link href={link} target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        >
            <Image src={img} alt={title} className=" w-full h-auto" />
        </Link>

        <div className="w-full flex flex-col items-start justify-between mt-4 ">
            <span className="text-primary font-medium text-xl">{type}</span>
            <Link href={link} target="_blank" className="hover:underline underline-offset-2">
            <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
        <Link href={link} target="_blank" className="text-lg font-semibold underline">Visit</Link>
        <Link href={github} target="_blank" className="w-8"> <GithubIcon/> {" "} </Link>
        </div>
        </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Chips | Project Page</title>
                <meta name="description" content="any description" />
            </Head>
            <main className="w-full mb-16 flex flex-col items-center justify-center">
                <Layout classname='pt-16 '>
                    <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16" />
                    <div className="grid grid-cols-12 gap-24 gap-y-32">
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Portfolio Website"
                                img={project1}
                                summary="The portfolio website was designed with a focus on modern and visually appealing aesthetics..."
                                link="https://hasib-hossain.netlify.app/"
                                github="https://github.com/Chipsii/"
                                type="Portfolio Website"
                            />
                        </div>
                        <div className="col-span-6">
                            <Project
                                title="Portfolio Website"
                                img={project1}
                                summary="The portfolio website was designed with a focus on modern and visually appealing aesthetics..."
                                link="https://github.com/Chipsii/portfolio"
                                github="https://github.com/Chipsii/"
                                type="Portfolio Website"
                            />
                        </div>
                <div className="col-span-6">
                <Project
                    title="To do list Project"
                    img={project1}
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
                    link="https://github.com/Chipsii/spotitubemerge"
                    github="https://github.com/Chipsii/"
                    type="Featured Project"
                    />
                </div>
                <div className="col-span-6">
                <Project
                    title="Dummy Drum Website"
                    img={project1}
                    summary="The purpose of the project appears to be creating a virtual drumming experience where users can simulate playing different drum sounds using their computer keyboard or other input devices."
                    link="https://github.com/Chipsii/Drum"
                    github="https://github.com/Chipsii/"
                    type="Drum play project"
                    />
                </div>
                <div className="col-span-6">
                <Project
                    title="Roll Dice Application"
                    img={project1}
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
    )
}

export default projects;