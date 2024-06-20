"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

export default function Navbar() {
  const links = [
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/about",
      title: "About",
    },
    {
      url: "/portfolio",
      title: "Portfolio",
    },
    {
      url: "/contact",
      title: "Contact",
    },
  ];

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: "0",
      transition:{
        when: "beforeChildren",
        staggerChildren: 0.25
      }
    },
  };

  const listItemVariants = {
    closed: {
      x: "-10",
      opacity:0
    },
    opened: {
      x: "0",
      opacity:1
    },
  };

  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:20px xl:px-48 text-lg">
      <div className="hidden md:flex gap-4 w-1/3 justify-center">
        {links.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
      </div>
      <div className="md:hidden lg:flex w-1/3 justify-center">
        <Link href={"./"} className="p-1">
          <Image
            className=""
            src={"./logo.svg"}
            alt="Logo of Burak the Developer"
            width={75}
            height={75}
          />
        </Link>
      </div>

      <div className="hidden md:flex gap-4 w-1/3 justify-center ">
        <Link href={"https://github.com/Aburraq"}>
          <Image src={"/github.png"} alt="github logo" width={30} height={30} />
        </Link>
        <Link href={"https://www.linkedin.com/in/ali-burak-kaya/"}>
          <Image
            src={"/linkedin.png"}
            alt="linkedin logo"
            width={30}
            height={30}
          />
        </Link>
        <Link href={"/portfolio"}>
          <Image src={"/web.png"} alt="webpage logo" width={30} height={30} />
        </Link>
      </div>

      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>

        {open && (
          <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
            {links.map((link) => (
              <motion.div key={link.title} variants={listItemVariants} className="">
                <Link  href={link.url} className="z-50">
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
