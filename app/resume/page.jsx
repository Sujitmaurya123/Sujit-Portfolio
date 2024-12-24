"use client";

import { icons } from "lucide-react";
import {FaHtml5,FaCss3,FaJs,FaReact,FaFigma,FaNodeJs} from "react-icons/fa";

import {SiTailwindcss,SiNextdotjs} from "react-icons/si";

const about ={
  title:"About me",
  description:
  "I am a highly motivated and skilled individual with a Bachelor of Technology in Computer Science and Engineering from the University Institute of Engineering and Technology (UIET), Kanpur. My academic journey has equipped me with a strong foundation in computer science principles, complemented by practical experience in full-stack web development, competitive programming, and UI/UX design & experience in web development, proficient in HTML, CSS, TailwindCss, JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, MongoDB, MySQL, Git, AWS. Active in competitive programming on LeetCode, GFG, and CodeChef, with strong skills in C++, Java, and Python. Experienced in Figma for UI/UX design, creating user-friendly interfaces and seamless integrations.",
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
      fieldName:"Languages",
      fieldValue:"English,Hindi",
    },
    {
      fieldName:"Email",
      fieldValue:"sujitkic6802maurya@gmail.com",
    },
   
  ]

}

// experience data
const experience={
  icons:"/assets/resume/badge.svg",
  title:"My experience",
  description:"A highly motivated and skilled individual with a B.Tech in Computer Science and Engineering from UIET Kanpur. Proficient in full-stack web development, competitive programming, and UI/UX design. Demonstrates a strong foundation in computer science principles and practical experience in developing and deploying web applications. Passionate about solving complex problems through code and creating intuitive user interfaces.",
  items:[
    {
      company:"My projects",
      position:"Full Stack Developer",
      duration:"10+",
    },
    {
      company:"DevOps projects",
      position:"DevOps",
      duration:"2+",
    },
    {
      company:"UI/UX Design",
      position:"Figam",
      duration:"5+",
    },
    {
      company:"Leetcode & GFG",
      position:"Problem Solve",
      duration:"500+",
    },
    
    
    
  ]
}

// education data
const education ={
  icon:"/assets/resume/cap.svg",
  title:"My education",
  description:
  "Bachelor of Technology in Computer Science and Engineering",
  items:[
    {
      institution:"CSJMU UIET Kanpur",
      degree:"B.Tech(CSE)",
      duration:"2021-Present,"
    },
    {
      institution:"BBS School & College Shivkuti Prayagraj",
      degree:"Intermediate",
      duration:"2017-2019,"
    },
    {
      institution:"KIC Rajgarh Mirzapur",
      degree:"High School",
      duration:"2015-2017,"
    }
  ]

}
// skills data
const skills={
  title:"My Skills",
  description:
  "Proficient in web development with expertise in HTML, CSS, TailwindCss, JavaScript, React.js, Next.js, Node.js, Express.js, and Socket.io. Skilled in database management using MongoDB, MySQL, and SQL. Experienced in version control with Git and GitHub, and deployment to vercel and render. Active in competitive programming on platforms like LeetCode, GeeksforGeeks (GFG), and CodeChef, proficient in C++, Java, and Python. Additionally, adept in UI/UX design using Figma, creating intuitive interfaces and collaborating effectively with developers for seamless integration.",
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
import Experience from "@/components/Experience-section/Experience";
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
                <h3 className="text-4xl font-bold mt-3">{experience.title}</h3>
                   <Experience/>

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
                      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                        {
                          skills.skillList.map((skill,index)=>{
                            return(
                              <li key={index}>
                                <TooltipProvider delayDuration={100}>
                                  <Tooltip>
                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                      <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className=" capitalize">{skill.name}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </li>
                            )
                          })
                        }
                      </ul>
                    </div>

            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">

              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item,index)=>{
                    return(
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-5">
                        <span className="text-accent">{item.fieldName}-</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume;