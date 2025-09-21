import React, { use } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import {useInView} from 'react-intersection-observer'
import { useEffect } from 'react';

function Messagesection() {


    const { ref:inter, inView:one} = useInView({
    threshold:0,
    triggerOnce:true,
  });

   const {ref:vid, inView:two} = useInView({
    threshold:0,
    triggerOnce:true,
  });

  useEffect(()=>{
    console.log(one,two)
  } ,[])
  return (
   
     <div className='w-full text-white my-10 p-5 text-3xl grid lg:grid-cols-2 overflow-hidden gap-5'>

    <div className={`text-justify  translate-x-[-200px] transition-all duration-1000 ease-in-out ${one ? 'translate-x-[0]':''} `} ref={inter}> 
        <span className='text-[gold] text-5xl flex gap-2'> TaskFlow <FaArrowAltCircleUp /> </span> 
        
        <br />
        Your all in One task management  Tool
        <br />
        Made for you
       <br />
        <button className='bg-[gold] text-4xl text-[indigo] p-3 rounded-2xl my-10 cursor-pointer hover:translate-y-1 transition-all duration-300 hover:bg-[#ffd900b7]'>Get Started</button>
  </div>

  <div ref={vid} className={`transition-all duration-1000 ease-in-out  ${two? 'translate-x-[0] opacity-100':'opacity-10 translate-x-[500px]'} `} >
<video src="/Demo.mp4" controls className='w-full rounded-2xl' 
autoPlay 
muted
loop>
</video>
<span className='text-5xl text-blue-600' style={{textShadow:'3px 3px 3px white'}}>
Demo
</span>
  </div>

    </div>
  );
};

export default Messagesection;