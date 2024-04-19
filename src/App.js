import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Routes,Route } from "react-router-dom";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import DeleteAccount from "./Components/DeleteAccount";


function App() {
  return (
   <>
   <div className=" bg-gradient-to-l from-rose-100 to-teal-100">
  
    <Navbar/>

   
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}></Route>
      <Route path='/Delete' element={<DeleteAccount/>}></Route>
      
    </Routes>
   

   <Footer/>
   </div>
   </>
  );
}

export default App;
