import React, { useRef, useState } from 'react'
import mencut from './man_cut_image-removebg-preview.png'
import axios from "axios";
export default function DeleteAccount() {

    const confirm = useRef();
  
  
    let[credential,Setcredential]=useState(
      {
        username:"",
        password:"",
        
      }
  
    )
     
  
  
  // api calling 
  function apicalling(event)
  { event.preventDefault()
    let apiurl='http://Test-env.eba-8minev3m.ap-south-1.elasticbeanstalk.com/api/auth/login'
   axios.post(apiurl,{
    username:credential.username,
    password:credential.password
   }
   
  
  ).then(
    (response)=>{
     // console.log(response.data);
     
      if(response.data!=='Invalid Username or Password  !!'){
        console.log("delete Api called")
        axios.delete(`http://Test-env.eba-8minev3m.ap-south-1.elasticbeanstalk.com/api/User/Delete/${response.data.id}`, {
          headers: {
              "Authorization": `Bearer ${response.data.jwtToken}`
          }
      }).then(
            
      (response)=>{
        // console.log(response.data);
        confirm.current.innerHTML="Deleted Successfully..";
      }
       )
      }
      else{
        confirm.current.innerText="Something is going wrong write valid details.";
      }
     }
     
  ).catch((error)=>{
    confirm.current.innerText="Something is going wrong write valid details.";
    console.log(error);
   }) 
  
   
  }
    
  

  return (
   <>
      {/* Account Deletion Section */}
      <div className=" w-[100%]  bg-blue-700 ">
            <div className=" mx-auto w-[100%] mobile:max-w-[540px] ipadmini:max-w-[768px] ipadair:max-w-[960px] laptop:max-w-[1240px] py-6  ">
                
                <div className=" flex flex-wrap ipadmini:flex-row flex-col justify-center items-center gap-y-4">

                    <div className=" relative flex justify-center items-center ipadmini:w-1/2">
                      <div className="h-80 w-80 rounded-full border-2 border-dashed animate-spin"></div>
                      <img src={mencut} alt="" className="absolute top-22 laptop:left-40 left-10  h-96 w-96" />
                    </div>
                       {/* right side */}
                    <div className=" flex justify-center items-center flex-col gap-y-10 ipadmini:w-1/2">
                    <h1 className=' text-2xl font-bold text-white ps-2'>Do You Want to Delete Your Account </h1>
                    <form onSubmit={apicalling} className=" flex flex-col justify-center items-center gap-y-5 ">
                        <input type="email" className=" focus:outline-none py-1 px-1 h-12 w-64 border border-sky-600 bg-blue-200  placeholder-gray-950 " placeholder=' Enter valid email' onChange={(event)=>Setcredential((prev) => ({ ...prev, username: event.target.value }))}/>
                        <input type="password" className=" focus:outline-none py-1 px-1 h-12 w-64 border border-sky-600 bg-blue-200  placeholder-gray-950 " placeholder=' Enter Password'onChange={(event)=>Setcredential((prev)=>({...prev,password:event.target.value}))}/>
                        <button className="border py-1 px-4 ms-4 border-blue-900 rounded bg-white font-medium hover:scale-[1.07]" type='submit'>Send Request</button>
                        <div className=" text-white text-lg italic" ref={confirm}></div>
                
                      
                    </form>
                    </div>
                </div>


                </div>
                </div>
   </>
  )
}
