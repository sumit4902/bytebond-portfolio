import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Routes,Route } from "react-router-dom";
import PrivacyPolicy from "./Components/PrivacyPolicy";


function App() {
  return (
   <>
   <div className=" bg-gradient-to-l from-rose-100 to-teal-100">
  
    <Navbar/>

   
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}></Route>
    </Routes>
   

   <Footer/>
   </div>
   </>
  );
}

export default App;
