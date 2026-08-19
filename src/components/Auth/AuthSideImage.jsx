import img from "../../assets/images/LoginPageSide.png";


function AuthSideImage(){
    return(
        <div className="hidden md:flex w-1/2 items-center justify-center">
                <img 
                  src={img} 
                  alt="Login illustration" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
    )
}



export default AuthSideImage;