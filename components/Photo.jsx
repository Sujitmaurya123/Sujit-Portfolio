"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div  className=" w-full h-full relative">
        <motion.div 
        initial={{opacity:0}}
        animate={{
          opacity:1,
          transition:{delay:2.4,duration:0.4,ease:"easeIn"},
        }}
        
        >
          {/* image */}
            <motion.div
             initial={{opacity:0}}
             animate={{
             opacity:1,
              transition:{delay:2.4,duration:0.4,ease:"easeIn"},}}
              className=" w-[278px] h-[240px] xl:w-[480px] xl:h-[420px] mix-blend-lighten 
              absolute mt-7 xl:mt-3 ">
                <Image src="/assets/newSujit.png" 
                alt=""
                priority
                
                quality={100}
                className="object-contain "
                fill
               
                />
            </motion.div>
            {/* circle */}
            <motion.svg  
            className="w-[270px] xl:w-[470px] h-[300px] xl:h-[450px]"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle   cx="253" cy="253" r="250" stroke="#00ff99" 
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{strokeDasharray:"24 10 0 0"}}
              animate={{
                strokeDasharray:["15 120 25 25","16 25 92 72","4 250 22 22"],
                rotate:[120,360],
              }}
              transition={{
                duration:20,
                repeat:Infinity,
                repeatType:"reverse",
              }}
              />
            </motion.svg>
        </motion.div>
    </div>
  )
}

export default Photo;