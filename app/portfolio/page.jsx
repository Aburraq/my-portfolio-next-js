"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import ScrollDown from "../components/ScrollDown";

const items = [
  {
    id: 1,
    color: "from-red-600 to-red-200",
    title: "School Management System",
    desc: "I coded the School Management System with Java, Spring Boot and PostgreSQL. This comprehensive solution covers all aspects of school administration from student to dean, grades to lesson programs, including advanced time conflict resolution and personalized user role-based controls.",
    img: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://github.com/Aburraq/School-Management-System",
  },
  {
    id: 2,
    color: "from-yellow-600 to-yellow-200",
    title: "AI App",
    desc: "I engineered an advanced Artificial Intelligence chatbot utilizing React, seamlessly integrating the Gemini API. This project exemplifies my adeptness in leveraging React's state management capabilities, eliminating the need for prop drilling. The chatbot delivers real-time and responsive user interactions, setting a new standard in intuitive interface design and functionality.",
    img: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://gemini-gemini.vercel.app/",
  },
  {
    id: 3,
    color: "from-orange-200 to-orange-600",
    title: "Real Estate App",
    desc: "Designed and developed real estate app, full-stack project utilizing React for the frontend, Node.js for the backend, MongoDB for database. This platform enables users to communicate via messaging, save posts, and share their property listings. Featuring intuitive property search functionalities and a user-friendly interface, this app exemplifies my proficiency in creating engaging web applications with seamless functionality.",
    img: "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://github.com/Aburraq/react-fake-estate",
  },

  {
    id: 4,
    color: "from-green-200 to-green-600",
    title: "Chat App",
    desc: "Developing a real-time chat application with React and Firebase was a challenging yet rewarding experience. It strengthened my skills in React development, Firebase integration, and managing asynchronous operations. This project showcased my ability to create responsive and scalable applications using modern web technologies.",
    img: "https://images.pexels.com/photos/6567369/pexels-photo-6567369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://chat-app-react-firebase-nu.vercel.app/",
  },
  {
    id: 5,
    color: "from-blue-200 to-blue-600",
    title: "30 Day Coding Challenge",
    desc: "From developing a joke app using APIs and mastering array and string methods in JavaScript, to crafting interactive web elements like a review page design and a rock-paper-scissors game, each project pushed my skills further. Embarked on creating diverse applications, from practical tools like a weather app and a QR code generator to creative ventures like a Spotify-like music player.",
    img: "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://github.com/Aburraq/me-myRandomExercises",
  },
];

export default function PortfoliePage() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83.4%"]);
  console.log(scrollYProgress);

  // TODO Arrange items above

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[700vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          <div className="flex flex-col">
            <p>My Works</p>
            <ScrollDown scrollYProgress={scrollYProgress} />
          </div>
        </div>

        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300 relative">
              <h2 className="absolute top-10 right-10 font-semibold text-white">
                Some of My Works =&gt;{" "}
              </h2>
            </div>
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white text-center">
                  <h1 className="text-xl font-bold md:text-2xl lg:text-4xl xl:text-6xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-50 md:w-96 md:h-56 lg:w-[500px] lg:h-[2500px] xl:w-[600px] xl:h-[350px] m-auto">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px] text-justify m-auto">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-center">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <motion.circle
              cx="150"
              cy="150"
              r="100"
              stroke="#333"
              strokeWidth="2"
              fill="none"
              initial={{ scaleX: 0, scaleY: 0 }}
              animate={{ scaleX: 1, scaleY: 1, rotate: 360 }}
              transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            />
            <text fill="#333" fontWeight="bold">
              <textPath xlinkHref="#circlePath" className="text-lg md:text-xl">
                Full Stack Dev
              </textPath>
            </text>
            <text fill="#555" fontWeight="bold">
              <textPath
                xlinkHref="#circlePath"
                className="text-md md:text-lg"
                startOffset="50%"
              >
                Java & Javascript
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me!
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
