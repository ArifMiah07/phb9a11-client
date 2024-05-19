import { Link } from "react-router-dom";

import '../../../Styles/Fonts/GoogleFonts.css'


const AboutUsBanner = () => {
    return (
        <div className=' bg-[#FFEFE5] py-20 w-full flex flex-col md:flex md:flex-col lg:flex lg:flex-row-reverse justify-between gap-6 '>
            <div className='p-6 flex justify-center items-center  lg:w-1/2'>
                <img src="https://html.themewant.com/studykids/assets/images/about/about-02.png" alt="" />
            </div>
            <div className='  flex flex-col justify-center items-center md:flex md:flex-col lg:flex lg:flex-col'>
                <div className='text-center'>
                    <h1 className='font-semibold mt-6 text-[20px] inter flex items-center justify-center nunito'><span><img src="https://html.themewant.com/studykids/assets/images/banner/title-img.svg" alt="" /></span> About us</h1>
                    <h1 className='nunito text-[48px] my-5 font-extrabold nunito '>Discover Our Mission for <br />SmartKizs Academy</h1>
                    <p className='inter text-[rgb(115_116_119)] mb-6 inter'>Welcome to Smartkiz, where education meets inspiration, and every <br />
                        childs journey is a story of growth and discovery.</p>
                </div>
                <div className='flex w-full flex-col gap-6 p-6'>
                    <ul className="grid grid-cols-2 inter gap-4">
                        <li>✔ Educational Institutions</li>
                        <li>✔ Educational Materials</li>
                        <li>✔ Parents and Communities</li>
                        <li>✔ Online Learning Platforms</li>
                        <li>✔ Education Departments Institutions</li>
                        <li>✔ Nonprofit Organizations</li>
                    </ul>
                </div>
                <div className='my-12'>
                    <Link to={'/about'}>
                    <button className='aboutBorder bg-yellow-400 text-gray-700 px-4 py-2 rounded-3xl hover:bg-yellow-500'>About More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUsBanner;