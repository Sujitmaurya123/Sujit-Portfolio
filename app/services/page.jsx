"use client";

import Link from "next/link";

const services=[
  {
    num:"01",
    title:"Web Development",
    description:
    "Front End Development: HTML, CSS, JavaScript, TypeScript, ReactJs, NextJs & Backend End Development: NodeJS, ExpressJS, MySQL, Mongoose, REST APIs etc.",
    href:"",
    

  },
  {
    num:"02",
    title:"DevOps",
    description:
    "DevOps integrates software development and IT operations, aiming to shorten development cycles, increase deployment frequency, and deliver high-quality software by fostering collaboration, automation, continuous integration, and continuous delivery.",
    href:""
  },
  {
    num:"03",
    title:"UI/UX Design",
    description:
    "I specialize in UI/UX design using Figma, creating intuitive and visually appealing interfaces. My focus is on user-centered design, ensuring seamless and engaging user experiences across digital platforms.",
    href:""
  },
  {
    num:"04",
    title:"Competitive Programmer",
    description:
    "As a competitive programmer, I excel in solving algorithmic challenges on platforms like LeetCode, GeeksforGeeks (GFG), and CodeChef. These platforms enhance my coding skills, problem-solving abilities, and help me stay sharp in the competitive programming community.",
    href:""
  },
   

]

import { motion } from "framer-motion";
import {BsArrowDownRight} from "react-icons/bs";
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0" >
        <div className="container mx-auto">
          <motion.div
          initial={{opacity:0}}
          animate={{
            opacity:1,
            transition:{delay:2.4,duration:0.4,ease:"easeIn"}
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {services.map((service,index)=>{
              return(
                <div key={index} className=" flex-1 flex flex-col justify-center gap-6 group">
                  {/* Top */}
                  <div className="w-full flex justify-between items-center">

                  <div  className="text-5xl font-extrabold text-outline text-transparent
                  group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent
                   transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                  </div>
                  {/* title */}
                <h2  className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">{service.title}</h2>
                {/* description */}
                <p className="text-white/68">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
                </div>

              )
            })}
          </motion.div>
        </div>
    </section>
  )
}

export default Services;