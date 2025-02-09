import React from 'react'
import {  githubCX, gmailCX, instaCX, linkedinCX, patternContact, patternContactWhite, x } from '../../assets'
import './contact.css'
 
const Contact = () => {
  return (
    <div className='text-white mt-[9rem] md:mt-[6rem] lg:mt-[8rem] max-w-[58rem] mx-auto '>
  
            
        <img  src={patternContact}          className='absolute top-0 left-0  z-[1] dark:hidden object-cover w-full h-full  sm:w-full sm:h-[140%]' alt="" />
        <img  src={patternContactWhite}     className='absolute top-0 left-0  z-[1] hidden dark:block object-cover w-full h-full sm:w-full sm:h-[140%] ' alt="" />
     
        <div className='contact_gridContainer  z-10'>
             <a href='https://www.instagram.com/sidan07_/' target='_blank' className='instaGrid   shadow-md '>
               <img src={instaCX} className='w-[30px] h-[40px] md:w-[35px] md:h-[45px] lg:w-[45px] lg:h-[45px]' alt="insta" />
             </a>
            
             <a href='https://github.com/naseebsidan7' target='_blank' className='gitHubGrid  shadow-md '>
                <img src={githubCX} className='w-[30px] h-[40px] md:w-[35px] md:h-[45px] lg:w-[45px] lg:h-[45px]' alt="github" />
             </a>

             <a href='https://www.linkedin.com/in/naseeb-sidan-16b371267/' target='_blank' className='linkedinGrid shadow-md '>
                <img src={linkedinCX} className='w-[30px] h-[40px] md:w-[35px] md:h-[45px] lg:w-[45px] lg:h-[45px]' alt="linkedin" />
             </a>

             <a href='mailto:naseebsidan6@gmail.com' target='_blank' className='gmailGrid shadow-md '>
             <img src={gmailCX} className='w-[30px] h-[40px] md:w-[35px] md:h-[45px] lg:w-[45px] lg:h-[45px]' alt="gmail" />
             </a>

             <a href='https://x.com/sansid_123' target='_blank' className='twitterGrid shadow-md '>
             <img src={x} className='w-[30px] h-[40px] md:w-[35px] md:h-[45px] lg:w-[45px] lg:h-[45px]' alt="twitter" />
             </a>

             <a href='https://sidan-profile.netlify.app/' target='_blank' className='cxGrid shadow-md '>
                  <div className='blue-lg  shadow-md'></div>
             </a>
        </div>

    </div>
  )
}

export default Contact