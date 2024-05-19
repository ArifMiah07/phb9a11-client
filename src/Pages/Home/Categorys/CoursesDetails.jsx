import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedinIn, FaPhone, FaPinterest, FaYoutube } from "react-icons/fa";
import Nav from "../../Shared/NavBar/Nav";
import SubBanner from "../../../Components/SubBanner/SubBanner";
import CourseOverview from "./CourseOverview";
// import ClassOverview from "../FindClasses/ClassOverview";

// 

const CoursesDetails = () => {
    return (
        <div className="w-full">
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
                    <h1 className=" text-4xl font-bold ml-12">Program Details!</h1>
                    {/* <p>{data.serial}</p> */}
                </div>
            </div>
            <div className="my-12">
                <CourseOverview></CourseOverview>
            </div>
            {/* <div className="my-12 ">

            </div> */}
            
        </div>
    );
};

export default CoursesDetails;