import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaYoutube } from "react-icons/fa";


const ProfileCard = () => {
    return (
        <div style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}} className="p-4 mx-auto inter ">
            <div className=" gap-6 flex flex-col md:flex-row items-center space-x-4 mb-4">
                <div className="w-full ">
                    <img style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}} src="https://html.themewant.com/studykids/assets/images/course/28.jpg" alt="Profile" className="w-full h-full" />
                </div>
                <div>
                    <h2 className="text-xl font-semibold">William U.</h2>
                    <p className="text-gray-600">Advanced Educator</p>
                    <div className="flex items-center mt-2">
                        <span className="text-yellow-500 text-lg font-bold">4.5</span>
                        <span className="ml-2 text-sm text-gray-500">1350 Students</span>
                        <span className="ml-2 text-sm text-gray-500">26 Courses</span>
                    </div>
                    <p className="text-gray-600 mt-2">
                        William U. Peña, MBA, CISSP No. 349867, is a former college professor and the lead instructor at Dion Training Solutions.
                    </p>
                    <div className="flex items-center py-4 gap-4">
                        <p>Follow</p>
                        <a href="#" className="text-gray-600 hover:text-[#FFA41C] "><FaFacebook></FaFacebook></a>
                        <a href="#" className="text-gray-600 hover:text-[#FFA41C] "><FaInstagram></FaInstagram></a>
                        <a href="#" className="text-gray-600 hover:text-[#FFA41C] "><FaLinkedin></FaLinkedin> </a>
                        <a href="#" className="text-gray-600 hover:text-[#FFA41C] "><FaPinterest></FaPinterest></a>
                        <a href="#" className="text-gray-600 hover:text-[#FFA41C] "><FaYoutube></FaYoutube></a>
                    </div>
                </div>
            </div>
            <div className="border-t pt-4">
                <div style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}} className="flex flex-col items-center mt-1 p-12 w-full h-full">
                    <div className="text-7xl font-semibold">
                        <h1>4.5</h1>
                    </div>
                    <span className="text-lg text-yellow-500">★★★★☆</span>
                    <span className="text-lg ml-2 text-gray-500">Total 2 Ratings</span>
                </div>
                <div className="mt-2 p-4">
                    <div className="flex items-center">
                        <span className="w-4">5</span>
                        <div className="w-full h-4 bg-gray-200 rounded-full mx-2">
                            <div className="h-full bg-yellow-500 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                        <span className="w-12 text-sm text-gray-500">25 Rating</span>
                    </div>
                    <div className="flex items-center mt-2">
                        <span className="w-4">4</span>
                        <div className="w-full h-4 bg-gray-200 rounded-full mx-2">
                            <div className="h-full bg-yellow-400 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                        <span className="w-12 text-sm text-gray-500">20 Rating</span>
                    </div>
                    <div className="flex items-center mt-2">
                        <span className="w-4">3</span>
                        <div className="w-full h-4 bg-gray-200 rounded-full mx-2">
                            <div className="h-full bg-yellow-300 rounded-full" style={{ width: '50%' }}></div>
                        </div>
                        <span className="w-12 text-sm text-gray-500">15 Rating</span>
                    </div>
                    <div className="flex items-center mt-2">
                        <span className="w-4">2</span>
                        <div className="w-full h-4 bg-gray-200 rounded-full mx-2">
                            <div className="h-full bg-yellow-200 rounded-full" style={{ width: '20%' }}></div>
                        </div>
                        <span className="w-12 text-sm text-gray-500">5 Rating</span>
                    </div>
                    <div className="flex items-center mt-2">
                        <span className="w-4">1</span>
                        <div className="w-full h-4 bg-gray-200 rounded-full mx-2">
                            <div className="h-full bg-yellow-100 rounded-full" style={{ width: '10%' }}></div>
                        </div>
                        <span className="w-12 text-sm text-gray-500">1 Rating</span>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="border-t pt-4 mt-4">
                    <div className="flex items-center mb-4">
                        <img src="https://html.themewant.com/studykids/assets/images/course/28.jpg" alt="User" className="rounded-full w-12 h-12 mr-4" />
                        <div>
                            <h4 className="text-md font-semibold">William U.</h4>
                            <div className="flex items-center">
                                <span className="text-yellow-500">★★★★☆</span>
                                <span className="ml-2 text-sm text-gray-500">a week ago</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-700">
                        I still have a lot of studying to do using this course and the other practice exams, but so far it is been great! I have not taken my Security+ exam as well, so I will update this at a later time.
                    </p>
                </div>
                <div className="border-t pt-4 mt-4">
                    <div className="flex items-center mb-4">
                        <img src="https://html.themewant.com/studykids/assets/images/course/29.jpg" alt="User" className="rounded-full w-12 h-12 mr-4" />
                        <div>
                            <h4 className="text-md font-semibold">William U.</h4>
                            <div className="flex items-center">
                                <span className="text-yellow-500">★★★★☆</span>
                                <span className="ml-2 text-sm text-gray-500">a week ago</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-700">
                        I still have a lot of studying to do using this course and the other practice exams, but so far it is been great! I have not taken my Security+ exam as well, so I will update this at a later time.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
