import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/auth/login.jpg';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from '../../Hooks/useAuth';
import NavBar from '../Shared/NavBar/NavBar';

const LogIn = () => {
    const { signIn, signInWithGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            await signIn(email, password);
            navigate(location.state?.from || '/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className=" ">
            <div>
                <NavBar></NavBar>
            </div>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left lg:w-1/2">
                    <img src={login} alt="" />
                </div>
                <div className="card shrink-0 w-full lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="bg-[#A6C9FF] card-body">
                        <h1 className="text-3xl font-bold text-[#444444] text-center">Login</h1>
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
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <div className="flex flex-col items-center gap-6">
                            <h1>Or Sign In with</h1>
                            <div className="flex gap-6">
                                <button type="button" className="btn btn-circle" onClick={signInWithGoogle}><FcGoogle /></button>
                                <button className="btn btn-circle"><FaFacebook /></button>
                                <button className="btn btn-circle"><FaLinkedin /></button>
                            </div>
                        </div>
                    </form>
                    <div>
                        <p className="text-center">Do not have an account? <Link to="/register" className="text-orange-400">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
