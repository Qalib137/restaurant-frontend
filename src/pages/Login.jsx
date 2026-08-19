
import LoginForm from '../components/Auth/LoginForm.jsx';
import AuthSideImage from '../components/Auth/AuthSideImage.jsx';

function Login() {

    

    return (
        <div className="flex  rounded-lg p-2.5 gap-x-2.5 bg-white">

            <AuthSideImage />,
            <LoginForm />


        </div>
    );
}

export default Login;