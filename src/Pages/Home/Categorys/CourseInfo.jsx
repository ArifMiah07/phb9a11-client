import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaYoutube } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const CourseInfo = () => {
    return (
        <div style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}} className=" p-4 max-w-md mx-auto bg-white">
            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">A course by</h2>
                <div className="flex items-center mb-2">
                    <img src="https://html.themewant.com/studykids/assets/images/course/author-06.png" alt="Dr. Angela Yu" className="rounded-full w-12 h-12 mr-4" />
                    <span>Dr. Angela Yu</span>
                </div>
                <div className="flex items-center">
                    <img src="https://html.themewant.com/studykids/assets/images/course/author-06.png" alt="Dr. Angela Yu" className="rounded-full w-12 h-12 mr-4" />
                    <span>Dr. Angela Yu</span>
                </div>
            </div>

            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Material Includes</h2>
                <ul className="list-inside space-y-2">
                    <li className="flex items-center gap-2"><span><IoIosCheckmarkCircleOutline /> </span> Flexible Deadlines</li>
                    <li className="flex items-center gap-2"><span><IoIosCheckmarkCircleOutline /> </span> Hours of live-demo</li>
                    <li className="flex items-center gap-2"><span><IoIosCheckmarkCircleOutline /> </span> 200+ downloadable resources</li>
                </ul>
            </div>

            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Requirements</h2>
                <ul className="list-inside space-y-2">
                    <li className="flex items-center gap-2"><span><IoIosCheckmarkCircleOutline /> </span> Access to Adobe Premiere Pro</li>
                    <li className="flex items-center gap-2"><span><IoIosCheckmarkCircleOutline /> </span> Familiarity with computers and other devices</li>
                </ul>
            </div>

            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Tags</h2>
                <div className="flex flex-wrap gap-2">
                    <span className=" bg-transparent hover:bg-[#FFD335] text-gray-700 px-3 py-1 border text-sm">Course</span>
                    <span className=" bg-transparent hover:bg-[#FFD335] text-gray-700 px-3 py-1 border text-sm">Design</span>
                    <span className=" bg-transparent hover:bg-[#FFD335] text-gray-700 px-3 py-1 border text-sm">Web development</span>
                    <span className=" bg-transparent hover:bg-[#FFD335] text-gray-700 px-3 py-1 border text-sm">Business</span>
                    <span className=" bg-transparent hover:bg-[#FFD335] text-gray-700 px-3 py-1 border text-sm">UI/UX</span>
                    <span className=" bg-transparent hover:bg-[#FFD335] text-gray-700 px-3 py-1 border text-sm">Financial</span>
                </div>
            </div>

            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Share</h2>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-gray-900"><FaFacebook></FaFacebook></a>
                    <a href="#" className="text-gray-600 hover:text-gray-900"><FaInstagram></FaInstagram> </a>
                    <a href="#" className="text-gray-600 hover:text-gray-900"><FaLinkedin></FaLinkedin> </a>
                    <a href="#" className="text-gray-600 hover:text-gray-900"><FaPinterest></FaPinterest> </a>
                    <a href="#" className="text-gray-600 hover:text-gray-900"><FaYoutube></FaYoutube> </a>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-2">Audience</h2>
                <p>Suitable for beginners and intermediates</p>
            </div>
        </div>
    );
};

export default CourseInfo;
