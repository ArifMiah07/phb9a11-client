import { Link, useLocation, useNavigate } from "react-router-dom";
import register from '../../assets/images/auth/register.jpg';
import { FaEye, FaEyeSlash, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext, useId, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import NavBar from "../Shared/NavBar/NavBar";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { createUser, signInWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handleCreateUser = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const userInfo = {
            name, 
            email, 
            password
        }
        // console.log(userInfo);
        
        createUser(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            navigate(location.state?.from || '/');
            toast.success('Registration Successful!')
            // console.log(user)
        })
        .catch(error => toast.error(error))
    };
    
    const handleGoogleSignUp = () => {
            signInWithGoogle()
            .then(result => {
                console.log(result.user.reloadUserInfo);
                toast.success("Login successful!");
                navigate(location.state?.from || '/');
            }) 
            .catch(error => {
                toast.error(error.message);
                console.error(error);
            })
    };
    return (
        <div className="  ">
            
            <div>
                <NavBar></NavBar>
            </div>
            <ToastContainer />
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left lg:w-1/2">
                    <img src={register} alt="" />
                </div>
                <div className="card shrink-0 w-full lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleCreateUser} className="bg-[#00DFC0] card-body">
                        <h1 className="text-3xl font-bold text-[#444444] text-center">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" required />
                            <span className="absolute inset-y-0 right-12 -bottom-10 flex items-center cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                        <div className="flex flex-col items-center gap-6">
                            <h1>Or Sign In with</h1>
                            <div className="flex gap-6">
                                <button type="button" className="btn btn-circle" onClick={handleGoogleSignUp}><FcGoogle /></button>
                                <button className="btn btn-circle"><FaFacebook /></button>
                                <button className="btn btn-circle"><FaLinkedin /></button>
                            </div>
                        </div>
                    </form>
                    <div className="mb-4">
                        <p className="text-center">Already have an account? <Link to="/login">Log In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
