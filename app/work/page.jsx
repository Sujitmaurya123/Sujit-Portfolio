"use client"

import { motion } from "framer-motion";
import React,{useState} from "react"

import {Swiper,SwiperSlide } from "swiper/react"
import "swiper/css";

import {BsArrowUpRight,BsGithub} from "react-icons/bs"

import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";


const projects=[
  {
    num:"01",
    projectname:"ChatApp",
    category:"fullstack",
    title:"project 1",
    description:
    "Developed a comprehensive chat feature for Users, enhancing user communication through real-time messaging. The ChatApp feature includes functionalities such as: 1.Real-Time Messaging 2.User Authentication 3.Notifications 4.UI/UX Design 5.Create Groups and Manage groups 6.Admin Dashboard for all see messages ,chats ,user etc. 7. Send Files ,video ,images users to each others 8. Searching Friends and Send Request and chats us. 9. Delete Chats 10. Full responsiveness all devices and Deployment project ",
    stack:[{name:"ReactJs"},{name:"NodeJs"},{name:"Express"},{name:"MongoDB"}],
    image:'/assets/work/chatapp.png',
    live:"https://chat-app-frontend-nine-jet.vercel.app/",
    github:"https://github.com/Sujitmaurya123/Chat-App",
  },

  {
    num:"02",
     projectname:"Pathfinding-visualizer",
    category:"Frontend",
    title:"project 3",
    description:
    "1.Developed an interactive Pathfinding Visualizer using React, TypeScript, and TailwindCSS, implementing BFS, DFS, Dijkstra, and A-star algorithms.2.Integrated Binary Tree and Recursive Division for maze generation, enhancing the educational aspect of the tool.3.Created smooth, animated visualizations for step-by-step algorithm exploration.4.Designed a user-friendly interface with customizable options for algorithm selection and grid manipulation.5.Optimized performance for handling large datasets and efficient rendering.6.Deployed the application on a cloud platform, ensuring reliability through extensive testing.",
    stack:[{name:"ReactJs"},{name:"Typescript"},{name:"TailwindCSS"}],
    image:'/assets/work/findpath.png',
    live:"https://pathfinding-visualizer-iota-pearl.vercel.app",
    github:"https://github.com/Sujitmaurya123/Pathfinding-visualizer",
  },
  {
    num:"03",
    projectname:"Clash",
    category:"fullstack",
    title:"project 2",
    description:
    "Integrated Gmail-Based Authentication: Built a robust authentication system that uses Gmail for user registration and login, streamlining the user experience and enhancing security.Utilized Redis for Real-Time Updates: Employed Redis to manage real-time data and queuing, ensuring instant updates and interactions such as live voting and commenting are processed efficiently.Developed an Interactive Clash Dashboard: Engineered a visually engaging dashboard for side-by-side image comparisons, incorporating features for real-time voting and commenting to foster user interaction and feedback. ",
    stack:[{name:"NextJs"},{name:"TypeScript"},{name:"Express"},{name:"Prisma"},{name:"Postgresql"}],
    image:'/assets/work/Clash.png',
    live:"https://github.com/Sujitmaurya123/Clash",
    github:"https://github.com/Sujitmaurya123/Clash",
  },
    {
    num:"04",
    projectname:"E-App",
    category:"fullstack",
    title:"project 2",
    description:
    "Develop an eCommerce application with functionalities for customers to search for products, add products to the cart, Payment gatways and purchase them. Additionally, create an admin dashboard for managing products, viewing customer information, and visualizing transaction data with various charts. 1-Product Search 2-Product Details 3-Shopping Cart 4-Checkout Process 5-User Authentication 6-Admin Dashboard 7-Product Management 8-Data Visualization 9-Customer Management 10-Order Management ",
    stack:[{name:"ReactJs"},{name:"NodeJs"},{name:"Express"},{name:"MongoDB"},{name:"TypeScript"}],
    image:'/assets/work/ecommerceapp.png',
    live:"https://ecommerce-frontend-beryl-nine.vercel.app",
    github:"https://github.com/Sujitmaurya123/EcommerceApp",
  },
  {
    num:"05",
    projectname:"music-app",
    category:"fullstack",
    title:"project 4",
    description:
    "1.Developed a feature-rich music streaming app similar to Spotify, using ReactJs for cross-platform compatibility and Admin Board to add songs, album.2.Integrated music playback and playlist creation functionalities with a responsive and intuitive user interface.3.Implemented user authentication and profile management, enabling personalized music recommendations.4.Utilized RESTful APIs to fetch and manage music data, ensuring seamless performance.5.Optimized app performance for smooth playback and minimal load times across devices. ",
    stack:[{name:"ReactJs"},{name:"NodeJs"},{name:"Express"},{name:"MongoDB"}],
    image:'/assets/work/music.png',
    live:"https://music-app-psi-hazel.vercel.app",
    github:"https://github.com/Sujitmaurya123/music-App",
  },
//   {
//     num:"03",
//     category:"fullstack",
//     title:"project 3",
//     description:
//     "Develop a full-stack web application for managing employee recruitment and details, with an admin board for managing the entire system. The system should be user-friendly and compatible with all devices. 1-User Authentication 2-Responsive Design 3-Dashboard Overview 4-Employee Management 5-Department Management 6-Profile Management ",
//     stack:[{name:"ReactJs"},{name:"NodeJs"},{name:"Express"},{name:"MySQL"}],
//     image:'/assets/work/employee.png',
//     live:"https://github.com/Sujitmaurya123/DBMS_Projects",
//     github:"https://github.com/Sujitmaurya123/DBMS_Projects",
//   },
    ]

