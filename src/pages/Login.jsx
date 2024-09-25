import { useContext } from "react";
import { AuthContext } from "../components/AuthInformation";
import { ColorRing } from "react-loader-spinner";
import github from "../assets/images/github.png";
import google from "../assets/images/google-symbol.png"
import LottieAnimation from "../components/LottieAnimation";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
//shadcn ui all components are here down below!!
import { AlertCircle } from "lucide-react";
import {
    Alert,
    AlertDescription,
    AlertTitle
} from "@/components/ui/alert"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


const Login = () => {

    const { user, loader, loginwithemail, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    const handletoRegister = () => {
        navigate("/main/register")
    }

    const handlethegoogle = () => {
        console.log("login with the google and the user of this site so far so right here")
    }

    const Alertcomponent = () => {
        return (
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                   Somethig is went worng !!
                </AlertDescription>
            </Alert>
        )
    }

    const handlethelogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        loginwithemail(email, password)
            .then(result => {
                setUser(result.user)
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
               <Alertcomponent></Alertcomponent>
            })
    }
    const handlthelogout = () => {
        console.log("handle the logout here")
    }

    const handlethegitlogin = () => {
        console.log("handing the git login here is the main thing for us and the all of us the main reason")
    }



    return (
        <div className="flex">
            <div className='px-10 pt-[8%] dark:bg-base-400 bg-white w-1/2'>
                <form className="card-body" onSubmit={handlethelogin} method="dialog">
                    <h3 className="text-center text-3xl font-semibold dark:text-[#378CE7] text-[#FF204E]">LOG-IN</h3>
                    <div className="form-control">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Email" name="email" required />
                    </div>
                    <div className="form-control">
                        <Label htmlFor="email">Password</Label>
                        <Input type="password" id="password" placeholder="Email" name="password" required />
                    </div>
                    <p className="text-center">Also log-in With :</p>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-center gap-2">
                            <img src={google} alt="" className="w-8 h-8 cursor-pointer border border-1 border-white rounded-full p-2" onClick={() => handlethegoogle()} />
                            <img src={github} alt="" className="w-8 h-8 cursor-pointer border border-1 border-white rounded-full p-1" onClick={() => handlethegitlogin()} />
                        </div>
                        <div className="form-control">
                            {
                                loader ? <ColorRing
                                    visible={true}
                                    height="80"
                                    width="80"
                                    ariaLabel="color-ring-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="color-ring-wrapper"
                                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                /> : user ? <button className="btn btn-primary" onClick={handlthelogout}>Log-Out</button> : <input type="submit" value="Log-In" className="btn btn-primary" />
                            }
                        </div>
                    </div>
                </form>
                <div className='text-center'>Are You new ? <button className="text-blue-500" onClick={handletoRegister}>Register</button></div>
            </div>

            <div className="p-10 bg-no-repeat max-h-screen w-1/2">
                <LottieAnimation></LottieAnimation>
            </div>

        </div>
    );
};

export default Login;