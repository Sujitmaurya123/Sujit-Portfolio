"use client";

 import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';
import {FaPhoneAlt,FaEnvelope,FaMapMarkedAlt}from "react-icons/fa";

const info=[
  {
    icon:<FaPhoneAlt />,
    title:"Phone",
    description:"(+91)7318079820",
  },
  {
    icon:<FaEnvelope />,
    title:"Email",
    description:"sujitkic6802maurya@gmail.com",
  },
  {
    icon:<FaMapMarkedAlt />,
    title:"Address",
    description:"Kanpur Uttar Pradesh",
  },
]

import { motion } from "framer-motion";
import Social from "@/components/Social";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";


const Contact = () => {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    message:"",
  })
  const [errors,setErrors]=useState({});
  const [isSending,setIsSending]=useState(false);
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData({
      ...formData,
      [name]:value,
      

    })

  }
  const validate=()=>{
    let errors={};
    if(!formData.name) errors.name="Name is required";
    if(!formData.email){
      errors.email="Email is required";
    }else if(!/\S+@\S+\.\S+/.test(formData.email)){
      errors.email="Email is invalid";
    }
    if(!formData.message)errors.message="Message is required";
    return errors;
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const validateErrors=validate();
    if(Object.keys(validateErrors).length>0){
      setErrors(validateErrors);
    }else{
      setErrors({});
      setIsSending(true);

    emailjs
      .send(
        "service_he4myam",
        "template_q5sh74p",
        formData,
        "PswPtmZdJ_oBcqgPO"
      )
      .then((response)=>{
        console.log("SUCCESS",response.status,response.text);
        toast.success("Message send successfully!");
        setFormData({name:"",email:"",message:""})
      })
      .catch((error)=>{
        console.log("Fail...",error);
        toast.error("Failed to send message. Please try again later");

      })
      .finally(()=>{
        setIsSending(false);
      })
    }
  }
  return (
    <motion.section
     initial={{opacity:0}}
     animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"}}}
     className="py-6"
    >
      <Toaster/>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
            <h3 className="text-4xl text-accent ">Lets work together</h3>
            <p className="text-white/60">Connect us to grows togeather and Learing more .</p>
            {/* input */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="text" id="name" name="name" value={formData.name} placeholder="Name" onChange={handleChange} />             
              {errors.name&&(
                <p className="text-sm text-pink-700">{errors.name}</p>
              )}
              <Input type="email" id="email" name="email" value={formData.email} placeholder="Email address" onChange={handleChange} /> 
            {errors.email&&(
                <p className="text-sm text-pink-700">{errors.email}</p>
              )}
            </div>
           
            
            {/* textarea */}
            <Textarea type="message" className="h-[200px]" id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Type your message here." />
            {errors.message&&(
                <p className="text-sm text-pink-700">{errors.message}</p>
              )}
            {/* btn */}
            <Button size='md' className={`max-w-40 ${isSending?"cursor-not-allowed opacity-50":""}`} disabled={isSending}>{isSending?"Sending":"Send"}</Button>
          </form>
          </div>
        {/* info */}
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0"
        >
          <ul className="flex flex-col gap-10">
            {info.map((item,index)=>{
              return(
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              )
            })}
          
            <div className="mb-8 xl:mb-0 ">
              <Social containerStyles="flex gap-6" 
              iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent
              text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </ul>
        </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact;