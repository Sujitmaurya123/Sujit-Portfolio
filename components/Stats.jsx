"use client";

import CountUp from "react-countup"

const stats=[
    {
        num:10,
        text:"Project completed",
    },
    {
        num:1000,
        text:"DSA Problem solve",
    },
    {
        num:4,
        text:"Deploy Project",
    },
];

const Stats = () => {
  return (
    <section  className="pt-4 pd-12 xl:pt-0 xl:pd-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-4 max-w-[80vw] mx-auto xl:max-w-none">
                { stats.map((items,index)=>{
                    return(
                        <div className=" flex-1 flex gap-3 items-center justify-center xl:justify-start" key={index}>
                            <CountUp 
                            end={items.num}
                            duration={5}
                            delay={2}
                            className="text-4xl xl:text-6xl font-extrabold"
                            />
                            <p className={`${items.text.length<15 ?"max-w-[100px]":"max-w-[150px]"}leading-snug text-white/80`}>
                                {items.text}</p>
                        </div>
                    )
                })

                }
            </div>
        </div>
    </section>
  )
}

export default Stats