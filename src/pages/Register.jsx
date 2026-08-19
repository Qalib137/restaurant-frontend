import AuthSideImage from "../components/Auth/AuthSideImage"
import RegisterForm from "../components/Auth/RegisterForm"

function Register(){

    return(

    <div className="flex  rounded-lg p-2.5 gap-x-2.5 bg-white">
<RegisterForm/>,
<AuthSideImage/>
    </div>
    )
}

export default Register