import React from 'react';

import { FaWhatsapp } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaPhone} from 'react-icons/fa';
import { FaBoxOpen } from 'react-icons/fa';

function Footer() {


  function change(e){
setForm((p)=>({...p,[e.target.name]:e.target.value}))

  }
  return (
    <div className='w-full bg-[#050c2e] text-white h-fit  text-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[0.7fr_1fr_1fr] gap-5 p-2 '>

        <div className='grid grid-cols-1 gap-2  text-4xl text-[gold]' style={{textShadow:"3px 3px 9px black"}}>Contact Us

          
             <button type='submit' className='text-[indigo] bg-[gold] rounded-2xl p-4 min-h[80px] hover:translate-y-1 transition-all duration-300 hover:bg-[#ffd900b7] text-[18px] flex flex-row justify-around'>Telephone Call <FaPhone /> </button>

           <button type='submit' className='text-[indigo] bg-[gold] rounded-2xl p-4 min-h[80px] hover:translate-y-1 transition-all duration-300 hover:bg-[#ffd900b7] text-[18px] flex flex-row justify-around'>Subscripb to our emails < FaBoxOpen/> </button>
        </div>
        <div className='flex flex-col text-center gap-2 '>
          <p className='mb-2 text-4xl text-[gold]' style={{textShadow:"3px 3px 9px black"}}>Useful Links</p>
          <div className='text-blue-700 flex flex-col gap-2'>
            <a href='# '> Login</a>
          <a href='#'> About Taskflow </a>
          <a href='#'>Donate To us</a>
          </div>
        </div>
        <div className=' text-4xl text-[white]' style={{textShadow:"3px 3px 9px black"}}>
         
          <p className='text-[gold]'>Social media</p>
          <div className='flex flex- gap-3 p-5'>
      <a href='https://www.facebook.com/'> <FaFacebook /></a>
      <a href='https://www.linkedin.com/'><FaLinkedin /></a>  
       <a href='www.linkedin.com'> <FaWhatsapp /></a>
        <a href='https://www.x.com/'> <FaTwitter /></a>

        </div>
        </div>
    </div>
  );
};

export default Footer;