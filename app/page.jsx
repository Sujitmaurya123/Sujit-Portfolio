import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {FiDownload} from "react-icons/fi"

const Home = () => {
  return (
   <section className="h-full">
    <div  className=" container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pd-24" >
        {/* text */}
        <div  className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Fullstack Developer & Problem-solving</span>
          <h1 className="h1 mb-6">
            Hello I am <br /> <span className="text-accent">Sujit Kumar</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">
            I have pursing Bachelors Degree in B.tech from UIET Kanpur
             Uttar Pradesh. I love all things tech,coding and Development.
          </p>
          {/* btn & social media */}
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button  variant="outline" size="lg" className="uppercase flex items-center gap-2" >
              <span > <Link href="/assets/CV_SujitKumar.pdf">
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
        </div>
        {/* photo */}
        <div  className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>
    </div>
    <Stats />
     <p className="flex flex-row justify-center items-center mt-10 text-cyan-600" > Sujit.   © 2024 All Right Reserved.</p>
   </section>
  )
}

export default Home;