import { Outlet } from "react-router-dom"
import bg from "../assets/images/AuthBackground.png"

function AuthLayout(){

  return(
    <div className="bg-center bg-cover min-h-screen flex justify-center items-center" style={{backgroundImage:`url(${bg})`}}>
    <Outlet/>


    </div>
  )  
}

export default AuthLayout