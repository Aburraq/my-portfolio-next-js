"use client";

import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

export default function PageTransition({children}) {

    const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
        <div key={pathname} className="w-screen h-screen bg-gradient-to-br from-blue-200 to-red-200">
            <motion.div className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40" 
            animate={{height:"0vh"}}
            exit={{height:"140vh"}}
            transition={{duration:0.5, ease:"easeOut"}}/>

            <motion.div className="fixed m-auto top-0 bottom-0 right-0 left-0 text-white sm:text-2xl  md:text-4xl lg:text-8xl cursor-default z-50 w-fit h-fit" 
            initial={{opacity:1}}
            animate={{opacity:0}}
            exit={{opacity:0}}
            transition={{duration:0.75, ease:"easeOut"}}>
                {pathname === "/" ? "Home" : pathname.substring(1).toUpperCase()}
            </motion.div>

            <motion.div className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-40" 
            initial={{height:"140vh"}}
            animate={{height:"0vh", transition: {delay:0.5}}}
            transition={{duration:0.5, ease:"easeOut"}}/>
          <div className="h-24">
          <Navbar />
          </div>

          <div className="h-[calc(100vh-6rem)]">
          {children}
          </div>
        </div>
    </AnimatePresence>
  )
}
