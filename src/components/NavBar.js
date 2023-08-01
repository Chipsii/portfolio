import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Logo from './Logo';
import { TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon } from './Icons';
import { motion } from "framer-motion"

const CoustomLink = ({href, title, className=""}) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`
            h-[1px] inline-block bg-dark
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            `}>&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {
    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
            <nav>
            <CoustomLink href="/" title="Home" className='mr-4' />
            <CoustomLink href="/about" title="About" className='mx-4' />
            <CoustomLink href="/projects" title="Projects" className='mx-4' />
            <CoustomLink href="/articles" title="Articles" className='ml-4' />
            </nav>

            <nav className='flex items-center justify-center flex-wrap'>
                <motion.a href="https://twitter.com/ChipsIsCool" target={"_blank"} whileHover={{y:-2 }} whileTap={{scale:0.9}} className="w-6 mx-3">
                    <TwitterIcon /></motion.a>
                <motion.a href="https://github.com/Chipsii" target={"_blank"} whileHover={{y:-2 }} whileTap={{scale:0.9}} className="w-6 mx-3">
                    <GithubIcon /></motion.a>
                <motion.a href="https://www.linkedin.com/in/hasib-hossain-6ab761260/" target={"_blank"} whileHover={{y:-2 }} whileTap={{scale:0.9}} className="w-6 mx-3">
                    <LinkedInIcon/></motion.a>
                <motion.a href="https://www.pinterest.jp/chipskun/" target={"_blank"} whileHover={{y:-2 }} whileTap={{scale:0.9}} className="w-6 mx-3">
                    <PinterestIcon/></motion.a>
                <motion.a href="https://dribbble.com/Chipss" target={"_blank"} whileHover={{y:-2 }} whileTap={{scale:0.9}} className="w-6 ml-3">
                    <DribbbleIcon/></motion.a>
            </nav>

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            <Logo />
            </div>

        </header>
    );
};

export default NavBar;