const Work = () => {
  const [project,setProject]=useState(projects[0]);
 
  const handleSlideChange=(swiper)=>{
    const currecntIndex=swiper.activeIndex;
    setProject(projects[currecntIndex]);
  }
  return (
    <motion.section
    initial={{opacity:0}}
     animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"}}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"   >
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div  className="flex flex-col gap-[30px] h-[50%]">
            {/* outline num */}
            <div  className="text-8xl leading-none font-extrabold text-transparent
             text-outline">{project.num}</div>
          </div>
          {/* project name */}
          <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize p-2"
          >{project.projectname} </h2>
          {/* project category */}
          <h2 className="text-[30px] font-bold leading-none text-yellow-800 group-hover:text-accent transition-all duration-500 capitalize"
          >{project.category} project</h2>
          {/* project description */}
          <p className="text-white/60">{project.description}</p>
          {/* stack */}
          <ul  className="flex gap-4"> Stack -
            {project.stack.map((item,index)=>{
              return (
                <li Key={index}className="text-xl text-accent">
                  {item.name}
                  {/* remove the last comma */}
                  {index!==project.stack.length-1&& ","}
                  </li>
              )
            })}
          </ul>
          {/* border */}
          <div className="border border-white/20"></div>
          {/* buttons */}
          <div className="flex items-center gap-4">
            {/* live project button */}
            <Link href={project.live} target="_blank">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Live project</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
           
            {/* github project button */}
            <Link href={project.github} target="_blank">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsGithub className="text-white text-3xl group-hover:text-accent" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Github repository</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
         
          </div>
          </div>
        <div className="w-full xl:w-[50%]">
          <Swiper  
          spaceBetween={30}
          slidesPerView={1}
          className="xl:h-[520px] mb-12"
          onSlideChange={handleSlideChange}
          >
            {
              projects.map((project,index)=>{
                return(
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20" >
                    {/* overlay */}
                    <div className=" absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image alt="" src={project.image}  fill className=" object-contain"/>
                    </div>
                    </div>
                      
                  </SwiperSlide>
                )
              })
            }
            {/* slider buttons */}
            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 
            z-20 w-full justify-between xl:w-max xl:justify-none  " 
            btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex flex-row  justify-center transition-all"
            
            />
          </Swiper>
        </div>
      </div>
         {/* github project button for all project */}
       <div className="flex flex-row justify-center items-center text-xl text-white gap-3" >Find More Project to check My Github -
            <Link href="https://github.com/Sujitmaurya123">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsGithub className="text-white text-3xl group-hover:text-accent" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Github repository for all projects seen</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
      </div>
    </motion.section>
  )
}

export default Work;