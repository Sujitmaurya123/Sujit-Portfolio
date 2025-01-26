import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {FiDownload} from "react-icons/fi"
import { GoArrowRight } from "react-icons/go";
const Home = () => {
  return (
   <section className="h-full">
    <div  className=" container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pd-24" >
        {/* text */}
        <div  className="text-center xl:text-left order-2 xl:order-none">

            <div className="container mx-auto">
                {/* Title and Description */}
                {/* <span className="text-xl font-bold text-gray-400">Fullstack Developer & Problem-Solving Enthusiast</span> */}
                <h1 className="text-4xl font-extrabold text-white mt-2 mb-6">
                    Hello, I am <br />
                    <span className="text-accent">Sujit Kumar</span>
                </h1>
                {/* Position */}
                <h6 className="text-lg text-blue-400 font-medium">Full-Stack Developer Intern</h6>
                <h6 className="text-md text-blue-400 font-light">Projectile45</h6>
                {/* Description */}
                <p className="mt-4 max-w-lg text-gray-400 leading-relaxed">
                    I am pursuing a Bachelor's Degree in B.Tech from UIET Kanpur, Uttar Pradesh. I love all things tech, coding, and development, and I'm passionate about creating impactful solutions through technology.
                </p>
            </div>
        
          {/* btn & social media */}
          <div className="flex flex-col xl:flex-row items-center gap-8 mt-4">
            <Button  variant="outline" size="lg" className="uppercase flex items-center gap-2" >
              <span > <Link href="/assets/SujitKumar_CV.pdf" target="_blank">
              Download CV
              </Link> 
              </span>
              <FiDownload className="text-xl" />
            </Button>
            <div className="mb-8 xl:mb-0 ">
              <Social containerStyles="flex gap-6" 
              iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent
              text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
          <div className="flex  flex-wrap gap-8  mt-5 ml-4 text-blue-400">
                 
            <Link href="/projects" className=" hover:underline flex items-center">View My Project <GoArrowRight /></Link>             
                      
            <Link href="/resume" className=" hover:underline flex items-center">View My Experience <GoArrowRight /></Link>             
            
          </div>
        </div>
        {/* photo */}
        <div  className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>
    </div>
    <Stats />
     
   </section>
  )
}

export default Home;