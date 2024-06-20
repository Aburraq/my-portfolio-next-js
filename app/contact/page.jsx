"use client";
import {motion} from "framer-motion";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export default function ContactPage() {

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };


  const text = "Say Hello!"

  return (
    <motion.div className="h-full " initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-4 md:px-8 lg:px-16 xl:px-48">
      <div className=" sm:h-1/4 h-1/2 lg:h-full lg:w-1/2  flex items-center justify-center text-5xl">
        <div>
          {text.split("").map((letter, index) => (
            <motion.span key={index} 
              initial={{opacity:1}} 
              animate={{opacity:0}}
              transition={{
                duration:3,
                repeat:Infinity,
                delay:index*.1
              }}>{letter}</motion.span>
          ))}
          😊
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail}  className="sm:h-3/4  h-1/2 lg:h-full lg:w-1/2  bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24">
          <span>Dear Burak,</span>
          <textarea rows={6} className="bg-transparent border-b-2 border-b-black outline-none resize-none" name="user_message"/>
          <span >E-mail</span>
          <input type="text" className="bg-transparent border-b-2 border-b-black outline-none" name="user_email"/>
          <span>Kind Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">Send</button>
          {success && <span className="text-green-600 font-semibold">Message is sent successfully!</span>}
          {error && <span className="text-red-600 font-semibold">Something went wrong!</span>}

      </form>
    </div>
    </motion.div>
  )
}
