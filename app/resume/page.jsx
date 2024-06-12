"use client";

import { icons } from "lucide-react";
import {FaHtml5,FaCss3,FaJs,FaReact,FaFigma,FaNodeJs} from "react-icons/fa";

import {SiTailwindcss,SiNextdotjs} from "react-icons/si";

const about ={
  title:"About me",
  description:
  "",
  info:[
    {
      fieldName:"Name",
      fieldValue:"Sujit Kumar",
    },
    {
      fieldName:"Phone",
      fieldValue:"(+91) 7318079820",
    },
    {
      fieldName:"Email",
      fieldValue:"sujitkic6802maurya@gmail.com",
    },
    {
      fieldName:"Languages",
      fieldValue:"English,Hindi",
    },
  ]

}

// experience data
const experience={
  icons:"/assets/resume/badge.svg",
  title:"My experience",
  description:"I am web developer",
  items:[
    {
      company:"Leetcode",
      position:"Problem Solve",
      duration:"450+",
    },
    {
      company:"My project",
      position:"Full Stack Developer",
      duration:"10+",
    },
    {
      company:"UI/UX Design",
      position:"Figam",
      duration:"5+",
    },
    {
      company:"UI/UX Design",
      position:"Figam",
      duration:"5+",
    },
    {
      company:"UI/UX Design",
      position:"Figam",
      duration:"5+",
    },
    {
      company:"UI/UX Design",
      position:"Figam",
      duration:"5+",
    },
  ]
}

// education data
const education ={
  icon:"/assets/resume/cap.svg",
  title:"My education",
  description:
  "My Education",
  items:[
    {
      institution:"CSJMU UIET Kanpur",
      degree:"B.Tech(CSE)",
      duration:"2021-Present,"
    },
    {
      institution:"CSJMU UIET Kanpur",
      degree:"B.Tech(CSE)",
      duration:"2021-Present,"
    },
    {
      institution:"CSJMU UIET Kanpur",
      degree:"B.Tech(CSE)",
      duration:"2021-Present,"
    }
  ]

}
// skills data
const skills={
  title:"My Skills",
  description:
  "my skills",
  skillList:[
    {
      icon:<FaHtml5 />,
      name:"html 5",
    },
    {
      icon:<FaCss3 />,
      name:"css 3",
    },
    {
      icon:<FaJs />,
      name:"Javascript",
    },
    {
      icon:<FaReact />,
      name:"react.js",
    },
    {
      icon:<SiNextdotjs />,
      name:"next.js",
    },
    {
      icon:<SiTailwindcss />,
      name:"tailwind.css",
    },
    {
      icon:<FaNodeJs />,
      name:"node.js",
    },
    {
      icon:<FaFigma />,
      name:"figma",
    },
  ]
}

import {Tabs,TabsContent,TabsList,TabsTrigger} from "@/components/ui/tabs";
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
const Resume = () => {
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{
            opacity:1,
            transition:{delay:2.4,duration:0.4,ease:"easeIn"}
          }}
          className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className=" flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>

          </TabsList>
          {/* content */}
          <div  className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {
                      experience.items.map((item,index)=>{
                        return(
                          <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className="text-accent" >{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                            <div className="flex items-center gap-3" >
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p>{item.company}</p>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {
                      education.items.map((item,index)=>{
                        return(
                          <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className="text-accent" >{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                            <div className="flex items-center gap-3" >
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p>{item.institution}</p>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills"className="w-full h-full">
                    <div className="flex flex-col gap-[30px]">
                      <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{skills.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                      </div>
                      <ul className="grid ">
                        {
                          skills.skillList.map((skill,index)=>{
                            return(
                              <li key={index}>{skill.name}</li>
                            )
                          })
                        }
                      </ul>
                    </div>

            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full">Exp</TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume;