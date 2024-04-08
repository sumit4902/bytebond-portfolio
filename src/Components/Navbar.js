import React, {  useState } from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {

  
const[flag,Setflag]= useState("hidden");

     function handleflag(flag)
     {
       Setflag(flag);
      
     }

     function handlescroll(value)
     {
      window.scrollBy({top:value,behavior:"smooth"});
      Setflag("hidden");
     }
  return (
    <>
      <nav className=" flex justify-between items-center p-10 h-10 ">
        <div className=" animate-pulse italic text-2xl font-semibold ">ByteBond</div>
        <div className="hidden ipadmini:block">
        <Link to='/' className=" px-5 py-2 font-medium hover:underline" onClick={(e)=>handlescroll(0)} >Home</Link>
        <span className=" px-5 py-2 font-medium hover:underline" onClick={(e)=>handlescroll(600)}>Our Members</span>
        <span onClick={(e)=>handlescroll(1500)} className=" px-5 py-2 font-medium hover:underline">About Developer</span>
         <Link to="PrivacyPolicy" className=" px-5 py-2 font-medium hover:underline hover:underline-offset-3" >PrivacyPolicy</Link>
        
        </div>
        <div className="ipadmini:hidden" onClick={(e)=>{handleflag('block')}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
         </svg>
       </div>

       <div className={`${flag} fixed z-10 left-0 right-0 top-0  min-h-96  overflow-hidden bg-teal-100 flex flex-col justify-between  `}>
           <div className=" flex flex-col">
            <span className=" flex justify-end p-5 " >
             <svg onClick={(e)=>{handleflag('hidden')}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 me-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </span>
        <Link to ='/'  onClick={(e)=>handlescroll(0)} className=" text-center  hover:bg-rose-500 py-2 hover:text-white">Home</Link>
        <span onClick={(e)=>handlescroll(900)}  className="text-center  hover:bg-rose-500 py-2 hover:text-white">Our Members</span>
        <span onClick={(e)=>handlescroll(3600)} className="text-center  hover:bg-rose-500 py-2 hover:text-white">About Developer</span>
        <Link to="PrivacyPolicy" onClick={(e)=>{handleflag('hidden')}}  className="text-center  hover:bg-rose-500 py-2 hover:text-white">Privacy policy </Link>
        </div>
         <div className="w-full h-2  bg-red-400 "></div>
        </div>
       

      </nav>
   </>
  )
}
