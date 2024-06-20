"use client";
import {motion, useInView, useScroll} from "framer-motion";
import Brain from "../components/Brain";
import { useRef } from "react";
import ScrollDown from "../components/ScrollDown";

export default function AboutPage() {

  const containerRef = useRef();

  const {scrollYProgress} = useScroll({container: containerRef});

  const skillsRef = useRef();
  const isSkillsRefInView = useInView(skillsRef, {once:true, margin:"-100px"});

  const expRef = useRef();
  const isExpRefInView = useInView(expRef, {once:true, margin:"-100px"});

  return (
    <motion.div className="h-full " initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>

      <div className="container h-full overflow-y-scroll lg:flex" ref={containerRef}>
        <div className="text p-4 sm:p-8 md:p-14 lg:p-18 xl:p-24 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 lg:w-1/2">
          <div className="bio flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">Hi there, I am Burak! 👋 With nearly 3 years of hands-on experience, I am a dedicated Full Stack Developer specializing in Java and JavaScript. My expertise spans building scalable microservices and RESTful APIs using Spring Framework and integrating with databases like PostgreSQL and MongoDB. I am proficient in modern frontend frameworks such as React.js, Next.js, Angular, and Vue.js, and adept in deploying applications using Docker, Kubernetes, and AWS. Let&apos;s collaborate to transform ideas into innovative solutions!</p>
            <span className="italic">Full Stack Developer</span>
            <div className="self-end">Ali Burak KAYA</div>
          </div>

          <ScrollDown scrollYProgress={scrollYProgress}/>

          <div className="skill-container flex flex-col gap-12 justify-center" ref={skillsRef}>
            <motion.h1 
            initial={{x:"-500px"}} 
            animate={isSkillsRefInView ? {x:0}:{}} 
            transition={{delay:0.25}}
            className="skill-title font-bold text-2xl">SKILLS</motion.h1>
            <motion.div 
              initial={{x:"-500px"}} 
              animate={isSkillsRefInView ? {x:0}:{}} 
              transition={{delay:0.25}}
              className="flex gap-4 flex-wrap">
              <div className="skill-list rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              ☕ Java
              </div>
              <div className="skill-list rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              🚀 JavaScript
              </div>
              <div className="skill-list rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              🌱 Spring Framework
              </div>
              <div className="skill-list rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              ⚛️ React.js
              </div>
              <div className="skill-list rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              🛠️ Next.Js
              </div>
              <div className="skill-list rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              🗺️ Object-Relational Mapping
              </div>
              <div className="skill-list rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              🛏️ Hibernate
              </div>
              <div className="skill-list rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              🐙 Git, GitHub
              </div>
              <div className="skill-list rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              🔄 RESTful API
              </div>
              <div className="skill-list rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              🛠️ Microservices
              </div>
              <div className="skill-list rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              🧪 Testing, CI/CD
              </div>
              <div className="skill-list rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              🐘 PostgreSQL, MongoDB
              </div>
              <div className="skill-list rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              🐳 Docker, Kubernetes
              </div>
              <div className="skill-list rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              🐘 Apache Kafka
              </div>
              <div className="skill-list rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              ☁️ AWS
              </div>
              <div className="skill-list rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              🌐 HTML, CSS, Bootstrap
              </div>
              <div className="skill-list rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              🅰️ Angular
              </div>
              <div className="skill-list rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              🖖 Vue.js
              </div>
            </motion.div>


          </div>

          <ScrollDown scrollYProgress={scrollYProgress}/>

          <div className="experience-container bio flex flex-col gap-12 justify-center pb-44 text-center" ref={expRef}>
            <motion.h1 
              initial={{x:"-500px"}} 
              animate={isExpRefInView ? {x:0}:{}} 
              transition={{delay:0.25}}
              className="experience-title font-bold text-2xl">EXPERIENCE</motion.h1>
            <motion.div
                initial={{x:"-500px"}} 
                animate={isExpRefInView ? {x:0}:{}} 
                transition={{delay:0.25}}
              className="-experience-list ">
              {/* Style the content properly */}
              <div className="lit-item flex justify-between h-48">
                <div className="left w-1/3">
                  <div className="job-title bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Full Stack Developer</div>
                  <div className="job-description p-3 text-sm italic">Focused on designing and implementing scalable server-side applications with Java as well as JavaScript for backend development and creating dynamic front-end interfaces using frameworks like React.js and Next.js.</div>
                  <div className="-job-date p-3 text-red-400 text-sm font-semibold">2024-Present</div>
                  <div className="job-company p-1 rounded bg-white text-sm font-semibold w-fit">TechPro</div>

                  
                </div>



                <div className="center w-1/6">
                  <div className="line w-1 h-full bg-gray-600 rounded relative">
                    <div className="circle absolute w-5 h-5 rounded-full ring-4 ring-red-300 bg-white -left-2"></div>
                  </div>
                </div>


                <div className="right w-1/3">

                </div>
              </div>

              <div className="-experience-list ">

              <div className="lit-item flex justify-between h-48">
                <div className="left w-1/3">


                  
                </div>



                <div className="center w-1/6">
                  <div className="line w-1 h-full bg-gray-600 rounded relative">
                    <div className="circle absolute w-5 h-5 rounded-full ring-4 ring-red-300 bg-white -left-2"></div>
                  </div>
                </div>


                <div className="right w-1/3">
                <div className="job-title bg-white p-3 font-semibold rounded-t-lg rounded-r-lg">Full Stack Developer</div>
                  <div className="job-description p-3 text-sm italic">Excelled in designing and implementing robust server-side applications with Java, alongside crafting responsive and dynamic front-end solutions using JavaScript frameworks such as React.js and Next.js.</div>
                  <div className="-job-date p-3 text-red-400 text-sm font-semibold">2023-2024</div>
                  <div className="job-company p-1 rounded bg-white text-sm font-semibold w-fit">TechPro</div>
                </div>
              </div>
              </div>

              <div className="-experience-list ">

              <div className="lit-item flex justify-between h-48">
                <div className="left w-1/3">
                  <div className="job-title bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Java Engineer</div>
                  <div className="job-description p-3 text-sm italic">Specialized in designing and implementing scalable server-side applications using Java, integrating with databases, and developing RESTful APIs to support robust backend functionalities.</div>
                  <div className="-job-date p-3 text-red-400 text-sm font-semibold">2023-2023</div>
                  <div className="job-company p-1 rounded bg-white text-sm font-semibold w-fit">TechPro</div>

                  
                </div>



                <div className="center w-1/6">
                  <div className="line w-1 h-full bg-gray-600 rounded relative">
                    <div className="circle absolute w-5 h-5 rounded-full ring-4 ring-red-300 bg-white -left-2"></div>
                  </div>
                </div>


                <div className="right w-1/3">

                </div>
              </div>
              </div>

              </motion.div>
            </div>
          </div>


        <div className="svg hidden lg:block w-1/3 lg:w-1/2 sticky top-0 z-30">
          <Brain scrollYProgress={scrollYProgress}/>
        </div>
      </div>

    </motion.div>
  )
}
