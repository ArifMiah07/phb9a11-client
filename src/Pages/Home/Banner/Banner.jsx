import NavBar from "../../Shared/NavBar/NavBar";
import bg_grid from '../../../assets/images/bg-grid.png'
import banner_bg from '../../../assets/images/banner-bg-1.png'
import banner_img from '../../../assets/images/banner-img.png'
import '../../../Styles/Fonts/GoogleFonts.css'
import { TbPlayerPlayFilled } from "react-icons/tb";


const Banner = () => {
    return (
        <div className='bg-[#914de1] h-fit  '>
            <div className="w-full relative ">
                <img className="h-[550px] md:h-[500px] lg:h-[650px] " src={bg_grid} alt="" />
                <img className='absolute  lg:w-full z-20 bottom-0 -md:bottom-10 lg:bottom-0  ' src={banner_bg} alt="" />
                <img className='absolute w-[190px] md:w-[260px] lg:w-[402px] z-10 bottom-0 right-0' src={banner_img} alt="" />
                <div className='absolute top-32 p-4 left:4 md:left:5 lg:left-8'>
                    <h1 className='text-[32px]   lg:text-[58px] nunito font-extrabold text-[#fff] '>Discover the Magic of <br />
                        Learning at <span className="text-[#FFD335] ">SmartKidz</span>
                    </h1>
                    <p  className='lg:text-[18px] inter font-medium mt-3 text-[#fff] '>
                    Welcome to Studyhub where each day brings new opportunities for <br /> discovery and growth. Our vibrant community is dedicated.
                    </p>
                    <div className='flex flex-col md:flex md:flex-row lg:flex lg:flex-row justify-start mt-8 gap-5 lg:gap-8 w-full h-full '>{/*#FFD335 */}
                        <div className='flex '>
                            <div className='watch-more py-3 px-6 w-fit  h-fit rounded-full bg-[#FFD335] hover:bg-[#fff]  '><span className='text-[#323232] font-bold nunito'>Explore Now</span></div> 
                        </div>
                        <div className=' flex items-center lg:justify-center gap-4 '>
                            <div className='watch-more flex items-center justify-center  w-fit  h-fit p-2  rounded-full bg-[#FFD335] hover:bg-[#fff]  '> 
                                <span className=''><TbPlayerPlayFilled className='text-3xl' /></span>
                            </div> <span  className='text-[#fff] font-bold nunito'>Watch Video</span>
                        </div>
                    </div>
                </div>
                <div className="w-full top-10 z-50 fixed">
                    <NavBar></NavBar>
                </div>
            </div>
            {/* <h1 className="star-wars-text text-7xl bg-red-500">this is home</h1> */}
            <div>
                
            </div>
        </div>
    );
};

export default Banner;