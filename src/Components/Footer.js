import React from 'react'

export default function Footer() {
  return (
   <>
   <footer className='  mt-1 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-cyan-900 via-cyan-800 to-teal-800'>
   <div className=" flex flex-wrap flex-row justify-around py-6">

    <div className="py-3 px-14 text-white text-lg">PhoneNo : 6263967384</div>
    <div className="ipadmini:border-l py-3 px-14 text-white  text-lg">Email : bytebond.app@gmail.com</div>
     <div className=" ipadmini:border-l py-3 px-14 text-white text-lg">Address : Bhopal, Madhya Pradesh ,India</div>

   </div>
   <div className="border border-t-white text-center py-5 text-white text-lg">
    All right Reserved
   </div>
   </footer>
   </>
  )
}
