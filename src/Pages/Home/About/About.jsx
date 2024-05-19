import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedinIn, FaPhone, FaPinterest, FaYoutube } from "react-icons/fa";
import SubBanner from "../../../Components/SubBanner/SubBanner";
import Nav from "../../Shared/NavBar/Nav";
import ExpertTeachers from "../ExpertTeachers/ExpertTeachers";
import Testimonials from "../Testimonials/Testimonials";
import AboutUs from "./AboutUs";
import AboutUsBanner from "./AboutUsBanner";
import AboutUsGallery from "./AboutUsGallery";
import { Helmet } from "react-helmet-async";


const About = () => {
    return (
        <div className="w-full">
            <Helmet>
                <title>About</title>
            </Helmet>
            <div className="hidden md:block lg:block">
                <div className=" bg-purple-500 text-white flex justify-between items-center p-2">
                    {/* Contact Info */}
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                            <FaEnvelope className="h-5 w-5" />
                            <span>info@Smartkidz.com</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <FaPhone className="h-5 w-5" />
                            <span>+61 012 012 445</span>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-300">
                            <FaFacebook className="h-5 w-5" />
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            <FaInstagram className="h-5 w-5" />
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            <FaLinkedinIn className="h-5 w-5" />
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            <FaPinterest className="h-5 w-5" />
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            <FaYoutube className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <Nav></Nav>
            </div>
            <div className="relative">
                <SubBanner></SubBanner>
                <div className="absolute flex items-center w-full h-full text-white top-0 bg-gradient-to-r from-[#151515bf] to-[rgba(21, 21, 21, 0.00) 100%)]  ] ">
                {/* <p>{data._id}</p> */}
                <h1 className=" text-4xl font-bold ml-12">About Us!</h1>
                {/* <p>{data.serial}</p> */}
                </div>
            </div>
            <AboutUs></AboutUs>
            <AboutUsBanner></AboutUsBanner>
            <ExpertTeachers></ExpertTeachers>
            <AboutUsGallery></AboutUsGallery>
            <div>
                <Testimonials></Testimonials>
                <div className="bg-[#7763E5] p-12 flex justify-evenly items-center text-white">
                    <div className="border-2 py-6 px-5">
                        <h1 className="text-4xl font-black nunito">
                        15+
                        </h1>
                        <p>Expert Teacher</p>
                    </div>
                    <div className="border-2 py-6 px-5">
                        <h1 className="text-4xl font-black nunito">
                            244+
                        </h1>
                        <p>Completed Courses</p>
                    </div>
                    <div className="border-2 py-6 px-5">
                        <h1 className="text-4xl font-black nunito">
                            455+
                        </h1>
                        <p>Students Learner</p>
                    </div>
                    <div className="border-2 py-6 px-5">
                        <h1 className="text-4xl font-black nunito">
                            241+
                        </h1>
                        <p>Students Enrolled</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;