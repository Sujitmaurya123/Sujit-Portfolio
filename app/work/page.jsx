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
    category:"fullstack",
    title:"project 2",
    description:
    "Develop an eCommerce application with functionalities for customers to search for products, add products to the cart, and purchase them. Additionally, create an admin dashboard for managing products, viewing customer information, and visualizing transaction data with various charts. 1-Product Search 2-Product Details 3-Shopping Cart 4-Checkout Process 5-User Authentication 6-Admin Dashboard 7-Product Management 8-Data Visualization 9-Customer Management 10-Order Management ",
    stack:[{name:"ReactJs"},{name:"NodeJs"},{name:"Express"},{name:"MongoDB"},{name:"TypeScript"}],
    image:'/assets/work/ecommerceapp.png',
    live:"ecommerce-frontend-beryl-nine.vercel.app",
    github:"https://github.com/Sujitmaurya123/EcommerceApp",
  },
  {
    num:"03",
    category:"fullstack",
    title:"project 3",
    description:
    "Develop a full-stack web application for managing employee recruitment and details, with an admin board for managing the entire system. The system should be user-friendly and compatible with all devices. 1-User Authentication 2-Responsive Design 3-Dashboard Overview 4-Employee Management 5-Department Management 6-Profile Management ",
    stack:[{name:"ReactJs"},{name:"NodeJs"},{name:"Express"},{name:"MySQL"}],
    image:'/assets/work/employee.png',
    live:"https://github.com/Sujitmaurya123/DBMS_Projects",
    github:"https://github.com/Sujitmaurya123/DBMS_Projects",
  },
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
          {/* project category */}
          <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize"
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
            <Link href={project.live}>
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
            <Link href={project.github}>
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