import React from 'react';
import mark from './assets/mark.png'

function Card(props) {
  return (
    <div  className=' min-h-[350px] bg-[#0d0d27] rounded-2xl p-3 text-2xl text-[gold] hover:border-amber-300  cursor-pointer hover:border-1 hover:translate-y-[-5] transition-all duration-200 relative flex flex-col' style={{boxShadow:"2px 2px 10px indigo"}}>
      <p>{props.data}</p>
      <ol className='list-image-[url(assets/mark.png)] font- text-left m-5 text-[18px] text-white '>
        {props.data === "Free Trial" ? <li> Basic task management features</li> : null}
        {props.data === "Free Trial" ? <li>Limited storage space</li> : null}
        {props.data === "Free Trial" ? <li>Community support</li> : null} 
        {props.data === "Pro" ? <li>Advanced task management features</li> : null}
        {props.data === "Pro" ? <li>Increased storage space</li> : null}
        {props.data === "Pro" ? <li>Email support</li> : null}    
        {props.data === "Team" ? <li>All Pro features</li> : null}
        {props.data === "Team" ? <li>Team collaboration tools</li> : null}
        {props.data === "Team" ? <li>Priority support</li> : null}  
        {props.data === "Team" ? <li>Admin controls and permissions</li> : null}
        {props.data === "Free Trial" ?<li className='text-[#008002] text-2xl'>0 USD /Monthly</li>: null}
        {props.data === "Pro" ?<li className='text-[#008002] text-2xl'>10 USD /Monthly</li>:null}
        {props.data === "Team" ?<li className='text-[#008002] text-2xl'>30 USD /Monthly</li>:null}        </ol>
       <button className='absolute bottom-3 self-center w-[80%] bg-[gold] p-2 text-white cursor-pointer rounded-2xl'>Start Now</button>
    </div> 
  );
};

export default Card;