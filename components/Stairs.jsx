
import { animate,motion } from "framer-motion";

const stairAnimation ={
    initial:{
        top:"0%",
    },
    animate:{
        top:"100%",
    },
    exit:{
        top:["100%","0%"],
    },
}
// cal the reverse index for staggred delay
const reverseIndex=(index)=>{
    const totalS=6;
    return totalS-index-1;
}
const Stairs = () => {
  return (
   <>
   {/* render 6 motion divs. effect with decreasing delay for each subsequent step. */}

   {[...Array(6)].map((_,index)=>{
    return(
        <motion.div 
        key={index}
        variants={stairAnimation}
        initial="initial"
        animate='animate'
        exit="exit"
        transition={{
            duration:0.4,
            ease:"easeInOut",
            delay:reverseIndex(index)*0.1,
        }}
        className=" h-full w-full bg-white relative "
        />
    )
   })}
   </>
  );
};

export default Stairs;