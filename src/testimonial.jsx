import React from 'react';
import user1 from './assets/user1.png'
import user2 from './assets/user2.png'
import user3 from './assets/user3.png'
import { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
let testimonial =[{
    name:"John Doe",
    review:"Taskflow has transformed the way I manage my tasks. The intuitive interface and powerful features have helped me stay organized and productive.",
    image:user1,
    designation:"Software Engineer"
},{
    name:"Jane Smith",
    review:"I love how Taskflow allows me to prioritize my tasks and set deadlines. It has made a significant difference in my workflow and overall efficiency.",
    image:user2,
    designation:"Project Manager"
},{   name:"Mike Johnson",
    review:"The collaboration features in Taskflow are fantastic. My team and I can easily share tasks, leave comments, and track progress. It has improved our communication and teamwork.",
    image:user3,
    designation:"Team Lead"
}
];

function Testimonial() {
    const [index, setIndex] = useState(0);

    useEffect(()=>{
    const ID = setTimeout(()=>{
        setIndex((p)=>(p+1)%testimonial.length)
        
          }, 5000)
    },[index])
  return (      
    <div className=' grid grid-cols-1  md:grid-cols-[1fr_.7fr]  m-10'>
    
    <div className= 'text-white text-2xl my-5 p-2 w-[80%] text-justify md:border-r-2' style={{textShadow:"3px 3px 9px black"}}>
        <h2 className='text-[yellow]'>Why use Taskflow ?</h2>
        <p> Testimonials  from our community</p>
        <hr className='border-2 border-[gold] rounded-2xl w-[50px] my-2'/>
        <p className=''>Read Feedback from regular users</p>
      
         <FaArrowRight className='text-[gold] animate-bounce my-4 ' />
     </div>

    <div className='text-white text-[18px] lg:text-[20px] my-5 p-5 border-2 border-[gold] rounded-2xl' style={{textShadow:"3px 3px 9px black"}}>
       <strong className='mb-3 text-2xl'>~{testimonial[index].name}</strong>
       <div>
       <img src={testimonial[index].image}  className='w-[100px] h-[100px] rounded-full float-right clearfix'/>
         <p className='my-3 text-justify'>"{testimonial[index].review}"</p>
         <span className='text-[gold]'>{testimonial[index].designation}</span>
</div>
    
    </div>
    </div>
  );
};

export default Testimonial;