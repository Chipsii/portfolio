import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Article1 from "../../public/images/articles/CWDR.png";
import Article2 from "../../public/images/articles/MCSS.png";


const FeaturedArticle = ({img, title, time, summary, link}) => {
    return (
        <li className=" col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl">
            <Link href={link} target="_blank"
        className=" w-full cursor-pointer overflow-hidden rounded-lg">
               <Image src={img} alt={title} className=" w-full h-auto" />
            </Link>
            <Link href={link} target="_blank">
                <h2 className=" capitalize text-2xl font-bold my-2 hover:underline">{title}</h2>
            </Link>
            <p className=" text-sm mb-2">{summary}</p>
            <span className=" text-primary font-semibold">{time}</span>
        </li>
    )
}


const articles = () => {
    return (
        <>
        <Head>
            <title>Chips | Articles Page</title>
            <meta name="description" content="any description" />
        </Head>

        <main className=" w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
            <Layout classname="pt-16">
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
            </Layout>
        </main>
        </>
    )
}

export default articles;