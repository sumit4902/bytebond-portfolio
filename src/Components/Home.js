import image from './vedio_calling_phone_image-removebg-preview.png'
import image2 from './sumitpatel.png'
import Avtar1 from'./Avtar1.png'
import Avtar2 from'./Avtar2.png'
import Avtar3 from'./Avtar3.png'
import Avtar4 from'./Avtar4.png'
import Step1 from './Step1.png'
import Step2 from './Step2.png'
import Step3  from './Step3.png'
import Arrow from './RightArrow.png'
import DownArrow from './DownArrow.png'
import rohitphoto from './RohitPhoto.jpeg'

export default function Home() {
 

  return (
    <> 

          {/*  Hero section */}
         <div className=" w-[100%] ">
            <div className=" mx-auto w-[100%] mobile:max-w-[540px] ipadmini:max-w-[768px] ipadair:max-w-[960px] laptop:max-w-[1240px]  ">

                 <div className=" flex flex-wrap flex-col ipadmini:flex-row justify-evenly  ">
                    {/* Left Hero section */}
             <div className=" ipadmini:w-1/2  ipadmini:min-h-[550px] flex flex-col justify-center items-center ">
             <div className="text-[40px] ipadmini:text-6xl font-semibold pb-3 ">Excellent  App For </div>
            
             <div className="text-[40px] ipadmini:text-6xl font-semibold">Your Conversation  </div>
             <br />
             <div className=" text-xl px-14">Revolutionize Your Conversations with Our Exceptional Video Calling App</div>
               <br />
               <br />
             <a  href='/' className='border-2 border-emerald-950 py-2 px-10 hover:bg-cyan-800 hover:text-white text-[20px] hover:shadow-lg shadow-slate-400 transition'>Download Now</a>
             
             </div>

             {/* Right Hero section */}
             <div className="  ipadmini:w-1/2 min-h-[550px] flex items-center justify-center ">
               <img src={image} alt="Not Found" className=" min-h-[400px]" />
               </div>
               </div>
            
            </div>
         </div>

           <br />

          

     {/*  CustomerCount */}
     <div className=" w-[100%] bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-rose-100 to-teal-100">
            <div className=" mx-auto w-[100%] mobile:max-w-[540px] ipadmini:max-w-[768px] ipadair:max-w-[960px] laptop:max-w-[1240px] py-6 ">
                <div className="text-center text-3xl font-semibold py-3 ">Our Members Count</div>
                <div className="text-center text-xl font-medium py-4">About Our ByteBond</div>

                <div className=" flex ipadmini:flex-row flex-col flex-wrap gap-x-4 gap-y-4 justify-center items-center">

                <div className=" flex flex-col justify-center items-center gap-y-2 border p-10 ipadmini:p-6 bg-fuchsia-200 hover:shadow-2xl transition-all shadow-slate-500 ">
                    <img src={Avtar1} alt="" className="h-[120px] w-[120px]" />
                    <span className=" h-1 w-28 bg-red-500 mt-2"></span>
                    <span className=" text-lg font-medium min-w-[200px] text-center ">2700</span>
                    <span className="min-w-[200px] text-center">Member in Total</span>

                </div>

                <div className=" flex flex-col justify-center items-center gap-y-2 border p-10 ipadmini:p-6 bg-fuchsia-200 hover:shadow-2xl transition-all shadow-slate-500 ">
                    <img src={Avtar2} alt="" className="h-[120px] w-[120px]" />
                    <span className=" h-1 w-28 bg-red-500 mt-2"></span>
                    <span className=" text-lg font-medium min-w-[200px] text-center ">1000</span>
                    <span className="min-w-[200px] text-center">Members Online</span>

                </div>

                <div className=" flex flex-col justify-center items-center gap-y-2 border p-10 ipadmini:p-6 bg-fuchsia-200 hover:shadow-2xl transition-all shadow-slate-500 ">
                    <img src={Avtar3} alt="" className="h-[120px] w-[120px]" />
                    <span className=" h-1 w-28 bg-red-500 mt-2"></span>
                    <span className=" text-lg font-medium min-w-[200px] text-center ">1700</span>
                    <span className="min-w-[200px] text-center">Men Online</span>

                </div>

                <div className=" flex flex-col justify-center items-center gap-y-2 border p-10 ipadmini:p-6 bg-fuchsia-200 hover:shadow-2xl transition-all shadow-slate-500 ">
                    <img src={Avtar4} alt="" className="h-[120px] w-[120px]" />
                    <span className=" h-1 w-28 bg-red-500 mt-2"></span>
                    <span className=" text-lg font-medium min-w-[200px] text-center ">1000</span>
                    <span className="min-w-[200px] text-center">Women Online</span>

                </div>
                </div>
            
              </div>
              </div>

             {/*  Step Section */}

              <div className=" w-[100%] bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-rose-100 to-teal-100">
            <div className=" mx-auto w-[100%] mobile:max-w-[540px] ipadmini:max-w-[768px] ipadair:max-w-[960px] laptop:max-w-[1240px] py-6 ">
                <div className="text-center text-3xl font-semibold py-3 ">How you can use ?</div>
                <div className="text-center text-xl font-medium py-4">Steps to Use</div>

                <div className=" flex ipadmini:flex-row flex-col flex-wrap gap-x-4 gap-y-3 justify-center items-center">

                <div className=" flex flex-col justify-center items-center gap-y-2 border p-10 ipadmini:p-6 bg-fuchsia-200 hover:shadow-2xl transition-all shadow-slate-500 ">
                    <img src={Step1} alt="" className="h-[120px] w-28" />
                    <span className=" h-1 w-28 bg-red-500 mt-2"></span>
                    <span className=" text-lg font-medium min-w-[200px] text-center">Create Account</span>
                    <span className="w-52 text-center">Create Account with valid Rquired Details</span>

                </div>

                <div className="hidden ipadmini:block">
                    <img src={Arrow } alt="" className=" h-24 w-20 animate-ping" />
                </div>
                 <div className="block ipadmini:hidden ">
                    <img src={DownArrow} alt="" className="h-24 w-27 animate-ping" />
                 </div>

                <div className=" flex flex-col justify-center items-center gap-y-2 border p-10 ipadmini:p-6 bg-fuchsia-200 hover:shadow-2xl transition-all shadow-slate-500 ">
                    <img src={Step2} alt="" className="h-[120px] w-28" />
                    <span className=" h-1 w-28 bg-red-500 mt-2"></span>
                    <span className=" text-lg font-medium min-w-[200px] text-center ">Find Matches</span>
                    <span className="w-52 text-center">Select Male Or Female Member</span>

                </div>

                <div className="hidden ipadmini:block">
                    <img src={Arrow } alt="" className=" h-24 w-20 animate-ping" />
                </div>
                 <div className="block ipadmini:hidden ">
                    <img src={DownArrow} alt="" className="h-24 w-27 animate-ping" />
                 </div>

                <div className=" flex flex-col justify-center items-center gap-y-2 border p-10 ipadmini:p-6  bg-fuchsia-200 hover:shadow-2xl transition-all shadow-slate-500 ">
                    <img src={Step3} alt="" className="h-[120px] w-28" />
                    <span className=" h-1 w-28 bg-red-500 mt-2"></span>
                    <span className=" text-lg font-medium min-w-[200px] text-center">Start Calling</span>
                    <span className="w-48 text-center">Click on start Button and wait </span>

                </div>

                </div>
            
              </div> 
              </div>

                {/*  Developer Section */}
          <div className="pt-12 pb-12 w-[100%] bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-rose-100 to-teal-100" id="developer-section">
            <div className=" mx-auto w-[100%] mobile:max-w-[540px] ipadmini:max-w-[768px] ipadair:max-w-[960px] laptop:max-w-[1240px]  ">
              
              <div className=" flex flex-wrap flex-col ipadmini:flex-row justify-evenly items-center ">

                <div className="   ipadmini:w-1/2 min-h-[400px] flex justify-center items-center">
                    
                    <img src={image2} alt="" className=" h-[25rem] w-[330px] border-2 rounded-3xl  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-500 to-yellow-100" />
                </div>

                <div className=" flex flex-col justify-center items-start ipadmini:w-1/2 min-h-[400px]  p-7 gap-y-4">
                <span className="text-lg text-blue-700 font-medium">About FullStack Developer</span>
                <div className=" text-5xl font-semibold ">Sumit patel</div>
                <div className="text-xl ">Hello! I'm Sumit Patel , As a B-Tech student, I'm passionate about technology and the boundless world of full Stack development. I'm always open to networking and exploring new opportunities. Feel free to connect with me to discuss the exciting world of technology and development. Let's learn and grow together!.</div>
                <div className=" flex flex-wrap flex-row gap-x-4 gap-y-2 ">
                    <span className=" border rounded-md py-2 px-5 shadow-md">Reactjs </span>
                    <span className="border rounded-md py-2 px-5 shadow-md ">Java SpringBoot</span>
                    <span className="border rounded-md py-2 px-5 shadow-md">java</span>
                    <span className="border rounded-md py-2 px-5 shadow-md">javascript</span>
                    <span className="border rounded-md py-2 px-5 shadow-md">HTML5</span>
                    <span className="border rounded-md py-2 px-5 shadow-md">TailwindCSS</span>
                </div>
                </div>
              </div>

              <br />

<div className=" flex flex-wrap flex-col ipadmini:flex-row-reverse justify-evenly items-center">

<div className="   ipadmini:w-1/2 min-h-[400px] flex justify-center items-center">
    
    <img src={rohitphoto} alt="" className=" h-[25rem] w-[330px] border-2 rounded-3xl  bg-sky-300" />
</div>

<div className=" flex flex-col justify-center items-start ipadmini:w-1/2 min-h-[400px]  p-7 gap-y-4">
<span className="text-lg text-blue-700 font-medium">About Android Developer</span>
<div className=" text-5xl font-semibold ">Rohit Soni</div>
<div className="text-xl ">I am an LNCT BTech(IT) student with a passion for technology and a versatile skill set encompassing C++, Python, and Java programming. I specialize in Flutter app development and have a strong foundation in cybersecurity, Linux administration, and OSINT (Open-source intelligence). Additionally, I thrive in the realm of Capture The Flag (CTF) challenges, always seeking to expand my knowledge and expertise in the dynamic world of IT. Let's connect and explore opportunities to collaborate and innovate!</div>
<div className=" flex flex-wrap flex-row gap-x-4 gap-y-2 ">
    <span className=" border rounded-md py-2 px-5 shadow-md">Flutter </span>
    <span className="border rounded-md py-2 px-5 shadow-md ">Firebase</span>
    
</div>
</div>
</div>
   
           </div>
           </div>


             
              
    </>
  )
}
