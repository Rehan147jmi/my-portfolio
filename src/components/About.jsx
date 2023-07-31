import React from 'react';
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { services } from '../constants/constant';

const About = () => {

  const ServiceCard = ({title, icon }) => {
     return (
    <Tilt className=''>
      <motion.div
        className='w-full green-pink-gradient  p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className= ' border-2 border-[#fd4b57] rounded-[20px] py-5 px-12 min-h-[240px] w-[240px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />
  
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
     )
  
        };

  return (
    
      <>
        <motion.div className='text-center'>
          <p className='mb-2' >Let me introduce my self </p>
          <h2 className='text-7xl text-[#fd4b57]'>What i can do</h2>
        </motion.div>
  
        <motion.div
          
          className='flex items-center mt-5 ml-10 justify-center'
        >
           <p className='w-1/2 text-secondary text-[20px] leading-[30px]' > I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!</p>
         
        </motion.div>
  
        <div className='mt-8 flex flex-wrap gap-10 justify-center'>
           {services.map((service)=>{
            return <ServiceCard key={service.index} title={service.title} icon={service.icon} />
           })}
        </div>
      </>
  )
}

export default About;