"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";


export default function HomePage() {
  return (
    <motion.div className="h-full " initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:20px xl:px-48">

      <div className="h-1/2 lg:h-full lg:w-1/2 relative z-10">
        <Image src="/hero.png" alt="Hero picture" fill  className="object-contain z-10"/>
      </div>

      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl  font-bold">Code with Passion, Create with Purpose</h1>

        <p className="md:text-xl text-justify">Hey there, I'm Burak! A passionate Full Stack Developer specializing in Java and JavaScript. With expertise in building robust APIs, microservices architecture, and crafting interactive web applications using frameworks like React.js and Next.js. Let's innovate and build together!</p>

        <div className="flex gap-4 w-full justify-center items-center">
        <Link href={"./portfolio"}><button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">Check My Portfolio</button></Link>
          <Link href={"./contact"}><button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button></Link>

        </div>
      </div>
    </div>
    </motion.div>
  )
}
