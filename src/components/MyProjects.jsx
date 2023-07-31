import React from 'react';
import { motion } from "framer-motion";
import {Tilt} from "react-tilt";
import { services } from '../constants/constant';
import { Link } from 'react-router-dom';

const MyProjects = () => {  
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
         className= ' border-2 border-[#fd4b57] rounded-[20px] min-h-[430px] w-[300px] flex items-center flex-col'
       >
         <img
           src="https://images.barrons.com/im-394091?width=1280&size=1"
           alt='web-development'
           className='w-full object-contain rounded-[20px]'
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
          <p className='mb-2' >Here are some of my Projects </p>
          <h2 className='text-7xl text-[#fd4b57]'>Projects</h2>
        </motion.div> 

        <div className='mt-8 flex flex-wrap gap-10 justify-center'>
           {services.map((service)=>{
            return <ServiceCard key={service.index} title={service.title} icon={service.icon} />
           })}
        </div>
    </>
  )
}

export default MyProjects;