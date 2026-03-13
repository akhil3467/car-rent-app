import { Route,Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import CarDetails from "./page/CarDetails"
import Home from "./page/Home"
import MyBooking from "./page/MyBooking"
import Cars from "./page/Cars"
import Banner from "./components/Banner"
const App=()=>{
  return(

<div>
        <Navbar/>
       
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/car-details/:id"element={<CarDetails/>}/>
        <Route path="/cars"element={<Cars/>}/>
        <Route path="/my-booking"element={<MyBooking/>}/>
      </Routes>

</div>

  );
};
export default App