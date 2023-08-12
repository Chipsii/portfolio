import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className=" w-full border-t-2 border-solid border-dark font-medium text-lg 
      dark:text-light dark:border-light
      ">
      <Layout classname=" py-8 flex items-center justify-between ">
        <span>{new Date().getFullYear()}&copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build With <span className="text-primary dark:text-primaryDark text-2x1 px-1">&#9825;</span>
          by&nbsp;
          <Link
            href="https://spotitubemerge.nexentra.online"
            className=" underline underline-offset-2"
            target={"_blank"}
          >
            Chips
          </Link>
        </div>
        <Link
          href="https://spotitubemerge.nexentra.online"
          target={"_blank"}
          className="underline underline-offset-2 "
        >
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
